/**
 * SITE_CONTENT — fuente única de verdad para todo el contenido editable.
 * Edita este archivo para cambiar textos, imágenes, links y fechas.
 * Consulta CLAUDE.md para saber exactamente qué campo tocar en cada caso.
 */
window.SITE_CONTENT = {

  // ─── META ────────────────────────────────────────────────────────────────
  meta: {
    title: "Betty González PHN",
    description: "Experiencias de nutrición natural PHN. Transforma tu salud y bienestar de forma natural con la Betty González.",
    faviconUrl: "public/images/logos/Logo PHN.png",
  },

  // ─── NAVBAR ──────────────────────────────────────────────────────────────
  navbar: {
    logoUrl:   "public/images/logos/Logo PHN.png",
    logoLink:  "",
    links: [
      { text: "Inicio",        href: "index.html" },
      { text: "Compre tu experiencia", href: "#section-experiences" },
      { text: "Productos",     href: "catalogo.html" },
      { text: "Preguntas",     href: "#section-faq" },
      { text: "Contacto",      href: "#section-contacto" },
    ],
    loginText: "Habla con Meredit IA",
    loginHref: "#",
  },

  // ─── HERO ────────────────────────────────────────────────────────────────
  hero: {
    titleLine1: "Únete a la experiencia",
    titleLine2: "de PHN",
    subtitle:   "Tu transformación natural comienza aquí",
    ctaText:    "Comprar",
    ctaLink:    "https://wa.me/5212241033782?text=Quiero%20más%20información%20sobre%20las%20experiencias%20PHN",
    mediaType:  "image",                      // "image" | "video"
    imageUrl:   "public/images/imagen2.webp",  // usado cuando mediaType === "image"
    videoUrl:   "https://res.cloudinary.com/dfi2ugopz/video/upload/v1777496776/VID-20260429-WA0012_zo9mlk.mp4", // usado cuando mediaType === "video"
  },

  // ─── TESTIMONIOS ─────────────────────────────────────────────────────────
  testimonials: {
    heading:   "Testimonios",
    avatarUrl: "public/images/logos/Logo PHN.png",
    items: [
      {
        text:   "Me encuentro en recomposición corporal y estoy fascinada con la energía que he sentido, me encanta la variedad de opciones en el menú y me han gustado mucho los cambios que ha tenido el reto.",
        author: "Ana Maria",
      },
      {
        text:   "Me quedó muy a gusto con el reto como siempre y agradecida contigo Betty por la oportunidad que nos das y la motivación de mejorar en lo personal, mi estado de salud y autoestima.",
        author: "Montserrat Flores",
      },
      {
        text:   "Y lo mejor de todo es saber que puedes comer todo en moderación y eso es un gran alivio mentalmente a comparación de dietas restrictivas que había realizado con anterioridad.",
        author: "Sarai Escobar",
      },
      {
        text:   "Fue un buen reto, me quedé satisfecho con los resultados, y qué decir del menú, nos da como siempre múltiples opciones para llevarlo a cabo y no abandonarlo, las equivalencias es la mejor forma de empatizar con cada uno de nosotros ya que todo se vuelve accesible y fácil de llevar un estilo de vida saludable.",
        author: "Enrique Diaz",
      },
      {
        text:   "Esta es la primera vez que participo en una experiencia de PHN y estoy impresionado con los resultados.",
        author: "Iaan Narvaez",
      },
      {
        text:   'Amé el reto, llevo mucho tiempo intentando mejorar los malos hábitos que tenía sin éxito, he pasado de intentar miles de dietas hasta tomar pastillas o productos "milagrosos". Este reto definitivamente marcó un antes y un después para mí.',
        author: "Daniela Navarro",
      },
      {
        text:   "La vdd me encantan los retos de Betty, las comidas siempre son muy ricas y variadas es lo mejor sentir q no estás a dieta y siempre feliz con los resultados",
        author: "Sonia Saldivar",
      },
      {
        text:   "Es mi segundo reto y en verdad creo que mi avance es increíble, si alguien me hubiera dicho que lograría estos resultados en tan solo 2 meses jamás lo hubiera creído.",
        author: "Frida Giselle",
      },
    ],
  },

  // ─── EXPERIENCIAS ────────────────────────────────────────────────────────
  experiences: {
    heading: "Nuestras Experiencias",
    items: [
      {
        title:       "MI GRAN AVENTURA DE ENCONTRARME A MI MISMA ATRAVEZ DE MEJORAR MI SALUD.",
        imageUrl:    "public/images/experiencias/Experiencia 1/imagen.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 1/compra.html",
        description: "Mi gran experiencia en esta maravillosa empresa, en mi salud y peso.\n\nEl encontrarme con Proher-Natura ha sido un cambio total en mi vida. Estuve muchos años buscando mi salud. Tengo mucho tiempo acompañada de hipotiroidismo, donde todo mi organismo no encontraba un equilibrio. Y al conocer las bondades de estos suplementos, soy una persona totalmente sana y logré mi lucha con mi sobrepeso.\n\nEs un placer para mi compartirte que a lo largo de 20 años haciendo pequeños cambios y tomando estos maravillosos Suplementos Alimenticios logre perder 35 kilos, esta gran metamorfosis lo logre depurando mi hígado, limpiando mi torrente sanguíneo, regulando mi sistema nervioso y liberando toxinas permitiendo así que mi alimento consiente me nutra de una manera inteligentemente y eficaz.\n\nLos beneficios son grandes como la satisfacción que tu cuerpo este sano y que funcione bien, incrementar tu vitalidad, reflejar una imagen que te brinde seguridad, satisfacción por ver el reflejo de tu belleza interna y tener la energía que la vida te exige dia con dia.\n\nCon todo cariño te hago una invitación a que tu vivas tu propia experiencia y tengas realmente los cambios que has soñado y que seas la mejor versión de ti misma y te recomiendo la experiencia PHN FVIT",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA LIMPIEZA HEPÁTICA",
        imageUrl:    "public/images/experiencias/Experiencia 5/Higado y Pancreas.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 5/compra.html",
        description: "Con esta experiencia limpias y regeneras tu hígado y páncreas… pero lo que realmente cambia es cómo vuelves a sentirte por dentro. Tu digestión se normaliza, tu energía regresa, esa pesadez constante desaparece… y tu cuerpo empieza a funcionar como no lo hacía hace años.\n\nYo también estuve en ese punto donde todo lo que comías te caía mal, donde el cansancio era tu estado normal, donde sentías que tu cuerpo ya no respondía… hasta que decidí depurarme de verdad. Lo que encontré no fue una pastilla milagrosa… fue mi cuerpo recuperando su capacidad de sanar.\n\nHoy he visto personas transformarse por completo: dejar medicamentos, dormir bien, recuperar su digestión, sentirse livianos y con claridad mental por primera vez en años. Nadie habla solo de los síntomas que desaparecieron… hablan de volver a sentirse vivos.\n\nEsto no es un tratamiento. Es una experiencia donde el F.VIT LH —con Aceite de Olivo Extra Virgen, Raíz de Hidrastis y Vitaminas A y E— actúa como coadyuvante directo en padecimientos hepáticos y biliares, protegiendo y regenerando el tejido hepático, depurando la vesícula y reduciendo la inflamación hepática para que tu cuerpo recupere su capacidad natural de filtrar y sanar. La inflamación baja, las toxinas salen, la energía vuelve… y sin forzarlo, tu cuerpo empieza a funcionar como naturalmente debería.\n\nNo persigues la salud… la salud empieza a encontrarte a ti.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA Artis",
        imageUrl:    "public/images/experiencias/Experiencia 2/imagen.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 2/compra.html",
        description: "Con esta experiencia bajas el ácido úrico y alivias los dolores articulares… pero lo que realmente cambia es volver a moverte sin miedo, sin esa rigidez al despertar, sin que cada paso sea un recordatorio de que algo no está bien. Tu movilidad regresa, la inflamación baja y redescubres lo que es caminar, estirarte o simplemente levantarte sin dolor.\n\nHoy he visto personas con artritis reumatoide, artrosis y reumatismo recuperar su movilidad de manera natural, reducir medicamentos y volver a actividades que habían abandonado. Nadie habla solo del dolor que desapareció… hablan de recuperar su independencia y su calidad de vida.\n\nEsto no es un antiinflamatorio. Es una experiencia donde cuatro suplementos trabajan en sincronía sobre tu sistema articular. El A10 CAPS —formulado con Cúrcuma, Nogal negro y Malva— actúa directamente sobre la inflamación articular y el ácido úrico, calma el dolor y protege el cartílago. El RGC16 regenera las células y el tejido articular con su fórmula antioxidante de 16 frutas y plantas como Noni, Acai y Goji. El D7 CAPS mejora la circulación sanguínea para que los nutrientes lleguen a las articulaciones inflamadas. Y el VC1 CAPS —con Guanábana, Chirimoya y Vitamina C— fortalece el sistema inmune y aporta antioxidantes que protegen los tejidos del daño oxidativo. La inflamación baja, el movimiento regresa… y sin forzarlo, tu cuerpo recupera la flexibilidad que naturalmente debería tener.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA ARMONIZACIÓN FACIAL",
        imageUrl:    "public/images/experiencias/Experiencia 3/imagen.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 3/compra.html",
        description: "Con esta experiencia transformas tu silueta facial de manera natural… pero lo que realmente cambia es cómo vuelves a verte al espejo y reconocerte. Tu rostro se ve más definido, más joven, más luminoso. Las facciones se afinan, la piel se reafirma, los rasgos se equilibran… sin bisturí, sin inyecciones, sin procedimientos invasivos.\n\nHoy he visto mujeres recuperar el brillo y la definición de su rostro con resultados visibles desde las primeras semanas. Nadie habla solo de las arrugas que bajaron… hablan de volver a sentirse femeninas y reconocerse en el espejo.\n\nEsto no es un tratamiento estético. Es una experiencia donde el CLGN Colágeno —formulado con Colágeno Hidrolizado, Ácido Hialurónico, Cúrcuma, Caléndula, Centella asiática y Biotina— nutre tu piel desde adentro: reafirma la elasticidad, devuelve el volumen y la luminosidad, define el óvalo y reduce las líneas de expresión. Complementado con la Mascarilla PHN aplicada de forma tópica, la acción es doble: regeneración celular profunda desde el interior y tonificación visible desde el exterior. La retención de líquidos en el rostro baja, la piel brilla… y sin forzarlo, tu silueta facial empieza a revelar su mejor versión.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA BAJA DE EDAD CORPORAL — REGENERACIÓN CELULAR TOTAL",
        imageUrl:    "public/images/experiencias/Experiencia 4/imagen.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 4/compra.html",
        description: "Con esta experiencia bajas tu edad corporal pero lo que realmente cambia es cómo empiezas a sentirte: con más energía, más recuperación, más vitalidad. Tus células se renuevan, tu piel se ve más fresca, tu circulación mejora desde adentro… y las personas a tu alrededor empiezan a preguntarte qué estás haciendo diferente.\n\nYo también lo viví: bajé mi edad corporal a 25 años con estudios que lo comprueban. No fue magia… fue entender que el cuerpo tiene la capacidad de regenerarse cuando se le da lo que necesita.\n\nEsto no es un antioxidante genérico. Es una experiencia donde dos suplementos de acción profunda trabajan juntos para revertir el envejecimiento celular. El RGC16 —con Noni, Moringa, Acai, Betabel, Goji y 11 frutas más— estimula la regeneración celular, potencia el sistema linfático para eliminar toxinas acumuladas y actúa como antioxidante de espectro amplio que neutraliza los radicales libres responsables del envejecimiento. El D7 CAPS —con Cúrcuma, Chlorella, Acai y Moringa— regula el colesterol y los triglicéridos, mejora la circulación sanguínea y depura el sistema linfático, porque el cuerpo no puede rejuvenecer si la sangre no fluye limpia y los nutrientes no llegan donde deben. La oxidación celular disminuye, la inflamación sistémica baja, la energía regresa… y sin forzarlo, tu cuerpo empieza a recuperar los años que el estrés y el tiempo le quitaron.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA DEPURA",
        imageUrl:    "public/images/experiencias/Experiencia 7/imagen.webp",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 7/compra.html",
        description: "Con esta experiencia equilibras tu colesterol y triglicéridos… pero lo que realmente cambia es esa paz de saber que tu corazón y tus arterias están limpias, que tu sangre fluye como debe, que tu cuerpo está protegido desde adentro. Los números en tus análisis mejoran… y contigo mejora todo.\n\nYo también estuve en ese punto donde el médico decía \"hay que controlarlo con medicamento\", donde el miedo a un infarto o a un derrame se volvía una sombra constante, donde la alimentación se sentía como una cárcel… hasta que encontré la forma de equilibrarlo de manera natural.\n\nHoy he visto personas normalizar sus niveles en semanas, salir de estatinas, sentirse con más energía y menos inflamación. Nadie habla solo de los números… hablan de dejar de vivir con miedo a su propio cuerpo.\n\nEsto no es una dieta sin grasa. Es una experiencia donde cinco suplementos actúan en sinergia sobre tu sistema cardiovascular y hepático. El D7 CAPS —con Cúrcuma, Lúpulo, Chlorella y Acai— ataca el colesterol y los triglicéridos directamente, mejorando la fluidez sanguínea. El H9 CAPS y el F.VIT LH depuran el hígado —el órgano que filtra y metaboliza las grasas en sangre— liberándolo de la sobrecarga que genera el colesterol elevado. El VC1 CAPS aporta Vitamina C antioxidante para proteger las paredes arteriales del daño oxidativo. Y el RGC16 regenera el endotelio vascular y potencia el sistema linfático con su fórmula de 16 frutas. El colesterol malo baja, los triglicéridos se regulan, tus arterias respiran… y sin forzarlo, tu corazón empieza a protegerse como naturalmente debería.\n\nNo controlas los números… tu cuerpo empieza a equilibrarse solo.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA EQUILIBRIO INTIMO Y CONFORT FEMENINO",
        imageUrl:    "public/images/experiencias/Experiencia 8/equilibrio femenino.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 8/compra.html",
        description: "Con esta experiencia regulamos tu ciclo y tus ovarios… pero lo que realmente cambia es cómo te reconcilias con tu cuerpo de mujer. El dolor menstrual se calma, los quistes se reducen, las hormonas se equilibran… y te vuelves a sentir en paz con lo que eres, con tus tiempos, con tu feminidad.\n\nYo también estuve en ese punto donde cada mes era una batalla, donde el dolor te dejaba en cama, donde el médico te daba la pastilla como única solución… hasta que decidí escuchar lo que mi cuerpo realmente necesitaba.\n\nHoy he visto mujeres desaparecer quistes que ya estaban programados para cirugía, regular ciclos que llevaban años caóticos, recuperar su fertilidad y su bienestar. Nadie habla solo de los quistes que se fueron… hablan de volver a sentirse completas.\n\nEsto no es un regulador hormonal sintético. Es una experiencia donde cuatro suplementos trabajan de manera específica sobre tu bienestar femenino. El OV12 CAPS —formulado con Azafrán, Raíz de Ñame, Lúpulo, Estragón, Moringa y complejo de Vitaminas B, C, E y D— regula el sistema hormonal femenino, alivia los cólicos, equilibra el ciclo y da soporte en menopausia y climaterio. El D7 CAPS mejora la circulación pélvica para que los nutrientes lleguen donde se necesitan. El VC1 CAPS fortalece el sistema inmune —porque muchos desequilibrios hormonales tienen componente inflamatorio—. Y el RGC16 regenera las células con su potente fórmula antioxidante. Las hormonas se equilibran naturalmente, el dolor baja, el ciclo se normaliza… y sin forzarlo, tu cuerpo femenino empieza a funcionar como naturalmente debería.\n\nNo luchas contra tu ciclo… tu cuerpo empieza a fluir con él.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA RESPIRACIÓN VITAL",
        imageUrl:    "public/images/experiencias/Experiencia 9/respiracion.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 9/compra.html",
        description: "Con esta experiencia limpias y fortaleces tu sistema respiratorio… pero lo que realmente cambia es la calidad de cada respiración que das. El pecho deja de apretarse, la tos se va, los bronquios se abren… y redescubres lo que es respirar profundo sin esfuerzo, sin miedo, sin límite.\n\nYo también estuve en ese punto donde el invierno significaba enfermedad garantizada, donde el inhalador era inseparable, donde la respiración se volvió algo en lo que había que pensar… hasta que limpié lo que años de toxinas habían acumulado en mis pulmones.\n\nHoy he visto personas con asma crónica reducir sus crisis, otras salir de bronquitis recurrentes, algunas respirar bien por primera vez en años. Nadie habla solo de la tos que desapareció… hablan de sentirse vivos en cada inhalación.\n\nEsto no es un broncodilatador. Es una experiencia donde dos suplementos de acción complementaria restauran tu sistema respiratorio desde adentro. El EUK7 Jarabe —con Miel Virgen, Ajo, Moringa, Té Limón, Hinojo, Menta y Sauco— actúa directamente sobre tos crónica, bronquios inflamados y amígdalas, disolviendo el moco y abriendo las vías respiratorias de manera natural. El VC1 CAPS —con Guanábana, Chirimoya y Vitamina C— fortalece el sistema inmune y las defensas del tracto respiratorio, reduciendo la frecuencia e intensidad de las infecciones. La inflamación bronquial baja, el moco se elimina, el sistema inmune se activa… y sin forzarlo, tu respiración empieza a fluir como naturalmente debería.\n\nNo cargas con la enfermedad… tus pulmones empiezan a renovarse.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA CONFORT GASTRO",
        imageUrl:    "public/images/experiencias/Experiencia 10/gastritis.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 10/compra.html",
        description: "Con esta experiencia sanamos tu gastritis y úlceras… pero lo que realmente cambia es volver a disfrutar de comer sin miedo, sin ardor, sin ese malestar que se instaló en tu vida tan silenciosamente que ya lo asumiste como normal. Tu digestión se normaliza, el reflujo se va, tu estómago se calma… y redescubres el placer de alimentarte.\n\nYo también estuve en ese punto donde la lista de lo que \"no podía comer\" era más larga que la de lo permitido, donde el omeprazol era diario pero el problema seguía ahí, donde cada comida era una ruleta… hasta que entendí que sin sanar la mucosa, el síntoma siempre regresaba.\n\nHoy he visto personas salir de años de gastritis crónica, cerrar úlceras que no respondían al tratamiento convencional, dejar antiácidos y volver a comer con libertad. Nadie habla solo del ardor que se fue… hablan de recuperar la paz en su propio estómago.\n\nEsto no es un antiácido natural. Es una experiencia donde tres suplementos trabajan en equipo sobre todo tu sistema digestivo. El G6 CAPS —con Papaya, Yuca y Mangostán— actúa directamente sobre la mucosa gástrica, alivia la gastritis, el reflujo y las úlceras, y equilibra el pH. La FIBRA F.VIT —con Semilla de Lino, Moringa y Chía— regula el tránsito intestinal, alimenta la microbiota y complementa la digestión para que el proceso completo fluya sin obstrucciones. Y el F.VIT LH depura el hígado y la vesícula —porque la digestión lenta y el reflujo también tienen raíz en una vesícula sobrecargada—. El pH se equilibra, la inflamación se va, el reflujo desaparece… y sin forzarlo, tu digestión empieza a fluir como naturalmente debería.\n\nNo evitas lo que te hace mal… tu estómago empieza a sanar de verdad.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA BIENESTAR METABOLICO",
        imageUrl:    "public/images/experiencias/Experiencia 11/transito intestinal.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 11/compra.html",
        description: "Con esta experiencia limpiamos tu colon y regulamos tu tránsito intestinal… pero lo que realmente cambia es esa ligereza que no sabías que extrañabas. El abdomen inflamado baja, la pesadez desaparece, tu cuerpo se vacía como debe… y te das cuenta de cuánto cargabas sin saberlo.\n\nYo también estuve en ese punto donde pasar días sin ir al baño era lo normal, donde los laxantes se volvieron rutina pero el colon nunca terminaba de despertar, donde la hinchazón abdominal era mi compañera constante… hasta que limpié lo que años de mala alimentación habían acumulado.\n\nHoy he visto personas eliminar años de estreñimiento crónico, desinflamarse visiblemente en semanas, recuperar una energía inesperada solo por tener el colon limpio. Nadie habla solo del baño… hablan de sentirse ligeros por primera vez en mucho tiempo.\n\nEsto no es un laxante. Es una experiencia donde dos suplementos actúan en sinergia sobre tu sistema digestivo completo. La FIBRA F.VIT —con Semilla de Lino, Moringa y Chía— alimenta y regula el tránsito intestinal de manera natural, nutre la microbiota y aporta la fibra que el intestino necesita para moverse con ritmo propio. El F.VIT LH depura el hígado y la vesícula —porque un hígado sobrecargado ralentiza todo el proceso digestivo y contribuye al estreñimiento crónico—. Las toxinas salen, la microbiota se equilibra, el colon se activa… y sin forzarlo, tu cuerpo empieza a vaciarse y renovarse como naturalmente debería.\n\nNo empujas tu cuerpo… tu intestino empieza a despertar solo.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA SALUD FAMILIAR",
        imageUrl:    "public/images/experiencias/Experiencia 12/energia familiar.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 12/compra.html",
        description: "Con esta experiencia nutrimos y energizamos a toda la familia desde adentro… pero lo que realmente cambia es el ambiente en el hogar. Los niños más enfocados, los adultos con más energía, las noches con mejor descanso… y una familia que empieza a sentirse bien junta, no solo a convivir cansada.\n\nYo también estuve en ese punto donde todos en casa andaban agotados, donde los resfriados no paraban, donde la energía del hogar simplemente estaba apagada… hasta que entendimos que la salud se construye en familia y desde adentro.\n\nHoy he visto familias completas transformarse: niños que mejoran su rendimiento escolar, papás que vuelven a tener energía para jugar, mamás que dejan de sobrevivir el día. Nadie habla solo de los síntomas que desaparecieron… hablan del hogar que volvió a encenderse.\n\nEsto no es un multivitamínico. Es una experiencia donde tres suplementos potentes cuidan a cada miembro de la familia desde adentro. El RGC16 —con Noni, Moringa, Acai, Betabel, Goji y 11 frutas más— regenera las células, potencia el sistema linfático y aporta energía real a adultos y niños. El VC1 CAPS —con Guanábana, Chirimoya y Vitamina C— fortalece el sistema inmune y protege contra enfermedades respiratorias. Y el N7 CAPS —con Manzanilla, Moringa, Maracuyá y Té verde— equilibra el sistema nervioso, mejora la concentración y calma el estrés en adultos y niños. Las células se nutren, las defensas se fortalecen, el sistema nervioso se estabiliza… y sin forzarlo, la familia empieza a florecer como naturalmente debería.\n\nNo buscas que todos estén bien… tu familia empieza a brillar junta.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA PIERNAS TONIFICADAS",
        imageUrl:    "public/images/experiencias/Experiencia 14/circulacion varices.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 14/compra.html",
        description: "Con esta experiencia mejoramos tu circulacion y várices… pero lo que realmente cambia es cómo vuelves a sentirte en tus propias piernas. La pesadez se va, el dolor desaparece, la hinchazón baja… y recuperas esa ligereza de caminar, de estar de pie, de vivir sin que tus piernas te limiten.\n\nYo también estuve en ese punto donde al final del día las piernas ardían y se veían peor cada mes, donde las medias de compresión se volvieron obligatorias, donde sentía que el problema iba avanzando sin poder detenerlo… hasta que entendí que la circulación se puede nutrir y restaurar desde adentro.\n\nHoy he visto personas reducir várices visiblemente, aliviar dolores que llevaban años, mejorar la circulación de sus piernas y recuperar la confianza de mostrarlas. Nadie habla solo de las várices que bajaron… hablan de recuperar su movilidad y su seguridad.\n\nEsto no es una crema cosmética. Es una experiencia con un protocolo de doble acción: interna y externa, para atacar el problema circulatorio desde dos frentes a la vez. El VR4 CAPS —con extracto de Chile, Hamamelis y Vitaminas C, E y B6— estimula la circulación sanguínea desde adentro, fortalece las paredes venosas y combate las várices y arañitas vasculares con nutrientes específicos. El VR4 GEL —con Chile, mentol, alcanfor y Hamamelis para uso tópico— activa la circulación local directamente en las piernas, tonifica y reafirma la piel y alivia la pesadez y el dolor con efecto inmediato. La circulación mejora desde adentro y desde afuera, la inflamación baja, la retención de líquidos desaparece… y sin forzarlo, tus piernas empiezan a sentirse como naturalmente deberían.\n\nNo cubres el problema… tu circulación empieza a restaurarse de verdad.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
      {
        title:       "EXPERIENCIA TRANQUILIDAD NATURAL Y EQUILIBRIO MENTAL",
        imageUrl:    "public/images/experiencias/Experiencia 15/equilibrio mental.png",
        ctaText:     "Comprar",
        ctaLink:     "experiencias/Experiencia 15/compra.html",
        description: "Con esta experiencia equilibramos tu sistema nervioso y tu química cerebral… pero lo que realmente cambia es cómo vuelves a sentirte en tu propia mente. La pesadez emocional se levanta, el sueño regresa, la ansiedad se calma… y empiezas a ver la vida desde un lugar que creías haber perdido.\n\nYo también estuve en ese punto donde levantarse era un esfuerzo, donde la tristeza no tenía una razón clara pero tampoco se iba, donde la mente no descansaba aunque el cuerpo estuviera agotado… hasta que entendí que el cerebro también necesita nutrición, limpieza y regeneración.\n\nHoy he visto personas salir de años de antidepresivos, recuperar el sueño, volver a sentir motivación y alegría genuina. Nadie habla solo de la depresión que mejoró… hablan de volver a querer vivir plenamente.\n\nEsto no es un sustituto de tu tratamiento psicológico. Es una experiencia donde tres suplementos trabajan juntos sobre tu sistema nervioso y cerebral. El N7 CAPS —con Manzanilla, Moringa, Maracuyá, Albahaca, Té verde y complejo de Vitaminas B— actúa directamente sobre la ansiedad, el insomnio, la migraña y el estrés crónico, equilibrando el sistema nervioso y nutriendo los neurotransmisores. El CR7 CAPS —con Zapote blanco y Moringa— regula la presión arterial que sube con el estrés crónico y contribuye a los dolores de cabeza y la tensión constante. Y el RGC16 regenera las células cerebrales con su fórmula antioxidante profunda, protegiendo las neuronas del daño que genera el estrés prolongado. La inflamación cerebral baja, los neurotransmisores se nutren, el descanso se restaura… y sin forzarlo, tu mente empieza a serenarse como naturalmente debería.\n\nNo sobrevives el día… tu mente empieza a encontrar su paz.",
        includes: [
          "Asesoría personalizada — Acompañamiento 1 a 1 según tus objetivos y estilo de vida.",
          "Recomendaciones principales — Sugerencias clave de productos y hábitos para tus primeros resultados.",
          "Recetario de recetas — Colección de platillos saludables, fáciles y deliciosos.",
          "Recetario de jugos — Combinaciones detox y energizantes para cada momento del día.",
          "Experiencia 360°",
        ],
      },
    ],
  },

  // ─── LIBROS (solo desktop) ───────────────────────────────────────────────
  libros: {
    heading: "Nuestros Libros",
    subheading: "Conocimiento natural en tus manos",
    items: [
      {
        title:       "Jugos, Tés e Infusiones Vol. 1",
        imageUrl:    "public/libros/jugos-v1/portada.webp",
        description: "Descubre los jugos, tés e infusiones naturales que la Betty González utiliza en sus experiencias para desinflamar, depurar y activar tu metabolismo.",
        viewerUrl:   "visor-imagenes.html?catalog=jugos&title=Jugos%2C%20T%C3%A9s%20e%20Infusiones%20Vol.%201",
        price:       "$99",
        buyUrl:      "https://wa.me/5212241033782?text=Hola%20Betty%2C%20quiero%20comprar%20el%20libro%20Jugos%2C%20T%C3%A9s%20e%20Infusiones%20Vol.%201%20%28%2499%29",
        ctaText:     "Comprar — $99",
      },
      {
        title:       "Recetario FIT — Recetas Saludables",
        imageUrl:    "public/libros/recetario/portada.webp",
        description: "50 recetas vegetarianas deliciosas y nutritivas diseñadas para que comas saludable sin sacrificar el gusto. Tu aliado en cada experiencia PHN.",
        viewerUrl:   "visor-imagenes.html?catalog=recetas&title=Recetario%20FIT%20%E2%80%94%20Recetas%20Saludables",
        price:       "$99",
        buyUrl:      "https://wa.me/5212241033782?text=Hola%20Betty%2C%20quiero%20comprar%20el%20Recetario%20FIT%20%E2%80%94%20Recetas%20Saludables%20%28%2499%29",
        ctaText:     "Comprar — $99",
      },
      {
        title:       "Catálogo Proher Natura",
        imageUrl:    "public/libros/catalogo-proher/portada.webp",
        description: "Catálogo completo de productos Proher Natura. Haz clic en cualquier producto para ver su ficha completa.",
        viewerUrl:   "visor-imagenes.html?catalog=proher&title=Cat%C3%A1logo%20Proher%20Natura",
        ctaText:     "Ver catálogo",
      },
      {
        title:       "Catálogo Cosméticos",
        imageUrl:    "public/libros/catalogo-cosmeticos/portada.webp",
        description: "Catálogo de productos cosméticos PHN. Haz clic en cualquier producto para ver su ficha completa.",
        viewerUrl:   "visor-imagenes.html?catalog=cosmeticos&title=Cat%C3%A1logo%20Cosm%C3%A9ticos",
        ctaText:     "Ver catálogo",
      },
    ],
  },

  // ─── CONTACTO ────────────────────────────────────────────────────────────
  contacto: {
    heading:    "Contáctanos",
    subheading: "¿Tienes dudas sobre alguna experiencia? Escríbenos y te respondemos a la brevedad.",
    formspreeId: "XXXXXXXX",   // ← reemplaza con tu ID de Formspree (formspree.io)
    whatsapp:  "5212241033782",
    email:     "prohernatura.contacto@gmail.com",
  },

  // ─── PREGUNTAS FRECUENTES ────────────────────────────────────────────────
  faq: {
    heading:  "Preguntas Frecuentes",
    imageUrl: "public/images/imagen.webp",
    items: [
      {
        q: "¿Los productos PHN son seguros?",
        a: "Sí. Todos los productos PHN son 100% naturales y están certificados por COFEPRIS, FDA y Health Canada. Se fabrican con nanotecnología de ultra-molido que maximiza la absorción sin químicos ni conservadores artificiales. PHN tiene más de 20 años de experiencia en suplementos naturales.",
      },
      {
        q: "¿Cómo sé qué producto necesito?",
        a: "Cada producto PHN está diseñado para un objetivo específico: digestión, articulaciones, sistema nervioso, circulación, hígado, riñones, sistema inmune y más. Escríbenos por WhatsApp al 2241033782 y te asesoramos según tus necesidades, o pregúntale a Meredith en el chat.",
      },
      {
        q: "¿Puedo tomar varios productos al mismo tiempo?",
        a: "Sí, de hecho muchas experiencias PHN combinan varios suplementos que trabajan en conjunto. Por ejemplo, la experiencia 'Baja a tu Figura Vital' combina F.VIT LH para depurar el hígado, F.VIT 90 CAPS para regular el metabolismo, F.VIT 6 CAPS para desintoxicar y el KIT F.VIT MAX que potencia todo en un solo paquete. Cada uno actúa en un frente diferente.",
      },
      {
        q: "¿Cuánto tiempo tarda en hacer efecto?",
        a: "La mayoría de las personas notan mejoras desde la primera semana: menos inflamación, mejor digestión y más energía. Los resultados más completos se ven entre las 4 y 12 semanas de uso constante, dependiendo del producto y la condición.",
      },
      {
        q: "¿Los productos tienen contraindicaciones?",
        a: "Algunos productos no están recomendados para menores de 12 años, mujeres embarazadas o en lactancia. Productos como HERGY SX son solo para mayores de 18 años. Si tienes una condición médica específica, consulta con tu médico antes de iniciar cualquier suplemento.",
      },
      {
        q: "¿Qué es la nanotecnología PHN?",
        a: "Es un proceso de ultra-molido patentado que convierte los ingredientes en polvo nanométrico. Esto permite que las cápsulas tengan una superficie de absorción mucho mayor, logrando que los principios activos lleguen directamente a las células con mayor velocidad y eficiencia que los suplementos tradicionales.",
      },
      {
        q: "¿Hacen envíos a todo México?",
        a: "Sí, realizamos envíos a toda la república. También puedes recoger directamente en nuestra ubicación en Tlalpan, Ciudad de México. Escríbenos por WhatsApp al 2241033782 para coordinar tu envío o visita.",
      },
      {
        q: "¿Cómo hago mi pedido?",
        a: "Escríbele a Betty González directamente por WhatsApp al 2241033782. Ella te asesora, te ayuda a elegir los productos ideales para ti y coordina el envío o entrega. La atención es personalizada y directa.",
      },
      {
        q: "¿PHN también tiene productos cosméticos?",
        a: "Sí. La línea Cosmetics PHN incluye F.VIT GEL para tonificar la piel, VR-4 GEL para várices, DB-6 Crema para resequedad, Colágeno 80/20 (día) y 50/50 (noche) para rejuvenecer la piel, y la Mascarilla PGMT20 exfoliante aclaradora. Todos de uso tópico con ingredientes naturales.",
      },
      {
        q: "¿Qué incluyen las experiencias PHN?",
        a: "Cada experiencia incluye los suplementos específicos, plan de alimentación, recetario de jugos y tés terapéuticos, guía de ingesta en los tiempos exactos según las leyes naturales del cuerpo, lista de alimentos alcalinos y acompañamiento con la Betty González.",
      },
    ],
  },

  // ─── UI STRINGS (textos fijos del renderer) ──────────────────────────────
  ui: {
    testimonialsPreTitle: "Lo que dicen nuestros clientes",
    testimonialsSubtitle: "Resultados reales de personas reales",
    expSeeMore:  "Ver más",
    expIncludes: "Qué incluye",
    formName:    "Tu nombre",
    formEmail:   "Tu correo",
    formSubject: "Asunto",
    formMessage: "Tu mensaje...",
    formSubmit:  "Enviar mensaje",
    formSuccess: "¡Mensaje enviado! Te respondemos pronto.",
    mapHeading:  "Dirección",
    mapLink:     "Ver en Google Maps",
  },

  // ─── SECCIÓN INFO (dirección + redes + logo) ─────────────────────────────
  infoSection: {
    address: {
      heading: "DIRECCIÓN",
      lines: [
        "Av. Raúl Isidro Burgos 2224, Maestro Federal,",
        "72080 Heroica Puebla de Zaragoza, Pue.",
      ],
    },
    whatsappFloat: "5212241033782",
    termsUrl:  "#",
    termsText: "Términos y Condiciones",
    credits:   "Todos los derechos reservados",
    social: [
      { name: "Facebook",   url: "https://www.facebook.com/share/1Dq4X1YqxC/", color: "#1877f2", icon: "fb"  },
      { name: "Instagram",  url: "https://www.instagram.com/natbetygonzalez/", color: "#e1306c", icon: "ig"  },
      { name: "WhatsApp",   url: "https://wa.me/5212241033782", color: "#25d366", icon: "wa" },
      { name: "TikTok",     url: "https://www.tiktok.com/@bea.proher.natura1?_r=1&_t=ZS-96laW43SGX7", color: "#010101", icon: "tt"  },
    ],
  },

};

// ─── ENGLISH TRANSLATION ─────────────────────────────────────────────────────
window.SITE_CONTENT_EN = {

  meta: {
    title: "Betty González PHN",
    description: "PHN natural nutrition experiences. Transform your health and wellbeing naturally with Betty González.",
    faviconUrl: "public/images/logos/Logo PHN.png",
  },

  navbar: {
    logoUrl:   "public/images/logos/Logo PHN.png",
    logoLink:  "",
    links: [
      { text: "Home",             href: "index.html" },
      { text: "Buy your experience", href: "#section-experiences" },
      { text: "Products",         href: "catalogo.html" },
      { text: "FAQ",              href: "#section-faq" },
      { text: "Contact",          href: "#section-contacto" },
    ],
    loginText: "Talk to Meredit AI",
    loginHref: "#",
  },

  hero: {
    titleLine1: "Join the PHN",
    titleLine2: "experience",
    subtitle:   "Your natural transformation starts here",
    ctaText:    "Buy",
    ctaLink:    "https://wa.me/5212241033782?text=I%20want%20more%20information%20about%20PHN%20experiences",
  },

  testimonials: {
    heading:   "Testimonials",
    avatarUrl: "public/images/logos/Logo PHN.png",
    items: [
      {
        text:   "I am in body recomposition and I am fascinated by the energy I have felt, I love the variety of menu options and I have really liked the changes in the program.",
        author: "Ana Maria",
      },
      {
        text:   "I was very pleased with the program as always, and grateful to Betty González for the opportunity she gives us and the motivation to improve ourselves, our health and self-esteem.",
        author: "Montserrat Flores",
      },
      {
        text:   "And the best part is knowing that you can eat everything in moderation, which is a great mental relief compared to the restrictive diets I had done before.",
        author: "Sarai Escobar",
      },
      {
        text:   "It was a great program. I was satisfied with the results, and the menu as always gives us multiple options to follow through and not abandon it. The equivalences are the best way to connect with each of us since everything becomes accessible and easy to maintain a healthy lifestyle.",
        author: "Enrique Diaz",
      },
      {
        text:   "This is my first time participating in a program like this and I am impressed with the results.",
        author: "Iaan Narvaez",
      },
      {
        text:   'I loved the program. I have been trying to improve my bad habits for a long time without success, going through thousands of diets to taking pills or "miracle" products. This experience definitely marked a before and after for me.',
        author: "Daniela Navarro",
      },
      {
        text:   "I really love Betty's programs, the meals are always very tasty and varied — the best part is feeling like you are not on a diet and always happy with the results.",
        author: "Sonia Saldivar",
      },
      {
        text:   "This is my second program and I truly believe my progress is incredible. If someone had told me I would achieve these results in just 2 months I never would have believed it.",
        author: "Frida Giselle",
      },
    ],
  },

  experiences: {
    heading: "Our Experiences",
    items: [
      {
        title:       "MY GREAT ADVENTURE OF FINDING MYSELF THROUGH IMPROVING MY HEALTH AND MY WEIGHT.",
        imageUrl:    "public/images/experiencias/Experiencia 1/imagen.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 1/compra.html",
        description: "It's a pleasure to share with you that over 20 years, by making small changes and taking these wonderful Dietary Supplements, I managed to lose 35 kilos. This great metamorphosis I achieved by detoxifying my liver, cleansing my bloodstream, regulating my nervous system and releasing toxins, allowing my conscious food to nourish me intelligently and effectively.\n\nThe benefits are great: the satisfaction of having a healthy body that functions well, increasing your vitality, projecting an image that gives you confidence, the satisfaction of seeing the reflection of your inner beauty and having the energy that life demands of you day by day.\n\nWith all my heart I invite you to live your own experience and truly have the changes you have dreamed of, to be the best version of yourself, and I recommend the PHN FVIT experience.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL LIVER & PANCREAS EXPERIENCE",
        imageUrl:    "experiencias/Experiencia 5/Higado y pancreas.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 5/compra.html",
        description: "With this experience you cleanse and regenerate your liver and pancreas… but what really changes is how you feel inside again. Your digestion normalizes, your energy returns, that constant heaviness disappears… and your body starts working the way it hadn't in years.\n\nI was also at that point where everything you ate felt wrong, where fatigue was your normal state, where you felt your body no longer responded… until I decided to truly detox. What I found wasn't a miracle pill… it was my body recovering its ability to heal.\n\nToday I have seen people transform completely: leaving medications, sleeping well, recovering their digestion, feeling light and mentally clear for the first time in years. Nobody talks only about the symptoms that disappeared… they talk about feeling alive again.\n\nThis is not a treatment. It is an experience where your liver and pancreas stop being overloaded and start to regenerate. Inflammation decreases, toxins leave, energy returns… and without forcing it, your body starts working the way it naturally should.\n\nYou don't pursue health… health starts to find you.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "ARTIS EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 2/imagen.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 2/compra.html",
        description: "With this experience you lower uric acid and relieve joint pain… but what really changes is moving again without fear, without that stiffness on waking, without every step reminding you something is wrong. Your mobility returns, inflammation decreases and you rediscover what it's like to walk, stretch or simply stand up without pain.\n\nToday I have seen people with rheumatoid arthritis, osteoarthritis and rheumatism regain their mobility naturally, reduce medications and return to activities they had given up. Nobody talks only about the pain that disappeared… they talk about regaining their independence and quality of life.\n\nThis is not an anti-inflammatory. It's an experience where four supplements work in sync on your joint system. A10 CAPS — with Turmeric, Black Walnut and Mallow — acts directly on joint inflammation and uric acid, relieves pain and protects cartilage. RGC16 regenerates cells and joint tissue with its antioxidant formula of 16 fruits and plants. D7 CAPS improves blood circulation so nutrients reach inflamed joints. And VC1 CAPS — with Soursop, Cherimoya and Vitamin C — strengthens the immune system and provides antioxidants that protect tissues from oxidative damage. Inflammation decreases, movement returns… and without forcing it, your body regains the flexibility it naturally should have.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "FACIAL HARMONIZATION EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 3/imagen.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 3/compra.html",
        description: "With this experience you transform your facial silhouette naturally… but what really changes is how you look in the mirror and recognize yourself again. Your face looks more defined, younger, more luminous. Features refine, skin firms, proportions balance… without surgery, without injections, without invasive procedures.\n\nToday I have seen women recover the glow and definition of their face with visible results from the first weeks. Nobody talks only about the wrinkles that faded… they talk about feeling feminine again and recognizing themselves in the mirror.\n\nThis is not an aesthetic treatment. It's an experience where CLGN Collagen — with Hydrolyzed Collagen, Hyaluronic Acid, Turmeric, Calendula, Centella Asiatica and Biotin — nourishes your skin from the inside: firms elasticity, restores volume and luminosity, defines the oval and reduces expression lines. Complemented with the PHN Mask applied topically, the action is dual: deep cellular regeneration from within and visible toning from outside. Fluid retention in the face decreases, skin glows… and without forcing it, your facial silhouette begins to reveal its best version.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "LOWER YOUR BODY AGE — TOTAL CELLULAR REGENERATION EXPERIENCE",
        imageUrl:    "experiencias/Experiencia 4/imagen.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 4/compra.html",
        description: "With this experience you lower your body age by years… but what really changes is how you start to feel: with more energy, better recovery, more vitality. Your cells renew, your skin looks fresher, your circulation improves from within… and people around you start asking what you're doing differently.\n\nI lived it myself: I lowered my body age to 25 years, proven by studies. It wasn't magic… it was understanding that the body has the capacity to regenerate when given what it needs.\n\nThis is not a generic antioxidant. It's an experience where two deep-action supplements work together to reverse cellular aging. RGC16 — with Noni, Moringa, Acai, Beet, Goji and 11 more fruits — stimulates cellular regeneration, enhances the lymphatic system to eliminate accumulated toxins and acts as a broad-spectrum antioxidant that neutralizes the free radicals responsible for aging. D7 CAPS — with Turmeric, Chlorella, Acai and Moringa — regulates cholesterol and triglycerides, improves blood circulation and detoxifies the lymphatic system, because the body can't rejuvenate if blood doesn't flow clean and nutrients don't reach where they should. Cellular oxidation decreases, systemic inflammation drops, energy returns… and without forcing it, your body begins to recover the years that stress and time took away.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },

      {
        title:       "VITAL CHOLESTEROL & TRIGLYCERIDES EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 7/imagen.webp",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 7/compra.html",
        description: "With this experience you balance your cholesterol and triglycerides… but what really changes is the peace of knowing your heart and arteries are clean, that your blood flows as it should, that your body is protected from within. Your test numbers improve… and everything improves with you.\n\nI was also at that point where the doctor said \"we need to control it with medication\", where the fear of a heart attack or stroke became a constant shadow, where food felt like a prison… until I found the way to balance it naturally.\n\nToday I have seen people normalize their levels in weeks, come off statins, feel more energetic and less inflamed. Nobody talks only about the numbers… they talk about stopping living in fear of their own body.\n\nThis is not a no-fat diet. It is an experience where your liver and blood stop being overloaded and start to purify. Bad cholesterol drops, triglycerides regulate, your arteries breathe… and without forcing it, your heart starts protecting itself the way it naturally should.\n\nYou don't control the numbers… your body starts balancing on its own.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL FEMININE BALANCE EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 8/equilibrio femenino.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 8/compra.html",
        description: "With this experience we regulate your cycle and ovaries… but what really changes is how you reconcile with your woman's body. Menstrual pain calms, cysts reduce, hormones balance… and you feel at peace again with who you are, with your rhythms, with your femininity.\n\nI was also at that point where every month was a battle, where the pain left you bedridden, where the doctor only offered pills as the solution… until I decided to listen to what my body truly needed.\n\nToday I have seen women make cysts disappear that were already scheduled for surgery, regulate cycles that had been chaotic for years, recover their fertility and wellbeing. Nobody talks only about the cysts that went away… they talk about feeling whole again.\n\nThis is not a synthetic hormone regulator. It is an experience where your ovaries and uterus stop being inflamed and start to heal. Hormones balance naturally, pain decreases, the cycle normalizes… and without forcing it, your feminine body starts functioning the way it naturally should.\n\nYou don't fight your cycle… your body starts to flow with it.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL BREATHING EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 9/respiracion.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 9/compra.html",
        description: "With this experience you cleanse and strengthen your respiratory system… but what really changes is the quality of every breath you take. Your chest stops tightening, the cough goes away, your bronchial tubes open… and you rediscover what it feels like to breathe deeply without effort, without fear, without limits.\n\nI was also at that point where winter meant guaranteed illness, where the inhaler was inseparable, where breathing became something you had to think about… until I cleansed what years of toxins had accumulated in my lungs.\n\nToday I have seen people with chronic asthma reduce their crises, others come out of recurring bronchitis, some breathe well for the first time in years. Nobody talks only about the cough that disappeared… they talk about feeling alive in every breath.\n\nThis is not a bronchodilator. It is an experience where your lungs and airways stop being inflamed and start to open. Pulmonary defenses strengthen, mucus is eliminated, bronchial tubes are cleansed… and without forcing it, your breathing starts to flow the way it naturally should.\n\nYou don't carry the illness… your lungs start to renew themselves.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL GASTRITIS & ULCERS EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 10/gastritis.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 10/compra.html",
        description: "With this experience we heal your stomach and gastric mucosa… but what really changes is being able to enjoy eating again without fear, without burning, without the discomfort that settled into your life so silently you had already accepted it as normal. Your digestion normalizes, reflux goes away, your stomach calms… and you rediscover the pleasure of eating.\n\nI was also at that point where the list of things \"I couldn't eat\" was longer than what was allowed, where omeprazole was daily but the problem remained, where every meal was a gamble… until I understood that without healing the mucosa, the symptom always returned.\n\nToday I have seen people overcome years of chronic gastritis, close ulcers that did not respond to conventional treatment, stop antacids and eat freely again. Nobody talks only about the burning that went away… they talk about recovering peace in their own stomach.\n\nThis is not a natural antacid. It is an experience where your gastric mucosa stops being on fire and starts to regenerate. pH balances, inflammation goes away, reflux disappears… and without forcing it, your digestion starts to flow the way it naturally should.\n\nYou don't avoid what hurts you… your stomach starts to truly heal.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL INTESTINAL TRANSIT EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 11/transito intestinal.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 11/compra.html",
        description: "With this experience we cleanse your colon and regulate your intestinal transit… but what really changes is that lightness you didn't know you missed. The bloated abdomen deflates, the heaviness disappears, your body empties as it should… and you realize how much you were carrying without knowing it.\n\nI was also at that point where going days without a bowel movement was normal, where laxatives became routine but the colon never fully woke up, where abdominal bloating was my constant companion… until I cleansed what years of poor eating had accumulated.\n\nToday I have seen people eliminate years of chronic constipation, visibly deflate in weeks, recover unexpected energy just from having a clean colon. Nobody talks only about the bathroom… they talk about feeling light for the first time in a long time.\n\nThis is not a laxative. It is an experience where your intestine stops being clogged and starts moving with its own rhythm. Toxins come out, microbiota balances, the colon activates… and without forcing it, your body starts to empty and renew itself the way it naturally should.\n\nYou don't push your body… your intestine starts to wake up on its own.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL FAMILY ENERGY EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 12/energia familiar.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 12/compra.html",
        description: "With this experience we nourish and energize the whole family from within… but what really changes is the atmosphere at home. Children more focused, adults with more energy, nights with better rest… and a family that starts to feel good together, not just living together exhausted.\n\nI was also at that point where everyone at home was tired, where colds never stopped, where the energy of the household was simply turned off… until we understood that health is built as a family and from within.\n\nToday I have seen entire families transform: children improving their school performance, dads getting energy back to play, moms stopping just surviving the day. Nobody talks only about the symptoms that disappeared… they talk about the home that lit up again.\n\nThis is not a multivitamin. It is an experience where each family member stops functioning at minimum and starts living with real vitality. Cells are nourished, the nervous system stabilizes, defenses strengthen… and without forcing it, the family starts to flourish the way it naturally should.\n\nYou don't look for everyone to be okay… your family starts to shine together.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL CIRCULATION & VARICOSE VEINS EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 14/circulacion varices.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 14/compra.html",
        description: "With this experience we improve your circulation and treat your varicose veins… but what really changes is how you feel in your own legs again. The heaviness goes away, the pain disappears, swelling decreases… and you recover that lightness of walking, of standing, of living without your legs limiting you.\n\nI was also at that point where at the end of the day my legs burned and looked worse every month, where compression stockings became mandatory, where I felt the problem was advancing without being able to stop it… until I understood that circulation can be nourished and restored from within.\n\nToday I have seen people visibly reduce varicose veins, relieve pains that had lasted years, improve circulation in their legs and recover the confidence to show them. Nobody talks only about the varicose veins that reduced… they talk about recovering their mobility and confidence.\n\nThis is not a cosmetic cream. It is an experience where your veins and arteries stop being under pressure and start recovering their tone and elasticity. Circulation improves, inflammation decreases, fluid retention disappears… and without forcing it, your legs start to feel the way they naturally should.\n\nYou don't cover the problem… your circulation starts to truly restore itself.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
      {
        title:       "VITAL MENTAL BALANCE EXPERIENCE",
        imageUrl:    "public/images/experiencias/Experiencia 15/equilibrio mental.png",
        ctaText:     "Buy",
        ctaLink:     "experiencias/Experiencia 15/compra.html",
        description: "With this experience we balance your nervous system and brain chemistry… but what really changes is how you feel in your own mind again. The emotional heaviness lifts, sleep returns, anxiety calms… and you start to see life from a place you thought you had lost.\n\nI was also at that point where getting up was an effort, where sadness had no clear reason but also wouldn't go away, where the mind didn't rest even when the body was exhausted… until I understood that the brain also needs nutrition, cleansing and regeneration.\n\nToday I have seen people come off years of antidepressants, recover their sleep, start feeling genuine motivation and joy again. Nobody talks only about the depression that improved… they talk about wanting to live fully again.\n\nThis is not a substitute for your psychological treatment. It is an experience where your nervous system stops being in crisis and starts recovering its balance. Brain inflammation decreases, neurotransmitters are nourished, rest is restored… and without forcing it, your mind starts to find its calm the way it naturally should.\n\nYou don't just survive the day… your mind starts to find its peace.",
        includes: [
          "Personalized coaching — One-on-one guidance based on your goals and lifestyle.",
          "Key recommendations — Essential product and habit suggestions for your first results.",
          "Recipe book — A collection of healthy, easy and delicious meals.",
          "Juice book — Detox and energizing blends for every moment of the day.",
          "360° Experience",
        ],
      },
    ],
  },

  contacto: {
    heading:    "Contact Us",
    subheading: "Have questions about any experience? Write to us and we will get back to you shortly.",
    formspreeId: "XXXXXXXX",
    whatsapp:  "5212241033782",
    email:     "prohernatura.contacto@gmail.com",
  },

  faq: {
    heading:  "Frequently Asked Questions",
    imageUrl: "public/images/imagen.webp",
    items: [
      {
        q: "Are PHN products safe?",
        a: "Yes. All PHN products are 100% natural and certified by COFEPRIS, FDA and Health Canada. They are manufactured with PHN nanotechnology ultra-milling that maximizes cellular absorption without chemicals or artificial preservatives. PHN has over 20 years of experience in natural supplements.",
      },
      {
        q: "How do I know which product I need?",
        a: "Each PHN product is designed for a specific goal: digestion, joints, nervous system, circulation, liver, kidneys, immune system and more. Write to us on WhatsApp at 2241033782 and we'll advise you based on your needs, or ask Meredith in the chat.",
      },
      {
        q: "Can I take multiple products at the same time?",
        a: "Yes, in fact many PHN experiences combine several supplements that work together. For example, the 'Reach Your Vital Figure' experience combines F.VIT LH for the liver, F.VIT 90 CAPS for metabolism, F.VIT 6 CAPS for detox and the KIT F.VIT MAX that amplifies everything in one package. Each one works on a different front.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most people notice improvements from the first week: less inflammation, better digestion and more energy. The most complete results are seen between 4 and 12 weeks of consistent use, depending on the product and condition.",
      },
      {
        q: "Do the products have contraindications?",
        a: "Some products are not recommended for children under 12, pregnant or breastfeeding women. Products like HERGY SX are only for adults 18+. If you have a specific medical condition, consult your doctor before starting any supplement.",
      },
      {
        q: "What is PHN nanotechnology?",
        a: "It is a patented ultra-milling process that converts ingredients into nanometric powder. This allows capsules to have a much larger absorption surface, enabling active compounds to reach cells directly with greater speed and efficiency than traditional supplements.",
      },
      {
        q: "Do you ship to all of Mexico?",
        a: "Yes, we ship nationwide. You can also pick up directly at our location in Tlalpan, Mexico City. Write to us on WhatsApp at 2241033782 to arrange your shipment or visit.",
      },
      {
        q: "How do I place an order?",
        a: "Write to Betty González directly on WhatsApp at 2241033782. She will advise you, help you choose the ideal products and arrange shipping or delivery. The attention is personalized and direct.",
      },
      {
        q: "Does PHN also have cosmetic products?",
        a: "Yes. The Cosmetics PHN line includes F.VIT GEL for skin toning, VR-4 GEL for varicose veins, DB-6 Cream for dryness, Collagen 80/20 (day) and 50/50 (night) for skin rejuvenation, and the PGMT20 brightening exfoliating Mask. All topical use with natural ingredients.",
      },
      {
        q: "What do PHN experiences include?",
        a: "Each experience includes specific supplements, a meal plan, therapeutic juices and teas recipe book, intake guide at the exact times according to your body's natural laws, alkaline food list and 24/7 accompaniment with Betty González.",
      },
    ],
  },

  ui: {
    testimonialsPreTitle: "What our clients say",
    testimonialsSubtitle: "Real results from real people",
    expSeeMore:  "See more",
    expIncludes: "What's included",
    formName:    "Your name",
    formEmail:   "Your email",
    formSubject: "Subject",
    formMessage: "Your message...",
    formSubmit:  "Send message",
    formSuccess: "Message sent! We'll get back to you soon.",
    mapHeading:  "Address",
    mapLink:     "View on Google Maps",
  },

  libros: {
    heading: "Our Books",
    subheading: "Natural knowledge at your fingertips",
    items: [
      {
        title:       "Juices, Teas & Infusions Vol. 1",
        imageUrl:    "public/libros/jugos-v1/portada.webp",
        description: "Discover the natural juices, teas and infusions Betty González uses in her experiences to reduce inflammation, detox and activate your metabolism.",
        viewerUrl:   "visor-imagenes.html?catalog=jugos&title=Juices%2C%20Teas%20%26%20Infusions%20Vol.%201",
        ctaText:     "Read book",
      },
      {
        title:       "FIT Recipe Book — Healthy Recipes",
        imageUrl:    "public/libros/recetario/portada.webp",
        description: "50 delicious and nutritious vegetarian recipes designed so you can eat healthy without sacrificing taste. Your ally in every PHN experience.",
        viewerUrl:   "visor-imagenes.html?catalog=recetas&title=FIT%20Recipe%20Book%20%E2%80%94%20Healthy%20Recipes",
        ctaText:     "Read book",
      },
      {
        title:       "Proher Natura Catalog",
        imageUrl:    "public/libros/catalogo-proher/portada.webp",
        description: "Complete Proher Natura product catalog. Click any product to view its full details.",
        viewerUrl:   "visor-imagenes.html?catalog=proher&title=Proher%20Natura%20Catalog",
        ctaText:     "View catalog",
      },
      {
        title:       "Cosmetics Catalog",
        imageUrl:    "public/libros/catalogo-cosmeticos/portada.webp",
        description: "PHN cosmetics product catalog. Click any product to view its full details.",
        viewerUrl:   "visor-imagenes.html?catalog=cosmeticos&title=Cosmetics%20Catalog",
        ctaText:     "View catalog",
      },
    ],
  },

  infoSection: {
    address: {
      heading: "ADDRESS",
      lines: [
        "Av. Raúl Isidro Burgos 2224, Maestro Federal,",
        "72080 Heroica Puebla de Zaragoza, Pue.",
      ],
    },
    whatsappFloat: "5212241033782",
    termsUrl:  "#",
    termsText: "Terms and Conditions",
    credits:   "All rights reserved",
    social: [
      { name: "Facebook",   url: "https://www.facebook.com/share/1Dq4X1YqxC/", color: "#1877f2", icon: "fb"  },
      { name: "Instagram",  url: "https://www.instagram.com/natbetygonzalez/", color: "#e1306c", icon: "ig"  },
      { name: "WhatsApp",   url: "https://wa.me/5212241033782", color: "#25d366", icon: "wa" },
      { name: "TikTok",     url: "https://www.tiktok.com/@bea.proher.natura1?_r=1&_t=ZS-96laW43SGX7", color: "#010101", icon: "tt"  },
    ],
  },

};
