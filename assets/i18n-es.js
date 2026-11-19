/* English -> Spanish toggle.
   Every visible English string in index.html maps to its Spanish version below.
   When you change a text in index.html, change its key here too (keys must match exactly,
   with whitespace collapsed). Strings without an entry stay in English. */
(function () {
  "use strict";

  var ES = {
    // Nav and hero
    "Research": "Investigación",
    "Thesis": "Tesis",
    "Code": "Código",
    "In the field": "En terreno",
    "Teaching": "Docencia",
    "Building": "Emprender",
    "AI": "IA",
    "Contact": "Contacto",
    "Main": "Principal",
    "Computer Engineer · M.Sc. Electrical Engineering": "Ingeniero Civil en Computación · Magíster en Ingeniería Eléctrica",
    "I take 3D perception out of the lab and into the orchard.": "Llevo la percepción 3D del laboratorio al huerto.",
    "I build systems that let robots and sensors understand real places: from 3D reconstruction research to hardware I install myself in the field, and the students I teach along the way.": "Construyo sistemas que permiten a robots y sensores entender lugares reales: desde investigación en reconstrucción 3D hasta hardware que yo mismo instalo en terreno, y los estudiantes a los que enseño en el camino.",
    "Get in touch": "Contáctame",
    "See my thesis": "Ver mi tesis",
    "M.Sc. thesis, highest distinction": "Tesis de magíster, distinción máxima",
    "Hannover, DE": "Hannover, Alemania",
    "Research stay, L3S · 2026": "Pasantía de investigación, L3S · 2026",
    "1st place": "1er lugar",
    "FIRVI 2025, as team mentor": "FIRVI 2025, como mentor del equipo",
    "Nicolás in a cherry orchard next to a sensor-equipped field robot": "Nicolás en un huerto de cerezos junto a un robot de campo con sensores",
    "Data collection in a cherry orchard, O'Higgins Region, Chile.": "Captura de datos en un huerto de cerezos, Región de O'Higgins, Chile.",

    // Pillars
    "What I do": "Lo que hago",
    "3D computer vision and neural 3D reconstruction for robotics and agriculture.": "Visión por computador 3D y reconstrucción 3D neuronal para robótica y agricultura.",
    "Python and PyTorch tools on Nerfstudio: new methods, viewers and data pipelines.": "Herramientas en Python y PyTorch sobre Nerfstudio: métodos nuevos, visores y pipelines de datos.",
    "Field robots, precision GPS, sensor networks and weather balloons, deployed by hand.": "Robots de campo, GPS de precisión, redes de sensores y globos meteorológicos, desplegados con mis propias manos.",
    "Robotics mentor for school students, university TA, workshop tutor.": "Mentor de robótica escolar, ayudante universitario y tutor de talleres.",
    "Co-founded an academy and built its platform; consulting and industry work.": "Cofundé una academia y construí su plataforma; consultorías y trabajo en la industria.",

    // 01 Research
    "01 · Research": "01 · Investigación",
    "Teaching machines to see objects in 3D": "Enseñar a las máquinas a ver objetos en 3D",
    "At RISLab, Universidad de O'Higgins, I study how a set of ordinary photos can become a 3D model a robot can reason about, for example to find and count cherries on a tree.": "En el RISLab de la Universidad de O'Higgins estudio cómo un conjunto de fotos comunes puede convertirse en un modelo 3D con el que un robot pueda razonar, por ejemplo para encontrar y contar las cerezas de un árbol.",
    "Nicolás presenting 3D reconstruction of cherry trees on stage at LACORO": "Nicolás presentando la reconstrucción 3D de cerezos en LACORO",
    "1st place · Master's paper · LACORO 2024": "1er lugar · Artículo de magíster · LACORO 2024",
    "3D Reconstruction of Cherry Trees and Fruits Using Implicit Neural Models": "3D Reconstruction of Cherry Trees and Fruits Using Implicit Neural Models",
    "Presented at the LACORO seminar, where it won first place among master's papers. It was the first public version of the idea that became my thesis: rebuild a whole cherry tree in 3D from photos, then find the fruit inside it.": "Presentado en el seminario LACORO, donde ganó el primer lugar entre los artículos de magíster. Fue la primera versión pública de la idea que se convirtió en mi tesis: reconstruir un cerezo completo en 3D a partir de fotos y luego encontrar la fruta dentro de él.",
    "With Ariel Zúñiga and Rodrigo Verschae · RISLab, Universidad de O'Higgins": "Con Ariel Zúñiga y Rodrigo Verschae · RISLab, Universidad de O'Higgins",
    "See where it led: the thesis": "Mira a dónde llevó: la tesis",
    "Nicolás in front of Hannover's New Town Hall": "Nicolás frente al Nuevo Ayuntamiento de Hannover",
    "A Pepper humanoid robot fitted with extra cameras at the L3S lab": "Un robot humanoide Pepper con cámaras adicionales en el laboratorio L3S",
    "Feb – Mar 2026 · Germany": "Feb – Mar 2026 · Alemania",
    "International research stay": "Pasantía internacional de investigación",
    "L3S Research Center, Leibniz University Hannover. Tested how well 3D reconstruction holds up when photos are blurry, dark or noisy.": "L3S Research Center, Universidad Leibniz de Hannover. Evalué qué tan bien resiste la reconstrucción 3D cuando las fotos están borrosas, oscuras o con ruido.",
    "Nicolás standing next to his research poster": "Nicolás junto a su póster de investigación",
    "Open source · Talks": "Código abierto · Charlas",
    "Sharing the tools": "Compartir las herramientas",
    "Public tools built during the thesis: a Nerfstudio patch that keeps several models in one coordinate frame, FruitNeRF on a ZipNeRF backbone, and a live 3D model explorer. Plus a hands-on workshop at LACORO 2025.": "Herramientas públicas creadas durante la tesis: un parche de Nerfstudio que mantiene varios modelos en un mismo sistema de coordenadas, FruitNeRF sobre una base ZipNeRF y un explorador de modelos 3D en vivo. Además, un taller práctico en LACORO 2025.",
    "See the code": "Ver el código",
    "Forthcoming papers": "Próximas publicaciones",
    "Details will be shared once published.": "Los detalles se compartirán cuando se publiquen.",
    "Under review": "En revisión",

    // Thesis
    "Master's thesis · defended 26 October 2026": "Tesis de magíster · defendida el 26 de octubre de 2026",
    "Give the computer photos of a tree, and show it in a few of them what a cherry looks like. It returns a separate 3D box around every cherry, ready for a robot or an agronomist to count and measure. The method is not tied to cherries: it works for any kind of object.": "Dale al computador fotos de un árbol y muéstrale en algunas de ellas cómo se ve una cereza. Te devuelve una caja 3D separada alrededor de cada cereza, lista para que un robot o un agrónomo la cuente y la mida. El método no depende de las cerezas: funciona con cualquier tipo de objeto.",
    "Grade 7.0 / 7.0": "Nota 7,0 / 7,0",
    "Highest distinction": "Distinción máxima",
    "Advisor: Rodrigo Verschae": "Profesor guía: Rodrigo Verschae",
    "Funded by FIC O'Higgins, UOH and ANID": "Financiada por FIC O'Higgins, UOH y ANID",
    "Your browser cannot play this video.": "Tu navegador no puede reproducir este video.",
    "The first half of the thesis in 20 seconds: from photos of a real tree to individual cherries, separated in 3D.": "La primera mitad de la tesis en 20 segundos: de fotos de un árbol real a cerezas individuales, separadas en 3D.",
    "The problem": "El problema",
    "Modern 3D reconstruction (NeRF) gives a beautiful, continuous model of a scene, but it has no idea where one object ends and the next begins. A tree is just one big cloud.": "La reconstrucción 3D moderna (NeRF) entrega un modelo continuo y muy realista de una escena, pero no sabe dónde termina un objeto y dónde empieza el siguiente. Un árbol es solo una gran nube.",
    "The idea": "La idea",
    "Use simple 2D masks (\"this is a cherry\") to teach the 3D model where the objects are, then cut that evidence into bounded boxes: one candidate region per object, each with its own shape and color.": "Usar máscaras 2D simples («esto es una cereza») para enseñarle al modelo 3D dónde están los objetos, y luego recortar esa evidencia en cajas acotadas: una región candidata por objeto, cada una con su propia forma y color.",
    "How it works, step by step": "Cómo funciona, paso a paso",
    "Photos of the tree arranged where each was taken": "Fotos del árbol ubicadas donde se tomó cada una",
    "01 · Capture": "01 · Capturar",
    "Photos from all around the tree, each with its known camera position.": "Fotos desde todo el contorno del árbol, cada una con su posición de cámara conocida.",
    "The cherry tree rebuilt as a 3D scene": "El cerezo reconstruido como escena 3D",
    "02 · Reconstruct": "02 · Reconstruir",
    "A neural model rebuilds the whole tree as a 3D scene.": "Un modelo neuronal reconstruye el árbol completo como una escena 3D.",
    "3D cherry tree with every fruit marked in red by the mask-guided model": "Cerezo 3D con cada fruta marcada en rojo por el modelo guiado por máscaras",
    "03 · Highlight": "03 · Resaltar",
    "Masks of the fruit teach the model where the cherries are: every fruit lights up in red inside the 3D tree.": "Las máscaras de la fruta le enseñan al modelo dónde están las cerezas: cada fruta se ilumina en rojo dentro del árbol 3D.",
    "A cluster of cherries split into separate instances, each in its own color": "Un racimo de cerezas separado en instancias, cada una de un color",
    "04 · Separate": "04 · Separar",
    "Instance separation splits each cluster into single cherries, one color per fruit.": "La separación por instancias divide cada racimo en cerezas individuales, un color por fruta.",
    "Inside step 04: separating touching cherries in three stages": "Dentro del paso 04: separar cerezas que se tocan, en tres etapas",
    "A greedy algorithm, run inside each candidate region": "Un algoritmo greedy, ejecutado dentro de cada región candidata",
    "Virtual cameras arranged around a cluster, each view with its cherry masks": "Cámaras virtuales alrededor de un racimo, cada vista con sus máscaras de cerezas",
    "Stage 1 · Look from every side": "Etapa 1 · Mirar desde todos los lados",
    "Virtual cameras circle the cluster; each new view gets its cherry masks.": "Cámaras virtuales rodean el racimo; cada vista nueva recibe sus máscaras de cerezas.",
    "vote": "voto",
    "keep fruit": "fruta se queda",
    "Stage 2 · Vote out the background": "Etapa 2 · Descartar el fondo por votación",
    "A 3D point stays only if most of the views that see it agree it is fruit. Leaves and noise drop out.": "Un punto 3D se queda solo si la mayoría de las vistas que lo ven coinciden en que es fruta. Las hojas y el ruido se descartan.",
    "Rendered view where each separated cherry is recolored with its own label": "Vista renderizada donde cada cereza separada tiene el color de su etiqueta",
    "Stage 3 · Assign, greedily": "Etapa 3 · Asignar, de forma greedy",
    "Mask by mask, the remaining points are matched to the nearest cherry centre, so each point ends up in exactly one fruit.": "Máscara por máscara, los puntos restantes se asignan al centro de cereza más cercano, así cada punto termina en exactamente una fruta.",
    "What it achieved": "Lo que logró",
    "How well the model outlines the target fruit (mask mIoU), before and after the mask-guided step. Almost 3× better.": "Qué tan bien el modelo delimita la fruta (mIoU de máscara), antes y después del paso guiado por máscaras. Casi 3× mejor.",
    "Average overlap with the true cherry shape when splitting clustered cherries into single fruits (silhouette IoU).": "Superposición promedio con la forma real de la cereza al separar racimos en frutas individuales (IoU de silueta).",
    "Photos in a new dataset of a real cherry tree, taken in the orchard with a capture protocol I designed and validated.": "Fotos en un nuevo dataset de un cerezo real, tomadas en el huerto con un protocolo de captura que diseñé y validé.",
    "Pose first": "Primero la pose",
    "Stress tests showed that errors in camera position hurt the result more than blur, noise or poor light.": "Las pruebas de estrés mostraron que los errores en la posición de la cámara afectan más el resultado que el desenfoque, el ruido o la poca luz.",
    "3D model of a cherry tree captured in the orchard": "Modelo 3D de un cerezo capturado en el huerto",
    "In the orchard": "En el huerto",
    "Finding and measuring fruit on real trees for precision agriculture.": "Encontrar y medir fruta en árboles reales para agricultura de precisión.",
    "Indoor bonsai scene: the photo, its object mask, and the object recovered on its own in 3D": "Escena interior de un bonsái: la foto, su máscara y el objeto recuperado por sí solo en 3D",
    "Indoors, for robots": "En interiores, para robots",
    "The same method on an indoor scene: photo, mask, and the object cut out alone in 3D. Then stress-tested with darkness, blur and camera errors.": "El mismo método en una escena interior: foto, máscara y el objeto recortado solo en 3D. Luego sometido a pruebas de estrés con oscuridad, desenfoque y errores de cámara.",
    "Scene: Mip-NeRF 360 “bonsai” dataset": "Escena: dataset «bonsai» de Mip-NeRF 360",
    "Nicolás with the thesis committee after the defense": "Nicolás con la comisión de tesis después de la defensa",
    "The defense": "La defensa",
    "26 October 2026, Universidad de O'Higgins.": "26 de octubre de 2026, Universidad de O'Higgins.",
    "See the code behind it": "Ver el código detrás",

    // 02 Code
    "02 · Code": "02 · Código",
    "The software behind the research": "El software detrás de la investigación",
    "Most of my thesis is code. I build on Nerfstudio, the open-source framework for neural 3D reconstruction: new methods, tools to inspect what a model learned, and pipelines that keep experiments comparable.": "La mayor parte de mi tesis es código. Trabajo sobre Nerfstudio, el framework de código abierto para reconstrucción 3D neuronal: métodos nuevos, herramientas para inspeccionar lo que aprendió un modelo y pipelines que mantienen los experimentos comparables.",
    "Tools I work with": "Herramientas que uso",
    "FruitNeRF's semantic head on a ZipNeRF backbone, registered as a Nerfstudio method.": "La cabeza semántica de FruitNeRF sobre una base ZipNeRF, registrada como método de Nerfstudio.",
    "Nerfstudio method": "Método Nerfstudio",
    "A Nerfstudio fork where the dataset owns its coordinate frame, so several models trained on it line up exactly.": "Un fork de Nerfstudio donde el dataset define su propio sistema de coordenadas, así varios modelos entrenados con él quedan perfectamente alineados.",
    "Reproducibility": "Reproducibilidad",
    "Opens any trained Nerfstudio model and lets you fly through it, with live RGB and depth renders, training cameras and snapshots.": "Abre cualquier modelo entrenado de Nerfstudio y te deja recorrerlo, con renders RGB y de profundidad en vivo, cámaras de entrenamiento y capturas.",
    "3D viewer": "Visor 3D",
    "The workshop I teach: from what a radiance field is to training your own scene in Colab.": "El taller que dicto: desde qué es un campo de radiancia hasta entrenar tu propia escena en Colab.",
    "A* path planning and PID control for a mobile robot simulated in CoppeliaSim.": "Planificación de rutas con A* y control PID para un robot móvil simulado en CoppeliaSim.",
    "Robotics": "Robótica",
    "Control": "Control",
    "More of the thesis code will open up once the papers that use it are published.": "Más código de la tesis se abrirá cuando se publiquen los artículos que lo usan.",

    // 03 Field
    "03 · In the field": "03 · En terreno",
    "I own the whole chain, from the sensor to the screen": "Me hago cargo de toda la cadena, del sensor a la pantalla",
    "Research that leaves the lab: I install the hardware, make it send its data on its own, and build what people use to look at it.": "Investigación que sale del laboratorio: instalo el hardware, hago que envíe sus datos por sí solo y construyo lo que la gente usa para verlos.",
    "Team standing beside the Warthog field robot on campus": "Equipo junto al robot de campo Warthog en el campus",
    "Operating the Clearpath Warthog field robot": "Operando el robot de campo Clearpath Warthog",
    "Nicolás releasing a weather balloon from a rooftop": "Nicolás soltando un globo meteorológico desde una azotea",
    "Launching radiosondes": "Lanzamiento de radiosondas",
    "Cherries on a branch with a small monitoring device": "Cerezas en una rama con un pequeño dispositivo de monitoreo",
    "Monitoring cherry growth": "Monitoreo del crecimiento de cerezas",
    "Nicolás in a hard hat on a rooftop installation": "Nicolás con casco en una instalación en azotea",
    "Rooftop GPS station install": "Instalación de estación GPS en azotea",
    "Team mounting a LoRaWAN gateway on a mast": "Equipo montando un gateway LoRaWAN en un mástil",
    "LoRaWAN Milesight gateway installation": "Instalación de gateway LoRaWAN Milesight",
    "Chart of fruit size over time for two orchard rows": "Gráfico del tamaño de la fruta en el tiempo para dos hileras del huerto",
    "Cherry growth report": "Informe de crecimiento de cerezas",
    "Precision agriculture": "Agricultura de precisión",
    "Research assistant on a regional FIC project automating the monitoring of cherry production. 2024 – present.": "Asistente de investigación en un proyecto FIC regional que automatiza el monitoreo de la producción de cerezas. 2024 – presente.",
    "Plug-and-play GPS stations": "Estaciones GPS plug-and-play",
    "Cellular gateways that set up centimetre-level GPS on their own and send the data to a server. 2026.": "Gateways celulares que configuran por sí solos GPS de precisión centimétrica y envían los datos a un servidor. 2026.",
    "Atmospheric soundings": "Sondeos atmosféricos",
    "Consultant for Flagship Labs (Cambridge, MA) with UOH: weather balloons for wind profiles. 2026 – present.": "Consultor para Flagship Labs (Cambridge, MA) junto a la UOH: globos meteorológicos para perfiles de viento. 2026 – presente.",
    "Cherry ripeness cameras": "Cámaras de madurez de cerezas",
    "Installed and calibrated hyperspectral, multispectral and RGB cameras plus weather sensors to model how cherries ripen. 2026.": "Instalé y calibré cámaras hiperespectrales, multiespectrales y RGB, además de sensores meteorológicos, para modelar cómo maduran las cerezas. 2026.",

    // 04 Teaching
    "04 · Teaching": "04 · Docencia",
    "Robotics is better when you can explain it": "La robótica es mejor cuando puedes explicarla",
    "Since 2023 I have mentored school teams building robots, and taught university courses from the assistant's side of the room.": "Desde 2023 guío a equipos escolares que construyen robots y enseño en cursos universitarios como ayudante.",
    "Robotics, Tech Art and Rescue mentor": "Mentor de Robótica, Arte Tecnológico y Rescate",
    "Fundación Mustakis · 2023 – 2026": "Fundación Mustakis · 2023 – 2026",
    "TA: Robotics, Systems Programming, Data Mining": "Ayudante: Robótica, Programación de Sistemas, Minería de Datos",
    "TA, AI in Robotics Diploma": "Ayudante, Diplomado de IA en Robótica",
    "Workshop tutor, 3D reconstruction": "Tutor de taller, reconstrucción 3D",
    "Secretary, IEEE Student Branch": "Secretario, Rama Estudiantil IEEE",
    "UOH · 2026 – present": "UOH · 2026 – presente",
    "Group of students holding certificates": "Grupo de estudiantes con sus diplomas",
    "Gold medal: first place, Club CyT Arte Tecnológico, FIRVI, Valparaíso 2025": "Medalla de oro: primer lugar, Club CyT Arte Tecnológico, FIRVI, Valparaíso 2025",
    "1st place, FIRVI 2025": "1er lugar, FIRVI 2025",
    "Nicolás smiling in a classroom full of students": "Nicolás sonriendo en una sala llena de estudiantes",

    // 05 Building
    "05 · Building": "05 · Emprender",
    "Engineering that ships to real users": "Ingeniería que llega a usuarios reales",
    "Co-founder & Deputy Director · 2026 – present": "Cofundador y Subdirector · 2026 – presente",
    "A tutoring academy for university-admission (PAES) preparation. I helped found the company, wrote its legal terms, and built and run its website, booking platform and database.": "Una academia de preparación para la PAES. Ayudé a fundar la empresa, redacté sus términos legales y construí y opero su sitio web, su plataforma de reservas y su base de datos.",
    "Home page of the Academia Coporfu website": "Página de inicio del sitio de Academia Coporfu",
    "2024 · Internship": "2024 · Práctica",
    "Made the truck-load counting algorithms of Logmeter run faster.": "Aceleré los algoritmos de conteo de carga de camiones de Logmeter.",
    "2025 · Supervision": "2025 · Supervisión",
    "Supervised software interns and their supervisors in agile development.": "Supervisé a practicantes de software y a sus supervisores en desarrollo ágil.",
    "Wrote ground-truth data used to train large language models.": "Escribí datos de referencia (ground truth) para entrenar modelos de lenguaje.",

    // How I work with AI
    "How I work": "Cómo trabajo",
    "I use AI on purpose, and I check its work": "Uso la IA con intención, y reviso su trabajo",
    "I work with Claude Code, Anthropic's coding agent, every day. It makes me faster, but the judgement stays mine: I decide what to build and I read everything it writes. Running is not enough. I keep code only when it is correct, faithful to the idea, as simple as the problem allows and easy for someone else to follow. When the AI overcomplicates a solution or does not grasp the approach, I write it myself.": "Trabajo todos los días con Claude Code, el agente de programación de Anthropic. Me hace más rápido, pero el criterio sigue siendo mío: yo decido qué construir y leo todo lo que escribe. Que funcione no basta. Me quedo con el código solo si es correcto, fiel a la idea, tan simple como el problema lo permite y fácil de entender para otra persona. Cuando la IA complica de más una solución o no entiende el enfoque, lo escribo yo.",
    "A method, not a shortcut": "Un método, no un atajo",
    "Plan first, then change one thing at a time so every change is easy to review.": "Primero planificar, luego cambiar una cosa a la vez para que cada cambio sea fácil de revisar.",
    "Commit locally, read the diff, push only after it passes.": "Commit local, leer el diff y hacer push solo cuando pasa.",
    "Test on a local copy before anything touches production.": "Probar en una copia local antes de tocar producción.",
    "End each session with a written handoff, so the next one starts from facts, not memory.": "Cerrar cada sesión con un traspaso escrito, para que la siguiente parta de hechos y no de memoria.",
    "A tutor that shows its work": "Un tutor que muestra su razonamiento",
    "Walk through a paper's equations until I can explain them without help.": "Recorrer las ecuaciones de un paper hasta poder explicarlas sin ayuda.",
    "Compare implementations and their trade-offs before choosing one.": "Comparar implementaciones y sus ventajas y desventajas antes de elegir una.",
    "Measure before guessing: when a result looks wrong, find the number that explains it.": "Medir antes de adivinar: cuando un resultado se ve mal, buscar el número que lo explica.",
    "What I don't hand over": "Lo que no delego",
    "Research questions, design decisions and conclusions.": "Las preguntas de investigación, las decisiones de diseño y las conclusiones.",
    "Unpublished papers, private data and credentials stay out of prompts.": "Los papers inéditos, los datos privados y las credenciales quedan fuera de los prompts.",
    "Nothing gets published, deployed or claimed until I have read it and seen it work.": "Nada se publica, se despliega ni se afirma hasta que lo he leído y lo he visto funcionar.",
    "This site is an example: I chose the content and photos and designed it with Claude, then reviewed every section before publishing.": "Este sitio es un ejemplo: elegí el contenido y las fotos, lo diseñé con Claude y revisé cada sección antes de publicarlo.",

    // Timeline
    "The path so far": "El camino hasta ahora",
    "Starts Computer Engineering, UOH": "Ingresa a Ingeniería Civil en Computación, UOH",
    "Joins RISLab; thesis research begins (Dec 2022)": "Se une al RISLab; comienza la investigación de tesis (dic 2022)",
    "Vision and control for a robot arm, RISLab": "Visión y control para un brazo robótico, RISLab",
    "Robotics mentor, Fundación Mustakis": "Mentor de robótica, Fundación Mustakis",
    "TA, Systems Programming": "Ayudante, Programación de Sistemas",
    "B.Sc. in Engineering Sciences; starts M.Sc.": "Licenciatura en Ciencias de la Ingeniería; comienza el magíster",
    "Internship, WoodtechMS": "Práctica, WoodtechMS",
    "FIC cherry project: LoRaWAN network, Warthog robot": "Proyecto FIC de cerezas: red LoRaWAN, robot Warthog",
    "TA, AI in Robotics, U. de Chile": "Ayudante, IA en Robótica, U. de Chile",
    "1st place master's paper, LACORO": "1er lugar artículo de magíster, LACORO",
    "Intern supervision, Coca-Cola Andina": "Supervisión de practicantes, Coca-Cola Andina",
    "TA, Robotics, UOH": "Ayudante, Robótica, UOH",
    "Team mentor: 1st place FIRVI": "Mentor de equipo: 1er lugar FIRVI",
    "Workshop tutor, LACORO 2025": "Tutor de taller, LACORO 2025",
    "Research stay, L3S Hannover (Feb – Mar)": "Pasantía de investigación, L3S Hannover (feb – mar)",
    "IEEE Student Branch secretary": "Secretario de la Rama Estudiantil IEEE",
    "External computer-vision expert, UOH (Apr)": "Experto externo en visión por computador, UOH (abr)",
    "Co-founds Academia Coporfu; GNSS consultant (Jul)": "Cofunda Academia Coporfu; consultor GNSS (jul)",
    "Flagship Labs radiosondes (Aug)": "Radiosondas Flagship Labs (ago)",
    "Thesis defended, 7.0 (26 Oct)": "Defensa de tesis, 7,0 (26 oct)",
    "Hyperspectral cherry project (Oct – Nov)": "Proyecto hiperespectral de cerezas (oct – nov)",

    // Contact
    "Nicolás with his thesis committee at the Universidad de O'Higgins": "Nicolás con su comisión de tesis en la Universidad de O'Higgins",
    "Looking for my next engineering role, in industry or in research.": "Busco mi próximo desafío en ingeniería, en la industria o en investigación.",
    "I have built and deployed full-stack web platforms, run their servers and databases, written computer vision pipelines, worked with field robots and published research. Software, infrastructure, data or robotics: I pick up new stacks fast.": "He construido y desplegado plataformas web full-stack, administrado sus servidores y bases de datos, escrito pipelines de visión por computador, trabajado con robots de campo y publicado investigación. Software, infraestructura, datos o robótica: aprendo stacks nuevos rápido.",
    "Based in Machalí, Chile. Open to remote work and relocation. Spanish (native), English (B2).": "Vivo en Machalí, Chile. Abierto a trabajo remoto y a cambiarme de ciudad o país. Español (nativo), inglés (B2)."
  };

  var ATTRS = ["alt", "aria-label"];
  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };
  var textNodes = [];   // [node, originalText]
  var attrNodes = [];   // [element, attr, originalValue]
  var originalTitle = document.title;

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        if (p === "SCRIPT" || p === "STYLE") return NodeFilter.FILTER_REJECT;
        return ES.hasOwnProperty(norm(n.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) textNodes.push([walker.currentNode, walker.currentNode.nodeValue]);
    ATTRS.forEach(function (a) {
      document.querySelectorAll("[" + a + "]").forEach(function (el) {
        var v = el.getAttribute(a);
        if (ES.hasOwnProperty(norm(v))) attrNodes.push([el, a, v]);
      });
    });
  }

  function apply(lang) {
    var es = lang === "es";
    textNodes.forEach(function (t) {
      var orig = t[1];
      if (!es) { t[0].nodeValue = orig; return; }
      var lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
      t[0].nodeValue = lead + ES[norm(orig)] + trail;
    });
    attrNodes.forEach(function (a) { a[0].setAttribute(a[1], es ? ES[norm(a[2])] : a[2]); });
    document.documentElement.lang = es ? "es" : "en";
    document.title = es ? "Nicolás Araya · Software, Visión por Computador y Robótica" : originalTitle;
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = es ? "EN" : "ES";
      btn.setAttribute("aria-label", es ? "View this site in English" : "Ver este sitio en español");
      btn.setAttribute("lang", es ? "en" : "es");
    }
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "es" || q === "en") return q;
    try { var s = localStorage.getItem("lang"); if (s === "es" || s === "en") return s; } catch (e) {}
    return "en";
  }

  function init() {
    collect();
    var lang = initialLang();
    apply(lang);
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", function () {
      lang = lang === "es" ? "en" : "es";
      apply(lang);
      try { localStorage.setItem("lang", lang); } catch (e) {}
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
