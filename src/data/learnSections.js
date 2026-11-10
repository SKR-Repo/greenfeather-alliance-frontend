/*
  Content for the Learn page. Copy and links live here, not in the components.
  The hero artwork comes from src/constants/assets.js (ASSETS.learnHero).
*/

/* ---------- Section 1 : hero (pale dotted page, icon + title + text + search) ---------- */
export const LEARN_HERO = {
  title: "Learn from the Alliance",
  text: "Here, you can dive deep into the Rainforest Alliance’s work with farming and forest communities around the world, our collaborations with company partners, the latest research, media coverage, and more.",
  searchLabel: "Search Rainforest Alliance",
};

/* ---------- Section 2 : "The Latest" carousel (4 cards) ---------- */
const UPLOADS = "https://www.rainforest-alliance.org/wp-content/uploads";

export const LEARN_LATEST = {
  title: "The Latest",
  text: "Hand-picked articles just for you.",
  moreLabel: "Read More of the Latest",
  moreHref: "/resource/latest",
  articles: [
    {
      title: "Can “Gamified” Training Help Us Advance Farm Workers’ Rights?",
      date: "October 8, 2026",
      href: "/in-the-field/gamified-training-advance-farm-workers-rights",
      image: `${UPLOADS}/2026/10/Workers-in-India-participate-in-gamified-training-1536x864.jpg.webp`,
      alt: "A group of women farm workers from India stands in a field, two holding tablets with the new gamified training",
    },
    {
      title: "Protecting the Congo Basin’s Vital Forest Ecosystems",
      date: "August 3, 2026",
      href: "/in-the-field/protecting-the-congo-basins-vital-forest-ecosystems",
      image: `${UPLOADS}/2026/08/kid-riding-bike-with-two-adults-1536x1025.jpg.webp`,
      alt: "Child riding a bicycle with two adults on a forest path",
    },
    {
      title: "How is the Rainforest Alliance Funded?",
      date: "June 24, 2026",
      href: "/insights/how-is-the-rainforest-alliance-funded",
      // the site's red placeholder artwork (no photo for this article)
      image: "https://www.rainforest-alliance.org/wp-content/themes/rainforest-replant/dist/img/placeholder_1.svg",
      alt: "",
    },
    {
      title: "Trust in the Age of AI: The Rainforest Alliance’s Position",
      date: "June 2, 2026",
      href: "/insights/trust-in-the-age-of-ai-the-rainforest-alliances-position",
      image: `${UPLOADS}/2023/06/farmgrow-ghana-group.jpeg.webp`,
      alt: "A man and a woman look at a tablet together",
    },
  ],
};


/* ---------- Section 3 : "Discover our work on the ground" banner ---------- */
export const LEARN_FIELD = {
  title: "Discover our work on the ground",
  text: "See how we’re collaborating with local partners to protect nature and promote the rights and well-being of farming and forest communities around the world.",
  linkLabel: "View Field Projects",
  href: "/resource/latest/project-profile",
};

/* ---------- Section 4 : "Insights" carousel (6 media / thought-leadership cards) ---------- */
// Every card is an EXTERNAL link (opens in a new tab, shows the ↗ icon) to the outlet's own article.
export const LEARN_INSIGHTS = {
  title: "Insights",
  text: "Explore key articles about our work, media coverage, thought leadership pieces, and more.",
  moreLabel: "View More Insights",
  moreHref: "/resource/latest?fwp_by_category=insights",
  articles: [
    {
      title: "Rainforest Alliance appoints new Chief Commercial Officer",
      date: "September 16, 2026",
      href: "https://www.gcrmag.com/rainforest-alliance-appoints-new-chief-commercial-officer/",
      image: `${UPLOADS}/2025/01/Global-Coffee-Report-magazine-logo.jpeg.optimal.jpeg`,
      alt: "Global Coffee Report logo",
    },
    {
      title: "Rainforest Alliance appoints Nicolas Mounard as chief commercial officer",
      date: "September 15, 2026",
      href: "https://www.confectioneryproduction.com/news/59454/rainforest-alliance-appoints-nicolas-mounard-as-chief-commercial-officer/",
      image: `${UPLOADS}/2019/07/logo-confectionery-production.png`,
      alt: "Confectionery Production logo",
    },
    {
      title: "This can be an era of transformational global development despite aid cuts, Rainforest Alliance says",
      date: "August 5, 2026",
      href: "https://www.independent.co.uk/climate-change/uk-aid-rainforest-alliance-climate-crisis-b3027831.html",
      image: `${UPLOADS}/2021/08/logo-The-Independent-UK.png`,
      alt: "The Independent logo",
    },
    {
      title: "How Tea Plantations Support Biodiversity and Wildlife",
      date: "July 19, 2026",
      href: "https://www.animalsaroundtheglobe.com/how-tea-plantations-support-biodiversity-and-wildlife-6-333077/",
      image: `${UPLOADS}/2026/07/Animals-Around-the-Globe_logo.jpeg.optimal.jpeg`,
      alt: "Animals Around the Globe logo",
    },
    {
      title: "Ingredients revolution: the race to survive climate disruption",
      date: "July 6, 2026",
      href: "https://www.foodnavigator.com/Article/2026/07/06/how-climate-change-is-reshaping-ingredients/",
      image: `${UPLOADS}/2024/01/Food-Navigator-logo.jpg.optimal.jpg`,
      alt: "FoodNavigator Europe logo",
    },
    {
      title: "Rainforest Alliance Doubles Down on Regenerative Cocoa As Certification Grows – With Lindt Reaching 100% Certified Sourcing",
      date: "June 30, 2026",
      href: "https://cocoaradar.com/rainforest-alliance-doubles-down-on-regenerative-cocoa-as-certification-grows-with-lindt-reaching-100-certified-sourcing/?ref=cocoaradar-newsletter",
      image: `${UPLOADS}/2025/03/cocoa-radar-logo.jpg.optimal.jpg`,
      alt: "Cocoa Radar logo",
    },
  ],
};


