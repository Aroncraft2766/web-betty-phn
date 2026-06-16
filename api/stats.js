// api/stats.js — Métricas estilo GA para el Panel Proher Natura. Protegido por token.
//   GET /api/stats?site=<id>&days=7  -> métricas completas de un sitio
//   GET /api/stats?days=7            -> resumen de todos los sitios
// Generado por Panel Proher Natura.
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const READ = process.env.STATS_READ_TOKEN || '';

async function pipeline(cmds) {
  const r = await fetch(KV_URL + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + KV_TOKEN, 'Content-Type': 'application/json' },
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

// HGETALL plano [f,v,f,v] -> [{name,count}] ordenado desc.
function hashTop(arr, limit) {
  const out = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i + 1 < arr.length; i += 2) out.push({ name: String(arr[i]), count: toInt(arr[i + 1]) });
  }
  out.sort((a, b) => b.count - a.count);
  return limit ? out.slice(0, limit) : out;
}

async function siteStats(site, days) {
  const dk = lastNDays(days);
  const cmds = [
    ['GET', 'v:' + site + ':total'],
    ['GET', 'pv:' + site + ':total'],
    ...dk.map((d) => ['GET', 'v:' + site + ':d:' + d]),
    ...dk.map((d) => ['GET', 'pv:' + site + ':d:' + d]),
    ['HGETALL', 'pages:' + site],
    ['HGETALL', 'ref:' + site],
    ['HGETALL', 'dev:' + site],
    ['HGETALL', 'geo:' + site],
  ];
  const out = await pipeline(cmds);
  let i = 0;
  const visitsTotal = toInt(out[i++]);
  const pvTotal = toInt(out[i++]);
  const series = dk.map((date) => ({ date, count: toInt(out[i++]) }));
  const pvSeries = dk.map((date) => ({ date, count: toInt(out[i++]) }));
  const pages = hashTop(out[i++], 10);
  const sources = hashTop(out[i++], 8);
  const devices = hashTop(out[i++], 0);
  const countries = hashTop(out[i++], 8);
  const sum = series.reduce((a, s) => a + s.count, 0);
  return {
    site,
    total: visitsTotal,
    today: series.length ? series[series.length - 1].count : 0,
    days: series.length,
    sum,
    series,
    pageviews: {
      total: pvTotal,
      today: pvSeries.length ? pvSeries[pvSeries.length - 1].count : 0,
      sum: pvSeries.reduce((a, s) => a + s.count, 0),
      series: pvSeries,
    },
    pages, sources, devices, countries,
  };
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
  if (!KV_URL || !KV_TOKEN) return res.status(503).json({ error: 'kv-no-configurado' });
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
