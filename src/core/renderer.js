/**
 * renderer.js — construye el HTML de la página leyendo SITE_CONTENT.
 * No edites este archivo para cambiar contenido; edita content.js.
 */
(function () {
  'use strict';

  var c = window.SITE_CONTENT;

  /** Escapa caracteres especiales HTML para evitar XSS accidental. */
  function e(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── NAVBAR ────────────────────────────────────────────────────────────────
  function buildNavbar() {
    const navLinks = c.navbar.links.map(function (link, i) {
      const isHome = i === 0;
      const cls = 'menu-item menu-item-type-post_type menu-item-object-page'
        + (isHome ? ' menu-item-home current-menu-item page_item page-item-33 current_page_item' : '');
      return '<li class="' + cls + '">'
        + '<a href="' + e(link.href) + '"' + (isHome ? ' aria-current="page"' : '') + '>' + e(link.text) + '</a>'
        + '</li>';
    }).join('');

    return `
<style>
  /* ── Tipografía global mejorada ── */
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@400;500;600;700;900&display=swap');

  html { scroll-behavior: smooth; overflow-x: clip; }

  body, body * {
    font-family: 'Montserrat', sans-serif !important;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.01em;
    color: #1a1a1a;
    background: #fff;
    transition: background 0.3s, color 0.3s;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }

  p { margin-bottom: 0.6em; }

  /* ── Modo oscuro (clase .dark en <html>, controlada manualmente por el usuario) ── */
  html.dark body             { background: #121212; color: #e0e0e0; }
  html.dark .ct-section      { background: #1a1a1a; }
  html.dark #section-faq            { background: #1a1a1a; }
  html.dark #section-resenas        { background: #1a1a1a; }
  html.dark #section-experiences    { background: #1a1a1a; }
  html.dark #section-contacto       { background: #0d2e1a !important; }
  html.dark .faq-item               { border-color: #333; }
  html.dark .faq-q                  { color: #e0e0e0; }
  html.dark .faq-a                  { color: #aaa; }
  html.dark footer#section-2-13     { background: #1a1a1a; }

  /* Offset para que el navbar fijo no tape las secciones al navegar */
  @media (max-width: 768px) {
    #section-experiences,
    #section-faq,
    #section-resenas,
    #section-contacto { scroll-margin-top: 86px; }
  }

  /* Logo */
  #image-70-16289 { max-height: 65px !important; max-width: 220px !important; width: auto !important; height: auto !important; }

  /* Navbar fija encima del hero, transparente al inicio */
  #navbar {
    position: fixed !important;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    background: transparent !important;
    transition: background 0.4s, box-shadow 0.4s;
    box-shadow: none !important;
  }
  #navbar a, #navbar .menu-item a, #navbar .oxy-nav-menu-list a { color: #fff !important; }
  #navbar.scrolled { background: #2b2b2b !important; box-shadow: 0 2px 12px rgba(0,0,0,0.4) !important; }
  #navbar.scrolled a,
  #navbar.scrolled .menu-item a,
  #navbar.scrolled .oxy-nav-menu-list a { color: #fff !important; }
  html.dark #navbar { background: transparent !important; }
  html.dark #navbar.scrolled { background: #111 !important; }

  /* ── Overrides globales ── */

  /* Botones verdes */
  .ct-link-button,
  a.ct-link-button,
  button.ct-link-button {
    background-color: #70B62F !important;
    border-color: #70B62F !important;
    color: #fff !important;
  }
  .ct-link-button:hover,
  a.ct-link-button:hover,
  button.ct-link-button:hover {
    background-color: #5a9424 !important;
    border-color: #5a9424 !important;
  }
  #login-open-btn {
    background: #70B62F !important;
    border: none !important;
    box-shadow: 0 2px 10px rgba(112,182,47,.35);
    font-size: 0.92rem !important;
    padding: 10px 20px !important;
  }
  #login-open-btn:hover {
    background: #5a9424 !important;
    filter: none;
  }

  /* ── Tipografía del navbar ── */
  #navbar, #navbar * { font-family: 'Lato', sans-serif !important; }

  /* ── Layout del navbar (las clases ct- no tienen estilos propios aquí) ── */
  #navbar .ct-section-inner-wrap { padding: 0; width: 100%; }
  #new_columns-66-16289 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 70px;
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }
  #div_block-67-16289 { flex-shrink: 0; display: flex; align-items: center; }
  #div_block-68-16289 { flex: 1; display: flex; align-items: center; justify-content: flex-start; padding-left: 16px; }
  #div_block-69-16289 { flex-shrink: 0; display: flex; align-items: center; gap: 8px; margin-left: 0; }
  #_nav_menu-71-16289 { display: flex; align-items: center; }

  /* ── Links del menú desktop ── */
  #menu-dld-v2 {
    display: flex;
    align-items: center;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #menu-dld-v2 .menu-item a {
    display: block;
    padding: 8px 14px;
    font-size: 1.05em;
    font-weight: 600;
    color: #fff !important;
    text-decoration: none;
    border-radius: 6px;
    transition: background 0.2s;
    white-space: nowrap;
  }
  #menu-dld-v2 .menu-item a:hover { background: rgba(255,255,255,0.15); }

  /* ── Hamburger (oculto en desktop) ── */
  .oxy-menu-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 8px;
    transition: background 0.2s;
    background: none;
    border: none;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  .oxy-menu-toggle:hover { background: rgba(255,255,255,0.15); }
  .oxy-nav-menu-hamburger { display: flex; flex-direction: column; gap: 5px; }
  .oxy-nav-menu-hamburger-line { width: 26px; height: 3px; background: #fff; border-radius: 2px; display: block; }

  /* ── Dropdown móvil (oculto por defecto) ── */
  .menu-dld-v2-container { display: block; }

  /* ── MÓVIL (≤900 px) ── */
  @media (max-width: 900px) {
    #new_columns-66-16289 { padding: 0 16px; }

    /* Logo un poco más hacia el centro en móvil */
    #div_block-67-16289 { margin-left: 20px; }

    /* Ocultar menú inline, mostrar hamburger */
    .menu-dld-v2-container { display: none !important; }
    .oxy-menu-toggle       { display: flex !important; }

    /* Ocultar login desktop */
    #login-open-btn { display: none !important; }

    /* Scroll offset */
    #section-experiences,
    #section-faq,
    #section-resenas,
    #section-contacto { scroll-margin-top: 64px; }
  }

  /* Evitar overflow clipping en contenedores del navbar */
  #navbar, #navbar .ct-section-inner-wrap,
  #new_columns-66-16289, #div_block-67-16289,
  #_nav_menu-71-16289, ._nav_menu-71-16289 {
    overflow: visible !important;
  }

  /* Menú desplegable móvil cuando está abierto */
  @media (max-width: 900px) {
    #navbar, #navbar .ct-section-inner-wrap,
    #new_columns-66-16289, #div_block-67-16289 {
      overflow: visible !important;
    }
    .menu-dld-v2-container.nav-open {
      display: block !important;
      position: fixed !important;
      top: 64px !important; left: 0 !important; right: 0 !important;
      background: #2b2b2b !important;
      z-index: 9999 !important;
      box-shadow: 0 4px 20px rgba(0,0,0,.35) !important;
      padding: 8px 0 12px !important;
      width: 100% !important;
      height: auto !important;
      max-height: calc(100vh - 64px) !important;
      overflow-y: auto !important;
      clip: auto !important;
      clip-path: none !important;
    }
    .menu-dld-v2-container.nav-open #menu-dld-v2 {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0 !important;
      padding: 0 !important;
      display: flex !important;
    }
    .menu-dld-v2-container.nav-open #menu-dld-v2 .menu-item a {
      display: block !important;
      padding: 14px 24px !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      border-bottom: 1px solid rgba(255,255,255,.08) !important;
      border-radius: 0 !important;
    }
    .menu-dld-v2-container.nav-open #menu-dld-v2 .menu-item:last-child a { border-bottom: none !important; }
  }

  /* ── Botones desktop del navbar ── */
  #lang-toggle-btn {
    background: transparent;
    border: none;
    color: #fff;
    border-radius: 999px;
    padding: 4px 8px;
    font-family: inherit;
    font-size: 0.82em;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: background 0.2s;
    white-space: nowrap;
    opacity: 0.9;
  }
  #lang-toggle-btn:hover { background: rgba(255,255,255,0.15); }

  #dark-toggle-btn {
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.7);
    border-radius: 999px;
    width: 28px;
    height: 28px;
    font-size: 0.9em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  #dark-toggle-btn:hover { background: rgba(255,255,255,0.15); }

  /* ── DESKTOP (>900 px) ── */
  @media (min-width: 901px) {
    .oxy-menu-toggle { display: none !important; }
    .menu-dld-v2-container { display: block !important; }
    #mobile-lang-item  { display: none !important; }
    #mobile-login-item { display: none !important; }
  }
</style>

<section id="navbar" class=" ct-section ">
  <div class="ct-section-inner-wrap">
    <div id="new_columns-66-16289" class="ct-new-columns">
      <div id="div_block-67-16289" class="ct-div-block">
        ${c.navbar.logoLink
          ? `<a id="link-78-16289" class="ct-link" href="${e(c.navbar.logoLink)}"><img id="image-70-16289" alt="" src="${e(c.navbar.logoUrl)}" class="ct-image" srcset="" sizes="(max-width: 140px) 100vw, 140px" /></a>`
          : `<span id="link-78-16289" class="ct-link"><img id="image-70-16289" alt="" src="${e(c.navbar.logoUrl)}" class="ct-image" srcset="" sizes="(max-width: 140px) 100vw, 140px" /></span>`
        }
      </div>
      <main id="div_block-68-16289" class="ct-div-block">
        <nav id="_nav_menu-71-16289" class="oxy-nav-menu oxy-nav-menu-dropdowns oxy-nav-menu-dropdown-arrow" style="position:relative; z-index:1001;">
          <button class="oxy-menu-toggle" type="button" aria-label="Abrir menú">
            <div class="oxy-nav-menu-hamburger-wrap">
              <div class="oxy-nav-menu-hamburger">
                <div class="oxy-nav-menu-hamburger-line"></div>
                <div class="oxy-nav-menu-hamburger-line"></div>
                <div class="oxy-nav-menu-hamburger-line"></div>
              </div>
            </div>
          </button>
          <div class="menu-dld-v2-container">
            <ul id="menu-dld-v2" class="oxy-nav-menu-list">
              ${navLinks}
              <li id="mobile-lang-item" class="menu-item" onclick="window.__phnToggleLang()"><span>${window.__phnCurrentLang === 'en' ? 'ES 🌐' : 'EN 🌐'}</span></li>
              <li id="mobile-login-item" class="menu-item"><a href="${e(c.navbar.loginHref)}">${e(c.navbar.loginText)}</a></li>
            </ul>
          </div>
        </nav>
      </main>
      <div id="div_block-69-16289" class="ct-div-block">
        <button id="lang-toggle-btn" onclick="window.__phnToggleLang()" type="button">${window.__phnCurrentLang === 'en' ? 'ES' : 'EN'}</button>
        <button id="dark-toggle-btn" type="button" title="Cambiar tema">🌙</button>
        <button id="login-open-btn" class="ct-link-button" type="button" style="border-radius:999px;display:flex;align-items:center;gap:7px;white-space:nowrap;transition:filter .2s;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>${e(c.navbar.loginText)}</button>
      </div>
    </div>
  </div>
</section>

`;
  }

  // ── HERO (sección propia, sin conflictos con CSS externo) ────────────────
  function buildHeroMobile() {
    const h = c.hero;
    return `
<style>
  /* Ocultar las secciones hero originales del sitio para evitar conflictos */
  #section-1348-33, #section-1363-33 { display: none !important; }

  /* Hero: video completo con texto encima */
  #hero-phn {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    min-height: 100svh;
    min-height: 100vh;
  }
  #hero-phn .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    pointer-events: none;
  }
  #hero-phn .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%);
    z-index: 1;
  }
  #hero-phn .hero-text {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    max-width: 560px;
    padding: 40px 48px;
    color: #fff;
    box-sizing: border-box;
  }
  #hero-phn .hero-text h1 {
    font-family: 'Corbel', 'Lato', sans-serif;
    font-style: italic;
    font-size: 2.7em;
    font-weight: 700;
    line-height: 1.15;
    margin: 0 0 18px;
    color: #fff;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }
  #hero-phn .hero-text p {
    font-size: 1.35em;
    margin: 0 0 32px;
    color: rgba(255,255,255,0.92);
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }
  #hero-phn .hero-text a {
    align-self: flex-start;
  }
  #hero-phn .hero-bg--desktop { display: block; }
  #hero-phn .hero-bg--mobile  { display: none; }
  @media (max-width: 768px) {
    #hero-phn .hero-bg--desktop { display: none; }
    #hero-phn .hero-bg--mobile  { display: block; }
    #hero-phn .hero-text { padding: 20px 20px 110px; max-width: 100%; }
    #hero-phn .hero-text h1 { font-size: 1.7em; }
    #hero-phn .hero-text p { font-size: 1em; margin-bottom: 16px; }
  }
  @media (max-width: 380px) {
    #hero-phn .hero-text h1 { font-size: 1.4em; }
  }
</style>
<div id="hero-phn">
  ${h.mediaType === 'video'
    ? `<video class="hero-bg hero-bg--desktop" id="hero-video-desktop" autoplay loop muted playsinline preload="auto"><source src="${e(h.videoUrl || 'public/media/video3.mp4')}" type="video/mp4" /></video>`
    : `<img class="hero-bg hero-bg--desktop" src="${e(h.imageUrl || 'public/images/imagen1.webp')}" alt="" />`}
  ${h.mediaType === 'video'
    ? `<video class="hero-bg hero-bg--mobile" autoplay muted loop playsinline><source src="${e(h.videoUrl || 'public/media/video3.mp4')}" type="video/mp4" /></video>`
    : `<img class="hero-bg hero-bg--mobile" src="${e(h.imageUrl || 'public/images/imagen1.webp')}" alt="" />`}
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <h1>${e(h.titleLine1)}<br />${e(h.titleLine2)}</h1>
    <p>${e(h.subtitle)}</p>
    <a class="ct-link-button" href="${e(h.ctaLink)}" target="_blank" rel="noopener" style="border-radius:999px; padding:14px 40px; font-size:1.05rem; font-weight:600;">${e(h.ctaText)}</a>
  </div>
</div>`;
  }

  // ── EXPERIENCIAS ─────────────────────────────────────────────────────────
  function buildExperiences() {
    var ex = c.experiences;

    var cards = ex.items.map(function (item, i) {
      var includesList = item.includes.map(function (inc) {
        return '<li>' + e(inc) + '</li>';
      }).join('');

      var fullDesc = e(item.description);
      var paragraphs = fullDesc.split(/\n\n/);
      var firstPara = paragraphs[0];
      var restParas = paragraphs.slice(1).join('</p><p class="exp-desc">');

      var buyBtn = '<a class="ct-link-button exp-buy-btn" href="' + e(item.ctaLink) + '" rel="noopener">' + e(item.ctaText || c.ui.expSeeMore) + '</a>';

      var imgCol = '<div class="exp-image-col"><img src="' + e(item.imageUrl) + '" alt="' + e(item.title) + '" class="exp-img" /></div>';

      var descHtml, detailsHtml;
      // Todas las experiencias: solo primer párrafo + "Ver más" + "Qué incluye"
      descHtml = '<p class="exp-desc">' + firstPara + '</p>';
      detailsHtml = (restParas
        ? '<details class="exp-details">'
          + '<summary class="exp-toggle">' + e(c.ui.expSeeMore) + ' <span class="exp-toggle-icon">&#9660;</span></summary>'
          + '<div class="exp-details-body"><p class="exp-desc">' + restParas + '</p></div>'
          + '</details>'
        : '');
      detailsHtml += '<details class="exp-details">'
        + '<summary class="exp-toggle">' + e(c.ui.expIncludes) + ' <span class="exp-toggle-icon">&#9660;</span></summary>'
        + '<div class="exp-details-body"><ul class="exp-includes">' + includesList + '</ul></div>'
        + '</details>';

      var textCol = '<div class="exp-text-col">'
        + '<h3 class="exp-title">' + e(item.title) + '</h3>'
        + descHtml
        + detailsHtml
        + buyBtn
        + '</div>';

      var cols = i % 2 === 0 ? imgCol + textCol : textCol + imgCol;

      return '<div class="exp-card">' + cols + '</div>';
    }).join('');

    return `
<section id="section-experiences" class=" ct-section">
  <style>
    #section-experiences { padding: 70px 20px; }
    #section-experiences .ct-section-inner-wrap { max-width: 1100px; margin: 0 auto; }
    .exp-section-title { text-align: center; margin-bottom: 56px; font-size: 2.2em; font-weight: 900; letter-spacing: -0.02em; }

    .exp-card {
      display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start;
      margin-bottom: 64px; padding-bottom: 64px; border-bottom: 1px solid #e8e8e8;
    }
    html.dark .exp-card { border-color: #333; }
    .exp-card:last-child { border-bottom: none; margin-bottom: 0; }

    .exp-image-col { flex: 1 1 300px; position: sticky; top: 90px; align-self: flex-start; }
    .exp-img {
      width: 100%; border-radius: 999px / 60%;
      object-fit: cover; object-position: top;
      max-height: 500px; aspect-ratio: 3/4;
      box-shadow: 0 12px 40px rgba(0,0,0,0.13);
    }

    .exp-text-col { flex: 1 1 320px; display: flex; flex-direction: column; gap: 12px; }

    .exp-title {
      font-size: 1.4em; font-weight: 900; text-transform: uppercase;
      letter-spacing: 0.04em; color: #70B62F; margin: 0;
    }
    html.dark .exp-title { color: #8fd43f; }

    .exp-preview { line-height: 1.75; color: #444; margin: 0; font-size: 1em; }
    html.dark .exp-preview { color: #bbb; }

    /* Desplegable */
    .exp-details { margin: 0; }
    .exp-details[open] .exp-toggle-icon { display: inline-block; transform: rotate(180deg); }
    .exp-toggle {
      display: inline-flex; align-items: center; gap: 6px;
      cursor: pointer; font-weight: 700; font-size: 0.9em;
      color: #70B62F; letter-spacing: 0.04em; text-transform: uppercase;
      list-style: none; user-select: none;
    }
    .exp-toggle::-webkit-details-marker { display: none; }
    .exp-toggle-icon { font-size: 0.75em; transition: transform 0.25s; }
    .exp-details-body { margin-top: 16px; }

    .exp-desc { line-height: 1.75; color: #444; margin-bottom: 10px; }
    html.dark .exp-desc { color: #bbb; }
    .exp-includes-heading { font-weight: 700; margin: 16px 0 8px; font-size: 0.95em; letter-spacing: 0.02em; }
    .exp-includes { padding-left: 20px; margin: 0; }
    .exp-includes li { margin-bottom: 6px; line-height: 1.65; color: #555; font-size: 0.93em; }
    html.dark .exp-includes li { color: #aaa; }

    .exp-buy-btn {
      display: inline-block; margin-top: 8px; align-self: flex-start;
      padding: 13px 36px; border-radius: 12px;
      background-color: #70B62F !important; color: #fff !important;
      border-color: #70B62F !important; font-weight: 700;
      letter-spacing: 0.04em; text-transform: uppercase;
      font-size: 0.9em;
      box-shadow: 0 4px 14px rgba(112,182,47,0.35);
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    }
    .exp-buy-btn:hover {
      background-color: #5a9424 !important; border-color: #5a9424 !important;
      transform: translateY(-1px); box-shadow: 0 6px 20px rgba(112,182,47,0.4);
    }

    @media (max-width: 700px) {
      .exp-card { flex-direction: column; gap: 24px; }
      .exp-image-col { flex: 1 1 100%; position: static; order: -1; }
      .exp-text-col { flex: 1 1 100%; order: 1; }
      .exp-img { width: 100%; max-height: none; aspect-ratio: 4/3; border-radius: 24px; object-fit: cover; }
      .exp-title { font-size: 1.15em; }
      .exp-buy-btn { width: auto; padding: 13px 36px; text-align: center; align-self: stretch; }
    }
  </style>
  <div class="ct-section-inner-wrap">
    <h2 class="ct-headline exp-section-title">${e(ex.heading)}</h2>
    ${cards}
  </div>
</section>`;
  }

  // ── RESEÑAS ───────────────────────────────────────────────────────────────
  function buildTestimonials() {
    const t = c.testimonials;
    const images = [
      'public/images/reseñas/reseña1.webp',
      'public/images/reseñas/reseña2.webp',
      'public/images/reseñas/reseña3.webp',
      'public/images/reseñas/reseña4.webp',
    ];
    const slides = images.map(function (src, i) {
      return '<div class="rsn-slide" data-index="' + i + '">'
        + '<img src="' + e(src) + '" alt="Reseña ' + (i + 1) + '" />'
        + '</div>';
    }).join('');

    const dots = images.map(function (_, i) {
      return '<button class="rsn-dot" data-dot="' + i + '" aria-label="Reseña ' + (i + 1) + '"></button>';
    }).join('');

    return `
<section id="section-resenas" class="ct-section">
  <style>
    #section-resenas {
      padding: 80px 40px;
      background: linear-gradient(160deg, #f4faf7 0%, #eaf5ee 100%);
    }
    html.dark #section-resenas { background: #1a1a1a; }

    #section-resenas .ct-section-inner-wrap { max-width: 1200px; margin: 0 auto; }

    #section-resenas h2 {
      text-align: center;
      font-size: 2.2em;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
      color: #111;
    }
    html.dark #section-resenas h2 { color: #f0f0f0; }

    .rsn-pretitle {
      text-align: center;
      font-size: 0.78em;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #27ae60;
      margin-bottom: 8px;
    }
    .rsn-subtitle {
      text-align: center;
      font-size: 1em;
      color: #777;
      margin-bottom: 52px;
      letter-spacing: 0.01em;
    }
    html.dark .rsn-subtitle { color: #999; }

    /* ── Base: viewport + track ── */
    .rsn-viewport { overflow: hidden; border-radius: 18px; box-shadow: 0 8px 32px rgba(0,0,0,0.13); }
    .rsn-track { display: flex; transition: transform 0.5s ease; will-change: transform; }
    .rsn-slide { flex: 0 0 100%; width: 100%; }
    .rsn-slide img { width: 100%; height: auto; display: block; }

    .rsn-controls {
      display: flex; align-items: center; justify-content: center;
      gap: 16px; margin-top: 20px;
    }
    .rsn-btn {
      background: none; border: 2px solid currentColor; border-radius: 50%;
      width: 38px; height: 38px; font-size: 1.1em; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      opacity: 0.6; transition: opacity 0.2s;
    }
    .rsn-btn:hover { opacity: 1; }
    .rsn-dots { display: flex; gap: 8px; }
    .rsn-dot {
      width: 10px; height: 10px; border-radius: 50%; border: none;
      background: #ccc; cursor: pointer; padding: 0; transition: background 0.2s;
    }
    .rsn-dot.active { background: #70B62F; }

    /* ── Desktop: cuadrícula 2 columnas ── */
    @media (min-width: 601px) {
      .rsn-viewport { overflow: visible; border-radius: 0; box-shadow: none; }
      .rsn-track {
        display: grid; grid-template-columns: repeat(2, 1fr);
        gap: 24px; transform: none !important; transition: none;
      }
      .rsn-slide { flex: none; width: 100%; }
      .rsn-slide img {
        border-radius: 18px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.13);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .rsn-slide img:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
      .rsn-slide:last-child:nth-child(odd) {
        grid-column: 1 / -1; max-width: calc(50% - 12px); margin: 0 auto;
      }
      .rsn-controls { display: none; }
    }

    @media (max-width: 600px) {
      #section-resenas { padding: 48px 16px; }
      #section-resenas h2 { font-size: 1.5em; }
      .rsn-subtitle { margin-bottom: 32px; }
      /* Móvil: apiladas en columna, sin carrusel */
      .rsn-viewport { overflow: visible; border-radius: 0; box-shadow: none; }
      .rsn-track {
        display: flex; flex-direction: column;
        gap: 16px; transform: none !important; transition: none;
      }
      .rsn-slide { flex: none; width: 100%; }
      .rsn-slide img { border-radius: 14px; box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
      .rsn-controls { display: none; }
    }
  </style>

  <div class="ct-section-inner-wrap">
    <p class="rsn-pretitle">${e(c.ui.testimonialsPreTitle)}</p>
    <h2 class="ct-headline">${e(t.heading)}</h2>
    <p class="rsn-subtitle">${e(c.ui.testimonialsSubtitle)}</p>
    <div class="rsn-viewport">
      <div class="rsn-track" id="rsn-track">
        ${slides}
      </div>
    </div>
    <div class="rsn-controls">
      <button class="rsn-btn" id="rsn-prev">&#8592;</button>
      <div class="rsn-dots" id="rsn-dots">${dots}</div>
      <button class="rsn-btn" id="rsn-next">&#8594;</button>
    </div>
  </div>

</section>`;
  }

  // ── LIBROS (solo desktop) ────────────────────────────────────────────────
  function buildLibros() {
    var lb = c.libros;
    if (!lb) return '';
    var cards = lb.items.map(function (book) {
      var isBuyable = !!book.buyUrl;
      var visorHref = book.viewerUrl
        || ('visor-imagenes.html?catalog=proher&title=' + encodeURIComponent(book.title));
      var btnHref = isBuyable ? book.buyUrl : visorHref;
      var btnTarget = isBuyable ? ' target="_blank" rel="noopener"' : '';
      var btnClass = isBuyable ? 'lib-btn lib-btn--buy' : 'lib-btn';
      var visorNoDownload = book.viewerUrl
        || ('visor-imagenes.html?catalog=proher&title=' + encodeURIComponent(book.title));
      return '<div class="lib-card">'
        + '<a class="lib-cover-wrap" href="' + (isBuyable ? visorNoDownload : visorHref) + '">'
        + '<img class="lib-cover" src="' + e(book.imageUrl) + '" alt="' + e(book.title) + '" />'
        + '<div class="lib-cover-overlay"><span>Ver libro</span></div>'
        + '</a>'
        + '<div class="lib-info">'
        + '<h3 class="lib-title">' + e(book.title) + '</h3>'
        + '<p class="lib-desc">' + e(book.description) + '</p>'
        + (isBuyable ? '<span class="lib-price">' + e(book.price) + '</span>' : '')
        + (isBuyable
          ? '<a class="lib-btn lib-btn--buy" href="' + book.buyUrl + '" target="_blank" rel="noopener">' + e(book.ctaText) + '</a>'
          : '<a class="lib-btn" href="' + visorHref + '">' + e(book.ctaText) + '</a>')
        + '</div>'
        + '</div>';
    }).join('');

    return `
<section id="section-libros" class="ct-section">
  <style>
    #section-libros {
      display: block;
      padding: 60px 20px;
      background: transparent;
    }
    html.dark #section-libros { background: transparent; }
    @media (min-width: 769px) { #section-libros { padding: 80px 40px; } }

    #section-libros .lib-inner {
      max-width: 1100px;
      margin: 0 auto;
    }
    .lib-heading {
      text-align: center;
      font-size: 2.2em;
      font-weight: 900;
      color: #1a1a1a;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }
    html.dark .lib-heading { color: #f0f0f0; }
    .lib-subheading {
      text-align: center;
      color: #70B62F;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 56px;
    }
    .lib-grid {
      display: flex;
      flex-wrap: nowrap;
      gap: 24px;
      justify-content: center;
    }
    .lib-card { flex: 1 1 0; min-width: 0; max-width: 280px; }
    @media (max-width: 768px) {
      .lib-grid { flex-wrap: wrap; }
      .lib-card { flex: none; width: 100%; max-width: 360px; }
    }
    .lib-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 6px 32px rgba(0,0,0,0.09);
      transition: transform 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
    }
    html.dark .lib-card { background: #1e1e1e; box-shadow: 0 6px 32px rgba(0,0,0,0.3); }
    .lib-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.15); }

    .lib-cover-wrap {
      display: block;
      overflow: hidden;
      background: #f0f0f0;
      cursor: pointer;
      position: relative;
    }
    .lib-cover {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
    }
    .lib-card:hover .lib-cover { transform: scale(1.04); }
    .lib-cover-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s;
      pointer-events: none;
    }
    .lib-card:hover .lib-cover-overlay { opacity: 1; }
    .lib-cover-overlay span {
      background: #fff; color: #1a1a1a;
      padding: 10px 24px; border-radius: 999px;
      font-size: 0.9em; font-weight: 700;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      letter-spacing: 0.03em;
    }

    .lib-info {
      padding: 22px 24px 26px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .lib-title {
      font-size: 1.05em;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0 0 10px;
      line-height: 1.3;
    }
    html.dark .lib-title { color: #f0f0f0; }
    .lib-desc {
      font-size: 0.88em;
      color: #666;
      line-height: 1.65;
      margin: 0 0 20px;
      flex: 1;
    }
    html.dark .lib-desc { color: #aaa; }
    .lib-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #70B62F;
      color: #fff;
      border-radius: 999px;
      padding: 10px 24px;
      font-size: 0.88em;
      font-weight: 700;
      text-decoration: none;
      align-self: flex-start;
      transition: background 0.2s, transform 0.15s;
    }
    .lib-btn::before { content: ''; }
    .lib-btn:hover { background: #5a9424; transform: translateY(-1px); }
    .lib-price {
      font-size: 1.3em;
      font-weight: 900;
      color: #70B62F;
      margin-bottom: 8px;
    }
    html.dark .lib-price { color: #8fd43f; }
    .lib-btn--buy {
      background: #25d366;
    }
    .lib-btn--buy:hover { background: #1da851; }
  </style>
  <div class="lib-inner">
    <h2 class="lib-heading">${e(lb.heading)}</h2>
    <p class="lib-subheading">${e(lb.subheading)}</p>
    <div class="lib-grid">${cards}</div>
  </div>
</section>`;
  }

  // ── PRODUCTOS ────────────────────────────────────────────────────────────
  function buildProductos() {
    var p = c.productos;
    if (!p) return '';

    var cards = p.items.map(function (item) {
      var waLink = e(p.ctaBaseLink) + encodeURIComponent(item.name);
      var imgHtml = item.imageUrl
        ? '<img class="prod-img" src="' + e(item.imageUrl) + '" alt="' + e(item.name) + '" />'
        : '<div class="prod-placeholder"><span class="prod-initials">' + e(item.name.charAt(0)) + '</span></div>';

      return '<div class="prod-card">'
        + '<div class="prod-cover">' + imgHtml + '</div>'
        + '<div class="prod-info">'
        + '<h3 class="prod-name">' + e(item.name) + '</h3>'
        + '<a class="prod-btn" href="' + waLink + '" target="_blank" rel="noopener">'
        + e(p.ctaText)
        + '</a>'
        + '</div>'
        + '</div>';
    }).join('');

    return `
<section id="section-productos" class="ct-section">
  <style>
    #section-productos {
      padding: 70px 20px;
      background: #fff;
    }
    html.dark #section-productos { background: #121212; }
    #section-productos .prod-inner { max-width: 1200px; margin: 0 auto; }

    .prod-section-title {
      text-align: center;
      font-size: 2.2em;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #1a1a1a;
      margin-bottom: 6px;
    }
    html.dark .prod-section-title { color: #f0f0f0; }

    .prod-section-sub {
      text-align: center;
      color: #70B62F;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 56px;
    }

    .prod-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    @media (max-width: 1024px) { .prod-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 700px)  { .prod-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
    @media (max-width: 400px)  { .prod-grid { grid-template-columns: 1fr; } }

    .prod-card {
      background: #fff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
      border: 1px solid #f0f0f0;
    }
    html.dark .prod-card { background: #1e1e1e; border-color: #2a2a2a; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
    .prod-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(112,182,47,0.18); }

    .prod-cover {
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      background: #f5faf0;
    }
    html.dark .prod-cover { background: #1a2a10; }

    .prod-img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.35s;
    }
    .prod-card:hover .prod-img { transform: scale(1.05); }

    .prod-placeholder {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #c8eaa0, #70B62F);
    }
    .prod-initials {
      font-size: 3em;
      font-weight: 900;
      color: #fff;
      letter-spacing: -0.03em;
      text-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .prod-info {
      padding: 16px 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
    }
    .prod-name {
      font-size: 1em;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0;
      line-height: 1.25;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
    html.dark .prod-name { color: #f0f0f0; }

    .prod-btn {
      display: inline-block;
      background: #70B62F;
      color: #fff;
      border-radius: 999px;
      padding: 9px 20px;
      font-size: 0.85em;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      transition: background 0.2s, transform 0.15s;
      align-self: stretch;
    }
    .prod-btn:hover { background: #5a9424; transform: translateY(-1px); }
  </style>
  <div class="prod-inner">
    <h2 class="prod-section-title">${e(p.heading)}</h2>
    <p class="prod-section-sub">${e(p.subheading)}</p>
    <div class="prod-grid">${cards}</div>
  </div>
</section>`;
  }

  // ── CONTACTO ─────────────────────────────────────────────────────────────
  function buildContacto() {
    const con = c.contacto;
    return `
<section id="section-contacto" class="ct-section">
  <style>
    #section-contacto {
      padding: 100px 40px;
      background: url('public/images/contactos.jpeg') center center / cover no-repeat;
      position: relative;
    }
    #section-contacto::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.38);
    }
    html.dark #section-contacto { background: url('public/images/contactos.jpeg') center center / cover no-repeat !important; }

    #section-contacto .ct-section-inner-wrap {
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      background: rgba(255,255,255,0.93);
      border-radius: 24px;
      padding: 60px 56px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.22);
      backdrop-filter: blur(4px);
    }
    html.dark #section-contacto .ct-section-inner-wrap {
      background: rgba(18,18,18,0.92);
    }

    #section-contacto h2 {
      font-size: 2.4em;
      font-weight: 900;
      margin-bottom: 6px;
      letter-spacing: -0.02em;
      color: #111;
    }
    html.dark #section-contacto h2 { color: #f0f0f0; }

    #section-contacto .con-sub {
      font-size: 1.05em;
      color: #555;
      margin-bottom: 44px;
      letter-spacing: 0.01em;
    }
    html.dark #section-contacto .con-sub { color: #999; }

    .con-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: start;
    }

    /* Formulario */
    .con-form { display: flex; flex-direction: column; gap: 16px; }
    .con-form input,
    .con-form textarea {
      width: 100%;
      padding: 14px 20px;
      border: 1.5px solid #e0e0e0;
      border-radius: 12px;
      font-size: 0.97em;
      font-family: inherit;
      box-sizing: border-box;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      background: #fafafa;
      color: #222;
      letter-spacing: 0.01em;
    }
    html.dark .con-form input,
    html.dark .con-form textarea { background: #1e1e1e; border-color: #333; color: #e0e0e0; }
    .con-form textarea { border-radius: 12px; resize: vertical; min-height: 130px; }
    .con-form input:focus, .con-form textarea:focus {
      border-color: #27ae60;
      box-shadow: 0 0 0 3px rgba(39,174,96,0.12);
      background: #fff;
    }
    .con-form button {
      align-self: flex-start;
      padding: 14px 44px;
      background: #70B62F;
      color: #fff;
      border: none;
      border-radius: 12px;
      font-size: 0.97em;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      font-family: inherit;
      box-shadow: 0 4px 14px rgba(112,182,47,0.35);
    }
    .con-form button:hover {
      background: #5a9424;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(112,182,47,0.4);
    }
    .con-links { margin-top: 28px; display: flex; gap: 24px; flex-wrap: wrap; font-size: 0.93em; }
    .con-links a {
      color: #27ae60;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 600;
      letter-spacing: 0.01em;
      transition: color 0.2s;
    }
    .con-links a:hover { color: #1e8e4e; text-decoration: none; }
    #con-success { display:none; color: #27ae60; font-weight: 600; margin-top: 14px; letter-spacing: 0.01em; }

    /* Mapa */
    .con-map-col { display: flex; flex-direction: column; gap: 18px; }
    .con-map-wrap {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.14);
      height: 300px;
    }
    .con-map-wrap iframe { width: 100%; height: 100%; border: none; display: block; }
    .con-map-info {
      background: #f7faf8;
      border-radius: 14px;
      padding: 22px 26px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      border-left: 4px solid #27ae60;
    }
    html.dark .con-map-info { background: #1a1a1a; border-left-color: #27ae60; }
    .con-map-info h3 {
      font-size: 0.78em;
      font-weight: 800;
      margin-bottom: 8px;
      color: #27ae60;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .con-map-info p { font-size: 0.92em; color: #444; line-height: 1.8; margin: 0; }
    html.dark .con-map-info p { color: #bbb; }

    @media (max-width: 768px) {
      #section-contacto { padding: 48px 16px; }
      #section-contacto .ct-section-inner-wrap { padding: 32px 20px; border-radius: 18px; }
      #section-contacto h2 { font-size: 1.5em; }
      .con-layout { grid-template-columns: 1fr; gap: 32px; }
      .con-map-wrap { height: 220px; }
      .con-form button { width: 100%; text-align: center; align-self: stretch; box-sizing: border-box; }
    }
  </style>
  <div class="ct-section-inner-wrap">
    <h2 class="ct-headline">${e(con.heading)}</h2>
    <p class="con-sub">${e(con.subheading)}</p>
    <div class="con-layout">

      <!-- Formulario -->
      <div>
        <form class="con-form" id="con-form" action="https://formspree.io/f/${e(con.formspreeId)}" method="POST">
          <input type="text"  name="nombre"  placeholder="${e(c.ui.formName)}" required />
          <input type="email" name="email"   placeholder="${e(c.ui.formEmail)}" required />
          <input type="text"  name="asunto"  placeholder="${e(c.ui.formSubject)}" />
          <textarea           name="mensaje" placeholder="${e(c.ui.formMessage)}" required></textarea>
          <button type="submit">${e(c.ui.formSubmit)}</button>
        </form>
        <p id="con-success">${e(c.ui.formSuccess)}</p>
        <div class="con-links">
          <a href="https://wa.me/${e(con.whatsapp)}" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.361-.214-3.759.896.955-3.668-.235-.377A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>

      <!-- Mapa: Tecamachalco -->
      <div class="con-map-col">
        <div class="con-map-wrap">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.73420%2C18.86811%2C-97.71420%2C18.88811&amp;layer=mapnik&amp;marker=18.87811%2C-97.72420"
            allowfullscreen
            loading="lazy"
            title="Ubicación Tecamachalco">
          </iframe>
        </div>
        <div class="con-map-info">
          <h3>Tecamachalco, Pue.</h3>
          <p>Blvd. Cuauhtémoc 1602, La Villa, 75483 Tecamachalco, Pue.</p>
          <a href="https://maps.app.goo.gl/tAyZhbaHo3TyA5pUA" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;color:#27ae60;font-size:0.88em;font-weight:600;text-decoration:none;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${e(c.ui.mapLink)}
          </a>
        </div>
      </div>

    </div>
  </div>
</section>`;
  }

  // ── SECCIÓN INFO (dirección + redes + logo) ───────────────────────────────
  function buildInfoSection() {
    const info = c.infoSection;

    const socialIcons = {
      fb: 'public/icons/redes/facebook.svg',
      yt: 'public/icons/redes/youtube.svg',
      ig: 'public/icons/redes/instagram.svg',
      wa: 'public/icons/redes/whatsapp.svg',
      tt: 'public/icons/redes/tiktok.svg',
      tw: 'public/icons/redes/x.svg',
      em: 'public/icons/redes/gmail.svg',
    };

    const socialBtns = info.social.map(function (s) {
      const src = socialIcons[s.icon] || '';
      const inner = src ? '<img src="' + src + '" alt="' + e(s.name) + '" style="width:20px;height:20px;object-fit:contain;" />' : '';
      return '<a class="info-social-btn" href="' + e(s.url) + '" target="_blank" rel="noopener" aria-label="' + e(s.name) + '" style="background:' + e(s.color) + '">'
        + inner
        + '</a>';
    }).join('');

    const addrLines = info.address.lines.map(function (l) {
      return '<p>' + e(l) + '</p>';
    }).join('');

    return `
<section id="section-info" class="ct-section">
  <style>
    #section-info {
      background: #2b2b2b;
      color: #ddd;
      padding: 60px 32px;
    }
    html.dark #section-info { background: #0f0f0f; }
    #section-info .info-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 40px;
      align-items: start;
    }
    .info-address h3 {
      font-size: 0.85em;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 12px;
      color: #fff;
    }
    .info-address p { font-size: 0.9em; line-height: 1.7; color: #bbb; margin: 0; }
    .info-center { text-align: center; }
    .info-center img { height: 70px; margin-bottom: 14px; }
    .info-center .info-terms {
      display: block;
      color: #27ae60;
      font-size: 0.85em;
      text-decoration: none;
      margin-bottom: 16px;
    }
    .info-center .info-terms:hover { text-decoration: underline; }
    .info-center p { font-size: 0.8em; color: #888; margin: 0; line-height: 1.8; }
    .info-social h3 {
      font-size: 0.85em;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 16px;
      text-align: right;
    }
    .info-social-grid {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .info-social-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: transform 0.2s, opacity 0.2s;
    }
    .info-social-btn:hover { transform: scale(1.15); opacity: 0.9; }
    .info-social-btn svg { width: 20px; height: 20px; }

    /* WhatsApp flotante */
    #wa-float {
      position: fixed;
      bottom: 86px;
      right: 24px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #25d366;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(37,211,102,0.5);
      z-index: 8999;
      transition: transform 0.2s;
    }
    #wa-float:hover { transform: scale(1.1); }
    #wa-float svg { width: 28px; height: 28px; color: #fff; fill: #fff; }

    @media (max-width: 768px) {
      #wa-float { right: 10px; }
      #section-info .info-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .info-social h3 { text-align: center; }
      .info-social-grid { justify-content: center; }
      .info-address h3 { text-align: center; }
    }
  </style>

  <div class="info-grid">
    <div class="info-address">
      <h3>${e(info.address.heading)}</h3>
      ${addrLines}
    </div>
    <div class="info-center">
      <img src="${e(c.navbar.logoUrl)}" alt="Logo PHN" />
      <a class="info-terms" href="${e(info.termsUrl)}">${e(info.termsText)}</a>
      <p>${e(info.credits)}</p>
    </div>
    <div class="info-social">
      <h3>MÁS INFORMACIÓN</h3>
      <div class="info-social-grid">${socialBtns}</div>
    </div>
  </div>
</section>

<a id="wa-float" href="https://wa.me/${e(info.whatsappFloat)}" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.388l-.361-.214-3.759.896.955-3.668-.235-.377A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
</a>`;
  }

  // ── PREGUNTAS FRECUENTES ──────────────────────────────────────────────────
  function buildFaq() {
    const f = c.faq;
    const items = f.items.map(function (item, i) {
      return `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false" data-faq="${i}">
          <span>${e(item.q)}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-a" id="faq-a-${i}">${e(item.a)}</div>
      </div>`;
    }).join('');

    return `
<section id="section-faq" class="ct-section">
  <style>
    #section-faq { padding: 70px 20px; }
    #section-faq .ct-section-inner-wrap { max-width: 1100px; margin: 0 auto; }
    .faq-layout {
      display: flex;
      gap: 60px;
      align-items: stretch;
    }
    .faq-col { flex: 1 1 0; min-width: 0; }
    .faq-img-col { flex: 0 0 480px; display: flex; flex-direction: column; }
    .faq-heading { margin-bottom: 30px; font-size: 1.8em; }
    .faq-item { border-bottom: 1px solid #e5e5e5; }
    .faq-q {
      width: 100%;
      background: none;
      border: none;
      text-align: left;
      padding: 18px 4px;
      font-size: 1em;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      font-family: inherit;
      color: inherit;
    }
    .faq-q:hover { color: #27ae60; }
    .faq-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      transition: transform 0.3s;
    }
    .faq-q[aria-expanded="true"] .faq-icon { transform: rotate(180deg); }
    .faq-a {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease, padding 0.3s;
      font-size: 0.95em;
      line-height: 1.7;
      padding: 0 4px;
      color: #555;
    }
    .faq-a.open { max-height: 300px; padding: 0 4px 18px; }

    /* ── Slideshow FAQ ── */
    .faq-slideshow {
      position: relative;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      flex: 1;
      min-height: 400px;
      background: #f0f0f0;
    }
    .faq-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.8s ease;
    }
    .faq-slide.active { opacity: 1; }
    .faq-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .faq-dots {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 7px;
      z-index: 2;
    }
    .faq-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      border: none; cursor: pointer; padding: 0;
      transition: background 0.3s, transform 0.3s;
    }
    .faq-dot.active { background: #fff; transform: scale(1.3); }
    .faq-slide img  { cursor: zoom-in; }

    /* ── Lightbox FAQ ── */
    #faq-lightbox {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.88);
      z-index: 99999;
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
      animation: faq-lb-in 0.22s ease;
    }
    #faq-lightbox.open { display: flex; }
    @keyframes faq-lb-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    #faq-lightbox img {
      max-width: 92vw;
      max-height: 90vh;
      border-radius: 12px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.6);
      object-fit: contain;
      animation: faq-lb-img-in 0.25s cubic-bezier(0.34,1.4,0.64,1);
      pointer-events: none;
    }
    @keyframes faq-lb-img-in {
      from { transform: scale(0.85); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
    #faq-lightbox-close {
      position: absolute;
      top: 18px; right: 22px;
      background: rgba(255,255,255,0.15);
      border: none; color: #fff;
      font-size: 1.6em; line-height: 1;
      width: 40px; height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
    }
    #faq-lightbox-close:hover { background: rgba(255,255,255,0.3); }

    /* ── Miniaturas FAQ (solo desktop) ── */
    .faq-thumbs {
      display: flex;
      gap: 8px;
      margin-top: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .faq-thumb {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
      flex-shrink: 0;
    }
    .faq-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
    }
    .faq-thumb:hover {
      transform: scale(1.08);
      box-shadow: 0 4px 14px rgba(0,0,0,0.18);
    }
    .faq-thumb.active {
      border-color: #70B62F;
      box-shadow: 0 0 0 2px rgba(112,182,47,0.35);
    }
    @media (max-width: 768px) {
      .faq-thumbs { display: none; }
    }

    @media (max-width: 960px) {
      .faq-img-col { flex: 0 0 300px; }
    }
    @media (max-width: 768px) {
      #section-faq { padding: 48px 16px; }
      .faq-layout { flex-direction: column-reverse; gap: 28px; }
      .faq-img-col { flex: none; width: 100%; }
      .faq-slideshow { max-height: 320px; aspect-ratio: 4/3; }
      .faq-heading { font-size: 1.4em; }
    }
  </style>
  <div class="ct-section-inner-wrap">
    <div class="faq-layout">
      <div class="faq-col">
        <h2 class="ct-headline faq-heading">${e(f.heading)}</h2>
        ${items}
      </div>
      <div class="faq-img-col">
        <div class="faq-slideshow" id="faq-slideshow">
          <div class="faq-slide active"><img src="public/images/preguntas/imagen1.webp" alt="Pregunta 1" /></div>
          <div class="faq-slide"><img src="public/images/preguntas/imagen2.webp" alt="Pregunta 2" /></div>
          <div class="faq-slide"><img src="public/images/preguntas/imagen3.webp" alt="Pregunta 3" /></div>
          <div class="faq-slide"><img src="public/images/preguntas/imagen4.webp" alt="Pregunta 4" /></div>
          <div class="faq-slide"><img src="public/images/preguntas/imagen5.webp" alt="Pregunta 5" /></div>
          <div class="faq-dots">
            <button class="faq-dot active" data-idx="0"></button>
            <button class="faq-dot" data-idx="1"></button>
            <button class="faq-dot" data-idx="2"></button>
            <button class="faq-dot" data-idx="3"></button>
            <button class="faq-dot" data-idx="4"></button>
          </div>
        </div>
        <div class="faq-thumbs" id="faq-thumbs">
          <button class="faq-thumb active" data-idx="0"><img src="public/images/preguntas/imagen1.webp" alt="Pregunta 1" /></button>
          <button class="faq-thumb" data-idx="1"><img src="public/images/preguntas/imagen2.webp" alt="Pregunta 2" /></button>
          <button class="faq-thumb" data-idx="2"><img src="public/images/preguntas/imagen3.webp" alt="Pregunta 3" /></button>
          <button class="faq-thumb" data-idx="3"><img src="public/images/preguntas/imagen4.webp" alt="Pregunta 4" /></button>
          <button class="faq-thumb" data-idx="4"><img src="public/images/preguntas/imagen5.webp" alt="Pregunta 5" /></button>
        </div>
      </div>
    </div>
  </div>
</section>
<div id="faq-lightbox">
  <button id="faq-lightbox-close" aria-label="Cerrar">✕</button>
  <img id="faq-lightbox-img" src="" alt="" />
</div>`;
  }

  // ── RENDER PRINCIPAL ──────────────────────────────────────────────────────
  function render() {
    // Actualizar meta del documento
    document.title = c.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', c.meta.description);

    // Favicon
    var favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    if (!favicon) { favicon = document.createElement('link'); favicon.rel = 'icon'; document.head.appendChild(favicon); }
    favicon.href = c.meta.faviconUrl;

    // Construir e inyectar el HTML completo
    var root = document.getElementById('page-root');
    root.innerHTML = [
      buildNavbar(),
      '<div id="inner_content-18-13" class="ct-inner-content">',
      buildHeroMobile(),
      buildExperiences(),
      buildLibros(),
      buildFaq(),
      buildContacto(),
      '</div>',
      buildInfoSection(),
    ].join('\n');
  }

  // ── INICIALIZACIÓN DE INTERACTIVIDAD ─────────────────────────────────────
  function initAll() {

    // Tema: default claro, persiste en localStorage
    var savedTheme = localStorage.getItem('phn-theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    var darkBtn = document.getElementById('dark-toggle-btn');
    if (darkBtn) {
      darkBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      darkBtn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('phn-theme', isDark ? 'dark' : 'light');
        darkBtn.textContent = isDark ? '☀️' : '🌙';
      });
    }

    // Botón "Habla con Meredit IA" → abre el chat widget
    var openBtn = document.getElementById('login-open-btn');
    if (openBtn) {
      openBtn.addEventListener('click', function(ev) {
        ev.preventDefault();
        var toggle = document.getElementById('phn-toggle');
        if (toggle) {
          toggle.click();
          var chat = document.getElementById('phn-chat');
          if (chat) setTimeout(function(){ chat.scrollIntoView({ behavior:'smooth', block:'nearest' }); }, 100);
        }
      });
    }

    // Carrusel de reseñas
    var track   = document.getElementById('rsn-track');
    var rsnDots = document.querySelectorAll('.rsn-dot');
    var total   = document.querySelectorAll('.rsn-slide').length;
    var current = 0;
    var timer;

    function goTo(n) {
      current = (n + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      rsnDots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }
    function nextSlide() { goTo(current + 1); }
    function resetTimer() { clearInterval(timer); timer = setInterval(nextSlide, 3500); }

    if (track) {
      var btnNext = document.getElementById('rsn-next');
      var btnPrev = document.getElementById('rsn-prev');
      if (btnNext) btnNext.addEventListener('click', function () { nextSlide(); resetTimer(); });
      if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); resetTimer(); });
      rsnDots.forEach(function (d, i) {
        d.addEventListener('click', function () { goTo(i); resetTimer(); });
      });
      goTo(0);
      timer = setInterval(nextSlide, 3500);
    }

    // Slideshow FAQ — auto-play + swipe táctil + drag mouse + lightbox
    (function () {
      var box      = document.getElementById('faq-slideshow');
      var slides   = document.querySelectorAll('#faq-slideshow .faq-slide');
      var dots     = document.querySelectorAll('#faq-slideshow .faq-dot');
      var thumbs   = document.querySelectorAll('#faq-thumbs .faq-thumb');
      var lightbox = document.getElementById('faq-lightbox');
      var lbImg    = document.getElementById('faq-lightbox-img');
      var lbClose  = document.getElementById('faq-lightbox-close');
      if (!slides.length || !box) return;

      var cur = 0;
      var faqTimer;
      var INTERVAL = 3500;

      function showSlide(n) {
        cur = (n + slides.length) % slides.length;
        slides.forEach(function (s, i) { s.classList.toggle('active', i === cur); });
        dots.forEach(function (d, i)   { d.classList.toggle('active', i === cur); });
        thumbs.forEach(function (t, i) { t.classList.toggle('active', i === cur); });
      }
      function resetTimer() {
        clearInterval(faqTimer);
        faqTimer = setInterval(function () { showSlide(cur + 1); }, INTERVAL);
      }

      // Dots
      dots.forEach(function (d, i) {
        d.addEventListener('click', function () { showSlide(i); resetTimer(); });
      });

      // Miniaturas — clic cambia slide Y abre lightbox
      thumbs.forEach(function (t, i) {
        t.addEventListener('click', function () {
          showSlide(i);
          resetTimer();
          var img = slides[i].querySelector('img');
          if (!img) return;
          lbImg.src = img.src;
          lbImg.alt = img.alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
      });

      // ── Swipe táctil ──
      var touchStartX = 0;
      var touchMoved  = false;
      box.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        touchMoved  = false;
      }, { passive: true });
      box.addEventListener('touchmove', function () {
        touchMoved = true;
      }, { passive: true });
      box.addEventListener('touchend', function (e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
          showSlide(dx < 0 ? cur + 1 : cur - 1);
          resetTimer();
          touchMoved = true;
        }
      });

      // ── Drag con mouse ──
      var dragStartX = 0;
      var dragging   = false;
      var wasDragged = false;
      box.addEventListener('mousedown', function (e) {
        dragStartX = e.clientX;
        dragging   = true;
        wasDragged = false;
      });
      window.addEventListener('mousemove', function (e) {
        if (!dragging) return;
        if (Math.abs(e.clientX - dragStartX) > 8) wasDragged = true;
      });
      window.addEventListener('mouseup', function (e) {
        if (!dragging) return;
        dragging = false;
        var dx = e.clientX - dragStartX;
        if (Math.abs(dx) > 40) {
          showSlide(dx < 0 ? cur + 1 : cur - 1);
          resetTimer();
        }
      });

      // ── Lightbox al hacer clic (solo si no se arrastró) ──
      box.addEventListener('click', function (e) {
        if (wasDragged || touchMoved) return;
        var img = slides[cur].querySelector('img');
        if (!img) return;
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target === lbClose) closeLightbox();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
      });

      showSlide(0);
      faqTimer = setInterval(function () { showSlide(cur + 1); }, INTERVAL);
    })();

    // FAQ acordeón
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-q').forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
          document.getElementById('faq-a-' + b.dataset.faq).classList.remove('open');
        });
        if (!expanded) {
          btn.setAttribute('aria-expanded', 'true');
          document.getElementById('faq-a-' + btn.dataset.faq).classList.add('open');
        }
      });
    });

    // Formulario de contacto
    var conForm = document.getElementById('con-form');
    var conOk   = document.getElementById('con-success');
    if (conForm) {
      conForm.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var nombre  = (conForm.querySelector('[name="nombre"]')  || {}).value || '';
        var email   = (conForm.querySelector('[name="email"]')   || {}).value || '';
        var asunto  = (conForm.querySelector('[name="asunto"]')  || {}).value || '';
        var mensaje = (conForm.querySelector('[name="mensaje"]') || {}).value || '';
        var wa      = (window.SITE_CONTENT && window.SITE_CONTENT.contacto && window.SITE_CONTENT.contacto.whatsapp)
                      || '5212241033782';
        var text = encodeURIComponent(
          '¡Hola! 👋 Me contacto desde la página de PHN.\n\n' +
          '👤 Nombre: '  + nombre  + '\n' +
          '📧 Email: '   + email   + '\n' +
          (asunto  ? '📌 Asunto: '  + asunto  + '\n' : '') +
          '\n💬 Mensaje:\n' + mensaje
        );
        window.open('https://wa.me/' + wa + '?text=' + text, '_blank');
        conForm.reset();
        if (conOk) conOk.style.display = 'block';
      });
    }

    // Hamburger móvil
    var hamburger = document.querySelector('.oxy-menu-toggle');
    var navMenu   = document.querySelector('.menu-dld-v2-container');
    if (hamburger && navMenu) {
      // Mover el dropdown al body SOLO en móvil para escapar overflow:hidden del navbar
      function phnHandleMobileMenu() {
        if (window.innerWidth <= 900) {
          if (navMenu.parentElement !== document.body) {
            document.body.appendChild(navMenu);
          }
        } else {
          // En desktop: regresarlo al nav si fue movido
          var nav = document.querySelector('._nav_menu-71-16289, .oxy-nav-menu');
          if (nav && navMenu.parentElement === document.body) {
            nav.appendChild(navMenu);
          }
          navMenu.classList.remove('nav-open');
        }
      }
      phnHandleMobileMenu();
      window.addEventListener('resize', phnHandleMobileMenu);

      hamburger.addEventListener('click', function (ev) {
        ev.stopPropagation();
        navMenu.classList.toggle('nav-open');
      });
      // Cerrar al dar clic en un link
      navMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navMenu.classList.remove('nav-open');
        });
      });
      // Cerrar al dar clic fuera — se registra solo una vez en el document
      if (!document.__phnOutsideClick) {
        document.__phnOutsideClick = true;
        document.addEventListener('click', function (ev) {
          var hb = document.querySelector('.oxy-menu-toggle');
          var nm = document.querySelector('.menu-dld-v2-container');
          if (nm && hb && !hb.contains(ev.target) && !nm.contains(ev.target)) {
            nm.classList.remove('nav-open');
          }
        });
      }
    }

    // Navbar fondo al hacer scroll
    var navbar = document.getElementById('navbar');
    var hero   = document.getElementById('hero-phn');
    if (navbar && hero) {
      window.addEventListener('scroll', function () {
        var heroBottom = hero.offsetTop + hero.offsetHeight;
        navbar.classList.toggle('scrolled', window.scrollY > heroBottom - 80);
      });
    }

    // Hero videos: autoplay con sonido en desktop, muted en móvil; pausa al salir del viewport
    var heroVideos = document.querySelectorAll('.hero-bg');
    heroVideos.forEach(function (vid) {
      if (vid.tagName !== 'VIDEO') return;
      var isDesktop = vid.classList.contains('hero-bg--desktop');
      vid.loop = true;
      vid.muted = !isDesktop; // móvil siempre muted; desktop intenta con sonido

      function tryPlay() {
        var p = vid.play();
        if (p && typeof p.catch === 'function') {
          p.catch(function () {
            // Si el navegador bloquea autoplay con sonido, caemos a muted y reintentamos
            vid.muted = true;
            vid.play().catch(function () {});
            // Al primer gesto del usuario, reactivamos el sonido en desktop
            if (isDesktop) {
              var unmuteOnGesture = function () {
                vid.muted = false;
                vid.play().catch(function () {});
                document.removeEventListener('click', unmuteOnGesture);
                document.removeEventListener('touchstart', unmuteOnGesture);
                document.removeEventListener('keydown', unmuteOnGesture);
              };
              document.addEventListener('click', unmuteOnGesture, { once: true });
              document.addEventListener('touchstart', unmuteOnGesture, { once: true });
              document.addEventListener('keydown', unmuteOnGesture, { once: true });
            }
          });
        }
      }

      tryPlay();

      // Si termina (por si el navegador ignora loop), reiniciar
      vid.addEventListener('ended', function () {
        vid.currentTime = 0;
        tryPlay();
      });

      // Pausar al salir del viewport, reanudar al volver
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              tryPlay();
            } else {
              vid.pause();
            }
          });
        }, { threshold: 0.25 });
        io.observe(vid);
      }
    });

  }

  // ── CAMBIO DE IDIOMA ─────────────────────────────────────────────────────
  window.__phnCurrentLang = localStorage.getItem('phn-lang') || 'es';

  window.__phnToggleLang = function () {
    window.__phnCurrentLang = window.__phnCurrentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('phn-lang', window.__phnCurrentLang);
    c = window.__phnCurrentLang === 'en'
      ? (window.SITE_CONTENT_EN || window.SITE_CONTENT)
      : window.SITE_CONTENT;
    render();
    initAll();
  };

  // Aplicar idioma guardado antes del primer render
  if (window.__phnCurrentLang === 'en' && window.SITE_CONTENT_EN) {
    c = window.SITE_CONTENT_EN;
  }

  render();
  initAll();

})();
