export interface JewelryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  material: string;
  condition: string;
  price: number;
  images: string[];
}

export interface PageContent {
  slug: string;
  title: string;
  content: string;
}

// Categorie gioielli con icone
export const JEWELRY_CATEGORIES = [
  { id: "anelli", label: "Anelli", icon: "CircleDot" },
  { id: "collane", label: "Collane", icon: "Link2" },
  { id: "bracciali", label: "Bracciali", icon: "Watch" },
  { id: "orecchini", label: "Orecchini", icon: "Sparkles" },
  { id: "orologi", label: "Orologi", icon: "Clock" },
  { id: "diamanti", label: "Diamanti", icon: "Gem" },
  { id: "vintage", label: "Vintage", icon: "Crown" },
] as const;

// Materiali disponibili
export const JEWELRY_MATERIALS = [
  "Oro Giallo 18k",
  "Oro Bianco 18k",
  "Oro Rosa 18k",
  "Argento 925",
  "Platino",
  "Acciaio",
] as const;

// Condizioni prodotto
export const JEWELRY_CONDITIONS = [
  "Nuovo",
  "Ricondizionato",
  "Vintage",
] as const;

export const APP_SETTINGS = {
  siteName: "GioiPlanet",
  contact: {
    phone: "059 8771943",
    mobile: "335 5612631",
    email: "info@gioiplanet.it",
    pec: "gioiplanet@legalmail.it",
    address: "Via Jacopo Barozzi n° 102, 41126 Modena",
    city: "Modena",
    openingHours: "Lun-Ven: 9:30-13:00 / 15:30-19:00",
    saturdayHours: "Su appuntamento",
  },
  legal: {
    companyName: "GioiPlanet S.r.l.",
    vatNumber: "03796860363",
    rea: "MO-418485",
  },
  social: {
    youtube: "#",
    facebook: "#",
    instagram: "#",
  },
};

