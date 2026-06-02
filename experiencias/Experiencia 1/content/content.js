/**
 * CONTENIDO EDITABLE — Experiencia 1: Baja a tu Figura Vital
 * Edita este archivo para cambiar textos, precio, imagen y número de WhatsApp.
 * Sube tus imágenes a la carpeta  Experiencia 1/content/images/
 * y actualiza el campo imageUrl con el nombre del archivo.
 */
window.EXP1_CONTENT = {

  // ── META ──────────────────────────────────────────────────────────────────
  pageTitle: "MI GRAN AVENTURA — PHN",

  // ── BANNER SUPERIOR (imagen de ancho completo al inicio) ─────────────────
  // Sube tu imagen a  Experiencia 1/content/images/  y pon el nombre aquí.
  // Tamaño recomendado: 1440 × 600 px (landscape). Deja en "" para ocultar.
  banner: {
    imageUrl:  "content/images/banner.webp",   // ← cambia el nombre de archivo
    imageAlt:  "Experiencia Baja a tu Figura Vital",
    overlayTitle:    "",
    overlaySubtitle: "",
  },

  // ── PRODUCTO ──────────────────────────────────────────────────────────────
  product: {
    title:    "MI GRAN AVENTURA DE ENCONTRARME A MI MISMA ATRAVEZ DE MEJORAR MI SALUD Y MI PESO.",
    price:    "$1,170",           // precio
    badge:    "90 unidades",    // etiqueta pequeña junto al título (ej. "3 meses", "Nuevo")

    // Ruta relativa desde compra.html hasta la imagen principal del producto.
    // Sube tu imagen a  Experiencia 1/content/images/  y cambia el nombre aquí.
    imageUrl: "../../public/images/experiencias/Experiencia 1/imagen.webp",
    imageFallback: "../../imagen.webp",   // se usa si imageUrl no existe
    imageAlt: "Mi gran aventura — PHN",

    shortDescription:
      "Mi gran experiencia en esta maravillosa empresa, en mi salud y peso.\n\nEl encontrarme con Proher-Natura ha sido un cambio total en mi vida. Estuve muchos años buscando mi salud. Tengo mucho tiempo acompañada de hipotiroidismo, donde todo mi organismo no encontraba un equilibrio. Y al conocer las bondades de estos suplementos, soy una persona totalmente sana y logré mi lucha con mi sobrepeso.",
    fullDescription:
      "Los beneficios son grandes como la satisfacción que tu cuerpo este sano y que funcione bien, incrementar tu vitalidad, reflejar una imagen que te brinde seguridad, satisfacción por ver el reflejo de tu belleza interna y tener la energía que la vida te exige dia con dia.\n\nCon todo cariño te hago una invitación a que tu vivas tu propia experiencia y tengas realmente los cambios que has soñado y que seas la mejor versión de ti misma y te recomiendo la experiencia PHN FVIT",
    includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
  },

  // ── CANTIDADES ────────────────────────────────────────────────────────────
  // Cada opción genera un mensaje personalizado en WhatsApp al comprar.
  quantities: [
    { label: "1 paquete",  value: "1", message: "Hola, quiero comprar *1 paquete* de la Experiencia Baja a tu Figura Vital de PHN. ¿Me puedes dar más información?" },
    { label: "2 paquetes", value: "2", message: "Hola, quiero comprar *2 paquetes* de la Experiencia Baja a tu Figura Vital de PHN. ¿Me puedes dar más información?" },
    { label: "3 paquetes", value: "3", message: "Hola, quiero comprar *3 paquetes* de la Experiencia Baja a tu Figura Vital de PHN. ¿Me puedes dar más información?" },
    { label: "4 paquetes", value: "4", message: "Hola, quiero comprar *4 paquetes* de la Experiencia Baja a tu Figura Vital de PHN. ¿Me puedes dar más información?" },
    { label: "5 paquetes", value: "5", message: "Hola, quiero comprar *5 paquetes* de la Experiencia Baja a tu Figura Vital de PHN. ¿Me puedes dar más información?" },
  ],

  // ── WHATSAPP ──────────────────────────────────────────────────────────────
  whatsappNumber: "5212241033782",   // formato: código país + número, sin + ni espacios

  // ── BOTÓN COMPRAR ─────────────────────────────────────────────────────────
  buyButtonText:  "Comprar por WhatsApp",
  buyButtonIcon:  true,   // true = muestra ícono de WhatsApp en el botón

  // ── NAVEGACIÓN ────────────────────────────────────────────────────────────
  backLink: "../../index.html",
  backText: "← Volver al inicio",

  // ── BRANDING ──────────────────────────────────────────────────────────────
  logoUrl:  "../../public/images/logos/Logo PHN.png",
  logoLink: "../../index.html",
  logoAlt:  "PHN — Proher Natura",


  products: [
    { key: 'F.VIT-90', nombre: 'F.VIT 90 CAPS', img: '../../public/images/productos/imagen1.webp' },
  ],

};
