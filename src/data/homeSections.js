/*
  Content + layout data for the Home page sections that sit under the hero.
  Everything you may want to fine-tune lives here, not in the components:
    - copy (titles, descriptions, links)
    - image URLs
    - DESKTOP positions of every floating crop image (see FLOATERS_* below)
*/
const BASE = "https://www.rainforest-alliance.org";
const IMG = `${BASE}/wp-content/mu-plugins/replant-blocks/build/images`;

/* ---------- Section 2 : annual report strip ---------- */
export const ANNUAL_REPORT = {
  image: `${BASE}/wp-content/uploads/2026/06/AR25-banner_EN.jpg.optimal.jpg`,
  alt: "Rainforest Alliance 2025 Annual Report: Regeneration Takes Root",
  title: "Annual Report: Regeneration Takes Root",
  text: "See what we achieved in 2025.",
  linkLabel: "Read the report",
  href: "/annual-report",
};

/* ---------- Section 3a : deforestation banner ---------- */
export const DEFORESTATION = {
  image: `${BASE}/wp-content/uploads/2024/06/deforestation_Sergio_Izquierdo-2048x1229-1-600x360.jpeg.optimal.jpeg`,
  alt: "Aerial view of cleared, burnt hillside next to intact rainforest",
  title: "Farming causes nearly 80 percent of global deforestation.",
  text: "That’s why we are transforming the way the world farms. Through sustainability programs and certification, we are protecting forests, healing the Earth, and partnering with local communities.",
};

/* ---------- Section 3b : crops ---------- */
// Used by the desktop hover tag AND by the mobile cards.
export const CROPS = {
  bananas: {
    title: "Bananas",
    description:
      "Our work in bananas helps support farmworkers, minimizes chemical use, protects the soil, and reduces waste.",
    href: "/bananas",
    linkLabel: "Explore our work in bananas",
    cardImage: `${IMG}/banana-2.8e051d69.png`, // image used on the mobile card
  },
  cocoa: {
    title: "Cocoa",
    description:
      "We work with cocoa-farming families to improve incomes, keep children in school, and grow their crops in ways that nourish the land.",
    href: "/cocoa",
    linkLabel: "Explore our work in cocoa",
    cardImage: `${IMG}/cocoa-1.68fd5df9.png`,
  },
  coffee: {
    title: "Coffee",
    description:
      "Certified coffee farms plant shade trees alongside their crops for better flavor and richer soils that absorb carbon.",
    href: "/coffee",
    linkLabel: "Explore our work in coffee",
    cardImage: `${IMG}/coffee-2.3f309ab3.png`,
  },
  tea: {
    title: "Tea",
    description:
      "Our tea programs help farmers raise yields and incomes while protecting the water, soil, and forests around their farms.",
    href: "/tea",
    linkLabel: "Explore our work in tea",
    cardImage: `${IMG}/tea-1.22c489ec.png`,
  },
};

// Mobile/tablet card order: first group, then the heading, then the second group.
export const CARDS_FIRST = ["bananas", "cocoa"];
export const CARDS_SECOND = ["coffee", "tea"];

export const CROPS_INTRO = {
  title: "From healthier soil and seedlings, our farming solutions start at the source.",
  text: "Bananas, cocoa, tea, and coffee power tropical economies worldwide. Together with farmers, we’re transforming agriculture to regenerate landscapes and build thriving communities.",
  linkLabel: "See our crops",
  href: "/our-work/crops",
};

export const IMPACT = {
  title: "Our global impact is powerful—and it’s growing stronger every day.",
  text: "With bold ambitions, we’re all in. We bring the full force of our advocacy, thought leadership, company engagement, and most importantly, partnerships with farming and forest communities to achieve a better future.",
  linkLabel: "View our impact",
  href: "/our-work/impact",
};

