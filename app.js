const STORAGE_KEY = "voyage-chine-2026-planner";

const cityDayCounts = {
  shanghai: 7,
  beijing: 6,
};

const activities = [
  {
    id: "bund",
    city: "shanghai",
    day: "2026-05-21",
    title: "The Bund au coucher du soleil",
    slot: "Soir",
    duration: "2 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [31.24, 121.49],
    recommended: true,
    image: "./assets/images/bund-hero.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/The_Bund",
    mapUrl: buildMapUrl("The Bund, Shanghai"),
    summary:
      "La balade la plus simple pour le jour d’arrivée : skyline, rivière et zéro ticket.",
    detail:
      "Très bien après le vol. Si tu veux rester souple, garde seulement le Bund et laisse Xintiandi comme dîner optionnel.",
    tags: ["Gratuit", "Skyline", "Arrivée douce"],
  },
  {
    id: "xintiandi",
    city: "shanghai",
    day: "2026-05-21",
    title: "Xintiandi pour le premier dîner",
    slot: "Soir",
    duration: "1 à 2 h",
    price: 0,
    currency: "CNY",
    coords: [31.2188, 121.4747],
    recommended: false,
    image: "./assets/images/xintiandi.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Xintiandi",
    mapUrl: buildMapUrl("Xintiandi, Shanghai"),
    summary:
      "Quartier agréable, très simple pour démarrer sans te mettre une journée trop dense.",
    detail:
      "Bonne option si tu veux un premier soir photogénique et pratique, avec restaurants et terrasses.",
    tags: ["Quartier", "Dîner", "Balade"],
  },
  {
    id: "yuyuan",
    city: "shanghai",
    day: "2026-05-22",
    title: "Yu Garden et vieille ville",
    slot: "Matin",
    duration: "2 à 3 h",
    price: 40,
    currency: "CNY",
    coords: [31.2273, 121.4925],
    recommended: true,
    image: "./assets/images/yu-garden.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Yu_Garden",
    mapUrl: buildMapUrl("Yu Garden, Shanghai"),
    summary:
      "Classique absolu pour voir le Shanghai historique, les toits, les bassins et les ruelles.",
    detail:
      "À faire tôt pour éviter la densité. Tu peux ensuite marcher vers le Bund ou revenir sur People’s Square.",
    tags: ["Historique", "Jardin", "Photo"],
  },
  {
    id: "shanghai-museum",
    city: "shanghai",
    day: "2026-05-22",
    title: "Shanghai Museum",
    slot: "Après-midi",
    duration: "2 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [31.2304, 121.4692],
    recommended: true,
    image: "./assets/images/shanghai-museum.jpg",
    officialUrl:
      "https://www.meet-in-shanghai.net/en/guide/shanghai-museum-a-jewel-of-cultural-and-historical-splendor-039664/",
    mapUrl: buildMapUrl("Shanghai Museum"),
    summary:
      "Très bon équilibre entre culture, climatisation et logistique simple depuis People’s Square.",
    detail:
      "Une visite idéale si tu veux un musée solide sans perdre une journée entière dans les transports.",
    tags: ["Musée", "Gratuit", "Culture"],
  },
  {
    id: "shanghai-tower",
    city: "shanghai",
    day: "2026-05-23",
    title: "Shanghai Tower ou observatoire skyline",
    slot: "Fin d’après-midi",
    duration: "2 h",
    price: 180,
    currency: "CNY",
    coords: [31.2336, 121.5055],
    recommended: true,
    image: "./assets/images/shanghai-tower.jpg",
    officialUrl: "https://www.shanghaitower.com/en/",
    mapUrl: buildMapUrl("Shanghai Tower"),
    summary:
      "La grosse vue panoramique du séjour, parfaite à l’heure bleue si le ciel est bon.",
    detail:
      "Le prix est modifiable ici si tu choisis finalement un autre observatoire ou si tu trouves une promo.",
    tags: ["Observatoire", "Vue", "Réglable"],
  },
  {
    id: "oriental-pearl",
    city: "shanghai",
    day: "2026-05-23",
    title: "Oriental Pearl Tower",
    slot: "Fin d’après-midi",
    duration: "1 h 30 à 2 h",
    price: 199,
    currency: "CNY",
    coords: [31.2397, 121.4998],
    recommended: false,
    image: "./assets/images/shanghai-tower.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Oriental_Pearl_Tower",
    mapUrl: buildMapUrl("Oriental Pearl Tower, Shanghai"),
    summary:
      "Alternative plus iconique et très centrale si tu préfères cocher la carte postale de Pudong.",
    detail:
      "Bonne option en remplacement de Shanghai Tower si tu veux la tour la plus reconnaissable de la skyline.",
    tags: ["Observatoire", "Alternative", "Pudong"],
  },
  {
    id: "jingan-temple",
    city: "shanghai",
    day: "2026-05-23",
    title: "Jing’an Temple",
    slot: "Soir",
    duration: "1 à 1 h 30",
    price: 50,
    currency: "CNY",
    coords: [31.2237, 121.445],
    recommended: false,
    image: "./assets/images/jingan-temple.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Jing%27an_Temple",
    mapUrl: buildMapUrl("Jing'an Temple, Shanghai"),
    summary:
      "Un contrepoint calme à la skyline de Pudong, facile à combiner avec West Nanjing Road.",
    detail:
      "Bonne alternative si tu préfères une journée plus spiritualité + quartier commerçant.",
    tags: ["Temple", "Ville", "Alternative"],
  },
  {
    id: "french-concession",
    city: "shanghai",
    day: "2026-05-24",
    title: "Balade Former French Concession",
    slot: "Flexible",
    duration: "2 à 4 h",
    price: 0,
    currency: "CNY",
    coords: [31.2107, 121.4601],
    recommended: true,
    image: "./assets/images/xintiandi.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Former_French_Concession",
    mapUrl: buildMapUrl("Former French Concession, Shanghai"),
    summary:
      "Pour un Shanghai plus doux : rues arborées, cafés, petites boutiques et rythme moins intense.",
    detail:
      "Très bien comme journée souple si tu veux souffler entre les grosses visites et garder du temps libre.",
    tags: ["Gratuit", "Balade", "Quartier"],
  },
  {
    id: "tianzifang",
    city: "shanghai",
    day: "2026-05-24",
    title: "Tianzifang",
    slot: "Après-midi",
    duration: "1 h 30 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [31.2097, 121.4666],
    recommended: false,
    image: "./assets/images/xintiandi.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Tianzifang",
    mapUrl: buildMapUrl("Tianzifang, Shanghai"),
    summary:
      "Petites ruelles, ateliers et cafés pour une ambiance plus bohème que le Bund.",
    detail:
      "À garder si tu veux une balade très facile à caser avec la concession française ou un dîner tranquille.",
    tags: ["Gratuit", "Ateliers", "Option douce"],
  },
  {
    id: "shanghai-zoo-red-panda",
    city: "shanghai",
    day: "2026-05-24",
    title: "Shanghai Zoo et option pandas roux",
    slot: "Matin ou fin d’après-midi",
    duration: "3 à 5 h",
    price: 40,
    currency: "CNY",
    coords: [31.1976, 121.361],
    recommended: true,
    image: "./assets/images/red-panda.jpg",
    officialUrl:
      "https://www.meet-in-shanghai.net/en/2025-shanghai-tourism-festival/hai-lights-unforgettable-summer-night-tours-in-shanghai-parks-155267/",
    mapUrl: buildMapUrl("Shanghai Zoo"),
    summary:
      "C’est l’option la plus simple à Shanghai si tu veux tenter les pandas roux sans sacrifier toute une journée.",
    detail:
      "L’info touristique officielle mentionne les red pandas sur les visites estivales. En pratique, vise plutôt les heures fraîches.",
    tags: ["Pandas roux", "Animaux", "Nature légère"],
  },
  {
    id: "wild-animal-park",
    city: "shanghai",
    day: "2026-05-25",
    title: "Shanghai Wild Animal Park",
    slot: "Journée",
    duration: "5 à 7 h",
    price: 165,
    currency: "CNY",
    coords: [31.0562, 121.7238],
    recommended: false,
    image: "./assets/images/shanghai-wild-animal-park.jpg",
    officialUrl:
      "https://www.meet-in-shanghai.net/en/attraction/shanghai-wild-animal-park-543096/",
    mapUrl: buildMapUrl("Shanghai Wild Animal Park"),
    summary:
      "Version parc animalier plus complète, mais avec plus de transport depuis le centre.",
    detail:
      "À choisir si tu veux une vraie journée animaux. Le prix est laissé modifiable parce qu’il peut varier selon la formule.",
    tags: ["Safari", "Journée", "Option longue"],
  },
  {
    id: "zhujiajiao",
    city: "shanghai",
    day: "2026-05-26",
    title: "Zhujiajiao Ancient Town",
    slot: "Demi-journée",
    duration: "3 à 5 h",
    price: 60,
    currency: "CNY",
    coords: [31.1124, 120.9824],
    recommended: true,
    image: "./assets/images/zhujiajiao.jpg",
    officialUrl:
      "https://www.meet-in-shanghai.net/en/tourist-attraction/zhujiajiao-ancient-town-760071/",
    mapUrl: buildMapUrl("Zhujiajiao Ancient Town"),
    summary:
      "La meilleure escapade canaux et vieille ville autour de Shanghai sans exploser le planning.",
    detail:
      "Le site officiel conseille 3 à 4 heures pour le rapide ou une demi-journée complète si tu veux flâner.",
    tags: ["Canaux", "Demi-journée", "Alentours"],
  },
  {
    id: "chenshan",
    city: "shanghai",
    day: "2026-05-27",
    title: "Chenshan Botanical Garden",
    slot: "Journée douce",
    duration: "4 à 6 h",
    price: 60,
    currency: "CNY",
    coords: [31.0793, 121.1808],
    recommended: true,
    image: "./assets/images/chenshan.jpg",
    officialUrl:
      "https://www.meet-in-shanghai.net/en/tourist-attraction/shanghai-chenshan-botanical-garden-596099/",
    mapUrl: buildMapUrl("Shanghai Chenshan Botanical Garden"),
    summary:
      "La journée nature propre, aérée et facile à tenir avant le départ pour Pékin.",
    detail:
      "Ouvert en journée complète, très bien si tu veux plus de vert qu’un simple parc urbain.",
    tags: ["Nature", "Botanique", "Respiration"],
  },
  {
    id: "qianmen",
    city: "beijing",
    day: "2026-05-28",
    title: "Qianmen / Dashilar après le train",
    slot: "Soir",
    duration: "1 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [39.8992, 116.3975],
    recommended: true,
    image: "./assets/images/qianmen.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Qianmen",
    mapUrl: buildMapUrl("Qianmen, Beijing"),
    summary:
      "La bonne soirée d’arrivée à Pékin : historique, lumineuse et simple après le trajet en train.",
    detail:
      "Parfait pour une première immersion sans s’imposer un grand site fermé à heure fixe.",
    tags: ["Gratuit", "Soirée", "Arrivée"],
  },
  {
    id: "tiananmen-square",
    city: "beijing",
    day: "2026-05-29",
    title: "Tian’anmen Square",
    slot: "Très tôt ou fin de journée",
    duration: "45 min à 1 h 30",
    price: 0,
    currency: "CNY",
    coords: [39.9087, 116.3975],
    recommended: false,
    image: "./assets/images/qianmen.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/centralaxis/landmarksalongthecentralaxis/",
    mapUrl: buildMapUrl("Tiananmen Square, Beijing"),
    summary:
      "Très simple à voir si tu veux compléter l’axe central sans rajouter de ticket.",
    detail:
      "À intégrer seulement si tu pars tôt et que tu veux garder un peu de marge avant la Cité interdite.",
    tags: ["Gratuit", "Central Axis", "Repère"],
  },
  {
    id: "forbidden-city",
    city: "beijing",
    day: "2026-05-29",
    title: "Cité interdite / Palace Museum",
    slot: "Matin + midi",
    duration: "3 à 5 h",
    price: 60,
    currency: "CNY",
    coords: [39.9163, 116.3972],
    recommended: true,
    image: "./assets/images/forbidden-city.jpg",
    officialUrl: "https://intl.dpm.org.cn/",
    mapUrl: buildMapUrl("Forbidden City, Beijing"),
    summary:
      "Le grand incontournable historique du séjour à Pékin.",
    detail:
      "Réservation officielle à faire jusqu’à 7 jours avant. Fermé le lundi hors jours fériés statutaires.",
    tags: ["Réserver J-7", "Majeur", "Historique"],
  },
  {
    id: "jingshan",
    city: "beijing",
    day: "2026-05-29",
    title: "Jingshan Park pour la vue impériale",
    slot: "Fin d’après-midi",
    duration: "45 min à 1 h 30",
    price: 2,
    currency: "CNY",
    coords: [39.9225, 116.3962],
    recommended: true,
    image: "./assets/images/jingshan.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/index.html",
    mapUrl: buildMapUrl("Jingshan Park, Beijing"),
    summary:
      "La meilleure vue d’ensemble sur les toits de la Cité interdite.",
    detail:
      "Très simple à ajouter le même jour que la Cité interdite. Petit ticket seulement.",
    tags: ["Panorama", "Petit budget", "Combo idéal"],
  },
  {
    id: "national-museum",
    city: "beijing",
    day: "2026-05-29",
    title: "National Museum of China",
    slot: "Après-midi ou repli pluie",
    duration: "2 à 4 h",
    price: 0,
    currency: "CNY",
    coords: [39.9051, 116.4074],
    recommended: false,
    image: "./assets/images/forbidden-city.jpg",
    officialUrl: "https://en.chnmuseum.cn/visit_692/",
    mapUrl: buildMapUrl("National Museum of China, Beijing"),
    summary:
      "Très bon plan B si tu veux une grosse visite gratuite ou si la météo se gâte.",
    detail:
      "Il faut réserver, donc c’est surtout une option stratégique à garder sous la main plutôt qu’une impro totale.",
    tags: ["Musée", "Gratuit", "Réserver"],
  },
  {
    id: "temple-of-heaven",
    city: "beijing",
    day: "2026-05-30",
    title: "Temple of Heaven",
    slot: "Matin",
    duration: "2 à 3 h",
    price: 34,
    currency: "CNY",
    coords: [39.8822, 116.4065],
    recommended: true,
    image: "./assets/images/temple-of-heaven.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/index.html",
    mapUrl: buildMapUrl("Temple of Heaven, Beijing"),
    summary:
      "Très beau le matin, surtout pour voir le parc vivre avant la foule.",
    detail:
      "Le combo haute saison est un bon choix si tu veux voir les zones principales sans te limiter au parc extérieur.",
    tags: ["Temple", "Photogénique", "Matin"],
  },
  {
    id: "beihai",
    city: "beijing",
    day: "2026-05-30",
    title: "Beihai Park",
    slot: "Après-midi",
    duration: "2 h",
    price: 20,
    currency: "CNY",
    coords: [39.9259, 116.3907],
    recommended: false,
    image: "./assets/images/beihai.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/index.html",
    mapUrl: buildMapUrl("Beihai Park, Beijing"),
    summary:
      "Très belle option calme pour enchaîner après Tiantan si tu veux de l’eau, des pavillons et moins de densité.",
    detail:
      "À choisir si tu veux une journée plus paysagère que muséale.",
    tags: ["Parc", "Lac", "Alternative"],
  },
  {
    id: "drum-bell-towers",
    city: "beijing",
    day: "2026-05-30",
    title: "Drum and Bell Towers",
    slot: "Fin d’après-midi",
    duration: "1 h 30 à 2 h",
    price: 30,
    currency: "CNY",
    coords: [39.9406, 116.3938],
    recommended: false,
    image: "./assets/images/qianmen.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/centralaxis/landmarksalongthecentralaxis/",
    mapUrl: buildMapUrl("Drum Tower, Beijing"),
    summary:
      "Très belle montée avec vue sur les hutongs, parfaite si tu veux une fin de journée plus vivante.",
    detail:
      "Le pack Drum + Bell Tower est propre pour une session courte, surtout couplée à Shichahai.",
    tags: ["Vue", "Hutongs", "Central Axis"],
  },
  {
    id: "shichahai",
    city: "beijing",
    day: "2026-05-30",
    title: "Shichahai / Houhai",
    slot: "Soir",
    duration: "1 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [39.9414, 116.3879],
    recommended: true,
    image: "./assets/images/beihai.jpg",
    officialUrl: "https://english.beijing.gov.cn/specials/centralaxis/landmarksalongthecentralaxis/",
    mapUrl: buildMapUrl("Shichahai, Beijing"),
    summary:
      "Le bon quartier pour finir la journée à pied autour de l’eau, des hutongs et des terrasses.",
    detail:
      "Très bon ajout si tu veux une soirée Pékin plus détendue que monumentale.",
    tags: ["Gratuit", "Soirée", "Hutongs"],
  },
  {
    id: "lama-temple",
    city: "beijing",
    day: "2026-05-30",
    title: "Lama Temple / Yonghe Temple",
    slot: "Après-midi",
    duration: "1 h 30 à 2 h",
    price: 25,
    currency: "CNY",
    coords: [39.9482, 116.4173],
    recommended: false,
    image: "./assets/images/lama-temple.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/Yonghe_Temple",
    mapUrl: buildMapUrl("Yonghe Temple, Beijing"),
    summary:
      "Très belle alternative si tu veux un temple vivant plutôt qu’un second parc.",
    detail:
      "Se combine bien avec un dîner dans les hutongs ou vers Dongcheng.",
    tags: ["Temple", "Alternative", "Dongcheng"],
  },
  {
    id: "summer-palace",
    city: "beijing",
    day: "2026-05-31",
    title: "Summer Palace",
    slot: "Journée",
    duration: "4 à 6 h",
    price: 60,
    currency: "CNY",
    coords: [39.9999, 116.2755],
    recommended: true,
    image: "./assets/images/summer-palace.jpg",
    officialUrl: "https://www.summerpalace.net.cn/en/",
    mapUrl: buildMapUrl("Summer Palace, Beijing"),
    summary:
      "Une très grosse journée à part entière, entre lac, collines et architecture impériale.",
    detail:
      "Le billet combiné est un bon point de départ ici, surtout si tu veux éviter de recalculer sur place.",
    tags: ["Journée complète", "Impérial", "Réservable"],
  },
  {
    id: "mutianyu",
    city: "beijing",
    day: "2026-06-01",
    title: "Grande Muraille de Mutianyu",
    slot: "Journée",
    duration: "5 à 8 h",
    price: 45,
    currency: "CNY",
    coords: [40.4373, 116.5704],
    recommended: true,
    image: "./assets/images/mutianyu.jpg",
    officialUrl:
      "https://english.beijing.gov.cn/specials/ticketing/attractions/202407/t20240717_3751593.html",
    mapUrl: buildMapUrl("Mutianyu Great Wall"),
    summary:
      "Le grand jour nature + icône mondiale, très logique à placer un lundi.",
    detail:
      "Pas de réservation obligatoire selon la page officielle consultée. Budget saisi ici hors navette ou télécabine.",
    tags: ["Muraille", "Nature", "Lundi parfait"],
  },
  {
    id: "art-798",
    city: "beijing",
    day: "2026-06-02",
    title: "798 Art Zone avant l’aéroport",
    slot: "Matin",
    duration: "2 à 3 h",
    price: 0,
    currency: "CNY",
    coords: [39.9841, 116.4967],
    recommended: false,
    image: "./assets/images/art-798.jpg",
    officialUrl: "https://en.wikipedia.org/wiki/798_Art_Zone",
    mapUrl: buildMapUrl("798 Art Zone, Beijing"),
    summary:
      "Bonne option pour finir sur quelque chose de contemporain si tu ne veux pas recharger la matinée en monuments.",
    detail:
      "À choisir seulement si ton hôtel et ton aéroport restent compatibles avec la logistique du départ.",
    tags: ["Art", "Flexible", "Dernier jour"],
  },
];

