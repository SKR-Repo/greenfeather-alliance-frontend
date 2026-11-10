/*
  Get Involved — section 6 (merch shop carousel) and section 7 (everyday actions).
  Copy, links and image URLs live here, not in the components.
  (You can also paste these two exports into getInvolvedSections.js if you prefer one file.)
*/
const BASE = "https://www.rainforest-alliance.org/wp-content/uploads/2024/11";

// TODO: replace with the real merch-store URL(s). Every card + "View the store" use this for now.
const STORE_URL = "https://shop.rainforest-alliance.org/";

/* ---------- Section 6 : "Shop the Rainforest Alliance" ---------- */
export const GIVE_SHOP = {
  title: "Shop the Rainforest Alliance",
  text: "If you love rainforests as much as we do, why not show it with a stylish T-shirt—or a tote or tea towel? A purchase from our merch shop will help safeguard rainforests and all the magical life within.",
  storeLabel: "View the store",
  storeHref: STORE_URL,
  // one entry per card, in display order; `href` is the product page the card button opens
  cards: [
    { id: "women", label: "Women’s Apparel", image: `${BASE}/shop_women.jpeg.optimal.jpeg`, alt: "Woman wearing a Rainforest Alliance frog T-shirt", href: STORE_URL },
    { id: "men", label: "Men’s Apparel", image: `${BASE}/shop_men.jpeg.optimal.jpeg`, alt: "Man wearing a Respect Your Mother T-shirt", href: STORE_URL },
    { id: "kids", label: "Kid’s Apparel", image: `${BASE}/shop_kids.jpeg.optimal.jpeg`, alt: "Girl wearing a Force of Nature T-shirt", href: STORE_URL },
    { id: "totes", label: "Tote Bags", image: `${BASE}/shop_totes.jpeg.optimal.jpeg`, alt: "No Trees No Life tote bag hanging in the forest", href: STORE_URL },
    { id: "prints", label: "Art Prints", image: `${BASE}/shop_prints.jpeg.optimal.jpeg`, alt: "Nurture Our Nature framed art print", href: STORE_URL },
    { id: "housewares", label: "Homeware", image: `${BASE}/shop_housewares.jpeg.optimal.jpeg`, alt: "Mug with a green frog illustration", href: STORE_URL },
  ],
};

/* ---------- Section 7 : "Everyday actions" (copy left, rounded image right) ---------- */
export const GIVE_EVERYDAY = {
  image: `${BASE}/family-composting-scaled.jpg.optimal.jpg`,
  imageAlt: "A parent and child composting kitchen scraps together",
  title: "Everyday actions for global change: tips from the experts",
  text: "Small actions can add up to big impact. Find out what you can do in your daily life to build a better world.",
  buttonLabel: "See everyday actions",
  buttonHref: "/get-involved/everyday-actions",
};
