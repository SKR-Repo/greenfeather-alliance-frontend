import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import { ASSETS } from "../../constants/assets";
import { footerColumns, legalLinks, socialLinks } from "../../data/footer";
import Collapsible from "../common/Collapsible";
import { ChevronDown } from "../common/Icons";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

const linkCls =
  "inline-block text-[15px] text-white underline-offset-4 transition-colors hover:text-ra-yellow hover:underline xl:text-[17px]";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: call your newsletter API here.
    setSent(true);
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="grid gap-6 rounded-xl bg-ra-sage/95 p-6 text-ra-ink shadow-lg backdrop-blur-sm md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-[clamp(2rem,4.3vw,5rem)]"
    >
      <div className="self-center">
        <h2
          id="newsletter-title"
          className="font-display text-[clamp(1.9rem,3.3vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ra-teal"
        >
          Stay in touch with us
        </h2>
        <p className="mt-3 text-[15px] leading-snug sm:text-lg lg:text-[clamp(1rem,1.4vw,1.65rem)]">
          Get updates from the Rainforest Alliance, straight to your inbox.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 self-center lg:grid-cols-[1fr_auto] lg:gap-x-2 lg:gap-y-5">
        <label htmlFor="footer-email" className="text-lg font-semibold text-ra-teal lg:col-span-2 lg:text-[clamp(1.1rem,1.4vw,1.6rem)]">
          Email
        </label>
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="h-12 w-full rounded-md border border-ra-teal/20 bg-white px-3 text-[15px] outline-none transition-shadow placeholder:text-ra-ink/45 focus:ring-4 focus:ring-ra-teal/25 lg:row-start-2 lg:h-[clamp(3rem,3.5vw,4.2rem)] lg:text-[clamp(0.95rem,1.1vw,1.3rem)]"
        />
        <label className="flex cursor-pointer items-center gap-3 text-[14px] leading-snug sm:text-base lg:col-span-2 lg:row-start-3 lg:text-[clamp(1rem,1.2vw,1.4rem)]">
          <input
            type="checkbox"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="size-6 shrink-0 cursor-pointer appearance-none rounded-full border border-ra-ink/30 bg-white transition-all checked:border-ra-teal checked:bg-ra-teal checked:shadow-[inset_0_0_0_4px_white]"
          />
          Send me updates on how I can help people and nature
        </label>
        <button
          type="submit"
          className="h-12 rounded-md bg-ra-teal px-8 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-ra-ink focus-visible:outline-4 focus-visible:outline-ra-yellow lg:col-start-2 lg:row-start-2 lg:h-[clamp(3rem,3.5vw,4.2rem)] lg:px-[clamp(1.5rem,2.2vw,2.8rem)] lg:text-[clamp(1rem,1.15vw,1.35rem)]"
        >
          Subscribe
        </button>
        {sent && (
          <p role="status" className="font-medium text-ra-teal lg:col-span-2 lg:row-start-4">
            Thank you for subscribing!
          </p>
        )}
      </form>
    </section>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {socialLinks.map(({ name, href }) => {
        const Icon = socialIcons[name];
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="grid size-7 place-items-center rounded-full bg-white/80 text-ra-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ra-yellow"
            >
              <Icon className="size-3.5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function LegalLinks({ className = "" }) {
  return (
    <p className={`text-[13px] text-white ${className}`}>
      {legalLinks.map((l, i) => (
        <span key={l.href}>
          <Link to={l.href} className="underline underline-offset-2 hover:text-ra-yellow">
            {l.label}
          </Link>
          {i < legalLinks.length - 1 && " | "}
        </span>
      ))}{" "}
      |
    </p>
  );
}

export default function Footer() {
  const [openCol, setOpenCol] = useState(null);

  return (
    <footer className="relative z-10 overflow-hidden bg-[#2b3a36] text-white">
      {/* background photo */}
      <img
        src={ASSETS.footerBg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/35" />
      {/* soft white fade into the page above */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white via-white/70 to-transparent" />

      <div className="relative px-4 pb-6 pt-20 md:px-6 lg:pt-24">
        <Newsletter />

        {/* ── desktop link columns ── */}
        <div className="mt-14 hidden gap-x-8 lg:grid lg:grid-cols-[1.2fr_1fr_1.3fr_1.5fr_1fr]">
          <Link to="/" aria-label="Rainforest Alliance — home" className="self-start">
            <img
              src={ASSETS.logo}
              alt="Rainforest Alliance"
              className="h-12 w-auto brightness-0 invert"
              width="150"
              height="48"
              loading="lazy"
            />
          </Link>
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[13px] font-medium uppercase tracking-wider text-ra-yellow">{col.title}</h3>
              <ul className="mt-5 flex flex-col gap-5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── mobile accordions ── */}
        <div className="mt-10 border-t border-white/20 lg:hidden">
          {footerColumns.map((col) => {
            const open = openCol === col.title;
            return (
              <div key={col.title} className="border-b border-white/20">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenCol(open ? null : col.title)}
                  className="flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold"
                >
                  {col.title}
                  <ChevronDown className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
                <Collapsible open={open}>
                  <ul className="flex flex-col gap-4 pb-5 pt-1">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link to={l.href} className={linkCls}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapsible>
              </div>
            );
          })}

          <Link to="/" aria-label="Rainforest Alliance — home" className="mt-8 inline-block">
            <img
              src={ASSETS.logo}
              alt="Rainforest Alliance"
              className="h-11 w-auto brightness-0 invert"
              width="140"
              height="44"
              loading="lazy"
            />
          </Link>
        </div>

        {/* ── legal bar ── */}
        <div className="mt-12 border-t border-white/30 pt-6 lg:mt-16">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
            <p className="max-w-md text-[12.5px] leading-relaxed lg:max-w-none lg:text-[13px]">
              The Rainforest Alliance is a 501(c)(3) Nonprofit registered in the US under EIN: 13-3377893. | ©
              Copyright 1987 - {new Date().getFullYear()}, Rainforest Alliance
            </p>
            <div className="flex items-center gap-2">
              <LegalLinks />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
