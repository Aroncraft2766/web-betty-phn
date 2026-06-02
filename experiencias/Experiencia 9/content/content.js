/**
 * CONTENIDO EDITABLE — Experiencia 9: EXPERIENCIA RESPIRACIÓN VITAL
 * Edita este archivo para cambiar textos, precio, imagen y número de WhatsApp.
 */
window.EXP_CONTENT = {

  // ── META ──────────────────────────────────────────────────────────────────
  pageTitle: "EXPERIENCIA RESPIRACIÓN VITAL — PHN",

  // ── BANNER SUPERIOR ───────────────────────────────────────────────────────
  banner: {
    imageUrl:        "content/images/banner.webp",
    imageAlt:        "EXPERIENCIA RESPIRACIÓN VITAL",
    overlayTitle:    "",
    overlaySubtitle: "",
  },

  // ── PRODUCTO ──────────────────────────────────────────────────────────────
  product: {
    title:    "EXPERIENCIA RESPIRACIÓN VITAL",
    price:    "",           // ej. "$1,500 MXN" — deja vacío para ocultar
    badge:    "3 meses",

    imageUrl:      "../../public/images/experiencias/Experiencia 1/imagen.webp",
    imageFallback: "../../respiracion.png",
    imageAlt:      "EXPERIENCIA RESPIRACIÓN VITAL — PHN",

    shortDescription:
      "Con esta experiencia limpias y fortaleces tu sistema respiratorio… pero lo que realmente cambia es la calidad de cada respiración que das. El pecho deja de apretarse, la tos se va, los bronquios se abren… y redescubres lo que es respirar profundo sin esfuerzo.",    fullDescription:
      "Yo también estuve en ese punto donde el invierno significaba enfermedad garantizada, donde el inhalador era inseparable… hasta que limpié lo que años de toxinas habían acumulado en mis pulmones.\n\nHoy he visto personas con asma crónica reducir sus crisis, otras salir de bronquitis recurrentes, algunas respirar bien por primera vez en años. Nadie habla solo de la tos que desapareció… hablan de sentirse vivos en cada inhalación.\n\nEsto no es un broncodilatador. Es una experiencia donde dos suplementos de acción complementaria restauran tu sistema respiratorio. El EUK7 Jarabe —con Miel Virgen, Ajo, Moringa, Té Limón, Hinojo, Menta y Sauco— actúa directamente sobre tos crónica, bronquios inflamados y amígdalas, disolviendo el moco y abriendo las vías respiratorias de manera natural. El VC1 CAPS —con Guanábana, Chirimoya y Vitamina C— fortalece el sistema inmune y las defensas del tracto respiratorio, reduciendo la frecuencia e intensidad de las infecciones.\n\nNo cargas con la enfermedad… tus pulmones empiezan a renovarse.",
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
    { label: "1 paquete", value: "1", message: "Hola, quiero comprar *1 paquete* de la Experiencia Respiración Vital de PHN. ¿Me puedes dar más información?" },
    { label: "2 paquetes", value: "2", message: "Hola, quiero comprar *2 paquetes* de la Experiencia Respiración Vital de PHN. ¿Me puedes dar más información?" },
    { label: "3 paquetes", value: "3", message: "Hola, quiero comprar *3 paquetes* de la Experiencia Respiración Vital de PHN. ¿Me puedes dar más información?" },
    { label: "4 paquetes", value: "4", message: "Hola, quiero comprar *4 paquetes* de la Experiencia Respiración Vital de PHN. ¿Me puedes dar más información?" },
    { label: "5 paquetes", value: "5", message: "Hola, quiero comprar *5 paquetes* de la Experiencia Respiración Vital de PHN. ¿Me puedes dar más información?" },
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
  logoUrl:  "../../public/images/logos/Logo PHN.png",
  logoLink: "../../index.html",
  logoAlt:  "PHN — Proher Natura",


  products: [
    { key: 'EUK-7', nombre: 'EUK7 Jarabe', img: '../../public/images/productos/imagen8.webp' },
    { key: 'VC-1', nombre: 'VC1 CAPS', img: '../../public/images/productos/imagen7.webp' },
  ],

};
