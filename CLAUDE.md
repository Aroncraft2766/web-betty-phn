# Guía de edición de contenido — Página PHN

Todo el contenido editable vive en `content/content.js`.  
`src/core/renderer.js` lee ese archivo y construye el HTML de la página principal.  
Cada página de compra tiene su propio `experiencias/Experiencia X/content/content.js`.  
**Nunca edites HTML directamente para cambiar textos, imágenes o links.**

---

## Archivos del proyecto

| Archivo | Qué contiene | ¿Se edita? |
|---|---|---|
| `content/content.js` | Contenido de la página principal (experiencias, testimonios, FAQ, navbar…) | ✅ Sí |
| `src/core/renderer.js` | Construye el HTML desde `content.js` | ❌ No tocar |
| `index.html` | Estructura base de la página principal | ❌ No tocar |
| `experiencias/Experiencia X/content/content.js` | Contenido de cada página de compra | ✅ Sí |
| `experiencias/Experiencia X/compra.html` | Estructura de la página de compra (igual en las 13) | ❌ No tocar |
| `src/features/productos/data.js` | Catálogo técnico de productos (`const PHN_CATALOG`) | ❌ Solo lectura |
| `src/features/productos/gallery-data.js` | Rutas de galería por producto (hasta 4 imágenes c/u, `const PHN_GALLERY`) | ✅ Sí — agregar rutas de imagen |
| `public/images/productos/gallery/<clave>/` | Carpetas donde se suben las imágenes de galería de cada producto | ✅ Subir imágenes aquí |
| `public/images/banners/` | Imágenes de banner para `catalogo.html` | ✅ Subir imágenes aquí |
| `public/images/productos/banners/` | Banners por producto para `ficha.html`. Se asignan en `data.js` campo `banners[]`. Cosméticos: sin persona primero, con persona después | ✅ Subir imágenes aquí |
| `CLAUDE.md` | Esta guía | ✅ **Actualizar siempre** que se agregue un archivo, cambie una regla de edición o se introduzca un nuevo patrón |
| `compra/js/video-content.js` | Textos de los 3 videos en todas las páginas de compra (ES + EN) | ✅ Sí |
| `compra/js/translations.js` | Traducciones al inglés de todas las páginas de compra (título, descripción, lista) | ✅ Sí |
| `compra/js/scripts.js` | Lógica compartida: slider móvil, botón traducir, orden del carrito | ⚠️ Solo al final del archivo |
| `compra/js/footer.js` | Footer completo compartido. Se carga con `<script data-root="../../">` en compra.html y `<script data-root="">` en raíz | ✅ Sí — editar datos directamente en el objeto `data` |
| `catalogo.html` | Landing de catálogo con 2 banners: Productos y Cosméticos | ✅ Sí — editar banners, títulos |
| `cosmeticos.html` | Página de productos cosméticos (VR-4 GEL, DB-6 CREMA, COLAGENO 80/20, COLAGENO 50/50, MASCARILLA) | ⚠️ Misma estructura que `productos.html` |
| `src/features/meredith-widget.js` | Bot Meredith — cargado por `index.html` con `data-root=""`. Llama a `/api/chat` (nunca directamente a OpenRouter) | ✅ Sí — editar prompt, catálogo, comportamiento |
| `meredith-widget.js` (raíz) | Copia del bot usada por los 13 `compra.html` con `data-root="../../"`. Llama a `/api/chat` (nunca directamente a OpenRouter). Si cambias el bot, actualiza ambos archivos | ✅ Sí — mismas reglas |
| `src/features/catalogo-hotspots.js` | Coordenadas de hotspots en `visor-imagenes.html`. `{ x, y, w, h }` en % | ✅ Sí — agregar/ajustar posiciones |
| `visor-imagenes.html` | Visor PRO completo (auto-contenido, sin libs). Zoom 50–300% (Ctrl+scroll/pinch/+−/fit-width/fit-page). Anotaciones: 7 herramientas con iconos SVG Lucide (lápiz, resaltador, texto flotante, flecha, rect, círculo, borrador), undo/redo 30 estados, localStorage coords normalizadas 0–1, canvas DPR-correct con rAF. Toolbar derecha (56px) con swatches de color, slider grosor, tooltips. Topbar: go-to-page input, imprimir, descargar página PNG, limpiar libro. Hotspots, popup producto, modo lectura (R), pantalla completa (F), rotación, miniaturas, mobile bottom sheet. Params: `?catalog=proher\|cosmeticos\|jugos\|recetas&title=...` | ❌ No tocar; sí para ajustar `CATALOG_CONFIG` o hotspots |
| `public/libros/catalogo-proher/pages/` | Páginas del catálogo Proher en webp: `01.webp`–`68.webp` | ✅ Reemplazar imágenes si se actualiza el PDF |
| `public/libros/catalogo-cosmeticos/pages/` | Páginas del catálogo Cosméticos en webp: `01.webp`–`26.webp` (falta pág. 6) | ✅ Reemplazar imágenes si se actualiza el PDF |
| `public/libros/jugos-v1/pages/` | Páginas del libro de jugos en webp: 68 imágenes (faltan págs. 29, 39, 53, 62) | ✅ Reemplazar imágenes si se actualiza el PDF |
| `public/libros/recetario/pages/` | Páginas del recetario en webp: 70 imágenes (faltan págs. 24, 37) | ✅ Reemplazar imágenes si se actualiza el PDF |
| `api/chat.js` | Función serverless Vercel que hace de proxy a OpenRouter. **La API key vive solo aquí como variable de entorno `OPENROUTER_API_KEY`**. Nunca hardcodear la key en el frontend. | ❌ No tocar salvo cambio de modelo o límites |
| `vercel.json` | Configuración de despliegue Vercel: headers de seguridad (X-Frame-Options, nosniff, Referrer-Policy) | ❌ No tocar |

