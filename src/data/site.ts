// Real business data, taken from the current uptownbarbershop.lt site.
// Anything marked DEMO is placeholder content for the pitch and must be
// confirmed with the owners before going live.

export type Lang = 'lt' | 'en';
type T = Record<Lang, string>;

export const contact = {
  phone: '+37061717311',
  phoneDisplay: '+370 617 17311',
  email: 'uptbarbershop@gmail.com',
  facebook: 'https://www.facebook.com/UptownBarbershopVilnius',
  instagram: 'https://www.instagram.com/uptownbarbershopvilnius/',
  academyForm: 'https://forms.gle/pdQky8RiTMp589Vu6',
};

// Each shop has its own Treatwell venue: bookUrl opens that shop's booking menu.
// Treatwell ratings per shop (from each shop's public Treatwell page, Nov 2026).
// Update the numbers occasionally; they are shown in the reviews section.
export const locations = [
  { id: 'basanaviciaus', street: 'Basanavičiaus g. 53', city: { lt: 'Vilnius', en: 'Vilnius' } as T,
    rating: 4.9, reviews: 5466, reviewsUrl: 'https://www.treatwell.lt/salonas/uptown-barbers-naujamiestis/',
    bookUrl: 'https://book.treatwell.lt/salonas/401645/meniu/' },
  { id: 'kernaves', street: 'Kernavės g. 14', city: { lt: 'Vilnius', en: 'Vilnius' } as T,
    rating: 4.9, reviews: 2061, reviewsUrl: 'https://www.treatwell.lt/salonas/uptown-barbers-snipiskes/',
    bookUrl: 'https://book.treatwell.lt/salonas/426341/meniu/' },
  { id: 'kraziu', street: 'Kražių g. 25', city: { lt: 'Vilnius', en: 'Vilnius' } as T,
    rating: 4.9, reviews: 1077, reviewsUrl: 'https://www.treatwell.lt/salonas/uptown-barbers-senamiestis/',
    bookUrl: 'https://book.treatwell.lt/salonas/418302/meniu/' },
  { id: 'savanoriu', street: 'Savanorių pr. 112', city: { lt: 'Kaunas', en: 'Kaunas' } as T,
    rating: 4.9, reviews: 1809, reviewsUrl: 'https://www.treatwell.lt/salonas/uptown-barbers-zaliakalnis/',
    bookUrl: 'https://book.treatwell.lt/salonas/428755/meniu/' },
];

export const reviewsTotal = locations.reduce((n, l) => n + l.reviews, 0);
// Review-weighted average across all shops, one decimal.
export const ratingAvg = Math.round((locations.reduce((n, l) => n + l.rating * l.reviews, 0) / reviewsTotal) * 10) / 10;

export const mapsUrl = (street: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Uptown Barbers ${street}, ${city}`)}`;

// Price list from the shops' Treatwell pages (Nov 2026). Ranges span the
// cheapest to the most senior barber across all shops (regular prices,
// not Treatwell discounts). `only` = offered at one shop only.
export const services: {
  id: string;
  name: T;
  desc: T;
  price: [number, number];
  minutes: number;
  only?: string;
}[] = [
  {
    id: 'haircut',
    name: { lt: 'Vyriškas kirpimas', en: 'Haircut' },
    desc: { lt: 'Kirpimas ir sušukavimas.', en: 'Cut and blow-dry.' },
    price: [20, 35],
    minutes: 60,
  },
  {
    id: 'beard',
    name: { lt: 'Barzdos ir ūsų formavimas', en: 'Beard & moustache trim' },
    desc: { lt: 'Formavimas mašinėle ir žirklėmis.', en: 'Shaped with clippers and scissors.' },
    price: [15, 25],
    minutes: 30,
  },
  {
    id: 'combo',
    name: { lt: 'Kirpimas + barzda', en: 'Haircut + beard' },
    desc: { lt: 'Kirpimas ir barzdos formavimas mašinėle.', en: 'Haircut plus a clipper beard trim.' },
    price: [30, 45],
    minutes: 90,
  },
  {
    id: 'kids',
    name: { lt: 'Vaikiškas kirpimas', en: 'Kid’s cut' },
    desc: { lt: 'Kirpimas vaikams.', en: 'Haircut for children.' },
    price: [20, 35],
    minutes: 60,
  },
  {
    id: 'razor-combo',
    name: { lt: 'Kirpimas + skutimas peiliukais', en: 'Haircut + razor shave' },
    desc: { lt: 'Barzdos skutimas ir modeliavimas peiliukais su karštais ir šaltais rankšluosčiais.', en: 'Straight-razor beard shave and shaping with hot and cold towels.' },
    price: [55, 55],
    minutes: 90,
    only: 'basanaviciaus',
  },
  {
    id: 'razor-beard',
    name: { lt: 'Barzdos skutimas peiliukais', en: 'Razor beard shave' },
    desc: { lt: 'Skutimas ir formavimas peiliukais.', en: 'Straight-razor shave and shaping.' },
    price: [30, 30],
    minutes: 60,
    only: 'basanaviciaus',
  },
  {
    id: 'head-shave',
    name: { lt: 'Galvos skutimas peiliukais', en: 'Razor head shave' },
    desc: { lt: 'Su karštais rankšluosčiais.', en: 'With hot towels.' },
    price: [30, 30],
    minutes: 60,
    only: 'basanaviciaus',
  },
  {
    id: 'wash',
    name: { lt: 'Galvos plovimas ir sušukavimas', en: 'Wash & style' },
    desc: { lt: 'Plovimas ir šukuosena.', en: 'Hair wash and styling.' },
    price: [15, 15],
    minutes: 15,
    only: 'basanaviciaus',
  },
];

// DEMO: placeholder barbers for the booking prototype. Tier picks the price
// inside each service's range (0 = low end, 1 = middle, 2 = top).
export const barbers = [
  { id: 'b1', name: 'Lukas', tier: 2, loc: 'basanaviciaus' },
  { id: 'b2', name: 'Matas', tier: 1, loc: 'basanaviciaus' },
  { id: 'b3', name: 'Rokas', tier: 0, loc: 'basanaviciaus' },
  { id: 'b4', name: 'Tomas', tier: 2, loc: 'kernaves' },
  { id: 'b5', name: 'Ignas', tier: 0, loc: 'kernaves' },
  { id: 'b6', name: 'Paulius', tier: 1, loc: 'kraziu' },
  { id: 'b7', name: 'Domas', tier: 0, loc: 'kraziu' },
  { id: 'b8', name: 'Karolis', tier: 2, loc: 'savanoriu' },
  { id: 'b9', name: 'Jonas', tier: 1, loc: 'savanoriu' },
];

export const tierLabel: Record<number, T> = {
  0: { lt: 'Barberis', en: 'Barber' },
  1: { lt: 'Vyr. barberis', en: 'Senior barber' },
  2: { lt: 'Meistras', en: 'Master barber' },
};

export const priceFor = (range: [number, number], tier: number) =>
  Math.round(range[0] + ((range[1] - range[0]) * tier) / 2);

export const academy = {
  price: 2800,
  tools: 800,
  team: [
    { name: 'Povilas Bru', role: { lt: 'Programos kūrėjas ir vyr. mokytojas', en: 'Programme creator & head tutor' } as T },
    { name: 'Gintautas', role: { lt: 'Programos vadovas ir organizatorius', en: 'Programme lead & organiser' } as T },
  ],
};
