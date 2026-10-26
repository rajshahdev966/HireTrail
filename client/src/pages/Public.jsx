import { Link, useParams } from "react-router";
import { jobs } from "../data/mock";
import { Brand } from "../components/Layout";
import { Icon, Button, Field, EmptyState } from "../components/ui";
function CareersHeader() {
  return (
    <header className="
      careers-header max-w-[1200px] m-auto flex justify-between items-center py-[30px] px-[45px]
      [border-bottom:1px_solid_#e9e8e0] [&_nav]:flex [&_nav]:items-center [&_nav]:gap-[28px] [&_nav]:text-[11px]
      [&_nav]:text-[#8c8d80] [&_nav_>_a_>_span]:text-[8px] [&_nav_>_a_>_span]:bg-[#e8ebdb]
      [&_nav_>_a_>_span]:py-[3px] [&_nav_>_a_>_span]:px-[5px] [&_nav_>_a_>_span]:rounded-[5px]
      [&_nav_>_a_>_span]:ml-[4px] max-[960px]:py-[25px] max-[960px]:px-[35px] max-[700px]:p-[20px]
      max-[700px]:[&_nav]:gap-[15px] max-[700px]:[&_nav]:text-[9px] max-[700px]:[&_nav_>_a:first-child]:hidden
    ">
      <Link to="/careers" className="
        company-brand [&_.workspace-logo]:bg-[#e5e9d6] max-[700px]:[&_.workspace-logo]:w-[29px]
        max-[700px]:[&_.workspace-logo]:h-[29px] max-[700px]:[&_.workspace-logo]:text-[25px] flex items-center
        gap-[12px] text-[22px] font-[750] tracking-[-1px] max-[700px]:text-[18px] max-[700px]:gap-[7px]
      ">
        <span className="
          workspace-logo bg-[#e5edcf] [border:1px_solid_#d4dfbc] rounded-[7px] w-[35px] h-[35px] inline-flex
          items-center justify-center text-[30px] font-[750] tracking-[-4px] shrink-0 relative pr-[5px]
          [&_small]:absolute [&_small]:text-[15px] [&_small]:right-[5px] [&_small]:top-[0]
        ">
          a<small>✳</small>
        </span>
        acme studio
      </Link>
      <nav>
        <a href="#our-story">Our story</a>
        <Link to="/careers">
          Open positions <span>4</span>
        </Link>
        <Button to="/">
          Employer workspace <Icon name="arrow-right-up-line" />
        </Button>
      </nav>
    </header>
  );
}
export function Careers() {
  return (
    <div className="careers-page bg-[#fafaf6] min-h-screen">
      <CareersHeader />
      <section className="
        careers-hero [&_.btn]:mt-[28px] [&_.btn]:py-[13px] [&_.btn]:px-[20px] [&_.eyebrow]:text-[#8b9076]
        [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] relative max-w-[1110px] m-auto
        [padding:85px_50px_65px] [border-bottom:1px_solid_#e6e7dc] [&_h1]:text-[clamp(52px,_6.5vw,_86px)]
        [&_h1]:tracking-[-4px] [&_h1]:leading-[1.06] [&_h1]:font-[450] [&_h1]:[margin:23px_0_25px]
        [&_h1]:text-[#34372e] [&_h1]:relative [&_em]:[font-family:Georgia,_serif] [&_em]:text-[#8b9a66]
        [&_em]:font-normal [&_>_p]:text-[14px] [&_>_p]:text-[#949785] [&_>_p]:leading-[1.9] max-[960px]:py-[60px]
        max-[960px]:px-[40px] max-[700px]:[padding:55px_24px_40px] max-[700px]:[&_h1]:text-[57px]
        max-[700px]:[&_h1]:tracking-[-2.8px] max-[700px]:[&_>_p]:text-[12px]
      " id="our-story">
        <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
          <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> SMALL TEAM. BIG POSSIBILITIES.
        </span>
        <h1>
          Great work.
          <br />
          Even better <em>people.</em>
          <span className="
            careers-star absolute left-[650px] top-[12px] text-[160px] text-[#d6dfb9] leading-[1]
            [transform:rotate(12deg)] max-[1200px]:left-[570px] max-[1200px]:text-[130px] max-[960px]:left-[auto]
            max-[960px]:right-[10px] max-[960px]:text-[110px] max-[700px]:text-[65px] max-[700px]:right-[-5px]
            max-[700px]:top-[2px]
          ">✳</span>
        </h1>
        <p>
          We’re building thoughtful digital experiences.
          <br />
          And a place where you can do the best work of your life.
        </p>
        <a href="#open-roles" className="
          btn inline-flex items-center justify-center gap-[7px] [border:1px_solid_#dedee7] bg-[#fff] text-[#666674]
          py-[9px] px-[13px] rounded-[6px] min-h-[36px] text-[10px] font-semibold leading-[1.5] whitespace-nowrap
          [&_i]:text-[15px] [&:hover]:bg-[#f3f1f8] [&:hover]:border-[#bcb3d9] [&.primary]:bg-[#6a58b9]
          [&.primary]:border-[#6a58b9] [&.primary]:text-[#fff] [&.primary]:shadow-[0_2px_2px_#4837750c]
          [&.primary:hover]:bg-[#58469f] [&.primary:hover]:[transform:translateY(-1px)] primary
        ">
          Find your next chapter <Icon name="arrow-down-line" />
        </a>
        <div className="careers-caption text-[9px] tracking-[1px] text-[#a2a68f] mt-[45px] max-[700px]:text-[8px] max-[700px]:tracking-[0.4px]">
          Curious minds. Kind hearts. A little ambition.
        </div>
      </section>
      <section className="
        culture-strip max-w-[1110px] m-auto grid grid-cols-[repeat(3,_1fr)] gap-[55px] [padding:42px_50px_55px]
        [&_i]:text-[24px] [&_i]:text-[#a3ad84] [&_i]:mb-[15px] [&_i]:block [&_h3]:text-[16px]
        [&_h3]:text-[#656b53] [&_p]:text-[11px] [&_p]:leading-[1.9] [&_p]:text-[#9da08f] [&_p]:mt-[10px]
        max-[700px]:grid-cols-[1fr] max-[700px]:py-[35px] max-[700px]:px-[24px] max-[700px]:gap-[25px]
        max-[700px]:[&_>_div]:pl-[42px] max-[700px]:[&_>_div]:relative max-[700px]:[&_i]:absolute
        max-[700px]:[&_i]:left-[0] max-[700px]:[&_i]:top-[1px] max-[700px]:[&_i]:text-[23px]
        max-[700px]:[&_h3]:text-[15px] max-[700px]:[&_p]:text-[11px] max-[700px]:[&_p]:mt-[7px]
      ">
        <div>
          <Icon name="global-line" />
          <h3>Good work, anywhere.</h3>
          <p>We’re remote-friendly and trust you to find your rhythm.</p>
        </div>
        <div>
          <Icon name="seedling-line" />
          <h3>Room to become.</h3>
          <p>Your growth matters. Learn, experiment, and make your mark.</p>
        </div>
        <div>
          <Icon name="heart-3-line" />
          <h3>People before everything.</h3>
          <p>Real flexibility, thoughtful benefits, and a team that cares.</p>
        </div>
      </section>
      <section className="
        open-roles [&_.eyebrow]:text-[#a1a88a] max-w-[1110px] [padding:55px_50px_70px] m-auto
        [border-top:1px_solid_#e8e8df] [&_h2]:text-[36px] [&_h2]:font-[450] [&_h2]:tracking-[-1px]
        [&_h2]:text-[#4f5443] [&_p]:text-[11px] [&_p]:text-[#a1a48e] [&_p]:mt-[14px]
        max-[700px]:[padding:35px_24px_45px] max-[700px]:[&_h2]:text-[30px]
      " id="open-roles">
        <div className="flex justify-between items-end gap-4">
          <div>
            <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">YOUR NEXT CHAPTER</span>
            <h2>A seat at our table.</h2>
            <p>
              Find a role that feels like you. Bring what makes you different.
            </p>
          </div>
          <span className="
            roles-count text-[9px] text-[#929a7d] [border:1px_solid_#e1e5d2] rounded-[20px] py-[8px] px-[12px]
            whitespace-nowrap max-[700px]:text-[8px]
          ">04 open positions</span>
        </div>
        <div className="
          public-jobs [&_.eyebrow]:text-[8px] [&_.eyebrow]:tracking-[0.8px] [&_.eyebrow]:text-[#a0a58d]
          [&_.eyebrow]:mb-[8px] mt-[30px] [&_>_a]:flex [&_>_a]:items-center [&_>_a]:justify-between
          [&_>_a]:[border-top:1px_solid_#e6e7dc] [&_>_a]:py-[25px] [&_>_a]:px-0
          [&_>_a:last-child]:[border-bottom:1px_solid_#e6e7dc] [&_>_a:hover]:pl-[12px] [&_>_a:hover]:bg-[#f0f1e8]
          [&_h3]:text-[20px] [&_h3]:font-medium [&_h3]:text-[#606650] [&_p]:flex [&_p]:gap-[10px] [&_p]:items-center
          [&_p]:text-[10px] [&_i]:text-[13px] max-[700px]:[&_h3]:text-[17px] max-[700px]:[&_p]:text-[8px]
          max-[700px]:[&_p]:gap-[5px] max-[700px]:[&_p]:flex-wrap max-[700px]:[&_p]:max-w-[265px]
          max-[700px]:[&_>_a]:gap-[10px]
        ">
          {jobs
            .filter((j) => j.status === "Active")
            .map((j) => (
              <Link to={`/careers/${j.id}`} key={j.id}>
                <div>
                  <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">{j.department}</span>
                  <h3>{j.title}</h3>
                  <p>
                    <Icon name="map-pin-line" /> {j.location}
                    <span>·</span>
                    {j.type}
                    <span>·</span>
                    {j.salary}
                  </p>
                </div>
                <span className="
                  round-arrow h-[36px] w-[36px] [border:1px_solid_#dde2cd] rounded-[50%] grid place-items-center
                  text-[#a2ae85] [&_i]:text-[17px] max-[700px]:h-[29px] max-[700px]:w-[29px] max-[700px]:shrink-0
                ">
                  <Icon name="arrow-right-up-line" />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <footer className="
        careers-footer max-w-[1110px] m-auto [padding:25px_50px_40px] flex justify-between text-[9px]
        text-[#b0b49d] gap-[20px] [&_strong]:text-[#929b7d] [&_strong]:font-medium [&_strong]:ml-[14px]
        [&_i]:text-[12px] max-[700px]:py-[25px] max-[700px]:px-[24px] max-[700px]:flex-col max-[700px]:text-[8px]
      ">
        <span>© 2026 Acme Studio. A good place to grow.</span>
        <Link to="/">
          Hiring, thoughtfully.{" "}
          <strong>
            Powered by HireTrail <Icon name="arrow-right-up-line" />
          </strong>
        </Link>
      </footer>
    </div>
  );
}
export function PublicJob() {
  const { id } = useParams();
  const j = jobs.find((j) => j.id === id);
  if (!j) return <EmptyState title="Opportunity not found" />;
  return (
    <div className="careers-page bg-[#fafaf6] min-h-screen">
      <CareersHeader />
      <main className="
        public-job-content max-w-[1100px] [padding:50px_45px_80px] m-auto [&_>_h1]:text-[42px]
        [&_>_h1]:text-[#555e42] [&_>_h1]:font-[450] max-[700px]:py-[35px] max-[700px]:px-[22px]
        max-[700px]:[&_>_h1]:text-[32px]
      ">
        <Link className="back-link inline-flex gap-[7px] items-center text-[10px] text-[#9c8ba9] mb-[24px] [&_i]:text-[13px] " to="/careers">
          <Icon name="arrow-left-line" /> All opportunities
        </Link>
        <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">{j.department} · ACME STUDIO</span>
        <h1>{j.title}</h1>
        <div className="
          job-meta flex gap-[17px] flex-wrap text-[10px] text-[#96909f] my-[20px] mx-0 [&_span]:flex
          [&_span]:items-center [&_span]:gap-[6px] [&_i]:text-[14px]
        ">
          <span>
            <Icon name="map-pin-line" />
            {j.location}
          </span>
          <span>
            <Icon name="time-line" />
            {j.type}
          </span>
          <span>
            <Icon name="money-dollar-circle-line" />
            {j.salary}
          </span>
        </div>
        <div className="
          public-job-grid grid grid-cols-[1.3fr_1fr] gap-[65px] mt-[50px] items-start max-[960px]:gap-[30px]
          max-[700px]:grid-cols-[1fr] max-[700px]:mt-[35px]
        ">
          <article className="
            job-description [&_.info-box]:mt-[30px] [&_.info-box]:bg-[#eff0e4] [&_h2]:text-[20px]
            [&_h2]:[margin:30px_0_13px] [&_h2]:text-[#74805d] [&_h2:first-child]:mt-0 [&_p]:text-[12px]
            [&_p]:leading-[1.9] [&_p]:text-[#9da58e] [&_li]:text-[12px] [&_li]:leading-[1.9] [&_li]:text-[#9da58e]
            [&_ul]:pl-[17px] [&_ul]:[list-style:disc] [&_li]:mb-[10px]
          ">
            <h2>A little about us</h2>
            <p>
              We’re Acme Studio, a small team of curious people making
              thoughtful digital products. We care about the details, enjoy
              asking better questions, and believe our best work happens
              together.
            </p>
            <h2>Your next chapter</h2>
            <p>
              As our {j.title}, you’ll help shape the experiences we create for
              thousands of people. You’ll have the freedom to explore, the
              support to grow, and a real voice in where we go next.
            </p>
            <h2>What you’ll do</h2>
            <ul>
              <li>
                Collaborate with a small, cross-functional team to turn ideas
                into meaningful work.
              </li>
              <li>
                Own projects from early exploration through thoughtful delivery.
              </li>
              <li>
                Bring fresh perspectives and help us improve the way we work.
              </li>
              <li>
                Share your knowledge and learn from the people around you.
              </li>
            </ul>
            <h2>What you’ll bring</h2>
            <ul>
              <li>
                3+ years of relevant experience and a portfolio of work you’re
                proud of.
              </li>
              <li>
                A thoughtful approach to solving problems and an eye for detail.
              </li>
              <li>
                Clear communication, curiosity, and a collaborative spirit.
              </li>
              <li>The willingness to ask questions and try something new.</li>
            </ul>
            <h2>What’s in it for you</h2>
            <p>
              Competitive compensation, flexible working hours, generous paid
              time off, a learning budget, and people who want to see you
              thrive.
            </p>
            <div className="
              info-box bg-[#f2f1e8] [border:1px_solid_#e8e6d8] rounded-[7px] p-[15px] flex items-center gap-[8px]
              text-[#a49d87] text-[10px] leading-[1.7]
            ">
              You don’t need to tick every box. If this role feels like your
              next chapter, we’d love to hear from you.
            </div>
          </article>
          <aside className="
            application-form [&_.field_>_span]:text-[#97a180] [&_.field_input]:border-[#e2e7d8]
            [&_.field_input]:text-[#929d7c] [&_.field_textarea]:border-[#e2e7d8] [&_.field_textarea]:text-[#929d7c]
            [&_.field_input::placeholder]:text-[#c1c9b4] [&_.field_textarea::placeholder]:text-[#c1c9b4]
            [&_.form-grid]:p-0 [&_.form-grid]:gap-[20px] p-[25px] bg-[white] [border:1px_solid_#e4e8d9] rounded-[12px]
            sticky top-[25px] [&_h2]:text-[25px] [&_h2]:font-medium [&_h2]:text-[#747d60] [&_>_p]:text-[10px]
            [&_>_p]:[margin:9px_0_25px] [&_>_p]:text-[#a6ae95] max-[700px]:static
          ">
            <h2>Let’s get to know you.</h2>
            <p>Big things start with a little hello.</p>
            <div className="
              form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
              max-[700px]:gap-[19px_13px]
            ">
              <Field label="Full name *" placeholder="Your name" wide />
              <Field
                label="Email address *"
                type="email"
                placeholder="you@example.com"
                wide
              />
              <Field
                label="LinkedIn or portfolio"
                type="url"
                placeholder="https://"
                wide
              />
              <Field label="Resume *" type="file" wide />
              <Field
                label="A little about you"
                type="textarea"
                placeholder="What brings you here?"
                wide
              />
            </div>
            <label className="consent flex items-start gap-[10px] text-[9px] leading-[1.7] text-[#aab397] my-[22px] mx-0">
              <input type="checkbox" /> I agree to share my information with
              Acme Studio for recruitment purposes.
            </label>
            <Button variant="primary" className="w-full">
              Send application <Icon name="arrow-right-up-line" />
            </Button>
            <small className="form-notice block text-center text-[#b0a4bb] text-[8px] leading-[1.7] mt-[14px]">
              UI preview · No information is submitted or stored.
            </small>
          </aside>
        </div>
      </main>
    </div>
  );
}
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
export function ForgotPassword() {
  return (
    <div className="
      reset-page min-h-screen flex items-center justify-center flex-col gap-[40px] [&_h1]:text-[28px]
      [&_p:not(.form-notice)]:text-[11px] [&_p:not(.form-notice)]:text-[#a897b5]
      [&_p:not(.form-notice)]:[margin:15px_0_25px]
    ">
      <Brand />
      <div className="panel bg-[white] [border:1px_solid_#e6e7ed] rounded-[9px] min-w-[0] overflow-hidden ">
        <h1>A fresh start.</h1>
        <p>Enter your work email to request a password reset.</p>
        <Field label="Work email" type="email" placeholder="you@company.com" />
        <Button variant="primary" className="w-full mt-5">
          Send reset link
        </Button>
        <p className="form-notice block text-center text-[#b0a4bb] text-[8px] leading-[1.7] mt-[14px]">UI preview · No email will be sent.</p>
        <Button to="/login" className="w-full">
          Back to login
        </Button>
      </div>
    </div>
  );
}
