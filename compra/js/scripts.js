/* ── PHN: carrito a la izquierda del botón regresar ─────────────────────── */
(function(){
  function fixCartOrder(){
    var cart = document.getElementById('phn-cart-link');
    var back = document.getElementById('phnBackLink');
    if(!cart || !back) return;
    var container = back.parentElement;
    if(!container) return;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    cart.style.order = '1';
    back.style.order = '2';
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', fixCartOrder);
  } else { fixCartOrder(); }
})();

/* ── PHN: botón de traducción ES ↔ EN en páginas de compra ──────────────── */
(function(){
  var UI_STRINGS = {
    es: {
      back:       'Volver al inicio',
      buy:        'Comprar por WhatsApp',
      qty:        'Cantidad',
      cart:       'Ver carrito',
      translate:  'EN',
      addCart:    'Agregar al carrito',
    },
    en: {
      back:       'Back to home',
      buy:        'Buy on WhatsApp',
      qty:        'Quantity',
      cart:       'View cart',
      translate:  'ES',
      addCart:    'Add to cart',
    }
  };

  var currentLang = 'es';

  function applyUILang(lang){
    var t = UI_STRINGS[lang] || UI_STRINGS.es;
    var backTxt = document.getElementById('phnBackText');
    if(backTxt) backTxt.textContent = t.back;
    var buyTxt = document.getElementById('buyBtnText');
    if(buyTxt) buyTxt.textContent = t.buy;
    document.querySelectorAll('p').forEach(function(p){
      if(p.textContent.trim() === 'Cantidad' || p.textContent.trim() === 'Quantity')
        p.textContent = t.qty;
    });
    var addCartBtn = document.getElementById('addToCartBtn');
    if(addCartBtn){
      var textNode = Array.prototype.slice.call(addCartBtn.childNodes).filter(function(n){ return n.nodeType === 3; })[0];
      if(textNode) textNode.textContent = '\n    ' + t.addCart + '\n  ';
    }
    var btn = document.getElementById('phnCompraTranslateBtn');
    if(btn) btn.textContent = t.translate;
  }

  function applyVideoLang(lang){
    if(typeof window.PHN_VIDEO_CONTENT === 'undefined') return;
    var vc = window.PHN_VIDEO_CONTENT[lang] || window.PHN_VIDEO_CONTENT.es;
    var secTitle = document.querySelector('.fixed-video-campaign__intro .h0');
    if(secTitle) secTitle.textContent = vc.sectionTitle;
    var secLabel = document.querySelector('.fixed-video-campaign__intro .caption-with-letter-spacing--large span');
    if(secLabel) secLabel.textContent = vc.sectionLabel;
    var desktopLis = document.querySelectorAll('.fixed-video__card-pois > li');
    vc.scenes.forEach(function(scene, i){
      var li = desktopLis[i]; if(!li) return;
      var headings = li.querySelectorAll('.banner__text.caption-with-letter-spacing--large');
      var bodies   = li.querySelectorAll('.rich-text__text.rte.caption');
      if(headings[0]) headings[0].textContent = scene.heading;
      if(bodies[0])   bodies[0].textContent   = scene.body || '';
      if(scene.extra){
        if(headings[1]) headings[1].textContent = scene.extra.heading;
        if(bodies[1])   bodies[1].textContent   = scene.extra.body || '';
      }
    });
    var mobileLis = document.querySelectorAll('.slider-fading__video--mobile .slider-fading__slides > li');
    vc.scenes.forEach(function(scene, i){
      var li = mobileLis[i]; if(!li) return;
      var headings = li.querySelectorAll('.banner__text.caption-with-letter-spacing--large');
      var bodies   = li.querySelectorAll('.rich-text__text.rte.caption');
      if(headings[0]) headings[0].textContent = scene.heading;
      if(bodies[0])   bodies[0].textContent   = scene.body || '';
      if(scene.extra){
        if(headings[1]) headings[1].textContent = scene.extra.heading;
        if(bodies[1])   bodies[1].textContent   = scene.extra.body || '';
      }
    });
  }

  function applyFeaturesLang(lang){
    if(typeof window.PHN_FEATURES === 'undefined') return;
    var items = PHN_FEATURES[lang] || PHN_FEATURES.es;
    if(!items) return;
    var list = document.getElementById('phn-features-list');
    if(!list) return;
    var cards = list.querySelectorAll('.multicolumn-card__info');
    items.forEach(function(item, i){
      var card = cards[i]; if(!card) return;
      var h3 = card.querySelector('h3');
      var p = card.querySelector('p');
      if(h3) h3.textContent = item.title;
      if(p) p.textContent = item.text;
    });
  }

  function toggleLang(){
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyUILang(currentLang);
    applyVideoLang(currentLang);
    applyFeaturesLang(currentLang);
  }

  function injectTranslateButton(){
    var back = document.getElementById('phnBackLink');
    if(!back) return;
    var container = back.parentElement;
    if(!container || document.getElementById('phnCompraTranslateBtn')) return;
    var btn = document.createElement('button');
    btn.id = 'phnCompraTranslateBtn';
    btn.textContent = 'EN';
    btn.title = 'Traducir a inglés / Translate to English';
    btn.style.cssText = [
      'font-size:.82rem', 'font-weight:700', 'padding:5px 13px',
      'border:1.5px solid #d0d0d0', 'border-radius:6px',
      'background:#fff', 'color:#1a1a1a', 'cursor:pointer',
      'transition:background .2s,border-color .2s', 'font-family:inherit',
      'order:0', 'flex-shrink:0'
    ].join(';');
    btn.onmouseover = function(){ this.style.background='#f5f5f5'; this.style.borderColor='#aaa'; };
    btn.onmouseout  = function(){ this.style.background='#fff';    this.style.borderColor='#d0d0d0'; };
    btn.addEventListener('click', toggleLang);
    container.insertBefore(btn, container.firstChild);
    var cart = document.getElementById('phn-cart-link');
    if(cart) cart.style.order = '2';
    back.style.order = '3';
  }

  function loadVideoContentAndInit(){
    if(typeof window.PHN_VIDEO_CONTENT !== 'undefined'){
      applyVideoLang('es');
      return;
    }
    var s = document.createElement('script');
    var base = '../../compra/js/';
    var allScripts = document.querySelectorAll('script[src]');
    for(var i = 0; i < allScripts.length; i++){
      if(allScripts[i].src && allScripts[i].src.indexOf('scripts.js') > -1){
        base = allScripts[i].src.replace(/scripts\.js.*$/, '');
        break;
      }
    }
    s.src = base + 'video-content.js';
    s.onload = function(){ applyVideoLang('es'); };
    document.head.appendChild(s);
  }

  function init(){
    injectTranslateButton();
    loadVideoContentAndInit();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  window.__phnCompraToggleLang = toggleLang;
})();

/* ── PHN: slider móvil "Nanotecnología PHN" ──────────────────────────────── */
(function(){
  function safePlay(v){ if(v) try{ var p=v.play(); if(p) p.catch(function(){}); }catch(e){} }
  function safePause(v){ if(v) try{ v.pause(); }catch(e){} }

  function initPHNMobileSlider(){
    var container = document.querySelector('.slider-fading__video--mobile');
    if(!container) return;
    var slides = Array.prototype.slice.call(
      container.querySelectorAll('.slider-fading__slides > li')
    );
    if(!slides.length) return;
    var prevBtn = container.querySelector('.slider-button--prev');
    var nextBtn = container.querySelector('.slider-button--next');
    var current = 0;
    var started = false;

    function pauseAll(){
      slides.forEach(function(s){
        var v = s.querySelector('video');
        if(v) safePause(v);
      });
    }

    function goTo(idx){
      /* Desactivar slide actual */
      slides[current].classList.remove('active');
      var oldVid = slides[current].querySelector('video');
      if(oldVid) safePause(oldVid);
      /* Activar slide nuevo */
      current = ((idx % slides.length) + slides.length) % slides.length;
      slides[current].classList.add('active');
      var newVid = slides[current].querySelector('video');
      if(newVid) safePlay(newVid);
    }

    if(prevBtn) prevBtn.addEventListener('click', function(){ goTo(current - 1); });
    if(nextBtn) nextBtn.addEventListener('click', function(){ goTo(current + 1); });

    /* Soporte swipe táctil */
    var touchStartX = 0;
    container.addEventListener('touchstart', function(e){
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    container.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - touchStartX;
      if(Math.abs(dx) > 40){ goTo(dx < 0 ? current + 1 : current - 1); }
    }, { passive: true });

    /* Solo arrancar el primer video cuando la sección sea visible */
    if('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
          if(!started){
            started = true;
            var firstVid = slides[0].querySelector('video');
            if(firstVid) safePlay(firstVid);
          }
        } else {
          pauseAll();
          started = false;
        }
      }, { threshold: 0.2 });
      obs.observe(container);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initPHNMobileSlider);
  } else {
    initPHNMobileSlider();
  }
})();

