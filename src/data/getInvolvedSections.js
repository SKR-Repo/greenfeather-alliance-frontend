/*
  Content for the Get Involved (ways to give) page. Copy and config live here, not in the components.
  The hero photo comes from src/constants/assets.js (ASSETS.getInvolvedHero).
  Section 2 of this page is the Home page's <ProductsSection /> (its content is in homeSections.js).
*/

/* ---------- Section 1 : hero (title + text on the left, donation form on the right) ---------- */
export const GIVE_HERO = {
  alt: "Ocean waves catching the light",
  // one entry per desktop line; tone picks the colour (on mobile the two teal lines flow together)
  titleLines: [
    { text: "Help us build", tone: "white" },
    { text: "a better", tone: "aqua" },
    { text: "future", tone: "aqua" },
  ],
  text: "We bring farmers, forest communities, companies, and consumers together to create a better world for people and nature. Thank you for being part of our alliance.",
};

export const GIVE_FORM = {
  // where the big button sends the donor once an amount is chosen
  donateUrl: "https://give.rainforest-alliance.org/give/291977/#!/donation/checkout",
  modes: {
    once: { label: "Give once", adverb: "one-time", amounts: [100, 200, 300, 500, 750, 1000], suggested: 200 },
    monthly: { label: "Monthly", adverb: "monthly", amounts: [10, 25, 50, 100, 200, 300], suggested: 25 },
  },
  chooseLabel: "Choose an amount",
  dedicate: {
    button: "Dedicate my donation",
    buttonDone: "Dedicated to",
    honor: "In honor of",
    memory: "In memory of",
    nameLabel: "Name",
    hintBefore: "You can add a note later in ",
    hintLink: "Donation options",
    remove: "Remove dedication",
  },
};

/* ---------- Section 4 : "Donate today" banner (photo background, centred copy + 2 buttons) ---------- */
export const GIVE_DONATE = {
  alt: "Hands holding freshly picked coffee cherries",
  title: "Donate today",
  text: "We\u2019re creating a more sustainable world by using social and market forces to protect nature and improve the lives of farmers and forest communities.",
  buttons: [
    { label: "One-Time Donations", href: "https://give.rainforest-alliance.org/give/291977/#!/donation/checkout" },
    { label: "Monthly Donations", href: "https://give.rainforest-alliance.org/give/291977/#!/donation/checkout" },
  ],
};

/* ---------- Section 5 : "Start a fundraiser" (rounded image left, copy right) ---------- */
export const GIVE_FUNDRAISER = {
  imageAlt: "Two Rainforest Alliance team members hugging beside a lake",
  title: "Start a fundraiser today for a brighter tomorrow",
  text: "Birthday? Bike race? Block party? Launch your own fundraiser for the Rainforest Alliance.",
  buttonLabel: "Start a fundraiser",
  buttonHref: "https://give.rainforest-alliance.org/campaign/fundraise-for-the-alliance/c331229",
};

/* ---------- Section 8 : "Gift and estate planning" (sage rounded card) ---------- */
export const GIVE_GIFT = {
  title: "Gift and estate planning at the Rainforest Alliance",
  text: "A planned gift is a wonderful way to safeguard the Earth\u2019s treasures for future generations. A stock donation can also be your environmental legacy.",
  buttonLabel: "Explore gift planning",
  buttonHref: "/get-involved/gift-planning",
};

/* ---------- Section 9 : "Find out more about our alliance" (parallax photo card) ---------- */
export const GIVE_ALLIANCE = {
  // ⚠ Swap for the exact sun-rays forest photo from the live site (any URL works, nothing else to change).
  image: "https://www.rainforest-alliance.org/wp-content/uploads/2021/07/sunlight-through-rainforest-canopy.jpg.optimal.jpg",
  title: "Find out more about our alliance",
  text: "Learn about our work with farming and forest communities around the world, media coverage, and more. Or access our white papers and research.",
  buttonLabel: "Explore our work",
  buttonHref: "/our-work",
};

/* ---------- Section 10 : FAQ (all closed at first) ---------- */
export const GIVE_FAQ = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Can I donate over the phone or through the mail?",
      a: "Yes! Call us at +1 (212) 677-1900 to make a gift over the phone, or mail a check to: ATTN: Philanthropy, Rainforest Alliance, 298 Fifth Avenue, 7th Floor, New York, NY 10001.",
    },
    {
      q: "Is my donation tax-deductible?",
      // ⚠ placeholder answer – replace with the live site's text
      a: "The Rainforest Alliance is a nonprofit organization, and gifts are tax-deductible to the extent allowed by law. You will receive a receipt for your records. For advice on your personal situation, please consult your tax advisor.",
    },
    {
      q: "How can I change my contact information or preferences?",
      // ⚠ placeholder answer
      a: "Contact our philanthropy team by phone or mail using the details above and let us know what you would like to update, such as your address, email, or communication preferences. We will take care of it for you.",
    },
    {
      q: "Can I donate goods or services?",
      // ⚠ placeholder answer
      a: "We are grateful for every offer of support. Please get in touch with our philanthropy team to discuss in-kind gifts, and we will let you know how they can best help our work with farming and forest communities.",
    },
    {
      q: "I have a question that I don\u2019t see answered here.",
      // ⚠ placeholder answer
      a: "We\u2019re happy to help. Call us at +1 (212) 677-1900 or write to ATTN: Philanthropy, Rainforest Alliance, 298 Fifth Avenue, 7th Floor, New York, NY 10001, and a member of our team will get back to you.",
    },
  ],
};