const itineraryDays = [
  {
    day: "2026-05-21",
    label: "Jeudi 21 mai",
    city: "shanghai",
    title: "Arrivée à Shanghai",
    note: "Atterrissage à 09:55, installation à l’hôtel, puis version légère du centre le soir.",
    activityIds: ["bund", "xintiandi"],
  },
  {
    day: "2026-05-22",
    label: "Vendredi 22 mai",
    city: "shanghai",
    title: "Shanghai historique + musée",
    note: "Une journée très équilibrée entre vieux Shanghai et grande visite culturelle.",
    activityIds: ["yuyuan", "shanghai-museum"],
  },
  {
    day: "2026-05-23",
    label: "Samedi 23 mai",
    city: "shanghai",
    title: "Skyline et ville moderne",
    note: "Vue haute sur Pudong ou alternative plus calme avec temple et quartier central.",
    activityIds: ["shanghai-tower", "oriental-pearl", "jingan-temple"],
  },
  {
    day: "2026-05-24",
    label: "Dimanche 24 mai",
    city: "shanghai",
    title: "Journée souple ou pandas roux",
    note: "Tu peux la garder tranquille, ou la transformer en vraie journée animaux légère.",
    activityIds: ["french-concession", "tianzifang", "shanghai-zoo-red-panda"],
  },
  {
    day: "2026-05-25",
    label: "Lundi 25 mai",
    city: "shanghai",
    title: "Option grand parc animalier",
    note: "À ne garder que si tu veux vraiment pousser la journée animaux plus loin que le zoo.",
    activityIds: ["wild-animal-park"],
  },
  {
    day: "2026-05-26",
    label: "Mardi 26 mai",
    city: "shanghai",
    title: "Excursion canaux",
    note: "Le meilleur aller-retour autour de Shanghai pour changer totalement d’ambiance.",
    activityIds: ["zhujiajiao"],
  },
  {
    day: "2026-05-27",
    label: "Mercredi 27 mai",
    city: "shanghai",
    title: "Vraie respiration nature",
    note: "La journée verte recommandée avant le transfert vers Pékin.",
    activityIds: ["chenshan"],
  },
  {
    day: "2026-05-28",
    label: "Jeudi 28 mai",
    city: "beijing",
    title: "TGV vers Pékin + soirée légère",
    note: "Train direct conseillé en journée, puis balade facile dans le vieux cœur de Pékin.",
    activityIds: ["qianmen"],
  },
  {
    day: "2026-05-29",
    label: "Vendredi 29 mai",
    city: "beijing",
    title: "Grand jour impérial",
    note: "Le duo le plus logique : Cité interdite puis point de vue de Jingshan, avec options autour de l’axe central.",
    activityIds: ["tiananmen-square", "forbidden-city", "jingshan", "national-museum"],
  },
  {
    day: "2026-05-30",
    label: "Samedi 30 mai",
    city: "beijing",
    title: "Temples et alternatives",
    note: "Tiantan le matin, puis parc, tours ou soirée hutongs selon ton énergie.",
    activityIds: ["temple-of-heaven", "beihai", "lama-temple", "drum-bell-towers", "shichahai"],
  },
  {
    day: "2026-05-31",
    label: "Dimanche 31 mai",
    city: "beijing",
    title: "Summer Palace",
    note: "À traiter comme une vraie journée en soi, sans vouloir ajouter trop de choses autour.",
    activityIds: ["summer-palace"],
  },
  {
    day: "2026-06-01",
    label: "Lundi 1er juin",
    city: "beijing",
    title: "Grande Muraille",
    note: "Très bon placement un lundi, quand la Cité interdite est fermée.",
    activityIds: ["mutianyu"],
  },
  {
    day: "2026-06-02",
    label: "Mardi 2 juin",
    city: "beijing",
    title: "Matinée libre avant le vol de 19:50",
    note: "Garde cette matinée légère. 798 est une option, sinon laisse-la libre pour le départ.",
    activityIds: ["art-798"],
  },
];

