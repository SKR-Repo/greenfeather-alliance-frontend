import { useId, useState } from "react";
import { SIGNUP } from "../../data/homeSections";

/*
  Home section 9 — yellow (#FFE030) rounded panel: sign-up form on the left, looping video
  in a square on the right. Mobile: text + form first, video below.
  Sizes are vw-based on desktop (measured at 1906px wide): 1.3vw page gutter, 2.5vw inner padding,
  video 42.2vw square.
*/
export default function SignupSection() {
  const { title, text, emailLabel, consent, button, success, video, videoLabel } = SIGNUP;
  const uid = useId();
  const emailId = `${uid}-email`;
  const consentId = `${uid}-consent`;
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: call your newsletter API here.
    setSent(true);
  };

  return (
    <section aria-labelledby="signup-title" className="relative z-10 bg-white px-6 pt-4 sm:px-8 lg:px-[1.3vw] lg:pt-[1.3vw]">
      <div className="grid gap-10 rounded-[22px] bg-[#ffe030] px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_42.2vw] lg:items-center lg:gap-[3.8vw] lg:rounded-[2vw] lg:p-[2.5vw]">
        <div>
          <h2
            id="signup-title"
            className="font-body text-[1.3rem] font-semibold leading-tight tracking-tight text-[#1f56c3] sm:text-3xl lg:text-[2.4vw]"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-[1.5] text-[#0d0d0d] sm:text-lg lg:mt-[1.8vw] lg:text-[1.55vw]">{text}</p>

          <form onSubmit={onSubmit} className="mt-6 lg:mt-[2.1vw]">
            <label htmlFor={emailId} className="block text-xl font-semibold text-[#0d0d0d] lg:text-[1.58vw]">
              {emailLabel}
            </label>
            <input
              id={emailId}
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 block h-[2.4rem] w-full rounded-[4px] border border-[#767676] bg-white px-3 text-base text-[#0d0d0d] outline-none transition-shadow focus:ring-4 focus:ring-[#1f56c3]/35 sm:h-12 lg:mt-[1vw] lg:h-[3vw] lg:px-[0.9vw] lg:text-[1.25vw]"
            />

            <div className="mt-8 flex items-start gap-3 lg:mt-[2.8vw] lg:gap-[1.2vw]">
              <input
                id={consentId}
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-[0.1rem] size-[1.05rem] shrink-0 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white transition-colors checked:border-[#1f56c3] checked:bg-[radial-gradient(circle,#1f56c3_42%,#fff_48%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f56c3] sm:size-5 lg:mt-[0.15vw] lg:size-[1.37vw]"
              />
              <label htmlFor={consentId} className="cursor-pointer text-sm leading-[1.45] text-[#0d0d0d] sm:text-base lg:text-[1.37vw]">
                {consent}
              </label>
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-8 h-[2.4rem] rounded-[4px] bg-[#1f56c3] px-4 text-[0.95rem] font-semibold text-white transition-[filter,transform] duration-300 hover:brightness-110 active:scale-[0.98] disabled:cursor-default disabled:opacity-70 sm:h-12 sm:text-base lg:mt-[2.8vw] lg:h-[3vw] lg:px-[1.3vw] lg:text-[1.15vw]"
            >
              {button}
            </button>

            <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm font-medium text-[#0d0d0d] lg:mt-[1.2vw] lg:min-h-0 lg:text-[1.2vw]">
              {sent ? success : ""}
            </p>
          </form>
        </div>

        <video
          src={video}
          aria-label={videoLabel}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="mx-auto aspect-square w-full max-w-xl bg-black/10 object-cover lg:max-w-none"
        />
      </div>
    </section>
  );
}
