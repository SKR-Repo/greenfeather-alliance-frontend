/*
  Currency list for the donation form's currency picker (src/components/getInvolved/CurrencyPicker.jsx).
  Names come from the browser (Intl.DisplayNames), so they read like "United Arab Emirates Dirham".
  Flags are tiny images from flagcdn.com (a grey circle shows while they load / if one is missing).
*/
const CODES =
  "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTN BWP BYN BZD CAD CDF CHF CLP CNY COP CRC CUP CVE CZK DJF DKK DOP DZD EGP ERN ETB EUR FJD FKP GBP GEL GHS GIP GMD GNF GTQ GYD HKD HNL HTG HUF IDR ILS INR IQD IRR ISK JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP MRU MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLE SOS SRD SSP STN SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VES VND VUV WST XAF XCD XOF XPF YER ZAR ZMW ZWL".split(
    " ",
  );

// ISO 4217 codes whose first two letters are NOT the flag's country code
const FLAG_OVERRIDE = { EUR: "eu", ANG: "cw", XAF: "cm", XOF: "sn", XCD: "ag", XPF: "pf" };

let names = null;
try {
  names = new Intl.DisplayNames(["en"], { type: "currency" });
} catch {
  names = null;
}

export const CURRENCIES = CODES.map((code) => ({
  code,
  name: names?.of(code) ?? code,
  flag: `https://flagcdn.com/w40/${FLAG_OVERRIDE[code] ?? code.slice(0, 2).toLowerCase()}.png`,
}));

export const DEFAULT_CURRENCY = "USD";

const formatter = (code, options = {}) => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
      ...options,
    });
  } catch {
    return null;
  }
};

// "$" for USD, "€" for EUR, "AED" when a currency has no short symbol
export function currencySymbol(code) {
  const part = formatter(code)?.formatToParts(0).find((p) => p.type === "currency");
  return part ? part.value : code;
}

// 1000 -> "$1,000"
export function formatAmount(code, value) {
  const f = formatter(code);
  return f ? f.format(value) : `${code} ${value}`;
}