const visitGuides = {
  bund: {
    booking: "Aucune réservation",
    hours: "Promenade libre 24/24",
    bestTime: "Heure bleue ou soirée",
    access: "East Nanjing Road + 10 min à pied",
  },
  xintiandi: {
    booking: "Aucune réservation",
    hours: "Quartier libre, animé le soir",
    bestTime: "Premier soir ou dîner tardif",
    access: "Metro South Huangpi Road",
  },
  yuyuan: {
    booking: "Billet simple conseillé à l'avance",
    hours: "Plutôt le matin",
    bestTime: "Ouverture pour éviter la foule",
    access: "Metro Yuyuan Garden",
  },
  "shanghai-museum": {
    booking: "Créneau gratuit recommandé",
    hours: "Journée continue",
    bestTime: "Après-midi climatisé",
    access: "People's Square",
  },
  "shanghai-tower": {
    booking: "Oui pour le coucher du soleil",
    hours: "Jusqu'en soirée selon la date",
    bestTime: "17:30 à 19:30 si ciel clair",
    access: "Lujiazui",
  },
  "oriental-pearl": {
    booking: "Oui si tu veux un créneau sunset",
    hours: "Journée + soirée",
    bestTime: "Fin d'après-midi",
    access: "Lujiazui",
  },
  "jingan-temple": {
    booking: "Billet souple sur place",
    hours: "Matin à début de soirée",
    bestTime: "Fin de journée",
    access: "Metro Jing'an Temple",
  },
  "french-concession": {
    booking: "Aucune réservation",
    hours: "Libre",
    bestTime: "Fin de matinée ou café l'après-midi",
    access: "South Shaanxi Road / à pied",
  },
  tianzifang: {
    booking: "Aucune réservation",
    hours: "Libre, plus vivant l'après-midi",
    bestTime: "16:00-19:00",
    access: "Dapuqiao / Tianzifang",
  },
  "shanghai-zoo-red-panda": {
    booking: "Billet simple",
    hours: "Vise les heures fraîches",
    bestTime: "Ouverture ou fin d'après-midi",
    access: "Metro Shanghai Zoo + marche courte",
  },
  "wild-animal-park": {
    booking: "Oui si week-end ou pont",
    hours: "Grande journée",
    bestTime: "Entrée tôt",
    access: "Ligne 16 + transfert / taxi",
  },
  zhujiajiao: {
    booking: "Aucune pour le bourg",
    hours: "Demi-journée idéale",
    bestTime: "Matin doux ou fin d'après-midi",
    access: "Metro ligne 17 + transfert court",
  },
  chenshan: {
    booking: "Billet simple",
    hours: "08:30-17:00 env.",
    bestTime: "Matin puis pause déjeuner sur place",
    access: "Songjiang puis taxi / bus",
  },
  qianmen: {
    booking: "Aucune réservation",
    hours: "Soirée libre",
    bestTime: "Après le train et le dîner",
    access: "Metro Qianmen",
  },
  "tiananmen-square": {
    booking: "Contrôle d'accès selon zone/heure",
    hours: "05:00-22:00",
    bestTime: "Très tôt ou en fin de journée",
    access: "Qianmen / Tian'anmen East-West",
  },
  "forbidden-city": {
    booking: "Obligatoire à l'avance",
    hours: "Matin recommandé",
    bestTime: "Entrée dès l'ouverture",
    access: "Tian'anmen East/West + marche",
  },
  jingshan: {
    booking: "Billet souple",
    hours: "Jusqu'en fin d'après-midi",
    bestTime: "Après la Cité interdite",
    access: "À pied depuis la porte nord",
  },
  "national-museum": {
    booking: "Réservation nécessaire",
    hours: "Grande demi-journée possible",
    bestTime: "Après-midi ou pluie",
    access: "Côté est de Tian'anmen",
  },
  "temple-of-heaven": {
    booking: "Billet ou combo",
    hours: "Matin recommandé",
    bestTime: "08:00-11:00",
    access: "Tiantandongmen / East Gate",
  },
  beihai: {
    booking: "Souple, sur place ou en ligne",
    hours: "Après-midi agréable",
    bestTime: "Après 15:00",
    access: "Beihai North / taxi",
  },
  "lama-temple": {
    booking: "Billet simple sur place",
    hours: "Journée",
    bestTime: "Après-midi calme",
    access: "Metro Yonghegong Lama Temple",
  },
  "drum-bell-towers": {
    booking: "Billet sur place ou en ligne",
    hours: "9:30-17:30 en haute saison",
    bestTime: "Fin d'après-midi",
    access: "Shichahai / Gulou",
  },
  shichahai: {
    booking: "Aucune réservation",
    hours: "Libre",
    bestTime: "Fin d'après-midi et soirée",
    access: "Shichahai / Guloudajie",
  },
  "summer-palace": {
    booking: "Très conseillé en avance",
    hours: "Vraie journée",
    bestTime: "Entrée tôt puis lac en fin de parcours",
    access: "Metro Beigongmen / Xiyuan",
  },
  mutianyu: {
    booking: "Billet site + transport à cadrer",
    hours: "Quasi journée",
    bestTime: "Départ 07:00-08:00",
    access: "Voiture / navette dédiée",
  },
  "art-798": {
    booking: "Aucune réservation",
    hours: "Matinée flexible",
    bestTime: "10:00-13:00",
    access: "Taxi ou DiDi vers l'aéroport ensuite",
  },
};

const hotels = [
  {
    id: "sh-bund",
    city: "shanghai",
    title: "Base camp Bund / People’s Square",
    nightlyRate: 950,
    recommended: true,
    coords: [31.2324, 121.4752],
    note:
      "Le plus pratique pour enchaîner Bund, Yu Garden, Nanjing Road et le métro sans trop réfléchir.",
    sample: "Exemples : Central Hotel Shanghai, Fairmont Peace Hotel",
    officialUrl: "https://www.fairmont.com/shanghai/",
    mapUrl: buildMapUrl("People's Square, Shanghai"),
  },
  {
    id: "sh-xintiandi",
    city: "shanghai",
    title: "Base camp Xintiandi / concession française",
    nightlyRate: 1100,
    recommended: false,
    coords: [31.2188, 121.4747],
    note:
      "Très agréable si tu veux un Shanghai plus cafés, ruelles et soirées faciles à pied.",
    sample: "Exemples : Andaz Xintiandi, The Langham Shanghai Xintiandi",
    officialUrl: "https://www.hyatt.com/andaz/en-US/shaxs-andaz-xintiandi-shanghai",
    mapUrl: buildMapUrl("Xintiandi, Shanghai"),
  },
  {
    id: "sh-jingan",
    city: "shanghai",
    title: "Base camp Jing’an / West Nanjing Road",
    nightlyRate: 1350,
    recommended: false,
    coords: [31.2269, 121.446],
    note:
      "Le meilleur choix si tu privilégies le confort hôtelier haut de gamme et un secteur très central.",
    sample: "Exemples : Jing An Shangri-La, The Portman Ritz-Carlton",
    officialUrl: "https://www.shangri-la.com/shanghai/jinganshangrila/",
    mapUrl: buildMapUrl("Jing'an District, Shanghai"),
  },
  {
    id: "bj-wangfujing",
    city: "beijing",
    title: "Base camp Wangfujing / est de la Cité interdite",
    nightlyRate: 900,
    recommended: true,
    coords: [39.914, 116.417],
    note:
      "Très bon compromis pour la Cité interdite, Tian’anmen, Dongcheng et les trajets classiques.",
    sample: "Exemples : Regent Beijing, Sunworld Hotel",
    officialUrl: "https://www.ihg.com/regent/hotels/us/en/beijing/pegdd/hoteldetail",
    mapUrl: buildMapUrl("Wangfujing, Beijing"),
  },
  {
    id: "bj-qianmen",
    city: "beijing",
    title: "Base camp Qianmen / Dashilar",
    nightlyRate: 780,
    recommended: false,
    coords: [39.8946, 116.4022],
    note:
      "Très cohérent si tu veux l’ambiance vieille ville tout de suite, surtout pour les soirées à pied.",
    sample: "Exemples : New World Beijing Hotel, Hotel Indigo Beijing Dashilar",
    officialUrl: "https://beijing.newworldhotels.com/",
    mapUrl: buildMapUrl("Qianmen, Beijing"),
  },
  {
    id: "bj-hutong",
    city: "beijing",
    title: "Base camp hutongs / Dongcheng",
    nightlyRate: 1100,
    recommended: false,
    coords: [39.933, 116.41],
    note:
      "Le choix plus caractère si tu veux dormir dans une ambiance Pékin plus intime et plus locale.",
    sample: "Exemples : The Orchid Beijing, Hotel Cote Cour",
    officialUrl: "https://www.theorchidbeijing.com/",
    mapUrl: buildMapUrl("Dongcheng District, Beijing"),
  },
];

