/**
 * meredith-widget.js — Chatbot Meredith PHN
 * Carga este archivo con <script src="meredith-widget.js" defer></script>
 * en cualquier página para agregar el bot automáticamente.
 * En páginas dentro de subcarpetas usa data-root para la ruta base:
 *   <script src="../../meredith-widget.js" data-root="../../" defer></script>
 */
(function(){
  // Detectar ruta base
  var scriptEl = document.currentScript || document.querySelector('script[src*="meredith-widget"]');
  var ROOT = (scriptEl && scriptEl.getAttribute('data-root')) || '';

  // ── CSS ──
  var css = document.createElement('style');
  css.textContent = '#phn-widget{position:fixed;bottom:140px;right:-8px;z-index:9100;display:flex;flex-direction:column;align-items:flex-end;gap:8px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif}#phn-chat{width:370px;height:540px;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.18),0 4px 16px rgba(0,0,0,.08);display:none;flex-direction:column;overflow:hidden;transform-origin:bottom right;border:1px solid rgba(0,0,0,.06)}#phn-chat.open{display:flex;animation:phn-open .3s cubic-bezier(.34,1.4,.64,1) forwards}@keyframes phn-open{from{opacity:0;transform:scale(.85) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}#phn-header{background:linear-gradient(135deg,#569123 0%,#70B62F 60%,#88cc44 100%);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}#phn-header-left{display:flex;align-items:center;gap:12px}#phn-hdr-avatar{width:46px;height:46px;background:transparent;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;border:2px solid rgba(255,255,255,.6);flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.2)}#phn-hdr-name{font-size:1em;font-weight:700;color:#fff}#phn-hdr-sub{font-size:.72em;color:rgba(255,255,255,.75);margin-top:1px;letter-spacing:.02em;text-transform:uppercase}#phn-hdr-status{font-size:.74em;color:rgba(255,255,255,.88);margin-top:3px;display:flex;align-items:center;gap:5px}#phn-hdr-status::before{content:"";width:7px;height:7px;background:#5dff8a;border-radius:50%;display:inline-block;box-shadow:0 0 6px rgba(93,255,138,.6)}#phn-hdr-close{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.95);font-size:1em;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:background .2s;flex-shrink:0}#phn-hdr-close:hover{background:rgba(255,255,255,.28)}#phn-messages{flex:1;overflow-y:auto;padding:18px 14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;background:#f7f9fc}#phn-messages::-webkit-scrollbar{width:4px}#phn-messages::-webkit-scrollbar-thumb{background:rgba(0,0,0,.12);border-radius:4px}.phn-msg{max-width:80%;padding:10px 14px;border-radius:16px;font-size:.875em;line-height:1.6;word-break:break-word;animation:phn-fade-in .22s ease}@keyframes phn-fade-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.phn-msg.bot{background:#fff;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 4px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04);color:#1f2937}.phn-msg.user{background:linear-gradient(135deg,#70B62F,#569123);border-bottom-right-radius:4px;align-self:flex-end;box-shadow:0 2px 8px rgba(112,182,47,.3);color:#fff}.phn-msg a{color:#70B62F;font-weight:500;word-break:break-all}.phn-msg.user a{color:#a8f0c8}#phn-typing{align-self:flex-start;background:#fff;border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04);display:none}#phn-typing.show{display:block}.phn-dots{display:flex;gap:5px;align-items:center}.phn-dot{width:8px;height:8px;background:#b0b8c4;border-radius:50%;animation:phn-bounce 1.3s infinite ease-in-out}.phn-dot:nth-child(2){animation-delay:.18s}.phn-dot:nth-child(3){animation-delay:.36s}@keyframes phn-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-7px);opacity:1}}#phn-chips{padding:8px 14px 6px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;flex-shrink:0;background:#fff;border-top:1px solid rgba(0,0,0,.06)}.phn-chip{background:#f5fae8;border:1.5px solid #70B62F;color:#569123;border-radius:20px;padding:5px 8px;font-size:.75em;font-weight:600;cursor:pointer;transition:all .18s;white-space:nowrap;font-family:inherit;text-align:center;overflow:hidden;text-overflow:ellipsis}.phn-chip:hover{background:#70B62F;color:#fff;border-color:#70B62F}#phn-wa-bar{background:#fff;padding:6px 14px 0;flex-shrink:0;border-top:1px solid rgba(0,0,0,.07)}#phn-wa-btn{width:100%;padding:9px 16px;background:#25d366;color:#fff;border:none;border-radius:10px;font-size:.82em;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-family:inherit;transition:background .2s}#phn-wa-btn:hover{background:#128c7e}#phn-input-area{background:#fff;padding:12px 14px;display:flex;gap:10px;align-items:center;flex-shrink:0}#phn-input{flex:1;border:1.5px solid #e5e9ef;outline:none;font-size:.88em;background:#f7f9fc;border-radius:24px;padding:10px 16px;font-family:inherit;color:#1f2937;transition:border-color .2s,box-shadow .2s}#phn-input:focus{border-color:#70B62F;box-shadow:0 0 0 3px rgba(112,182,47,.15);background:#fff}#phn-input::placeholder{color:#b0b8c4}#phn-send{width:42px;height:42px;background:linear-gradient(135deg,#70B62F,hsl(92,61%,35%));border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s;box-shadow:0 3px 10px rgba(112,182,47,.35)}#phn-send:hover{transform:scale(1.08)}#phn-toggle{width:105px;height:105px;background:transparent;border:none;border-radius:0;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:none;transition:transform .2s;position:relative;overflow:visible;padding:0}#phn-toggle:hover{transform:scale(1.07)}#phn-toggle-img{width:105px;height:105px;object-fit:contain;display:block;transition:opacity .25s,transform .25s;filter:drop-shadow(0 4px 10px rgba(0,0,0,.35))}#phn-toggle.open #phn-toggle-img{opacity:0;transform:scale(.6) rotate(90deg)}#phn-toggle-close{position:absolute;font-size:1.2em;font-weight:300;color:#fff;opacity:0;transform:scale(.6) rotate(-90deg);transition:opacity .25s,transform .25s;background:#70B62F;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 3px 10px rgba(37,211,102,.55)}#phn-toggle.open #phn-toggle-close{opacity:1;transform:scale(1) rotate(0)}#phn-notif{position:absolute;top:4px;left:0;width:18px;height:18px;background:#ff3b30;border-radius:50%;border:2px solid #fff;font-size:.65em;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;animation:phn-pulse-dot 2s infinite}#phn-notif.hidden{display:none}@keyframes phn-pulse-dot{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}@media(max-width:768px){#phn-widget{bottom:14px;right:4px}#phn-toggle{width:65px;height:65px}#phn-toggle-img{width:88px;height:88px}#phn-notif{top:-4px;left:-4px}#phn-chat{width:calc(100vw - 20px);height:min(520px,78vh)}}html.dark #phn-chat{background:#1a1f1a;border-color:rgba(255,255,255,.06);box-shadow:0 20px 60px rgba(0,0,0,.5)}html.dark #phn-messages{background:#111611}html.dark .phn-msg.bot{background:#1e2a1e;color:#e2e8e2;box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 0 1px rgba(255,255,255,.05)}html.dark .phn-msg a{color:#7dd44a}html.dark #phn-typing{background:#1e2a1e}html.dark .phn-dot{background:#4a5a4a}html.dark #phn-chips{background:#161c16;border-top-color:rgba(255,255,255,.07)}html.dark .phn-chip{background:#1a2e0a;border-color:#3d6e18;color:#8fd44a}html.dark .phn-chip:hover{background:#70B62F;color:#fff}html.dark #phn-wa-bar{background:#0d120d;border-top-color:rgba(255,255,255,.07)}html.dark #phn-input-area{background:#161c16}html.dark #phn-input{background:#1e2a1e;border-color:#2d3d2d;color:#e2e8e2}html.dark #phn-input:focus{border-color:#70B62F;background:#1a2a1a}html.dark #phn-input::placeholder{color:#4a5a4a}';
  document.head.appendChild(css);

  // ── HTML ──
  var widget = document.createElement('div');
  widget.id = 'phn-widget';
  widget.innerHTML = '<div id="phn-chat" role="dialog" aria-label="Chat con Meredith"><div id="phn-header"><div id="phn-header-left"><div id="phn-hdr-avatar"><img src="'+ROOT+'public/images/logos/Logo PHN.png" alt="PHN" style="width:100%;height:100%;object-fit:contain;border-radius:50%;"></div><div><div id="phn-hdr-name">Meredith</div><div id="phn-hdr-sub">Asistente PHN · Proher Natura</div><div id="phn-hdr-status">En línea ahora</div></div></div><button id="phn-hdr-close" aria-label="Cerrar chat">✕</button></div><div id="phn-messages"><div id="phn-typing"><div class="phn-dots"><div class="phn-dot"></div><div class="phn-dot"></div><div class="phn-dot"></div></div></div></div><div id="phn-chips"><button class="phn-chip" data-msg-es="Quiero comprar" data-msg-en="I want to buy" data-label-es="🛍️ Comprar" data-label-en="🛍️ Buy">🛍️ Comprar</button><button class="phn-chip" data-msg-es="¿Dónde están ubicados?" data-msg-en="Where are you located?" data-label-es="📍 Ubicación" data-label-en="📍 Location">📍 Ubicación</button><button class="phn-chip" data-msg-es="¿Cuáles son los productos más populares?" data-msg-en="What are the most popular products?" data-label-es="🌿 Productos" data-label-en="🌿 Products">🌿 Productos</button></div><div id="phn-wa-bar"><button id="phn-wa-btn" aria-label="Continuar en WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Continuar en WhatsApp</button></div><div id="phn-input-area"><input type="text" id="phn-input" placeholder="Escríbeme algo... 🌿" autocomplete="off" maxlength="500" /><button id="phn-send" aria-label="Enviar"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></div></div><button id="phn-toggle" aria-label="Abrir chat con Meredith" aria-expanded="false"><div id="phn-notif" aria-hidden="true">1</div><img id="phn-toggle-img" src="'+ROOT+'public/images/Bot.png" alt="Meredith PHN" /><span id="phn-toggle-close">✕</span></button>';
  document.body.appendChild(widget);

  // ── LÓGICA ──
  // API key gestionada en el servidor — ver /api/chat.js

  var SYSTEM_PROMPT = "Eres Meredith \ud83c\udf3f, asistente virtual inteligente de la distribuidora Betty González de Proher Natura (PHN).\nEres experta en nutrici\u00f3n natural, suplementos y cosm\u00e9ticos PHN. Conoces cada producto a fondo y puedes dar recomendaciones personalizadas.\n\nSOBRE PHN:\n- Empresa mexicana con m\u00e1s de 20 a\u00f1os fabricando suplementos 100% naturales.\n- Certificaciones: COFEPRIS, FDA y HEALTH CANADA.\n- Todos los productos son elaborados con nanotecnolog\u00eda PHN para m\u00e1xima absorci\u00f3n celular.\n\nDISTRIBUIDORA BETTY GONZÁLEZ:\n- WhatsApp: 2241033782 (link: https://wa.me/5212241033782)\n- Ubicaci\u00f3n: Av. Raúl Isidro Burgos 2224, Maestro Federal, 72080 Heroica Puebla de Zaragoza, Pue.\n- Google Maps: https://maps.app.goo.gl/gFkAAUf527xbmW289\n\n\u2550\u2550\u2550 CAT\u00c1LOGO COMPLETO CON PRECIOS \u2550\u2550\u2550\n\nSUPLEMENTOS EN C\u00c1PSULAS:\n1. F.VIT CAPS (90) \u2014 $1,170 \u2014 Metabolismo y digesti\u00f3n\n2. H-9 CAPS (100) \u2014 $588 \u2014 H\u00edgado y ves\u00edcula\n3. G-6 CAPS (100) \u2014 $588 \u2014 Gastritis, reflujo, \u00falceras\n4. D-7 CAPS (100) \u2014 $588 \u2014 Colesterol, triglic\u00e9ridos, circulaci\u00f3n\n5. OV-12 CAPS (100) \u2014 $588 \u2014 Hormonal femenino\n6. A-10 CAPS (100) \u2014 $588 \u2014 Articulaciones, \u00e1cido \u00farico\n7. VC-1 CAPS (60) \u2014 $588 \u2014 Sistema inmune\n8. N-7 CAPS (100) \u2014 $588 \u2014 Ansiedad, insomnio, estr\u00e9s\n9. DB-6 CAPS (100) \u2014 $588 \u2014 Diabetes, glucosa\n10. R-12 CAPS (100) \u2014 $588 \u2014 Ri\u00f1ones, retenci\u00f3n de l\u00edquidos\n11. CR-7 CAPS (100) \u2014 $588 \u2014 Presi\u00f3n arterial, coraz\u00f3n\n12. AVI-13 CAPS (100) \u2014 $588 \u2014 Inmunol\u00f3gico, respiratorio\n13. F.VIT 6 CAPS (100) \u2014 $588 \u2014 Desintoxicaci\u00f3n, gases\n14. VR-4 CAPS (100) \u2014 $588 \u2014 V\u00e1rices, circulaci\u00f3n\n15. HERGY SX (30) \u2014 $1,100 \u2014 Vitalidad masculina (solo +18)\n16. COL\u00c1GENO CLGN (60) \u2014 $250 \u2014 Piel, cabello, u\u00f1as\n17. MINERALES CM (60) \u2014 $250 \u2014 Estr\u00e9s, sue\u00f1o, energ\u00eda\n\nL\u00cdQUIDOS:\n18. F.VIT LH (2x120ml) \u2014 $1,000 \u2014 Dep. hep\u00e1tica\n19. RGC-16 (1L) \u2014 $1,000 \u2014 Regeneraci\u00f3n celular\n20. EUK-7 Jarabe (250ml) \u2014 $588 \u2014 Tos, bronquios\n21. FIBRA F.VIT (1kg) \u2014 $975 \u2014 Tr\u00e1nsito intestinal\n\nCOSM\u00c9TICOS:\n22. F.VIT GEL \u2014 $250 \u2014 Tonificar piel\n23. VR-4 GEL \u2014 $250 \u2014 V\u00e1rices t\u00f3pico\n24. DB-6 CREMA \u2014 $300 \u2014 Resequedad extrema\n25. COL\u00c1GENO 80/20 \u2014 $300 \u2014 Piel d\u00eda\n26. COL\u00c1GENO 50/50 \u2014 $300 \u2014 Piel noche\n27. MASCARILLA \u2014 $300 \u2014 Exfoliante aclaradora\n28. KIT F.VIT MAX \u2014 $2,999 \u2014 Kit completo\n\n\u2550\u2550\u2550 INSTRUCCIONES \u2550\u2550\u2550\n1. Recomienda productos seg\u00fan s\u00edntomas. SIEMPRE incluye precio.\n2. Combina productos si es necesario.\n3. Dile al usuario que puede hacer clic en el bot\u00f3n verde \u201cContinuar en WhatsApp\u201d para seguir la conversaci\u00f3n con Betty Gonzalez.\n4. Responde amable, profesional, con emojis \ud83c\udf3f\u2728\ud83d\udc9a moderados. M\u00e1x ~200 palabras.\n5. No inventes. Si no sabes, sugiere WhatsApp.\n6. Nunca menciones Shopify, tiendas en l\u00ednea ni m\u00e9todos de pago.\n7. Son suplementos naturales, no medicamentos.\n8. IDIOMA: Detecta el idioma del usuario y responde en ese idioma. Si escriben en ingl\u00e9s, responde en ingl\u00e9s. Nombres de productos se mantienen.\n9. TEXTO SELECCIONADO: Si el usuario comparte texto de la p\u00e1gina (precedido por [CONTEXTO DE P\u00c1GINA]), \u00fasalo para dar respuestas m\u00e1s precisas sobre lo que est\u00e1 viendo.\n10. NAVEGACI\u00d3N: Puedes guiar al usuario por las secciones de la p\u00e1gina. Si preguntan c\u00f3mo encontrar algo, cambiar idioma o navegar, gu\u00edalos.";

  var history = [];
  var busy = false, opened = false;
  var selectedText = '';

  var chatEl = document.getElementById('phn-chat');
  var toggleBtn = document.getElementById('phn-toggle');
  var closeBtn = document.getElementById('phn-hdr-close');
  var msgsEl = document.getElementById('phn-messages');
  var typingEl = document.getElementById('phn-typing');
  var inputEl = document.getElementById('phn-input');
  var sendBtn = document.getElementById('phn-send');
  var notifEl = document.getElementById('phn-notif');

  function openChat() { opened=true; chatEl.classList.add('open'); toggleBtn.classList.add('open'); toggleBtn.setAttribute('aria-expanded','true'); notifEl.classList.add('hidden'); setTimeout(function(){inputEl.focus();},320); }
  function closeChat() { opened=false; chatEl.classList.remove('open'); toggleBtn.classList.remove('open'); toggleBtn.setAttribute('aria-expanded','false'); }

  toggleBtn.addEventListener('click', function(){ opened ? closeChat() : openChat(); });
  closeBtn.addEventListener('click', closeChat);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && opened) closeChat(); });

  // Capturar texto seleccionado en la página
  document.addEventListener('mouseup', function(){
    var sel = window.getSelection().toString().trim();
    if(sel.length > 10 && sel.length < 2000) selectedText = sel;
  });

  function addMsg(text, role) {
    var div = document.createElement('div');
    div.className = 'phn-msg ' + role;
    div.innerHTML = text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g,'<br>');
    msgsEl.insertBefore(div, typingEl);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function showTyping() { typingEl.classList.add('show'); msgsEl.scrollTop=msgsEl.scrollHeight; }
  function hideTyping() { typingEl.classList.remove('show'); }

  function getPageLang() { return (window.__phnCurrentLang || localStorage.getItem('phn-lang') || 'es'); }

  function getPageContext() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    var ctx = '\n[Página actual: ' + page + ']';
    // Detect page type
    if(page === 'productos.html') ctx += ' [El usuario está viendo la lista de suplementos]';
    else if(page === 'cosmeticos.html') ctx += ' [El usuario está viendo la lista de cosméticos]';
    else if(page === 'catalogo.html') ctx += ' [El usuario está en el catálogo general]';
    else if(page === 'carrito.html') ctx += ' [El usuario está viendo su carrito de compras]';
    else if(page === 'ficha.html') {
      var id = new URLSearchParams(window.location.search).get('id');
      ctx += ' [El usuario está viendo el producto: ' + (id||'desconocido') + ']';
    }
    else if(page === 'compra.html') {
      var exp = window.location.pathname.match(/Experiencia (\d+)/);
      ctx += ' [El usuario está viendo la página de compra de la Experiencia ' + (exp?exp[1]:'') + ']';
    }
    // Add selected text if any
    if(selectedText) {
      ctx += '\n[CONTEXTO DE PÁGINA - texto que el usuario está viendo/seleccionó: "' + selectedText.substring(0,500) + '"]';
    }
    return ctx;
  }

  function callAPI(userMsg) {
    var lang = getPageLang();
    var langNote = lang === 'es'
      ? '\n[El usuario está viendo la página en ESPAÑOL. Responde en español por defecto.]'
      : '\n[The user is viewing the page in ENGLISH. Respond in English by default.]';
    var navNote = '\nSECCIONES: Inicio(index.html), Experiencias(#section-experiences), Catálogo(catalogo.html), Productos(productos.html), Cosméticos(cosmeticos.html), FAQ(#section-faq), Contacto(#section-contacto), Carrito(carrito.html). Cambiar idioma: botón EN/ES en navbar. Modo oscuro: botón luna en navbar.';
    var pageCtx = getPageContext();
    var fullPrompt = SYSTEM_PROMPT + langNote + navNote + pageCtx;
    var messages = [{ role:'system', content:fullPrompt }].concat(history).concat([{ role:'user', content:userMsg }]);
    return fetch('/api/chat', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ messages:messages }),
    }).then(function(res){
      if(!res.ok) throw new Error('HTTP '+res.status);
      return res.json();
    }).then(function(data){
      return data.choices[0].message.content.trim();
    });
  }

  function send(text) {
    text = text.trim();
    if(!text || busy) return;
    inputEl.value = '';
    addMsg(text, 'user');
    busy=true; showTyping();
    history.push({ role:'user', content:text });
    callAPI(text).then(function(reply){
      history.push({ role:'assistant', content:reply });
      hideTyping(); addMsg(reply,'bot');
    }).catch(function(){
      history.pop(); hideTyping();
      addMsg('😅 Ups, tuve un problema de conexión. Intenta de nuevo o haz clic en el botón verde para continuar en WhatsApp 💚','bot');
    }).finally(function(){ busy=false; inputEl.focus(); });
  }

  sendBtn.addEventListener('click', function(){ send(inputEl.value); });
  inputEl.addEventListener('keydown', function(e){ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(inputEl.value); } });
  document.querySelectorAll('.phn-chip').forEach(function(chip){ chip.addEventListener('click', function(){ if(!opened) openChat(); send(chip.dataset.msg); }); });

  // WhatsApp — enviar conversación
  document.getElementById('phn-wa-btn').addEventListener('click', function(){
    var lines = ['Hola Betty, vengo del chat con Meredith en la página PHN. Resumen:\n'];
    history.forEach(function(m){
      if(m.role === 'user') lines.push('Yo: ' + m.content);
      else lines.push('Meredith: ' + m.content);
    });
    if(history.length === 0) lines.push('(Me gustaría recibir asesoría sobre productos PHN)');
    lines.push('\n¿Me puedes ayudar?');
    var msg = lines.join('\n');
    if(msg.length > 1800) {
      var short = ['Hola Betty, vengo del chat con Meredith. Lo último que hablamos:\n'];
      history.slice(-6).forEach(function(m){
        if(m.role === 'user') short.push('Yo: ' + m.content);
        else short.push('Meredith: ' + m.content.substring(0,200) + (m.content.length>200?'...':''));
      });
      short.push('\n¿Me puedes ayudar?');
      msg = short.join('\n');
    }
    window.open('https://wa.me/5212241033782?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });

  // Idioma dinámico
  function updateBotLang(){
    var lang = getPageLang();
    document.querySelectorAll('.phn-chip').forEach(function(chip){
      chip.textContent = chip.getAttribute('data-label-'+lang) || chip.getAttribute('data-label-es');
      chip.dataset.msg = chip.getAttribute('data-msg-'+lang) || chip.getAttribute('data-msg-es');
    });
    inputEl.placeholder = lang === 'en' ? 'Write something... 🌿' : 'Escríbeme algo... 🌿';
    var waBtn = document.getElementById('phn-wa-btn');
    if(waBtn) waBtn.lastChild.textContent = lang === 'en' ? ' Continue on WhatsApp' : ' Continuar en WhatsApp';
  }
  updateBotLang();
  setInterval(updateBotLang, 2000);

  // Saludo inicial
  setTimeout(function(){
    var lang = getPageLang();
    if(lang === 'en') {
      addMsg("Hi! 👋🌿 I'm Meredith, PHN's virtual assistant.\n\nI can help you find the right product, guide you through our experiences, or answer questions about what you're seeing on the page. You can also select text on the page and ask me about it! ✨💚",'bot');
    } else {
      addMsg('¡Hola! 👋🌿 Soy Meredith, asistente virtual de PHN.\n\n¿En qué puedo ayudarte? Puedo asesorarte en productos y experiencias, o aclarar dudas de lo que estás viendo. También puedes seleccionar texto de la página y consultarme al respecto. ✨💚','bot');
    }
  }, 800);
})();
