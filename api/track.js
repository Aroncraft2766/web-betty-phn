// api/track.js — Registra vista de página + sesión + desgloses (página, fuente,
// dispositivo, país) en Upstash KV. Beacon 1x1. Generado por Panel Proher Natura.
const SITE_RE = /^[a-z0-9][a-z0-9-]{1,48}$/;
const DAY_TTL = 60 * 60 * 24 * 60; // 60 días de retención por día
const BOT_RE = /bot|crawler|spider|crawling|preview|facebookexternalhit|slurp|bingpreview/i;
const GIF = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

async function pipeline(cmds) {
  const r = await fetch(KV_URL + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + KV_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error('kv ' + r.status);
  return r.json();
}

function deviceOf(ua) {
  ua = String(ua || '');
  if (/iPad|Tablet/i.test(ua)) return 'Tableta';
  if (/Mobile|Android|iPhone/i.test(ua)) return 'Movil';
  return 'Escritorio';
}

function sourceOf(ref) {
  if (!ref) return 'Directo';
  let host = '';
  try { host = new URL(ref).hostname.replace(/^www\./, ''); } catch (e) { return 'Directo'; }
  if (/google\./i.test(host)) return 'Google';
  if (/facebook|fb\.com|fb\.me/i.test(host)) return 'Facebook';
  if (/instagram/i.test(host)) return 'Instagram';
  if (/whatsapp|wa\.me/i.test(host)) return 'WhatsApp';
  if (/t\.co|twitter|x\.com/i.test(host)) return 'Twitter/X';
  if (/tiktok/i.test(host)) return 'TikTok';
  return host || 'Directo';
}

function cleanPath(p) {
  p = String(p || '/').split('?')[0].slice(0, 100);
  p = p.replace(/index\.html?$/i, '');
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p || '/';
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  const pixel = () => { res.setHeader('Content-Type', 'image/gif'); res.status(200).end(GIF); };
  try {
    const q = req.query || {};
    const site = String(q.site || '').toLowerCase().trim();
    if (!SITE_RE.test(site)) return pixel();
    if (BOT_RE.test(req.headers['user-agent'] || '')) return pixel();
    if (!KV_URL || !KV_TOKEN) return pixel();

    const day = new Date().toISOString().slice(0, 10);
    const p = cleanPath(q.p);
    const source = sourceOf(q.r);
    const device = deviceOf(req.headers['user-agent']);
    const country = String(req.headers['x-vercel-ip-country'] || 'XX').toUpperCase().slice(0, 3);
    const isNew = q.n === '1';

    const pvDay = 'pv:' + site + ':d:' + day;
    const cmds = [
      ['INCR', 'pv:' + site + ':total'],
      ['INCR', pvDay],
      ['EXPIRE', pvDay, String(DAY_TTL)],
      ['HINCRBY', 'pages:' + site, p, '1'],
      ['HINCRBY', 'ref:' + site, source, '1'],
      ['HINCRBY', 'dev:' + site, device, '1'],
      ['HINCRBY', 'geo:' + site, country, '1'],
      ['SADD', 'sites', site],
    ];
    if (isNew) {
      const vDay = 'v:' + site + ':d:' + day;
      cmds.push(['INCR', 'v:' + site + ':total'], ['INCR', vDay], ['EXPIRE', vDay, String(DAY_TTL)]);
    }
    await pipeline(cmds);
  } catch (_) { /* el tracking jamas afecta al visitante */ }
  return pixel();
};
