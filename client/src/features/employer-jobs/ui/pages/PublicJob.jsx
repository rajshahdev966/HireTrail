import { Link, useParams } from "react-router";
import { jobs } from "../../state/mockJobs";
import { Icon, Button, Field, EmptyState } from "../../../../shared/ui/components/index";
import { CareersHeader } from "../components/CareersHeader";

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
        <Link className="back-link inline-flex gap-[7px] items-center text-[10px] text-[#9c8ba9] mb-[24px] [&_i]:text-[13px] " to="/company/careers">
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