/* ── PHN: loop de los últimos 3s en cápsulas 2 y 3 ───────────────────────────
   Las cápsulas 2 y 3 se reproducen completas una vez (0–14s) y luego repiten
   SOLO los últimos 3s (≈11–14s), sin reiniciar al principio ni mostrar el
   fotograma negro final. La cápsula 1 conserva su loop nativo completo.
   Se identifican por la URL de Cloudinary (capsula_2_ / capsula_3_). */
(function(){
  var TAIL  = 3;     /* segundos finales que se repiten */
  var GUARD = 0.15;  /* margen antes del final real para evitar el frame negro */

  function videoSrc(v){
    if(v.currentSrc) return v.currentSrc;
    var s = v.querySelector('source');
    return (s && s.src) || '';
  }
  function isTailVideo(v){ return /capsula_2_|capsula_3_/.test(videoSrc(v)); }

  function setup(v){
    if(v.__phnTailLoop) return;
    v.__phnTailLoop = true;
    v.loop = false;                       /* desactiva el loop nativo */
    function tailPoint(){
      var d = v.duration;
      if(!isFinite(d) || d <= TAIL) return 0;
      return d - TAIL;                    /* salto a (duración − 3) */
    }
    function jump(){
      try { v.currentTime = tailPoint(); } catch(e){}
      var p = v.play(); if(p) p.catch(function(){});
    }
    v.addEventListener('timeupdate', function(){
      var d = v.duration;
      if(isFinite(d) && d > 0 && v.currentTime >= d - GUARD){ jump(); }
    });
    v.addEventListener('ended', jump);     /* respaldo si 'timeupdate' no alcanza */
  }

  function init(){
    Array.prototype.forEach.call(document.querySelectorAll('video'), function(v){
      if(isTailVideo(v)){ setup(v); }
      else {
        /* la URL puede no estar resuelta aún en currentSrc al cargar */
        v.addEventListener('loadedmetadata', function(){ if(isTailVideo(v)) setup(v); });
      }
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

/* ── PHN: navbar transparente al inicio → gris al hacer scroll ───────────────
   Replica el comportamiento de la navbar de la página inicial (#navbar): el
   <nav id="phnNav"> de las páginas de compra es fixed y transparente sobre el
   banner oscuro, y al pasar el banner gana la clase .scrolled (fondo #2b2b2b).
   Si la página no tiene banner visible, queda gris desde el inicio y se
   compensa con padding-top para que el contenido no quede oculto. */
(function(){
  function injectStyles(){
    if(document.getElementById('phn-nav-style')) return;
    var css = ''
      + '#phnNav{background:transparent!important;box-shadow:none!important;}'
      + '#phnNav #phnBackLink,#phnNav #phn-cart-link{color:#fff!important;}'
      + '#phnNav.scrolled{background:#2b2b2b!important;box-shadow:0 2px 12px rgba(0,0,0,.4)!important;}';
    var s = document.createElement('style');
    s.id = 'phn-nav-style';
    s.textContent = css;
    document.head.appendChild(s);
  }

  function initPHNNavScroll(){
    var nav = document.getElementById('phnNav');
    if(!nav) return;
    injectStyles();
    var banner = document.getElementById('heroBanner');
    var bannerImg = document.getElementById('bannerImg');

    function onScroll(){
      var visible = banner && banner.offsetHeight > 4 &&
                    getComputedStyle(banner).display !== 'none';
      var threshold;
      if(visible){
        threshold = banner.offsetTop + banner.offsetHeight - 80;
        document.body.style.paddingTop = '';
      } else {
        /* sin banner: gris fijo desde arriba + hueco para el nav */
        threshold = -1;
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      }
      nav.classList.toggle('scrolled', window.scrollY > threshold);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if(bannerImg) bannerImg.addEventListener('load', onScroll);   /* recalcular al cargar la imagen */
    window.addEventListener('load', onScroll);
    onScroll();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initPHNNavScroll);
  } else { initPHNNavScroll(); }
})();