/*
  DESKTOP floating images (lg and up) — measured from the live site at 1898px wide.

  Each item:
    crop   – key in CROPS (drives hover tag + link)
    src    – image URL
    style  – absolute box of the image inside the crops block. ALL values are in vw,
             so the whole composition scales with the screen like the live site.
             left = distance from the left edge of the screen (may be negative = bleeds off-screen)
             top  = distance from the BOTTOM edge of the forest banner (may be negative = overlaps it)
             width = image width (height follows the image's own aspect ratio)
    speed  – scroll-drift factor (0 = moves with the page, 0.1 = lags 10% → drifts down slowly)
    rotate / flip / blur – optional finishing touches (deg / bool / px)

  Tip: open the home page with  ?tune  at the end of the URL (e.g. localhost:5173/?tune)
  to drag / resize / rotate every image live and copy the new values back into this list.
*/
export const FLOATERS = [
  { id: "banana-stem", crop: "bananas", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/banana-2.8e051d69.png", style: { left: "-7.17vw", top: "13.46vw", width: "21.5vw" }, speed: 0.02, rotate: -55 },
  { id: "banana-diagonal", crop: "bananas", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/banana-3.4ed7d3bb.png", style: { left: "-7.77vw", top: "-4.67vw", width: "32.5vw" }, speed: 0.02, rotate: -2 },
  { id: "banana-crescent", crop: "bananas", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/banana-1.7d72d49c.png", style: { left: "-0.5vw", top: "-11.09vw", width: "20.5vw" }, speed: 0.05, rotate: 20 },
  { id: "cocoa-1", crop: "cocoa", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/cocoa-1.68fd5df9.png", style: { left: "80.47vw", top: "-1.32vw", width: "26.5vw" }, speed: 0.1, rotate: 5 },
  { id: "cocoa-2", crop: "cocoa", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/cocoa-2.64c94b07.png", style: { left: "89.84vw", top: "15.08vw", width: "18.7vw" }, speed: 0.12 },
  { id: "cocoa-3", crop: "cocoa", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/cocoa-3.3c1d967d.png", style: { left: "83.39vw", top: "28.83vw", width: "27.4vw" }, speed: 0.1 },
  { id: "coffee-blur", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-1.d76fd722.png", style: { left: "21.58vw", top: "50.61vw", width: "5.2vw" }, speed: 0.12, blur: 4 },
  { id: "coffee-bean-big", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-3.80afaed6.png", style: { left: "14.3vw", top: "57.4vw", width: "8.8vw" }, speed: 0.09 },
  { id: "coffee-bean-tilt", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-1.d76fd722.png", style: { left: "32.05vw", top: "60.65vw", width: "8.4vw" }, speed: 0.1, rotate: 55 },
  { id: "coffee-bean-low", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-1.d76fd722.png", style: { left: "29.55vw", top: "66.85vw", width: "8.4vw" }, speed: 0.09, rotate: -12 },
  { id: "coffee-edge", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-5.971fbd51.png", style: { left: "-3.23vw", top: "60.92vw", width: "8.2vw" }, speed: 0.1 },
  { id: "coffee-pair", crop: "coffee", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/coffee-2.3f309ab3.png", style: { left: "5vw", top: "74.8vw", width: "14.8vw" }, speed: 0.08 },
  { id: "tea-1", crop: "tea", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/tea-1.22c489ec.png", style: { left: "63.7vw", top: "40.6vw", width: "29.5vw" }, speed: 0.1 },
  { id: "tea-2", crop: "tea", src: "https://www.rainforest-alliance.org/wp-content/mu-plugins/replant-blocks/build/images/tea-2.a779c57e.png", style: { left: "76.57vw", top: "60.72vw", width: "33.5vw" }, speed: 0.11, rotate: -6 },
];


/* ---------- Section 5 : impact numbers ---------- */
// Three columns on desktop (2 stats each), one stacked column on mobile.
// `unit` is the small caps word next to the number ("" = none).
export const STATS_COLUMNS = [
  [
    { value: "10.8", unit: "million", label: "Farmers & workers on\ncertified farms" },
    { value: "9,736", unit: "", label: "Certified partners" },
  ],
  [
    {
      value: "11.9",
      unit: "million",
      label: "Hectares, including ecosystems protected, better managed, restored, and sustainably cultivated",
    },
    { value: "66,000", unit: "", label: "Rainforest Alliance certified products" },
  ],
  [
    { value: "US$2.3", unit: "billion", label: "Additional Certified farm income" },
    { value: "814,570", unit: "", label: "benefitting from programs" },
  ],
];

/* ---------- Section 6 : "what's behind our little green frog" ---------- */
export const SEALS = {
  image: `${BASE}/wp-content/uploads/2024/11/ra-products-gen-1024x461.jpg.optimal.jpg`,
  alt: "Coffee, tea, chocolate and snack packaging carrying the Rainforest Alliance Certified seal",
  title: "What’s behind our little green frog? A world-renowned standard for sustainability.",
  text: "Farms earn this certification by meeting our rigorous criteria for practices that benefit both people and the planet. Certified farms nourish the land, use fewer pesticides, fight climate change, treat workers fairly, while meeting a range of other requirements expertly designed to create a better world.",
  linkLabel: "Learn what our seals stand for",
  href: "/what-does-rainforest-alliance-certified-mean",
};

/* ---------- Section 7 : rotating product grid + CTA ---------- */
// Add more URLs to PRODUCT_IMAGES any time — the rotation uses the whole list
// (needs at least 5 so a new image is never one that is already on screen).
const PRODUCT_IMG = `${BASE}/wp-content/uploads/2024/11`;
export const PRODUCT_IMAGES = [
  { src: `${PRODUCT_IMG}/Asia_Lipton-600x600.jpg.optimal.jpg`, alt: "Lipton English Breakfast tea box" },
  { src: `${PRODUCT_IMG}/US-Caribou-Coffee-600x600.jpg.optimal.jpg`, alt: "Caribou Coffee bag" },
  { src: `${PRODUCT_IMG}/US-Luzianne-tea-600x600.jpg.optimal.jpg`, alt: "Luzianne tea box" },
  { src: `${PRODUCT_IMG}/US-Lipton-tea-600x600.jpg.optimal.jpg`, alt: "Lipton tea box" },
  { src: `${PRODUCT_IMG}/US-Lavazza-600x600.jpg.optimal.jpg`, alt: "Lavazza coffee bag" },
  { src: `${PRODUCT_IMG}/US-Justins-600x600.jpg.optimal.jpg`, alt: "Justin’s peanut butter cups" },
  { src: `${PRODUCT_IMG}/US-Joe-Coffee-600x600.jpg.optimal.jpg`, alt: "Joe Coffee bag" },
  { src: `${PRODUCT_IMG}/US-Chocolove-600x600.jpg.optimal.jpg`, alt: "Chocolove almonds and sea salt chocolate bar" },
];
export const PRODUCT_ROTATE_MS = 2000; // one tile changes every 2s (1000 = every 1s)

export const FIND_PRODUCTS = {
  title: "Global change can start at your local grocery store.",
  text: "Shop smarter. Simply follow the frog to make a difference.",
  linkLabel: "Find products near you",
  href: "/find-certified",
};

/* ---------- Section 8 : other ways to get involved ---------- */
// icon: "card" | "users" | "cart"   (drawn in components/home/GetInvolved.jsx)
export const GET_INVOLVED = {
  title: "Other ways to get involved",
  links: [
    { icon: "card", label: "Donate", href: "https://give.rainforest-alliance.org/give/291977/#!/donation/checkout" },
    { icon: "users", label: "Start a Fundraiser", href: "https://give.rainforest-alliance.org/campaign/fundraise-for-the-alliance/c331229" },
    { icon: "cart", label: "Shop Our Store", href: "https://shoprainforestalliance.org/" },
  ],
};


/* ---------- Section 9 : email sign-up + video ---------- */
export const SIGNUP = {
  title: "We’re all in. Are you?",
  text: "We all have that negative voice in our head telling us one person can’t possibly make a difference. But there are millions of us who want to create a better world—and together, we can. Join us.",
  emailLabel: "Email",
  consent: "Yes, I agree to receive occasional emails from the Rainforest Alliance.",
  button: "Join us",
  success: "Thank you for joining us! Watch your inbox for updates.",
  video: `${BASE}/wp-content/uploads/2026/08/RA-you_are_not_alone-EN-web.mp4`,
  videoLabel: "Video: Feeling hopeless about the planet?",
};

/* ---------- Section 10 : "Our latest" carousel ---------- */
// Order = order on the live site. Card 3 uses the site's red placeholder artwork (no photo).
const UPLOADS = `${BASE}/wp-content/uploads`;
export const LATEST = {
  title: "Our latest",
  moreLabel: "View More Articles",
  moreHref: "/resource/latest",
  articles: [
    {
      title: "Can “Gamified” Training Help Us Advance Farm Workers’ Rights?",
      date: "October 8, 2026",
      href: "/in-the-field/gamified-training-advance-farm-workers-rights",
      image: `${UPLOADS}/2026/10/Workers-in-India-participate-in-gamified-training.jpg.optimal.jpg`,
      alt: "A group of women farm workers from India stands in a field, two holding tablets with the new gamified training",
    },
    {
      title: "Protecting the Congo Basin’s Vital Forest Ecosystems",
      date: "August 3, 2026",
      href: "/in-the-field/protecting-the-congo-basins-vital-forest-ecosystems",
      image: `${UPLOADS}/2026/08/kid-riding-bike-with-two-adults.jpg.optimal.jpg`,
      alt: "Child riding a bicycle with two adults on a forest path",
    },
    {
      title: "How is the Rainforest Alliance Funded?",
      date: "June 24, 2026",
      href: "/insights/how-is-the-rainforest-alliance-funded",
      image: `${BASE}/wp-content/themes/rainforest-replant/dist/img/placeholder_1.svg`,
      alt: "",
    },
    {
      title: "Hot Chocolate Around the World",
      date: "May 25, 2026",
      href: "/everyday-actions/hot-chocolate-around-the-world",
      image: `${UPLOADS}/2026/05/Mexican-Hot-Chocolate.jpg.optimal.jpg`,
      alt: "Mexican hot chocolate topped with whipped cream and cinnamon",
    },
    {
      title: "What Goes into Your Cup of Rainforest Alliance Certified Tea",
      date: "May 19, 2026",
      href: "/insights/rainforest-alliance-certified-tea",
      image: `${UPLOADS}/2021/09/Ellen-Chege-on-her-farm-Kenya8915705267_b221fc91ef_o-2048x1365.jpg.optimal.jpg`,
      alt: "Ellen Chege, tea farmer, picking leaves on her farm in Kenya",
    },
    {
      title: "Take Action this World Environment Day",
      date: "May 7, 2026",
      href: "/everyday-actions/take-action-this-world-environment-day",
      image: `${UPLOADS}/2021/06/planting-seedling-teaser.jpeg.optimal.jpeg`,
      alt: "Two sets of hands plant a seedling in the ground",
    },
    {
      title: "Tackling E-Waste: How to Recycle Electronics Safely",
      date: "May 5, 2026",
      href: "/everyday-actions/tackling-e-waste-how-to-recycle-electronics-safely",
      image: `${UPLOADS}/2026/05/e-waste-bin-old-tech.jpeg.optimal.jpeg`,
      alt: "E-waste bin filled with old electronics",
    },
  ],
};

/* ---------- Section 11 : "Learn more from the Alliance" ---------- */
export const LEARN_MORE = {
  image: `${UPLOADS}/2024/11/learn-more-hero.jpg.optimal.jpg`,
  alt: "A coffee farmer smiling among his coffee plants",
  title: "Learn more from the Alliance",
  text: "We protect nature and improve the lives of farmers and forest communities.",
  linkLabel: "Our Work",
  href: "/our-work",
};

