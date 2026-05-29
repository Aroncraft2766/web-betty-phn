/**
 * CONTENIDO EDITABLE — Experiencia 7: EXPERIENCIA COLESTEROL Y TRIGLICÉRIDOS VITAL
 * Edita este archivo para cambiar textos, precio, imagen y número de WhatsApp.
 */
window.EXP_CONTENT = {

  // ── META ──────────────────────────────────────────────────────────────────
  pageTitle: "EXPERIENCIA COLESTEROL Y TRIGLICÉRIDOS VITAL — PHN",

  // ── BANNER SUPERIOR ───────────────────────────────────────────────────────
  banner: {
    imageUrl:        "content/images/banner.webp",
    imageAlt:        "EXPERIENCIA COLESTEROL Y TRIGLICÉRIDOS VITAL",
    overlayTitle:    "",
    overlaySubtitle: "",
  },

  // ── PRODUCTO ──────────────────────────────────────────────────────────────
  product: {
    title:    "EXPERIENCIA COLESTEROL Y TRIGLICÉRIDOS VITAL",
    price:    "",           // ej. "$1,500 MXN" — deja vacío para ocultar
    badge:    "3 meses",

    imageUrl:      "../Experiencia 1/content/images/producto.webp",
    imageFallback: "../../colesterol y trigliceridos.png",
    imageAlt:      "EXPERIENCIA COLESTEROL Y TRIGLICÉRIDOS VITAL — PHN",

    shortDescription:
      "Con esta experiencia equilibras tu colesterol y triglicéridos… pero lo que realmente cambia es esa paz de saber que tu corazón y tus arterias están limpias, que tu sangre fluye como debe, que tu cuerpo está protegido desde adentro.",
    fullDescription:
      "Yo también estuve en ese punto donde el médico decía \'hay que controlarlo con medicamento\'… hasta que encontré la forma de equilibrarlo de manera natural.\n\nHoy he visto personas normalizar sus niveles en semanas, salir de estatinas, sentirse con más energía y menos inflamación. Nadie habla solo de los números… hablan de dejar de vivir con miedo a su propio cuerpo.\n\nEsto no es una dieta sin grasa. Es una experiencia donde cinco suplementos actúan en sinergia sobre tu sistema cardiovascular y hepático. El D7 CAPS —con Cúrcuma, Lúpulo, Chlorella y Acai— ataca el colesterol y los triglicéridos directamente, mejorando la fluidez sanguínea. El H9 CAPS y el F.VIT LH depuran el hígado —el órgano que filtra y metaboliza las grasas en sangre—. El VC1 CAPS aporta Vitamina C antioxidante para proteger las paredes arteriales. Y el RGC16 regenera el endotelio vascular y potencia el sistema linfático.\n\nNo controlas los números… tu cuerpo empieza a equilibrarse solo.",
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
    { label: "1 paquete", value: "1", message: "Hola, quiero comprar *1 paquete* de la Experiencia Colesterol y Triglicéridos Vital de PHN. ¿Me puedes dar más información?" },
    { label: "2 paquetes", value: "2", message: "Hola, quiero comprar *2 paquetes* de la Experiencia Colesterol y Triglicéridos Vital de PHN. ¿Me puedes dar más información?" },
    { label: "3 paquetes", value: "3", message: "Hola, quiero comprar *3 paquetes* de la Experiencia Colesterol y Triglicéridos Vital de PHN. ¿Me puedes dar más información?" },
    { label: "4 paquetes", value: "4", message: "Hola, quiero comprar *4 paquetes* de la Experiencia Colesterol y Triglicéridos Vital de PHN. ¿Me puedes dar más información?" },
    { label: "5 paquetes", value: "5", message: "Hola, quiero comprar *5 paquetes* de la Experiencia Colesterol y Triglicéridos Vital de PHN. ¿Me puedes dar más información?" },
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
    { key: 'LH', nombre: 'F.VIT LH', img: '../../public/images/productos/imagen14.webp' },
    { key: 'VC-1', nombre: 'VC1 CAPS', img: '../../public/images/productos/imagen7.webp' },
    { key: 'D-7', nombre: 'D7 CAPS', img: '../../public/images/productos/imagen4.webp' },
    { key: 'H-9', nombre: 'H9 CAPS', img: '../../public/images/productos/imagen2.webp' },
  ],

};
