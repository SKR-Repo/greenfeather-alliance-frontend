/*
  Our Impact — section 4 "Our areas of impact".
  Everything editable lives here: copy, colours (per tab), media links, card + accordion content.

  THEME keys (per topic – the whole section background fades to `bg` while that topic is active):
    bg / ink            section background · headline + icon colour
    card1 / overlay     left half of the big number card · tint put on the photo / video
    card2 / sub         goal card background · the white-ish "2030 GOAL" sub card
    accent              big goal text, progress bar fill, flag icon
    row / rowInk        accordion row background · text colour
  `rows[].body` is the dropdown text. A row WITHOUT a body is a plain row (no chevron).
*/
const UPLOADS = "https://www.rainforest-alliance.org/wp-content/uploads";

export const IMPACT_AREAS = {
  title: "Our areas of impact",
  text: "From forests and farms to the people who depend on them, our work focuses on the systems most critical to a sustainable future. We’ve identified five impact areas where intervention is urgent; where we can help transform global agriculture and forestry to regenerate landscapes and build thriving communities.",
  bg: "#dee7f6", // colour before the first topic takes over
};

export const AREA_GROUPS = { nature: "Nature", people: "People" };

export const AREA_TOPICS = [
  /* ───────────── 1 · Climate impact ───────────── */
  {
    id: "climate-impact",
    group: "nature",
    tab: "Climate impact",
    title: "Climate impact",
    icon: "globe",
    text: [
      "The climate crisis is accelerating, with atmospheric CO",
      { sub: "2" },
      " concentrations at record highs. Agriculture and land use contribute to more than 25 percent of global greenhouse gas emissions, yet these same landscapes hold the key to reversing the trend. We work to reduce emissions and boost carbon sequestration through sustainable and regenerative agriculture, agroforestry, and forest conservation.",
    ],
    theme: {
      bg: "#dfe6f7", ink: "#0f2d6b", card1: "#1952c2", overlay: "#3b589c",
      card2: "#b8c9ec", sub: "#dfe7f7", accent: "#1952c2", row: "#b8c9ec", rowInk: "#0f2d6b",
    },
    stat: {
      icon: "factory",
      number: "5.5 M",
      bold: "metric tons",
      text: " of greenhouse gas emissions avoided or sequestered",
      media: { type: "video", src: `${UPLOADS}/2026/02/impact-traffic.mp4` },
      caption: "That’s the equivalent of 1.2 million cars off the road for a year!",
      captionDark: false,
      tint: "full",
    },
    goal: {
      percent: 25,
      text: "Help prevent or capture 22 million metric tons of greenhouse gases through our certified farms and field projects.",
    },
    rows: [
      {
        icon: "pin",
        bold: "3,954,520",
        text: "Rainforest Alliance Certified farms",
        body: "Certified farms are counted as the total number of farms covered by a valid Rainforest Alliance certificate, as reported by licensed Certificate Holders.",
      },
      {
        icon: "handHeart",
        bold: "80",
        text: "donor-funded projects",
        body: "Donor-funded projects are field projects delivered with our partners and funded by donors to help farming and forest communities protect and restore their landscapes.",
      },
    ],
  },

  /* ───────────── 2 · Sustaining ecosystems ───────────── */
  {
    id: "sustaining-ecosystems",
    group: "nature",
    tab: "Sustaining ecosystems",
    title: "Sustaining ecosystems",
    icon: "shield",
    text: [
      "Our future depends on thriving ecosystems, especially tropical forests that help regulate climate, water, and biodiversity. But we are losing them at an alarming pace, and nearly 90 percent of deforestation is driven by agriculture. We work to protect what remains, restore what’s been lost, and transform agricultural practices so that threatened ecosystems are not only spared, but actively regenerated.",
    ],
    theme: {
      bg: "#e8eeee", ink: "#0f3d40", card1: "#175259", overlay: "#9cb5b9",
      card2: "#b7c9cc", sub: "#e6eded", accent: "#175259", row: "#b7c9cc", rowInk: "#0e3a3d",
    },
    stat: {
      icon: "sprout",
      number: "11.9 M",
      bold: "hectares",
      text: ", including ecosystems protected, better managed, restored, and sustainably cultivated.",
      media: { type: "image", src: `${UPLOADS}/2026/02/Impacts-EU-countries-768x760.png`, alt: "Map of Western Europe with the Netherlands, Belgium, Switzerland and Luxembourg highlighted" },
      caption: "That’s roughly the size of the Netherlands, Belgium, Switzerland, and Luxembourg!",
      captionDark: true,
      tint: "bottom",
    },
    goal: {
      percent: 40,
      text: "Work with farmers and communities across 30 million hectares to protect and restore land through sustainable practices, supported by certification and field programs.",
    },
    rows: [
      {
        icon: "badge",
        bold: "9,496,604",
        text: "hectares of Rainforest Alliance Certified farmland",
        body: "Farmland certified against our Sustainable Agriculture Standard is based on the total farm area and measured in total hectares as reported by licensed Certificate Holders.",
      },
      {
        icon: "scroll",
        bold: "2,443,637",
        text: "hectares of land covered by Rainforest Alliance field projects",
        body: "Field project land is measured in hectares as reported by our project teams and partners, and covers areas where we support protection, restoration, and better land management.",
      },
      {
        icon: "sprout",
        bold: "41,237",
        text: "hectares of Rainforest Alliance Certified Regenerative farmland",
        body: "Farmland certified against our new (2025) Regenerative Agriculture Standard is measured in hectares as reported by early adopters of this new certification. The standard promotes practices that improve soil health and fertility, boost biodiversity, strengthen climate resilience, conserve water, and strengthen livelihoods—helping farms give back more than they take.",
      },
    ],
  },

  /* ───────────── 3 · Conserving biodiversity ───────────── */
  {
    id: "conserving-biodiversity",
    group: "nature",
    tab: "Conserving biodiversity",
    title: "Conserving biodiversity",
    icon: "wheat",
    text: [
      "Biodiversity is collapsing at a startling rate, with one million species at risk of extinction. This is largely due to habitat loss from agricultural expansion, even though healthy ecosystems are essential for resilient food systems. We work to protect high-conservation-value areas, preserve species-rich habitats, and restore ecological balance within and beyond farms.",
    ],
    theme: {
      bg: "#f3f7ea", ink: "#3d4a12", card1: "#749220", overlay: "#afbc7c",
      card2: "#deeabd", sub: "#f4f8ea", accent: "#749220", row: "#deeabd", rowInk: "#3d4a12",
    },
    stat: {
      icon: "sprout",
      number: "937,700",
      bold: "hectares",
      text: " of biodiversity-rich areas supported through ecosystem protection or restoration activities",
      media: { type: "image", src: `${UPLOADS}/2026/02/yellowstone-768x512.jpg.optimal.jpg`, alt: "Geyser erupting in a forested valley" },
      caption: "An area roughly 1.5 times the size of Yellowstone National Park.",
      captionDark: false,
      tint: "full",
    },
    goal: {
      percent: 38,
      text: "Support the protection and restoration of 2.4 million hectares of biodiversity-rich areas through farm and landscape initiatives.",
    },
    rows: [], // no dropdowns for this topic
  },

  /* ───────────── 4 · Strengthening rights ───────────── */
  {
    id: "strengthening-rights",
    group: "people",
    tab: "Strengthening rights",
    title: "Strengthening rights",
    icon: "rights",
    text: [
      "Millions of farmers and farm workers remain vulnerable to unsafe conditions, exploitation, and systemic inequality. With more than 70 percent of all child labor occurring in agriculture, the cracks in our global food system are undeniable. We work to uphold human rights by raising awareness, promoting protections, and building more inclusive systems where dignity, safety, and opportunity are the norm.",
    ],
    theme: {
      bg: "#f6f5ef", ink: "#403f35", card1: "#797663", overlay: "#918e7f",
      card2: "#e9e8db", sub: "#f6f5ef", accent: "#797663", row: "#e9e8db", rowInk: "#403f35",
    },
    stat: {
      icon: "people",
      number: "10.8 M",
      bold: "farmers and workers",
      text: " informed of their rights and responsibilities",
      media: { type: "video", src: `${UPLOADS}/2026/02/nyc-city-video.mp4` },
      caption: "That’s 30% more people than the population of New York City, the largest city in the United States!",
      captionDark: false,
      tint: "full",
    },
    goal: {
      percent: 46,
      text: "Reach 23.5 million people to promote awareness of their rights and responsibilities through our work.",
    },
    rows: [
      { icon: "rights", bold: "898,805", text: "workers made aware of their rights through certification training" }, // plain row
      {
        icon: "pencil",
        bold: "3,378,749",
        text: "children attending school",
        body: "This metric counts children of farming families who attend school, based on data reported by Certificate Holders.",
      },
      {
        icon: "personHeart",
        bold: "22%",
        text: "of certified farmers are women",
        body: "This metric shows the percentage of farm operators who are women, based on data reported by Certificate Holders.",
      },
      {
        icon: "alert",
        bold: "892",
        text: "Certificate Holders that were decertified as a result of nonconformities",
        body: "Certificate Holders are counted based on those that were decertified after audits found nonconformities with the standard.",
      },
    ],
  },

  /* ───────────── 5 · Improving rural livelihoods ───────────── */
  {
    id: "improving-rural-livelihoods",
    group: "people",
    tab: "Improving rural livelihoods",
    title: "Improving rural livelihoods",
    icon: "livelihood",
    text: [
      "Too many smallholder farmers remain trapped in poverty despite feeding much of the world. Low prices, poor yields, and unequal market access keep millions from earning a decent living. We work to improve livelihoods by boosting productivity, strengthening market connections, and supporting pathways to a living income—because farming families should thrive, not just survive.",
    ],
    theme: {
      bg: "#dfe7f7", ink: "#11306f", card1: "#1a52c2", overlay: "#2b4a89",
      card2: "#b8c9ec", sub: "#dfe7f7", accent: "#1a52c2", row: "#b8c9ec", rowInk: "#0f2d6b",
    },
    stat: {
      icon: "chevrons",
      number: "$2.3 B",
      bold: "",
      text: "in additional farm income due to sustainability premiums and improved yields",
      media: { type: "image", src: `${UPLOADS}/2025/09/coffee-beans-768x513.jpg.optimal.jpg`, alt: "Close-up of roasted coffee beans" },
      caption: [
        "Rainforest Alliance Certified farms have ",
        { b: "28% higher yields" },
        " compared to country averages**",
        { br: true },
        "US$225 million in additional annual income from sustainability premiums",
      ],
      captionDark: false,
      tint: "full",
    },
    goal: {
      percent: 70,
      text: "Support the generation of US$3.3 billion in additional farm income through premiums and improved yields on Rainforest Alliance Certified farms.",
    },
    rows: [
      {
        icon: "grid",
        bold: "2.66",
        text: "hectares = average farm size",
        body: "Average farm size is calculated from the total certified farm area divided by the number of certified farms, as reported by Certificate Holders.",
      },
      {
        icon: "badge",
        bold: "9,736",
        text: "certificate holders",
        body: "Certificate Holders are the farm groups, estates, and companies licensed to sell products carrying the Rainforest Alliance Certified seal.",
      },
      {
        icon: "chevrons",
        bold: "Cocoa yield differential and income",
        text: "",
        body: "Rainforest Alliance Certified cocoa farms achieve higher yields than country averages, which translates into additional annual income for farming families.",
      },
      {
        icon: "chevrons",
        bold: "Coffee yield differential and income",
        text: "",
        body: "Rainforest Alliance Certified coffee farms achieve higher yields than country averages, which translates into additional annual income for farming families.",
      },
    ],
  },
];
