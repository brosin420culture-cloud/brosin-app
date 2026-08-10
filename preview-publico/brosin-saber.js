/* ===========================================================
   BROSIN · contenido de SABER+ (reducción de riesgos)
   Antes estaba incrustado en el HTML y solo en español. Aquí está
   como datos, así que añadir un idioma es copiar un bloque.

   Los idiomas que falten caen a inglés, y si tampoco, a español.

   OJO al traducir: esto es contenido de salud. Traduce el sentido,
   no palabra por palabra, y no suavices las advertencias.
   Los teléfonos son servicios ESPAÑOLES (el 112 vale en toda la UE).
   =========================================================== */
(function (root) {
  'use strict';

  var S = {};

  S.es = {
    title: "Saber+", sub: "Reducción de riesgos · consume con cabeza",
    lead: "En Brosin no animamos a consumir, pero si lo haces, mejor con información veraz que con mitos. La única forma de evitar todos los riesgos es no consumir; a partir de ahí, esto te ayuda a reducirlos. <b>No es consejo médico. Solo +18.</b>",
    secs: [
      { h: "Las 10 pautas de menor riesgo", note: "Adaptadas de las guías científicas internacionales (LRCUG).", ol: [
        "La opción más segura es no consumir. Todo consumo tiene algún riesgo.",
        "Cuanto más tarde empieces, mejor. La adolescencia es la etapa de mayor riesgo.",
        "Menor potencia: menos THC y algo de CBD. Evita concentrados muy fuertes y los sintéticos.",
        "Evita el humo y las caladas agresivas; no aguantes el humo. Mejor vaporizador. No lo mezcles con tabaco.",
        "Limita la frecuencia. El uso diario es el que más problemas da. Date descansos.",
        "No conduzcas tras consumir (espera 6 h o más). Cannabis + alcohol multiplica el riesgo.",
        "Abstente si hay antecedentes de psicosis/trastornos mentales, o en embarazo y lactancia.",
        "No acumules conductas de riesgo (empezar pronto + mucho + alta potencia).",
        "Empieza con poco y espera, sobre todo con comestibles.",
        "Cuídate y escúchate. Si el consumo te controla a ti, pide ayuda."] },
      { h: "Si te pasas (\"el amarillo\")",
        p: ["Desagradable pero casi nunca peligroso, y se pasa solo. Túmbate, respira lento, agua con algo de azúcar, aire fresco y tranquilidad. Recuerda: es temporal."],
        alert: "Llama al 112 si hay vómitos que no paran, dolor de pecho, dificultad para respirar, desmayo o angustia que no baja — o si se mezcló con otras sustancias." },
      { h: "Riesgos que conviene conocer", p: [
        "<b>Salud mental:</b> el consumo frecuente, de alta potencia y empezado joven se asocia a más riesgo de psicosis, bipolaridad, depresión y ansiedad. Con antecedentes familiares, sube mucho.",
        "<b>Hiperémesis cannabinoide:</b> en consumo crónico intenso, vómitos cíclicos que se alivian con duchas muy calientes. Solo se cura dejando el cannabis.",
        "<b>Dependencia:</b> existe. Los descansos bajan la tolerancia y son tu mejor herramienta."] },
      { h: "Quién debería abstenerse", ul: [
        "Menores y adolescentes.", "Embarazo y lactancia.",
        "Antecedentes de psicosis o bipolaridad.", "Problemas previos con sustancias o cardiovasculares."] },
      { h: "Calidad y CBD", p: [
        "Desconfía de potencias imposibles y productos sin información. En España, <b>Energy Control</b> ofrece análisis de sustancias (energycontrol.org). El <b>CBD</b> no coloca y es legal, pero no es un medicamento milagroso; consulta con un profesional."] },
      { h: "Cannabis medicinal: cómo está en España", p: [
        "El cannabis medicinal está <b>muy regulado</b> en España: el Real Decreto 903/2025 abre la puerta a fórmulas estandarizadas, pero por ahora el acceso es <b>hospitalario y restringido</b>. <b>No te automediques</b> con cannabis del circuito recreativo \"por salud\".",
        "Si tienes una patología, <b>habla con tu médico</b> o con una <b>clínica especializada</b> (en el mapa, filtro «Medicinal»). El CBD legal es otra cosa: puede ayudar al bienestar, pero no es un medicamento."] },
      { h: "Mezclas e interacciones", ul: [
        "<b>Con alcohol:</b> multiplica el mareo y el malestar. Evítalo.",
        "<b>Con tabaco:</b> suma el daño del tabaco y engancha más. Mejor sin mezclar.",
        "<b>Con medicación:</b> el cannabis y el CBD pueden interactuar con algunos fármacos. Si tomas medicación, consúltalo con tu médico."] },
      { h: "Mitos y realidades", p: [
        "<b>\"No engancha\"</b> → Falso: una parte de quienes lo usan desarrolla dependencia, más cuanto antes y más frecuente sea el consumo.",
        "<b>\"Es natural, así que es inofensivo\"</b> → Natural no es igual a inofensivo. La potencia de hoy es alta y tiene riesgos reales.",
        "<b>\"Aguantar el humo coloca más\"</b> → Falso: no aumenta el efecto y daña más el pulmón.",
        "<b>\"Va bien para la ansiedad\"</b> → A corto plazo a algunos; a largo plazo suele empeorarla."] }
    ],
    help: { h: "¿Necesitas ayuda? Gratis y confidencial", geo: "Servicios de España · el 112 funciona en toda la UE", lines: [
      ["FAD — adicciones", "900 161 515"], ["Info drogas y adicciones", "900 845 040"],
      ["Emergencias", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Información de reducción de riesgos con fines educativos; no sustituye el consejo de un profesional. Brosin promueve el consumo responsable. Solo +18."
  };

  S.en = {
    title: "Know+", sub: "Harm reduction · use your head",
    lead: "Brosin doesn't encourage you to use, but if you do, better with solid facts than with myths. The only way to avoid every risk is not to use at all; from there on, this helps you reduce them. <b>This is not medical advice. 18+ only.</b>",
    secs: [
      { h: "The 10 lower-risk guidelines", note: "Adapted from the international scientific guidelines (LRCUG).", ol: [
        "The safest option is not to use. All use carries some risk.",
        "The later you start, the better. Adolescence is the highest-risk stage.",
        "Lower potency: less THC and some CBD. Avoid very strong concentrates and synthetics.",
        "Avoid smoke and deep, hard drags; don't hold the smoke in. A vaporiser is better. Don't mix it with tobacco.",
        "Limit how often. Daily use causes the most problems. Take breaks.",
        "Don't drive after using (wait 6 hours or more). Cannabis + alcohol multiplies the risk.",
        "Abstain if there's a history of psychosis or mental illness, or during pregnancy and breastfeeding.",
        "Don't stack risky behaviours (starting young + heavy use + high potency).",
        "Start low and wait, especially with edibles.",
        "Look after yourself and listen to yourself. If use is controlling you, ask for help."] },
      { h: "If you overdo it (\"a whitey\")",
        p: ["Unpleasant but almost never dangerous, and it passes on its own. Lie down, breathe slowly, drink water with a little sugar, get fresh air and stay calm. Remember: it's temporary."],
        alert: "Call 112 if there's non-stop vomiting, chest pain, difficulty breathing, fainting or distress that won't ease — or if it was mixed with other substances." },
      { h: "Risks worth knowing about", p: [
        "<b>Mental health:</b> frequent, high-potency use started young is linked to a higher risk of psychosis, bipolar disorder, depression and anxiety. With a family history, that risk rises sharply.",
        "<b>Cannabinoid hyperemesis:</b> with heavy chronic use, cyclical vomiting that eases with very hot showers. The only cure is stopping cannabis.",
        "<b>Dependence:</b> it's real. Taking breaks lowers tolerance and is your best tool."] },
      { h: "Who should abstain", ul: [
        "Minors and adolescents.", "Pregnancy and breastfeeding.",
        "History of psychosis or bipolar disorder.", "Previous substance or cardiovascular problems."] },
      { h: "Quality and CBD", p: [
        "Be sceptical of impossible potency claims and products with no information. In Spain, <b>Energy Control</b> offers substance testing (energycontrol.org). <b>CBD</b> doesn't get you high and is legal, but it's no miracle medicine; talk to a professional."] },
      { h: "Medical cannabis: where Spain stands", p: [
        "Medical cannabis is <b>tightly regulated</b> in Spain: Royal Decree 903/2025 opens the door to standardised formulations, but for now access is <b>hospital-based and restricted</b>. <b>Don't self-medicate</b> with cannabis from the recreational circuit \"for your health\".",
        "If you have a medical condition, <b>talk to your doctor</b> or a <b>specialist clinic</b> (on the map, the «Medical» filter). Legal CBD is a different thing: it may help your wellbeing, but it is not a medicine."] },
      { h: "Mixing and interactions", ul: [
        "<b>With alcohol:</b> multiplies the dizziness and the bad feeling. Avoid it.",
        "<b>With tobacco:</b> adds tobacco's harm and makes it more addictive. Better unmixed.",
        "<b>With medication:</b> cannabis and CBD can interact with some drugs. If you take medication, check with your doctor."] },
      { h: "Myths and facts", p: [
        "<b>\"It's not addictive\"</b> → False: some people who use it develop dependence, more so the earlier and more often they use.",
        "<b>\"It's natural, so it's harmless\"</b> → Natural doesn't mean harmless. Today's potency is high and the risks are real.",
        "<b>\"Holding the smoke in gets you higher\"</b> → False: it doesn't increase the effect and it damages your lungs more.",
        "<b>\"It's good for anxiety\"</b> → Short term for some; long term it usually makes it worse."] }
    ],
    help: { h: "Need help? Free and confidential", geo: "Spanish services · 112 works across the EU", lines: [
      ["FAD — addiction", "900 161 515"], ["Drugs & addiction info", "900 845 040"],
      ["Emergencies", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Harm-reduction information for educational purposes; it does not replace professional advice. Brosin promotes responsible use. 18+ only."
  };

  S.de = {
    title: "Wissen+", sub: "Risikominimierung · konsumiere mit Kopf",
    lead: "Brosin ermutigt niemanden zum Konsum, aber wenn du konsumierst, dann lieber mit belastbaren Fakten als mit Mythen. Der einzige Weg, alle Risiken zu vermeiden, ist nicht zu konsumieren; ab da hilft dir das hier, sie zu verringern. <b>Das ist keine medizinische Beratung. Nur ab 18.</b>",
    secs: [
      { h: "Die 10 Regeln für geringeres Risiko", note: "Angelehnt an die internationalen wissenschaftlichen Leitlinien (LRCUG).", ol: [
        "Am sichersten ist es, nicht zu konsumieren. Jeder Konsum birgt ein Risiko.",
        "Je später du anfängst, desto besser. Die Jugend ist die riskanteste Phase.",
        "Weniger Wirkstoff: weniger THC und etwas CBD. Meide sehr starke Konzentrate und synthetische Cannabinoide.",
        "Vermeide Rauch und tiefe, harte Züge; halte den Rauch nicht an. Ein Vaporizer ist besser. Nicht mit Tabak mischen.",
        "Begrenze die Häufigkeit. Täglicher Konsum macht die meisten Probleme. Leg Pausen ein.",
        "Fahre nicht nach dem Konsum (warte 6 Stunden oder mehr). Cannabis + Alkohol vervielfacht das Risiko.",
        "Verzichte bei Vorgeschichte von Psychosen oder psychischen Erkrankungen, sowie in Schwangerschaft und Stillzeit.",
        "Häufe keine Risikofaktoren an (früh anfangen + viel + hohe Wirkstärke).",
        "Fang niedrig an und warte ab, besonders bei Esswaren.",
        "Pass auf dich auf und hör auf dich. Wenn der Konsum dich kontrolliert, hol dir Hilfe."] },
      { h: "Wenn es zu viel war (\"Weißwerden\")",
        p: ["Unangenehm, aber fast nie gefährlich, und es geht von allein vorbei. Leg dich hin, atme langsam, trink Wasser mit etwas Zucker, frische Luft und Ruhe. Denk dran: es ist vorübergehend."],
        alert: "Ruf 112 an bei anhaltendem Erbrechen, Brustschmerzen, Atemnot, Ohnmacht oder Angst, die nicht nachlässt — oder wenn andere Substanzen im Spiel waren." },
      { h: "Risiken, die man kennen sollte", p: [
        "<b>Psychische Gesundheit:</b> häufiger, hochpotenter und früh begonnener Konsum ist mit einem höheren Risiko für Psychosen, bipolare Störung, Depression und Angst verbunden. Bei familiärer Vorbelastung steigt es deutlich.",
        "<b>Cannabinoid-Hyperemesis:</b> bei starkem chronischem Konsum zyklisches Erbrechen, das sich mit sehr heißen Duschen lindert. Heilbar nur durch Aufhören.",
        "<b>Abhängigkeit:</b> die gibt es. Pausen senken die Toleranz und sind dein bestes Werkzeug."] },
      { h: "Wer verzichten sollte", ul: [
        "Minderjährige und Jugendliche.", "Schwangerschaft und Stillzeit.",
        "Vorgeschichte von Psychosen oder bipolarer Störung.", "Frühere Sucht- oder Herz-Kreislauf-Probleme."] },
      { h: "Qualität und CBD", p: [
        "Sei misstrauisch bei unmöglichen Wirkstoffangaben und Produkten ohne Informationen. In Spanien bietet <b>Energy Control</b> Substanzanalysen an (energycontrol.org). <b>CBD</b> macht nicht high und ist legal, aber es ist kein Wundermittel; sprich mit einer Fachperson."] },
      { h: "Medizinisches Cannabis: Stand in Spanien", p: [
        "Medizinisches Cannabis ist in Spanien <b>streng reguliert</b>: das Königliche Dekret 903/2025 öffnet die Tür für standardisierte Zubereitungen, aber der Zugang läuft bislang <b>über Krankenhäuser und ist eingeschränkt</b>. <b>Behandle dich nicht selbst</b> mit Cannabis aus dem Freizeitmarkt \"für die Gesundheit\".",
        "Wenn du eine Erkrankung hast, <b>sprich mit deiner Ärztin oder deinem Arzt</b> oder mit einer <b>Spezialklinik</b> (auf der Karte, Filter «Medizinisch»). Legales CBD ist etwas anderes: es kann dem Wohlbefinden helfen, ist aber kein Arzneimittel."] },
      { h: "Mischkonsum und Wechselwirkungen", ul: [
        "<b>Mit Alkohol:</b> verstärkt Schwindel und Unwohlsein. Lass es.",
        "<b>Mit Tabak:</b> addiert den Schaden des Tabaks und macht abhängiger. Besser ohne.",
        "<b>Mit Medikamenten:</b> Cannabis und CBD können mit manchen Arzneimitteln wechselwirken. Wenn du Medikamente nimmst, frag deine Ärztin oder deinen Arzt."] },
      { h: "Mythen und Fakten", p: [
        "<b>\"Macht nicht abhängig\"</b> → Falsch: ein Teil der Konsumierenden entwickelt eine Abhängigkeit, umso eher je früher und häufiger konsumiert wird.",
        "<b>\"Es ist natürlich, also harmlos\"</b> → Natürlich heißt nicht harmlos. Die heutige Wirkstärke ist hoch und die Risiken sind real.",
        "<b>\"Rauch anhalten macht higher\"</b> → Falsch: es verstärkt die Wirkung nicht und schadet der Lunge mehr.",
        "<b>\"Hilft gegen Angst\"</b> → Kurzfristig bei manchen; langfristig verschlimmert es sie meist."] }
    ],
    help: { h: "Brauchst du Hilfe? Kostenlos und vertraulich", geo: "Spanische Dienste · die 112 gilt in der ganzen EU", lines: [
      ["FAD — Sucht", "900 161 515"], ["Info Drogen & Sucht", "900 845 040"],
      ["Notruf", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informationen zur Risikominimierung zu Bildungszwecken; sie ersetzen keine fachliche Beratung. Brosin steht für verantwortungsvollen Konsum. Nur ab 18."
  };

  S.fr = {
    title: "Savoir+", sub: "Réduction des risques · consomme avec la tête",
    lead: "Brosin n'encourage pas à consommer, mais si tu le fais, mieux vaut de vraies informations que des mythes. La seule façon d'éviter tous les risques est de ne pas consommer ; à partir de là, ceci t'aide à les réduire. <b>Ce n'est pas un avis médical. Réservé aux +18.</b>",
    secs: [
      { h: "Les 10 règles pour réduire les risques", note: "Adaptées des recommandations scientifiques internationales (LRCUG).", ol: [
        "L'option la plus sûre est de ne pas consommer. Toute consommation comporte un risque.",
        "Plus tu commences tard, mieux c'est. L'adolescence est la période la plus à risque.",
        "Moins de puissance : moins de THC et un peu de CBD. Évite les concentrés très forts et les synthétiques.",
        "Évite la fumée et les taffes agressives ; ne retiens pas la fumée. Le vaporisateur est préférable. Ne mélange pas avec du tabac.",
        "Limite la fréquence. L'usage quotidien est celui qui pose le plus de problèmes. Fais des pauses.",
        "Ne conduis pas après avoir consommé (attends 6 h ou plus). Cannabis + alcool multiplie le risque.",
        "Abstiens-toi en cas d'antécédents de psychose ou de troubles mentaux, ainsi qu'en grossesse et allaitement.",
        "N'accumule pas les conduites à risque (commencer tôt + beaucoup + forte puissance).",
        "Commence doucement et attends, surtout avec les comestibles.",
        "Prends soin de toi et écoute-toi. Si la consommation te contrôle, demande de l'aide."] },
      { h: "Si tu abuses (le « bad »)",
        p: ["Désagréable mais presque jamais dangereux, et ça passe tout seul. Allonge-toi, respire lentement, bois de l'eau légèrement sucrée, prends l'air et reste calme. Rappelle-toi : c'est temporaire."],
        alert: "Appelle le 112 en cas de vomissements qui ne s'arrêtent pas, de douleur à la poitrine, de difficulté à respirer, d'évanouissement ou d'angoisse qui ne retombe pas — ou si d'autres substances ont été mélangées." },
      { h: "Les risques à connaître", p: [
        "<b>Santé mentale :</b> une consommation fréquente, très dosée et commencée jeune est associée à un risque accru de psychose, de bipolarité, de dépression et d'anxiété. Avec des antécédents familiaux, ce risque monte beaucoup.",
        "<b>Hyperémèse cannabinoïde :</b> en consommation chronique intense, des vomissements cycliques soulagés par des douches très chaudes. Le seul remède est d'arrêter le cannabis.",
        "<b>Dépendance :</b> elle existe. Les pauses font baisser la tolérance et sont ton meilleur outil."] },
      { h: "Qui devrait s'abstenir", ul: [
        "Mineurs et adolescents.", "Grossesse et allaitement.",
        "Antécédents de psychose ou de bipolarité.", "Problèmes antérieurs avec les substances ou cardiovasculaires."] },
      { h: "Qualité et CBD", p: [
        "Méfie-toi des puissances impossibles et des produits sans information. En Espagne, <b>Energy Control</b> propose des analyses de substances (energycontrol.org). Le <b>CBD</b> ne fait pas planer et est légal, mais ce n'est pas un remède miracle ; parles-en à un professionnel."] },
      { h: "Cannabis médical : où en est l'Espagne", p: [
        "Le cannabis médical est <b>très encadré</b> en Espagne : le Décret royal 903/2025 ouvre la porte à des formulations standardisées, mais pour l'instant l'accès est <b>hospitalier et restreint</b>. <b>Ne t'automédique pas</b> avec du cannabis du circuit récréatif « pour la santé ».",
        "Si tu as une pathologie, <b>parles-en à ton médecin</b> ou à une <b>clinique spécialisée</b> (sur la carte, filtre « Médicinal »). Le CBD légal est autre chose : il peut aider au bien-être, mais ce n'est pas un médicament."] },
      { h: "Mélanges et interactions", ul: [
        "<b>Avec l'alcool :</b> multiplie les vertiges et le malaise. Évite.",
        "<b>Avec le tabac :</b> ajoute les dégâts du tabac et rend plus accro. Mieux vaut sans.",
        "<b>Avec des médicaments :</b> le cannabis et le CBD peuvent interagir avec certains traitements. Si tu prends des médicaments, demande à ton médecin."] },
      { h: "Mythes et réalités", p: [
        "<b>« Ça ne rend pas accro »</b> → Faux : une partie des usagers développe une dépendance, d'autant plus qu'on commence tôt et qu'on consomme souvent.",
        "<b>« C'est naturel, donc inoffensif »</b> → Naturel ne veut pas dire inoffensif. La puissance actuelle est élevée et les risques sont réels.",
        "<b>« Retenir la fumée fait planer plus »</b> → Faux : ça n'augmente pas l'effet et ça abîme davantage les poumons.",
        "<b>« C'est bon contre l'anxiété »</b> → À court terme pour certains ; à long terme ça l'aggrave généralement."] }
    ],
    help: { h: "Besoin d'aide ? Gratuit et confidentiel", geo: "Services espagnols · le 112 fonctionne dans toute l'UE", lines: [
      ["FAD — addictions", "900 161 515"], ["Info drogues et addictions", "900 845 040"],
      ["Urgences", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informations de réduction des risques à but éducatif ; elles ne remplacent pas l'avis d'un professionnel. Brosin promeut une consommation responsable. Réservé aux +18."
  };

  S.nl = {
    title: "Weten+", sub: "Schadebeperking · gebruik je hoofd",
    lead: "Brosin moedigt niemand aan om te gebruiken, maar als je het doet, dan liever met echte informatie dan met mythes. De enige manier om alle risico's te vermijden is niet gebruiken; daarna helpt dit je ze te verkleinen. <b>Dit is geen medisch advies. Alleen 18+.</b>",
    secs: [
      { h: "De 10 richtlijnen voor minder risico", note: "Gebaseerd op de internationale wetenschappelijke richtlijnen (LRCUG).", ol: [
        "De veiligste keuze is niet gebruiken. Elk gebruik brengt risico met zich mee.",
        "Hoe later je begint, hoe beter. De puberteit is de risicovolste periode.",
        "Lagere sterkte: minder THC en wat CBD. Vermijd zeer sterke concentraten en synthetische varianten.",
        "Vermijd rook en diepe, harde halen; hou de rook niet vast. Een verdamper is beter. Meng het niet met tabak.",
        "Beperk hoe vaak. Dagelijks gebruik geeft de meeste problemen. Neem pauzes.",
        "Rijd niet na gebruik (wacht 6 uur of langer). Cannabis + alcohol vermenigvuldigt het risico.",
        "Gebruik niet bij een voorgeschiedenis van psychose of psychische aandoeningen, en niet tijdens zwangerschap en borstvoeding.",
        "Stapel geen risicofactoren op (jong beginnen + veel + hoge sterkte).",
        "Begin laag en wacht af, zeker bij eetbare producten.",
        "Zorg voor jezelf en luister naar jezelf. Als het gebruik jou controleert, vraag hulp."] },
      { h: "Als je te ver gaat (een \"whitey\")",
        p: ["Onaangenaam maar bijna nooit gevaarlijk, en het gaat vanzelf over. Ga liggen, adem langzaam, drink water met wat suiker, zoek frisse lucht en blijf rustig. Onthoud: het is tijdelijk."],
        alert: "Bel 112 bij braken dat niet stopt, pijn op de borst, moeite met ademen, flauwvallen of angst die niet zakt — of als het met andere middelen is gemengd." },
      { h: "Risico's die je moet kennen", p: [
        "<b>Geestelijke gezondheid:</b> frequent gebruik van hoge sterkte, jong begonnen, hangt samen met meer kans op psychose, bipolaire stoornis, depressie en angst. Met een familiegeschiedenis stijgt dat sterk.",
        "<b>Cannabinoïde hyperemesis:</b> bij zwaar chronisch gebruik, cyclisch braken dat verlicht wordt door zeer hete douches. Het gaat alleen over door te stoppen.",
        "<b>Afhankelijkheid:</b> die bestaat. Pauzes verlagen de tolerantie en zijn je beste middel."] },
      { h: "Wie beter niet gebruikt", ul: [
        "Minderjarigen en jongeren.", "Zwangerschap en borstvoeding.",
        "Voorgeschiedenis van psychose of bipolaire stoornis.", "Eerdere problemen met middelen of hart en vaten."] },
      { h: "Kwaliteit en CBD", p: [
        "Wees wantrouwig bij onmogelijke sterktes en producten zonder informatie. In Spanje biedt <b>Energy Control</b> middelenanalyse aan (energycontrol.org). <b>CBD</b> maakt niet high en is legaal, maar het is geen wondermiddel; overleg met een professional."] },
      { h: "Medicinale cannabis: hoe het in Spanje staat", p: [
        "Medicinale cannabis is in Spanje <b>streng gereguleerd</b>: Koninklijk Besluit 903/2025 opent de deur naar gestandaardiseerde bereidingen, maar voorlopig loopt de toegang <b>via het ziekenhuis en is die beperkt</b>. <b>Doe niet aan zelfmedicatie</b> met cannabis uit het recreatieve circuit \"voor je gezondheid\".",
        "Heb je een aandoening, <b>praat dan met je arts</b> of met een <b>gespecialiseerde kliniek</b> (op de kaart, filter «Medicinaal»). Legale CBD is iets anders: het kan het welzijn helpen, maar het is geen geneesmiddel."] },
      { h: "Mengen en wisselwerkingen", ul: [
        "<b>Met alcohol:</b> vermenigvuldigt de duizeligheid en het nare gevoel. Doe het niet.",
        "<b>Met tabak:</b> telt de schade van tabak erbij op en maakt verslavender. Beter zonder.",
        "<b>Met medicijnen:</b> cannabis en CBD kunnen met sommige medicijnen op elkaar inwerken. Gebruik je medicatie, overleg dan met je arts."] },
      { h: "Mythes en feiten", p: [
        "<b>\"Het is niet verslavend\"</b> → Onwaar: een deel van de gebruikers wordt afhankelijk, sterker naarmate men jonger begint en vaker gebruikt.",
        "<b>\"Het is natuurlijk, dus onschadelijk\"</b> → Natuurlijk is niet hetzelfde als onschadelijk. De sterkte van nu is hoog en de risico's zijn echt.",
        "<b>\"Rook vasthouden maakt je high-er\"</b> → Onwaar: het versterkt het effect niet en beschadigt je longen meer.",
        "<b>\"Het helpt tegen angst\"</b> → Op korte termijn bij sommigen; op lange termijn maakt het het meestal erger."] }
    ],
    help: { h: "Hulp nodig? Gratis en vertrouwelijk", geo: "Spaanse diensten · 112 werkt in de hele EU", lines: [
      ["FAD — verslaving", "900 161 515"], ["Info drugs & verslaving", "900 845 040"],
      ["Noodgevallen", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informatie over schadebeperking met educatief doel; het vervangt geen professioneel advies. Brosin staat voor verantwoord gebruik. Alleen 18+."
  };

  S.it = {
    title: "Sapere+", sub: "Riduzione del danno · consuma con la testa",
    lead: "Brosin non incoraggia a consumare, ma se lo fai, meglio con informazioni vere che con miti. L'unico modo per evitare tutti i rischi è non consumare; da lì in poi, questo ti aiuta a ridurli. <b>Non è un consiglio medico. Solo +18.</b>",
    secs: [
      { h: "Le 10 regole per ridurre il rischio", note: "Adattate dalle linee guida scientifiche internazionali (LRCUG).", ol: [
        "L'opzione più sicura è non consumare. Ogni consumo comporta un rischio.",
        "Più tardi inizi, meglio è. L'adolescenza è la fase a rischio più alto.",
        "Meno potenza: meno THC e un po' di CBD. Evita i concentrati molto forti e i sintetici.",
        "Evita il fumo e i tiri aggressivi; non trattenere il fumo. Meglio il vaporizzatore. Non mischiarlo col tabacco.",
        "Limita la frequenza. L'uso quotidiano è quello che dà più problemi. Prenditi delle pause.",
        "Non guidare dopo aver consumato (aspetta 6 ore o più). Cannabis + alcol moltiplica il rischio.",
        "Astieniti se c'è una storia di psicosi o disturbi mentali, e in gravidanza e allattamento.",
        "Non sommare comportamenti a rischio (iniziare presto + molto + alta potenza).",
        "Inizia con poco e aspetta, soprattutto con i commestibili.",
        "Prenditi cura di te e ascoltati. Se il consumo controlla te, chiedi aiuto."] },
      { h: "Se esageri (il \"bad\")",
        p: ["Spiacevole ma quasi mai pericoloso, e passa da solo. Sdraiati, respira lentamente, bevi acqua con un po' di zucchero, prendi aria fresca e stai tranquillo. Ricorda: è temporaneo."],
        alert: "Chiama il 112 se ci sono vomito che non si ferma, dolore al petto, difficoltà a respirare, svenimento o angoscia che non passa — o se è stato mischiato con altre sostanze." },
      { h: "Rischi da conoscere", p: [
        "<b>Salute mentale:</b> il consumo frequente, ad alta potenza e iniziato da giovani è associato a un rischio maggiore di psicosi, disturbo bipolare, depressione e ansia. Con precedenti familiari sale parecchio.",
        "<b>Iperemesi cannabinoide:</b> nel consumo cronico intenso, vomito ciclico che si allevia con docce molto calde. Si risolve solo smettendo.",
        "<b>Dipendenza:</b> esiste. Le pause abbassano la tolleranza e sono il tuo strumento migliore."] },
      { h: "Chi dovrebbe astenersi", ul: [
        "Minori e adolescenti.", "Gravidanza e allattamento.",
        "Precedenti di psicosi o disturbo bipolare.", "Problemi pregressi con sostanze o cardiovascolari."] },
      { h: "Qualità e CBD", p: [
        "Diffida di potenze impossibili e di prodotti senza informazioni. In Spagna, <b>Energy Control</b> offre analisi delle sostanze (energycontrol.org). Il <b>CBD</b> non sballa ed è legale, ma non è un medicinale miracoloso; parlane con un professionista."] },
      { h: "Cannabis medica: a che punto è la Spagna", p: [
        "La cannabis medica è <b>molto regolamentata</b> in Spagna: il Regio Decreto 903/2025 apre la porta a preparazioni standardizzate, ma per ora l'accesso è <b>ospedaliero e limitato</b>. <b>Non fare autoterapia</b> con cannabis del circuito ricreativo \"per la salute\".",
        "Se hai una patologia, <b>parla col tuo medico</b> o con una <b>clinica specializzata</b> (sulla mappa, filtro «Medicinale»). Il CBD legale è un'altra cosa: può aiutare il benessere, ma non è un farmaco."] },
      { h: "Miscele e interazioni", ul: [
        "<b>Con l'alcol:</b> moltiplica capogiri e malessere. Evitalo.",
        "<b>Con il tabacco:</b> somma il danno del tabacco e crea più dipendenza. Meglio senza.",
        "<b>Con i farmaci:</b> cannabis e CBD possono interagire con alcuni medicinali. Se prendi farmaci, chiedi al tuo medico."] },
      { h: "Miti e realtà", p: [
        "<b>\"Non dà dipendenza\"</b> → Falso: una parte di chi la usa sviluppa dipendenza, tanto più quanto prima si inizia e più spesso si consuma.",
        "<b>\"È naturale, quindi innocua\"</b> → Naturale non vuol dire innocuo. La potenza di oggi è alta e i rischi sono reali.",
        "<b>\"Trattenere il fumo sballa di più\"</b> → Falso: non aumenta l'effetto e danneggia di più i polmoni.",
        "<b>\"Fa bene per l'ansia\"</b> → Nel breve termine per alcuni; nel lungo termine di solito la peggiora."] }
    ],
    help: { h: "Ti serve aiuto? Gratuito e riservato", geo: "Servizi spagnoli · il 112 vale in tutta l'UE", lines: [
      ["FAD — dipendenze", "900 161 515"], ["Info droghe e dipendenze", "900 845 040"],
      ["Emergenze", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informazioni di riduzione del danno a scopo educativo; non sostituiscono il parere di un professionista. Brosin promuove il consumo responsabile. Solo +18."
  };


  S.pt = {
    title: "Saber+", sub: "Redução de riscos · consome com cabeça",
    lead: "A Brosin não incentiva ninguém a consumir, mas se o fizeres, mais vale informação verdadeira do que mitos. A única forma de evitar todos os riscos é não consumir; a partir daí, isto ajuda-te a reduzi-los. <b>Isto não é aconselhamento médico. Só +18.</b>",
    secs: [
      { h: "As 10 regras de menor risco", note: "Adaptadas das orientações científicas internacionais (LRCUG).", ol: [
        "A opção mais segura é não consumir. Todo o consumo tem algum risco.",
        "Quanto mais tarde começares, melhor. A adolescência é a fase de maior risco.",
        "Menos potência: menos THC e algum CBD. Evita concentrados muito fortes e sintéticos.",
        "Evita o fumo e as passas agressivas; não segures o fumo. Melhor vaporizador. Não misturar com tabaco.",
        "Limita a frequência. O uso diário é o que dá mais problemas. Faz pausas.",
        "Não conduzas depois de consumir (espera 6 h ou mais). Canábis + álcool multiplica o risco.",
        "Abstém-te se houver antecedentes de psicose ou perturbações mentais, e na gravidez e amamentação.",
        "Não acumules comportamentos de risco (começar cedo + muito + alta potência).",
        "Começa com pouco e espera, sobretudo com comestíveis.",
        "Cuida de ti e ouve-te. Se o consumo te controla a ti, pede ajuda."] },
      { h: "Se exageras (a \"branca\")",
        p: ["Desagradável mas quase nunca perigoso, e passa sozinho. Deita-te, respira devagar, bebe água com um pouco de açúcar, apanha ar fresco e mantém a calma. Lembra-te: é temporário."],
        alert: "Liga 112 se houver vómitos que não param, dor no peito, dificuldade em respirar, desmaio ou angústia que não baixa — ou se foi misturado com outras substâncias." },
      { h: "Riscos que convém conhecer", p: [
        "<b>Saúde mental:</b> o consumo frequente, de alta potência e começado jovem associa-se a mais risco de psicose, bipolaridade, depressão e ansiedade. Com antecedentes familiares, sobe muito.",
        "<b>Hiperémese canabinoide:</b> em consumo crónico intenso, vómitos cíclicos que aliviam com duches muito quentes. Só se cura deixando a canábis.",
        "<b>Dependência:</b> existe. As pausas baixam a tolerância e são a tua melhor ferramenta."] },
      { h: "Quem se deve abster", ul: [
        "Menores e adolescentes.", "Gravidez e amamentação.",
        "Antecedentes de psicose ou bipolaridade.", "Problemas anteriores com substâncias ou cardiovasculares."] },
      { h: "Qualidade e CBD", p: [
        "Desconfia de potências impossíveis e de produtos sem informação. Em Espanha, a <b>Energy Control</b> faz análise de substâncias (energycontrol.org). O <b>CBD</b> não te pedra e é legal, mas não é um medicamento milagroso; fala com um profissional."] },
      { h: "Canábis medicinal: como está em Espanha", p: [
        "A canábis medicinal está <b>muito regulada</b> em Espanha: o Real Decreto 903/2025 abre a porta a fórmulas padronizadas, mas por agora o acesso é <b>hospitalar e restrito</b>. <b>Não te automediques</b> com canábis do circuito recreativo \"pela saúde\".",
        "Se tens uma patologia, <b>fala com o teu médico</b> ou com uma <b>clínica especializada</b> (no mapa, filtro «Medicinal»). O CBD legal é outra coisa: pode ajudar no bem-estar, mas não é um medicamento."] },
      { h: "Misturas e interações", ul: [
        "<b>Com álcool:</b> multiplica a tontura e o mal-estar. Evita.",
        "<b>Com tabaco:</b> soma o dano do tabaco e vicia mais. Melhor sem misturar.",
        "<b>Com medicação:</b> a canábis e o CBD podem interagir com alguns fármacos. Se tomas medicação, fala com o teu médico."] },
      { h: "Mitos e realidades", p: [
        "<b>\"Não vicia\"</b> → Falso: uma parte de quem usa desenvolve dependência, tanto mais quanto mais cedo e mais frequente for o consumo.",
        "<b>\"É natural, por isso é inofensivo\"</b> → Natural não é o mesmo que inofensivo. A potência de hoje é alta e tem riscos reais.",
        "<b>\"Segurar o fumo pedra mais\"</b> → Falso: não aumenta o efeito e danifica mais o pulmão.",
        "<b>\"Faz bem para a ansiedade\"</b> → A curto prazo a alguns; a longo prazo costuma piorá-la."] }
    ],
    help: { h: "Precisas de ajuda? Gratuito e confidencial", geo: "Serviços de Espanha · o 112 funciona em toda a UE", lines: [
      ["FAD — dependências", "900 161 515"], ["Info drogas e dependências", "900 845 040"],
      ["Emergências", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informação de redução de riscos com fins educativos; não substitui o conselho de um profissional. A Brosin promove o consumo responsável. Só +18."
  };

  S.pl = {
    title: "Wiedza+", sub: "Ograniczanie ryzyka · używaj głowy",
    lead: "Brosin nie zachęca do używania, ale jeśli to robisz, lepiej opierać się na rzetelnych informacjach niż na mitach. Jedynym sposobem uniknięcia wszystkich zagrożeń jest nieużywanie; poza tym — to pomoże ci je zmniejszyć. <b>To nie jest porada medyczna. Tylko 18+.</b>",
    secs: [
      { h: "10 zasad mniejszego ryzyka", note: "Na podstawie międzynarodowych wytycznych naukowych (LRCUG).", ol: [
        "Najbezpieczniej jest nie używać. Każde użycie niesie jakieś ryzyko.",
        "Im później zaczniesz, tym lepiej. Okres dojrzewania jest najbardziej ryzykowny.",
        "Mniejsza moc: mniej THC i trochę CBD. Unikaj bardzo mocnych koncentratów i syntetyków.",
        "Unikaj dymu i mocnych zaciągnięć; nie zatrzymuj dymu. Lepszy waporyzator. Nie mieszaj z tytoniem.",
        "Ogranicz częstotliwość. Codzienne używanie sprawia najwięcej problemów. Rób przerwy.",
        "Nie prowadź po użyciu (odczekaj 6 godzin lub więcej). Konopie + alkohol zwielokrotniają ryzyko.",
        "Powstrzymaj się przy historii psychozy lub zaburzeń psychicznych, a także w ciąży i podczas karmienia.",
        "Nie kumuluj czynników ryzyka (wczesny start + dużo + wysoka moc).",
        "Zacznij od małej dawki i poczekaj, zwłaszcza przy jedzeniu.",
        "Dbaj o siebie i słuchaj siebie. Jeśli używanie kontroluje ciebie, poproś o pomoc."] },
      { h: "Jeśli przesadzisz (\"zjazd\")",
        p: ["Nieprzyjemne, ale prawie nigdy niebezpieczne, i mija samo. Połóż się, oddychaj powoli, wypij wodę z odrobiną cukru, zaczerpnij świeżego powietrza i zachowaj spokój. Pamiętaj: to chwilowe."],
        alert: "Zadzwoń pod 112, jeśli wymioty nie ustają, boli w klatce piersiowej, trudno oddychać, ktoś zemdlał albo lęk nie mija — lub jeśli doszło do zmieszania z innymi substancjami." },
      { h: "Ryzyka, które warto znać", p: [
        "<b>Zdrowie psychiczne:</b> częste używanie mocnych produktów, rozpoczęte w młodym wieku, wiąże się z większym ryzykiem psychozy, choroby dwubiegunowej, depresji i lęku. Przy obciążeniu rodzinnym ryzyko mocno rośnie.",
        "<b>Zespół hiperemezy kannabinoidowej:</b> przy ciężkim przewlekłym używaniu — cykliczne wymioty, które łagodzi bardzo gorący prysznic. Jedynym lekarstwem jest odstawienie.",
        "<b>Uzależnienie:</b> istnieje. Przerwy obniżają tolerancję i są twoim najlepszym narzędziem."] },
      { h: "Kto powinien się powstrzymać", ul: [
        "Nieletni i młodzież.", "Ciąża i karmienie piersią.",
        "Historia psychozy lub choroby dwubiegunowej.", "Wcześniejsze problemy z substancjami lub układem krążenia."] },
      { h: "Jakość i CBD", p: [
        "Nie ufaj niemożliwym deklaracjom mocy ani produktom bez informacji. W Hiszpanii <b>Energy Control</b> oferuje badania substancji (energycontrol.org). <b>CBD</b> nie odurza i jest legalne, ale to nie cudowny lek; skonsultuj się ze specjalistą."] },
      { h: "Konopie medyczne: jak jest w Hiszpanii", p: [
        "Konopie medyczne są w Hiszpanii <b>ściśle regulowane</b>: dekret królewski 903/2025 otwiera drogę do preparatów standaryzowanych, ale na razie dostęp jest <b>szpitalny i ograniczony</b>. <b>Nie lecz się sam</b> konopiami z obiegu rekreacyjnego \"dla zdrowia\".",
        "Jeśli masz schorzenie, <b>porozmawiaj z lekarzem</b> albo z <b>wyspecjalizowaną kliniką</b> (na mapie filtr «Medyczny»). Legalne CBD to co innego: może wspierać dobre samopoczucie, ale nie jest lekiem."] },
      { h: "Mieszanie i interakcje", ul: [
        "<b>Z alkoholem:</b> zwielokrotnia zawroty głowy i złe samopoczucie. Unikaj.",
        "<b>Z tytoniem:</b> dokłada szkody tytoniu i mocniej uzależnia. Lepiej bez.",
        "<b>Z lekami:</b> konopie i CBD mogą wchodzić w interakcje z niektórymi lekami. Jeśli bierzesz leki, skonsultuj to z lekarzem."] },
      { h: "Mity i fakty", p: [
        "<b>\"Nie uzależnia\"</b> → Nieprawda: część używających uzależnia się, tym bardziej im wcześniej i częściej używa.",
        "<b>\"Jest naturalne, więc nieszkodliwe\"</b> → Naturalne nie znaczy nieszkodliwe. Dzisiejsza moc jest wysoka, a ryzyko realne.",
        "<b>\"Zatrzymywanie dymu daje mocniej\"</b> → Nieprawda: nie zwiększa efektu, a bardziej niszczy płuca.",
        "<b>\"Pomaga na lęk\"</b> → Krótkoterminowo niektórym; długoterminowo zwykle go nasila."] }
    ],
    help: { h: "Potrzebujesz pomocy? Bezpłatnie i poufnie", geo: "Służby hiszpańskie · 112 działa w całej UE", lines: [
      ["FAD — uzależnienia", "900 161 515"], ["Info narkotyki i uzależnienia", "900 845 040"],
      ["Alarmowy", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Informacje o ograniczaniu ryzyka w celach edukacyjnych; nie zastępują porady specjalisty. Brosin promuje odpowiedzialne używanie. Tylko 18+."
  };

  S.ru = {
    title: "Знания+", sub: "Снижение вреда · думай головой",
    lead: "Brosin никого не побуждает употреблять, но если ты это делаешь, лучше опираться на достоверные факты, чем на мифы. Единственный способ избежать всех рисков — не употреблять; а дальше это поможет их снизить. <b>Это не медицинская консультация. Только 18+.</b>",
    secs: [
      { h: "10 правил меньшего риска", note: "По международным научным рекомендациям (LRCUG).", ol: [
        "Самый безопасный вариант — не употреблять. Любое употребление несёт риск.",
        "Чем позже начнёшь, тем лучше. Подростковый возраст — самый рискованный период.",
        "Меньше крепость: меньше ТГК и немного КБД. Избегай очень сильных концентратов и синтетики.",
        "Избегай дыма и глубоких затяжек; не задерживай дым. Лучше вапорайзер. Не смешивай с табаком.",
        "Ограничь частоту. Ежедневное употребление даёт больше всего проблем. Делай перерывы.",
        "Не садись за руль после употребления (подожди 6 часов или больше). Каннабис + алкоголь умножают риск.",
        "Воздержись при психозах или психических расстройствах в анамнезе, а также при беременности и кормлении.",
        "Не накапливай факторы риска (раннее начало + много + высокая крепость).",
        "Начинай с малого и жди, особенно со съедобным.",
        "Береги себя и прислушивайся к себе. Если употребление контролирует тебя — попроси о помощи."] },
      { h: "Если перебрал (\"побелел\")",
        p: ["Неприятно, но почти никогда не опасно, и проходит само. Ляг, дыши медленно, выпей воды с сахаром, свежий воздух и спокойствие. Помни: это временно."],
        alert: "Звони 112, если рвота не прекращается, болит грудь, трудно дышать, обморок или тревога, которая не спадает — или если это смешали с другими веществами." },
      { h: "Риски, о которых стоит знать", p: [
        "<b>Психическое здоровье:</b> частое употребление сильных продуктов, начатое в юности, связано с более высоким риском психоза, биполярного расстройства, депрессии и тревоги. При наследственной отягощённости риск заметно растёт.",
        "<b>Каннабиноидная гиперемезия:</b> при тяжёлом хроническом употреблении — циклическая рвота, которая облегчается очень горячим душем. Лечится только отказом.",
        "<b>Зависимость:</b> она существует. Перерывы снижают толерантность и это твой лучший инструмент."] },
      { h: "Кому стоит воздержаться", ul: [
        "Несовершеннолетним и подросткам.", "При беременности и кормлении грудью.",
        "При психозах или биполярном расстройстве в анамнезе.", "При прежних проблемах с веществами или сердечно-сосудистой системой."] },
      { h: "Качество и КБД", p: [
        "Не верь невозможным заявлениям о крепости и продуктам без информации. В Испании <b>Energy Control</b> делает анализ веществ (energycontrol.org). <b>КБД</b> не даёт кайфа и легален, но это не чудо-лекарство; посоветуйся со специалистом."] },
      { h: "Медицинский каннабис: как обстоит в Испании", p: [
        "Медицинский каннабис в Испании <b>строго регулируется</b>: Королевский декрет 903/2025 открывает путь стандартизированным препаратам, но пока доступ <b>больничный и ограниченный</b>. <b>Не занимайся самолечением</b> каннабисом с рекреационного рынка \"для здоровья\".",
        "Если у тебя есть заболевание, <b>поговори со своим врачом</b> или со <b>специализированной клиникой</b> (на карте — фильтр «Медицинский»). Легальный КБД — другое дело: он может помочь самочувствию, но это не лекарство."] },
      { h: "Смешивание и взаимодействия", ul: [
        "<b>С алкоголем:</b> умножает головокружение и плохое самочувствие. Не стоит.",
        "<b>С табаком:</b> добавляет вред табака и сильнее затягивает. Лучше без.",
        "<b>С лекарствами:</b> каннабис и КБД могут взаимодействовать с некоторыми препаратами. Если принимаешь лекарства, спроси врача."] },
      { h: "Мифы и факты", p: [
        "<b>\"Не вызывает зависимости\"</b> → Неправда: у части употребляющих развивается зависимость, тем чаще, чем раньше и чаще они употребляют.",
        "<b>\"Это натуральное, значит безвредное\"</b> → Натуральное не значит безвредное. Нынешняя крепость высока, и риски реальны.",
        "<b>\"Задерживать дым — сильнее накрывает\"</b> → Неправда: эффект не усиливается, а лёгким вредит больше.",
        "<b>\"Помогает от тревоги\"</b> → Кратковременно некоторым; в долгосрочной перспективе обычно усиливает её."] }
    ],
    help: { h: "Нужна помощь? Бесплатно и конфиденциально", geo: "Испанские службы · 112 работает по всему ЕС", lines: [
      ["FAD — зависимости", "900 161 515"], ["Инфо о наркотиках и зависимостях", "900 845 040"],
      ["Экстренные службы", "112"], ["Energy Control", "energycontrol.org"]] },
    disc: "Информация о снижении вреда в образовательных целях; она не заменяет консультацию специалиста. Brosin выступает за ответственное употребление. Только 18+."
  };

  /* Idioma pedido → inglés → español. Para un griego, el inglés es mejor
     red de seguridad que el castellano. */
  function get(lang) { return S[lang] || S.en || S.es; }

  root.BrosinSaber = { data: S, get: get, langs: function () { return Object.keys(S); } };

})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = globalThis.BrosinSaber;
