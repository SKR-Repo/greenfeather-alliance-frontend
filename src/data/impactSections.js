/* Content for the Our Impact page (copy lives here, images in src/constants/assets.js). */

export const IMPACT_HERO = {
  titleTop: "Our",
  titleBottom: "Impact",
  text: "Discover how the Rainforest Alliance drives positive change for a better future—and why joining our movement creates value for every stakeholder involved.",
  edition: "2025 Edition",
  nextId: "impact-alliance", // id of the section the arrow button scrolls to
};

export const IMPACT_ALLIANCE = {
  id: "impact-alliance",
  intro: "We are a global alliance of",
  count: 14147861,
  outro: [
    "people creating a future where people and nature thrive in harmony.",
    { sup: "1" },
    " Our work serves more than 390 million consumers.",
    { sup: "2" },
  ],
};

/* ---------- Section 3 : "The power of our alliance" (stakeholder cards) ---------- */
const UPLOADS = "https://www.rainforest-alliance.org/wp-content/uploads";

export const IMPACT_POWER = {
  id: "impact-power",
  title: "The power of our alliance",
};

/*
  One entry per card (also drives the tabs, in this order).
    stats[]    – front "highlighters": icon + bold figure + text + footnote number
    benefits[] – back of the card (opens with the + button)
  icon keys: sprout | people | building | bag | document   (see components/impact/ImpactIcons.jsx)
*/
export const IMPACT_CARDS = [
  {
    id: "producers",
    tab: "Producers",
    title: "Producers",
    image: `${UPLOADS}/2022/04/Clean-Household-Energy-Kenya-1-768x512.jpg.optimal.jpg`,
    alt: "Smiling coffee farmer among coffee plants",
    text: "We collaborate with farmers, workers, and local communities to transform agriculture and forestry. Our goal: to advance regenerative land management practices while cultivating prosperous and resilient rural livelihoods.",
    stats: [
      { icon: "sprout", bold: "10.8 million", text: "farmers & farmworkers", sup: "3" },
      { icon: "people", bold: "28 million", text: "lives impacted", sup: "4" },
    ],
    benefitsTitle: "Benefits for producers",
    benefits: [
      "Access better markets, partnerships, and income opportunities",
      "Improve yields and crop quality",
      "Grow knowledge, skills, and decision-making power",
      "Boost resilience to climate and price shocks",
      "Improved labor conditions with stronger safeguards and protections",
    ],
  },
  {
    id: "companies",
    tab: "Companies",
    title: "Companies",
    image: `${UPLOADS}/2026/02/impact_Coffee-trader-iStockphoto-768x520.jpg.optimal.jpg`,
    alt: "Two coffee traders inspecting green coffee beans beside sacks",
    text: "Together with companies, we’re driving a global shift toward responsible supply chains—helping brands lead with purpose, reduce risks, and deliver measurable impact.",
    stats: [{ icon: "building", bold: "5,485", text: "companies", sup: "5" }],
    benefitsTitle: "Benefits for companies",
    benefits: [
      "Meet changing regulatory expectations with confidence",
      "Co-create solutions that reflect brand values and ambitions",
      "Close sustainability gaps with tailored support",
      "Access data, insights, and reporting tools that elevate your ESG narrative",
      "Strengthen consumer trust and brand equity with responsible sourcing",
      "Reduce supply chain risks and build resilience through integrated sustainability programs",
    ],
  },
  {
    id: "consumers",
    tab: "Consumers",
    title: "Consumers",
    image: `${UPLOADS}/2026/02/impact_Consumer-iStockphoto-768x512.jpg.optimal.jpg`,
    alt: "Shopper with a trolley in a supermarket aisle",
    text: "We help millions of consumers worldwide to “follow the frog” and make better, everyday choices that drive change. Beyond the products they purchase, we also connect with billions more individuals through our campaigns and brand presence.",
    stats: [
      { icon: "people", bold: "390 million", text: "consumers", sup: "6" },
      { icon: "bag", bold: "66k", text: "branded products on shelves with the Rainforest Alliance Certified seal", sup: "7" },
    ],
    benefitsTitle: "Benefits for consumers",
    benefits: [
      "Feel confident that choices support people and nature",
      "Create change through everyday decisions",
      "Choose products that help support climate, forests, and human rights",
      "Enjoy quality goods produced with care",
    ],
  },
  {
    id: "donors",
    tab: "Donors",
    title: "Donors",
    image: `${UPLOADS}/2026/02/impact_donors-768x513.jpg.optimal.jpg`,
    alt: "Two pairs of hands joined together",
    text: "Donations help us catalyze systemic change by nurturing thriving ecosystems and championing resilient communities.",
    stats: [{ icon: "people", bold: "6,573", text: "individual and institutional donors", sup: "8" }],
    benefitsTitle: "Benefits for donors",
    benefits: [
      "Align with the UN Sustainable Development Goals",
      "Mobilize resources for thriving landscapes and communities",
      "Drive impact with accountability and excellence",
      "Fund solutions that shift landscapes, sectors, and supply chains",
      "Amplify impact through market leverage, partnerships, and scale",
    ],
  },
  {
    id: "governments",
    tab: "Governments",
    title: "Governments",
    image: `${UPLOADS}/2026/02/impact_govs-768x512.jpg.optimal.jpg`,
    alt: "Row of international flags in front of a government building",
    text: "We work with international governments to shape policies and partnerships that unlock long-term sustainability and positive impact.",
    stats: [{ icon: "document", bold: "8", text: "policies influenced since 2022", sup: "9" }],
    benefitsTitle: "Benefits for governments",
    benefits: [
      "Align market incentives with national sustainability targets",
      "Strengthen systems for legislative compliance (e.g., EU Deforestation Regulation and the EU Corporate Sustainability Due Diligence Directive)",
      "Support global sustainability and climate goals (e.g., UN Sustainable Development Goals, Paris Agreement, biodiversity targets)",
      "Respond to consumer expectations for sustainable products and corporate accountability",
    ],
  },
];
