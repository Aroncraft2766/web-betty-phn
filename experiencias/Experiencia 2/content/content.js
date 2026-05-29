/**
 * CONTENIDO EDITABLE — Experiencia 2: EXPERIENCIA ARTIS
 * Edita este archivo para cambiar textos, precio, imagen y número de WhatsApp.
 */
window.EXP_CONTENT = {

  // ── META ──────────────────────────────────────────────────────────────────
  pageTitle: "EXPERIENCIA ARTIS — PHN",

  // ── BANNER SUPERIOR ───────────────────────────────────────────────────────
  banner: {
    imageUrl:        "content/images/banner.webp",
    imageAlt:        "EXPERIENCIA ARTIS",
    overlayTitle:    "",
    overlaySubtitle: "",
  },

  // ── PRODUCTO ──────────────────────────────────────────────────────────────
  product: {
    title:    "EXPERIENCIA ARTIS",
    price:    "",           // ej. "$1,500 MXN" — deja vacío para ocultar
    badge:    "15 días",

    imageUrl:      "../Experiencia 1/content/images/producto.webp",
    imageFallback: "../../imagen.webp",
    imageAlt:      "EXPERIENCIA ARTIS — PHN",

    shortDescription:
      "Con esta experiencia bajas el ácido úrico y alivias los dolores articulares… pero lo que realmente cambia es volver a moverte sin miedo, sin esa rigidez al despertar, sin que cada paso sea un recordatorio de que algo no está bien.",    fullDescription:
      "Hoy he visto personas con artritis reumatoide, artrosis y reumatismo recuperar su movilidad de manera natural, reducir medicamentos y volver a actividades que habían abandonado. Nadie habla solo del dolor que desapareció… hablan de recuperar su independencia y su calidad de vida.\n\nEsto no es un antiinflamatorio. Es una experiencia donde cuatro suplementos trabajan en sincronía sobre tu sistema articular. El A10 CAPS —formulado con Cúrcuma, Nogal negro y Malva— actúa directamente sobre la inflamación articular y el ácido úrico, calma el dolor y protege el cartílago. El RGC16 regenera las células y el tejido articular con su fórmula antioxidante de 16 frutas y plantas como Noni, Acai y Goji. El D7 CAPS mejora la circulación sanguínea para que los nutrientes lleguen a las articulaciones inflamadas. Y el VC1 CAPS —con Guanábana, Chirimoya y Vitamina C— fortalece el sistema inmune y protege los tejidos del daño oxidativo.\n\nLa inflamación baja, el movimiento regresa… y sin forzarlo, tu cuerpo recupera la flexibilidad que naturalmente debería tener.",
    includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
  },

  // ── CANTIDADES ────────────────────────────────────────────────────────────
  quantities: [
    { label: "1 paquete", value: "1", message: "Hola, quiero comprar *1 paquete* de la Experiencia Artis de PHN. ¿Me puedes dar más información?" },
    { label: "2 paquetes", value: "2", message: "Hola, quiero comprar *2 paquetes* de la Experiencia Artis de PHN. ¿Me puedes dar más información?" },
    { label: "3 paquetes", value: "3", message: "Hola, quiero comprar *3 paquetes* de la Experiencia Artis de PHN. ¿Me puedes dar más información?" },
    { label: "4 paquetes", value: "4", message: "Hola, quiero comprar *4 paquetes* de la Experiencia Artis de PHN. ¿Me puedes dar más información?" },
    { label: "5 paquetes", value: "5", message: "Hola, quiero comprar *5 paquetes* de la Experiencia Artis de PHN. ¿Me puedes dar más información?" },
  ],

  // ── WHATSAPP ──────────────────────────────────────────────────────────────
  whatsappNumber: "5212241033782",

  // ── BOTÓN COMPRAR ─────────────────────────────────────────────────────────
  buyButtonText: "Comprar por WhatsApp",
  buyButtonIcon: true,

  // ── NAVEGACIÓN ────────────────────────────────────────────────────────────
  backLink: "../../index.html",
  backText: "← Volver al inicio",

  // ── BRANDING ──────────────────────────────────────────────────────────────
  logoUrl:  "../../public/images/logos/Logo PHN.webp",
  logoLink: "../../index.html",
  logoAlt:  "PHN — Proher Natura",


  products: [
    { key: 'RGC-16', nombre: 'RGC16 1L', img: '../../public/images/productos/imagen15.webp' },
    { key: 'A-10', nombre: 'A10 CAPS', img: '../../public/images/productos/imagen6.webp' },
    { key: 'D-7', nombre: 'D7 CAPS', img: '../../public/images/productos/imagen4.webp' },
    { key: 'VC-1', nombre: 'VC1 CAPS', img: '../../public/images/productos/imagen7.webp' },
  ],

};