### Experiencias existentes

| Carpeta | Nombre | Productos |
|---|---|---|
| Experiencia 1 | Baja a tu Figura Vital | KIT F. VIT MAX, F.VIT-90, F.VIT 6, LH |
| Experiencia 2 | Artis (articulaciones) | RGC-16, A-10, D-7, VC-1 |
| Experiencia 3 | Armonización Facial | RGC-16, D-7, R-12, COLAGENO |
| Experiencia 4 | Baja de Edad Corporal | RGC-16, D-7 |
| Experiencia 5 | Limpieza Hepática | LH, H-9 |
| Experiencia 7 | Depura (colesterol) | RGC-16, LH, VC-1, D-7, H-9 |
| Experiencia 8 | Equilibrio Íntimo Femenino | RGC-16, D-7, VC-1, OV-12 |
| Experiencia 9 | Respiración Vital | EUK-7, VC-1 |
| Experiencia 10 | Confort Gastro (gastritis) | LH, FIBRA, G-6 |
| Experiencia 11 | Bienestar Metabólico (colon) | FIBRA, LH |
| Experiencia 12 | Salud Integral Familiar | RGC-16, VC-1, N-7 |
| Experiencia 14 | Piernas Tonificadas (várices) | VR-4, VR-4 GEL |
| Experiencia 15 | Tranquilidad Natural Mental | RGC-16, CR-7, N-7 |

---

## Estructura de `content.js` (página principal)

```
SITE_CONTENT
├── meta          → título de pestaña y descripción SEO
├── navbar        → logo, links del menú
├── hero          → sección principal (título, subtítulo, botón CTA, fondo imagen o video)
├── testimonials  → carousel de testimonios (avatarUrl + items[])
├── experiences   → tarjetas de experiencias (heading + items[])
├── libros        → sección de libros/catálogos (heading + items[])
├── contacto      → WhatsApp, correo, Formspree ID
├── faq           → preguntas frecuentes (items[])
└── ui            → textos fijos del renderer
```

