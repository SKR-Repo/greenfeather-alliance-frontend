/*
  Content for the For Business page. Copy and links live here, not in the components.
  The hero photo comes from src/constants/assets.js (ASSETS.forBusinessHero).
*/

/* ---------- Section 1 : hero ---------- */
export const FOR_BUSINESS_HERO = {
  alt: "Hands holding an open cocoa pod and its white pulp",
  // white lines (stacked one per line on desktop, they simply wrap on mobile) + the yellow line
  titleWhite: ["Transforming", "markets"],
  titleYellow: "for a better future",
  text: "The companies that succeed in the future will be the ones that give more than they take—the ones that answer the call to work in harmony with people and nature.",
  button: { label: "Let’s work together", href: "/for-business/work-with-us" },
};

/* ---------- Section 2 : annual-report strip ---------- */
export const FOR_BUSINESS_REPORT = {
  text: "Check out our 2025 Annual Report to see the exciting advances we made this year.",
  linkLabel: "Read the report",
  href: "/annual-report",
};

/* ---------- Section 3 : world leaders in agricultural certification ---------- */
export const FOR_BUSINESS_CERTIFICATION = {
  title: "World leaders in agricultural certification",
  text: "For nearly 40 years, the Rainforest Alliance has worked to make a better world for people and nature. The Rainforest Alliance Certification Program—which includes our Sustainable Agriculture Certification, as well as our newer Regenerative Agriculture Certification—is recognized the world over as a trusted path toward a better future for farmers and companies.",
  sealsAlt: "Rainforest Alliance Certified and Regenerative seals",
  // logos: the sustainable seal is a local SVG (public/images/ra-sustainable-seal.svg), the regenerative seal is remote
  cards: [
    {
      id: "sustainable",
      logo: "/images/ra-sustainable-seal.svg",
      logoAlt: "Rainforest Alliance Certified seal",
      logoClassName: "h-[4.55rem] lg:h-[5.65vw]",
      title: "Sustainable Agriculture Certification",
      text: "Our most holistic certification solution supports the three pillars of sustainability: social, environmental, and economic.",
      buttonLabel: "Explore certification details",
      href: "/for-business/certification/sustainable-agriculture",
    },
    {
      id: "regenerative",
      logo: "https://www.rainforest-alliance.org/wp-content/uploads/2025/09/RA-Regenerative-Seal.png",
      logoAlt: "Rainforest Alliance Regenerative seal",
      logoClassName: "h-[4.55rem] lg:h-[5.55vw]",
      title: "Regenerative Agriculture Certification",
      text: "This certification covers critical social, livelihood, and water requirements while deepening those for soil health, biodiversity, and climate resilience.",
      buttonLabel: "Explore certification details",
      href: "/for-business/certification/regenerative-agriculture",
    },
  ],
};

/* ---------- Section 4 : full-width photo strip (parallax, no text) ---------- */
export const FOR_BUSINESS_BANNER = {
  alt: "Two coffee farmers smiling as they plant a young coffee tree together in Uganda",
};

/* ---------- Section 5 : other services ---------- */
/*
  Four stacked white cards. `icon` is a key of SERVICE_ICONS (components/forBusiness/ServiceIcons.jsx).
  Optional DESKTOP spacing tweaks (Tailwind classes, vw so they scale with the page) reproduce the
  live site where a card's rhythm differs from the others:
    descGap – space between the title and the description   (default lg:mt-[2.75vw])
    linkGap – space between the description and the link      (default lg:mt-[5.35vw])
*/
export const FOR_BUSINESS_SERVICES = {
  title: "Other services",
  text: "The Rainforest Alliance offers a wide range of services beyond certification to support your company’s ESG goals.",
  cards: [
    {
      id: "sourcing-risk",
      icon: "sourcing",
      title: "Sourcing Risk Assessment",
      text: "We can provide quality data and risk mitigation advice to coffee, cocoa, tea, and palm oil producers and distributors with no- or low-certified volumes.",
      linkLabel: "Explore risk assessment",
      href: "/for-business/sourcing-risk-assessment",
    },
    {
      id: "advisory",
      icon: "advisory",
      title: "Corporate Advisory Services",
      text: "With a wide range of tools and resources on offer, our advisory team can support companies in realizing their sustainability strategy—from setting goals and defining policies to implementing responsible sourcing and production practices for both certified and non-certified commodities.",
      linkLabel: "Let’s talk",
      href: "/for-business/corporate-advisory-services",
      linkGap: "lg:mt-[1.85vw]",
    },
    {
      id: "project-center",
      icon: "projects",
      title: "Project Center",
      text: "From initial design to implementation on the ground, our expert teams are here to help your company with all your sustainability project needs.",
      linkLabel: "Explore our projects",
      href: "/for-business/project-center",
      descGap: "lg:mt-[5.4vw]",
      linkGap: "lg:mt-[5.3vw]",
    },
    {
      id: "partnerships",
      icon: "partnerships",
      title: "Strategic Partnerships",
      text: "Investing in nature protects the ecosystems your business depends on most. Partner with us to ensure your corporate philanthropy means something—for people, nature, and our future.",
      linkLabel: "Let’s partner",
      href: "/for-business/strategic-partnerships",
    },
  ],
};
