const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  situation: "",
  certifications: [],
  company: "",
  jobTitle: "",
  country: "",
  crops: [],
  revenue: "",
  comments: "",
  email: "",
  consent: false,
};

// each validator returns { field: "message" } — empty object = valid
export const validateName = (d) => {
  const e = {};
  if (!d.firstName.trim()) e.firstName = "Please enter your first name.";
  if (!d.lastName.trim()) e.lastName = "Please enter your last name.";
  return e;
};

export const validateSituation = (d) => (d.situation ? {} : { situation: "Please choose the option that fits best." });

export const validateDetails = (d) => {
  const e = {};
  if (!d.company.trim()) e.company = "Please enter your company’s name.";
  if (!d.country) e.country = "Please select a country.";
  if (d.crops.length === 0) e.crops = "Please select at least one crop.";
  if (!d.revenue) e.revenue = "Please select your company’s yearly revenue.";
  if (!d.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL.test(d.email.trim())) e.email = "Please enter a valid email address, like name@company.com.";
  return e;
};

// toggle a value inside an array (checkbox groups)
export const toggle = (list, value) => (list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

// after a failed submit: move keyboard focus to the first invalid control
export const focusFirstError = (form) =>
  requestAnimationFrame(() => form?.querySelector('[aria-invalid="true"], [data-invalid="true"] input')?.focus());