### Cambiar un libro o catálogo en la sección Libros

Cada `item` en `libros.items[]` puede tener estos campos:

```js
{
  title:       "Catálogo Proher Natura",
  imageUrl:    "public/libros/catalogo-proher/portada.webp",
  description: "Descripción visible en la tarjeta.",
  viewerUrl:   "visor-imagenes.html?catalog=proher&title=...", // abre visor de imágenes (portada + botón CTA si no hay buyUrl)
  ctaText:     "Ver catálogo",
  // Campos opcionales para libros de venta:
  buyUrl:      "https://wa.me/52...",   // si está, el botón CTA va a WhatsApp; la portada igual abre viewerUrl
  price:       "$99",
}
```

- `viewerUrl` es obligatorio en todos los libros — **ya no hay PDFs**. Los 4 libros usan `visor-imagenes.html`.
- Si `buyUrl` está presente (jugos, recetario), el botón CTA va a WhatsApp y la portada abre `viewerUrl`.
- Si solo hay `viewerUrl` (catálogos), tanto el botón CTA como la portada abren el visor.
- Los catálogos (proher, cosméticos) tienen hotspots interactivos por producto; jugos y recetario no.

### Cambiar el fondo del hero (imagen o video)

Edita `hero` en `content.js`:

```js
hero: {
  // ...
  mediaType: "image",                        // "image" → muestra img | "video" → muestra video
  imageUrl:  "public/images/imagen2.png",    // ruta usada cuando mediaType === "image"
  videoUrl:  "https://res.cloudinary.com/…", // ruta usada cuando mediaType === "video"
},
```

- `mediaType: "image"` → el renderer muestra `<img class="hero-bg">` con `imageUrl`.
- `mediaType: "video"` → muestra `<video>` con `videoUrl`.
- `renderer.js` líneas ~503-509 contienen la lógica condicional.

---

### Cambiar descripción o lista de una experiencia (página principal)

Edita el objeto correspondiente dentro de `experiences.items[]`:

```js
experiences: {
  items: [
    {
      title:       "EXPERIENCIA BAJA A TU FIGURA VITAL",
      imageUrl:    "experiencias/Experiencia 1/imagen.webp",
      ctaText:     "Comprar",
      ctaLink:     "experiencias/Experiencia 1/compra.html",
      description: "Texto largo de la experiencia...",
      includes: [
        "Plan de alimentación para 3 meses",
        "Jugos, tés e infusiones...",
        // ...
      ],
    },
    // ... más experiencias
  ],
},
```

> **Importante:** `description` usa `\n\n` (escape JS) para separar párrafos, NO saltos de línea reales.

### Cambiar un testimonio

```js
testimonials: {
  avatarUrl: "public/images/logos/Logo PHN.webp",  // avatar compartido
  items: [
    { text: "Texto del testimonio.", author: "Nombre Apellido" },
  ],
},
```

### Cambiar navbar / logo

```js
navbar: {
  logoUrl:  "public/images/logos/Logo PHN.webp",
  logoLink: "index.html",
  links: [
    { text: "Inicio",              href: "index.html" },
    { text: "Compra tu experiencia", href: "#section-experiences" },
    { text: "Productos",           href: "productos.html" },
    { text: "Preguntas",           href: "#section-faq" },
    { text: "Contacto",            href: "#section-contacto" },
  ],
},
```

### Cambiar datos de contacto

```js
contacto: {
  whatsapp:  "5215540339970",              // código país + número, sin + ni espacios
  email:     "prohernatura.contacto@gmail.com",
  formspreeId: "XXXXXXXX",               // ID de Formspree (formspree.io)
},
```

---

## Estructura de cada `experiencias/Experiencia X/content/content.js`