const restaurants = [
  {
    id: "sh-jiajia",
    city: "shanghai",
    title: "Jia Jia Tang Bao",
    cuisine: "Xiaolongbao",
    cost: 60,
    recommended: true,
    note: "Bon choix simple et efficace pour un déjeuner Shanghai très classique.",
    mapUrl: buildMapUrl("Jia Jia Tang Bao Shanghai"),
    officialUrl: buildMapUrl("Jia Jia Tang Bao Shanghai"),
  },
  {
    id: "sh-lost-heaven",
    city: "shanghai",
    title: "Lost Heaven",
    cuisine: "Cuisine du Yunnan",
    cost: 180,
    recommended: false,
    note: "Très bon dîner d’ambiance si tu veux une soirée plus posée et plus stylée.",
    mapUrl: buildMapUrl("Lost Heaven Shanghai"),
    officialUrl: "https://www.lostheaven.com.cn/",
  },
  {
    id: "sh-dtf",
    city: "shanghai",
    title: "Din Tai Fung Xintiandi",
    cuisine: "Dumplings / chaîne fiable",
    cost: 120,
    recommended: false,
    note: "Simple, central et rassurant si tu veux une option fluide sans prise de tête.",
    mapUrl: buildMapUrl("Din Tai Fung Xintiandi Shanghai"),
    officialUrl: "https://www.dintaifung.com.cn/",
  },
  {
    id: "bj-sijiminfu",
    city: "beijing",
    title: "Siji Minfu",
    cuisine: "Canard laqué",
    cost: 220,
    recommended: true,
    note: "Le dîner emblématique si tu veux cocher un vrai repas canard laqué à Pékin.",
    mapUrl: buildMapUrl("Siji Minfu Beijing"),
    officialUrl: buildMapUrl("Siji Minfu Beijing"),
  },
  {
    id: "bj-trb",
    city: "beijing",
    title: "TRB Hutong",
    cuisine: "Fine dining",
    cost: 650,
    recommended: false,
    note: "Le dîner splurge du séjour si tu veux une vraie parenthèse gastronomique.",
    mapUrl: buildMapUrl("TRB Hutong Beijing"),
    officialUrl: "https://www.trb-hutong.com/",
  },
  {
    id: "bj-jubaoyuan",
    city: "beijing",
    title: "Jubaoyuan",
    cuisine: "Hotpot",
    cost: 130,
    recommended: false,
    note: "Option très locale pour un dîner vivant, plus populaire et moins cérémonial.",
    mapUrl: buildMapUrl("Jubaoyuan Beijing"),
    officialUrl: buildMapUrl("Jubaoyuan Beijing"),
  },
];

const scenarioPresets = {
  eco: {
    title: "Eco maîtrisé",
    summary:
      "On garde les incontournables, le TGV en 2nde et des bases d'hôtel centrales sans pousser le budget.",
    railLabel: "TGV 2nde classe",
    hotelsLabel: "Bund + Qianmen",
    mealsLabel: "150 / 170 CNY par jour",
    costs: {
      efficiencyKwh: 17.4,
      homeShare: 78,
      trainClass: "620",
      trainFare: 620,
      shanghaiMeals: 150,
      beijingMeals: 170,
    },
    hotels: {
      shanghai: "sh-bund",
      beijing: "bj-qianmen",
    },
    restaurants: {
      "sh-jiajia": true,
      "sh-lost-heaven": false,
      "sh-dtf": false,
      "bj-sijiminfu": true,
      "bj-trb": false,
      "bj-jubaoyuan": false,
    },
  },
  confort: {
    title: "Confort fluide",
    summary:
      "Version plus souple pour les trajets et les soirées, avec 1ère classe et quartiers plus agréables à vivre.",
    railLabel: "TGV 1ère classe",
    hotelsLabel: "Xintiandi + Wangfujing",
    mealsLabel: "220 / 240 CNY par jour",
    costs: {
      efficiencyKwh: 18.8,
      homeShare: 62,
      trainClass: "1000",
      trainFare: 1000,
      shanghaiMeals: 220,
      beijingMeals: 240,
    },
    hotels: {
      shanghai: "sh-xintiandi",
      beijing: "bj-wangfujing",
    },
    restaurants: {
      "sh-jiajia": true,
      "sh-lost-heaven": true,
      "sh-dtf": false,
      "bj-sijiminfu": true,
      "bj-trb": false,
      "bj-jubaoyuan": false,
    },
  },
};

const reservationItems = [
  {
    id: "hotels",
    title: "Bloquer les hôtels Shanghai + Pékin",
    dueDate: "2026-04-25",
    dueLabel: "Avant le 25 avril 2026",
    note:
      "Shanghai du 21 au 28 mai et Pékin du 28 mai au 2 juin. Les bons quartiers montent vite sur cette période.",
    linkLabel: "Voir les bases hôtels",
    linkHref: "#lodging-grid",
  },
  {
    id: "flight",
    title: "Valider vol + logistique Barcelone",
    dueDate: "2026-04-25",
    dueLabel: "Avant le 25 avril 2026",
    note:
      "Confirmer le prix du vol, le parking éventuel et garder une arrivée à l'aéroport autour de 09:15 le 20 mai.",
    linkLabel: "Bloc transport",
    linkHref: "#route-km",
  },
  {
    id: "train",
    title: "Billets TGV Shanghai -> Pékin",
    dueDate: "2026-05-13",
    dueLabel: "Autour du 13 mai 2026",
    note:
      "Fenêtre repérée autour de 15 jours avant pour un départ visé le jeudi 28 mai depuis Hongqiao.",
    linkLabel: "Horaires et tarifs",
    linkHref: "https://www.travelchinaguide.com/china-trains/beijing-shanghai-highspeed.htm",
  },
  {
    id: "forbidden-city",
    title: "Billets Cité interdite",
    dueDate: "2026-05-22",
    dueLabel: "22 mai 2026 à 20:00",
    note:
      "Pour la visite du vendredi 29 mai, le Palace Museum ouvre les réservations 7 jours avant à 20:00.",
    linkLabel: "Réservation officielle",
    linkHref: "https://intl.dpm.org.cn/news/detail/98243.html",
  },
  {
    id: "payments",
    title: "eSIM, Alipay, WeChat Pay et copies utiles",
    dueDate: "2026-05-18",
    dueLabel: "18 mai 2026",
    note:
      "Préparer les apps de paiement, captures passeport/vol et moyens d'accès avant de quitter Castres.",
    linkLabel: "Voir la checklist",
    linkHref: "#reservation-checklist",
  },
  {
    id: "offline",
    title: "Précharger l'app hors ligne sur l'iPhone",
    dueDate: "2026-05-19",
    dueLabel: "19 mai 2026",
    note:
      "Ouvre l'app en Wi-Fi, charge Shanghai et Pékin sur la carte, puis ajoute-la à l'écran d'accueil avant le départ.",
    linkLabel: "Carte du voyage",
    linkHref: "#map",
  },
  {
    id: "summer-palace",
    title: "Confirmer Summer Palace et Mutianyu",
    dueDate: "2026-05-27",
    dueLabel: "Avant le 27 mai 2026",
    note:
      "Valider les billets souhaités pour le Palais d'Été et la solution transport de la Muraille avant de quitter Shanghai.",
    linkLabel: "Repères Pékin",
    linkHref: "#map",
  },
];

const transportOverrides = {
  zhujiajiao: [
    {
      mode: "Metro + courte course",
      costCny: 12,
      duration: "70 à 90 min",
      note: "Le moins cher si tu prends la ligne 17 puis un court transfert.",
    },
    {
      mode: "Taxi / DiDi direct",
      costCny: 180,
      duration: "50 à 70 min",
      note: "Plus simple si tu veux gagner du temps sur la demi-journée.",
    },
  ],
  chenshan: [
    {
      mode: "Metro + taxi local",
      costCny: 24,
      duration: "75 à 100 min",
      note: "Le plus économique pour garder la journée nature sans exploser le budget.",
    },
    {
      mode: "Taxi / DiDi direct",
      costCny: 210,
      duration: "55 à 75 min",
      note: "Confortable mais beaucoup plus cher depuis le centre.",
    },
  ],
  "wild-animal-park": [
    {
      mode: "Metro + transfert",
      costCny: 18,
      duration: "80 à 105 min",
      note: "Le moins cher si tu acceptes une vraie logistique de parc.",
    },
    {
      mode: "Taxi / DiDi direct",
      costCny: 240,
      duration: "55 à 80 min",
      note: "Porte-à-porte, plus pratique pour le retour.",
    },
  ],
  mutianyu: [
    {
      mode: "Navette / bus collectif",
      costCny: 120,
      duration: "100 à 130 min",
      note: "En général l'option la moins chère pour la Muraille hors transport privé.",
    },
    {
      mode: "Voiture privée / taxi",
      costCny: 320,
      duration: "80 à 95 min",
      note: "Plus simple, surtout si tu veux rentrer à l'heure que tu veux.",
    },
  ],
};

const hubs = [
  {
    id: "castres",
    title: "Castres",
    type: "hub",
    coords: [43.605, 2.24],
    city: "transport",
  },
  {
    id: "barcelona-airport",
    title: "Barcelone-El Prat",
    type: "hub",
    coords: [41.2974, 2.0833],
    city: "transport",
  },
  {
    id: "shanghai-hongqiao",
    title: "Shanghai Hongqiao Railway Station",
    type: "hub",
    coords: [31.194, 121.3203],
    city: "shanghai",
  },
  {
    id: "beijing-south",
    title: "Beijing South Railway Station",
    type: "hub",
    coords: [39.8651, 116.3786],
    city: "beijing",
  },
];

const activityById = Object.fromEntries(activities.map((activity) => [activity.id, activity]));
const hotelById = Object.fromEntries(hotels.map((hotel) => [hotel.id, hotel]));
const restaurantById = Object.fromEntries(restaurants.map((restaurant) => [restaurant.id, restaurant]));

const defaultState = {
  travelMode: "eco",
  mapExplorerScope: "all-trip",
  filter: "all",
  costs: {
    routeKm: 382,
    tollEur: 17.2,
    efficiencyKwh: scenarioPresets.eco.costs.efficiencyKwh,
    homeShare: scenarioPresets.eco.costs.homeShare,
    homeRate: 0.19,
    superRate: 0.47,
    parkingEur: 0,
    flightEur: 0,
    trainFare: scenarioPresets.eco.costs.trainFare,
    trainClass: scenarioPresets.eco.costs.trainClass,
    exchangeRate: 8.05,
    miscEur: 0,
    miscCny: 0,
    shanghaiNights: 7,
    beijingNights: 5,
    shanghaiMeals: scenarioPresets.eco.costs.shanghaiMeals,
    beijingMeals: scenarioPresets.eco.costs.beijingMeals,
  },
  visits: Object.fromEntries(activities.map((activity) => [activity.id, activity.recommended])),
  visitCosts: Object.fromEntries(activities.map((activity) => [activity.id, activity.price])),
  hotels: cloneState(scenarioPresets.eco.hotels),
  hotelRates: Object.fromEntries(hotels.map((hotel) => [hotel.id, hotel.nightlyRate])),
  restaurants: cloneState(scenarioPresets.eco.restaurants),
  restaurantCosts: Object.fromEntries(restaurants.map((restaurant) => [restaurant.id, restaurant.cost])),
  reservations: Object.fromEntries(reservationItems.map((item) => [item.id, false])),
};

let state = loadState();
let maps = [];
let markerIndex = {};
let scopeBounds = {};
let currentTimelineIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderScenarioCards();
  renderTimeline();
  renderHotels();
  renderRestaurants();
  renderReservationChecklist();
  renderHotelMapInsights();
  syncInputsFromState();
  updatePanels();
  initMap();
  applyFilter(state.filter);
  bindEvents();
  syncTopbarState();
  registerServiceWorker();
});

