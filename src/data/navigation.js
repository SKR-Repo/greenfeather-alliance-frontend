// Navbar content lives here so the desktop mega menus and the mobile menu
// render from exactly the same data.

export const involvedMenu = {
  side: {
    type: "featured",
    title: "Find Certified Products",
    href: "/find-certified-products",
    description:
      "Find products with the Rainforest Alliance Certified seal available near you!",
  },
  heading: { label: "Get Involved", href: "/get-involved" },
  links: [
    { label: "Ways to Give", href: "/get-involved/ways-to-give" },
    { label: "Join Our Mailing List", href: "/get-involved/mailing-list" },
    { label: "Events and Webinars", href: "/get-involved/events-and-webinars" },
    { label: "Everyday Actions", href: "/get-involved/everyday-actions" },
    {
      label: "Environmental Curriculum",
      href: "/get-involved/environmental-curriculum",
    },
    { label: "Become an Ambassador", href: "/get-involved/become-an-ambassador" },
    { label: "Shop Merchandise", href: "/shop" },
  ],
  promo: {
    title: "Make a world of difference",
    text: "Tens of thousands of acres of rainforests across the globe are being destroyed every day—threatening endangered wildlife and local communities who depend on forests to survive.",
    cta: { label: "We need your help", href: "/get-involved/ways-to-give" },
  },
  seal: null,
};

export const businessMenu = {
  side: {
    type: "links",
    title: "Helpful Links",
    links: [
      { label: "Marketing Sustainability", href: "/for-business/marketing-sustainability" },
      { label: "Certification Documents", href: "/for-business/certification-documents" },
      { label: "Business Login Portal", href: "/for-business/login" },
    ],
  },
  heading: { label: "Our Business Solutions", href: "/for-business" },
  links: [
    { label: "Certification Program", href: "/for-business/certification-program" },
    { label: "Sourcing Risk Assessment", href: "/for-business/sourcing-risk-assessment" },
    { label: "Corporate Advisory Services", href: "/for-business/corporate-advisory-services" },
    { label: "Project Center", href: "/for-business/project-center" },
    { label: "Cause Marketing", href: "/for-business/cause-marketing" },
  ],
  promo: {
    title: "Work with us",
    text: "From technical assistance and training, to supply chain risk management, certification and assurance—our experts and partners can support your business’s sustainability journey.",
    cta: { label: "Start today", href: "/for-business/work-with-us" },
  },
  seal: {
    title: "What our seal means",
    text: "The Rainforest Alliance certification seal means that the product (or a specified ingredient) was produced by farmers, foresters, and/or companies working together to create a world where people and nature thrive in harmony",
    href: "/what-our-seal-means",
  },
};

export const mainNav = [
  { id: "work", label: "Our Work", href: "/our-work" },
  { id: "impact", label: "Our Impact", href: "/our-impact" },
  { id: "involved", label: "Get Involved", href: "/get-involved", menu: involvedMenu },
  { id: "learn", label: "Learn", href: "/learn" },
  { id: "business", label: "For Business", href: "/for-business", menu: businessMenu },
];

export const giveLink = { label: "Give", href: "/get-involved/ways-to-give" };

// UI-only for now (no i18n wired up yet) — edit to match the languages you ship.
export const languages = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "PT", label: "Português" },
  { code: "NL", label: "Nederlands" },
];
