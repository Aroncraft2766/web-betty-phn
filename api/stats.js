// api/stats.js — Métricas agregadas para el Panel Axonia. Protegido por token.
//   GET /api/stats?site=<id>&days=7   -> métricas de un sitio
//   GET /api/stats?days=7             -> resumen de todos los sitios
// Generado por Panel Axonia.
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const READ = process.env.STATS_READ_TOKEN || '';

async function pipeline(cmds) {
  const r = await fetch(URL + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error('kv ' + r.status);
  return (await r.json()).map((d) => (d && 'result' in d ? d.result : null));
}

function toInt(v) { const n = parseInt(v, 10); return Number.isFinite(n) ? n : 0; }
function dayKey(d) { return d.toISOString().slice(0, 10); }
function lastNDays(n) {
  const out = []; const now = Date.now();
  for (let i = n - 1; i >= 0; i -= 1) out.push(dayKey(new Date(now - i * 86400000)));
  return out;
}

async function siteStats(site, days) {
  const dk = lastNDays(days);
  const out = await pipeline([['GET', 'v:' + site + ':total'], ...dk.map((d) => ['GET', 'v:' + site + ':d:' + d])]);
  const total = toInt(out[0]);
  const series = dk.map((date, i) => ({ date, count: toInt(out[i + 1]) }));
  const today = series.length ? series[series.length - 1].count : 0;
  const sum = series.reduce((a, s) => a + s.count, 0);
  return { site, total, today, days: series.length, sum, series };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (READ) {
    const b = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
    const p = b || (req.query && req.query.token) || '';
    if (p !== READ) return res.status(401).json({ error: 'no-autorizado' });
  }
  if (!URL || !TOKEN) return res.status(503).json({ error: 'kv-no-configurado' });
  try {
    const days = Math.min(90, Math.max(1, toInt((req.query && req.query.days) || 7) || 7));
    const site = String((req.query && req.query.site) || '').toLowerCase().trim();
    if (site) return res.status(200).json(await siteStats(site, days));
    const members = await pipeline([['SMEMBERS', 'sites']]);
    const sites = members[0] || [];
    const all = await Promise.all(sites.sort().map((s) => siteStats(s, days)));
    const totals = all.reduce(
      (a, s) => ({ total: a.total + s.total, today: a.today + s.today, sum: a.sum + s.sum }),
      { total: 0, today: 0, sum: 0 },
    );
    return res.status(200).json({ days, totals, sites: all });
  } catch (e) {
    return res.status(500).json({ error: 'error-interno' });
  }
};