/* ---------- Section 5 : environmental curriculum banner (photo + text) ---------- */
export const LEARN_CURRICULUM = {
  image: `${UPLOADS}/2026/08/Kids-running-in-Assam-1024x683.jpg.optimal.jpg`,
  alt: "A group of smiling schoolchildren run down a dirt road in Assam, India",
  title: "Check out our new Environmental Curriculum for schools",
  text: "Calling all teachers and parents! Discover the Rainforest Alliance Environmental Curriculum for early learners to high schoolers (age 5-18). We have free, downloadable lesson plans to inspire young students to understand and care for nature.",
  linkLabel: "Explore our curriculum",
  href: "/environmental-curriculum",
};

/* ---------- Section 6 : "Research" carousel (8 cards) ---------- */
const PROJECTS = "/business/projects";
export const LEARN_RESEARCH = {
  title: "Research",
  text: "Get the science and data behind our work from this collection of white papers, case studies, project profiles, and more.",
  moreLabel: "Read More Research",
  moreHref: "/resource/latest?fwp_by_resource=white-paper",
  articles: [
    {
      title: "Project Profile: Kleinhans Fellowship for Community Forestry Research",
      date: "October 21, 2026",
      href: `${PROJECTS}/kleinhans-fellowship`,
      image: `${UPLOADS}/2020/03/iStock_rainforest_looking_up_trees-768x512.jpg.optimal.jpg`,
      alt: "Looking up at a dense pine forest",
    },
    {
      title: "Project Profile: Restoring and Protecting Biodiversity in the Eastern and Western Ghats of India Through Sustainable Agriculture",
      date: "April 16, 2026",
      href: `${PROJECTS}/project-profile-restoring-and-protecting-biodiversity-in-the-eastern-and-western-ghats-of-india-through-sustainable-agriculture`,
      image: `${UPLOADS}/2022/10/Coffee-worker-ghats-India-768x551.jpg.optimal.jpg`,
      alt: "A coffee worker picking cherries in India",
    },
    {
      title: "Project Profile: FLOURISH (Financial and Livelihoods Opportunities Using Regenerative Innovations for Sustainable Households)",
      date: "March 13, 2026",
      href: `${PROJECTS}/project-profile-flourish-financial-and-livelihoods-opportunities-using-regenerative-innovations-for-sustainable-households`,
      image: `${UPLOADS}/2026/03/48914978978_494307a2c2_o-768x512.jpg.optimal.jpg`,
      alt: "A green landscape in Kenya",
    },
    {
      title: "Project Profile: Advancing Sustainable Cocoa in Central Sulawesi",
      date: "February 2, 2026",
      href: `${PROJECTS}/advancing-sustainable-cocoa-in-central-sulawesi`,
      image: `${UPLOADS}/2026/02/IMG_5576-2-768x512.jpg.optimal.jpg`,
      alt: "Two people crouching over seedlings on a seedling farm",
    },
    {
      title: "Project profile: LandRISE",
      date: "December 17, 2025",
      href: `${PROJECTS}/project-profile-landrise`,
      image: `${UPLOADS}/2025/02/North-Luwu-landscape-768x403.jpg.optimal.jpg`,
      alt: "A terraced field seen from high above, surrounded by low mountains and trees",
    },
    {
      title: "Project Profile: Transforming Pest Management Practices on Coffee, Tea, and Pepper Farms in Vietnam",
      date: "October 14, 2025",
      href: `${PROJECTS}/transforming-pest-management-practices-on-coffee-tea-and-pepper-farms-in-vietnam`,
      image: `${UPLOADS}/2024/06/Coffee-cherries-from-a-farm-in-Vietnam-768x516.jpg.optimal.jpg`,
      alt: "Baskets of coffee cherries from a farm in Vietnam",
    },
    {
      title: "Our Regenerative Agriculture Approach",
      date: "September 8, 2025",
      href: "/resource-item/our-regenerative-agriculture-approach",
      image: `${UPLOADS}/2025/09/Afforestation-in-Sui-River-landscape-768x511.jpg.optimal.jpg`,
      alt: "A man planting a tree in the Sui River landscape for afforestation",
    },
    {
      title: "Project Profile: Our Integrated Pest Management Task Force in Assam, India",
      date: "August 20, 2025",
      href: `${PROJECTS}/project-profile-our-integrated-pest-management-task-force-in-assam-india`,
      image: `${UPLOADS}/2025/08/Tea-field-in-Assam-India-768x576.jpg.optimal.jpg`,
      alt: "A tea plantation in Assam, India",
    },
  ],
};


/* ---------- Section 7 (last) : "Looking for more?" Knowledge Hub banner ---------- */
export const LEARN_KNOWLEDGE = {
  image: `${UPLOADS}/2024/11/next-up-knowledge-hub-scaled-1.jpg.optimal.jpg`,
  title: "Looking for more?",
  text: "The Rainforest Alliance Knowledge Hub is the go-to resource for technical documentation about our programs and business solutions.",
  linkLabel: "The Knowledge Hub",
  href: "https://knowledge.rainforest-alliance.org/",
};
