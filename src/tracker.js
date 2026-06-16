// tracker.js — Beacon de visita del Panel Axonia. Cuenta 1 vez por sesión.
(function () {
  try {
    var SITE = 'web-betty-phn';
    if (sessionStorage.getItem('axv')) return;
    sessionStorage.setItem('axv', '1');
    var img = new Image();
    img.src = '/api/track?site=' + encodeURIComponent(SITE) + '&t=' + Date.now();
  } catch (e) { /* sin efecto si falla */ }
})();
