/* ===========================================================
   BROSIN · idiomas de la APP DEL MAPA
   Complementa a brosin-i18n.js (que cubre la landing y el formulario).
   Usa la misma clave 'brosin_lang', así que si alguien elige alemán en
   el formulario, la app también le habla en alemán.

   Aparte de la interfaz, genera la descripción de los locales que no
   tienen texto propio: "Grow shop en Elche" → "Grow shop in Elche".
   No inventa datos: solo dice el tipo y la ciudad, que ya se saben.
   =========================================================== */
(function (root) {
  'use strict';

  var D = {

  es:{en_tramite:"más en proceso de alta",ag_h:"¿Eres mayor de edad?",ag_p:"Guía informativa sobre clubes sociales privados, grow shops y tiendas de CBD. Aquí <b>no se vende cannabis</b>. Solo para mayores de 18 años.",ag_si:"Sí, soy mayor de 18",ag_no:"No, salir",ag_pie:"Consume con responsabilidad · Brosin promueve la reducción de riesgos",pie_legal:"Guía informativa · aquí no se vende cannabis · solo +18 · consume con responsabilidad",pie_lema:"una colmena, muchos panales",nav_nosotros:"Sobre nosotros",nav_empresarios:"Para empresarios",nav_legal:"Aviso legal",datos_verif:"datos públicos, en verificación",toda_espana:"Toda España",toda_europa:"Toda Europa",tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Tienda CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Empresa",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} en {c}",buscar:"Buscar local, ciudad, provincia…",todos:"Todos",favoritos:"Favoritos",clubes:"Clubes",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Empresas",academia:"Academia",carne:"Carné",
      paises:"Todos los países",zonas:"Todas las zonas",provincias:"Todas las provincias",cerca:"Cerca de mí",cerca_on:"Cerca: ON",buscando:"Buscando…",
      local:"local",locales:"locales",por_cercania:"por cercanía",sin_result:"No hay resultados con estos filtros.",vacio_h:"Todavía no hay nada por aquí",lo_mas_cerca:"Lo más cerca:",vacio_p:"El mapa está empezando. Solo salen los locales que nos han dado permiso. ¿Tienes uno? Ponlo tú, es gratis.",sin_favs:"Aún no has guardado ningún favorito. Toca el corazón de un local para tenerlo a mano.",de:"de",sigue:"sigue bajando",
      anade:"Añade tu local",nav_mapa:"Mapa",nav_saber:"Saber+",nav_com:"Comunidad",muy_pronto:"Muy pronto",tag_alta:"Alta verificada",
      llegar:"Cómo llegar",llamar:"Llamar",escribir:"Escribir",compartir:"Compartir",sin_contacto:"Sin contacto publicado",ver_web:"Visitar la web",
      sobre:"Sobre el local",direccion:"Dirección",horario:"Horario",consultar:"consultar",antes:"Antes de ir",
      antes_txt:"Los locales son asociaciones privadas solo para socios mayores de edad. Suele hacer falta invitación o contacto previo. Consume con responsabilidad.",
      nuevo:"Nuevo",verificado:"Verificado",sin_verificar:"Sin verificar",estado:"estado",sin_resenas:"sin reseñas aún",resenas:"reseñas",
      es_tuyo:"¿Es tu local?",completar:"Completa tu ficha gratis",avisar:"Avisar de un error",quitar:"Quítame del mapa",copiado:"Copiado al portapapeles",idioma:"Idioma",
      datos_publicos:"Datos de fuentes públicas, sin verificar por el local."},

  en:{en_tramite:"more being onboarded",ag_h:"Are you over 18?",ag_p:"An information guide to private social clubs, grow shops and CBD stores. <b>No cannabis is sold here</b>. Adults 18+ only.",ag_si:"Yes, I'm over 18",ag_no:"No, take me out",ag_pie:"Use responsibly · Brosin promotes harm reduction",pie_legal:"Information guide · no cannabis is sold here · 18+ only · use responsibly",pie_lema:"one hive, many combs",nav_nosotros:"About us",nav_empresarios:"For business owners",nav_legal:"Legal notice",datos_verif:"public sources, being verified",toda_espana:"All of Spain",toda_europa:"All of Europe",tipo_csc:"Social club",tipo_grow:"Grow shop",tipo_cbd:"CBD store",tipo_medicinal:"Medical",tipo_empresa:"Business",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Search place, city, province…",todos:"All",favoritos:"Favourites",clubes:"Clubs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medical",empresas:"Businesses",academia:"Academy",carne:"Card",
      paises:"All countries",zonas:"All regions",provincias:"All provinces",cerca:"Near me",cerca_on:"Near: ON",buscando:"Searching…",
      local:"place",locales:"places",por_cercania:"by distance",sin_result:"No results with these filters.",vacio_h:"Nothing here yet",lo_mas_cerca:"Nearest:",vacio_p:"The map is just starting. Only places that gave us permission show up. Got one? Add it — it's free.",sin_favs:"You haven't saved any favourites yet. Tap the heart on a place to keep it handy.",de:"of",sigue:"keep scrolling",
      anade:"Add your place",nav_mapa:"Map",nav_saber:"Know+",nav_com:"Community",muy_pronto:"Coming soon",tag_alta:"Verified listing",
      llegar:"Directions",llamar:"Call",escribir:"Email",compartir:"Share",sin_contacto:"No contact published",ver_web:"Visit website",
      sobre:"About this place",direccion:"Address",horario:"Opening hours",consultar:"ask them",antes:"Before you go",
      antes_txt:"These are private members-only associations for adults. You usually need an invitation or to get in touch first. Consume responsibly.",
      nuevo:"New",verificado:"Verified",sin_verificar:"Unverified",estado:"status",sin_resenas:"no reviews yet",resenas:"reviews",
      es_tuyo:"Is this your place?",completar:"Complete your listing, free",avisar:"Report a problem",quitar:"Remove my listing",copiado:"Copied to clipboard",idioma:"Language",
      datos_publicos:"From public sources, not confirmed by the venue."},

  de:{en_tramite:"weitere in Aufnahme",ag_h:"Bist du volljährig?",ag_p:"Ein Informationsführer zu privaten Social Clubs, Grow Shops und CBD-Läden. <b>Hier wird kein Cannabis verkauft</b>. Nur ab 18 Jahren.",ag_si:"Ja, ich bin über 18",ag_no:"Nein, hier raus",ag_pie:"Konsumiere verantwortungsvoll · Brosin steht für Risikominimierung",pie_legal:"Informationsführer · hier wird kein Cannabis verkauft · nur ab 18 · konsumiere verantwortungsvoll",pie_lema:"ein Bienenstock, viele Waben",nav_nosotros:"Über uns",nav_empresarios:"Für Unternehmen",nav_legal:"Impressum",datos_verif:"öffentliche Quellen, in Prüfung",toda_espana:"Ganz Spanien",toda_europa:"Ganz Europa",tipo_csc:"Social Club",tipo_grow:"Grow Shop",tipo_cbd:"CBD-Laden",tipo_medicinal:"Medizinisch",tipo_empresa:"Unternehmen",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Ort, Stadt oder Provinz suchen…",todos:"Alle",favoritos:"Favoriten",clubes:"Clubs",grows:"Grow Shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medizinisch",empresas:"Unternehmen",academia:"Akademie",carne:"Ausweis",
      paises:"Alle Länder",zonas:"Alle Regionen",provincias:"Alle Provinzen",cerca:"In meiner Nähe",cerca_on:"Nähe: AN",buscando:"Suche…",
      local:"Ort",locales:"Orte",por_cercania:"nach Entfernung",sin_result:"Keine Treffer mit diesen Filtern.",vacio_h:"Hier ist noch nichts",lo_mas_cerca:"Am nächsten:",vacio_p:"Die Karte fängt gerade erst an. Es erscheinen nur Läden, die es uns erlaubt haben. Du hast einen? Trag ihn ein, kostenlos.",sin_favs:"Du hast noch keine Favoriten. Tippe auf das Herz, um einen Ort zu merken.",de:"von",sigue:"weiter scrollen",
      anade:"Ort eintragen",nav_mapa:"Karte",nav_saber:"Wissen+",nav_com:"Community",muy_pronto:"Demnächst",tag_alta:"Eintrag bestätigt",
      llegar:"Route",llamar:"Anrufen",escribir:"E-Mail",compartir:"Teilen",sin_contacto:"Kein Kontakt veröffentlicht",ver_web:"Website besuchen",
      sobre:"Über diesen Ort",direccion:"Adresse",horario:"Öffnungszeiten",consultar:"nachfragen",antes:"Bevor du hingehst",
      antes_txt:"Das sind private Vereine nur für volljährige Mitglieder. Meist braucht man eine Einladung oder muss vorher Kontakt aufnehmen. Konsumiere verantwortungsvoll.",
      nuevo:"Neu",verificado:"Verifiziert",sin_verificar:"Nicht verifiziert",estado:"Status",sin_resenas:"noch keine Bewertungen",resenas:"Bewertungen",
      es_tuyo:"Ist das dein Laden?",completar:"Eintrag kostenlos vervollständigen",avisar:"Fehler melden",quitar:"Eintrag entfernen",copiado:"In die Zwischenablage kopiert",idioma:"Sprache",
      datos_publicos:"Aus öffentlichen Quellen, nicht vom Betrieb bestätigt."},

  fr:{en_tramite:"autres en cours d'ajout",ag_h:"As-tu plus de 18 ans ?",ag_p:"Un guide d'information sur les clubs sociaux privés, grow shops et boutiques de CBD. <b>Ici on ne vend pas de cannabis</b>. Réservé aux plus de 18 ans.",ag_si:"Oui, j'ai plus de 18 ans",ag_no:"Non, sortir",ag_pie:"Consomme de façon responsable · Brosin promeut la réduction des risques",pie_legal:"Guide d'information · ici on ne vend pas de cannabis · +18 uniquement · consomme de façon responsable",pie_lema:"une ruche, beaucoup d'alvéoles",nav_nosotros:"À propos",nav_empresarios:"Pour les professionnels",nav_legal:"Mentions légales",datos_verif:"sources publiques, en cours de vérification",toda_espana:"Toute l'Espagne",toda_europa:"Toute l'Europe",tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Boutique CBD",tipo_medicinal:"Médicinal",tipo_empresa:"Entreprise",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} à {c}",buscar:"Chercher un lieu, une ville, une province…",todos:"Tous",favoritos:"Favoris",clubes:"Clubs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Médicinal",empresas:"Entreprises",academia:"Académie",carne:"Carte",
      paises:"Tous les pays",zonas:"Toutes les régions",provincias:"Toutes les provinces",cerca:"Près de moi",cerca_on:"Proximité : ON",buscando:"Recherche…",
      local:"lieu",locales:"lieux",por_cercania:"par distance",sin_result:"Aucun résultat avec ces filtres.",vacio_h:"Rien ici pour l'instant",lo_mas_cerca:"Le plus proche :",vacio_p:"La carte débute. N'apparaissent que les établissements qui nous ont donné leur accord. Tu en as un ? Ajoute-le, c'est gratuit.",sin_favs:"Vous n'avez pas encore de favoris. Touchez le cœur d'un lieu pour le garder sous la main.",de:"sur",sigue:"continuez à défiler",
      anade:"Ajouter votre lieu",nav_mapa:"Carte",nav_saber:"Savoir+",nav_com:"Communauté",muy_pronto:"Bientôt",tag_alta:"Fiche vérifiée",
      llegar:"Itinéraire",llamar:"Appeler",escribir:"Écrire",compartir:"Partager",sin_contacto:"Aucun contact publié",ver_web:"Voir le site",
      sobre:"À propos du lieu",direccion:"Adresse",horario:"Horaires",consultar:"à demander",antes:"Avant d'y aller",
      antes_txt:"Ce sont des associations privées réservées aux membres majeurs. Il faut généralement une invitation ou un contact préalable. Consommez de façon responsable.",
      nuevo:"Nouveau",verificado:"Vérifié",sin_verificar:"Non vérifié",estado:"statut",sin_resenas:"pas encore d'avis",resenas:"avis",
      es_tuyo:"C'est votre établissement ?",completar:"Complétez votre fiche, gratuit",avisar:"Signaler une erreur",quitar:"Retirez ma fiche",copiado:"Copié dans le presse-papiers",idioma:"Langue",
      datos_publicos:"Sources publiques, non confirmé par l'établissement."},

  nl:{en_tramite:"meer in aanmelding",ag_h:"Ben je 18 of ouder?",ag_p:"Een informatiegids over besloten social clubs, growshops en CBD-winkels. <b>Hier wordt geen cannabis verkocht</b>. Alleen 18+.",ag_si:"Ja, ik ben 18+",ag_no:"Nee, ik ga weg",ag_pie:"Gebruik verantwoord · Brosin staat voor schadebeperking",pie_legal:"Informatiegids · hier wordt geen cannabis verkocht · alleen 18+ · gebruik verantwoord",pie_lema:"één korf, veel raten",nav_nosotros:"Over ons",nav_empresarios:"Voor ondernemers",nav_legal:"Juridische kennisgeving",datos_verif:"openbare bronnen, in verificatie",toda_espana:"Heel Spanje",toda_europa:"Heel Europa",tipo_csc:"Social club",tipo_grow:"Growshop",tipo_cbd:"CBD-winkel",tipo_medicinal:"Medicinaal",tipo_empresa:"Bedrijf",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Zoek plek, stad of provincie…",todos:"Alle",favoritos:"Favorieten",clubes:"Clubs",grows:"Growshops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinaal",empresas:"Bedrijven",academia:"Academie",carne:"Pas",
      paises:"Alle landen",zonas:"Alle regio's",provincias:"Alle provincies",cerca:"Bij mij in de buurt",cerca_on:"Dichtbij: AAN",buscando:"Zoeken…",
      local:"plek",locales:"plekken",por_cercania:"op afstand",sin_result:"Geen resultaten met deze filters.",vacio_h:"Hier is nog niets",lo_mas_cerca:"Dichtstbij:",vacio_p:"De kaart begint net. Alleen zaken die ons toestemming gaven verschijnen. Heb je er een? Voeg hem toe, gratis.",sin_favs:"Je hebt nog geen favorieten. Tik op het hartje om een plek te bewaren.",de:"van",sigue:"blijf scrollen",
      anade:"Voeg je zaak toe",nav_mapa:"Kaart",nav_saber:"Weten+",nav_com:"Community",muy_pronto:"Binnenkort",tag_alta:"Vermelding geverifieerd",
      llegar:"Route",llamar:"Bellen",escribir:"Mailen",compartir:"Delen",sin_contacto:"Geen contact gepubliceerd",ver_web:"Website bekijken",
      sobre:"Over deze plek",direccion:"Adres",horario:"Openingstijden",consultar:"navragen",antes:"Voordat je gaat",
      antes_txt:"Dit zijn besloten verenigingen, alleen voor meerderjarige leden. Meestal heb je een uitnodiging nodig of moet je vooraf contact opnemen. Gebruik verantwoord.",
      nuevo:"Nieuw",verificado:"Geverifieerd",sin_verificar:"Niet geverifieerd",estado:"status",sin_resenas:"nog geen reviews",resenas:"reviews",
      es_tuyo:"Is dit jouw zaak?",completar:"Vul je vermelding gratis aan",avisar:"Fout melden",quitar:"Verwijder mijn vermelding",copiado:"Gekopieerd naar klembord",idioma:"Taal",
      datos_publicos:"Uit openbare bronnen, niet bevestigd door de zaak."},

  it:{en_tramite:"altri in fase di adesione",ag_h:"Sei maggiorenne?",ag_p:"Una guida informativa su club sociali privati, grow shop e negozi di CBD. <b>Qui non si vende cannabis</b>. Solo per maggiori di 18 anni.",ag_si:"Sì, ho più di 18 anni",ag_no:"No, esci",ag_pie:"Consuma responsabilmente · Brosin promuove la riduzione del danno",pie_legal:"Guida informativa · qui non si vende cannabis · solo +18 · consuma responsabilmente",pie_lema:"un alveare, tanti favi",nav_nosotros:"Chi siamo",nav_empresarios:"Per le aziende",nav_legal:"Note legali",datos_verif:"fonti pubbliche, in verifica",toda_espana:"Tutta la Spagna",toda_europa:"Tutta l'Europa",tipo_csc:"Club sociale",tipo_grow:"Grow shop",tipo_cbd:"Negozio CBD",tipo_medicinal:"Medicinale",tipo_empresa:"Azienda",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} a {c}",buscar:"Cerca locale, città, provincia…",todos:"Tutti",favoritos:"Preferiti",clubes:"Club",grows:"Grow shop",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinale",empresas:"Aziende",academia:"Accademia",carne:"Tessera",
      paises:"Tutti i paesi",zonas:"Tutte le zone",provincias:"Tutte le province",cerca:"Vicino a me",cerca_on:"Vicino: ON",buscando:"Ricerca…",
      local:"locale",locales:"locali",por_cercania:"per distanza",sin_result:"Nessun risultato con questi filtri.",vacio_h:"Qui non c'è ancora nulla",lo_mas_cerca:"Il più vicino:",vacio_p:"La mappa sta appena iniziando. Compaiono solo i locali che ci hanno dato il permesso. Ne hai uno? Aggiungilo, è gratis.",sin_favs:"Non hai ancora preferiti. Tocca il cuore di un locale per tenerlo a portata di mano.",de:"di",sigue:"continua a scorrere",
      anade:"Aggiungi il tuo locale",nav_mapa:"Mappa",nav_saber:"Sapere+",nav_com:"Comunità",muy_pronto:"Prossimamente",tag_alta:"Scheda verificata",
      llegar:"Indicazioni",llamar:"Chiama",escribir:"Scrivi",compartir:"Condividi",sin_contacto:"Nessun contatto pubblicato",ver_web:"Vai al sito",
      sobre:"Sul locale",direccion:"Indirizzo",horario:"Orari",consultar:"da chiedere",antes:"Prima di andare",
      antes_txt:"Sono associazioni private riservate ai soci maggiorenni. Di solito serve un invito o un contatto preventivo. Consuma responsabilmente.",
      nuevo:"Nuovo",verificado:"Verificato",sin_verificar:"Non verificato",estado:"stato",sin_resenas:"ancora nessuna recensione",resenas:"recensioni",
      es_tuyo:"È il tuo locale?",completar:"Completa la scheda, gratis",avisar:"Segnala un errore",quitar:"Rimuovi la mia scheda",copiado:"Copiato negli appunti",idioma:"Lingua",
      datos_publicos:"Da fonti pubbliche, non confermato dal locale."},

  pt:{en_tramite:"mais em processo de adesão",ag_h:"És maior de idade?",ag_p:"Um guia informativo sobre clubes sociais privados, grow shops e lojas de CBD. <b>Aqui não se vende canábis</b>. Só para maiores de 18 anos.",ag_si:"Sim, sou maior de 18",ag_no:"Não, sair",ag_pie:"Consome com responsabilidade · A Brosin promove a redução de riscos",pie_legal:"Guia informativo · aqui não se vende canábis · só +18 · consome com responsabilidade",pie_lema:"uma colmeia, muitos favos",nav_nosotros:"Sobre nós",nav_empresarios:"Para empresários",nav_legal:"Aviso legal",datos_verif:"fontes públicas, em verificação",toda_espana:"Toda a Espanha",toda_europa:"Toda a Europa",tipo_csc:"Clube social",tipo_grow:"Grow shop",tipo_cbd:"Loja de CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Empresa",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} em {c}",buscar:"Procurar local, cidade, distrito…",todos:"Todos",favoritos:"Favoritos",clubes:"Clubes",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Empresas",academia:"Academia",carne:"Cartão",
      paises:"Todos os países",zonas:"Todas as zonas",provincias:"Todos os distritos",cerca:"Perto de mim",cerca_on:"Perto: ON",buscando:"A procurar…",
      local:"local",locales:"locais",por_cercania:"por proximidade",sin_result:"Sem resultados com estes filtros.",vacio_h:"Ainda não há nada por aqui",lo_mas_cerca:"O mais perto:",vacio_p:"O mapa está a começar. Só aparecem os espaços que nos deram permissão. Tens um? Adiciona-o, é grátis.",sin_favs:"Ainda não guardaste favoritos. Toca no coração de um local para o teres à mão.",de:"de",sigue:"continua a descer",
      anade:"Adiciona o teu local",nav_mapa:"Mapa",nav_saber:"Saber+",nav_com:"Comunidade",muy_pronto:"Muito em breve",tag_alta:"Registo verificado",
      llegar:"Como chegar",llamar:"Ligar",escribir:"Escrever",compartir:"Partilhar",sin_contacto:"Sem contacto publicado",ver_web:"Visitar o site",
      sobre:"Sobre o local",direccion:"Morada",horario:"Horário",consultar:"a confirmar",antes:"Antes de ir",
      antes_txt:"São associações privadas só para sócios maiores de idade. Normalmente é preciso convite ou contacto prévio. Consome com responsabilidade.",
      nuevo:"Novo",verificado:"Verificado",sin_verificar:"Por verificar",estado:"estado",sin_resenas:"ainda sem avaliações",resenas:"avaliações",
      es_tuyo:"O local é teu?",completar:"Completa a tua ficha, grátis",avisar:"Reportar um erro",quitar:"Tira a minha ficha",copiado:"Copiado para a área de transferência",idioma:"Idioma",
      datos_publicos:"De fontes públicas, sem confirmação do local."},

  sv:{en_tramite:"fler på väg in",ag_h:"Är du över 18?",ag_p:"En informationsguide om privata social clubs, grow shops och CBD-butiker. <b>Här säljs ingen cannabis</b>. Endast 18+.",ag_si:"Ja, jag är över 18",ag_no:"Nej, ta mig härifrån",ag_pie:"Använd ansvarsfullt · Brosin står för skadebeperkning",pie_legal:"Informationsguide · här säljs ingen cannabis · endast 18+ · använd ansvarsfullt",pie_lema:"en kupa, många kakor",nav_nosotros:"Om oss",nav_empresarios:"För företagare",nav_legal:"Juridisk information",datos_verif:"offentliga källor, under verifiering",toda_espana:"Hela Spanien",toda_europa:"Hela Europa",tipo_csc:"Social club",tipo_grow:"Grow shop",tipo_cbd:"CBD-butik",tipo_medicinal:"Medicinsk",tipo_empresa:"Företag",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Sök ställe, stad, provins…",todos:"Alla",favoritos:"Favoriter",clubes:"Klubbar",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinsk",empresas:"Företag",academia:"Akademi",carne:"Kort",
      paises:"Alla länder",zonas:"Alla regioner",provincias:"Alla provinser",cerca:"Nära mig",cerca_on:"Nära: PÅ",buscando:"Söker…",
      local:"ställe",locales:"ställen",por_cercania:"efter avstånd",sin_result:"Inga träffar med dessa filter.",vacio_h:"Här finns inget än",lo_mas_cerca:"Närmast:",vacio_p:"Kartan har precis börjat. Bara ställen som gett oss tillåtelse syns. Har du ett? Lägg till det, gratis.",sin_favs:"Du har inga favoriter än. Tryck på hjärtat för att spara ett ställe.",de:"av",sigue:"fortsätt scrolla",
      anade:"Lägg till ditt ställe",nav_mapa:"Karta",nav_saber:"Veta+",nav_com:"Community",muy_pronto:"Snart",tag_alta:"Verifierad uppgift",
      llegar:"Vägbeskrivning",llamar:"Ring",escribir:"Mejla",compartir:"Dela",sin_contacto:"Ingen kontakt publicerad",ver_web:"Besök webbplatsen",
      sobre:"Om stället",direccion:"Adress",horario:"Öppettider",consultar:"fråga dem",antes:"Innan du åker",
      antes_txt:"Det här är privata föreningar endast för myndiga medlemmar. Oftast krävs en inbjudan eller kontakt i förväg. Konsumera ansvarsfullt.",
      nuevo:"Ny",verificado:"Verifierad",sin_verificar:"Ej verifierad",estado:"status",sin_resenas:"inga omdömen än",resenas:"omdömen",
      es_tuyo:"Är stället ditt?",completar:"Fyll i din sida, gratis",avisar:"Rapportera fel",quitar:"Ta bort min sida",copiado:"Kopierat",idioma:"Språk",
      datos_publicos:"Från offentliga källor, ej bekräftat av stället."},

  pl:{en_tramite:"kolejnych w trakcie dodawania",ag_h:"Czy masz ukończone 18 lat?",ag_p:"Przewodnik informacyjny po prywatnych klubach społecznych, grow shopach i sklepach CBD. <b>Tu nie sprzedajemy konopi</b>. Tylko dla osób pełnoletnich.",ag_si:"Tak, mam ukończone 18 lat",ag_no:"Nie, wyjdź",ag_pie:"Używaj odpowiedzialnie · Brosin promuje ograniczanie ryzyka",pie_legal:"Przewodnik informacyjny · tu nie sprzedajemy konopi · tylko 18+ · używaj odpowiedzialnie",pie_lema:"jeden ul, wiele plastrów",nav_nosotros:"O nas",nav_empresarios:"Dla firm",nav_legal:"Nota prawna",datos_verif:"źródła publiczne, w weryfikacji",toda_espana:"Cała Hiszpania",toda_europa:"Cała Europa",tipo_csc:"Klub społeczny",tipo_grow:"Grow shop",tipo_cbd:"Sklep CBD",tipo_medicinal:"Medyczny",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} w {c}",buscar:"Szukaj miejsca, miasta, prowincji…",todos:"Wszystkie",favoritos:"Ulubione",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Medyczny",empresas:"Firmy",academia:"Akademia",carne:"Karta",
      paises:"Wszystkie kraje",zonas:"Wszystkie regiony",provincias:"Wszystkie prowincje",cerca:"Blisko mnie",cerca_on:"Blisko: WŁ",buscando:"Szukam…",
      local:"miejsce",locales:"miejsc",por_cercania:"wg odległości",sin_result:"Brak wyników dla tych filtrów.",vacio_h:"Tu jeszcze nic nie ma",lo_mas_cerca:"Najbliżej:",vacio_p:"Mapa dopiero się zaczyna. Pokazują się tylko lokale, które dały nam zgodę. Masz taki? Dodaj go, za darmo.",sin_favs:"Nie masz jeszcze ulubionych. Dotknij serca, aby zapisać miejsce.",de:"z",sigue:"przewijaj dalej",
      anade:"Dodaj swoje miejsce",nav_mapa:"Mapa",nav_saber:"Wiedza+",nav_com:"Społeczność",muy_pronto:"Wkrótce",tag_alta:"Wpis zweryfikowany",
      llegar:"Dojazd",llamar:"Zadzwoń",escribir:"Napisz",compartir:"Udostępnij",sin_contacto:"Brak kontaktu",ver_web:"Zobacz stronę",
      sobre:"O miejscu",direccion:"Adres",horario:"Godziny otwarcia",consultar:"zapytaj",antes:"Zanim pójdziesz",
      antes_txt:"To prywatne stowarzyszenia wyłącznie dla pełnoletnich członków. Zwykle potrzebne jest zaproszenie lub wcześniejszy kontakt. Używaj odpowiedzialnie.",
      nuevo:"Nowe",verificado:"Zweryfikowane",sin_verificar:"Niezweryfikowane",estado:"status",sin_resenas:"brak opinii",resenas:"opinii",
      es_tuyo:"To Twoje miejsce?",completar:"Uzupełnij wizytówkę, za darmo",avisar:"Zgłoś błąd",quitar:"Usuń moją wizytówkę",copiado:"Skopiowano",idioma:"Język",
      datos_publicos:"Ze źródeł publicznych, niepotwierdzone przez lokal."},

  bg:{en_tramite:"още в процес на добавяне",ag_h:"Пълнолетен ли си?",ag_p:"Информационен справочник за частни социални клубове, гроу шопове и магазини за CBD. <b>Тук не се продава канабис</b>. Само за навършили 18 години.",ag_si:"Да, над 18 съм",ag_no:"Не, излез",ag_pie:"Употребявай отговорно · Brosin насърчава намаляването на вредите",pie_legal:"Информационен справочник · тук не се продава канабис · само 18+ · употребявай отговорно",pie_lema:"един кошер, много пити",nav_nosotros:"За нас",nav_empresarios:"За бизнеса",nav_legal:"Правна информация",datos_verif:"публични източници, в проверка",toda_espana:"Цяла Испания",toda_europa:"Цяла Европа",tipo_csc:"Социален клуб",tipo_grow:"Гроу шоп",tipo_cbd:"CBD магазин",tipo_medicinal:"Медицински",tipo_empresa:"Фирма",tipo_coffeeshop:"Кофишоп",
      en_ciudad:"{t} в {c}",buscar:"Търси място, град, провинция…",todos:"Всички",favoritos:"Любими",clubes:"Клубове",grows:"Гроу шопове",cbd:"CBD",coffee:"Кофишоп",medic:"Медицински",empresas:"Фирми",academia:"Академия",carne:"Карта",
      paises:"Всички държави",zonas:"Всички региони",provincias:"Всички провинции",cerca:"Близо до мен",cerca_on:"Близо: ВКЛ",buscando:"Търсене…",
      local:"място",locales:"места",por_cercania:"по разстояние",sin_result:"Няма резултати с тези филтри.",vacio_h:"Тук още няма нищо",lo_mas_cerca:"Най-близко:",vacio_p:"Картата тепърва започва. Показват се само обектите, които са ни дали съгласие. Имаш такъв? Добави го, безплатно.",sin_favs:"Още нямаш любими. Докосни сърцето, за да запазиш място.",de:"от",sigue:"продължи надолу",
      anade:"Добави своето място",nav_mapa:"Карта",nav_saber:"Знание+",nav_com:"Общност",muy_pronto:"Съвсем скоро",tag_alta:"Проверена регистрация",
      llegar:"Маршрут",llamar:"Обади се",escribir:"Пиши",compartir:"Сподели",sin_contacto:"Няма публикуван контакт",ver_web:"Виж сайта",
      sobre:"За мястото",direccion:"Адрес",horario:"Работно време",consultar:"попитай",antes:"Преди да отидеш",
      antes_txt:"Това са частни сдружения само за пълнолетни членове. Обикновено е нужна покана или предварителен контакт. Употребявай отговорно.",
      nuevo:"Ново",verificado:"Потвърдено",sin_verificar:"Непотвърдено",estado:"статус",sin_resenas:"още няма отзиви",resenas:"отзива",
      es_tuyo:"Твое ли е мястото?",completar:"Попълни профила, безплатно",avisar:"Съобщи за грешка",quitar:"Премахни ме от картата",copiado:"Копирано",idioma:"Език",
      datos_publicos:"От публични източници, непотвърдено от обекта."},

  hr:{en_tramite:"još u postupku dodavanja",ag_h:"Jesi li punoljetan?",ag_p:"Informativni vodič kroz privatne društvene klubove, grow shopove i CBD trgovine. <b>Ovdje se ne prodaje kanabis</b>. Samo za punoljetne.",ag_si:"Da, imam 18+",ag_no:"Ne, izlaz",ag_pie:"Konzumiraj odgovorno · Brosin promiče smanjenje štete",pie_legal:"Informativni vodič · ovdje se ne prodaje kanabis · samo 18+ · konzumiraj odgovorno",pie_lema:"jedna košnica, mnogo saća",nav_nosotros:"O nama",nav_empresarios:"Za poduzetnike",nav_legal:"Pravne informacije",datos_verif:"javni izvori, u provjeri",toda_espana:"Cijela Španjolska",toda_europa:"Cijela Europa",tipo_csc:"Društveni klub",tipo_grow:"Grow shop",tipo_cbd:"CBD trgovina",tipo_medicinal:"Medicinski",tipo_empresa:"Tvrtka",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} u {c}",buscar:"Traži mjesto, grad, provinciju…",todos:"Sve",favoritos:"Favoriti",clubes:"Klubovi",grows:"Grow shopovi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinski",empresas:"Tvrtke",academia:"Akademija",carne:"Iskaznica",
      paises:"Sve zemlje",zonas:"Sve regije",provincias:"Sve provincije",cerca:"Blizu mene",cerca_on:"Blizu: UKLJ",buscando:"Tražim…",
      local:"mjesto",locales:"mjesta",por_cercania:"po udaljenosti",sin_result:"Nema rezultata s ovim filtrima.",vacio_h:"Ovdje još nema ničega",lo_mas_cerca:"Najbliže:",vacio_p:"Karta tek počinje. Prikazuju se samo lokali koji su nam dali dopuštenje. Imaš takav? Dodaj ga, besplatno.",sin_favs:"Još nemaš favorita. Dodirni srce da spremiš mjesto.",de:"od",sigue:"nastavi listati",
      anade:"Dodaj svoje mjesto",nav_mapa:"Karta",nav_saber:"Znanje+",nav_com:"Zajednica",muy_pronto:"Uskoro",tag_alta:"Potvrđen upis",
      llegar:"Upute",llamar:"Nazovi",escribir:"Piši",compartir:"Podijeli",sin_contacto:"Nema objavljenog kontakta",ver_web:"Posjeti stranicu",
      sobre:"O mjestu",direccion:"Adresa",horario:"Radno vrijeme",consultar:"pitaj",antes:"Prije odlaska",
      antes_txt:"Ovo su privatne udruge samo za punoljetne članove. Obično treba pozivnica ili prethodni kontakt. Konzumiraj odgovorno.",
      nuevo:"Novo",verificado:"Provjereno",sin_verificar:"Neprovjereno",estado:"status",sin_resenas:"još nema recenzija",resenas:"recenzija",
      es_tuyo:"Je li ovo tvoje mjesto?",completar:"Dopuni svoj profil, besplatno",avisar:"Prijavi grešku",quitar:"Ukloni moj profil",copiado:"Kopirano",idioma:"Jezik",
      datos_publicos:"Iz javnih izvora, nije potvrdio lokal."},

  cs:{en_tramite:"dalších se přidává",ag_h:"Je ti 18 nebo víc?",ag_p:"Informační průvodce soukromými sociálními kluby, grow shopy a CBD obchody. <b>Tady se konopí neprodává</b>. Pouze pro osoby starší 18 let.",ag_si:"Ano, je mi 18+",ag_no:"Ne, odejít",ag_pie:"Užívej zodpovědně · Brosin prosazuje snižování rizik",pie_legal:"Informační průvodce · tady se konopí neprodává · pouze 18+ · užívej zodpovědně",pie_lema:"jeden úl, mnoho plástů",nav_nosotros:"O nás",nav_empresarios:"Pro podnikatele",nav_legal:"Právní informace",datos_verif:"veřejné zdroje, v ověřování",toda_espana:"Celé Španělsko",toda_europa:"Celá Evropa",tipo_csc:"Sociální klub",tipo_grow:"Grow shop",tipo_cbd:"CBD obchod",tipo_medicinal:"Léčebný",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Hledat podnik, město, provincii…",todos:"Vše",favoritos:"Oblíbené",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Léčebný",empresas:"Firmy",academia:"Akademie",carne:"Průkaz",
      paises:"Všechny země",zonas:"Všechny regiony",provincias:"Všechny provincie",cerca:"Blízko mě",cerca_on:"Blízko: ZAP",buscando:"Hledám…",
      local:"podnik",locales:"podniků",por_cercania:"podle vzdálenosti",sin_result:"Žádné výsledky s těmito filtry.",vacio_h:"Tady zatím nic není",lo_mas_cerca:"Nejblíž:",vacio_p:"Mapa teprve začíná. Zobrazují se jen podniky, které nám daly souhlas. Máš takový? Přidej ho zdarma.",sin_favs:"Zatím nemáš oblíbené. Klepni na srdce a podnik si ulož.",de:"z",sigue:"posouvej dál",
      anade:"Přidej svůj podnik",nav_mapa:"Mapa",nav_saber:"Vědět+",nav_com:"Komunita",muy_pronto:"Už brzy",tag_alta:"Ověřený zápis",
      llegar:"Trasa",llamar:"Zavolat",escribir:"Napsat",compartir:"Sdílet",sin_contacto:"Kontakt nezveřejněn",ver_web:"Otevřít web",
      sobre:"O podniku",direccion:"Adresa",horario:"Otevírací doba",consultar:"zeptat se",antes:"Než vyrazíš",
      antes_txt:"Jde o soukromé spolky jen pro plnoleté členy. Obvykle je potřeba pozvánka nebo se předem ozvat. Užívej zodpovědně.",
      nuevo:"Nové",verificado:"Ověřeno",sin_verificar:"Neověřeno",estado:"stav",sin_resenas:"zatím bez recenzí",resenas:"recenzí",
      es_tuyo:"Je to tvůj podnik?",completar:"Doplň svůj profil zdarma",avisar:"Nahlásit chybu",quitar:"Odeber můj profil",copiado:"Zkopírováno",idioma:"Jazyk",
      datos_publicos:"Z veřejných zdrojů, nepotvrzeno podnikem."},

  da:{en_tramite:"flere på vej ind",ag_h:"Er du fyldt 18?",ag_p:"En informationsguide til private social clubs, grow shops og CBD-butikker. <b>Her sælges ingen cannabis</b>. Kun for 18+.",ag_si:"Ja, jeg er over 18",ag_no:"Nej, luk ned",ag_pie:"Brug ansvarligt · Brosin arbejder for skadesreduktion",pie_legal:"Informationsguide · her sælges ingen cannabis · kun 18+ · brug ansvarligt",pie_lema:"én kube, mange tavler",nav_nosotros:"Om os",nav_empresarios:"For erhvervsdrivende",nav_legal:"Juridisk info",datos_verif:"offentlige kilder, under verificering",toda_espana:"Hele Spanien",toda_europa:"Hele Europa",tipo_csc:"Social klub",tipo_grow:"Grow shop",tipo_cbd:"CBD-butik",tipo_medicinal:"Medicinsk",tipo_empresa:"Virksomhed",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Søg sted, by, provins…",todos:"Alle",favoritos:"Favoritter",clubes:"Klubber",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinsk",empresas:"Virksomheder",academia:"Akademi",carne:"Kort",
      paises:"Alle lande",zonas:"Alle regioner",provincias:"Alle provinser",cerca:"Tæt på mig",cerca_on:"Nær: TIL",buscando:"Søger…",
      local:"sted",locales:"steder",por_cercania:"efter afstand",sin_result:"Ingen resultater med disse filtre.",vacio_h:"Her er der ikke noget endnu",lo_mas_cerca:"Nærmest:",vacio_p:"Kortet er lige begyndt. Kun steder, der har givet os lov, vises. Har du et? Tilføj det gratis.",sin_favs:"Du har ingen favoritter endnu. Tryk på hjertet for at gemme et sted.",de:"af",sigue:"bliv ved med at scrolle",
      anade:"Tilføj dit sted",nav_mapa:"Kort",nav_saber:"Viden+",nav_com:"Fællesskab",muy_pronto:"Snart",tag_alta:"Bekræftet oprettelse",
      llegar:"Rute",llamar:"Ring",escribir:"Skriv",compartir:"Del",sin_contacto:"Ingen kontakt offentliggjort",ver_web:"Besøg hjemmesiden",
      sobre:"Om stedet",direccion:"Adresse",horario:"Åbningstider",consultar:"spørg dem",antes:"Før du tager afsted",
      antes_txt:"Det er private foreninger kun for myndige medlemmer. Man skal som regel have en invitation eller tage kontakt først. Brug ansvarligt.",
      nuevo:"Ny",verificado:"Verificeret",sin_verificar:"Ikke verificeret",estado:"status",sin_resenas:"ingen anmeldelser endnu",resenas:"anmeldelser",
      es_tuyo:"Er det dit sted?",completar:"Udfyld din profil, gratis",avisar:"Rapportér en fejl",quitar:"Fjern min profil",copiado:"Kopieret",idioma:"Sprog",
      datos_publicos:"Fra offentlige kilder, ikke bekræftet af stedet."},

  et:{en_tramite:"veel lisandumas",ag_h:"Kas oled täisealine?",ag_p:"Teabejuhend eraklubide, grow shop'ide ja CBD-poodide kohta. <b>Siin kanepit ei müüda</b>. Ainult täisealistele.",ag_si:"Jah, olen üle 18",ag_no:"Ei, välju",ag_pie:"Tarbi vastutustundlikult · Brosin toetab kahjude vähendamist",pie_legal:"Teabejuhend · siin kanepit ei müüda · ainult 18+ · tarbi vastutustundlikult",pie_lema:"üks taru, palju kärgi",nav_nosotros:"Meist",nav_empresarios:"Ettevõtjatele",nav_legal:"Õigusteave",datos_verif:"avalikud allikad, kontrollimisel",toda_espana:"Kogu Hispaania",toda_europa:"Kogu Euroopa",tipo_csc:"Sotsiaalklubi",tipo_grow:"Grow shop",tipo_cbd:"CBD pood",tipo_medicinal:"Meditsiiniline",tipo_empresa:"Ettevõte",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Otsi kohta, linna, provintsi…",todos:"Kõik",favoritos:"Lemmikud",clubes:"Klubid",grows:"Grow shopid",cbd:"CBD",coffee:"Coffeeshop",medic:"Meditsiiniline",empresas:"Ettevõtted",academia:"Akadeemia",carne:"Kaart",
      paises:"Kõik riigid",zonas:"Kõik piirkonnad",provincias:"Kõik provintsid",cerca:"Minu lähedal",cerca_on:"Lähedal: SEES",buscando:"Otsin…",
      local:"koht",locales:"kohta",por_cercania:"kauguse järgi",sin_result:"Nende filtritega tulemusi pole.",vacio_h:"Siin pole veel midagi",lo_mas_cerca:"Lähim:",vacio_p:"Kaart alles algab. Näidatakse ainult kohti, kes on meile loa andnud. Sul on selline? Lisa see tasuta.",sin_favs:"Sul pole veel lemmikuid. Puuduta südant, et koht salvestada.",de:"/",sigue:"keri edasi",
      anade:"Lisa oma koht",nav_mapa:"Kaart",nav_saber:"Teadmised+",nav_com:"Kogukond",muy_pronto:"Varsti",tag_alta:"Kinnitatud kanne",
      llegar:"Juhised",llamar:"Helista",escribir:"Kirjuta",compartir:"Jaga",sin_contacto:"Kontakti pole avaldatud",ver_web:"Ava veebileht",
      sobre:"Kohast",direccion:"Aadress",horario:"Lahtiolekuajad",consultar:"küsi",antes:"Enne minekut",
      antes_txt:"Need on eraühingud ainult täisealistele liikmetele. Tavaliselt on vaja kutset või eelnevat kontakti. Tarbi vastutustundlikult.",
      nuevo:"Uus",verificado:"Kinnitatud",sin_verificar:"Kinnitamata",estado:"olek",sin_resenas:"arvustusi veel pole",resenas:"arvustust",
      es_tuyo:"Kas see on sinu koht?",completar:"Täienda oma profiili tasuta",avisar:"Teata veast",quitar:"Eemalda minu profiil",copiado:"Kopeeritud",idioma:"Keel",
      datos_publicos:"Avalikest allikatest, koha poolt kinnitamata."},

  fi:{en_tramite:"lisää liittymässä",ag_h:"Oletko täysi-ikäinen?",ag_p:"Tietopaketti yksityisistä social clubeista, grow shopeista ja CBD-kaupoista. <b>Täällä ei myydä kannabista</b>. Vain 18+.",ag_si:"Kyllä, olen yli 18",ag_no:"En, poistu",ag_pie:"Käytä vastuullisesti · Brosin edistää haittojen vähentämistä",pie_legal:"Tietopaketti · täällä ei myydä kannabista · vain 18+ · käytä vastuullisesti",pie_lema:"yksi pesä, monta kennoa",nav_nosotros:"Tietoa meistä",nav_empresarios:"Yrittäjille",nav_legal:"Oikeudellinen huomautus",datos_verif:"julkiset lähteet, tarkistuksessa",toda_espana:"Koko Espanja",toda_europa:"Koko Eurooppa",tipo_csc:"Sosiaaliklubi",tipo_grow:"Grow shop",tipo_cbd:"CBD-kauppa",tipo_medicinal:"Lääkinnällinen",tipo_empresa:"Yritys",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t}, {c}",buscar:"Hae paikka, kaupunki, maakunta…",todos:"Kaikki",favoritos:"Suosikit",clubes:"Klubit",grows:"Grow shopit",cbd:"CBD",coffee:"Coffeeshop",medic:"Lääkinnällinen",empresas:"Yritykset",academia:"Akatemia",carne:"Kortti",
      paises:"Kaikki maat",zonas:"Kaikki alueet",provincias:"Kaikki maakunnat",cerca:"Lähelläni",cerca_on:"Lähellä: PÄÄLLÄ",buscando:"Haetaan…",
      local:"paikka",locales:"paikkaa",por_cercania:"etäisyyden mukaan",sin_result:"Ei tuloksia näillä suodattimilla.",vacio_h:"Täällä ei ole vielä mitään",lo_mas_cerca:"Lähin:",vacio_p:"Kartta on vasta alussa. Näkyvillä ovat vain paikat, jotka ovat antaneet meille luvan. Onko sinulla? Lisää se ilmaiseksi.",sin_favs:"Sinulla ei ole vielä suosikkeja. Napauta sydäntä tallentaaksesi paikan.",de:"/",sigue:"jatka vierittämistä",
      anade:"Lisää paikkasi",nav_mapa:"Kartta",nav_saber:"Tieto+",nav_com:"Yhteisö",muy_pronto:"Pian",tag_alta:"Vahvistettu ilmoitus",
      llegar:"Reitti",llamar:"Soita",escribir:"Kirjoita",compartir:"Jaa",sin_contacto:"Ei julkaistua yhteystietoa",ver_web:"Avaa sivusto",
      sobre:"Tietoa paikasta",direccion:"Osoite",horario:"Aukioloajat",consultar:"kysy",antes:"Ennen kuin menet",
      antes_txt:"Nämä ovat yksityisiä yhdistyksiä vain täysi-ikäisille jäsenille. Yleensä tarvitaan kutsu tai yhteydenotto etukäteen. Käytä vastuullisesti.",
      nuevo:"Uusi",verificado:"Vahvistettu",sin_verificar:"Vahvistamaton",estado:"tila",sin_resenas:"ei vielä arvioita",resenas:"arviota",
      es_tuyo:"Onko tämä sinun paikkasi?",completar:"Täydennä tietosi ilmaiseksi",avisar:"Ilmoita virheestä",quitar:"Poista tietoni",copiado:"Kopioitu",idioma:"Kieli",
      datos_publicos:"Julkisista lähteistä, paikan vahvistamatta."},

  el:{en_tramite:"ακόμη σε διαδικασία ένταξης",ag_h:"Είσαι άνω των 18;",ag_p:"Ενημερωτικός οδηγός για ιδιωτικούς κοινωνικούς συλλόγους, grow shops και καταστήματα CBD. <b>Εδώ δεν πωλείται κάνναβη</b>. Μόνο για ενήλικες άνω των 18.",ag_si:"Ναι, είμαι άνω των 18",ag_no:"Όχι, έξοδος",ag_pie:"Κατανάλωσε υπεύθυνα · Η Brosin προωθεί τη μείωση της βλάβης",pie_legal:"Ενημερωτικός οδηγός · εδώ δεν πωλείται κάνναβη · μόνο 18+ · κατανάλωσε υπεύθυνα",pie_lema:"μία κυψέλη, πολλές κηρήθρες",nav_nosotros:"Σχετικά με εμάς",nav_empresarios:"Για επιχειρήσεις",nav_legal:"Νομική σημείωση",datos_verif:"δημόσιες πηγές, υπό επαλήθευση",toda_espana:"Όλη η Ισπανία",toda_europa:"Όλη η Ευρώπη",tipo_csc:"Κοινωνικός σύλλογος",tipo_grow:"Grow shop",tipo_cbd:"Κατάστημα CBD",tipo_medicinal:"Ιατρικό",tipo_empresa:"Επιχείρηση",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} στη {c}",buscar:"Αναζήτηση χώρου, πόλης, επαρχίας…",todos:"Όλα",favoritos:"Αγαπημένα",clubes:"Σύλλογοι",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Ιατρικό",empresas:"Επιχειρήσεις",academia:"Ακαδημία",carne:"Κάρτα",
      paises:"Όλες οι χώρες",zonas:"Όλες οι περιοχές",provincias:"Όλες οι επαρχίες",cerca:"Κοντά μου",cerca_on:"Κοντά: ΟΝ",buscando:"Αναζήτηση…",
      local:"χώρος",locales:"χώροι",por_cercania:"κατά απόσταση",sin_result:"Κανένα αποτέλεσμα με αυτά τα φίλτρα.",vacio_h:"Εδώ δεν υπάρχει τίποτα ακόμα",lo_mas_cerca:"Πλησιέστερο:",vacio_p:"Ο χάρτης μόλις ξεκινά. Εμφανίζονται μόνο όσοι μας έδωσαν άδεια. Έχεις έναν; Πρόσθεσέ τον, δωρεάν.",sin_favs:"Δεν έχεις αγαπημένα ακόμη. Πάτα την καρδιά για να αποθηκεύσεις έναν χώρο.",de:"από",sigue:"συνέχισε προς τα κάτω",
      anade:"Πρόσθεσε τον χώρο σου",nav_mapa:"Χάρτης",nav_saber:"Γνώση+",nav_com:"Κοινότητα",muy_pronto:"Πολύ σύντομα",tag_alta:"Επαληθευμένη καταχώριση",
      llegar:"Οδηγίες",llamar:"Κλήση",escribir:"Γράψε",compartir:"Κοινοποίηση",sin_contacto:"Δεν έχει δημοσιευτεί επικοινωνία",ver_web:"Επίσκεψη ιστότοπου",
      sobre:"Σχετικά με τον χώρο",direccion:"Διεύθυνση",horario:"Ώρες λειτουργίας",consultar:"ρώτησε",antes:"Πριν πας",
      antes_txt:"Είναι ιδιωτικοί σύλλογοι μόνο για ενήλικα μέλη. Συνήθως χρειάζεται πρόσκληση ή προηγούμενη επικοινωνία. Κατανάλωσε υπεύθυνα.",
      nuevo:"Νέο",verificado:"Επιβεβαιωμένο",sin_verificar:"Μη επιβεβαιωμένο",estado:"κατάσταση",sin_resenas:"καμία κριτική ακόμη",resenas:"κριτικές",
      es_tuyo:"Δικός σου χώρος;",completar:"Συμπλήρωσε την καταχώρηση, δωρεάν",avisar:"Αναφορά σφάλματος",quitar:"Αφαίρεσε την καταχώρησή μου",copiado:"Αντιγράφηκε",idioma:"Γλώσσα",
      datos_publicos:"Από δημόσιες πηγές, χωρίς επιβεβαίωση από τον χώρο."},

  hu:{en_tramite:"további felvétel alatt",ag_h:"Elmúltál 18 éves?",ag_p:"Tájékoztató útmutató zárt social clubokról, grow shopokról és CBD-boltokról. <b>Itt nem árulunk kannabiszt</b>. Csak 18 éven felülieknek.",ag_si:"Igen, elmúltam 18",ag_no:"Nem, kilépés",ag_pie:"Fogyassz felelősen · A Brosin az ártalomcsökkentést támogatja",pie_legal:"Tájékoztató útmutató · itt nem árulunk kannabiszt · csak 18+ · fogyassz felelősen",pie_lema:"egy kaptár, sok lép",nav_nosotros:"Rólunk",nav_empresarios:"Vállalkozóknak",nav_legal:"Jogi tudnivalók",datos_verif:"nyilvános források, ellenőrzés alatt",toda_espana:"Egész Spanyolország",toda_europa:"Egész Európa",tipo_csc:"Közösségi klub",tipo_grow:"Grow shop",tipo_cbd:"CBD bolt",tipo_medicinal:"Gyógyászati",tipo_empresa:"Cég",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Keress helyet, várost, tartományt…",todos:"Összes",favoritos:"Kedvencek",clubes:"Klubok",grows:"Grow shopok",cbd:"CBD",coffee:"Coffeeshop",medic:"Gyógyászati",empresas:"Cégek",academia:"Akadémia",carne:"Kártya",
      paises:"Összes ország",zonas:"Összes régió",provincias:"Összes tartomány",cerca:"Közelemben",cerca_on:"Közel: BE",buscando:"Keresés…",
      local:"hely",locales:"hely",por_cercania:"távolság szerint",sin_result:"Nincs találat ezekkel a szűrőkkel.",vacio_h:"Itt még nincs semmi",lo_mas_cerca:"Legközelebb:",vacio_p:"A térkép most indul. Csak azok jelennek meg, akik engedélyt adtak. Van ilyened? Add hozzá, ingyen.",sin_favs:"Még nincs kedvenced. Érintsd meg a szívet egy hely mentéséhez.",de:"/",sigue:"görgess tovább",
      anade:"Add hozzá a helyed",nav_mapa:"Térkép",nav_saber:"Tudás+",nav_com:"Közösség",muy_pronto:"Hamarosan",tag_alta:"Ellenőrzött adatlap",
      llegar:"Útvonal",llamar:"Hívás",escribir:"Írás",compartir:"Megosztás",sin_contacto:"Nincs közzétett elérhetőség",ver_web:"Weboldal",
      sobre:"A helyről",direccion:"Cím",horario:"Nyitvatartás",consultar:"kérdezd",antes:"Mielőtt elindulsz",
      antes_txt:"Ezek zárt egyesületek, csak nagykorú tagoknak. Általában meghívó vagy előzetes kapcsolatfelvétel kell. Fogyassz felelősen.",
      nuevo:"Új",verificado:"Ellenőrzött",sin_verificar:"Nem ellenőrzött",estado:"állapot",sin_resenas:"még nincs értékelés",resenas:"értékelés",
      es_tuyo:"A tiéd ez a hely?",completar:"Töltsd ki az adatlapot, ingyen",avisar:"Hiba jelentése",quitar:"Töröld az adatlapom",copiado:"Vágólapra másolva",idioma:"Nyelv",
      datos_publicos:"Nyilvános forrásból, a hely nem erősítette meg."},

  ga:{en_tramite:"tuilleadh á gcur leis",ag_h:"An bhfuil tú os cionn 18?",ag_p:"Treoir eolais ar chlubanna sóisialta príobháideacha, grow shops agus siopaí CBD. <b>Ní dhíoltar cannabas anseo</b>. Do dhaoine os cionn 18 amháin.",ag_si:"Tá, tá mé os cionn 18",ag_no:"Níl, amach",ag_pie:"Bain úsáid go freagrach · Cuireann Brosin laghdú dochair chun cinn",pie_legal:"Treoir eolais · ní dhíoltar cannabas anseo · 18+ amháin · bain úsáid go freagrach",pie_lema:"coirceog amháin, cíor go leor",nav_nosotros:"Fúinn",nav_empresarios:"Do ghnólachtaí",nav_legal:"Fógra dlíthiúil",datos_verif:"foinsí poiblí, á bhfíorú",toda_espana:"An Spáinn ar fad",toda_europa:"An Eoraip ar fad",tipo_csc:"Club sóisialta",tipo_grow:"Grow shop",tipo_cbd:"Siopa CBD",tipo_medicinal:"Míochaine",tipo_empresa:"Gnó",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Cuardaigh áit, cathair, cúige…",todos:"Uile",favoritos:"Ceanáin",clubes:"Clubanna",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Míochaine",empresas:"Gnólachtaí",academia:"Acadamh",carne:"Cárta",
      paises:"Gach tír",zonas:"Gach réigiún",provincias:"Gach cúige",cerca:"In aice liom",cerca_on:"In aice: ANN",buscando:"Ag cuardach…",
      local:"áit",locales:"áit",por_cercania:"de réir achair",sin_result:"Gan torthaí leis na scagairí seo.",vacio_h:"Níl aon rud anseo fós",lo_mas_cerca:"Is gaire:",vacio_p:"Tá an léarscáil ag tosú. Ní thaispeántar ach áiteanna a thug cead dúinn. An bhfuil ceann agat? Cuir leis é, saor in aisce.",sin_favs:"Níl aon cheanán agat fós. Tapáil an croí chun áit a shábháil.",de:"as",sigue:"scrollaigh ar aghaidh",
      anade:"Cuir d'áit leis",nav_mapa:"Léarscáil",nav_saber:"Eolas+",nav_com:"Pobal",muy_pronto:"Go luath",tag_alta:"Liostáil fíoraithe",
      llegar:"Treoracha",llamar:"Glaoigh",escribir:"Scríobh",compartir:"Roinn",sin_contacto:"Gan teagmháil foilsithe",ver_web:"Féach ar an suíomh",
      sobre:"Faoin áit",direccion:"Seoladh",horario:"Uaireanta oscailte",consultar:"fiafraigh",antes:"Sula dtéann tú",
      antes_txt:"Is cumainn phríobháideacha iad seo do bhaill os cionn 18 amháin. De ghnáth teastaíonn cuireadh nó teagmháil roimh ré. Bain úsáid go freagrach.",
      nuevo:"Nua",verificado:"Fíoraithe",sin_verificar:"Gan fíorú",estado:"stádas",sin_resenas:"gan léirmheas fós",resenas:"léirmheas",
      es_tuyo:"An leatsa an áit seo?",completar:"Comhlánaigh do phróifíl, saor in aisce",avisar:"Tuairiscigh earráid",quitar:"Bain mo phróifíl",copiado:"Cóipeáilte",idioma:"Teanga",
      datos_publicos:"Ó fhoinsí poiblí, gan deimhniú ón áit."},

  lv:{en_tramite:"vēl tiek pievienoti",ag_h:"Vai esi pilngadīgs?",ag_p:"Informatīvs ceļvedis par privātiem sociālajiem klubiem, grow shop veikaliem un CBD veikaliem. <b>Šeit kaņepes netiek pārdotas</b>. Tikai pilngadīgajiem.",ag_si:"Jā, esmu vecāks par 18",ag_no:"Nē, iziet",ag_pie:"Lieto atbildīgi · Brosin atbalsta kaitējuma mazināšanu",pie_legal:"Informatīvs ceļvedis · šeit kaņepes netiek pārdotas · tikai 18+ · lieto atbildīgi",pie_lema:"viens strops, daudz kāru",nav_nosotros:"Par mums",nav_empresarios:"Uzņēmējiem",nav_legal:"Juridiskā informācija",datos_verif:"publiski avoti, tiek pārbaudīti",toda_espana:"Visa Spānija",toda_europa:"Visa Eiropa",tipo_csc:"Sociālais klubs",tipo_grow:"Grow shop",tipo_cbd:"CBD veikals",tipo_medicinal:"Medicīnisks",tipo_empresa:"Uzņēmums",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Meklē vietu, pilsētu, provinci…",todos:"Visi",favoritos:"Izlase",clubes:"Klubi",grows:"Grow shopi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicīnisks",empresas:"Uzņēmumi",academia:"Akadēmija",carne:"Karte",
      paises:"Visas valstis",zonas:"Visi reģioni",provincias:"Visas provinces",cerca:"Man tuvumā",cerca_on:"Tuvumā: IESL",buscando:"Meklē…",
      local:"vieta",locales:"vietas",por_cercania:"pēc attāluma",sin_result:"Nav rezultātu ar šiem filtriem.",vacio_h:"Šeit vēl nekā nav",lo_mas_cerca:"Tuvākais:",vacio_p:"Karte tikai sākas. Parādās tikai vietas, kas mums devušas atļauju. Tev tāda ir? Pievieno to bez maksas.",sin_favs:"Tev vēl nav izlases. Pieskaries sirsniņai, lai saglabātu vietu.",de:"no",sigue:"turpini ritināt",
      anade:"Pievieno savu vietu",nav_mapa:"Karte",nav_saber:"Zināšanas+",nav_com:"Kopiena",muy_pronto:"Drīzumā",tag_alta:"Apstiprināts ieraksts",
      llegar:"Maršruts",llamar:"Zvanīt",escribir:"Rakstīt",compartir:"Dalīties",sin_contacto:"Nav publicēta kontakta",ver_web:"Apmeklē vietni",
      sobre:"Par vietu",direccion:"Adrese",horario:"Darba laiks",consultar:"pajautā",antes:"Pirms dodies",
      antes_txt:"Šīs ir privātas biedrības tikai pilngadīgiem biedriem. Parasti nepieciešams ielūgums vai iepriekšēja saziņa. Lieto atbildīgi.",
      nuevo:"Jauns",verificado:"Apstiprināts",sin_verificar:"Neapstiprināts",estado:"statuss",sin_resenas:"vēl nav atsauksmju",resenas:"atsauksmes",
      es_tuyo:"Vai šī ir tava vieta?",completar:"Aizpildi savu profilu bez maksas",avisar:"Ziņot par kļūdu",quitar:"Noņem manu profilu",copiado:"Nokopēts",idioma:"Valoda",
      datos_publicos:"No publiskiem avotiem, vieta nav apstiprinājusi."},

  lt:{en_tramite:"dar pridedama",ag_h:"Ar tau jau 18?",ag_p:"Informacinis vadovas apie privačius socialinius klubus, grow shop'us ir CBD parduotuves. <b>Čia kanapės neparduodamos</b>. Tik pilnamečiams.",ag_si:"Taip, man virš 18",ag_no:"Ne, išeiti",ag_pie:"Vartok atsakingai · Brosin skatina žalos mažinimą",pie_legal:"Informacinis vadovas · čia kanapės neparduodamos · tik 18+ · vartok atsakingai",pie_lema:"vienas avilys, daug korių",nav_nosotros:"Apie mus",nav_empresarios:"Verslui",nav_legal:"Teisinė informacija",datos_verif:"vieši šaltiniai, tikrinami",toda_espana:"Visa Ispanija",toda_europa:"Visa Europa",tipo_csc:"Socialinis klubas",tipo_grow:"Grow shop",tipo_cbd:"CBD parduotuvė",tipo_medicinal:"Medicininis",tipo_empresa:"Įmonė",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Ieškok vietos, miesto, provincijos…",todos:"Visi",favoritos:"Mėgstami",clubes:"Klubai",grows:"Grow shopai",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicininis",empresas:"Įmonės",academia:"Akademija",carne:"Kortelė",
      paises:"Visos šalys",zonas:"Visi regionai",provincias:"Visos provincijos",cerca:"Netoli manęs",cerca_on:"Arti: ĮJ",buscando:"Ieškoma…",
      local:"vieta",locales:"vietos",por_cercania:"pagal atstumą",sin_result:"Su šiais filtrais rezultatų nėra.",vacio_h:"Čia dar nieko nėra",lo_mas_cerca:"Artimiausias:",vacio_p:"Žemėlapis tik prasideda. Rodomos tik vietos, davusios mums leidimą. Turi tokią? Pridėk ją nemokamai.",sin_favs:"Dar neturi mėgstamų. Palieskite širdelę, kad išsaugotumėte vietą.",de:"iš",sigue:"slink toliau",
      anade:"Pridėk savo vietą",nav_mapa:"Žemėlapis",nav_saber:"Žinios+",nav_com:"Bendruomenė",muy_pronto:"Netrukus",tag_alta:"Patvirtintas įrašas",
      llegar:"Maršrutas",llamar:"Skambinti",escribir:"Rašyti",compartir:"Dalintis",sin_contacto:"Kontaktai neskelbiami",ver_web:"Aplankyti svetainę",
      sobre:"Apie vietą",direccion:"Adresas",horario:"Darbo laikas",consultar:"pasiteirauk",antes:"Prieš eidamas",
      antes_txt:"Tai privačios asociacijos tik pilnamečiams nariams. Paprastai reikia kvietimo arba išankstinio kontakto. Vartok atsakingai.",
      nuevo:"Nauja",verificado:"Patvirtinta",sin_verificar:"Nepatvirtinta",estado:"būsena",sin_resenas:"atsiliepimų dar nėra",resenas:"atsiliepimai",
      es_tuyo:"Ar tai tavo vieta?",completar:"Užpildyk profilį nemokamai",avisar:"Pranešti apie klaidą",quitar:"Pašalinkite mano profilį",copiado:"Nukopijuota",idioma:"Kalba",
      datos_publicos:"Iš viešų šaltinių, vietos nepatvirtinta."},

  mt:{en_tramite:"oħrajn qed jiżdiedu",ag_h:"Għandek 'il fuq minn 18?",ag_p:"Gwida informattiva dwar klabbs soċjali privati, grow shops u ħwienet tas-CBD. <b>Hawn ma jinbiegħx kannabis</b>. Għal adulti 18+ biss.",ag_si:"Iva, għandi 'l fuq minn 18",ag_no:"Le, oħroġ",ag_pie:"Ikkonsma b'responsabbiltà · Brosin tippromwovi t-tnaqqis tal-ħsara",pie_legal:"Gwida informattiva · hawn ma jinbiegħx kannabis · 18+ biss · ikkonsma b'responsabbiltà",pie_lema:"doqqajs wieħed, ħafna xehda",nav_nosotros:"Dwarna",nav_empresarios:"Għan-negozji",nav_legal:"Avviż legali",datos_verif:"sorsi pubbliċi, qed jiġu vverifikati",toda_espana:"Spanja kollha",toda_europa:"L-Ewropa kollha",tipo_csc:"Klabb soċjali",tipo_grow:"Grow shop",tipo_cbd:"Ħanut CBD",tipo_medicinal:"Mediċinali",tipo_empresa:"Negozju",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} f'{c}",buscar:"Fittex post, belt, provinċja…",todos:"Kollha",favoritos:"Favoriti",clubes:"Klabbs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Mediċinali",empresas:"Negozji",academia:"Akkademja",carne:"Karta",
      paises:"Il-pajjiżi kollha",zonas:"Ir-reġjuni kollha",provincias:"Il-provinċji kollha",cerca:"Qrib tiegħi",cerca_on:"Qrib: ON",buscando:"Qed infittex…",
      local:"post",locales:"postijiet",por_cercania:"skont id-distanza",sin_result:"L-ebda riżultat b'dawn il-filtri.",vacio_h:"Hawn għadu m'hemm xejn",lo_mas_cerca:"L-eqreb:",vacio_p:"Il-mappa għadha tibda. Jidhru biss il-postijiet li tawna permess. Għandek wieħed? Żidu, b'xejn.",sin_favs:"Għadek m'għandekx favoriti. Agħfas il-qalb biex tissejvja post.",de:"minn",sigue:"kompli niżel",
      anade:"Żid il-post tiegħek",nav_mapa:"Mappa",nav_saber:"Kun af+",nav_com:"Komunità",muy_pronto:"Dalwaqt",tag_alta:"Reġistrazzjoni vverifikata",
      llegar:"Direzzjonijiet",llamar:"Ċempel",escribir:"Ikteb",compartir:"Aqsam",sin_contacto:"L-ebda kuntatt ippubblikat",ver_web:"Żur is-sit",
      sobre:"Dwar il-post",direccion:"Indirizz",horario:"Ħinijiet",consultar:"staqsi",antes:"Qabel tmur",
      antes_txt:"Dawn huma assoċjazzjonijiet privati għal membri adulti biss. Normalment tinħtieġ stedina jew kuntatt minn qabel. Ikkonsma b'responsabbiltà.",
      nuevo:"Ġdid",verificado:"Verifikat",sin_verificar:"Mhux verifikat",estado:"status",sin_resenas:"għadu l-ebda reċensjoni",resenas:"reċensjonijiet",
      es_tuyo:"Dan il-post tiegħek?",completar:"Imla l-profil tiegħek, b'xejn",avisar:"Irrapporta problema",quitar:"Neħħi l-profil tiegħi",copiado:"Ikkupjat",idioma:"Lingwa",
      datos_publicos:"Minn sorsi pubbliċi, mhux ikkonfermat mill-post."},

  ro:{en_tramite:"altele în curs de adăugare",ag_h:"Ai peste 18 ani?",ag_p:"Un ghid informativ despre cluburi sociale private, grow shopuri și magazine CBD. <b>Aici nu se vinde canabis</b>. Doar pentru majori.",ag_si:"Da, am peste 18 ani",ag_no:"Nu, ieși",ag_pie:"Consumă responsabil · Brosin promovează reducerea riscurilor",pie_legal:"Ghid informativ · aici nu se vinde canabis · doar 18+ · consumă responsabil",pie_lema:"un stup, mulți faguri",nav_nosotros:"Despre noi",nav_empresarios:"Pentru afaceri",nav_legal:"Notă legală",datos_verif:"surse publice, în verificare",toda_espana:"Toată Spania",toda_europa:"Toată Europa",tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Magazin CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Firmă",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} în {c}",buscar:"Caută local, oraș, provincie…",todos:"Toate",favoritos:"Favorite",clubes:"Cluburi",grows:"Grow shopuri",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Firme",academia:"Academie",carne:"Card",
      paises:"Toate țările",zonas:"Toate regiunile",provincias:"Toate provinciile",cerca:"Lângă mine",cerca_on:"Aproape: PORNIT",buscando:"Se caută…",
      local:"local",locales:"localuri",por_cercania:"după distanță",sin_result:"Niciun rezultat cu aceste filtre.",vacio_h:"Aici încă nu e nimic",lo_mas_cerca:"Cel mai aproape:",vacio_p:"Harta abia începe. Apar doar localurile care ne-au dat acordul. Ai unul? Adaugă-l, e gratuit.",sin_favs:"Nu ai încă favorite. Atinge inima pentru a salva un local.",de:"din",sigue:"continuă să derulezi",
      anade:"Adaugă-ți localul",nav_mapa:"Hartă",nav_saber:"Info+",nav_com:"Comunitate",muy_pronto:"În curând",tag_alta:"Înscriere verificată",
      llegar:"Indicații",llamar:"Sună",escribir:"Scrie",compartir:"Distribuie",sin_contacto:"Niciun contact publicat",ver_web:"Vezi site-ul",
      sobre:"Despre local",direccion:"Adresă",horario:"Program",consultar:"întreabă",antes:"Înainte să mergi",
      antes_txt:"Sunt asociații private doar pentru membri majori. De obicei ai nevoie de invitație sau de un contact prealabil. Consumă responsabil.",
      nuevo:"Nou",verificado:"Verificat",sin_verificar:"Neverificat",estado:"stare",sin_resenas:"încă fără recenzii",resenas:"recenzii",
      es_tuyo:"Este localul tău?",completar:"Completează-ți fișa, gratuit",avisar:"Raportează o eroare",quitar:"Șterge-mi fișa",copiado:"Copiat",idioma:"Limbă",
      datos_publicos:"Din surse publice, neconfirmat de local."},

  sk:{en_tramite:"ďalších sa pridáva",ag_h:"Máš 18 alebo viac?",ag_p:"Informačný sprievodca súkromnými sociálnymi klubmi, grow shopmi a CBD obchodmi. <b>Tu sa konope nepredáva</b>. Len pre osoby staršie ako 18 rokov.",ag_si:"Áno, mám 18+",ag_no:"Nie, odísť",ag_pie:"Užívaj zodpovedne · Brosin presadzuje znižovanie rizík",pie_legal:"Informačný sprievodca · tu sa konope nepredáva · len 18+ · užívaj zodpovedne",pie_lema:"jeden úľ, veľa plástov",nav_nosotros:"O nás",nav_empresarios:"Pre podnikateľov",nav_legal:"Právne informácie",datos_verif:"verejné zdroje, v overovaní",toda_espana:"Celé Španielsko",toda_europa:"Celá Európa",tipo_csc:"Sociálny klub",tipo_grow:"Grow shop",tipo_cbd:"CBD obchod",tipo_medicinal:"Liečebný",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Hľadaj podnik, mesto, provinciu…",todos:"Všetko",favoritos:"Obľúbené",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Liečebný",empresas:"Firmy",academia:"Akadémia",carne:"Preukaz",
      paises:"Všetky krajiny",zonas:"Všetky regióny",provincias:"Všetky provincie",cerca:"Blízko mňa",cerca_on:"Blízko: ZAP",buscando:"Hľadám…",
      local:"podnik",locales:"podnikov",por_cercania:"podľa vzdialenosti",sin_result:"Žiadne výsledky s týmito filtrami.",vacio_h:"Tu zatiaľ nič nie je",lo_mas_cerca:"Najbližšie:",vacio_p:"Mapa sa iba začína. Zobrazujú sa len podniky, ktoré nám dali súhlas. Máš taký? Pridaj ho zadarmo.",sin_favs:"Zatiaľ nemáš obľúbené. Klepni na srdce a podnik si ulož.",de:"z",sigue:"posúvaj ďalej",
      anade:"Pridaj svoj podnik",nav_mapa:"Mapa",nav_saber:"Vedieť+",nav_com:"Komunita",muy_pronto:"Už čoskoro",tag_alta:"Overený zápis",
      llegar:"Trasa",llamar:"Zavolať",escribir:"Napísať",compartir:"Zdieľať",sin_contacto:"Kontakt nezverejnený",ver_web:"Otvoriť web",
      sobre:"O podniku",direccion:"Adresa",horario:"Otváracie hodiny",consultar:"opýtať sa",antes:"Skôr než pôjdeš",
      antes_txt:"Ide o súkromné združenia len pre plnoletých členov. Zvyčajne treba pozvánku alebo sa vopred ozvať. Užívaj zodpovedne.",
      nuevo:"Nové",verificado:"Overené",sin_verificar:"Neoverené",estado:"stav",sin_resenas:"zatiaľ bez recenzií",resenas:"recenzií",
      es_tuyo:"Je to tvoj podnik?",completar:"Doplň svoj profil zadarmo",avisar:"Nahlásiť chybu",quitar:"Odober môj profil",copiado:"Skopírované",idioma:"Jazyk",
      datos_publicos:"Z verejných zdrojov, nepotvrdené podnikom."},

  sl:{en_tramite:"še v postopku dodajanja",ag_h:"Si polnoleten?",ag_p:"Informativni vodnik po zasebnih družbenih klubih, grow shopih in trgovinah s CBD. <b>Tu se konoplja ne prodaja</b>. Samo za polnoletne.",ag_si:"Da, star sem 18+",ag_no:"Ne, izhod",ag_pie:"Uživaj odgovorno · Brosin spodbuja zmanjševanje škode",pie_legal:"Informativni vodnik · tu se konoplja ne prodaja · samo 18+ · uživaj odgovorno",pie_lema:"en panj, veliko satja",nav_nosotros:"O nas",nav_empresarios:"Za podjetnike",nav_legal:"Pravno obvestilo",datos_verif:"javni viri, v preverjanju",toda_espana:"Vsa Španija",toda_europa:"Vsa Evropa",tipo_csc:"Družbeni klub",tipo_grow:"Grow shop",tipo_cbd:"Trgovina CBD",tipo_medicinal:"Medicinski",tipo_empresa:"Podjetje",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Išči lokal, mesto, provinco…",todos:"Vse",favoritos:"Priljubljeni",clubes:"Klubi",grows:"Grow shopi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinski",empresas:"Podjetja",academia:"Akademija",carne:"Kartica",
      paises:"Vse države",zonas:"Vse regije",provincias:"Vse province",cerca:"Blizu mene",cerca_on:"Blizu: VKLOP",buscando:"Iščem…",
      local:"lokal",locales:"lokalov",por_cercania:"po razdalji",sin_result:"Ni zadetkov s temi filtri.",vacio_h:"Tu še ni ničesar",lo_mas_cerca:"Najbližje:",vacio_p:"Zemljevid se šele začenja. Prikazani so le lokali, ki so nam dali dovoljenje. Imaš takega? Dodaj ga brezplačno.",sin_favs:"Nimaš še priljubljenih. Dotakni se srca, da shraniš lokal.",de:"od",sigue:"drsaj naprej",
      anade:"Dodaj svoj lokal",nav_mapa:"Zemljevid",nav_saber:"Znanje+",nav_com:"Skupnost",muy_pronto:"Kmalu",tag_alta:"Potrjen vpis",
      llegar:"Navodila",llamar:"Pokliči",escribir:"Piši",compartir:"Deli",sin_contacto:"Ni objavljenega kontakta",ver_web:"Obišči spletno stran",
      sobre:"O lokalu",direccion:"Naslov",horario:"Odpiralni čas",consultar:"vprašaj",antes:"Preden greš",
      antes_txt:"To so zasebna društva samo za polnoletne člane. Običajno potrebuješ vabilo ali predhoden stik. Uživaj odgovorno.",
      nuevo:"Novo",verificado:"Preverjeno",sin_verificar:"Nepreverjeno",estado:"stanje",sin_resenas:"še ni mnenj",resenas:"mnenj",
      es_tuyo:"Je to tvoj lokal?",completar:"Dopolni svoj vpis, brezplačno",avisar:"Prijavi napako",quitar:"Odstrani moj vpis",copiado:"Kopirano",idioma:"Jezik",
      datos_publicos:"Iz javnih virov, lokal ni potrdil."},

  no:{en_tramite:"flere på vei inn",ag_h:"Er du over 18?",ag_p:"En informasjonsguide til private social clubs, grow shops og CBD-butikker. <b>Her selges ingen cannabis</b>. Kun for 18+.",ag_si:"Ja, jeg er over 18",ag_no:"Nei, lukk",ag_pie:"Bruk ansvarlig · Brosin fremmer skadereduksjon",pie_legal:"Informasjonsguide · her selges ingen cannabis · kun 18+ · bruk ansvarlig",pie_lema:"én kube, mange tavler",nav_nosotros:"Om oss",nav_empresarios:"For næringsdrivende",nav_legal:"Juridisk informasjon",datos_verif:"offentlige kilder, under verifisering",toda_espana:"Hele Spania",toda_europa:"Hele Europa",tipo_csc:"Sosial klubb",tipo_grow:"Grow shop",tipo_cbd:"CBD-butikk",tipo_medicinal:"Medisinsk",tipo_empresa:"Bedrift",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Søk sted, by, provins…",todos:"Alle",favoritos:"Favoritter",clubes:"Klubber",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medisinsk",empresas:"Bedrifter",academia:"Akademi",carne:"Kort",
      paises:"Alle land",zonas:"Alle regioner",provincias:"Alle provinser",cerca:"Nær meg",cerca_on:"Nær: PÅ",buscando:"Søker…",
      local:"sted",locales:"steder",por_cercania:"etter avstand",sin_result:"Ingen treff med disse filtrene.",vacio_h:"Her er det ingenting ennå",lo_mas_cerca:"Nærmest:",vacio_p:"Kartet er så vidt i gang. Bare steder som har gitt oss lov vises. Har du et? Legg det til, gratis.",sin_favs:"Du har ingen favoritter ennå. Trykk på hjertet for å lagre et sted.",de:"av",sigue:"fortsett å bla",
      anade:"Legg til stedet ditt",nav_mapa:"Kart",nav_saber:"Vite+",nav_com:"Fellesskap",muy_pronto:"Snart",tag_alta:"Bekreftet oppføring",
      llegar:"Veibeskrivelse",llamar:"Ring",escribir:"Skriv",compartir:"Del",sin_contacto:"Ingen kontakt publisert",ver_web:"Besøk nettsiden",
      sobre:"Om stedet",direccion:"Adresse",horario:"Åpningstider",consultar:"spør dem",antes:"Før du drar",
      antes_txt:"Dette er private foreninger kun for myndige medlemmer. Vanligvis trengs en invitasjon eller kontakt på forhånd. Bruk ansvarlig.",
      nuevo:"Ny",verificado:"Verifisert",sin_verificar:"Ikke verifisert",estado:"status",sin_resenas:"ingen anmeldelser ennå",resenas:"anmeldelser",
      es_tuyo:"Er dette ditt sted?",completar:"Fyll ut oppføringen, gratis",avisar:"Meld fra om feil",quitar:"Fjern oppføringen min",copiado:"Kopiert",idioma:"Språk",
      datos_publicos:"Fra offentlige kilder, ikke bekreftet av stedet."},

  ru:{en_tramite:"ещё в процессе добавления",ag_h:"Тебе есть 18?",ag_p:"Информационный справочник по частным социальным клубам, гроушопам и магазинам CBD. <b>Здесь каннабис не продаётся</b>. Только для совершеннолетних.",ag_si:"Да, мне есть 18",ag_no:"Нет, выйти",ag_pie:"Употребляй ответственно · Brosin выступает за снижение вреда",pie_legal:"Информационный справочник · здесь каннабис не продаётся · только 18+ · употребляй ответственно",pie_lema:"один улей, много сот",nav_nosotros:"О нас",nav_empresarios:"Для бизнеса",nav_legal:"Правовая информация",datos_verif:"открытые источники, проверяются",toda_espana:"Вся Испания",toda_europa:"Вся Европа",tipo_csc:"Социальный клуб",tipo_grow:"Гроушоп",tipo_cbd:"Магазин CBD",tipo_medicinal:"Медицинский",tipo_empresa:"Компания",tipo_coffeeshop:"Кофешоп",
      en_ciudad:"{t} в городе {c}",buscar:"Поиск заведения, города, провинции…",todos:"Все",favoritos:"Избранное",clubes:"Клубы",grows:"Гроушопы",cbd:"CBD",coffee:"Кофешоп",medic:"Медицинский",empresas:"Компании",academia:"Академия",carne:"Карта",
      paises:"Все страны",zonas:"Все регионы",provincias:"Все провинции",cerca:"Рядом со мной",cerca_on:"Рядом: ВКЛ",buscando:"Поиск…",
      local:"место",locales:"мест",por_cercania:"по расстоянию",sin_result:"Нет результатов с этими фильтрами.",vacio_h:"Здесь пока ничего нет",lo_mas_cerca:"Ближайшее:",vacio_p:"Карта только начинается. Показываются только заведения, которые дали нам согласие. Есть такое? Добавь его бесплатно.",sin_favs:"У тебя пока нет избранного. Нажми на сердечко, чтобы сохранить место.",de:"из",sigue:"листай дальше",
      anade:"Добавь своё заведение",nav_mapa:"Карта",nav_saber:"Знания+",nav_com:"Сообщество",muy_pronto:"Совсем скоро",tag_alta:"Подтверждённая запись",
      llegar:"Маршрут",llamar:"Позвонить",escribir:"Написать",compartir:"Поделиться",sin_contacto:"Контакты не опубликованы",ver_web:"Открыть сайт",
      sobre:"О месте",direccion:"Адрес",horario:"Часы работы",consultar:"уточнить",antes:"Прежде чем идти",
      antes_txt:"Это частные объединения только для совершеннолетних членов. Обычно нужно приглашение или предварительный контакт. Употребляй ответственно.",
      nuevo:"Новое",verificado:"Проверено",sin_verificar:"Не проверено",estado:"статус",sin_resenas:"пока нет отзывов",resenas:"отзывов",
      es_tuyo:"Это твоё заведение?",completar:"Заполни карточку бесплатно",avisar:"Сообщить об ошибке",quitar:"Убрать с карты",copiado:"Скопировано",idioma:"Язык",
      datos_publicos:"Из открытых источников, не подтверждено заведением."},

  uk:{en_tramite:"ще в процесі додавання",ag_h:"Тобі є 18?",ag_p:"Інформаційний довідник із приватних соціальних клубів, гроушопів і магазинів CBD. <b>Тут канабіс не продається</b>. Лише для повнолітніх.",ag_si:"Так, мені є 18",ag_no:"Ні, вийти",ag_pie:"Вживай відповідально · Brosin виступає за зниження шкоди",pie_legal:"Інформаційний довідник · тут канабіс не продається · лише 18+ · вживай відповідально",pie_lema:"один вулик, багато стільників",nav_nosotros:"Про нас",nav_empresarios:"Для бізнесу",nav_legal:"Правова інформація",datos_verif:"відкриті джерела, перевіряються",toda_espana:"Уся Іспанія",toda_europa:"Уся Європа",tipo_csc:"Соціальний клуб",tipo_grow:"Гроушоп",tipo_cbd:"Магазин CBD",tipo_medicinal:"Медичний",tipo_empresa:"Компанія",tipo_coffeeshop:"Кофішоп",
      en_ciudad:"{t} у місті {c}",buscar:"Пошук закладу, міста, провінції…",todos:"Усі",favoritos:"Обране",clubes:"Клуби",grows:"Гроушопи",cbd:"CBD",coffee:"Кофішоп",medic:"Медичний",empresas:"Компанії",academia:"Академія",carne:"Картка",
      paises:"Усі країни",zonas:"Усі регіони",provincias:"Усі провінції",cerca:"Поруч зі мною",cerca_on:"Поруч: УВІМК",buscando:"Пошук…",
      local:"місце",locales:"місць",por_cercania:"за відстанню",sin_result:"Немає результатів із цими фільтрами.",vacio_h:"Тут поки нічого немає",lo_mas_cerca:"Найближче:",vacio_p:"Карта лише починається. Показуються тільки заклади, які дали нам згоду. Маєш такий? Додай його безкоштовно.",sin_favs:"У тебе ще немає обраного. Торкнись сердечка, щоб зберегти місце.",de:"з",sigue:"гортай далі",
      anade:"Додай свій заклад",nav_mapa:"Карта",nav_saber:"Знання+",nav_com:"Спільнота",muy_pronto:"Незабаром",tag_alta:"Підтверджений запис",
      llegar:"Маршрут",llamar:"Подзвонити",escribir:"Написати",compartir:"Поділитися",sin_contacto:"Контактів не опубліковано",ver_web:"Відкрити сайт",
      sobre:"Про місце",direccion:"Адреса",horario:"Години роботи",consultar:"уточнити",antes:"Перш ніж іти",
      antes_txt:"Це приватні об'єднання лише для повнолітніх членів. Зазвичай потрібне запрошення або попередній контакт. Вживай відповідально.",
      nuevo:"Нове",verificado:"Перевірено",sin_verificar:"Не перевірено",estado:"статус",sin_resenas:"поки немає відгуків",resenas:"відгуків",
      es_tuyo:"Це твій заклад?",completar:"Заповни картку безкоштовно",avisar:"Повідомити про помилку",quitar:"Прибрати з карти",copiado:"Скопійовано",idioma:"Мова",
      datos_publicos:"З відкритих джерел, заклад не підтвердив."},

  tr:{en_tramite:"daha ekleniyor",ag_h:"18 yaşından büyük müsün?",ag_p:"Özel sosyal kulüpler, grow shop'lar ve CBD mağazaları hakkında bilgi rehberi. <b>Burada esrar satılmaz</b>. Sadece 18 yaş üstü.",ag_si:"Evet, 18 yaşından büyüğüm",ag_no:"Hayır, çık",ag_pie:"Sorumlu tüket · Brosin zarar azaltmayı savunur",pie_legal:"Bilgi rehberi · burada esrar satılmaz · sadece 18+ · sorumlu tüket",pie_lema:"tek kovan, çok petek",nav_nosotros:"Hakkımızda",nav_empresarios:"İşletmeler için",nav_legal:"Yasal bilgi",datos_verif:"kamuya açık kaynaklar, doğrulanıyor",toda_espana:"Tüm İspanya",toda_europa:"Tüm Avrupa",tipo_csc:"Sosyal kulüp",tipo_grow:"Grow shop",tipo_cbd:"CBD mağazası",tipo_medicinal:"Tıbbi",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{c} şehrinde {t}",buscar:"Mekan, şehir, eyalet ara…",todos:"Tümü",favoritos:"Favoriler",clubes:"Kulüpler",grows:"Grow shoplar",cbd:"CBD",coffee:"Coffeeshop",medic:"Tıbbi",empresas:"Firmalar",academia:"Akademi",carne:"Kart",
      paises:"Tüm ülkeler",zonas:"Tüm bölgeler",provincias:"Tüm eyaletler",cerca:"Yakınımda",cerca_on:"Yakın: AÇIK",buscando:"Aranıyor…",
      local:"mekan",locales:"mekan",por_cercania:"mesafeye göre",sin_result:"Bu filtrelerle sonuç yok.",vacio_h:"Burada henüz bir şey yok",lo_mas_cerca:"En yakın:",vacio_p:"Harita daha yeni başlıyor. Sadece bize izin veren mekânlar görünüyor. Seninki var mı? Ücretsiz ekle.",sin_favs:"Henüz favorin yok. Bir mekanı kaydetmek için kalbe dokun.",de:"/",sigue:"kaydırmaya devam et",
      anade:"Mekanını ekle",nav_mapa:"Harita",nav_saber:"Bilgi+",nav_com:"Topluluk",muy_pronto:"Çok yakında",tag_alta:"Doğrulanmış kayıt",
      llegar:"Yol tarifi",llamar:"Ara",escribir:"Yaz",compartir:"Paylaş",sin_contacto:"Yayımlanmış iletişim yok",ver_web:"Siteyi ziyaret et",
      sobre:"Mekan hakkında",direccion:"Adres",horario:"Çalışma saatleri",consultar:"sor",antes:"Gitmeden önce",
      antes_txt:"Bunlar yalnızca reşit üyelere açık özel derneklerdir. Genellikle davet ya da önceden iletişim gerekir. Sorumlu tüket.",
      nuevo:"Yeni",verificado:"Doğrulandı",sin_verificar:"Doğrulanmadı",estado:"durum",sin_resenas:"henüz yorum yok",resenas:"yorum",
      es_tuyo:"Burası senin mekanın mı?",completar:"Kaydını ücretsiz tamamla",avisar:"Hata bildir",quitar:"Kaydımı kaldır",copiado:"Kopyalandı",idioma:"Dil",
      datos_publicos:"Kamuya açık kaynaklardan, mekan tarafından doğrulanmadı."}

  };

  var LANGS = [["es","Español"],["en","English"],["de","Deutsch"],["fr","Français"],["nl","Nederlands"],
    ["it","Italiano"],["pt","Português"],["sv","Svenska"],["pl","Polski"],["bg","Български"],["hr","Hrvatski"],
    ["cs","Čeština"],["da","Dansk"],["et","Eesti"],["fi","Suomi"],["el","Ελληνικά"],["hu","Magyar"],
    ["ga","Gaeilge"],["lv","Latviešu"],["lt","Lietuvių"],["mt","Malti"],["ro","Română"],["sk","Slovenčina"],
    ["sl","Slovenščina"],["no","Norsk"],["ru","Русский"],["uk","Українська"],["tr","Türkçe"]];

  /* Misma clave que brosin-i18n.js: el idioma se comparte con el formulario */
  function lang() {
    var s;
    try { s = localStorage.getItem('brosin_lang'); } catch (e) {}
    if (s && D[s]) return s;
    var n = (navigator.language || navigator.userLanguage || 'es').slice(0, 2).toLowerCase();
    return D[n] ? n : 'es';
  }
  function setLang(l) {
    if (!D[l]) return;
    try { localStorage.setItem('brosin_lang', l); } catch (e) {}
    document.documentElement.setAttribute('lang', l);
  }
  /* Si falta una clave, mejor caer a inglés que a español: para un griego
     o un finlandés el inglés es una red de seguridad; el castellano no. */
  function t(k) {
    var l = lang();
    return (D[l] && D[l][k]) || (D.en && D.en[k]) || D.es[k] || k;
  }

  /* Descripción automática para las fichas sin texto propio.
     Solo repite el tipo y la ciudad: no se inventa nada. */
  function autoDesc(club) {
    var tipo = t('tipo_' + club.type) || t('tipo_grow');
    return t('en_ciudad').replace('{t}', tipo).replace('{c}', club.city || '');
  }

  root.BrosinApp = { t: t, lang: lang, setLang: setLang, langs: LANGS, dict: D, autoDesc: autoDesc };

})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = globalThis.BrosinApp;