function bindEvents() {
  window.addEventListener("scroll", syncTopbarState, { passive: true });
  window.addEventListener("resize", syncTopbarState);

  document.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      applyFilter(filterButton.dataset.filter);
      return;
    }

    const focusButton = event.target.closest("[data-focus]");
    if (focusButton) {
      focusScope(focusButton.dataset.focus);
      return;
    }

    const jumpTargetButton = event.target.closest("[data-jump-target]");
    if (jumpTargetButton) {
      const target = document.getElementById(jumpTargetButton.dataset.jumpTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => invalidateMaps(), 220);
      return;
    }

    const timelineJumpButton = event.target.closest("[data-timeline-index]");
    if (timelineJumpButton) {
      goToTimelineIndex(Number(timelineJumpButton.dataset.timelineIndex));
      return;
    }

    const focusLocationButton = event.target.closest("[data-focus-location]");
    if (focusLocationButton) {
      focusLocation(focusLocationButton.dataset.focusLocation);
      return;
    }

    const scenarioButton = event.target.closest("[data-apply-scenario]");
    if (scenarioButton) {
      state = applyScenarioPreset(state, scenarioButton.dataset.applyScenario);
      renderScenarioCards();
      renderHotels();
      renderRestaurants();
      renderHotelMapInsights();
      syncInputsFromState();
      updatePanels();
      applyFilter(state.filter);
      saveState();
      return;
    }

    const explorerScopeButton = event.target.closest("[data-explorer-scope]");
    if (explorerScopeButton) {
      state.mapExplorerScope = explorerScopeButton.dataset.explorerScope;
      syncMapScopeButtons();
      focusScope(state.mapExplorerScope);
      saveState();
      return;
    }

    const hotelMapSelectButton = event.target.closest("[data-set-hotel]");
    if (hotelMapSelectButton) {
      state.hotels[hotelMapSelectButton.dataset.city] = hotelMapSelectButton.dataset.setHotel;
      renderHotels();
      renderHotelMapInsights();
      updatePanels();
      focusLocation(hotelMapSelectButton.dataset.setHotel);
      applyFilter(state.filter);
      saveState();
      return;
    }

    if (event.target.id === "select-recommended") {
      state = cloneState(defaultState);
      currentTimelineIndex = 0;
      renderScenarioCards();
      renderTimeline();
      renderHotels();
      renderRestaurants();
      renderReservationChecklist();
      renderHotelMapInsights();
      syncInputsFromState();
      updatePanels();
      applyFilter(state.filter);
      saveState();
      return;
    }

    if (event.target.id === "reset-plan") {
      state = {
        ...cloneState(state),
        costs: {
          ...cloneState(defaultState.costs),
          flightEur: state.costs.flightEur,
          exchangeRate: state.costs.exchangeRate,
          miscEur: state.costs.miscEur,
          miscCny: state.costs.miscCny,
          routeKm: state.costs.routeKm,
          tollEur: state.costs.tollEur,
          parkingEur: state.costs.parkingEur,
          homeRate: state.costs.homeRate,
          superRate: state.costs.superRate,
        },
        visitCosts: cloneState(defaultState.visitCosts),
        hotelRates: cloneState(defaultState.hotelRates),
        restaurantCosts: cloneState(defaultState.restaurantCosts),
      };
      state = applyScenarioPreset(state, state.travelMode || defaultState.travelMode);
      currentTimelineIndex = 0;
      renderScenarioCards();
      renderHotels();
      renderRestaurants();
      renderHotelMapInsights();
      syncInputsFromState();
      updatePanels();
      applyFilter(state.filter);
      saveState();
    }
  });

  document.addEventListener("change", (event) => {
    const visitToggle = event.target.closest("[data-toggle-visit]");
    if (visitToggle) {
      state.visits[visitToggle.dataset.toggleVisit] = visitToggle.checked;
      updatePanels();
      saveState();
      return;
    }

    const restaurantToggle = event.target.closest("[data-toggle-restaurant]");
    if (restaurantToggle) {
      state.restaurants[restaurantToggle.dataset.toggleRestaurant] = restaurantToggle.checked;
      updatePanels();
      saveState();
      return;
    }

    const hotelToggle = event.target.closest("[data-toggle-hotel]");
    if (hotelToggle) {
      state.hotels[hotelToggle.dataset.city] = hotelToggle.value;
      renderHotels();
      renderHotelMapInsights();
      updatePanels();
      applyFilter(state.filter);
      saveState();
      return;
    }

    if (event.target.id === "train-class") {
      state.costs.trainClass = event.target.value;
      state.costs.trainFare = Number(event.target.value);
      const trainFareInput = document.getElementById("train-fare");
      if (trainFareInput) {
        trainFareInput.value = String(state.costs.trainFare);
      }
      updatePanels();
      saveState();
      return;
    }

    const reservationToggle = event.target.closest("[data-toggle-reservation]");
    if (reservationToggle) {
      state.reservations[reservationToggle.dataset.toggleReservation] = reservationToggle.checked;
      updatePanels();
      saveState();
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;

    if (target.matches("[data-visit-cost]")) {
      state.visitCosts[target.dataset.visitCost] = sanitizeNumber(target.value);
      updatePanels();
      saveState();
      return;
    }

    if (target.matches("[data-restaurant-cost]")) {
      state.restaurantCosts[target.dataset.restaurantCost] = sanitizeNumber(target.value);
      updatePanels();
      saveState();
      return;
    }

    if (target.matches("[data-hotel-rate]")) {
      state.hotelRates[target.dataset.hotelRate] = sanitizeNumber(target.value);
      updatePanels();
      saveState();
      return;
    }

    const globalInputMap = {
      "route-km": "routeKm",
      "toll-eur": "tollEur",
      "efficiency-kwh": "efficiencyKwh",
      "home-share": "homeShare",
      "home-rate": "homeRate",
      "super-rate": "superRate",
      "parking-eur": "parkingEur",
      "flight-eur": "flightEur",
      "train-fare": "trainFare",
      "exchange-rate": "exchangeRate",
      "misc-eur": "miscEur",
      "misc-cny": "miscCny",
      "shanghai-nights": "shanghaiNights",
      "beijing-nights": "beijingNights",
      "shanghai-meals": "shanghaiMeals",
      "beijing-meals": "beijingMeals",
    };

    if (globalInputMap[target.id]) {
      state.costs[globalInputMap[target.id]] = sanitizeNumber(target.value);
      updatePanels();
      saveState();
    }
  });

  const timelinePrev = document.getElementById("timeline-prev");
  if (timelinePrev) {
    timelinePrev.addEventListener("click", () => {
      goToTimelineIndex(currentTimelineIndex - 1);
    });
  }

  const timelineNext = document.getElementById("timeline-next");
  if (timelineNext) {
    timelineNext.addEventListener("click", () => {
      goToTimelineIndex(currentTimelineIndex + 1);
    });
  }
}

function syncTopbarState() {
  const topbar = document.querySelector(".topbar");
  const hero = document.querySelector(".hero");
  if (!topbar) {
    return;
  }

  const compactThreshold = hero ? Math.max(hero.offsetHeight * 0.2, 72) : 72;
  topbar.classList.toggle("is-condensed", window.scrollY > compactThreshold);
}

