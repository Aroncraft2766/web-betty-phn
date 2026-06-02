/**
 * footer.js — Footer compartido PHN
 * Uso:
 *   Desde experiencias/Experiencia X/compra.html:
 *     <script src="../../compra/js/footer.js" data-root="../../"></script>
 *   Desde productos.html o raíz:
 *     <script src="compra/js/footer.js" data-root=""></script>
 */
(function () {
  var root = (document.currentScript && document.currentScript.getAttribute('data-root')) || '';
  if (root && root.slice(-1) !== '/') root += '/';

  var socialIcons = {
    fb: 'public/icons/redes/facebook.svg',
    yt: 'public/icons/redes/youtube.svg',
    ig: 'public/icons/redes/instagram.svg',
    wa: 'public/icons/redes/whatsapp.svg',
    tt: 'public/icons/redes/tiktok.svg',
    tw: 'public/icons/redes/x.svg',
    em: 'public/icons/redes/gmail.svg',
  };

  var data = {
    logoUrl:   'public/images/logos/Logo PHN.png',
    termsUrl:  '#',
    termsText: 'Términos y Condiciones',
    credits:   'Todos los derechos reservados',
    whatsapp:  '5212241033782',
    address: [
      'Blvd. Cuauhtémoc 1602, La Villa,',
      '75483 Tecamachalco, Pue.',
    ],
    social: [
      { name: 'Facebook',   url: 'https://www.facebook.com/share/1Dq4X1YqxC/',                                                            color: '#1877f2', icon: 'fb' },
      { name: 'Instagram',  url: 'https://www.instagram.com/natbetygonzalez/',                                                             color: '#e1306c', icon: 'ig' },
      { name: 'WhatsApp',   url: 'https://wa.me/5212241033782',                                                                            color: '#25d366', icon: 'wa' },
      { name: 'TikTok',     url: 'https://www.tiktok.com/@bea.proher.natura1?_r=1&_t=ZS-96laW43SGX7',                                     color: '#010101', icon: 'tt' },
    ],
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  var socialBtns = data.social.map(function (s) {
    var iconSrc = root + (socialIcons[s.icon] || '');
    var img = iconSrc ? '<img src="' + esc(iconSrc) + '" alt="' + esc(s.name) + '" style="width:20px;height:20px;object-fit:contain;" />' : '';
    return '<a class="phn-ft-social-btn" href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.name) + '" style="background:' + esc(s.color) + '">' + img + '</a>';
  }).join('');

  var addrLines = data.address.map(function (l) {
    return '<p>' + esc(l) + '</p>';
  }).join('');

  var html = '<section id="section-info" class="phn-footer">'
    + '<style>'
    + '#section-info.phn-footer{background:#2b2b2b;color:#ddd;padding:60px 32px;font-family:\'Lato\',sans-serif;}'
    + 'html.dark #section-info.phn-footer{background:#0f0f0f;}'
    + '.phn-ft-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr auto 1fr;gap:40px;align-items:start;}'
    + '.phn-ft-addr h3{font-size:.85em;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px;color:#fff;}'
    + '.phn-ft-addr p{font-size:.9em;line-height:1.7;color:#bbb;margin:0;}'
    + '.phn-ft-center{text-align:center;}'
    + '.phn-ft-center img{height:70px;margin-bottom:14px;}'
    + '.phn-ft-center .phn-ft-terms{display:block;color:#27ae60;font-size:.85em;text-decoration:none;margin-bottom:16px;}'
    + '.phn-ft-center .phn-ft-terms:hover{text-decoration:underline;}'
    + '.phn-ft-center p{font-size:.8em;color:#888;margin:0;line-height:1.8;}'
    + '.phn-ft-social h3{font-size:.85em;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;margin-bottom:16px;text-align:right;}'
    + '.phn-ft-social-grid{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;}'
    + '.phn-ft-social-btn{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;transition:transform .2s,opacity .2s;}'
    + '.phn-ft-social-btn:hover{transform:scale(1.15);opacity:.9;}'
    + '#phn-wa-float{position:fixed;bottom:86px;right:24px;width:50px;height:50px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,.5);z-index:8999;transition:transform .2s;}'
    + '#phn-wa-float:hover{transform:scale(1.1);}'
    + '#phn-wa-float svg{width:28px;height:28px;fill:#fff;}'
    + '@media(max-width:768px){'
    + '#phn-wa-float{right:10px;}'
    + '.phn-ft-grid{grid-template-columns:1fr;text-align:center;}'
    + '.phn-ft-social h3{text-align:center;}'
    + '.phn-ft-social-grid{justify-content:center;}'
    + '.phn-ft-addr h3{text-align:center;}'
    + '}'
    + '</style>'
    + '<div class="phn-ft-grid">'
    +   '<div class="phn-ft-addr"><h3>DIRECCIÓN</h3>' + addrLines + '</div>'
    +   '<div class="phn-ft-center">'
    +     '<img src="' + esc(root + data.logoUrl) + '" alt="Logo PHN" />'
    +     '<a class="phn-ft-terms" href="' + esc(data.termsUrl) + '">' + esc(data.termsText) + '</a>'
    +     '<p>' + esc(data.credits) + '</p>'
    +   '</div>'
    +   '<div class="phn-ft-social"><h3>MÁS INFORMACIÓN</h3><div class="phn-ft-social-grid">' + socialBtns + '</div></div>'
    + '</div>'
    + '</section>'
    + '<a id="phn-wa-float" href="https://wa.me/' + esc(data.whatsapp) + '" target="_blank" rel="noopener" aria-label="WhatsApp">'
    + '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.361-.214-3.759.896.955-3.668-.235-.377A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>'
    + '</a>';

  document.write(html);
})();
