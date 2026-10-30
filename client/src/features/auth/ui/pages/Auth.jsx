import { Link } from "react-router";
import { Brand } from "../../../../shared/ui/components/Brand";
import { Icon, Button, Field } from "../../../../shared/ui/components/index";

export function Auth({ register = false }) {
  return (
    <div className="auth-page min-h-screen grid grid-cols-[1fr_1fr] bg-[#fdfcfe] max-[960px]:grid-cols-[0.9fr_1fr] max-[700px]:grid-cols-[1fr]">
      <section className="
        auth-story [&_.brand]:text-[#594c79] [&_.brand]:pl-0 [&_.brand]:self-start [&_.eyebrow]:text-[8px]
        [&_.eyebrow]:text-[#9f91b4] bg-[#e9e7f1] py-[42px] px-[55px] flex flex-col justify-between min-h-screen
        relative overflow-hidden [&_>_div]:pt-[60px] [&_>_div]:relative [&_h1]:text-[clamp(43px,_4.5vw,_68px)]
        [&_h1]:leading-[1.12] [&_h1]:font-normal [&_h1]:text-[#625172] [&_h1]:tracking-[-2px]
        [&_h1]:[margin:23px_0_32px] [&_em]:[font-family:Georgia,_serif] [&_em]:text-[#9b88b7]
        [&_>_div_>_p]:text-[12px] [&_>_div_>_p]:text-[#a594b6] [&_>_div_>_p]:leading-[1.9]
        [&_blockquote]:text-[17px] [&_blockquote]:[font-family:'DM_Sans_Variable',_sans-serif] [&_blockquote]:font-[450]
        [&_blockquote]:leading-[1.7] [&_blockquote]:text-[#9682a8] [&_blockquote]:max-w-[350px]
        [&_blockquote]:[margin:70px_0_45px] [&_blockquote_footer]:flex [&_blockquote_footer]:items-center
        [&_blockquote_footer]:gap-[12px] [&_blockquote_footer]:mt-[24px]
        [&_blockquote_footer]:[font-family:'Plus_Jakarta_Sans_Variable',_sans-serif] [&_blockquote_strong]:text-[10px]
        [&_blockquote_strong]:font-semibold [&_blockquote_strong]:block [&_blockquote_small]:block
        [&_blockquote_small]:text-[8px] [&_blockquote_small]:text-[#af9cbb] [&_blockquote_small]:mt-[3px]
        [&_>_small]:text-[7px] [&_>_small]:text-[#b4a6c0] [&_>_small]:tracking-[1.5px] max-[1200px]:p-[35px]
        max-[960px]:p-[30px] max-[960px]:[&_h1]:text-[43px] max-[960px]:[&_blockquote]:text-[15px]
        max-[700px]:min-h-[auto] max-[700px]:p-[24px] max-[700px]:[&_>_div]:pt-[35px]
        max-[700px]:[&_h1]:text-[42px] max-[700px]:[&_h1]:[margin:16px_0_20px]
        max-[700px]:[&_>_div_>_p]:text-[11px] max-[700px]:[&_>_div_>_p_br]:hidden
        max-[700px]:[&_h1_br:nth-child(2)]:hidden max-[700px]:[&_blockquote]:hidden max-[700px]:[&_>_small]:hidden
      ">
        <Brand light />
        <div>
          <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">GOOD TEAMS DON’T HAPPEN BY CHANCE.</span>
          <h1>
            Every great team
            <br />
            starts with
            <br />
            <em>a little hello.</em>
          </h1>
          <span className="
            auth-star absolute right-[-10px] top-[185px] text-[130px] text-[#d1d9b6] [transform:rotate(12deg)]
            leading-[1] max-[1200px]:text-[90px] max-[1200px]:right-[-5px] max-[1200px]:top-[210px]
            max-[960px]:text-[75px] max-[960px]:right-[0] max-[960px]:top-[205px] max-[700px]:text-[100px]
            max-[700px]:right-[10px] max-[700px]:top-[75px]
          ">✳</span>
          <p>
            A thoughtful workspace for finding the people
            <br />
            who will move your business forward.
          </p>
        </div>
        <blockquote>
          “We spend less time managing our hiring, and more time getting to know
          the right people.”
          <footer>
            <span className="testimonial-avatar w-[32px] h-[32px] [border:1px_solid_#c4bad0] bg-[#e1d8e8] rounded-[50%] grid place-items-center text-[9px]">SC</span>
            <span>
              <strong>Sarah Chen</strong>
              <small>Co-founder, Acme Studio</small>
            </span>
          </footer>
        </blockquote>
        <small>HIRING, WITH A HUMAN TOUCH.</small>
      </section>
      <section className="
        auth-form-section flex flex-col [padding:37px_45px_24px] min-w-[0] max-[1200px]:p-[30px]
        max-[960px]:py-[30px] max-[960px]:px-[25px] max-[700px]:py-[22px] max-[700px]:px-[24px]
      ">
        <div className="
          auth-top text-[9px] flex justify-end gap-[8px] text-[#b0a2ba] [&_a]:text-[#9377b1] [&_a]:font-semibold
          [&_i]:text-[12px] max-[700px]:text-[8px]
        ">
          {register ? "Already part of the trail?" : "New around here?"}{" "}
          <Link to={register ? "/login" : "/register"}>
            {register ? "Log in" : "Create an account"}{" "}
            <Icon name="arrow-right-line" />
          </Link>
        </div>
        <div className="
          auth-form w-full max-w-[350px] m-auto py-[60px] px-0 [&_h2]:text-[26px] [&_h2]:font-medium
          [&_h2]:leading-[1.3] [&_h2]:tracking-[-0.7px] [&_h2]:text-[#7c648f]
          [&_>_p:not(.form-notice)]:text-[#b4a0c2] [&_>_p:not(.form-notice)]:text-[11px]
          [&_>_p:not(.form-notice)]:leading-[1.8] [&_>_p:not(.form-notice)]:mt-[11px] [&_>_.primary]:min-h-[42px]
          [&_>_.primary]:bg-[#9c84b4] [&_>_.primary]:border-[#9c84b4] max-[700px]:py-[38px] max-[700px]:px-0
          max-[700px]:max-w-[400px] max-[700px]:[&_h2]:text-[26px]
        ">
          <span className="
            auth-small-icon w-[43px] h-[43px] grid place-items-center [border:1px_solid_#ece4f3] rounded-[11px]
            bg-[white] text-[#b09ac5] shadow-[0_3px_7px_#42324c06] mb-[24px] [&_i]:text-[22px] max-[700px]:mb-[20px]
          ">
            <Icon name={register ? "user-add-line" : "door-open-line"} />
          </span>
          <h2>
            {register
              ? "Great teams start here."
              : "A good day to build your team."}
          </h2>
          <p>
            {register
              ? "A little less admin. A lot more possibility."
              : "Welcome back. Your next great hire is waiting."}
          </p>
          <Button className="google-btn w-full mt-[30px] h-[40px] text-[#9c8aaa] border-[#e8dfee]">
            <span className="google-g text-[18px] text-[#9177ae] font-bold mr-[6px]">G</span> Continue with Google
          </Button>
          <div className="
            or-line flex items-center gap-[12px] text-[#c7b7d2] text-[8px] my-[24px] mx-0 [&_span]:h-[1px]
            [&_span]:flex-1 [&_span]:bg-[#efe7f5]
          ">
            <span />
            {register ? "or sign up with email" : "or log in with email"}
            <span />
          </div>
          <div className="space-y-5">
            {register && (
              <>
                <Field label="Full name" placeholder="Alex Morgan" />
                <Field label="Company name" placeholder="Your company" />
              </>
            )}
            <Field
              label="Work email"
              type="email"
              placeholder="you@company.com"
            />
            <Field
              label="Password"
              type="password"
              placeholder={
                register ? "Create a strong password" : "Enter your password"
              }
            />
          </div>
          <div className="
            auth-options flex justify-between gap-[8px] text-[8px] text-[#ad95bc] items-center my-[22px] mx-0
            [&_label]:flex [&_label]:items-center [&_label]:gap-[7px] [&_a]:text-[#a48ab8]
          ">
            <label>
              <input type="checkbox" />{" "}
              {register
                ? "I agree to the terms of service"
                : "Remember me for 30 days"}
            </label>
            {!register && <Link to="/forgot-password">Forgot password?</Link>}
          </div>
          <Button variant="primary" className="w-full">
            {register ? "Create your workspace" : "Log in"}{" "}
            <Icon name="arrow-right-line" />
          </Button>
          <p className="form-notice block text-center text-[#b0a4bb] text-[8px] leading-[1.7] mt-[14px]">
            UI preview · Authentication will be connected later.
          </p>
          <Link className="
            back-link inline-flex gap-[7px] items-center text-[10px] text-[#9c8ba9] mb-[24px] [&_i]:text-[13px]
            auth-preview flex justify-center [margin:25px_0_0] text-[9px] text-[#b6a0c5]
          " to="/">
            Explore the workspace <Icon name="arrow-right-up-line" />
          </Link>
        </div>
        <footer className="auth-footer flex justify-between text-[8px] text-[#c3afcf] [&_i]:text-[11px] max-[700px]:[padding:0_0_10px]">
          <span>© 2026 HireTrail</span>
          <a href="mailto:help@hiretrail.example">
            A little help? <Icon name="arrow-right-up-line" />
          </a>
        </footer>
      </section>
    </div>
  );
}
