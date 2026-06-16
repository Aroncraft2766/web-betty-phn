// api/track.js — Registra una visita en Upstash KV (beacon de imagen 1x1).
// Generado por Panel Axonia. No depende de ningún SDK. Nunca rompe la página.
const SITE_RE = /^[a-z0-9][a-z0-9-]{1,48}$/;
const DAY_TTL = 60 * 60 * 24 * 40; // 40 días de retención por día
const BOT_RE = /bot|crawler|spider|crawling|preview|facebookexternalhit|slurp|bingpreview/i;
const GIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
const URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

async function pipeline(cmds) {
  const r = await fetch(URL + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error('kv ' + r.status);
  return r.json();
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  const pixel = () => { res.setHeader('Content-Type', 'image/gif'); res.status(200).end(GIF); };
  try {
    const site = String((req.query && req.query.site) || '').toLowerCase().trim();
    if (!SITE_RE.test(site)) return pixel();
    if (BOT_RE.test(req.headers['user-agent'] || '')) return pixel();
    if (!URL || !TOKEN) return pixel();
    const day = new Date().toISOString().slice(0, 10);
    const dk = 'v:' + site + ':d:' + day;
    await pipeline([
      ['INCR', 'v:' + site + ':total'],
      ['INCR', dk],
      ['EXPIRE', dk, String(DAY_TTL)],
      ['SADD', 'sites', site],
    ]);
  } catch (_) { /* el tracking jamás afecta al visitante */ }
  return pixel();
};