```
EXP_CONTENT  (o EXP1_CONTENT en Experiencia 1)
├── pageTitle          → título de la pestaña
├── banner             → imagen de cabecera (imageUrl, imageAlt, overlayTitle, overlaySubtitle)
├── product
│   ├── title          → nombre de la experiencia
│   ├── price          → precio (deja "" para ocultar)
│   ├── badge          → etiqueta pequeña (ej. "3 meses")
│   ├── imageUrl       → imagen principal del producto
│   ├── imageFallback  → imagen de respaldo si imageUrl no existe
│   ├── shortDescription → párrafo corto (hook)
│   ├── fullDescription  → descripción larga con párrafos separados por \n\n
│   └── includes[]     → lista de qué incluye la experiencia
├── quantities[]       → opciones de cantidad con mensaje de WhatsApp
├── whatsappNumber     → número destino (formato: 52XXXXXXXXXX)
├── buyButtonText      → texto del botón comprar
├── buyButtonIcon      → true/false muestra ícono de WhatsApp
├── backLink / backText → link y texto del botón "Volver al inicio"
├── logoUrl / logoLink / logoAlt → branding
└── products[]         → productos individuales mostrados en la página
                         { key, nombre, img }  — key debe coincidir con PHN_CATALOG
```

### Cambiar precio o duración de una experiencia

```js
product: {
  price: "$350",      // deja "" para ocultar
  badge: "3 meses",  // etiqueta junto al título
},
```

### Cambiar la descripción de una experiencia (página de compra)

```js
product: {
  shortDescription: "Párrafo de enganche visible al inicio.",
  fullDescription:  "Párrafo 1...\n\nPárrafo 2...\n\nPárrafo 3...",
  //                 ↑ usa \n\n para separar párrafos, NO saltos de línea reales
},
```

### Cambiar los productos individuales que aparecen en la página de compra

```js
products: [
  { key: 'RGC-16', nombre: 'RGC16 1L',  img: '../../public/images/productos/imagen15.webp' },
  { key: 'LH',     nombre: 'F.VIT LH',  img: '../../public/images/productos/imagen14.webp' },
],
// El campo key debe existir en src/features/productos/data.js (const PHN_CATALOG)
// El prefijo ../../public/ sube dos niveles desde experiencias/Experiencia X/ al raíz
```

### Cambiar la imagen del producto

Todas las experiencias (2–15) usan la imagen de Experiencia 1:

```js
imageUrl: "../Experiencia 1/content/images/producto.webp",
```

Experiencia 1 usa su propia imagen:

```js
imageUrl: "content/images/producto.webp",
```

---

## Galería de imágenes por producto (`src/features/productos/gallery-data.js`)

Hay dos copias de este archivo: `src/features/productos/gallery-data.js` y `productos/gallery-data.js`. Ambas deben mantenerse sincronizadas. Las imágenes viven en `public/images/productos/gallery/`.

### Flujo para agregar imágenes

1. Sube las imágenes a `public/images/productos/gallery/<clave>/` (ej. `public/images/productos/gallery/RGC-16/1.webp`).
2. Agrega las rutas en **ambos** `gallery-data.js` con el prefijo `../public/images/productos/`:

```js
'RGC-16': [
  '../public/images/productos/gallery/RGC-16/1.webp',
  '../public/images/productos/gallery/RGC-16/2.webp',
],
```

- El prefijo `../` es relativo a `productos/ficha.html` (sube un nivel desde `productos/` al raíz).
- Si el array está vacío `[]`, no se muestra la fila de miniaturas.
- La primera imagen del array reemplaza la imagen principal al cargar la página.
- Claves con barra (`/`) usan carpeta con guión: `COLAGENO 80/20` → `gallery/COLAGENO 80-20/`.

---

## Catálogo de productos (`src/features/productos/data.js`)

El archivo exporta `const PHN_CATALOG` (no en `window`). Para acceder desde otro script:

