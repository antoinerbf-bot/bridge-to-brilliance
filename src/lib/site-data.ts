export type Locale = "fr" | "en" | "zh";
export type ServiceTone = "sky" | "coral" | "leaf" | "grape" | "sun" | "cream" | "ink";

export const exchange = { date: "15 septembre 2026", EUR: 0.11048, USD: 0.12748 } as const;

type LocalText = Record<Locale, string>;

export type PriceOption = {
  label: LocalText;
  hkd: number;
  suffix: LocalText;
  from?: boolean;
};

export type Service = {
  slug: string;
  number: string;
  tone: ServiceTone;
  name: LocalText;
  short: LocalText;
  description: LocalText;
  features: Record<Locale, string[]>;
  prices: PriceOption[];
};

export const services: Service[] = [
  {
    slug: "welcome-package", number: "01", tone: "sky",
    name: { fr: "Pack Bienvenue", en: "Welcome Package", zh: "迎新安頓服務" },
    short: { fr: "Une installation sereine à Hong Kong, de bout en bout.", en: "A settled start to life in Hong Kong.", zh: "從抵埗第一天起，安心展開香港生活。" },
    description: { fr: "S’installer dans une nouvelle ville implique des dizaines de démarches dans un système inconnu. Nous réunissons logement, banque, documents, école et aide domestique autour d’un interlocuteur de confiance.", en: "Arriving in a new city involves dozens of unfamiliar tasks. We bring housing, banking, identity documents, schooling and domestic help together under one trusted point of contact.", zh: "初到新城市，要處理無數陌生手續。我們以一位專屬聯絡人，統籌住屋、銀行、身份文件、學校及家務支援。" },
    features: { fr: ["Recherche de logement et visites", "Ouverture de compte bancaire", "Accompagnement HKID", "Écoles et aide domestique"], en: ["Housing search & viewings", "Bank account assistance", "HKID application guidance", "Schools & domestic help"], zh: ["物業搜尋及睇樓支援", "銀行開戶協助", "香港身份證申請指引", "學校及家務助理配對"] },
    prices: [
      { label: { fr: "Bienvenue Essentiel", en: "Essential Welcome", zh: "基本迎新計劃" }, hkd: 4000, suffix: { fr: "tâches essentielles", en: "core relocation tasks", zh: "核心安頓事項" }, from: true },
      { label: { fr: "Bienvenue Complet", en: "Complete Welcome", zh: "全面迎新計劃" }, hkd: 8000, suffix: { fr: "installation familiale complète", en: "full family relocation", zh: "全家安頓支援" } },
    ],
  },
  {
    slug: "bodyguard-service", number: "02", tone: "coral",
    name: { fr: "Protection rapprochée", en: "Bodyguard Service", zh: "貼身保安服務" },
    short: { fr: "Protection licenciée, discrète et parfaitement maîtrisée.", en: "Licensed close protection, discreetly delivered.", zh: "持牌、低調而專業的貼身保護。" },
    description: { fr: "Nos agents de protection rapprochée agréés SGSIA accompagnent personnes, familles et événements. Prévention, discrétion et jugement priment toujours sur la démonstration de force.", en: "Our SGSIA-licensed close protection officers support individuals, families and events, with prevention, discretion and good judgement ahead of visible force.", zh: "我們的持牌 SGSIA 貼身保安人員為個人、家庭及活動提供支援，以預防、低調及專業判斷為先。" },
    features: { fr: ["Agents agréés SGSIA", "Protection de dirigeants", "Protection familiale", "Sécurité événementielle"], en: ["SGSIA-licensed officers", "Executive protection", "Family protection", "Event & venue security"], zh: ["SGSIA 持牌保安人員", "行政人員保護", "家庭保護", "活動及場地保安"] },
    prices: [
      { label: { fr: "À l’heure", en: "Per hour", zh: "每小時" }, hkd: 800, suffix: { fr: "/ heure · minimum 4 h", en: "/ hour · 4-hour minimum", zh: "/ 小時 · 最少 4 小時" }, from: true },
      { label: { fr: "Demi-journée", en: "Half day", zh: "半日" }, hkd: 3200, suffix: { fr: "4 heures", en: "4 hours", zh: "4 小時" } },
      { label: { fr: "Journée complète", en: "Full day", zh: "全日" }, hkd: 6400, suffix: { fr: "8 heures", en: "8 hours", zh: "8 小時" } },
      { label: { fr: "Sécurité événementielle", en: "Event security", zh: "活動保安" }, hkd: 4000, suffix: { fr: "à partir de", en: "from", zh: "起" }, from: true },
    ],
  },
  {
    slug: "dog-walking", number: "03", tone: "leaf",
    name: { fr: "Promenade de chiens", en: "Dog Walking", zh: "專業遛狗服務" },
    short: { fr: "Des promenades ponctuelles et attentionnées, en toute confiance.", en: "Reliable, caring walks for your dog.", zh: "準時細心，讓您的愛犬安心散步。" },
    description: { fr: "Une routine fiable garde votre chien heureux pendant votre travail ou vos voyages. Nous suivons vos consignes, respectons vos clés et envoyons un compte rendu après chaque promenade.", en: "A dependable routine keeps your dog happy while you work or travel. We follow your instructions, handle keys with care and can send an update after each walk.", zh: "穩定的散步安排，讓您工作或外遊時愛犬依然開心。我們遵從指示、妥善保管鑰匙，並可於每次散步後匯報。" },
    features: { fr: ["Promeneurs vérifiés", "Horaires hebdomadaires flexibles", "Compte rendu après la promenade", "Clés manipulées avec soin"], en: ["Vetted walkers", "Flexible weekly schedules", "Post-walk update", "Keys handled with care"], zh: ["經審核的遛狗員", "彈性每週時間表", "散步後狀況更新", "妥善保管門匙"] },
    prices: [
      { label: { fr: "30 minutes", en: "30 minutes", zh: "30 分鐘" }, hkd: 150, suffix: { fr: "/ promenade", en: "/ walk", zh: "/ 次" } },
      { label: { fr: "1 heure", en: "1 hour", zh: "1 小時" }, hkd: 250, suffix: { fr: "/ promenade", en: "/ walk", zh: "/ 次" } },
    ],
  },
  {
    slug: "babysitting-pickup", number: "04", tone: "grape",
    name: { fr: "Garde d’enfants & sortie d’école", en: "Babysitting & After-School Pickup", zh: "托兒及課後接送" },
    short: { fr: "Une garde attentive et des sorties d’école fiables.", en: "Trusted care and safe school pickups.", zh: "細心照顧，安心接送。" },
    description: { fr: "Nos accompagnants sont expérimentés et informés de la routine, des allergies et des préférences de votre famille. Sécurité, ponctualité et communication claire sont prioritaires.", en: "Our carers are experienced and briefed on your family’s routine, allergies and preferences. Safety, punctuality and clear communication come first.", zh: "我們的照顧員經驗豐富，並會事先了解家庭習慣、敏感事項及喜好，以安全、準時和清晰溝通為首要。" },
    features: { fr: ["Accompagnants expérimentés", "Sortie d’école ponctuelle", "Prise en compte des allergies", "Communication avec les parents"], en: ["Experienced, vetted carers", "On-time school pickup", "Routine & allergy briefing", "Clear parent communication"], zh: ["經驗豐富的照顧員", "準時課後接送", "了解日常及敏感事項", "與家長清晰溝通"] },
    prices: [
      { label: { fr: "Garde d’enfants", en: "Babysitting", zh: "托兒服務" }, hkd: 120, suffix: { fr: "/ heure", en: "/ hour", zh: "/ 小時" }, from: true },
      { label: { fr: "Sortie d’école", en: "After-school pickup", zh: "課後接送" }, hkd: 150, suffix: { fr: "/ trajet", en: "/ session", zh: "/ 次" } },
    ],
  },
  {
    slug: "social-accompaniment", number: "05", tone: "sun",
    name: { fr: "Accompagnement social", en: "Social Accompaniment", zh: "社交陪伴服務" },
    short: { fr: "Une présence chaleureuse pour mieux découvrir la ville.", en: "Friendly company for newcomers.", zh: "以親切陪伴，融入香港生活。" },
    description: { fr: "S’installer à Hong Kong est plus simple en bonne compagnie. Promenade au bord du port, café ou sortie culturelle : nous avançons à votre rythme.", en: "Settling into Hong Kong is easier with company. Enjoy a harbour walk, coffee meetup or cultural outing at a pace that suits you.", zh: "有人陪伴，適應香港生活更輕鬆。無論海濱散步、咖啡聚會或文化遊覽，我們都配合您的步伐。" },
    features: { fr: ["Promenades au bord du port", "Rencontres autour d’un café", "Sorties culturelles", "Accueil des nouveaux arrivants"], en: ["Harbour walks", "Coffee meetups", "Cultural outings", "Company for newcomers"], zh: ["海濱散步", "咖啡聚會", "文化及社區遊覽", "新來港人士陪伴"] },
    prices: [
      { label: { fr: "À l’heure", en: "Per hour", zh: "每小時" }, hkd: 250, suffix: { fr: "/ heure", en: "/ hour", zh: "/ 小時" }, from: true },
      { label: { fr: "Demi-journée", en: "Half day", zh: "半日" }, hkd: 900, suffix: { fr: "4 heures", en: "4 hours", zh: "4 小時" } },
    ],
  },
  {
    slug: "gastronomic-reservations", number: "06", tone: "cream",
    name: { fr: "Réservations gastronomiques", en: "Gastronomic Reservations", zh: "高級餐飲預訂" },
    short: { fr: "Les tables les plus recherchées de Hong Kong.", en: "Hong Kong’s hardest-to-book tables.", zh: "為您預訂香港一席難求的餐桌。" },
    description: { fr: "Nous gérons demandes, horaires et détails pour rendre votre soirée fluide : table difficile à obtenir, dîner privé ou occasion particulière.", en: "We handle requests, timing and details so your evening is effortless, from a hard-to-get table to a private dinner or special occasion.", zh: "我們代辦預訂、時間及細節，從熱門餐廳到私人晚宴或特別場合，讓您輕鬆享受整個晚上。" },
    features: { fr: ["Tables difficiles à obtenir", "Dîners privés", "Occasions spéciales", "Préférences alimentaires et placement"], en: ["Hard-to-get reservations", "Private dining", "Special occasions", "Dietary & seating preferences"], zh: ["熱門餐廳預訂", "私人宴會安排", "特別場合策劃", "飲食及座位偏好"] },
    prices: [
      { label: { fr: "Demande de réservation", en: "Reservation request", zh: "餐廳預訂" }, hkd: 500, suffix: { fr: "/ demande", en: "/ request", zh: "/ 次" }, from: true },
      { label: { fr: "Dîner privé", en: "Private dining", zh: "私人宴會" }, hkd: 1500, suffix: { fr: "à partir de", en: "from", zh: "起" }, from: true },
    ],
  },
  {
    slug: "administrative-concierge", number: "07", tone: "ink",
    name: { fr: "Conciergerie administrative", en: "Administrative Concierge", zh: "行政禮賓服務" },
    short: { fr: "Vos courses et formalités, prises en charge.", en: "Your errands and paperwork, handled.", zh: "代辦日常雜務及基本文件。" },
    description: { fr: "Nous vous libérons des petites tâches qui s’accumulent : colis, courses, rendez-vous et formalités simples, ponctuellement ou régulièrement.", en: "We take everyday administrative tasks off your plate: parcels, errands, appointments and straightforward paperwork, on demand or regularly.", zh: "我們代辦日常累積的小事，包括收取包裹、跑腿、預約及基本文書，可按次或定期安排。" },
    features: { fr: ["Courses et achats personnels", "Réception et livraison de colis", "Prise de rendez-vous", "Formalités simples"], en: ["Errands & personal shopping", "Parcel reception & delivery", "Appointment booking", "Basic paperwork"], zh: ["跑腿及私人採購", "包裹收取及送遞", "預約安排", "基本文件支援"] },
    prices: [
      { label: { fr: "À l’heure", en: "Per hour", zh: "每小時" }, hkd: 300, suffix: { fr: "/ heure", en: "/ hour", zh: "/ 小時" }, from: true },
      { label: { fr: "Course ou colis", en: "Single errand / parcel", zh: "單次跑腿／包裹" }, hkd: 250, suffix: { fr: "/ tâche", en: "/ task", zh: "/ 次" } },
    ],
  },
];

