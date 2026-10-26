import { Link, NavLink } from "react-router";
import { Brand } from "../components/Layout";
import { Button, Icon } from "../components/ui";


function OnboardingField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}) {
  return (
    <label className="
      onboarding-field flex flex-col gap-[7px] [&_>_span]:text-[10px] [&_>_span]:font-semibold
      [&_>_span]:text-[#706079] [&_input]:w-full [&_input]:[border:1px_solid_#dfd8e6] [&_input]:rounded-[6px]
      [&_input]:bg-[#fff] [&_input]:py-[12px] [&_input]:px-[13px] [&_input]:min-h-[42px] [&_input]:text-[11px]
      [&_input]:text-[#65556f] [&_input::placeholder]:text-[#a396ac]
    " htmlFor={`onboarding-${name}`}>
      <span>{label}</span>
      <input
        id={`onboarding-${name}`}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required="true"
      />
    </label>
  );
}

export default function Onboarding({ signIn = false }) {
  return (
    <div className="onboarding-page min-h-screen grid grid-cols-[1fr_1fr] bg-[#fdfcf9] text-[#30322e] max-[640px]:grid-cols-[1fr]">
      <section className="
        onboarding-story [&_.brand]:pl-0 [&_.brand]:self-start [&_.brand]:text-[27px]
        max-[640px]:[&_.brand]:text-[25px] max-[640px]:[&_.brand]:justify-start
        max-[640px]:[&_.brand-mark]:mr-[9px] max-[640px]:[&_.brand-dot]:inline [&_.eyebrow]:text-[#7c6d94]
        [&_.eyebrow]:text-[8px] [&_.eyebrow]:tracking-[1.4px] max-[640px]:[&_.eyebrow]:text-[6px] bg-[#eeedf5]
        py-[38px] px-[52px] flex flex-col justify-between relative overflow-hidden min-h-screen
        [&_h1]:text-[clamp(40px,_4vw,_63px)] [&_h1]:leading-[1.13] [&_h1]:font-[450] [&_h1]:tracking-[-2px]
        [&_h1]:my-[24px] [&_h1]:mx-0 [&_h1]:text-[#3d354a] [&_h1_em]:[font-family:Georgia,_serif]
        [&_h1_em]:font-normal [&_h1_em]:text-[#8c7caa] max-[900px]:p-[32px] max-[900px]:[&_h1]:text-[43px]
        max-[640px]:min-h-[auto] max-[640px]:p-[24px] max-[640px]:[&_h1]:text-[39px]
        max-[640px]:[&_h1]:tracking-[-1.5px] max-[640px]:[&_h1]:my-[14px] max-[640px]:[&_h1]:mx-0
      ">
        <Brand to="/careers" />
        <div className="
          onboarding-story-copy my-[65px] mx-0 [&_>_p]:text-[12px] [&_>_p]:text-[#7f738d] [&_>_p]:leading-[1.9]
          max-[900px]:[&_>_p]:text-[11px] max-[900px]:[&_>_p_br]:hidden max-[640px]:[margin:32px_0_5px]
          max-[640px]:[&_>_p]:text-[10px]
        ">
          <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
            A LITTLE HELLO. A WORLD OF POSSIBILITY.
          </span>
          <h1>
            Your next chapter.
            <br />
            <em>Make it a good one.</em>
          </h1>
          <p>
            Good people. Thoughtful teams. Work that feels like you.
            <br />
            Take your next step with HireTrail.
          </p>
          <div className="
            onboarding-note flex items-center gap-[18px] bg-[#e4e9d3] [border:1px_solid_#d8dfc5] p-[22px]
            rounded-[8px] max-w-[370px] mt-[48px] [transform:rotate(-3deg)] [&_>_span]:text-[47px]
            [&_>_span]:text-[#99a675] [&_>_span]:leading-[1] [&_strong]:text-[13px] [&_strong]:text-[#626f4b]
            [&_strong]:font-semibold [&_p]:text-[9px] [&_p]:text-[#768460] [&_p]:mt-[6px] [&_p]:leading-[1.8]
            max-[900px]:p-[18px] max-[900px]:gap-[12px] max-[900px]:[&_p]:text-[8px] max-[640px]:hidden
          ">
            <span aria-hidden="true">✳</span>
            <div>
              <strong>A place to do your thing.</strong>
              <p>Bring your curiosity. Leave room for possibility.</p>
            </div>
          </div>
        </div>
        <div className="onboarding-story-footer flex items-center gap-[8px] text-[10px] text-[#887c97] [&_i]:text-[17px] max-[640px]:hidden">
          <Icon name="seedling-line" /> A thoughtful way forward.
        </div>
      </section>
      <section className="
        onboarding-content [padding:30px_45px_22px] flex flex-col min-w-[0] max-[900px]:p-[28px]
        max-[640px]:py-[21px] max-[640px]:px-[24px]
      ">
        <Link to="/careers" className="onboarding-back inline-flex items-center gap-[7px] text-[10px] text-[#83768e] self-end [&_i]:text-[13px] max-[640px]:text-[9px]">
          <Icon name="arrow-left-line" /> Back to opportunities
        </Link>
        <div className="
          onboarding-form w-full max-w-[370px] m-auto py-[38px] px-0 [&_h2]:text-[30px] [&_h2]:tracking-[-1px]
          [&_h2]:font-[450] [&_h2]:text-[#44394f] [&_>_p:not(.onboarding-preview)]:text-[10px]
          [&_>_p:not(.onboarding-preview)]:leading-[1.8] [&_>_p:not(.onboarding-preview)]:text-[#8b7f95]
          [&_>_p:not(.onboarding-preview)]:mt-[9px] max-[900px]:[&_h2]:text-[27px] max-[640px]:py-[25px]
          max-[640px]:px-0 max-[640px]:max-w-[420px] max-[640px]:[&_h2]:text-[29px]
        ">
          <span className="
            onboarding-symbol place-items-center [border:1px_solid_#e2daeb] bg-[white] rounded-[11px] text-[#8c79a5]
            mb-[21px] shadow-[0_3px_6px_#34234404] [&_i]:text-[21px] max-[640px]:hidden
          ">
            <Icon name={signIn ? "door-open-line" : "user-add-line"} />
          </span>
          <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
            {signIn ? "GOOD TO HAVE YOU BACK" : "LET’S START WITH YOU"}
          </span>
          <h2>{signIn ? "Welcome back." : "A fresh start, right here."}</h2>
          <p>
            {signIn
              ? "Sign in and pick up where you left off."
              : "A few details. A little introduction. Your next possibility."}
          </p>
          <nav className="
            onboarding-options flex p-[4px] bg-[#f0edf4] [border:1px_solid_#e7e1ed] rounded-[7px] my-[23px] mx-0
            [&_a]:w-[50%] [&_a]:text-center [&_a]:p-[9px] [&_a]:text-[11px] [&_a]:rounded-[5px] [&_a]:text-[#8a7a9a]
            [&_.selected]:bg-[white] [&_.selected]:shadow-[0_2px_4px_#35214808] [&_.selected]:text-[#70568d]
            [&_.selected]:font-[650] max-[640px]:my-[20px] max-[640px]:mx-0
          " aria-label="Account options">
            <NavLink
              to="/onboarding/sign-in"
              className={signIn ? "selected" : ""}
            >
              Sign in
            </NavLink>
            <NavLink to="/onboarding" end className={!signIn ? "selected" : ""}>
              Register
            </NavLink>
          </nav>
          <div
            role="group"
            aria-label={signIn ? "Sign in details" : "Registration details"}
            className="onboarding-fields flex flex-col gap-[17px]"
            key={signIn ? "sign-in" : "register"}
          >
            {!signIn && (
              <OnboardingField
                label="Full name"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
              />
            )}
            <OnboardingField
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
            {!signIn && (
              <OnboardingField
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />
            )}
            <OnboardingField
              label="Password"
              name="password"
              type="password"
              placeholder={signIn ? "Enter your password" : "Create a password"}
              autoComplete={signIn ? "current-password" : "new-password"}
            />
          </div>
          <div className="
            onboarding-preferences flex items-center justify-between text-[9px] text-[#8a7897] my-[20px] mx-0
            [&_label]:flex [&_label]:items-center [&_label]:gap-[7px] [&_>_span]:flex [&_>_span]:items-center
            [&_>_span]:gap-[7px] [&_i]:text-[12px]
          ">
            {signIn ? (
              <>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgot-password">Forgot password?</Link>
              </>
            ) : (
              <span>
                <Icon name="lock-line" /> Your details, thoughtfully handled.
              </span>
            )}
          </div>
          <Button variant="primary" className="
            onboarding-submit [&.btn]:w-full [&.btn]:min-h-[43px] [&.btn]:text-[11px] [&.btn]:bg-[#756098]
            [&.btn]:border-[#756098] [&.btn:hover]:bg-[#634f83]
          ">
            {signIn ? "Sign in" : "Create account"}{" "}
            <Icon name="arrow-right-line" />
          </Button>
          <p className="onboarding-preview flex items-start gap-[5px] text-[8px] text-[#8f819a] leading-[1.8] mt-[13px] [&_i]:text-[12px] [&_i]:mt-[2px]">
            <Icon name="information-line" /> UI preview only. No account is
            created or information stored.
          </p>
          <div className="
            onboarding-guest flex flex-col items-center gap-[8px] [border-top:1px_solid_#e8e2ed] mt-[24px] pt-[19px]
            text-[9px] text-[#8b7c96] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-[5px] [&_a]:text-[#7c6694]
            [&_a]:font-[550] [&_i]:text-[12px]
          ">
            <span>You can also apply without an account.</span>
            <Link to="/careers/jobs">
              Keep exploring <Icon name="arrow-right-up-line" />
            </Link>
          </div>
        </div>
        <footer className="onboarding-footer flex justify-between gap-[15px] text-[8px] text-[#a194ac] max-[640px]:text-[7px] max-[640px]:pb-[8px]">
          <span>© 2026 HireTrail</span>
          <span>Good things start with good people.</span>
        </footer>
      </section>
    </div>
  );
}
