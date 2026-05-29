/**
 * CONTENIDO EDITABLE — Experiencia 10: EXPERIENCIA GASTRITIS Y ÚLCERAS VITAL
 * Edita este archivo para cambiar textos, precio, imagen y número de WhatsApp.
 */
window.EXP_CONTENT = {

  // ── META ──────────────────────────────────────────────────────────────────
  pageTitle: "EXPERIENCIA GASTRITIS Y ÚLCERAS VITAL — PHN",

  // ── BANNER SUPERIOR ───────────────────────────────────────────────────────
  banner: {
    imageUrl:        "content/images/banner.webp",
    imageAlt:        "EXPERIENCIA GASTRITIS Y ÚLCERAS VITAL",
    overlayTitle:    "",
    overlaySubtitle: "",
  },

  // ── PRODUCTO ──────────────────────────────────────────────────────────────
  product: {
    title:    "EXPERIENCIA GASTRITIS Y ÚLCERAS VITAL",
    price:    "",           // ej. "$1,500 MXN" — deja vacío para ocultar
    badge:    "3 meses",

    imageUrl:      "../Experiencia 1/content/images/producto.webp",
    imageFallback: "../../gastritis.png",
    imageAlt:      "EXPERIENCIA GASTRITIS Y ÚLCERAS VITAL — PHN",

    shortDescription:
      "Con esta experiencia sanamos tu gastritis y úlceras… pero lo que realmente cambia es volver a disfrutar de comer sin miedo, sin ardor, sin ese malestar que ya asumiste como normal. Tu digestión se normaliza, el reflujo se va, tu estómago se calma.",    fullDescription:
      "Yo también estuve en ese punto donde la lista de lo que 'no podía comer' era más larga que la de lo permitido, donde el omeprazol era diario pero el problema seguía ahí… hasta que entendí que sin sanar la mucosa, el síntoma siempre regresaba.\n\nHoy he visto personas salir de años de gastritis crónica, cerrar úlceras que no respondían al tratamiento convencional, dejar antiácidos y volver a comer con libertad. Nadie habla solo del ardor que se fue… hablan de recuperar la paz en su propio estómago.\n\nEsto no es un antiácido natural. Es una experiencia donde tres suplementos trabajan en equipo sobre todo tu sistema digestivo. El G6 CAPS —con Papaya, Yuca y Mangostán— actúa directamente sobre la mucosa gástrica, alivia la gastritis, el reflujo y las úlceras, y equilibra el pH. La FIBRA F.VIT —con Semilla de Lino, Moringa y Chía— regula el tránsito intestinal y alimenta la microbiota. Y el F.VIT LH depura el hígado y la vesícula —porque la digestión lenta y el reflujo también tienen raíz en una vesícula sobrecargada—.\n\nNo evitas lo que te hace mal… tu estómago empieza a sanar de verdad.",
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
    { label: "1 paquete", value: "1", message: "Hola, quiero comprar *1 paquete* de la Experiencia Gastritis y Úlceras Vital de PHN. ¿Me puedes dar más información?" },
    { label: "2 paquetes", value: "2", message: "Hola, quiero comprar *2 paquetes* de la Experiencia Gastritis y Úlceras Vital de PHN. ¿Me puedes dar más información?" },
    { label: "3 paquetes", value: "3", message: "Hola, quiero comprar *3 paquetes* de la Experiencia Gastritis y Úlceras Vital de PHN. ¿Me puedes dar más información?" },
    { label: "4 paquetes", value: "4", message: "Hola, quiero comprar *4 paquetes* de la Experiencia Gastritis y Úlceras Vital de PHN. ¿Me puedes dar más información?" },
    { label: "5 paquetes", value: "5", message: "Hola, quiero comprar *5 paquetes* de la Experiencia Gastritis y Úlceras Vital de PHN. ¿Me puedes dar más información?" },
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
    { key: 'LH', nombre: 'F.VIT LH', img: '../../public/images/productos/imagen14.webp' },
    { key: 'FIBRA', nombre: 'FIBRA F.VIT', img: '../../public/images/productos/imagen13.webp' },
    { key: 'G-6', nombre: 'G6 CAPS', img: '../../public/images/productos/imagen3.webp' },
  ],

};
