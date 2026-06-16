// tracker.js — Beacon del Panel Proher Natura. Cuenta vistas (cada carga) y
// sesiones (1 por sesión), con página y fuente. Sin cookies de terceros.
(function () {
  try {
    var SITE = 'web-betty-phn';
    var isNew = !sessionStorage.getItem('axv');
    if (isNew) sessionStorage.setItem('axv', '1');
    var qs = '?site=' + encodeURIComponent(SITE)
      + '&p=' + encodeURIComponent(location.pathname || '/')
      + '&r=' + encodeURIComponent(document.referrer || '')
      + (isNew ? '&n=1' : '')
      + '&t=' + Date.now();
    new Image().src = '/api/track' + qs;
  } catch (e) { /* sin efecto si falla */ }
})();
