/*
  Content for the Our Work page. Copy and links live here, not in the components.
  The images come from src/constants/assets.js (ASSETS.workHero / ASSETS.workSolutions).
*/

/* ---------- Section 1 : hero ---------- */
export const WORK_HERO = {
  alt: "A hand watering a young seedling growing from the soil",
  // one entry per desktop line (on mobile they simply flow and wrap)
  titleLines: ["People and nature", "thriving in", "harmony"],
  text: "We’re creating a more sustainable world by using social and market forces to protect nature and improve the lives of farmers and forest communities.",
};

/* ---------- Section 2 : solutions start at the source ---------- */
export const WORK_SOLUTIONS = {
  title: "Our solutions start at the source",
  intro: "Crops certified by the Rainforest Alliance are produced according to our ",
  linkLabel: "rigorous sustainability standards",
  linkHref: "/for-business/certification",
  outro: ". Our standards have detailed criteria covering environmental, social, and economic sustainability.",
  buttonLabel: "Our Crops",
  buttonHref: "/crops",
  imageAlt: "Banana, palm fruit, orange sprig, rose, cocoa pod and coffee beans floating together",
};

/* ---------- Sections 3-6 : issue rows (white, image + text, alternating sides) ---------- */
const UP = "https://www.rainforest-alliance.org/wp-content/uploads";

export const WORK_ISSUES = [
  {
    id: "forests",
    tag: "Forests and biodiversity",
    title: "Community partnerships to restore forests and wildlife",
    text: [
      "We work in 62 countries to promote more sustainable land management practices while cultivating thriving rural economies—the most widely proven strategy to restore biodiversity and keep our tropical forests standing.",
    ],
    image: `${UP}/2024/12/26265946897_1d8179352f_k.jpg.optimal.jpg`,
    imageAlt: "A man looking up at the buttress roots of a giant rainforest tree",
    links: [
      { label: "Deforestation", href: "/issues/forests-and-biodiversity/deforestation" },
      { label: "Community forestry", href: "/issues/forests-and-biodiversity/community-forestry" },
    ],
  },
  {
    id: "climate",
    tag: "Climate",
    title: "Fighting climate change—and preparing for a changing world",
    text: [
      "We work to build climate resilience and reduce emissions across farms, forests, and rural landscapes around the world. That includes supporting companies to build strong supply chains and advancing policies, programs, and investments that support local and nature-based climate action.",
    ],
    image: `${UP}/2024/11/planting-seedling-teaser_square.jpeg.optimal.jpeg`,
    imageAlt: "Hands planting a young tree seedling in the soil",
    links: [
      { label: "Regenerative agriculture", href: "/issues/climate/regenerative-agriculture" },
      { label: "Climate-smart agriculture", href: "/issues/climate/climate-smart-agriculture" },
      { label: "Climate resilience", href: "/issues/climate/climate-resilience" },
    ],
  },
  {
    id: "livelihoods",
    tag: "Livelihoods",
    title: "Building thriving rural economies",
    // strings are plain text, { em } is rendered in italics
    text: [
      "We partner with frontline communities on responsible business practices that promote workers’ well-being and improve farmers’ incomes. We make sure that companies recognize and reward sustainability transformation—both in the field ",
      { em: "and" },
      " in the boardroom.",
    ],
    image: `${UP}/2024/11/luis-diego-herrera_harvest-finmac2_square.jpg.optimal.jpg`,
    imageAlt: "A farmer loading cocoa pods into hanging harvest baskets",
    links: [
      { label: "Living wage", href: "/issues/livelihoods/living-wage" },
      { label: "Living income", href: "/issues/livelihoods/living-income" },
    ],
  },
  {
    id: "human-rights",
    tag: "Human rights",
    title: "Social justice and human rights on a global scale",
    text: [
      "Everyone deserves to live and work with dignity, agency, and self-determination—and promoting the rights of rural people is key to a sustainable future. That’s why we work to transform business practices and government policy, as well as strengthen the rights of the communities we partner with.",
    ],
    image: `${UP}/2024/12/35371644284_bb9bbf0a86_k.jpg.optimal.jpg`,
    imageAlt: "Two women and a young girl from an Indigenous community posing together in a forest",
    links: [
      { label: "Worker rights", href: "/issues/human-rights/worker-rights" },
      { label: "Indigenous communities", href: "/issues/human-rights/indigenous-communities" },
      { label: "Gender equality", href: "/issues/human-rights/gender-equality" },
      { label: "Forced Labor", href: "/issues/human-rights/forced-labor" },
      { label: "Child labor", href: "/issues/human-rights/child-labor" },
    ],
  },
];

/* ---------- Section 7 : regions (map parallax) ---------- */
export const WORK_REGIONS = {
  tag: "Regions",
  title: "Restoring thriving landscapes",
  text: "Our work extends to critical ecosystems around the globe and is built on years of experience. By regenerating and sustaining these landscapes, local communities can support their families and sell to profitable markets—while doing so in harmony with nature.",
  buttonLabel: "Where We Work",
  buttonHref: "/regions",
  imageAlt: "Map of the world",
};

/* ---------- Section 8 : final call to action ---------- */
export const WORK_SUPPORT = {
  title: "Want to find ways to support?",
  text: "We need your help to create a better future for people and nature.",
  buttonLabel: "Get Involved",
  buttonHref: "/get-involved",
  imageAlt: "A Rainforest Alliance team member smiling while planting a young tree",
};
