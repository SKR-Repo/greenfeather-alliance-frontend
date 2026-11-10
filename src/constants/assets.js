// Single place for remote assets. To self-host later, download the files into
// /public/images and change only these paths (e.g. "/images/ra_logo.svg").
const BASE = "https://www.rainforest-alliance.org";

export const ASSETS = {
  logo: '/greenfeather_allience_logo.png',
  // logo: `${BASE}/wp-content/themes/rainforest-replant/dist/img/ra_logo.svg`,
  homeHero: `${BASE}/wp-content/uploads/2025/01/red-eyed-treefrog_gettyimages-1-scaled.jpg.webp`,
  workHero: `${BASE}/wp-content/uploads/2024/11/our-work-header-2-e1730237437926.jpg.optimal.jpg`,
  // Our Work -> "Our solutions start at the source" collage (banana, palm fruit, orange sprig, rose,
  // cocoa pod, coffee beans). PASTE ITS URL HERE. While empty, a plain sage placeholder is shown.
  workSolutions: `${BASE}/wp-content/uploads/2024/11/fruit-falling_square.jpg.optimal.jpg`,
  workRegionsMap: `${BASE}/wp-content/uploads/2024/11/map-world-scaled-1.jpg.webp`,
  workSupport: `${BASE}/wp-content/uploads/2024/04/Man-planting-tree-1024x683.jpg.webp`,
  impactHero: `${BASE}/wp-content/uploads/2020/11/peruvian-amazon-rainforest-canopy-768x511.jpg.webp`,
  impactAlliance: `${BASE}/wp-content/uploads/2026/02/full-width-text-and-video-1024x522.png.webp`,
  getInvolvedHero: `${BASE}/wp-content/uploads/2024/11/ocean-background-1-scaled-1.jpg.optimal.jpg`,
  getInvolvedDonate: `${BASE}/wp-content/uploads/2021/07/ramon-nuts-768x513.jpg.optimal.jpg`,
  getInvolvedFundraiser: `${BASE}/wp-content/uploads/2024/11/Young-students-hugging_square.jpg.optimal.jpg`,
  forBusinessHero: `${BASE}/wp-content/uploads/2025/04/open-cocoa-pod_resized.jpeg.optimal.jpeg`,
  forBusinessSeals: `${BASE}/wp-content/uploads/2025/09/seals.gif`,
  forBusinessBanner: `${BASE}/wp-content/uploads/2022/04/Alfred-and-Anna-Cheptoek-Chemutai-coffee-farmers-uganda.jpg.optimal.jpg`,
  learnHero: `${BASE}/wp-content/uploads/2024/11/utility-hero_lightavocado_sm.jpg.webp`,
  footerBg: `${BASE}/wp-content/themes/rainforest-replant/dist/img/footer_fancy.jpeg`,
};