// 20 prodotti variati con dati realistici
export const MOCK_JEWELRY: JewelryItem[] = [
  {
    id: "jp-1",
    slug: "anello-solitario-diamante",
    title: "Anello Solitario con Diamante",
    description:
      "Elegante anello solitario in oro bianco 18k con diamante centrale taglio brillante da 0.50ct. Certificato di autenticità incluso. Perfetto per fidanzamenti e occasioni speciali.",
    category: "anelli",
    material: "Oro Bianco 18k",
    condition: "Nuovo",
    price: 2450,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-2",
    slug: "collana-tennis-diamanti",
    title: "Collana Tennis con Diamanti",
    description:
      "Splendida collana tennis in oro bianco 18k con 45 diamanti taglio brillante per un totale di 3.50ct. Un classico intramontabile che esalta ogni décolleté.",
    category: "collane",
    material: "Oro Bianco 18k",
    condition: "Ricondizionato",
    price: 8900,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-3",
    slug: "bracciale-rigido-oro-rosa",
    title: "Bracciale Rigido in Oro Rosa",
    description:
      "Bracciale rigido in oro rosa 18k dal design contemporaneo. Chiusura a scatto di sicurezza. Lavorazione artigianale italiana di alta qualità.",
    category: "bracciali",
    material: "Oro Rosa 18k",
    condition: "Nuovo",
    price: 1850,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-4",
    slug: "orecchini-perle-diamanti",
    title: "Orecchini con Perle e Diamanti",
    description:
      "Raffinati orecchini pendenti con perle australiane e contorno di diamanti. Montatura in oro bianco 18k. Eleganza senza tempo per serate speciali.",
    category: "orecchini",
    material: "Oro Bianco 18k",
    condition: "Nuovo",
    price: 3200,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-5",
    slug: "rolex-datejust-41",
    title: "Rolex Datejust 41mm",
    description:
      "Iconico Rolex Datejust 41mm in acciaio e oro giallo con quadrante champagne. Movimento automatico certificato COSC. Completo di scatola e garanzia.",
    category: "orologi",
    material: "Acciaio",
    condition: "Ricondizionato",
    price: 12500,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-6",
    slug: "diamante-sfuso-1ct",
    title: "Diamante Sfuso 1.00ct",
    description:
      "Diamante naturale taglio brillante rotondo da 1.00ct, colore G, purezza VS1. Certificato GIA. Ideale per creazioni personalizzate o investimento.",
    category: "diamanti",
    material: "Platino",
    condition: "Nuovo",
    price: 7800,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-7",
    slug: "spilla-art-deco",
    title: "Spilla Art Déco Anni '30",
    description:
      "Rara spilla Art Déco degli anni '30 in platino con diamanti e zaffiri. Pezzo da collezione in condizioni eccezionali. Provenienza documentata.",
    category: "vintage",
    material: "Platino",
    condition: "Vintage",
    price: 4500,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-8",
    slug: "anello-trilogy-diamanti",
    title: "Anello Trilogy con Diamanti",
    description:
      "Classico anello trilogy in oro giallo 18k con tre diamanti taglio brillante da 0.30ct ciascuno. Simbolo di passato, presente e futuro.",
    category: "anelli",
    material: "Oro Giallo 18k",
    condition: "Nuovo",
    price: 2100,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-9",
    slug: "collana-girocollo-argento",
    title: "Collana Girocollo in Argento",
    description:
      "Elegante girocollo in argento 925 rodiato con maglie intrecciate. Design moderno e raffinato, perfetto per ogni occasione. Lunghezza regolabile.",
    category: "collane",
    material: "Argento 925",
    condition: "Nuovo",
    price: 320,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-10",
    slug: "bracciale-tennis-diamanti",
    title: "Bracciale Tennis con Diamanti",
    description:
      "Bracciale tennis in oro bianco 18k con 50 diamanti taglio brillante per un totale di 2.50ct. Chiusura di sicurezza doppia. Eleganza pura.",
    category: "bracciali",
    material: "Oro Bianco 18k",
    condition: "Ricondizionato",
    price: 5600,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-11",
    slug: "orecchini-punto-luce",
    title: "Orecchini Punto Luce",
    description:
      "Orecchini punto luce in oro bianco 18k con diamanti da 0.20ct ciascuno. Classici e versatili, perfetti per uso quotidiano o occasioni speciali.",
    category: "orecchini",
    material: "Oro Bianco 18k",
    condition: "Nuovo",
    price: 890,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-12",
    slug: "omega-speedmaster",
    title: "Omega Speedmaster Professional",
    description:
      "Leggendario Omega Speedmaster Professional Moonwatch. Movimento manuale calibro 1861. L'orologio che ha conquistato la Luna. Condizioni eccellenti.",
    category: "orologi",
    material: "Acciaio",
    condition: "Ricondizionato",
    price: 6800,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-13",
    slug: "diamante-princess-075ct",
    title: "Diamante Taglio Princess 0.75ct",
    description:
      "Diamante naturale taglio princess da 0.75ct, colore F, purezza VVS2. Certificato IGI. Fuoco e brillantezza eccezionali.",
    category: "diamanti",
    material: "Platino",
    condition: "Nuovo",
    price: 4200,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-14",
    slug: "anello-anni-50-rubino",
    title: "Anello Anni '50 con Rubino",
    description:
      "Magnifico anello degli anni '50 in oro giallo 18k con rubino naturale birmano da 2ct e contorno di diamanti. Pezzo unico da collezione.",
    category: "vintage",
    material: "Oro Giallo 18k",
    condition: "Vintage",
    price: 6500,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-15",
    slug: "anello-fascia-diamanti",
    title: "Anello a Fascia con Diamanti",
    description:
      "Anello a fascia in oro bianco 18k interamente pavé di diamanti. 1.20ct totali. Design contemporaneo di grande impatto visivo.",
    category: "anelli",
    material: "Oro Bianco 18k",
    condition: "Nuovo",
    price: 3400,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-16",
    slug: "collana-pendente-smeraldo",
    title: "Collana con Pendente Smeraldo",
    description:
      "Elegante collana in oro giallo 18k con pendente smeraldo colombiano da 1.50ct e contorno di diamanti. Verde intenso di grande purezza.",
    category: "collane",
    material: "Oro Giallo 18k",
    condition: "Ricondizionato",
    price: 4800,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-17",
    slug: "bracciale-maglia-oro",
    title: "Bracciale a Maglia in Oro",
    description:
      "Bracciale a maglia groumette in oro giallo 18k. Peso 25 grammi. Classico italiano di grande versatilità. Chiusura con moschettone di sicurezza.",
    category: "bracciali",
    material: "Oro Giallo 18k",
    condition: "Nuovo",
    price: 2900,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-18",
    slug: "orecchini-cerchio-oro-rosa",
    title: "Orecchini a Cerchio Oro Rosa",
    description:
      "Orecchini a cerchio in oro rosa 18k con superficie satinata. Diametro 3cm. Design minimal ed elegante per un look contemporaneo.",
    category: "orecchini",
    material: "Oro Rosa 18k",
    condition: "Nuovo",
    price: 650,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-19",
    slug: "cartier-tank-francaise",
    title: "Cartier Tank Française",
    description:
      "Iconico Cartier Tank Française in acciaio. Movimento al quarzo. Design Art Déco intramontabile. Completo di scatola e documenti originali.",
    category: "orologi",
    material: "Acciaio",
    condition: "Ricondizionato",
    price: 4200,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
  {
    id: "jp-20",
    slug: "collana-perle-epoca",
    title: "Collana di Perle d'Epoca",
    description:
      "Filo di perle giapponesi Akoya degli anni '60 con chiusura in oro bianco e diamanti. 65 perle da 7mm di grande lucentezza. Eleganza senza tempo.",
    category: "vintage",
    material: "Oro Bianco 18k",
    condition: "Vintage",
    price: 2800,
    images: [
      "/placeholder-jewelry.svg",
      "/placeholder-jewelry-2.svg",
      "/placeholder-jewelry-3.svg",
    ],
  },
];

export const MOCK_SERVICES = [
  {
    title: "Compravendita",
    description:
      "Acquistiamo oro, argento e pietre preziose alla migliore quotazione di mercato. Pagamento immediato e massima trasparenza.",
    link: "/compravendita",
    iconName: "Coins",
  },
  {
    title: "Stime e Perizie",
    description:
      "Valutazioni professionali certificate per eredità, assicurazioni o semplice curiosità. Esperti gemmologi in sede.",
    link: "/stime-perizie",
    iconName: "Scale",
  },
  {
    title: "Shop Online",
    description:
      "Scopri la nostra selezione di gioielli rigenerati e orologi di prestigio a prezzi vantaggiosi.",
    link: "/shop",
    iconName: "ShoppingBag",
  },
];