export const copy = {
  fr: { home: "Accueil", services: "Services", pricing: "Tarifs", about: "À propos", contact: "Contact", book: "Réserver", heroTag: "Hong Kong · conciergerie humaine", heroA: "Votre pont", heroB: "vers Hong Kong.", heroBody: "Sept services, un seul numéro. Nous nous occupons de tout, vous profitez de la ville.", discover: "Découvrir les services", appointment: "Prendre rendez-vous", seven: "07 services", everything: "Tout ce dont vous avez besoin.", everythingBody: "Chaque service a sa page, son tarif et une réponse humaine. Choisissez, nous nous adaptons.", bridge: "Le pont", bridgeTitle: "Un pont, pas un mur.", bridgeBody: "Notre symbole relie deux rives : la vôtre et celle de Hong Kong. Fin, fiable, toujours ouvert.", express: "Réservation express", answer: "Échangez directement avec notre équipe.", available: "Hong Kong · FR € · EN $ · 繁 HK$", from: "À partir de", included: "Ce qui est inclus", rates: "Tarifs clairs", request: "Demander ce service", noPayment: "Demande confirmée personnellement. Aucun paiement en ligne.", allServices: "Tous les services", talk: "Parlons de votre besoin", values: "Nos valeurs", fullName: "Nom complet", email: "E-mail", message: "Votre demande", send: "Envoyer la demande", serviceArea: "Zone de service", responseTime: "Délai de réponse", oneDay: "Généralement sous un jour ouvré", languageLabel: "Langue et devise", rateNote: "Conversions indicatives au taux du 15 septembre 2026. Les prix HKD font foi." },
  en: { home: "Home", services: "Services", pricing: "Pricing", about: "About", contact: "Contact", book: "Book", heroTag: "Hong Kong · human concierge", heroA: "Your bridge", heroB: "to Hong Kong.", heroBody: "Seven services, one number. We handle the details, you enjoy the city.", discover: "Explore services", appointment: "Make a request", seven: "07 services", everything: "Everything you need.", everythingBody: "Every service has its own page, clear pricing and a human response. Choose, and we adapt.", bridge: "The bridge", bridgeTitle: "A bridge, not a barrier.", bridgeBody: "Our symbol connects two shores: yours and Hong Kong’s. Refined, reliable, always open.", express: "Express booking", answer: "Speak directly with our team.", available: "Hong Kong · FR € · EN $ · 繁 HK$", from: "From", included: "What’s included", rates: "Clear pricing", request: "Request this service", noPayment: "Request-to-book, confirmed personally. No payment online.", allServices: "All services", talk: "Tell us what you need", values: "Our values", fullName: "Full name", email: "Email", message: "Your request", send: "Send request", serviceArea: "Service area", responseTime: "Response time", oneDay: "Usually within one business day", languageLabel: "Language and currency", rateNote: "Indicative conversions at the 15 September 2026 rate. HKD prices prevail." },
  zh: { home: "首頁", services: "服務", pricing: "收費", about: "關於我們", contact: "聯絡", book: "預約", heroTag: "香港 · 貼心禮賓服務", heroA: "連接您的橋樑", heroB: "通往香港生活。", heroBody: "七項服務，一個聯絡號碼。繁瑣細節由我們處理，城市生活由您享受。", discover: "探索服務", appointment: "提出需求", seven: "07 項服務", everything: "您需要的一切。", everythingBody: "每項服務均設獨立頁面、清晰收費及真人回覆。我們按您的需要靈活安排。", bridge: "橋樑", bridgeTitle: "連接彼此，而非築起高牆。", bridgeBody: "我們的標誌連接兩岸：您所在之處與香港。細緻、可靠，時刻為您開放。", express: "快速預約", answer: "直接與我們的團隊聯絡。", available: "香港 · FR € · EN $ · 繁 HK$", from: "起", included: "服務包括", rates: "清晰收費", request: "查詢此服務", noPayment: "我們會親自確認預約，毋須網上付款。", allServices: "所有服務", talk: "告訴我們您的需要", values: "我們的價值", fullName: "姓名", email: "電郵", message: "您的需求", send: "送出查詢", serviceArea: "服務地區", responseTime: "回覆時間", oneDay: "一般於一個工作天內", languageLabel: "語言及貨幣", rateNote: "外幣換算按 2026 年 9 月 15 日參考匯率，最終以港幣價格為準。" },
} as const;

export function formatPrice(hkd: number, locale: Locale) {
  if (locale === "zh") return `HK$${Math.round(hkd).toLocaleString("en-HK")}`;
  const currency = locale === "fr" ? "EUR" : "USD";
  const value = hkd * exchange[currency];
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}