```js
const info = (typeof PHN_CATALOG !== 'undefined' && PHN_CATALOG[prod.key]) || {};
```

Campos disponibles por producto: `nombre`, `descripcion`, `ingredientes`, `uso`,
`presentacion`, `dosis`, `contraindicaciones`, `almacenamiento`, `img`, `beneficios`,
`propiedades` (texto comercial que vende), `beneficiosList` (array de beneficios para lista visual en ficha.html).

**Rutas en `data.js`:**
- `img` usa prefijo `../public/images/productos/` → `img: '../public/images/productos/imagen1.webp'`
- `banners` ya incluye la ruta completa → `banners: ['../public/images/productos/banners/banner-X.webp']`
- El `../` es relativo a `productos/ficha.html` (que carga este archivo).

---

## Diseño y estilos

- **Color principal de botones:** `#70B62F` (verde PHN), hover: `#5a9424`
- **Tipografía:** Montserrat (Google Fonts, aplicada con `!important` en compra.html)
- **Modales de producto:** click en producto → modal pantalla completa con imagen + info técnica del catálogo
- **Tema claro/oscuro:** default siempre claro. El botón `🌙` en el navbar alterna modo oscuro; la preferencia se guarda en `localStorage` con clave `phn-theme` (`"light"` / `"dark"`). Los estilos oscuros viven en `renderer.js` bajo `html.dark *`. El botón está en el `<div id="div_block-69-16289">` del navbar.

---

## Rutas de assets — tabla de referencia

Todos los assets del sitio viven bajo `public/` o en las carpetas raíz `animacion/`. **No existe la carpeta `assets/` — fue eliminada.**

| Asset | Ruta desde raíz del proyecto | Prefijo desde `experiencias/Experiencia X/` |
|---|---|---|
| Logo | `public/images/logos/Logo PHN.webp` | `../../public/images/logos/Logo PHN.webp` |
| Bot Meredith | `public/images/Bot.png` | (cargado via ROOT en meredith-widget.js) |
| Hero imagen | `public/images/imagen2.png` | — |
| Reseñas | `public/images/reseñas/reseña1.webp` | — |
| Contacto bg | `public/images/contactos.jpeg` | — |
| Íconos redes | `public/icons/redes/facebook.svg` | — |
| Banners catálogo | `public/images/banners/` | — |
| Img producto (data.js) | `public/images/productos/imagen1.webp` | Prefijo en data.js: `../public/images/productos/` |
| Banners producto | `public/images/productos/banners/` | Prefijo en data.js: `../public/images/productos/banners/` |
| Galería producto | `public/images/productos/gallery/<clave>/` | Prefijo en gallery-data.js: `../public/images/productos/gallery/` |
| Imágenes experiencias | `public/images/experiencias/Experiencia X/` | `../../public/images/experiencias/Experiencia X/` |
| Libros/catálogos | `public/libros/<nombre>/pages/01.webp` | — |
| Videos cápsulas | `animacion/capsula 1.mp4`, `capsula 2.mp4`, `capsula 3.mp4` | `../../animacion/capsula X.mp4` |
| Imagen fallback | `imagen.webp` (raíz) | `../../imagen.webp` — fallback de error en compra.html |

---

## Reglas importantes

1. `fullDescription` y `description` usan `\n\n` como escape JS para separar párrafos. Si escribes saltos de línea reales dentro de un string entre comillas dobles, el JS se rompe.
2. Para editar las 13 `compra.html` en bulk, usa scripts PowerShell con `[System.IO.File]::ReadAllText` / `WriteAllText` para preservar la codificación UTF-8.
3. `const PHN_CATALOG` en `data.js` no se adjunta a `window` — siempre usa `typeof` antes de referenciarlo.
4. No modifiques `src/core/renderer.js` para cambiar textos; todo va en `content/content.js`.
5. **Nunca uses rutas `assets/`** — esa carpeta ya no existe. Toda ruta de imagen comienza con `public/`.
