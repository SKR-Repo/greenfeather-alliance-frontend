/*
  Content for the last two Our Impact sections:
    5. "How the Rainforest Alliance drives sustainability transformation" (intro + two cards)
    6. "2025 Annual Report" (image + copy) followed by the numbered footnotes 1-9
  The numbered footnotes match the superscripts used in ImpactAllianceSection / ImpactPowerSection.
*/

/* ---------- Section 5 ---------- */
export const IMPACT_TRANSFORM = {
  title: "How the Rainforest Alliance drives sustainability transformation",
  // strings are plain text, { link, href } is rendered as a blue underlined link
  text: [
    "Through our landscape work and business solutions—including our globally recognized ",
    { link: "Rainforest Alliance Regenerative Agriculture Certification", href: "/for-business/certification" },
    " and ",
    { link: "Rainforest Alliance Sustainable Agriculture Certification", href: "/for-business/certification" },
    " —we are creating a more sustainable world for people and nature.",
  ],
  cards: [
    {
      id: "field-projects",
      icon: "checklist",
      title: "Field projects and programs",
      text: "We collaborate with frontline communities to encourage responsible business practices that enhance workers’ well-being, boost farmers’ incomes, and support sustainable land management to restore biodiversity and increase climate resilience.",
      linkLabel: "Explore our projects",
      href: "/our-work",
    },
    {
      id: "business-solutions",
      icon: "award",
      title: "Certification and other business solutions",
      text: "Through certification, our corporate advisory services, and more, we’re working with farmers and companies to transform agricultural supply chains for a better future.",
      linkLabel: "Explore our business solutions",
      href: "/for-business",
    },
  ],
};

/* ---------- Section 6 ---------- */
export const IMPACT_REPORT = {
  image: "https://www.rainforest-alliance.org/wp-content/uploads/2026/06/AR25_thumbnail-scaled-1.jpg.optimal.jpg",
  imageAlt: "Cover of the Rainforest Alliance 2025 Annual Report: Regeneration Takes Root",
  title: "2025 Annual Report",
  text: "Leap into our 2025 annual report to see the advances we’ve made toward a better future for people and nature.",
  buttonLabel: "View the Report",
  buttonHref: "https://www.rainforest-alliance.org/annual_report/2025",
  footnotes: [
    "Our global alliance consists of farmers and farmworkers on certified land, field project participants, company partners, social media followers, email subscribers, donors, and Rainforest Alliance staff.",
    "Consumers are estimated based on the share of the adult population consuming coffee, chocolate, tea, and bananas in North America, the EU, and the UK, multiplied by the Rainforest Alliance’s global market share of each product. Estimates account for consumers who may consume more than one product.",
    "The number of producers includes individuals that are farm operators as reported by Certificate Holders with a granted license, along with temporary and permanent workers on Rainforest Alliance Certified farms.",
    "This figure is based on the estimated number of households participating in the Rainforest Alliance Certification Program and field programs, multiplied by five. The number of households was estimated by assuming that all workers on smallholder farms belong to the farm household, while on larger farms one worker per household is assumed, and any additional workers are paired two-per-household.",
    "The number of company partners is based on the number of brands with supply chain certification.",
    "Consumers are estimated based on the share of the (adult) population consuming coffee, chocolate, tea, and bananas in North America, the EU, and the UK, multiplied by the Rainforest Alliance’s global market share of each product. Estimates account for consumers who may consume more than one product.",
    "Retail products are counted based on those carrying the Rainforest Alliance Certified seal.",
    "Individuals and organizations are calculated based on those contributing financial resources to support Rainforest Alliance activities.",
    "Policies influenced include national policies (like those in Germany) and EU legislation.",
  ],
};
