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

  es:{tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Tienda CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Empresa",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} en {c}",buscar:"Buscar local, ciudad, provincia…",todos:"Todos",favoritos:"Favoritos",clubes:"Clubes",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Empresas",academia:"Academia",carne:"Carné",
      paises:"Todos los países",zonas:"Todas las zonas",provincias:"Todas las provincias",cerca:"Cerca de mí",cerca_on:"Cerca: ON",buscando:"Buscando…",
      local:"local",locales:"locales",por_cercania:"por cercanía",sin_result:"No hay resultados con estos filtros.",sin_favs:"Aún no has guardado ningún favorito. Toca el corazón de un local para tenerlo a mano.",de:"de",sigue:"sigue bajando",
      anade:"Añade tu local",nav_mapa:"Mapa",nav_saber:"Saber+",nav_ev:"Eventos",nav_com:"Comunidad",muy_pronto:"Muy pronto",
      llegar:"Cómo llegar",llamar:"Llamar",escribir:"Escribir",compartir:"Compartir",sin_contacto:"Sin contacto publicado",ver_web:"Visitar la web",
      sobre:"Sobre el local",direccion:"Dirección",horario:"Horario",consultar:"consultar",antes:"Antes de ir",
      antes_txt:"Los locales son asociaciones privadas solo para socios mayores de edad. Suele hacer falta invitación o contacto previo. Consume con responsabilidad.",
      nuevo:"Nuevo",verificado:"Verificado",sin_verificar:"Sin verificar",estado:"estado",sin_resenas:"sin reseñas aún",resenas:"reseñas",
      es_tuyo:"¿Es tu local?",completar:"Completa tu ficha gratis",avisar:"Avisar de un error",copiado:"Copiado al portapapeles",idioma:"Idioma",
      datos_publicos:"Datos de fuentes públicas, sin verificar por el local."},

  en:{tipo_csc:"Social club",tipo_grow:"Grow shop",tipo_cbd:"CBD store",tipo_medicinal:"Medical",tipo_empresa:"Business",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Search place, city, province…",todos:"All",favoritos:"Favourites",clubes:"Clubs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medical",empresas:"Businesses",academia:"Academy",carne:"Card",
      paises:"All countries",zonas:"All regions",provincias:"All provinces",cerca:"Near me",cerca_on:"Near: ON",buscando:"Searching…",
      local:"place",locales:"places",por_cercania:"by distance",sin_result:"No results with these filters.",sin_favs:"You haven't saved any favourites yet. Tap the heart on a place to keep it handy.",de:"of",sigue:"keep scrolling",
      anade:"Add your place",nav_mapa:"Map",nav_saber:"Know+",nav_ev:"Events",nav_com:"Community",muy_pronto:"Coming soon",
      llegar:"Directions",llamar:"Call",escribir:"Email",compartir:"Share",sin_contacto:"No contact published",ver_web:"Visit website",
      sobre:"About this place",direccion:"Address",horario:"Opening hours",consultar:"ask them",antes:"Before you go",
      antes_txt:"These are private members-only associations for adults. You usually need an invitation or to get in touch first. Consume responsibly.",
      nuevo:"New",verificado:"Verified",sin_verificar:"Unverified",estado:"status",sin_resenas:"no reviews yet",resenas:"reviews",
      es_tuyo:"Is this your place?",completar:"Complete your listing, free",avisar:"Report a problem",copiado:"Copied to clipboard",idioma:"Language",
      datos_publicos:"From public sources, not confirmed by the venue."},

  de:{tipo_csc:"Social Club",tipo_grow:"Grow Shop",tipo_cbd:"CBD-Laden",tipo_medicinal:"Medizinisch",tipo_empresa:"Unternehmen",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Ort, Stadt oder Provinz suchen…",todos:"Alle",favoritos:"Favoriten",clubes:"Clubs",grows:"Grow Shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medizinisch",empresas:"Unternehmen",academia:"Akademie",carne:"Ausweis",
      paises:"Alle Länder",zonas:"Alle Regionen",provincias:"Alle Provinzen",cerca:"In meiner Nähe",cerca_on:"Nähe: AN",buscando:"Suche…",
      local:"Ort",locales:"Orte",por_cercania:"nach Entfernung",sin_result:"Keine Treffer mit diesen Filtern.",sin_favs:"Du hast noch keine Favoriten. Tippe auf das Herz, um einen Ort zu merken.",de:"von",sigue:"weiter scrollen",
      anade:"Ort eintragen",nav_mapa:"Karte",nav_saber:"Wissen+",nav_ev:"Events",nav_com:"Community",muy_pronto:"Demnächst",
      llegar:"Route",llamar:"Anrufen",escribir:"E-Mail",compartir:"Teilen",sin_contacto:"Kein Kontakt veröffentlicht",ver_web:"Website besuchen",
      sobre:"Über diesen Ort",direccion:"Adresse",horario:"Öffnungszeiten",consultar:"nachfragen",antes:"Bevor du hingehst",
      antes_txt:"Das sind private Vereine nur für volljährige Mitglieder. Meist braucht man eine Einladung oder muss vorher Kontakt aufnehmen. Konsumiere verantwortungsvoll.",
      nuevo:"Neu",verificado:"Verifiziert",sin_verificar:"Nicht verifiziert",estado:"Status",sin_resenas:"noch keine Bewertungen",resenas:"Bewertungen",
      es_tuyo:"Ist das dein Laden?",completar:"Eintrag kostenlos vervollständigen",avisar:"Fehler melden",copiado:"In die Zwischenablage kopiert",idioma:"Sprache",
      datos_publicos:"Aus öffentlichen Quellen, nicht vom Betrieb bestätigt."},

  fr:{tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Boutique CBD",tipo_medicinal:"Médicinal",tipo_empresa:"Entreprise",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} à {c}",buscar:"Chercher un lieu, une ville, une province…",todos:"Tous",favoritos:"Favoris",clubes:"Clubs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Médicinal",empresas:"Entreprises",academia:"Académie",carne:"Carte",
      paises:"Tous les pays",zonas:"Toutes les régions",provincias:"Toutes les provinces",cerca:"Près de moi",cerca_on:"Proximité : ON",buscando:"Recherche…",
      local:"lieu",locales:"lieux",por_cercania:"par distance",sin_result:"Aucun résultat avec ces filtres.",sin_favs:"Vous n'avez pas encore de favoris. Touchez le cœur d'un lieu pour le garder sous la main.",de:"sur",sigue:"continuez à défiler",
      anade:"Ajouter votre lieu",nav_mapa:"Carte",nav_saber:"Savoir+",nav_ev:"Événements",nav_com:"Communauté",muy_pronto:"Bientôt",
      llegar:"Itinéraire",llamar:"Appeler",escribir:"Écrire",compartir:"Partager",sin_contacto:"Aucun contact publié",ver_web:"Voir le site",
      sobre:"À propos du lieu",direccion:"Adresse",horario:"Horaires",consultar:"à demander",antes:"Avant d'y aller",
      antes_txt:"Ce sont des associations privées réservées aux membres majeurs. Il faut généralement une invitation ou un contact préalable. Consommez de façon responsable.",
      nuevo:"Nouveau",verificado:"Vérifié",sin_verificar:"Non vérifié",estado:"statut",sin_resenas:"pas encore d'avis",resenas:"avis",
      es_tuyo:"C'est votre établissement ?",completar:"Complétez votre fiche, gratuit",avisar:"Signaler une erreur",copiado:"Copié dans le presse-papiers",idioma:"Langue",
      datos_publicos:"Sources publiques, non confirmé par l'établissement."},

  nl:{tipo_csc:"Social club",tipo_grow:"Growshop",tipo_cbd:"CBD-winkel",tipo_medicinal:"Medicinaal",tipo_empresa:"Bedrijf",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} in {c}",buscar:"Zoek plek, stad of provincie…",todos:"Alle",favoritos:"Favorieten",clubes:"Clubs",grows:"Growshops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinaal",empresas:"Bedrijven",academia:"Academie",carne:"Pas",
      paises:"Alle landen",zonas:"Alle regio's",provincias:"Alle provincies",cerca:"Bij mij in de buurt",cerca_on:"Dichtbij: AAN",buscando:"Zoeken…",
      local:"plek",locales:"plekken",por_cercania:"op afstand",sin_result:"Geen resultaten met deze filters.",sin_favs:"Je hebt nog geen favorieten. Tik op het hartje om een plek te bewaren.",de:"van",sigue:"blijf scrollen",
      anade:"Voeg je zaak toe",nav_mapa:"Kaart",nav_saber:"Weten+",nav_ev:"Evenementen",nav_com:"Community",muy_pronto:"Binnenkort",
      llegar:"Route",llamar:"Bellen",escribir:"Mailen",compartir:"Delen",sin_contacto:"Geen contact gepubliceerd",ver_web:"Website bekijken",
      sobre:"Over deze plek",direccion:"Adres",horario:"Openingstijden",consultar:"navragen",antes:"Voordat je gaat",
      antes_txt:"Dit zijn besloten verenigingen, alleen voor meerderjarige leden. Meestal heb je een uitnodiging nodig of moet je vooraf contact opnemen. Gebruik verantwoord.",
      nuevo:"Nieuw",verificado:"Geverifieerd",sin_verificar:"Niet geverifieerd",estado:"status",sin_resenas:"nog geen reviews",resenas:"reviews",
      es_tuyo:"Is dit jouw zaak?",completar:"Vul je vermelding gratis aan",avisar:"Fout melden",copiado:"Gekopieerd naar klembord",idioma:"Taal",
      datos_publicos:"Uit openbare bronnen, niet bevestigd door de zaak."},

  it:{tipo_csc:"Club sociale",tipo_grow:"Grow shop",tipo_cbd:"Negozio CBD",tipo_medicinal:"Medicinale",tipo_empresa:"Azienda",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} a {c}",buscar:"Cerca locale, città, provincia…",todos:"Tutti",favoritos:"Preferiti",clubes:"Club",grows:"Grow shop",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinale",empresas:"Aziende",academia:"Accademia",carne:"Tessera",
      paises:"Tutti i paesi",zonas:"Tutte le zone",provincias:"Tutte le province",cerca:"Vicino a me",cerca_on:"Vicino: ON",buscando:"Ricerca…",
      local:"locale",locales:"locali",por_cercania:"per distanza",sin_result:"Nessun risultato con questi filtri.",sin_favs:"Non hai ancora preferiti. Tocca il cuore di un locale per tenerlo a portata di mano.",de:"di",sigue:"continua a scorrere",
      anade:"Aggiungi il tuo locale",nav_mapa:"Mappa",nav_saber:"Sapere+",nav_ev:"Eventi",nav_com:"Comunità",muy_pronto:"Prossimamente",
      llegar:"Indicazioni",llamar:"Chiama",escribir:"Scrivi",compartir:"Condividi",sin_contacto:"Nessun contatto pubblicato",ver_web:"Vai al sito",
      sobre:"Sul locale",direccion:"Indirizzo",horario:"Orari",consultar:"da chiedere",antes:"Prima di andare",
      antes_txt:"Sono associazioni private riservate ai soci maggiorenni. Di solito serve un invito o un contatto preventivo. Consuma responsabilmente.",
      nuevo:"Nuovo",verificado:"Verificato",sin_verificar:"Non verificato",estado:"stato",sin_resenas:"ancora nessuna recensione",resenas:"recensioni",
      es_tuyo:"È il tuo locale?",completar:"Completa la scheda, gratis",avisar:"Segnala un errore",copiado:"Copiato negli appunti",idioma:"Lingua",
      datos_publicos:"Da fonti pubbliche, non confermato dal locale."},

  pt:{tipo_csc:"Clube social",tipo_grow:"Grow shop",tipo_cbd:"Loja de CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Empresa",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} em {c}",buscar:"Procurar local, cidade, distrito…",todos:"Todos",favoritos:"Favoritos",clubes:"Clubes",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Empresas",academia:"Academia",carne:"Cartão",
      paises:"Todos os países",zonas:"Todas as zonas",provincias:"Todos os distritos",cerca:"Perto de mim",cerca_on:"Perto: ON",buscando:"A procurar…",
      local:"local",locales:"locais",por_cercania:"por proximidade",sin_result:"Sem resultados com estes filtros.",sin_favs:"Ainda não guardaste favoritos. Toca no coração de um local para o teres à mão.",de:"de",sigue:"continua a descer",
      anade:"Adiciona o teu local",nav_mapa:"Mapa",nav_saber:"Saber+",nav_ev:"Eventos",nav_com:"Comunidade",muy_pronto:"Muito em breve",
      llegar:"Como chegar",llamar:"Ligar",escribir:"Escrever",compartir:"Partilhar",sin_contacto:"Sem contacto publicado",ver_web:"Visitar o site",
      sobre:"Sobre o local",direccion:"Morada",horario:"Horário",consultar:"a confirmar",antes:"Antes de ir",
      antes_txt:"São associações privadas só para sócios maiores de idade. Normalmente é preciso convite ou contacto prévio. Consome com responsabilidade.",
      nuevo:"Novo",verificado:"Verificado",sin_verificar:"Por verificar",estado:"estado",sin_resenas:"ainda sem avaliações",resenas:"avaliações",
      es_tuyo:"O local é teu?",completar:"Completa a tua ficha, grátis",avisar:"Reportar um erro",copiado:"Copiado para a área de transferência",idioma:"Idioma",
      datos_publicos:"De fontes públicas, sem confirmação do local."},

  sv:{tipo_csc:"Social club",tipo_grow:"Grow shop",tipo_cbd:"CBD-butik",tipo_medicinal:"Medicinsk",tipo_empresa:"Företag",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Sök ställe, stad, provins…",todos:"Alla",favoritos:"Favoriter",clubes:"Klubbar",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinsk",empresas:"Företag",academia:"Akademi",carne:"Kort",
      paises:"Alla länder",zonas:"Alla regioner",provincias:"Alla provinser",cerca:"Nära mig",cerca_on:"Nära: PÅ",buscando:"Söker…",
      local:"ställe",locales:"ställen",por_cercania:"efter avstånd",sin_result:"Inga träffar med dessa filter.",sin_favs:"Du har inga favoriter än. Tryck på hjärtat för att spara ett ställe.",de:"av",sigue:"fortsätt scrolla",
      anade:"Lägg till ditt ställe",nav_mapa:"Karta",nav_saber:"Veta+",nav_ev:"Event",nav_com:"Community",muy_pronto:"Snart",
      llegar:"Vägbeskrivning",llamar:"Ring",escribir:"Mejla",compartir:"Dela",sin_contacto:"Ingen kontakt publicerad",ver_web:"Besök webbplatsen",
      sobre:"Om stället",direccion:"Adress",horario:"Öppettider",consultar:"fråga dem",antes:"Innan du åker",
      antes_txt:"Det här är privata föreningar endast för myndiga medlemmar. Oftast krävs en inbjudan eller kontakt i förväg. Konsumera ansvarsfullt.",
      nuevo:"Ny",verificado:"Verifierad",sin_verificar:"Ej verifierad",estado:"status",sin_resenas:"inga omdömen än",resenas:"omdömen",
      es_tuyo:"Är stället ditt?",completar:"Fyll i din sida, gratis",avisar:"Rapportera fel",copiado:"Kopierat",idioma:"Språk",
      datos_publicos:"Från offentliga källor, ej bekräftat av stället."},

  pl:{tipo_csc:"Klub społeczny",tipo_grow:"Grow shop",tipo_cbd:"Sklep CBD",tipo_medicinal:"Medyczny",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} w {c}",buscar:"Szukaj miejsca, miasta, prowincji…",todos:"Wszystkie",favoritos:"Ulubione",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Medyczny",empresas:"Firmy",academia:"Akademia",carne:"Karta",
      paises:"Wszystkie kraje",zonas:"Wszystkie regiony",provincias:"Wszystkie prowincje",cerca:"Blisko mnie",cerca_on:"Blisko: WŁ",buscando:"Szukam…",
      local:"miejsce",locales:"miejsc",por_cercania:"wg odległości",sin_result:"Brak wyników dla tych filtrów.",sin_favs:"Nie masz jeszcze ulubionych. Dotknij serca, aby zapisać miejsce.",de:"z",sigue:"przewijaj dalej",
      anade:"Dodaj swoje miejsce",nav_mapa:"Mapa",nav_saber:"Wiedza+",nav_ev:"Wydarzenia",nav_com:"Społeczność",muy_pronto:"Wkrótce",
      llegar:"Dojazd",llamar:"Zadzwoń",escribir:"Napisz",compartir:"Udostępnij",sin_contacto:"Brak kontaktu",ver_web:"Zobacz stronę",
      sobre:"O miejscu",direccion:"Adres",horario:"Godziny otwarcia",consultar:"zapytaj",antes:"Zanim pójdziesz",
      antes_txt:"To prywatne stowarzyszenia wyłącznie dla pełnoletnich członków. Zwykle potrzebne jest zaproszenie lub wcześniejszy kontakt. Używaj odpowiedzialnie.",
      nuevo:"Nowe",verificado:"Zweryfikowane",sin_verificar:"Niezweryfikowane",estado:"status",sin_resenas:"brak opinii",resenas:"opinii",
      es_tuyo:"To Twoje miejsce?",completar:"Uzupełnij wizytówkę, za darmo",avisar:"Zgłoś błąd",copiado:"Skopiowano",idioma:"Język",
      datos_publicos:"Ze źródeł publicznych, niepotwierdzone przez lokal."},

  bg:{tipo_csc:"Социален клуб",tipo_grow:"Гроу шоп",tipo_cbd:"CBD магазин",tipo_medicinal:"Медицински",tipo_empresa:"Фирма",tipo_coffeeshop:"Кофишоп",
      en_ciudad:"{t} в {c}",buscar:"Търси място, град, провинция…",todos:"Всички",favoritos:"Любими",clubes:"Клубове",grows:"Гроу шопове",cbd:"CBD",coffee:"Кофишоп",medic:"Медицински",empresas:"Фирми",academia:"Академия",carne:"Карта",
      paises:"Всички държави",zonas:"Всички региони",provincias:"Всички провинции",cerca:"Близо до мен",cerca_on:"Близо: ВКЛ",buscando:"Търсене…",
      local:"място",locales:"места",por_cercania:"по разстояние",sin_result:"Няма резултати с тези филтри.",sin_favs:"Още нямаш любими. Докосни сърцето, за да запазиш място.",de:"от",sigue:"продължи надолу",
      anade:"Добави своето място",nav_mapa:"Карта",nav_saber:"Знание+",nav_ev:"Събития",nav_com:"Общност",muy_pronto:"Съвсем скоро",
      llegar:"Маршрут",llamar:"Обади се",escribir:"Пиши",compartir:"Сподели",sin_contacto:"Няма публикуван контакт",ver_web:"Виж сайта",
      sobre:"За мястото",direccion:"Адрес",horario:"Работно време",consultar:"попитай",antes:"Преди да отидеш",
      antes_txt:"Това са частни сдружения само за пълнолетни членове. Обикновено е нужна покана или предварителен контакт. Употребявай отговорно.",
      nuevo:"Ново",verificado:"Потвърдено",sin_verificar:"Непотвърдено",estado:"статус",sin_resenas:"още няма отзиви",resenas:"отзива",
      es_tuyo:"Твое ли е мястото?",completar:"Попълни профила, безплатно",avisar:"Съобщи за грешка",copiado:"Копирано",idioma:"Език",
      datos_publicos:"От публични източници, непотвърдено от обекта."},

  hr:{tipo_csc:"Društveni klub",tipo_grow:"Grow shop",tipo_cbd:"CBD trgovina",tipo_medicinal:"Medicinski",tipo_empresa:"Tvrtka",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} u {c}",buscar:"Traži mjesto, grad, provinciju…",todos:"Sve",favoritos:"Favoriti",clubes:"Klubovi",grows:"Grow shopovi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinski",empresas:"Tvrtke",academia:"Akademija",carne:"Iskaznica",
      paises:"Sve zemlje",zonas:"Sve regije",provincias:"Sve provincije",cerca:"Blizu mene",cerca_on:"Blizu: UKLJ",buscando:"Tražim…",
      local:"mjesto",locales:"mjesta",por_cercania:"po udaljenosti",sin_result:"Nema rezultata s ovim filtrima.",sin_favs:"Još nemaš favorita. Dodirni srce da spremiš mjesto.",de:"od",sigue:"nastavi listati",
      anade:"Dodaj svoje mjesto",nav_mapa:"Karta",nav_saber:"Znanje+",nav_ev:"Događaji",nav_com:"Zajednica",muy_pronto:"Uskoro",
      llegar:"Upute",llamar:"Nazovi",escribir:"Piši",compartir:"Podijeli",sin_contacto:"Nema objavljenog kontakta",ver_web:"Posjeti stranicu",
      sobre:"O mjestu",direccion:"Adresa",horario:"Radno vrijeme",consultar:"pitaj",antes:"Prije odlaska",
      antes_txt:"Ovo su privatne udruge samo za punoljetne članove. Obično treba pozivnica ili prethodni kontakt. Konzumiraj odgovorno.",
      nuevo:"Novo",verificado:"Provjereno",sin_verificar:"Neprovjereno",estado:"status",sin_resenas:"još nema recenzija",resenas:"recenzija",
      es_tuyo:"Je li ovo tvoje mjesto?",completar:"Dopuni svoj profil, besplatno",avisar:"Prijavi grešku",copiado:"Kopirano",idioma:"Jezik",
      datos_publicos:"Iz javnih izvora, nije potvrdio lokal."},

  cs:{tipo_csc:"Sociální klub",tipo_grow:"Grow shop",tipo_cbd:"CBD obchod",tipo_medicinal:"Léčebný",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Hledat podnik, město, provincii…",todos:"Vše",favoritos:"Oblíbené",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Léčebný",empresas:"Firmy",academia:"Akademie",carne:"Průkaz",
      paises:"Všechny země",zonas:"Všechny regiony",provincias:"Všechny provincie",cerca:"Blízko mě",cerca_on:"Blízko: ZAP",buscando:"Hledám…",
      local:"podnik",locales:"podniků",por_cercania:"podle vzdálenosti",sin_result:"Žádné výsledky s těmito filtry.",sin_favs:"Zatím nemáš oblíbené. Klepni na srdce a podnik si ulož.",de:"z",sigue:"posouvej dál",
      anade:"Přidej svůj podnik",nav_mapa:"Mapa",nav_saber:"Vědět+",nav_ev:"Akce",nav_com:"Komunita",muy_pronto:"Už brzy",
      llegar:"Trasa",llamar:"Zavolat",escribir:"Napsat",compartir:"Sdílet",sin_contacto:"Kontakt nezveřejněn",ver_web:"Otevřít web",
      sobre:"O podniku",direccion:"Adresa",horario:"Otevírací doba",consultar:"zeptat se",antes:"Než vyrazíš",
      antes_txt:"Jde o soukromé spolky jen pro plnoleté členy. Obvykle je potřeba pozvánka nebo se předem ozvat. Užívej zodpovědně.",
      nuevo:"Nové",verificado:"Ověřeno",sin_verificar:"Neověřeno",estado:"stav",sin_resenas:"zatím bez recenzí",resenas:"recenzí",
      es_tuyo:"Je to tvůj podnik?",completar:"Doplň svůj profil zdarma",avisar:"Nahlásit chybu",copiado:"Zkopírováno",idioma:"Jazyk",
      datos_publicos:"Z veřejných zdrojů, nepotvrzeno podnikem."},

  da:{tipo_csc:"Social klub",tipo_grow:"Grow shop",tipo_cbd:"CBD-butik",tipo_medicinal:"Medicinsk",tipo_empresa:"Virksomhed",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Søg sted, by, provins…",todos:"Alle",favoritos:"Favoritter",clubes:"Klubber",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinsk",empresas:"Virksomheder",academia:"Akademi",carne:"Kort",
      paises:"Alle lande",zonas:"Alle regioner",provincias:"Alle provinser",cerca:"Tæt på mig",cerca_on:"Nær: TIL",buscando:"Søger…",
      local:"sted",locales:"steder",por_cercania:"efter afstand",sin_result:"Ingen resultater med disse filtre.",sin_favs:"Du har ingen favoritter endnu. Tryk på hjertet for at gemme et sted.",de:"af",sigue:"bliv ved med at scrolle",
      anade:"Tilføj dit sted",nav_mapa:"Kort",nav_saber:"Viden+",nav_ev:"Events",nav_com:"Fællesskab",muy_pronto:"Snart",
      llegar:"Rute",llamar:"Ring",escribir:"Skriv",compartir:"Del",sin_contacto:"Ingen kontakt offentliggjort",ver_web:"Besøg hjemmesiden",
      sobre:"Om stedet",direccion:"Adresse",horario:"Åbningstider",consultar:"spørg dem",antes:"Før du tager afsted",
      antes_txt:"Det er private foreninger kun for myndige medlemmer. Man skal som regel have en invitation eller tage kontakt først. Brug ansvarligt.",
      nuevo:"Ny",verificado:"Verificeret",sin_verificar:"Ikke verificeret",estado:"status",sin_resenas:"ingen anmeldelser endnu",resenas:"anmeldelser",
      es_tuyo:"Er det dit sted?",completar:"Udfyld din profil, gratis",avisar:"Rapportér en fejl",copiado:"Kopieret",idioma:"Sprog",
      datos_publicos:"Fra offentlige kilder, ikke bekræftet af stedet."},

  et:{tipo_csc:"Sotsiaalklubi",tipo_grow:"Grow shop",tipo_cbd:"CBD pood",tipo_medicinal:"Meditsiiniline",tipo_empresa:"Ettevõte",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Otsi kohta, linna, provintsi…",todos:"Kõik",favoritos:"Lemmikud",clubes:"Klubid",grows:"Grow shopid",cbd:"CBD",coffee:"Coffeeshop",medic:"Meditsiiniline",empresas:"Ettevõtted",academia:"Akadeemia",carne:"Kaart",
      paises:"Kõik riigid",zonas:"Kõik piirkonnad",provincias:"Kõik provintsid",cerca:"Minu lähedal",cerca_on:"Lähedal: SEES",buscando:"Otsin…",
      local:"koht",locales:"kohta",por_cercania:"kauguse järgi",sin_result:"Nende filtritega tulemusi pole.",sin_favs:"Sul pole veel lemmikuid. Puuduta südant, et koht salvestada.",de:"/",sigue:"keri edasi",
      anade:"Lisa oma koht",nav_mapa:"Kaart",nav_saber:"Teadmised+",nav_ev:"Sündmused",nav_com:"Kogukond",muy_pronto:"Varsti",
      llegar:"Juhised",llamar:"Helista",escribir:"Kirjuta",compartir:"Jaga",sin_contacto:"Kontakti pole avaldatud",ver_web:"Ava veebileht",
      sobre:"Kohast",direccion:"Aadress",horario:"Lahtiolekuajad",consultar:"küsi",antes:"Enne minekut",
      antes_txt:"Need on eraühingud ainult täisealistele liikmetele. Tavaliselt on vaja kutset või eelnevat kontakti. Tarbi vastutustundlikult.",
      nuevo:"Uus",verificado:"Kinnitatud",sin_verificar:"Kinnitamata",estado:"olek",sin_resenas:"arvustusi veel pole",resenas:"arvustust",
      es_tuyo:"Kas see on sinu koht?",completar:"Täienda oma profiili tasuta",avisar:"Teata veast",copiado:"Kopeeritud",idioma:"Keel",
      datos_publicos:"Avalikest allikatest, koha poolt kinnitamata."},

  fi:{tipo_csc:"Sosiaaliklubi",tipo_grow:"Grow shop",tipo_cbd:"CBD-kauppa",tipo_medicinal:"Lääkinnällinen",tipo_empresa:"Yritys",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t}, {c}",buscar:"Hae paikka, kaupunki, maakunta…",todos:"Kaikki",favoritos:"Suosikit",clubes:"Klubit",grows:"Grow shopit",cbd:"CBD",coffee:"Coffeeshop",medic:"Lääkinnällinen",empresas:"Yritykset",academia:"Akatemia",carne:"Kortti",
      paises:"Kaikki maat",zonas:"Kaikki alueet",provincias:"Kaikki maakunnat",cerca:"Lähelläni",cerca_on:"Lähellä: PÄÄLLÄ",buscando:"Haetaan…",
      local:"paikka",locales:"paikkaa",por_cercania:"etäisyyden mukaan",sin_result:"Ei tuloksia näillä suodattimilla.",sin_favs:"Sinulla ei ole vielä suosikkeja. Napauta sydäntä tallentaaksesi paikan.",de:"/",sigue:"jatka vierittämistä",
      anade:"Lisää paikkasi",nav_mapa:"Kartta",nav_saber:"Tieto+",nav_ev:"Tapahtumat",nav_com:"Yhteisö",muy_pronto:"Pian",
      llegar:"Reitti",llamar:"Soita",escribir:"Kirjoita",compartir:"Jaa",sin_contacto:"Ei julkaistua yhteystietoa",ver_web:"Avaa sivusto",
      sobre:"Tietoa paikasta",direccion:"Osoite",horario:"Aukioloajat",consultar:"kysy",antes:"Ennen kuin menet",
      antes_txt:"Nämä ovat yksityisiä yhdistyksiä vain täysi-ikäisille jäsenille. Yleensä tarvitaan kutsu tai yhteydenotto etukäteen. Käytä vastuullisesti.",
      nuevo:"Uusi",verificado:"Vahvistettu",sin_verificar:"Vahvistamaton",estado:"tila",sin_resenas:"ei vielä arvioita",resenas:"arviota",
      es_tuyo:"Onko tämä sinun paikkasi?",completar:"Täydennä tietosi ilmaiseksi",avisar:"Ilmoita virheestä",copiado:"Kopioitu",idioma:"Kieli",
      datos_publicos:"Julkisista lähteistä, paikan vahvistamatta."},

  el:{tipo_csc:"Κοινωνικός σύλλογος",tipo_grow:"Grow shop",tipo_cbd:"Κατάστημα CBD",tipo_medicinal:"Ιατρικό",tipo_empresa:"Επιχείρηση",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} στη {c}",buscar:"Αναζήτηση χώρου, πόλης, επαρχίας…",todos:"Όλα",favoritos:"Αγαπημένα",clubes:"Σύλλογοι",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Ιατρικό",empresas:"Επιχειρήσεις",academia:"Ακαδημία",carne:"Κάρτα",
      paises:"Όλες οι χώρες",zonas:"Όλες οι περιοχές",provincias:"Όλες οι επαρχίες",cerca:"Κοντά μου",cerca_on:"Κοντά: ΟΝ",buscando:"Αναζήτηση…",
      local:"χώρος",locales:"χώροι",por_cercania:"κατά απόσταση",sin_result:"Κανένα αποτέλεσμα με αυτά τα φίλτρα.",sin_favs:"Δεν έχεις αγαπημένα ακόμη. Πάτα την καρδιά για να αποθηκεύσεις έναν χώρο.",de:"από",sigue:"συνέχισε προς τα κάτω",
      anade:"Πρόσθεσε τον χώρο σου",nav_mapa:"Χάρτης",nav_saber:"Γνώση+",nav_ev:"Εκδηλώσεις",nav_com:"Κοινότητα",muy_pronto:"Πολύ σύντομα",
      llegar:"Οδηγίες",llamar:"Κλήση",escribir:"Γράψε",compartir:"Κοινοποίηση",sin_contacto:"Δεν έχει δημοσιευτεί επικοινωνία",ver_web:"Επίσκεψη ιστότοπου",
      sobre:"Σχετικά με τον χώρο",direccion:"Διεύθυνση",horario:"Ώρες λειτουργίας",consultar:"ρώτησε",antes:"Πριν πας",
      antes_txt:"Είναι ιδιωτικοί σύλλογοι μόνο για ενήλικα μέλη. Συνήθως χρειάζεται πρόσκληση ή προηγούμενη επικοινωνία. Κατανάλωσε υπεύθυνα.",
      nuevo:"Νέο",verificado:"Επιβεβαιωμένο",sin_verificar:"Μη επιβεβαιωμένο",estado:"κατάσταση",sin_resenas:"καμία κριτική ακόμη",resenas:"κριτικές",
      es_tuyo:"Δικός σου χώρος;",completar:"Συμπλήρωσε την καταχώρηση, δωρεάν",avisar:"Αναφορά σφάλματος",copiado:"Αντιγράφηκε",idioma:"Γλώσσα",
      datos_publicos:"Από δημόσιες πηγές, χωρίς επιβεβαίωση από τον χώρο."},

  hu:{tipo_csc:"Közösségi klub",tipo_grow:"Grow shop",tipo_cbd:"CBD bolt",tipo_medicinal:"Gyógyászati",tipo_empresa:"Cég",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Keress helyet, várost, tartományt…",todos:"Összes",favoritos:"Kedvencek",clubes:"Klubok",grows:"Grow shopok",cbd:"CBD",coffee:"Coffeeshop",medic:"Gyógyászati",empresas:"Cégek",academia:"Akadémia",carne:"Kártya",
      paises:"Összes ország",zonas:"Összes régió",provincias:"Összes tartomány",cerca:"Közelemben",cerca_on:"Közel: BE",buscando:"Keresés…",
      local:"hely",locales:"hely",por_cercania:"távolság szerint",sin_result:"Nincs találat ezekkel a szűrőkkel.",sin_favs:"Még nincs kedvenced. Érintsd meg a szívet egy hely mentéséhez.",de:"/",sigue:"görgess tovább",
      anade:"Add hozzá a helyed",nav_mapa:"Térkép",nav_saber:"Tudás+",nav_ev:"Események",nav_com:"Közösség",muy_pronto:"Hamarosan",
      llegar:"Útvonal",llamar:"Hívás",escribir:"Írás",compartir:"Megosztás",sin_contacto:"Nincs közzétett elérhetőség",ver_web:"Weboldal",
      sobre:"A helyről",direccion:"Cím",horario:"Nyitvatartás",consultar:"kérdezd",antes:"Mielőtt elindulsz",
      antes_txt:"Ezek zárt egyesületek, csak nagykorú tagoknak. Általában meghívó vagy előzetes kapcsolatfelvétel kell. Fogyassz felelősen.",
      nuevo:"Új",verificado:"Ellenőrzött",sin_verificar:"Nem ellenőrzött",estado:"állapot",sin_resenas:"még nincs értékelés",resenas:"értékelés",
      es_tuyo:"A tiéd ez a hely?",completar:"Töltsd ki az adatlapot, ingyen",avisar:"Hiba jelentése",copiado:"Vágólapra másolva",idioma:"Nyelv",
      datos_publicos:"Nyilvános forrásból, a hely nem erősítette meg."},

  ga:{tipo_csc:"Club sóisialta",tipo_grow:"Grow shop",tipo_cbd:"Siopa CBD",tipo_medicinal:"Míochaine",tipo_empresa:"Gnó",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Cuardaigh áit, cathair, cúige…",todos:"Uile",favoritos:"Ceanáin",clubes:"Clubanna",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Míochaine",empresas:"Gnólachtaí",academia:"Acadamh",carne:"Cárta",
      paises:"Gach tír",zonas:"Gach réigiún",provincias:"Gach cúige",cerca:"In aice liom",cerca_on:"In aice: ANN",buscando:"Ag cuardach…",
      local:"áit",locales:"áit",por_cercania:"de réir achair",sin_result:"Gan torthaí leis na scagairí seo.",sin_favs:"Níl aon cheanán agat fós. Tapáil an croí chun áit a shábháil.",de:"as",sigue:"scrollaigh ar aghaidh",
      anade:"Cuir d'áit leis",nav_mapa:"Léarscáil",nav_saber:"Eolas+",nav_ev:"Imeachtaí",nav_com:"Pobal",muy_pronto:"Go luath",
      llegar:"Treoracha",llamar:"Glaoigh",escribir:"Scríobh",compartir:"Roinn",sin_contacto:"Gan teagmháil foilsithe",ver_web:"Féach ar an suíomh",
      sobre:"Faoin áit",direccion:"Seoladh",horario:"Uaireanta oscailte",consultar:"fiafraigh",antes:"Sula dtéann tú",
      antes_txt:"Is cumainn phríobháideacha iad seo do bhaill os cionn 18 amháin. De ghnáth teastaíonn cuireadh nó teagmháil roimh ré. Bain úsáid go freagrach.",
      nuevo:"Nua",verificado:"Fíoraithe",sin_verificar:"Gan fíorú",estado:"stádas",sin_resenas:"gan léirmheas fós",resenas:"léirmheas",
      es_tuyo:"An leatsa an áit seo?",completar:"Comhlánaigh do phróifíl, saor in aisce",avisar:"Tuairiscigh earráid",copiado:"Cóipeáilte",idioma:"Teanga",
      datos_publicos:"Ó fhoinsí poiblí, gan deimhniú ón áit."},

  lv:{tipo_csc:"Sociālais klubs",tipo_grow:"Grow shop",tipo_cbd:"CBD veikals",tipo_medicinal:"Medicīnisks",tipo_empresa:"Uzņēmums",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Meklē vietu, pilsētu, provinci…",todos:"Visi",favoritos:"Izlase",clubes:"Klubi",grows:"Grow shopi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicīnisks",empresas:"Uzņēmumi",academia:"Akadēmija",carne:"Karte",
      paises:"Visas valstis",zonas:"Visi reģioni",provincias:"Visas provinces",cerca:"Man tuvumā",cerca_on:"Tuvumā: IESL",buscando:"Meklē…",
      local:"vieta",locales:"vietas",por_cercania:"pēc attāluma",sin_result:"Nav rezultātu ar šiem filtriem.",sin_favs:"Tev vēl nav izlases. Pieskaries sirsniņai, lai saglabātu vietu.",de:"no",sigue:"turpini ritināt",
      anade:"Pievieno savu vietu",nav_mapa:"Karte",nav_saber:"Zināšanas+",nav_ev:"Pasākumi",nav_com:"Kopiena",muy_pronto:"Drīzumā",
      llegar:"Maršruts",llamar:"Zvanīt",escribir:"Rakstīt",compartir:"Dalīties",sin_contacto:"Nav publicēta kontakta",ver_web:"Apmeklē vietni",
      sobre:"Par vietu",direccion:"Adrese",horario:"Darba laiks",consultar:"pajautā",antes:"Pirms dodies",
      antes_txt:"Šīs ir privātas biedrības tikai pilngadīgiem biedriem. Parasti nepieciešams ielūgums vai iepriekšēja saziņa. Lieto atbildīgi.",
      nuevo:"Jauns",verificado:"Apstiprināts",sin_verificar:"Neapstiprināts",estado:"statuss",sin_resenas:"vēl nav atsauksmju",resenas:"atsauksmes",
      es_tuyo:"Vai šī ir tava vieta?",completar:"Aizpildi savu profilu bez maksas",avisar:"Ziņot par kļūdu",copiado:"Nokopēts",idioma:"Valoda",
      datos_publicos:"No publiskiem avotiem, vieta nav apstiprinājusi."},

  lt:{tipo_csc:"Socialinis klubas",tipo_grow:"Grow shop",tipo_cbd:"CBD parduotuvė",tipo_medicinal:"Medicininis",tipo_empresa:"Įmonė",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} – {c}",buscar:"Ieškok vietos, miesto, provincijos…",todos:"Visi",favoritos:"Mėgstami",clubes:"Klubai",grows:"Grow shopai",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicininis",empresas:"Įmonės",academia:"Akademija",carne:"Kortelė",
      paises:"Visos šalys",zonas:"Visi regionai",provincias:"Visos provincijos",cerca:"Netoli manęs",cerca_on:"Arti: ĮJ",buscando:"Ieškoma…",
      local:"vieta",locales:"vietos",por_cercania:"pagal atstumą",sin_result:"Su šiais filtrais rezultatų nėra.",sin_favs:"Dar neturi mėgstamų. Palieskite širdelę, kad išsaugotumėte vietą.",de:"iš",sigue:"slink toliau",
      anade:"Pridėk savo vietą",nav_mapa:"Žemėlapis",nav_saber:"Žinios+",nav_ev:"Renginiai",nav_com:"Bendruomenė",muy_pronto:"Netrukus",
      llegar:"Maršrutas",llamar:"Skambinti",escribir:"Rašyti",compartir:"Dalintis",sin_contacto:"Kontaktai neskelbiami",ver_web:"Aplankyti svetainę",
      sobre:"Apie vietą",direccion:"Adresas",horario:"Darbo laikas",consultar:"pasiteirauk",antes:"Prieš eidamas",
      antes_txt:"Tai privačios asociacijos tik pilnamečiams nariams. Paprastai reikia kvietimo arba išankstinio kontakto. Vartok atsakingai.",
      nuevo:"Nauja",verificado:"Patvirtinta",sin_verificar:"Nepatvirtinta",estado:"būsena",sin_resenas:"atsiliepimų dar nėra",resenas:"atsiliepimai",
      es_tuyo:"Ar tai tavo vieta?",completar:"Užpildyk profilį nemokamai",avisar:"Pranešti apie klaidą",copiado:"Nukopijuota",idioma:"Kalba",
      datos_publicos:"Iš viešų šaltinių, vietos nepatvirtinta."},

  mt:{tipo_csc:"Klabb soċjali",tipo_grow:"Grow shop",tipo_cbd:"Ħanut CBD",tipo_medicinal:"Mediċinali",tipo_empresa:"Negozju",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} f'{c}",buscar:"Fittex post, belt, provinċja…",todos:"Kollha",favoritos:"Favoriti",clubes:"Klabbs",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Mediċinali",empresas:"Negozji",academia:"Akkademja",carne:"Karta",
      paises:"Il-pajjiżi kollha",zonas:"Ir-reġjuni kollha",provincias:"Il-provinċji kollha",cerca:"Qrib tiegħi",cerca_on:"Qrib: ON",buscando:"Qed infittex…",
      local:"post",locales:"postijiet",por_cercania:"skont id-distanza",sin_result:"L-ebda riżultat b'dawn il-filtri.",sin_favs:"Għadek m'għandekx favoriti. Agħfas il-qalb biex tissejvja post.",de:"minn",sigue:"kompli niżel",
      anade:"Żid il-post tiegħek",nav_mapa:"Mappa",nav_saber:"Kun af+",nav_ev:"Avvenimenti",nav_com:"Komunità",muy_pronto:"Dalwaqt",
      llegar:"Direzzjonijiet",llamar:"Ċempel",escribir:"Ikteb",compartir:"Aqsam",sin_contacto:"L-ebda kuntatt ippubblikat",ver_web:"Żur is-sit",
      sobre:"Dwar il-post",direccion:"Indirizz",horario:"Ħinijiet",consultar:"staqsi",antes:"Qabel tmur",
      antes_txt:"Dawn huma assoċjazzjonijiet privati għal membri adulti biss. Normalment tinħtieġ stedina jew kuntatt minn qabel. Ikkonsma b'responsabbiltà.",
      nuevo:"Ġdid",verificado:"Verifikat",sin_verificar:"Mhux verifikat",estado:"status",sin_resenas:"għadu l-ebda reċensjoni",resenas:"reċensjonijiet",
      es_tuyo:"Dan il-post tiegħek?",completar:"Imla l-profil tiegħek, b'xejn",avisar:"Irrapporta problema",copiado:"Ikkupjat",idioma:"Lingwa",
      datos_publicos:"Minn sorsi pubbliċi, mhux ikkonfermat mill-post."},

  ro:{tipo_csc:"Club social",tipo_grow:"Grow shop",tipo_cbd:"Magazin CBD",tipo_medicinal:"Medicinal",tipo_empresa:"Firmă",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} în {c}",buscar:"Caută local, oraș, provincie…",todos:"Toate",favoritos:"Favorite",clubes:"Cluburi",grows:"Grow shopuri",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinal",empresas:"Firme",academia:"Academie",carne:"Card",
      paises:"Toate țările",zonas:"Toate regiunile",provincias:"Toate provinciile",cerca:"Lângă mine",cerca_on:"Aproape: PORNIT",buscando:"Se caută…",
      local:"local",locales:"localuri",por_cercania:"după distanță",sin_result:"Niciun rezultat cu aceste filtre.",sin_favs:"Nu ai încă favorite. Atinge inima pentru a salva un local.",de:"din",sigue:"continuă să derulezi",
      anade:"Adaugă-ți localul",nav_mapa:"Hartă",nav_saber:"Info+",nav_ev:"Evenimente",nav_com:"Comunitate",muy_pronto:"În curând",
      llegar:"Indicații",llamar:"Sună",escribir:"Scrie",compartir:"Distribuie",sin_contacto:"Niciun contact publicat",ver_web:"Vezi site-ul",
      sobre:"Despre local",direccion:"Adresă",horario:"Program",consultar:"întreabă",antes:"Înainte să mergi",
      antes_txt:"Sunt asociații private doar pentru membri majori. De obicei ai nevoie de invitație sau de un contact prealabil. Consumă responsabil.",
      nuevo:"Nou",verificado:"Verificat",sin_verificar:"Neverificat",estado:"stare",sin_resenas:"încă fără recenzii",resenas:"recenzii",
      es_tuyo:"Este localul tău?",completar:"Completează-ți fișa, gratuit",avisar:"Raportează o eroare",copiado:"Copiat",idioma:"Limbă",
      datos_publicos:"Din surse publice, neconfirmat de local."},

  sk:{tipo_csc:"Sociálny klub",tipo_grow:"Grow shop",tipo_cbd:"CBD obchod",tipo_medicinal:"Liečebný",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Hľadaj podnik, mesto, provinciu…",todos:"Všetko",favoritos:"Obľúbené",clubes:"Kluby",grows:"Grow shopy",cbd:"CBD",coffee:"Coffeeshop",medic:"Liečebný",empresas:"Firmy",academia:"Akadémia",carne:"Preukaz",
      paises:"Všetky krajiny",zonas:"Všetky regióny",provincias:"Všetky provincie",cerca:"Blízko mňa",cerca_on:"Blízko: ZAP",buscando:"Hľadám…",
      local:"podnik",locales:"podnikov",por_cercania:"podľa vzdialenosti",sin_result:"Žiadne výsledky s týmito filtrami.",sin_favs:"Zatiaľ nemáš obľúbené. Klepni na srdce a podnik si ulož.",de:"z",sigue:"posúvaj ďalej",
      anade:"Pridaj svoj podnik",nav_mapa:"Mapa",nav_saber:"Vedieť+",nav_ev:"Podujatia",nav_com:"Komunita",muy_pronto:"Už čoskoro",
      llegar:"Trasa",llamar:"Zavolať",escribir:"Napísať",compartir:"Zdieľať",sin_contacto:"Kontakt nezverejnený",ver_web:"Otvoriť web",
      sobre:"O podniku",direccion:"Adresa",horario:"Otváracie hodiny",consultar:"opýtať sa",antes:"Skôr než pôjdeš",
      antes_txt:"Ide o súkromné združenia len pre plnoletých členov. Zvyčajne treba pozvánku alebo sa vopred ozvať. Užívaj zodpovedne.",
      nuevo:"Nové",verificado:"Overené",sin_verificar:"Neoverené",estado:"stav",sin_resenas:"zatiaľ bez recenzií",resenas:"recenzií",
      es_tuyo:"Je to tvoj podnik?",completar:"Doplň svoj profil zadarmo",avisar:"Nahlásiť chybu",copiado:"Skopírované",idioma:"Jazyk",
      datos_publicos:"Z verejných zdrojov, nepotvrdené podnikom."},

  sl:{tipo_csc:"Družbeni klub",tipo_grow:"Grow shop",tipo_cbd:"Trgovina CBD",tipo_medicinal:"Medicinski",tipo_empresa:"Podjetje",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} v {c}",buscar:"Išči lokal, mesto, provinco…",todos:"Vse",favoritos:"Priljubljeni",clubes:"Klubi",grows:"Grow shopi",cbd:"CBD",coffee:"Coffeeshop",medic:"Medicinski",empresas:"Podjetja",academia:"Akademija",carne:"Kartica",
      paises:"Vse države",zonas:"Vse regije",provincias:"Vse province",cerca:"Blizu mene",cerca_on:"Blizu: VKLOP",buscando:"Iščem…",
      local:"lokal",locales:"lokalov",por_cercania:"po razdalji",sin_result:"Ni zadetkov s temi filtri.",sin_favs:"Nimaš še priljubljenih. Dotakni se srca, da shraniš lokal.",de:"od",sigue:"drsaj naprej",
      anade:"Dodaj svoj lokal",nav_mapa:"Zemljevid",nav_saber:"Znanje+",nav_ev:"Dogodki",nav_com:"Skupnost",muy_pronto:"Kmalu",
      llegar:"Navodila",llamar:"Pokliči",escribir:"Piši",compartir:"Deli",sin_contacto:"Ni objavljenega kontakta",ver_web:"Obišči spletno stran",
      sobre:"O lokalu",direccion:"Naslov",horario:"Odpiralni čas",consultar:"vprašaj",antes:"Preden greš",
      antes_txt:"To so zasebna društva samo za polnoletne člane. Običajno potrebuješ vabilo ali predhoden stik. Uživaj odgovorno.",
      nuevo:"Novo",verificado:"Preverjeno",sin_verificar:"Nepreverjeno",estado:"stanje",sin_resenas:"še ni mnenj",resenas:"mnenj",
      es_tuyo:"Je to tvoj lokal?",completar:"Dopolni svoj vpis, brezplačno",avisar:"Prijavi napako",copiado:"Kopirano",idioma:"Jezik",
      datos_publicos:"Iz javnih virov, lokal ni potrdil."},

  no:{tipo_csc:"Sosial klubb",tipo_grow:"Grow shop",tipo_cbd:"CBD-butikk",tipo_medicinal:"Medisinsk",tipo_empresa:"Bedrift",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{t} i {c}",buscar:"Søk sted, by, provins…",todos:"Alle",favoritos:"Favoritter",clubes:"Klubber",grows:"Grow shops",cbd:"CBD",coffee:"Coffeeshop",medic:"Medisinsk",empresas:"Bedrifter",academia:"Akademi",carne:"Kort",
      paises:"Alle land",zonas:"Alle regioner",provincias:"Alle provinser",cerca:"Nær meg",cerca_on:"Nær: PÅ",buscando:"Søker…",
      local:"sted",locales:"steder",por_cercania:"etter avstand",sin_result:"Ingen treff med disse filtrene.",sin_favs:"Du har ingen favoritter ennå. Trykk på hjertet for å lagre et sted.",de:"av",sigue:"fortsett å bla",
      anade:"Legg til stedet ditt",nav_mapa:"Kart",nav_saber:"Vite+",nav_ev:"Arrangementer",nav_com:"Fellesskap",muy_pronto:"Snart",
      llegar:"Veibeskrivelse",llamar:"Ring",escribir:"Skriv",compartir:"Del",sin_contacto:"Ingen kontakt publisert",ver_web:"Besøk nettsiden",
      sobre:"Om stedet",direccion:"Adresse",horario:"Åpningstider",consultar:"spør dem",antes:"Før du drar",
      antes_txt:"Dette er private foreninger kun for myndige medlemmer. Vanligvis trengs en invitasjon eller kontakt på forhånd. Bruk ansvarlig.",
      nuevo:"Ny",verificado:"Verifisert",sin_verificar:"Ikke verifisert",estado:"status",sin_resenas:"ingen anmeldelser ennå",resenas:"anmeldelser",
      es_tuyo:"Er dette ditt sted?",completar:"Fyll ut oppføringen, gratis",avisar:"Meld fra om feil",copiado:"Kopiert",idioma:"Språk",
      datos_publicos:"Fra offentlige kilder, ikke bekreftet av stedet."},

  ru:{tipo_csc:"Социальный клуб",tipo_grow:"Гроушоп",tipo_cbd:"Магазин CBD",tipo_medicinal:"Медицинский",tipo_empresa:"Компания",tipo_coffeeshop:"Кофешоп",
      en_ciudad:"{t} в городе {c}",buscar:"Поиск заведения, города, провинции…",todos:"Все",favoritos:"Избранное",clubes:"Клубы",grows:"Гроушопы",cbd:"CBD",coffee:"Кофешоп",medic:"Медицинский",empresas:"Компании",academia:"Академия",carne:"Карта",
      paises:"Все страны",zonas:"Все регионы",provincias:"Все провинции",cerca:"Рядом со мной",cerca_on:"Рядом: ВКЛ",buscando:"Поиск…",
      local:"место",locales:"мест",por_cercania:"по расстоянию",sin_result:"Нет результатов с этими фильтрами.",sin_favs:"У тебя пока нет избранного. Нажми на сердечко, чтобы сохранить место.",de:"из",sigue:"листай дальше",
      anade:"Добавь своё заведение",nav_mapa:"Карта",nav_saber:"Знания+",nav_ev:"События",nav_com:"Сообщество",muy_pronto:"Совсем скоро",
      llegar:"Маршрут",llamar:"Позвонить",escribir:"Написать",compartir:"Поделиться",sin_contacto:"Контакты не опубликованы",ver_web:"Открыть сайт",
      sobre:"О месте",direccion:"Адрес",horario:"Часы работы",consultar:"уточнить",antes:"Прежде чем идти",
      antes_txt:"Это частные объединения только для совершеннолетних членов. Обычно нужно приглашение или предварительный контакт. Употребляй ответственно.",
      nuevo:"Новое",verificado:"Проверено",sin_verificar:"Не проверено",estado:"статус",sin_resenas:"пока нет отзывов",resenas:"отзывов",
      es_tuyo:"Это твоё заведение?",completar:"Заполни карточку бесплатно",avisar:"Сообщить об ошибке",copiado:"Скопировано",idioma:"Язык",
      datos_publicos:"Из открытых источников, не подтверждено заведением."},

  uk:{tipo_csc:"Соціальний клуб",tipo_grow:"Гроушоп",tipo_cbd:"Магазин CBD",tipo_medicinal:"Медичний",tipo_empresa:"Компанія",tipo_coffeeshop:"Кофішоп",
      en_ciudad:"{t} у місті {c}",buscar:"Пошук закладу, міста, провінції…",todos:"Усі",favoritos:"Обране",clubes:"Клуби",grows:"Гроушопи",cbd:"CBD",coffee:"Кофішоп",medic:"Медичний",empresas:"Компанії",academia:"Академія",carne:"Картка",
      paises:"Усі країни",zonas:"Усі регіони",provincias:"Усі провінції",cerca:"Поруч зі мною",cerca_on:"Поруч: УВІМК",buscando:"Пошук…",
      local:"місце",locales:"місць",por_cercania:"за відстанню",sin_result:"Немає результатів із цими фільтрами.",sin_favs:"У тебе ще немає обраного. Торкнись сердечка, щоб зберегти місце.",de:"з",sigue:"гортай далі",
      anade:"Додай свій заклад",nav_mapa:"Карта",nav_saber:"Знання+",nav_ev:"Події",nav_com:"Спільнота",muy_pronto:"Незабаром",
      llegar:"Маршрут",llamar:"Подзвонити",escribir:"Написати",compartir:"Поділитися",sin_contacto:"Контактів не опубліковано",ver_web:"Відкрити сайт",
      sobre:"Про місце",direccion:"Адреса",horario:"Години роботи",consultar:"уточнити",antes:"Перш ніж іти",
      antes_txt:"Це приватні об'єднання лише для повнолітніх членів. Зазвичай потрібне запрошення або попередній контакт. Вживай відповідально.",
      nuevo:"Нове",verificado:"Перевірено",sin_verificar:"Не перевірено",estado:"статус",sin_resenas:"поки немає відгуків",resenas:"відгуків",
      es_tuyo:"Це твій заклад?",completar:"Заповни картку безкоштовно",avisar:"Повідомити про помилку",copiado:"Скопійовано",idioma:"Мова",
      datos_publicos:"З відкритих джерел, заклад не підтвердив."},

  tr:{tipo_csc:"Sosyal kulüp",tipo_grow:"Grow shop",tipo_cbd:"CBD mağazası",tipo_medicinal:"Tıbbi",tipo_empresa:"Firma",tipo_coffeeshop:"Coffeeshop",
      en_ciudad:"{c} şehrinde {t}",buscar:"Mekan, şehir, eyalet ara…",todos:"Tümü",favoritos:"Favoriler",clubes:"Kulüpler",grows:"Grow shoplar",cbd:"CBD",coffee:"Coffeeshop",medic:"Tıbbi",empresas:"Firmalar",academia:"Akademi",carne:"Kart",
      paises:"Tüm ülkeler",zonas:"Tüm bölgeler",provincias:"Tüm eyaletler",cerca:"Yakınımda",cerca_on:"Yakın: AÇIK",buscando:"Aranıyor…",
      local:"mekan",locales:"mekan",por_cercania:"mesafeye göre",sin_result:"Bu filtrelerle sonuç yok.",sin_favs:"Henüz favorin yok. Bir mekanı kaydetmek için kalbe dokun.",de:"/",sigue:"kaydırmaya devam et",
      anade:"Mekanını ekle",nav_mapa:"Harita",nav_saber:"Bilgi+",nav_ev:"Etkinlikler",nav_com:"Topluluk",muy_pronto:"Çok yakında",
      llegar:"Yol tarifi",llamar:"Ara",escribir:"Yaz",compartir:"Paylaş",sin_contacto:"Yayımlanmış iletişim yok",ver_web:"Siteyi ziyaret et",
      sobre:"Mekan hakkında",direccion:"Adres",horario:"Çalışma saatleri",consultar:"sor",antes:"Gitmeden önce",
      antes_txt:"Bunlar yalnızca reşit üyelere açık özel derneklerdir. Genellikle davet ya da önceden iletişim gerekir. Sorumlu tüket.",
      nuevo:"Yeni",verificado:"Doğrulandı",sin_verificar:"Doğrulanmadı",estado:"durum",sin_resenas:"henüz yorum yok",resenas:"yorum",
      es_tuyo:"Burası senin mekanın mı?",completar:"Kaydını ücretsiz tamamla",avisar:"Hata bildir",copiado:"Kopyalandı",idioma:"Dil",
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
