/* ---------- Get Started page : copy + form options (edit text here, not in the components) ---------- */

export const GET_STARTED_INTRO = {
  title: "The Rainforest Alliance can help transform your business",
  paragraphs: [
    "Since 1987, we have been working at the intersection of business, agriculture, and forests to help companies make deep-rooted change on some of our most pressing social and environmental issues.",
    "From technical assistance and training, to supply chain risk management, certification and assurance—our experts and partners can support your business’s sustainability journey. Whether you are looking for support to comply with due diligence legislation or want to raise the bar on your sustainability impacts, the Rainforest Alliance offers innovative solutions to support you in your sustainability journey.",
  ],
  formLead: "Please take 3 minutes to fill out the form below:",
};

export const NAME_STEP = { title: "To get started, can you tell us your name?" };

const CLOSING = "Ready to start your sustainability journey? Move to the next step.";

/*
  Step 2 options. Each one also owns the information panel shown as step 3.
  `askCertification: true` => the final form shows "Which certification solution most interests you?".
*/
export const SITUATION_STEP = { title: "What option best describes your situation?" };

export const SITUATIONS = [
  {
    id: "certification",
    label: "I want to start sourcing Rainforest Alliance Certified products and/or use the Rainforest Alliance seal on my products",
    askCertification: true,
    info: {
      title: "Get Rainforest Alliance Certified",
      intro: "We now offer two certification solutions:",
      items: [
        {
          label: "Sustainable Agriculture Certification",
          href: "/for-business/certification/sustainable-agriculture",
          text: "Our most holistic certification solution supports the three pillars of sustainability: social, environmental, and economic.",
        },
        {
          label: "Regenerative Agriculture Certification",
          href: "/for-business/certification/regenerative-agriculture",
          text: "This certification covers critical social, livelihood, and water requirements while deepening those for soil health, biodiversity, and climate resilience.",
        },
      ],
      bullets: [
        "Partners already certified—or planning to certify—against our Sustainable Agriculture Standard can choose Regenerative Agriculture Certification as an optional add-on. Others can pursue Regenerative Agriculture Certification as a standalone option.",
        "Regenerative Agriculture Certification will be available to coffee partners as an add-on in 2026. The launch date for the standalone option will be announced at a later time.",
      ],
      closing: CLOSING,
    },
  },
  {
    id: "eudr",
    label: "I need support to comply with the requirements of the European Union Regulation on Deforestation-free Products (EUDR)",
    info: {
      title: "Prepare for the EUDR",
      intro: "Our teams can help you understand and meet your due diligence obligations:",
      items: [
        {
          label: "Sourcing Risk Assessment",
          href: "/for-business/sourcing-risk-assessment",
          text: "Quality data and risk mitigation advice for coffee, cocoa, tea, and palm oil producers and distributors.",
        },
        {
          label: "Corporate Advisory Services",
          href: "/for-business/corporate-advisory-services",
          text: "Expert guidance on policies, supplier engagement, and responsible sourcing practices for certified and non-certified commodities.",
        },
      ],
      closing: CLOSING,
    },
  },
  {
    id: "advisory",
    label: "I’m interested in corporate advisory services (i.e. supplier engagement, policy making, sustainability strategy development, etc.)",
    info: {
      title: "Corporate Advisory Services",
      intro: "Our advisory team supports companies in realizing their sustainability strategy:",
      items: [
        {
          label: "Corporate Advisory Services",
          href: "/for-business/corporate-advisory-services",
          text: "From setting goals and defining policies to implementing responsible sourcing and production practices for both certified and non-certified commodities.",
        },
      ],
      closing: CLOSING,
    },
  },
  {
    id: "project",
    label: "I want to contribute/invest in a field, supply chain, or landscape project",
    info: {
      title: "Invest in a project",
      intro: "From initial design to implementation on the ground, our expert teams are here to help:",
      items: [
        {
          label: "Project Center",
          href: "/for-business/project-center",
          text: "Explore the field, supply chain, and landscape projects your company can contribute to.",
        },
      ],
      closing: CLOSING,
    },
  },
  {
    id: "risk",
    label: "I want to assess my sourcing risks",
    info: {
      title: "Assess your sourcing risks",
      intro: "We can provide the data and advice you need:",
      items: [
        {
          label: "Sourcing Risk Assessment",
          href: "/for-business/sourcing-risk-assessment",
          text: "Quality data and risk mitigation advice to coffee, cocoa, tea, and palm oil producers and distributors with no- or low-certified volumes.",
        },
      ],
      closing: CLOSING,
    },
  },
  {
    id: "marketing",
    label: "I want to partner with the Rainforest Alliance on a cause marketing campaign",
    info: {
      title: "Partner with us",
      intro: "Investing in nature protects the ecosystems your business depends on most:",
      items: [
        {
          label: "Strategic Partnerships",
          href: "/for-business/strategic-partnerships",
          text: "Partner with us to ensure your corporate philanthropy means something—for people, nature, and our future.",
        },
      ],
      closing: CLOSING,
    },
  },
  {
    id: "other",
    label: "Something else",
    info: {
      title: "We’re here to help",
      intro: "Tell us a little more about your company in the next step and our team will get back to you with the right next move.",
      items: [],
      closing: CLOSING,
    },
  },
];

/* ---------- Step 4 : final form ---------- */
export const DETAILS_STEP = {
  certificationQuestion: "Which certification solution most interests you?",
  certificationHint: "Select all that apply.",
  certifications: ["Sustainable Agriculture Certification", "Regenerative Agriculture Certification"],
  countryHint: "If you have operations in multiple countries, please indicate the country where your central administration is based.",
  crops: ["Cocoa", "Coffee", "Tea", "Banana", "Fruits", "Nuts", "Flowers", "Herbs and Spices", "Palm Oil", "Other"],
  revenues: [
    "Less than $1 million",
    "$1 million – $10 million",
    "$10 million – $50 million",
    "$50 million – $100 million",
    "$100 million – $500 million",
    "$500 million – $1 billion",
    "More than $1 billion",
  ],
  emailHint: "Please provide an individual email address (rather than a shared inbox, i.e. info@...), so that our team can reach you.",
  consent: "I agree to receive occasional emails from the Rainforest Alliance.",
  submitError: "Something went wrong and your form wasn’t sent. Your answers are still here — please try again.",
};

/* ---------- Final screen ---------- */
export const THANK_YOU = {
  title: "Thank you!",
  textBefore: "Our team will reach out to you shortly. If you have any questions in the meantime, please get in touch with our Customer Success team through",
  email: "customersuccess@ra.org",
  returnLabel: "Return to the form",
};