function renderScenarioCards() {
  const grid = document.getElementById("scenario-grid");
  if (!grid) {
    return;
  }

  grid.innerHTML = Object.entries(scenarioPresets)
    .map(([scenarioId, scenario]) => {
      const active = state.travelMode === scenarioId;
      const projected = getBudgetTotals(applyScenarioPreset(state, scenarioId));

      return `
        <article class="scenario-card ${active ? "selected" : ""}">
          <div class="scenario-top">
            <div>
              <p class="card-kicker">Mode ${scenarioId === "eco" ? "Eco" : "Confort"}</p>
              <h3>${scenario.title}</h3>
              <p class="card-copy">${scenario.summary}</p>
            </div>
            <span class="scenario-pill ${active ? "active" : ""}">${active ? "Actif" : "Preset"}</span>
          </div>
          <div class="scenario-stats">
            <div class="scenario-stat">
              <span>Train</span>
              <strong>${scenario.railLabel}</strong>
            </div>
            <div class="scenario-stat">
              <span>Hôtels</span>
              <strong>${scenario.hotelsLabel}</strong>
            </div>
            <div class="scenario-stat">
              <span>Repas</span>
              <strong>${scenario.mealsLabel}</strong>
            </div>
          </div>
          <div class="scenario-total">
            <span>Total projeté</span>
            <strong>${formatCurrency(projected.totalEur, "EUR")}</strong>
            <small>${formatCurrency(projected.totalCny, "CNY")} tout compris</small>
          </div>
          <div class="card-actions">
            <button class="ghost-button small" data-apply-scenario="${scenarioId}">
              ${active ? "Réappliquer le mode" : "Appliquer ce mode"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderReservationChecklist() {
  const checklist = document.getElementById("reservation-checklist");
  if (!checklist) {
    return;
  }

  checklist.innerHTML = reservationItems
    .map((item) => {
      const checked = state.reservations[item.id];
      const tone = getReservationTone(item, checked);

      return `
        <article class="reservation-item ${checked ? "done" : ""}">
          <div class="reservation-top">
            <div>
              <p class="reservation-date">${item.dueLabel}</p>
              <h3>${item.title}</h3>
            </div>
            <span class="reservation-pill ${tone.className}">${tone.label}</span>
          </div>
          <p class="reservation-note">${item.note}</p>
          <div class="reservation-actions">
            <label class="selector">
              <input
                type="checkbox"
                data-toggle-reservation="${item.id}"
                ${checked ? "checked" : ""}
              />
              <span>${checked ? "Fait" : "À suivre"}</span>
            </label>
            <a class="text-link" href="${item.linkHref}" target="${item.linkHref.startsWith("#") ? "_self" : "_blank"}" ${item.linkHref.startsWith("#") ? "" : 'rel="noreferrer"'}>
              ${item.linkLabel}
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHotelMapInsights() {
  const container = document.getElementById("hotel-map-insights");
  if (!container) {
    return;
  }

  const insights = ["shanghai", "beijing"]
    .flatMap((city) => {
      const cityHotels = hotels
        .filter((hotel) => hotel.city === city)
        .map((hotel) => {
          const focusActivities = getHotelFocusActivities(city);
          const routeDistances = focusActivities.map((activity) =>
            Math.max(haversineKm(hotel.coords, activity.coords) * 1.28, 0.5)
          );
          const averageDistanceKm =
            routeDistances.reduce((sum, distance) => sum + distance, 0) /
            Math.max(routeDistances.length, 1);
          const closeVisits = routeDistances.filter((distance) => distance <= 4.5).length;
          const averageTaxiCny =
            routeDistances.reduce((sum, distance) => sum + estimateTaxiFare(city, distance), 0) /
            Math.max(routeDistances.length, 1);

          return {
            hotel,
            city,
            focusActivities,
            averageDistanceKm,
            closeVisits,
            averageTaxiCny,
          };
        })
        .sort((a, b) => a.averageDistanceKm - b.averageDistanceKm)
        .map((entry, index) => ({
          ...entry,
          rank: index + 1,
        }));

      return cityHotels;
    });

  container.innerHTML = insights
    .map(({ hotel, city, focusActivities, averageDistanceKm, closeVisits, averageTaxiCny, rank }) => {
      const isSelected = state.hotels[city] === hotel.id;
      const cityLabel = city === "shanghai" ? "Shanghai" : "Pékin";
      const bestLabel = rank === 1 ? "La base la plus compacte" : `Option ${rank}`;

      return `
        <article class="hotel-map-card ${isSelected ? "selected" : ""}">
          <div class="hotel-map-head">
            <div>
              <p class="card-kicker">${cityLabel}</p>
              <h3>${hotel.title}</h3>
              <p class="hotel-map-rank">${bestLabel}</p>
            </div>
            <span class="scenario-pill ${isSelected ? "active" : ""}">
              ${isSelected ? "Actuel" : "Comparer"}
            </span>
          </div>
          <p class="hotel-map-copy">${hotel.note}</p>
          <div class="hotel-map-metrics">
            <div class="hotel-map-metric">
              <span>Visites proches</span>
              <strong>${closeVisits}/${focusActivities.length}</strong>
            </div>
            <div class="hotel-map-metric">
              <span>Distance moyenne</span>
              <strong>${formatNumber(averageDistanceKm, 1)} km</strong>
            </div>
            <div class="hotel-map-metric">
              <span>Taxi moyen</span>
              <strong>${formatCurrency(averageTaxiCny, "CNY")}</strong>
            </div>
          </div>
          <div class="card-actions">
            <button class="mini-link" data-focus-location="${hotel.id}">
              Voir l’hôtel
            </button>
            <button class="ghost-button small" data-set-hotel="${hotel.id}" data-city="${hotel.city}">
              Choisir cet hôtel
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = `
    <div class="timeline-viewport" id="timeline-viewport">
      <div class="timeline-track">
        ${itineraryDays
    .map((day) => {
      const cards = day.activityIds.map((activityId) => renderActivityCard(activityById[activityId])).join("");
      return `
        <article class="day-block fade-in timeline-slide" data-day-city="${day.city}" data-timeline-slide>
          <div class="day-head">
            <div>
              <p class="section-kicker">${day.label}</p>
              <h3 class="day-title">${day.title}</h3>
              <p class="day-subtitle">${day.note}</p>
            </div>
          </div>
          <div class="day-grid">
            ${cards}
          </div>
        </article>
      `;
    })
    .join("")}
      </div>
    </div>
  `;

  bindTimelineSwipe();
  renderTimelineProgress();
  window.requestAnimationFrame(() => {
    goToTimelineIndex(currentTimelineIndex, false);
  });
}

function renderTimelineProgress() {
  const progress = document.getElementById("timeline-progress");
  if (!progress) {
    return;
  }

  progress.innerHTML = itineraryDays
    .map(
      (day, index) => `
        <button
          class="timeline-dot ${index === currentTimelineIndex ? "active" : ""}"
          data-timeline-index="${index}"
          aria-label="${day.label}"
          title="${day.label}"
        >
          <span>${index + 1}</span>
        </button>
      `
    )
    .join("");
}

function bindTimelineSwipe() {
  const viewport = document.getElementById("timeline-viewport");
  if (!viewport) {
    return;
  }

  // Touch swipe tracking for fling gestures
  let touchStartX = 0;
  let touchStartTime = 0;
  let isDragging = false;

  viewport.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartTime = Date.now();
    isDragging = true;
    viewport.classList.add("dragging");
  });

  viewport.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove("dragging");

    const touchEndX = e.changedTouches[0].clientX;
    const elapsed = Date.now() - touchStartTime;
    const delta = touchStartX - touchEndX;
    const velocity = Math.abs(delta) / (elapsed || 1);

    // Fling detection: if fast swipe (velocity > 0.5), navigate
    if (velocity > 0.5 && Math.abs(delta) > 30) {
      if (delta > 0) {
        goToTimelineIndex(currentTimelineIndex + 1);
      } else {
        goToTimelineIndex(currentTimelineIndex - 1);
      }
    }
  });

  viewport.addEventListener("scroll", () => {
    const slides = [...viewport.querySelectorAll("[data-timeline-slide]")];
    if (slides.length === 0) {
      return;
    }
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let bestIndex = currentTimelineIndex;
    let bestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    if (bestIndex !== currentTimelineIndex) {
      currentTimelineIndex = bestIndex;
      renderTimelineProgress();
      syncTimelineButtons();
    }
  }, { passive: true });
}

function goToTimelineIndex(index, smooth = true) {
  const viewport = document.getElementById("timeline-viewport");
  const slides = viewport ? [...viewport.querySelectorAll("[data-timeline-slide]")] : [];
  if (!viewport || slides.length === 0) {
    return;
  }

  currentTimelineIndex = clamp(index, 0, slides.length - 1);
  const target = slides[currentTimelineIndex];
  viewport.scrollTo({
    left: target.offsetLeft,
    behavior: smooth ? "smooth" : "auto",
  });
  renderTimelineProgress();
  syncTimelineButtons();
}

function syncTimelineButtons() {
  const prev = document.getElementById("timeline-prev");
  const next = document.getElementById("timeline-next");
  if (prev) {
    prev.disabled = currentTimelineIndex <= 0;
  }
  if (next) {
    next.disabled = currentTimelineIndex >= itineraryDays.length - 1;
  }
}

function renderActivityCard(activity) {
  const checked = state.visits[activity.id];
  const cost = state.visitCosts[activity.id];
  const guide = visitGuides[activity.id] || {};
  const costEur = convertCnyToEur(cost);
  const transportOptions = getTransportOptions(activity);
  const tags = activity.tags
    .map((tag) => {
      const className =
        tag.toLowerCase().includes("gratuit") ? "tag free" : tag.toLowerCase().includes("réserver") ? "tag warn" : "tag";
      return `<span class="${className}">${tag}</span>`;
    })
    .join("");
  const practicalItems = [
    ["Réservation", guide.booking || "Souple"],
    ["Horaires", guide.hours || "Selon la saison"],
    ["Meilleur moment", guide.bestTime || "Flexible"],
    ["Accès", guide.access || "Taxi ou métro"],
  ]
    .map(
      ([label, value]) => `
        <div class="practical-item">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
  const transportMarkup = transportOptions
    .map(
      (option) => `
        <div class="transport-option ${option.isCheapest ? "cheapest" : ""}">
          <span>${option.mode}</span>
          <strong>${formatCurrency(option.costCny, "CNY")}</strong>
          <small>${formatCurrency(convertCnyToEur(option.costCny), "EUR")} • ${option.duration}</small>
          <em>${option.isCheapest ? "Le moins cher" : option.note}</em>
        </div>
      `
    )
    .join("");

  return `
    <article class="timeline-card ${checked ? "selected" : ""}" data-card-group="${activity.city}">
      <div class="card-image">
        <img src="${activity.image}" alt="${activity.title}" loading="lazy" />
      </div>
      <div class="title-row">
        <div>
          <h3>${activity.title}</h3>
          <p class="card-copy">${activity.summary}</p>
        </div>
        <label class="selector">
          <input type="checkbox" data-toggle-visit="${activity.id}" ${checked ? "checked" : ""} />
          <span>Compter</span>
        </label>
      </div>
      <div class="tag-row">${tags}</div>
      <div class="card-meta">
        <div>
          <span>Moment</span>
          <strong>${activity.slot}</strong>
        </div>
        <div>
          <span>Durée</span>
          <strong>${activity.duration}</strong>
        </div>
      </div>
      <div class="practical-grid">
        ${practicalItems}
      </div>
      <p class="card-details">${activity.detail}</p>
      <div class="cost-box">
        <label>
          Budget visite (${activity.currency})
          <input
            type="number"
            min="0"
            step="1"
            value="${cost}"
            data-visit-cost="${activity.id}"
          />
        </label>
        <div class="dual-price">
          <strong>${formatCurrency(cost, "CNY")}</strong>
          <small>${formatCurrency(costEur, "EUR")}</small>
        </div>
      </div>
      <div class="transport-box">
        <div class="transport-title">
          <span>Depuis ton hôtel</span>
          <strong>Quel transport coûte le moins cher ?</strong>
        </div>
        <div class="transport-options">
          ${transportMarkup}
        </div>
      </div>
      <div class="card-actions">
        <button class="mini-link" data-focus-location="${activity.id}">Voir sur la carte</button>
        <a class="text-link" href="${activity.officialUrl}" target="_blank" rel="noreferrer">Site</a>
        <a class="text-link" href="${activity.mapUrl}" target="_blank" rel="noreferrer">Lien carte</a>
      </div>
    </article>
  `;
}

function renderHotels() {
  const grid = document.getElementById("lodging-grid");
  grid.innerHTML = hotels
    .map((hotel) => {
      const selected = state.hotels[hotel.city] === hotel.id;
      const rate = state.hotelRates[hotel.id];
      const cityLabel = hotel.city === "shanghai" ? "Shanghai" : "Pékin";
      return `
        <article class="lodging-card ${selected ? "selected" : ""}" data-card-group="hotels" data-city="${hotel.city}">
          <div class="lodging-top">
            <div>
              <p class="card-kicker">${cityLabel}</p>
              <h3>${hotel.title}</h3>
            </div>
            <label class="selector">
              <input
                type="radio"
                name="hotel-${hotel.city}"
                value="${hotel.id}"
                data-toggle-hotel
                data-city="${hotel.city}"
                ${selected ? "checked" : ""}
              />
              <span>Choisir</span>
            </label>
          </div>
          <p class="lodging-note">${hotel.note}</p>
          <p class="lodging-note"><strong>${hotel.sample}</strong></p>
          <div class="hotel-rate-box">
            <label>
              Prix / nuit (CNY)
              <input type="number" min="0" step="1" value="${rate}" data-hotel-rate="${hotel.id}" />
            </label>
          </div>
          <div class="lodging-links">
            <button class="mini-link" data-focus-location="${hotel.id}">Voir sur la carte</button>
            <a class="text-link" href="${hotel.officialUrl}" target="_blank" rel="noreferrer">Exemple d’hôtel</a>
            <a class="text-link" href="${hotel.mapUrl}" target="_blank" rel="noreferrer">Quartier</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRestaurants() {
  const grid = document.getElementById("restaurant-grid");
  grid.innerHTML = restaurants
    .map((restaurant) => {
      const selected = state.restaurants[restaurant.id];
      const cost = state.restaurantCosts[restaurant.id];
      const cityLabel = restaurant.city === "shanghai" ? "Shanghai" : "Pékin";
      return `
        <article class="restaurant-card ${selected ? "selected" : ""}" data-card-group="restaurants" data-city="${restaurant.city}">
          <div class="restaurant-top">
            <div>
              <p class="card-kicker">${cityLabel}</p>
              <h3>${restaurant.title}</h3>
            </div>
            <label class="selector">
              <input type="checkbox" data-toggle-restaurant="${restaurant.id}" ${selected ? "checked" : ""} />
              <span>Ajouter</span>
            </label>
          </div>
          <div class="tag-row">
            <span class="tag">${restaurant.cuisine}</span>
          </div>
          <p class="restaurant-note">${restaurant.note}</p>
          <div class="restaurant-cost-box">
            <label>
              Budget repas (${restaurant.city === "shanghai" ? "CNY" : "CNY"})
              <input
                type="number"
                min="0"
                step="1"
                value="${cost}"
                data-restaurant-cost="${restaurant.id}"
              />
            </label>
          </div>
          <div class="restaurant-links">
            <a class="text-link" href="${restaurant.officialUrl}" target="_blank" rel="noreferrer">Lien</a>
            <a class="text-link" href="${restaurant.mapUrl}" target="_blank" rel="noreferrer">Carte</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncInputsFromState() {
  const inputBindings = {
    "route-km": state.costs.routeKm,
    "toll-eur": state.costs.tollEur,
    "efficiency-kwh": state.costs.efficiencyKwh,
    "home-share": state.costs.homeShare,
    "home-rate": state.costs.homeRate,
    "super-rate": state.costs.superRate,
    "parking-eur": state.costs.parkingEur,
    "flight-eur": state.costs.flightEur,
    "train-fare": state.costs.trainFare,
    "exchange-rate": state.costs.exchangeRate,
    "misc-eur": state.costs.miscEur,
    "misc-cny": state.costs.miscCny,
    "shanghai-nights": state.costs.shanghaiNights,
    "beijing-nights": state.costs.beijingNights,
    "shanghai-meals": state.costs.shanghaiMeals,
    "beijing-meals": state.costs.beijingMeals,
  };

  Object.entries(inputBindings).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (input) {
      input.value = String(value);
    }
  });

  const trainClass = document.getElementById("train-class");
  if (trainClass) {
    trainClass.value = state.costs.trainClass;
  }
}

function updatePanels() {
  renderScenarioCards();
  renderReservationChecklist();
  renderHotelMapInsights();
  updateTransportMetrics();
  updateBudgetBreakdown();
  updateSelectedItems();
  updateModeSummary();
  syncMapScopeButtons();
  refreshSelectionStyles();
}

function updateTransportMetrics() {
  const energyKwh = (state.costs.routeKm * state.costs.efficiencyKwh) / 100;
  const homeRatio = clamp(state.costs.homeShare / 100, 0, 1);
  const blendedRate = state.costs.homeRate * homeRatio + state.costs.superRate * (1 - homeRatio);
  const electricityCost = energyKwh * blendedRate;
  const routeTotal = electricityCost + state.costs.tollEur + state.costs.parkingEur;

  setText("energy-kwh", `${formatNumber(energyKwh, 1)} kWh`);
  setText("electricity-cost", formatCurrency(electricityCost, "EUR"));
  setText("route-total", formatCurrency(routeTotal, "EUR"));
}

function updateBudgetBreakdown() {
  const totals = getBudgetTotals();
  setText("total-eur", formatCurrency(totals.totalEur, "EUR"));
  setText("total-cny", `${formatCurrency(totals.totalCny, "CNY")} natif`);

  const breakdown = [
    {
      label: "Approche Tesla + parking",
      detail: `${formatCurrency(totals.electricityEur, "EUR")} d'électricité + route Europe`,
      value: formatCurrency(totals.routeEur, "EUR"),
    },
    {
      label: "Vol international",
      detail: "À ajuster dès que tu as le tarif exact",
      value: formatCurrency(state.costs.flightEur, "EUR"),
    },
    {
      label: "TGV Shanghai → Pékin",
      detail: `Mode ${scenarioPresets[state.travelMode]?.title || "personnalisé"}`,
      value: formatCurrency(state.costs.trainFare, "CNY"),
    },
    {
      label: "Hôtel Shanghai",
      detail: `${state.costs.shanghaiNights} nuits`,
      value: formatCurrency(totals.shanghaiHotelCny, "CNY"),
    },
    {
      label: "Hôtel Pékin",
      detail: `${state.costs.beijingNights} nuits`,
      value: formatCurrency(totals.beijingHotelCny, "CNY"),
    },
    {
      label: "Repas Shanghai",
      detail: `${cityDayCounts.shanghai} jours`,
      value: formatCurrency(totals.shanghaiMealsCny, "CNY"),
    },
    {
      label: "Repas Pékin",
      detail: `${cityDayCounts.beijing} jours`,
      value: formatCurrency(totals.beijingMealsCny, "CNY"),
    },
    {
      label: "Visites cochées",
      detail: `${totals.selectedVisits.length} sélection(s)`,
      value: formatCurrency(totals.visitsCny, "CNY"),
    },
    {
      label: "Restaurants ajoutés",
      detail: `${totals.selectedRestaurants.length} sélection(s)`,
      value: formatCurrency(totals.restaurantsCny, "CNY"),
    },
    {
      label: "Divers Europe",
      detail: "Marge manuelle",
      value: formatCurrency(state.costs.miscEur, "EUR"),
    },
    {
      label: "Divers Chine",
      detail: "Marge manuelle",
      value: formatCurrency(state.costs.miscCny, "CNY"),
    },
  ];

  document.getElementById("budget-breakdown").innerHTML = breakdown
    .map(
      (line) => `
        <div class="budget-line">
          <div>
            <strong>${line.label}</strong>
            <span>${line.detail}</span>
          </div>
          <strong>${line.value}</strong>
        </div>
      `
    )
    .join("");
}

function updateModeSummary() {
  const currentMode = scenarioPresets[state.travelMode];
  const label = currentMode ? `Mode actif : ${currentMode.title}` : "Mode actif : personnalisé";
  setText("travel-mode-note", label);
}

function updateSelectedItems() {
  const totals = getBudgetTotals();
  const selectedHotelShanghai = hotelById[state.hotels.shanghai];
  const selectedHotelBeijing = hotelById[state.hotels.beijing];

  const entries = [
    {
      title: "Mode voyage",
      meta: scenarioPresets[state.travelMode]?.title || "Personnalisé",
    },
    {
      title: "Route Castres → Barcelone",
      meta: `${formatCurrency(totals.routeEur, "EUR")} • ${formatNumber(
        (state.costs.routeKm * state.costs.efficiencyKwh) / 100,
        1
      )} kWh`,
    },
    {
      title: selectedHotelShanghai.title,
      meta: `${state.costs.shanghaiNights} nuits • ${formatCurrency(totals.shanghaiHotelCny, "CNY")}`,
    },
    {
      title: selectedHotelBeijing.title,
      meta: `${state.costs.beijingNights} nuits • ${formatCurrency(totals.beijingHotelCny, "CNY")}`,
    },
    ...totals.selectedVisits.map((activity) => ({
      title: activity.title,
      meta: `${activity.slot} • ${formatCurrency(state.visitCosts[activity.id], "CNY")}`,
    })),
    ...totals.selectedRestaurants.map((restaurant) => ({
      title: restaurant.title,
      meta: `${restaurant.cuisine} • ${formatCurrency(state.restaurantCosts[restaurant.id], "CNY")}`,
    })),
  ];

  document.getElementById("selected-items").innerHTML = entries
    .map(
      (entry) => `
        <div class="selected-item">
          <div>
            <strong>${entry.title}</strong>
            <small>${entry.meta}</small>
          </div>
        </div>
      `
    )
    .join("");
}

function refreshSelectionStyles() {
  document.querySelectorAll("[data-toggle-visit]").forEach((input) => {
    input.closest(".timeline-card")?.classList.toggle("selected", input.checked);
  });

  document.querySelectorAll("[data-toggle-restaurant]").forEach((input) => {
    input.closest(".restaurant-card")?.classList.toggle("selected", input.checked);
  });

  document.querySelectorAll("[data-toggle-hotel]").forEach((input) => {
    input.closest(".lodging-card")?.classList.toggle("selected", input.checked);
  });
}

function applyFilter(filter) {
  state.filter = filter;
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  const transportSection = document.querySelector('[data-group="transport"]');
  const hotelSection = document.querySelector('[data-group="hotels"]');
  const restaurantSection = document.querySelector('[data-group="restaurants"]');

  [transportSection, hotelSection, restaurantSection].forEach((section) =>
    section?.classList.remove("filter-hidden")
  );

  document.querySelectorAll(".timeline-card").forEach((card) => {
    card.classList.remove("filter-hidden");
    const group = card.dataset.cardGroup;
    if (filter === "shanghai" || filter === "beijing") {
      card.classList.toggle("filter-hidden", group !== filter);
    }
    if (filter === "transport" || filter === "hotels" || filter === "restaurants") {
      card.classList.add("filter-hidden");
    }
  });

  document.querySelectorAll(".lodging-card").forEach((card) => {
    card.classList.remove("filter-hidden");
    const city = card.dataset.city;
    if (filter === "shanghai" || filter === "beijing") {
      card.classList.toggle("filter-hidden", city !== filter);
    }
    if (filter === "transport" || filter === "restaurants") {
      card.classList.add("filter-hidden");
    }
  });

  document.querySelectorAll(".restaurant-card").forEach((card) => {
    card.classList.remove("filter-hidden");
    const city = card.dataset.city;
    if (filter === "shanghai" || filter === "beijing") {
      card.classList.toggle("filter-hidden", city !== filter);
    }
    if (filter === "transport" || filter === "hotels") {
      card.classList.add("filter-hidden");
    }
  });

  if (filter === "transport") {
    hotelSection?.classList.add("filter-hidden");
    restaurantSection?.classList.add("filter-hidden");
  }
  if (filter === "hotels") {
    transportSection?.classList.add("filter-hidden");
    restaurantSection?.classList.add("filter-hidden");
  }
  if (filter === "restaurants") {
    transportSection?.classList.add("filter-hidden");
    hotelSection?.classList.add("filter-hidden");
  }
  if (filter === "shanghai" || filter === "beijing") {
    transportSection?.classList.add("filter-hidden");
  }

  document.querySelectorAll(".day-block").forEach((block) => {
    const visibleCards = block.querySelectorAll(".timeline-card:not(.filter-hidden)");
    block.classList.toggle("filter-hidden", visibleCards.length === 0);
  });

  saveState();
}

function initMap() {
  maps = [];
  markerIndex = {};

  const summaryContainer = document.getElementById("map");
  const explorerContainer = document.getElementById("planner-map");
  if (!window.L || (!summaryContainer && !explorerContainer)) {
    if (summaryContainer) {
      summaryContainer.innerHTML = "<p>La carte n’a pas pu être chargée dans ce navigateur.</p>";
    }
    if (explorerContainer) {
      explorerContainer.innerHTML = "<p>La carte détaillée n’a pas pu être chargée.</p>";
    }
    return;
  }

  const allLocations = [
    ...activities.map((activity) => ({
      id: activity.id,
      title: activity.title,
      coords: activity.coords,
      city: activity.city,
      type: "activity",
      subtitle: activity.summary,
    })),
    ...hotels.map((hotel) => ({
      id: hotel.id,
      title: hotel.title,
      coords: hotel.coords,
      city: hotel.city,
      type: "hotel",
      subtitle: hotel.sample,
    })),
    ...hubs,
  ];

  scopeBounds = {
    "all-trip": L.latLngBounds([
      [31.0562, 120.9824],
      [43.605, 2.24],
      [41.2974, 2.0833],
      [40.4373, 116.5704],
    ]),
    "europe-route": L.latLngBounds([
      [43.605, 2.24],
      [41.2974, 2.0833],
    ]),
    "china-rail": L.latLngBounds([
      [31.194, 121.3203],
      [39.8651, 116.3786],
    ]),
    "shanghai-cluster": L.latLngBounds(
      activities.filter((activity) => activity.city === "shanghai").map((activity) => activity.coords)
    ),
    "beijing-cluster": L.latLngBounds(
      activities.filter((activity) => activity.city === "beijing").map((activity) => activity.coords)
    ),
  };

  if (summaryContainer) {
    maps.push(createMapInstance("map", allLocations));
  }
  if (explorerContainer) {
    maps.push(createMapInstance("planner-map", allLocations));
  }

  focusScope(state.mapExplorerScope || "all-trip");
  invalidateMaps();
}

function focusScope(scope) {
  if (!scopeBounds[scope] || maps.length === 0) {
    return;
  }
  maps.forEach((mapInstance) => {
    mapInstance.fitBounds(scopeBounds[scope], {
      padding: [32, 32],
    });
  });
}

function focusLocation(locationId) {
  if (!markerIndex[locationId]?.length) {
    return;
  }
  markerIndex[locationId].forEach(({ map, marker }) => {
    const latLng = marker.getLatLng();
    map.setView(latLng, locationId.includes("mutianyu") ? 11 : 13, { animate: true });
    marker.openPopup();
  });
}

function createMapInstance(elementId, locations) {
  const map = L.map(elementId, {
    scrollWheelZoom: true,
    zoomControl: true,
  }).setView([36.2, 112.9], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  locations.forEach((location) => {
    const marker = L.circleMarker(location.coords, {
      radius: location.type === "hub" ? 8 : location.type === "hotel" ? 8 : 7,
      weight: location.type === "hotel" ? 3 : 2,
      color: markerColor(location),
      fillColor: markerColor(location),
      fillOpacity: location.type === "hotel" ? 0.92 : 0.82,
    }).addTo(map);

    marker.bindPopup(`
      <div class="popup-body">
        <strong>${location.title}</strong>
        <span>${location.subtitle || location.city || ""}</span>
      </div>
    `);

    markerIndex[location.id] = markerIndex[location.id] || [];
    markerIndex[location.id].push({ map, marker });
  });

  L.polyline(
    [
      [43.605, 2.24],
      [41.2974, 2.0833],
    ],
    {
      color: "#a5462c",
      weight: 3,
      dashArray: "7 9",
      opacity: 0.8,
    }
  ).addTo(map);

  L.polyline(
    [
      [31.194, 121.3203],
      [39.8651, 116.3786],
    ],
    {
      color: "#1a6c68",
      weight: 3,
      dashArray: "6 10",
      opacity: 0.8,
    }
  ).addTo(map);

  return map;
}

function invalidateMaps() {
  maps.forEach((map) => {
    window.setTimeout(() => map.invalidateSize(), 120);
  });
}

function syncMapScopeButtons() {
  document.querySelectorAll("[data-explorer-scope]").forEach((button) => {
    button.classList.toggle("active-map-scope", button.dataset.explorerScope === state.mapExplorerScope);
  });
}

function getTransportOptions(activity) {
  const override = transportOverrides[activity.id];
  if (override) {
    return markCheapestOption(override);
  }

  const hotelId = state.hotels[activity.city];
  const hotel = hotelById[hotelId];
  if (!hotel) {
    return [];
  }

  const airDistanceKm = haversineKm(hotel.coords, activity.coords);
  const routeDistanceKm = Math.max(airDistanceKm * 1.28, 0.6);
  const options = [];

  if (airDistanceKm <= 2.2) {
    options.push({
      mode: "À pied",
      costCny: 0,
      duration: `${Math.max(10, Math.round((airDistanceKm / 4.6) * 60))} min`,
      note: "Souvent le plus simple si tu es déjà dans le bon quartier.",
    });
  }

  options.push({
    mode: activity.city === "shanghai" ? "Metro / bus" : "Metro",
    costCny: estimatePublicTransitFare(activity.city, routeDistanceKm),
    duration: `${Math.max(18, Math.round(routeDistanceKm * 3.2 + 8))} min`,
    note: "En général le meilleur rapport budget / efficacité.",
  });

  options.push({
    mode: "Taxi / DiDi",
    costCny: estimateTaxiFare(activity.city, routeDistanceKm),
    duration: `${Math.max(12, Math.round(routeDistanceKm * 2 + 6))} min`,
    note: "Le plus pratique porte-à-porte, surtout le soir ou avec fatigue.",
  });

  return markCheapestOption(options);
}

function getHotelFocusActivities(city) {
  const selected = activities.filter((activity) => activity.city === city && state.visits[activity.id]);
  if (selected.length > 0) {
    return selected;
  }

  const recommended = activities.filter((activity) => activity.city === city && activity.recommended);
  if (recommended.length > 0) {
    return recommended;
  }

  return activities.filter((activity) => activity.city === city);
}

function markCheapestOption(options) {
  const cheapest = Math.min(...options.map((option) => option.costCny));
  return options.map((option) => ({
    ...option,
    isCheapest: option.costCny === cheapest,
  }));
}

function estimatePublicTransitFare(city, routeDistanceKm) {
  if (city === "shanghai") {
    if (routeDistanceKm <= 6) {
      return 3;
    }
    return 3 + Math.ceil((routeDistanceKm - 6) / 10);
  }

  if (routeDistanceKm <= 6) {
    return 3;
  }
  if (routeDistanceKm <= 12) {
    return 4;
  }
  if (routeDistanceKm <= 22) {
    return 5;
  }
  if (routeDistanceKm <= 32) {
    return 6;
  }
  return 6 + Math.ceil((routeDistanceKm - 32) / 20);
}

function estimateTaxiFare(city, routeDistanceKm) {
  if (city === "shanghai") {
    if (routeDistanceKm <= 3) {
      return 14;
    }
    const regularDistance = Math.min(routeDistanceKm, 15) - 3;
    const longDistance = Math.max(routeDistanceKm - 15, 0);
    return 14 + regularDistance * 2.7 + longDistance * 4.05;
  }

  if (routeDistanceKm <= 3) {
    return 14;
  }
  const regularDistance = Math.min(routeDistanceKm, 15) - 3;
  const longDistance = Math.max(routeDistanceKm - 15, 0);
  return 14 + regularDistance * 2.3 + longDistance * 3.45;
}

function haversineKm([lat1, lon1], [lat2, lon2]) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function applyScenarioPreset(baseState, scenarioId) {
  const preset = scenarioPresets[scenarioId];
  if (!preset) {
    return cloneState(baseState);
  }

  const nextState = cloneState(baseState);
  nextState.travelMode = scenarioId;
  nextState.costs = {
    ...nextState.costs,
    ...preset.costs,
  };
  nextState.hotels = {
    ...nextState.hotels,
    ...preset.hotels,
  };
  nextState.restaurants = {
    ...Object.fromEntries(restaurants.map((restaurant) => [restaurant.id, false])),
    ...preset.restaurants,
  };
  return nextState;
}

function getReservationTone(item, checked = false) {
  if (checked) {
    return { label: "OK", className: "done" };
  }

  const due = new Date(`${item.dueDate}T09:00:00`);
  const diffMs = due.getTime() - Date.now();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 3) {
    return { label: "Maintenant", className: "now" };
  }
  if (diffDays <= 10) {
    return { label: "Cette semaine", className: "soon" };
  }
  if (diffDays <= 21) {
    return { label: "Bientôt", className: "next" };
  }
  return { label: "À planifier", className: "plan" };
}

function getBudgetTotals(snapshot = state) {
  const energyKwh = (snapshot.costs.routeKm * snapshot.costs.efficiencyKwh) / 100;
  const homeRatio = clamp(snapshot.costs.homeShare / 100, 0, 1);
  const blendedRate = snapshot.costs.homeRate * homeRatio + snapshot.costs.superRate * (1 - homeRatio);
  const electricityEur = energyKwh * blendedRate;
  const routeEur = electricityEur + snapshot.costs.tollEur + snapshot.costs.parkingEur;

  const shanghaiHotelCny =
    (snapshot.hotelRates[snapshot.hotels.shanghai] || 0) * snapshot.costs.shanghaiNights;
  const beijingHotelCny =
    (snapshot.hotelRates[snapshot.hotels.beijing] || 0) * snapshot.costs.beijingNights;

  const shanghaiMealsCny = snapshot.costs.shanghaiMeals * cityDayCounts.shanghai;
  const beijingMealsCny = snapshot.costs.beijingMeals * cityDayCounts.beijing;

  const selectedVisits = activities.filter((activity) => snapshot.visits[activity.id]);
  const selectedRestaurants = restaurants.filter((restaurant) => snapshot.restaurants[restaurant.id]);

  const visitsCny = selectedVisits.reduce(
    (sum, activity) => sum + (snapshot.visitCosts[activity.id] || 0),
    0
  );
  const restaurantsCny = selectedRestaurants.reduce(
    (sum, restaurant) => sum + (snapshot.restaurantCosts[restaurant.id] || 0),
    0
  );

  const totalEurNative = routeEur + snapshot.costs.flightEur + snapshot.costs.miscEur;
  const totalCnyNative =
    snapshot.costs.trainFare +
    shanghaiHotelCny +
    beijingHotelCny +
    shanghaiMealsCny +
    beijingMealsCny +
    visitsCny +
    restaurantsCny +
    snapshot.costs.miscCny;

  const exchangeRate = snapshot.costs.exchangeRate || 1;

  return {
    routeEur,
    electricityEur,
    energyKwh,
    shanghaiHotelCny,
    beijingHotelCny,
    shanghaiMealsCny,
    beijingMealsCny,
    visitsCny,
    restaurantsCny,
    selectedVisits,
    selectedRestaurants,
    totalEur: totalEurNative + totalCnyNative / exchangeRate,
    totalCny: totalCnyNative + totalEurNative * exchangeRate,
  };
}

function buildMapUrl(query) {
  return `https://maps.apple.com/?q=${encodeURIComponent(query)}`;
}

function markerColor(location) {
  if (location.type === "hub") {
    return "#a5462c";
  }
  if (location.type === "hotel") {
    return "#b07a1b";
  }
  return location.city === "shanghai" ? "#1a6c68" : "#2b5fb0";
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return cloneState(defaultState);
    }
    const parsed = JSON.parse(raw);
    return {
      ...cloneState(defaultState),
      ...parsed,
      travelMode: parsed.travelMode || defaultState.travelMode,
      mapExplorerScope: parsed.mapExplorerScope || defaultState.mapExplorerScope,
      costs: {
        ...cloneState(defaultState).costs,
        ...(parsed.costs || {}),
      },
      visits: {
        ...cloneState(defaultState).visits,
        ...(parsed.visits || {}),
      },
      visitCosts: {
        ...cloneState(defaultState).visitCosts,
        ...(parsed.visitCosts || {}),
      },
      hotels: {
        ...cloneState(defaultState).hotels,
        ...(parsed.hotels || {}),
      },
      hotelRates: {
        ...cloneState(defaultState).hotelRates,
        ...(parsed.hotelRates || {}),
      },
      restaurants: {
        ...cloneState(defaultState).restaurants,
        ...(parsed.restaurants || {}),
      },
      restaurantCosts: {
        ...cloneState(defaultState).restaurantCosts,
        ...(parsed.restaurantCosts || {}),
      },
      reservations: {
        ...cloneState(defaultState).reservations,
        ...(parsed.reservations || {}),
      },
    };
  } catch (error) {
    return cloneState(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function sanitizeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function convertCnyToEur(value) {
  const exchangeRate = state.costs.exchangeRate || 1;
  return (value || 0) / exchangeRate;
}

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "EUR" ? 2 : 0,
  }).format(value || 0);
}

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value || 0);
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Local preview over plain HTTP on a LAN IP may block service workers on iPhone.
    });
  });
}
