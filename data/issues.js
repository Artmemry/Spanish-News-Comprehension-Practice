/* La Actualidad — datos
   Un objeto por mes, el más reciente primero. Todos los textos están redactados
   para este sitio a partir de hechos publicados; ninguno está copiado del
   periódico, y siempre se enlaza el artículo original. Ver GENERATEUR.md.
*/
window.THEMES = {
  T1:{name:"La evolución de la sociedad española", short:"Sociedad", subs:["los cambios en la familia", "el mundo laboral", "el impacto turístico"]},
  T2:{name:"La cultura política y artística en el mundo hispánico", short:"Cultura", subs:["la música", "los medios de comunicación", "los festivales y las tradiciones"]},
  T3:{name:"La inmigración y la sociedad multicultural española", short:"Inmigración", subs:["el impacto positivo de la inmigración", "los retos de la inmigración y la integración", "la reacción social y las medidas políticas"]},
  T4:{name:"La dictadura de Franco y la transición a la democracia", short:"Memoria", subs:["la Guerra Civil y el ascenso de Franco", "la dictadura franquista", "la transición a la democracia"]}
};

window.ISSUES = [

{ id:"2026-09", label:"Septiembre 2026", published:"2026-09-01",
  note:"Cuatro artículos este mes, uno por tema. Agosto ha dado dos noticias fuertes: el informe de FEDEA sobre la pobreza infantil y el nuevo plan de exhumaciones anunciado en París.",
  items:[

/* ───────────────────── T1 ───────────────────── */
{
 id:"2026-09-ES-T1", theme:"T1", words:241, minutes:25,
 title:"Tener hijos joven, en España, empobrece",
 standfirst:"Un estudio de FEDEA y la Complutense mide lo que muchas familias ya sabían: el primer hijo, hoy, se paga caro.",
 source:{name:"que.es (estudio de FEDEA y la Universidad Complutense)", date:"25 de agosto de 2026",
         url:"https://www.que.es/2026/08/25/pobreza-familias-jovenes-espana-hijos/"},
 lex:[{code:"U1.6",label:"el trabajo, el dinero y la vivienda"},{code:"U1.3",label:"la vida familiar: modelos y diversidad"}],
 text:[
  "La Fundación de Estudios de Economía Aplicada, FEDEA, y la Universidad Complutense de Madrid publicaron el 25 de agosto de 2026 un estudio que analiza la pobreza en España entre 2008 y 2025. La conclusión que más llama la atención no es la cifra general, sino quién la sufre.",
  "El 28,3 % de los menores de dieciocho años vive por debajo del umbral de la pobreza: son 2,07 millones de niños y adolescentes. Si se usa la tasa AROPE, que añade a los ingresos bajos la carencia material y la baja intensidad de trabajo en el hogar, la cifra infantil sube al 33,8 %. La tasa de pobreza del conjunto de la población es del 19,5 %.",
  "Dicho de otra manera: ser menor de edad en España aumenta claramente la probabilidad de ser pobre.",
  "El estudio compara además a las familias según la edad de los padres. Entre las personas menores de treinta años con hijos, la carencia material severa ha crecido 7,26 puntos porcentuales desde 2008. Entre las de treinta a cuarenta y cuatro años con hijos, apenas 0,71 puntos. Los hogares monoparentales, en su inmensa mayoría encabezados por mujeres, están en riesgo de pobreza en un 50 % de los casos.",
  "Los investigadores proponen una prestación universal por crianza, que ya existe en la mayoría de los países europeos, combinada con ayudas dirigidas a las familias jóvenes y monoparentales y con políticas de conciliación."
 ],
 glossary:[
  ["el umbral de la pobreza","the poverty line"],
  ["la carencia material severa","severe material deprivation"],
  ["un hogar monoparental","a single-parent household"],
  ["una prestación","a benefit, an allowance"],
  ["la crianza","the raising of children"],
  ["la conciliación","balancing work and family life"],
  ["encabezado por","headed by"],
  ["los ingresos","income"],
  ["por debajo de","below"]
 ],
 tasks:[
  {t:"qcm", q:"¿Qué porcentaje de los menores de dieciocho años vive por debajo del umbral de la pobreza?",
   opts:["19,5 %","28,3 %","33,8 %"], a:1,
   why:"19,5 % es la tasa del conjunto de la población y 33,8 % es la tasa AROPE infantil."},
  {t:"vf", q:"La pobreza infantil es más alta que la del conjunto de la población.", a:"V",
   why:"28,3 % frente al 19,5 %."},
  {t:"vf", q:"La tasa AROPE solo tiene en cuenta los ingresos.", a:"F",
   why:"Añade la carencia material y la baja intensidad de trabajo del hogar."},
  {t:"vf", q:"Las familias jóvenes han empeorado mucho más que las de treinta a cuarenta y cuatro años.", a:"V",
   why:"7,26 puntos frente a 0,71."},
  {t:"vf", q:"El estudio calcula el coste de la prestación universal por crianza.", a:"N",
   why:"El texto la propone pero no da su coste."},
  {t:"lacune", q:"Completa con la cifra del texto.",
   before:"Los hogares monoparentales están en riesgo de pobreza en un",
   after:"de los casos.", a:["50 %","50%","50 por ciento","cincuenta por ciento"], bank:["28,3 %","33,8 %","50 %"]},
  {t:"lacune", q:"Completa con una palabra del texto.",
   before:"Los investigadores proponen una prestación universal por",
   after:", como la que ya existe en la mayoría de los países europeos.",
   a:["crianza"], bank:["crianza","vivienda","desempleo","jubilación"]},
  {t:"lexique", q:"Relaciona cada palabra del texto con su traducción.",
   pairs:[["el umbral de la pobreza","the poverty line"],
          ["la carencia material","material deprivation"],
          ["un hogar monoparental","a single-parent household"],
          ["una prestación","a benefit"],
          ["la crianza","raising children"],
          ["la conciliación","work-life balance"]]},
  {t:"court", q:"Explica con tus propias palabras la frase «ser menor de edad en España aumenta la probabilidad de ser pobre».",
   a:["Quiere decir que los niños son pobres con más frecuencia que los adultos: el 28,3 % de los menores está bajo el umbral, frente al 19,5 % de la población general."],
   keys:["niño|menor|infantil","más|mayor|28,3|19,5|frente"]},
  {t:"court", q:"¿Por qué crees que el estudio distingue entre padres menores de treinta años y padres de treinta a cuarenta y cuatro? Responde con una frase.",
   a:["Porque el daño se concentra en los padres jóvenes: su carencia material severa ha subido 7,26 puntos, diez veces más que la de los padres de treinta a cuarenta y cuatro años."],
   keys:["joven|jóvenes|menores de treinta","7,26|más|peor|concentra"]}
 ],
 stretch:{
  q:"«El Estado debería pagar una prestación a todas las familias con hijos, sean ricas o pobres.» ¿Estás de acuerdo? Escribe de 90 a 120 palabras.",
  model:"El argumento a favor es sólido: una prestación universal llega a todo el mundo sin trámites humillantes, no castiga a quien encuentra trabajo y evita que miles de familias queden fuera por un papel mal rellenado. Además, la mayoría de los países europeos ya la tienen. En contra se dice que dar dinero a familias acomodadas es malgastar recursos que harían más falta abajo. La respuesta habitual es que se recupera después vía impuestos, cobrando más a quien más gana. A mí me convence más la fórmula mixta que propone el estudio: una base universal, reforzada para las familias jóvenes y monoparentales, que son las que de verdad se han hundido desde 2008."}
},

/* ───────────────────── T2 ───────────────────── */
{
 id:"2026-09-ES-T2", theme:"T2", words:229, minutes:25,
 title:"Almodóvar vuelve a San Sebastián",
 standfirst:"La sección Made in Spain del festival reúne más de veinte películas. Entre ellas, la última de Almodóvar y la de Isabel Coixet.",
 source:{name:"Infobae España", date:"5 de agosto de 2026",
         url:"https://www.infobae.com/espana/cultura/2026/08/05/de-pedro-amodovar-e-isabel-coixet-al-regreso-de-albert-serra-tras-tardes-de-soledad-asi-sera-la-seleccion-made-in-spain-del-festival-de-san-sebastian/"},
 lex:[{code:"VOL.7",label:"el lenguaje cinematográfico"},{code:"VOL.1",label:"personajes y familia en Volver"}],
 text:[
  "El Festival de San Sebastián, que se celebra cada septiembre, ha dado a conocer su sección Made in Spain, la que reúne cada año lo que se ha rodado en España. Esta edición presenta más de veinte largometrajes: tres estrenos mundiales, dos estrenos nacionales y diez óperas primas.",
  "Esa última cifra merece un momento de atención. Diez de las veintitantas películas son primeras obras de sus directores, lo que dice bastante sobre la salud del cine español: hay gente nueva rodando.",
  "El nombre que más pesa sigue siendo el de Pedro Almodóvar, que llega con «Amarga Navidad», ya vista en Cannes, protagonizada por Bárbara Lennie, Leonardo Sbaraglia y Aitana Sánchez-Gijón. Isabel Coixet participa con «Tre ciotole», estrenada en Toronto en 2025, que cuenta la ruptura de una pareja.",
  "La inauguración corre a cargo de Albert Serra con «Seize moments de ma vie», un trabajo de no ficción sobre la actriz Ingrid Caven. El festival se cierra con «200 vidas, Paco Rabal», dirigida por Vanesa Benítez, sobre uno de los grandes actores del cine español del siglo XX.",
  "Para un estudiante de español, una sección así es un mapa: nombres consagrados y debutantes en la misma lista, ficción y documental, películas rodadas en español, en catalán y en francés. El cine español no es una sola cosa."
 ],
 glossary:[
  ["un largometraje","a feature film"],
  ["una ópera prima","a first film"],
  ["un estreno","a premiere, a release"],
  ["rodar","to shoot (a film)"],
  ["protagonizada por","starring"],
  ["la inauguración","the opening"],
  ["la clausura","the closing"],
  ["consagrado","established, celebrated"],
  ["la no ficción","non-fiction, documentary"]
 ],
 tasks:[
  {t:"qcm", q:"¿Cuántas óperas primas hay en la sección Made in Spain?",
   opts:["dos","tres","diez"], a:2,
   why:"Tres son los estrenos mundiales y dos los nacionales."},
  {t:"vf", q:"«Amarga Navidad» se estrena por primera vez en San Sebastián.", a:"F",
   why:"Ya se había visto en Cannes."},
  {t:"vf", q:"Isabel Coixet presenta una película sobre la ruptura de una pareja.", a:"V"},
  {t:"vf", q:"El festival se inaugura con una película de ficción.", a:"F",
   why:"«Seize moments de ma vie» es un trabajo de no ficción."},
  {t:"vf", q:"Paco Rabal ganó un premio en Cannes.", a:"N",
   why:"El texto solo dice que fue un gran actor del siglo XX."},
  {t:"lacune", q:"Completa con una palabra del texto.",
   before:"Diez de las veintitantas películas son primeras obras de sus directores: son",
   after:"primas.", a:["óperas","operas"], bank:["óperas","obras","piezas","escenas"]},
  {t:"lexique", q:"Relaciona cada palabra del texto con su traducción.",
   pairs:[["un largometraje","a feature film"],
          ["una ópera prima","a first film"],
          ["un estreno","a premiere"],
          ["rodar","to shoot a film"],
          ["la clausura","the closing"],
          ["consagrado","established"]]},
  {t:"court", q:"¿Por qué dice el texto que diez óperas primas «dicen bastante sobre la salud del cine español»?",
   a:["Porque significa que hay directores nuevos rodando y estrenando, no solo los nombres de siempre: un cine con relevo generacional está vivo."],
   keys:["nuevo|joven|debutante|relevo|gente nueva","vivo|salud|futuro|no solo|siempre"]},
  {t:"court", q:"El texto termina diciendo que «el cine español no es una sola cosa». Justifica esa afirmación con dos datos del texto.",
   a:["Porque conviven directores consagrados como Almodóvar con diez debutantes, y porque hay ficción y no ficción, y películas rodadas en varias lenguas."],
   keys:["consagrado|Almodóvar|debutante|ópera prima","ficción|documental|lengua|catalán|francés"]}
 ],
 stretch:{
  q:"Has estudiado «Volver». Escribe de 100 a 130 palabras explicando qué rasgos del cine de Almodóvar reconocerías en cualquier película suya.",
  model:"Almodóvar vuelve siempre a las mismas obsesiones y las trata con los mismos medios. Primero, las mujeres: en «Volver» son ellas quienes sostienen la historia, se protegen entre sí y guardan el secreto, mientras los hombres apenas aparecen o estorban. Segundo, La Mancha y Madrid como dos polos, el pueblo con sus vientos y sus supersticiones frente a la ciudad donde una se reinventa. Tercero, el color: el rojo insistente en la ropa y en la cocina, que anuncia la sangre y el deseo antes de que ocurran. Y por último, un tono que mezcla el melodrama y la comedia sin pedir permiso, de modo que se puede reír en la escena siguiente a un entierro."}
},

/* ───────────────────── T3 ───────────────────── */
{
 id:"2026-09-ES-T3", theme:"T3", words:238, minutes:30,
 title:"Regularización extraordinaria: cinco meses y un pasaporte",
 standfirst:"El real decreto abrió un plazo de dos meses y medio para salir de la irregularidad. Estos son los requisitos y las fechas.",
 source:{name:"CEAR — Comisión Española de Ayuda al Refugiado", date:"6 de julio de 2026",
         url:"https://www.cear.es/sections-post/regularizacion-extraordinaria-2026/"},
 lex:[{code:"U8.2",label:"la regularización extraordinaria 2026"},{code:"U8.1",label:"estatus legal, papeles y trámites"}],
 text:[
  "Un real decreto publicado en el Boletín Oficial del Estado abrió el 16 de abril de 2026 un proceso de regularización extraordinaria. Va dirigido a las personas migrantes que se encuentran en España en situación irregular y a quienes habían solicitado protección internacional.",
  "El plazo para presentar la solicitud fue del 16 de abril al 30 de junio de 2026, es decir, dos meses y medio. La Administración dispone de un máximo de tres meses para resolver cada expediente.",
  "Los requisitos son deliberadamente sencillos, porque un proceso extraordinario que exigiera demasiados papeles no serviría de nada. Hay que acreditar una permanencia ininterrumpida de cinco meses en España y presentar un pasaporte, un título de viaje o una cédula de inscripción, aunque esté caducado. Hay que carecer de antecedentes penales en España y en los países donde se haya residido en los últimos cinco años, y no representar una amenaza para el orden público. La tasa es de 38,28 euros para los adultos y de 10,94 para los menores.",
  "Pueden acogerse quienes llegaron a España antes del 1 de enero de 2026, así como los solicitantes de protección internacional que presentaron su petición antes de esa misma fecha.",
  "Detrás de estos trámites hay una realidad conocida: sin papeles no hay contrato legal, y sin contrato legal el trabajo es más barato, más peligroso y más fácil de imponer."
 ],
 glossary:[
  ["la regularización","the granting of legal status"],
  ["en situación irregular","without legal status"],
  ["el plazo","the deadline, the window"],
  ["la solicitud","the application"],
  ["acreditar","to prove, to evidence"],
  ["la permanencia ininterrumpida","continuous residence"],
  ["caducado","expired"],
  ["los antecedentes penales","a criminal record"],
  ["la tasa","the fee"],
  ["el expediente","the case file"]
 ],
 tasks:[
  {t:"qcm", q:"¿Cuánto duró el plazo para presentar la solicitud?",
   opts:["Dos meses y medio","Cinco meses","Un año"], a:0,
   why:"Del 16 de abril al 30 de junio de 2026."},
  {t:"vf", q:"Hay que llevar al menos cinco años en España para poder solicitarla.", a:"F",
   why:"Se exigen cinco meses de permanencia ininterrumpida."},
  {t:"vf", q:"Un pasaporte caducado sirve para presentar la solicitud.", a:"V",
   why:"El texto lo dice expresamente."},
  {t:"vf", q:"Los menores pagan una tasa más baja que los adultos.", a:"V",
   why:"10,94 euros frente a 38,28."},
  {t:"vf", q:"El proceso se ha ampliado hasta diciembre de 2026.", a:"N",
   why:"El texto no dice nada de una ampliación."},
  {t:"lacune", q:"Completa con la cifra del texto.",
   before:"La Administración tiene un máximo de",
   after:"meses para resolver cada expediente.", a:["tres","3"], bank:["dos","tres","cinco"]},
  {t:"lacune", q:"Completa con una palabra del texto.",
   before:"Hay que carecer de",
   after:"penales en España y en los países donde se haya residido.",
   a:["antecedentes"], bank:["antecedentes","documentos","expedientes","permisos"]},
  {t:"lexique", q:"Relaciona cada palabra del texto con su traducción.",
   pairs:[["en situación irregular","without legal status"],
          ["el plazo","the deadline"],
          ["acreditar","to prove"],
          ["caducado","expired"],
          ["los antecedentes penales","a criminal record"],
          ["la tasa","the fee"]]},
  {t:"court", q:"¿Por qué dice el texto que los requisitos son «deliberadamente sencillos»?",
   a:["Porque un proceso extraordinario que exigiera muchos papeles dejaría fuera justamente a las personas sin papeles a las que quiere alcanzar."],
   keys:["papeles|documentos|requisitos|trámites","fuera|no serviría|alcanzar|difícil|excluir"]},
  {t:"court", q:"Explica la última frase del texto con tus propias palabras.",
   a:["Sin papeles no se puede firmar un contrato legal, y quien trabaja sin contrato cobra menos, corre más riesgos y no puede negarse a lo que le imponen."],
   keys:["contrato|papeles|legal","barato|menos|peligro|riesgo|explotación|abuso"]}
 ],
 stretch:{
  q:"Traduce al inglés el tercer párrafo del texto («Los requisitos son deliberadamente sencillos… 10,94 para los menores.»).",
  model:"The requirements are deliberately simple, because an extraordinary process that demanded too much paperwork would be no use at all. Applicants must show five months of continuous residence in Spain and produce a passport, a travel document or a registration card, even if it has expired. They must have no criminal record in Spain or in the countries where they have lived over the past five years, and must not represent a threat to public order. The fee is 38.28 euros for adults and 10.94 for children."}
},

/* ───────────────────── T4 ───────────────────── */
{
 id:"2026-09-ES-T4", theme:"T4", words:236, minutes:25,
 title:"Diez mil cuerpos todavía en las cunetas",
 standfirst:"El secretario de Estado de Memoria Democrática anunció en París un segundo plan cuatrienal de exhumaciones. El primero sacó más de nueve mil restos.",
 source:{name:"Infobae / EFE", date:"24 de agosto de 2026",
         url:"https://www.infobae.com/america/agencias/2026/08/24/el-nuevo-plan-cuatrienial-de-exhumaciones-debe-agotar-fosas-comunes-explotables-en-espana/"},
 lex:[{code:"U11.4",label:"represión, vigilancia y desaparición forzada"},{code:"U12.6",label:"el legado de la Transición"}],
 text:[
  "Fernando Martínez López, secretario de Estado de Memoria Democrática, anunció el 24 de agosto de 2026, en París, un nuevo plan cuatrienal de exhumaciones de fosas comunes de la Guerra Civil.",
  "El objetivo declarado es ambicioso: agotar, en cuatro años, las fosas que todavía se pueden abrir. Se calcula que quedan unos diez mil cuerpos susceptibles de ser exhumados. El primer plan cuatrienal sacó de la tierra más de nueve mil restos, de los cuales se logró identificar entre el treinta y el treinta y cinco por ciento.",
  "Ese porcentaje explica por qué el trabajo es lento. Una exhumación no termina cuando se abre la fosa: hace falta cotejar el ADN de los restos con el de familiares vivos, y muchas veces los nietos o bisnietos ya no saben a quién buscar, o han muerto antes de que llegara su turno.",
  "Martínez López subrayó que existe consenso entre las distintas organizaciones sobre la necesidad de continuar, salvo, según sus palabras, en las extremas derechas. Situó el trabajo bajo tres palabras: dignidad, justicia y reparación.",
  "Medio siglo después de la muerte del dictador, la cuestión sigue abierta. España es, según los cálculos más citados, el segundo país del mundo por número de desaparecidos sin identificar, y ese hecho pesa sobre cada aniversario de la Transición."
 ],
 glossary:[
  ["una fosa común","a mass grave"],
  ["exhumar","to exhume, to dig up"],
  ["los restos","the remains"],
  ["cotejar","to cross-check, to compare"],
  ["un desaparecido","a person who disappeared (and was never found)"],
  ["cuatrienal","four-yearly"],
  ["la cuneta","the roadside ditch"],
  ["la reparación","redress, making amends"],
  ["agotar","to exhaust, to finish off"]
 ],
 tasks:[
  {t:"qcm", q:"¿Cuántos cuerpos se calcula que quedan por exhumar?",
   opts:["nueve mil","diez mil","treinta y cinco mil"], a:1,
   why:"Nueve mil es lo que sacó el primer plan."},
  {t:"vf", q:"El anuncio se hizo en Madrid.", a:"F",
   why:"Se hizo en París."},
  {t:"vf", q:"Se identificó a todos los restos exhumados en el primer plan.", a:"F",
   why:"Solo se identificó entre el treinta y el treinta y cinco por ciento."},
  {t:"vf", q:"El nuevo plan durará cuatro años.", a:"V"},
  {t:"vf", q:"El plan cuenta con un presupuesto de cien millones de euros.", a:"N",
   why:"El texto no menciona el presupuesto."},
  {t:"lacune", q:"Completa con una palabra del texto.",
   before:"Hace falta cotejar el",
   after:"de los restos con el de familiares vivos.", a:["ADN"], bank:["ADN","nombre","expediente","apellido"]},
  {t:"lacune", q:"Completa con las tres palabras del secretario de Estado.",
   before:"Situó el trabajo bajo tres palabras: dignidad, justicia y",
   after:".", a:["reparación"], bank:["reparación","memoria","verdad","olvido"]},
  {t:"lexique", q:"Relaciona cada palabra del texto con su traducción.",
   pairs:[["una fosa común","a mass grave"],
          ["exhumar","to exhume"],
          ["los restos","the remains"],
          ["cotejar","to cross-check"],
          ["un desaparecido","a person never found"],
          ["la reparación","redress"]]},
  {t:"court", q:"¿Por qué es lento el trabajo de identificación? Da dos razones del texto.",
   a:["Porque hay que cotejar el ADN con el de familiares vivos, y porque muchos descendientes ya no saben a quién buscar o han muerto antes de que llegara su turno."],
   keys:["ADN|genético|cotejar|familiares","no saben|muerto|tiempo|nietos|bisnietos|turno"]},
  {t:"court", q:"Explica por qué el autor dice que este hecho «pesa sobre cada aniversario de la Transición».",
   a:["Porque mientras haya miles de desaparecidos sin identificar, la Transición no puede celebrarse como un acuerdo cerrado: queda una cuenta pendiente."],
   keys:["desaparecido|sin identificar|abierta|pendiente","transición|celebrar|aniversario|pasado"]}
 ],
 stretch:{
  q:"«Abrir las fosas cincuenta años después no sirve de nada: reabre heridas.» Responde a esta afirmación en 100 a 130 palabras.",
  model:"La objeción se oye a menudo y merece una respuesta, no un insulto. Es verdad que exhumar remueve un pasado doloroso y que ninguna familia recupera a nadie. Pero la herida no la abre la exhumación: la abrió el asesinato, y sigue abierta mientras el cuerpo esté en una cuneta sin nombre. Enterrar a los muertos es lo primero que hace cualquier sociedad, y negárselo a unas familias durante cincuenta años no es olvido, es castigo prolongado. Además, identificar unos restos no obliga a juzgar a nadie: la mayoría de los responsables ha muerto. Se trata de que una nieta pueda poner una fecha y un nombre en una lápida, que es bastante menos de lo que se les debe."}
}

]}

];
