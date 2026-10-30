import { Link, useParams } from "react-router";
import { Icon, Button, EmptyState } from "../../../../shared/ui/components/index";
import { careerJobs } from "../../../user-jobs/state/careerData";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { ApplicationField } from "../components/ApplicationField";
import { FormSection } from "../components/FormSection";
import { ApplicationProgress } from "../components/ApplicationProgress";
import { PreviewNotice } from "../../../../shared/ui/components/PreviewNotice";

export function ApplyForJob() {
  const { id } = useParams();
  const job = careerJobs.find((j) => j.id === id);
  if (!job)
    return (
      <div className="
        talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
        max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
        max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-missing pt-[50px] pb-[70px] text-center
      ">
        <EmptyState title="Choose your next opportunity first." />
        <Button to="/careers/jobs">Explore jobs</Button>
      </div>
    );
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-apply [&_.talent-page-heading]:pt-0
      max-[560px]:[&_.talent-page-heading]:pb-[25px] pb-[55px]
    ">
      <Link className="
        talent-back inline-flex gap-[7px] items-center text-[#7d6a91] text-[10px] my-[32px] mx-0 [&_i]:text-[14px]
        max-[560px]:text-[9px] max-[560px]:my-[24px] max-[560px]:mx-0
      " to={`/careers/jobs/${job.id}`}>
        <Icon name="arrow-left-line" /> Back to the opportunity
      </Link>
      <div className="
        talent-page-heading [padding:50px_0_30px] [&_h1]:mt-[15px] [&_h1]:text-[44px] [&_h1]:tracking-[-1.7px]
        [&_p]:text-[#777f6b] [&_p]:text-[12px] [&_p]:mt-[16px] max-[560px]:pt-[35px] max-[560px]:pb-[25px]
        max-[560px]:[&_h1]:text-[37px] max-[560px]:[&_h1]:tracking-[-1.5px] max-[560px]:[&_h1]:leading-[1.15]
        max-[560px]:[&_p]:text-[11px] max-[560px]:[&_p]:leading-[1.9] max-[560px]:[&_p]:mt-[13px]
      ">
        <span className="
          talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
          max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
        ">
          BIG THINGS START WITH A LITTLE HELLO
        </span>
        <h1>
          Let’s get to <em>know you.</em>
        </h1>
        <p>You’ve found a possibility. Tell the team what makes you, you.</p>
      </div>
      <ApplicationProgress />
      <div className="
        talent-apply-layout grid grid-cols-[minmax(0,_1fr)_285px] gap-[45px] items-start
        max-[1100px]:grid-cols-[minmax(0,_1fr)_255px] max-[1100px]:gap-[26px]
        max-[800px]:grid-cols-[minmax(0,_1fr)_205px] max-[800px]:gap-[20px] max-[560px]:grid-cols-[1fr]
        max-[560px]:gap-[23px]
      ">
        <div>
          <div role="group" aria-label={`Application for ${job.title}`}>
            <FormSection
              number="01"
              title="The person behind the application."
              description="A few essentials so the team can get in touch."
            >
              <ApplicationField
                id="full-name"
                label="Full name"
                placeholder="Your full name"
                required
              />
              <ApplicationField
                id="email"
                label="Email address"
                type="email"
                placeholder="you@example.com"
                required
                hint="Application updates would be sent to this address."
              />
              <ApplicationField
                id="phone"
                label="Phone number"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
              <ApplicationField
                id="location"
                label="Where are you based?"
                placeholder="City, country"
              />
            </FormSection>
            <FormSection
              number="02"
              title="The experience you bring."
              description="The skills, stories, and work you’re proud of."
            >
              <ApplicationField
                id="skills"
                label="Your skills"
                placeholder="e.g. Product design, Figma, research"
                wide
                required
                hint="Separate your skills with commas."
              />
              <ApplicationField
                id="experience"
                label="Relevant experience"
                type="textarea"
                placeholder="Tell us about your work, projects, or a different path that brought you here…"
                wide
                required
              />
              <ApplicationField
                id="portfolio"
                label="Portfolio or website URL"
                type="url"
                placeholder="https://your-work.com"
                hint="A link to work you’d like the team to see."
              />
              <ApplicationField
                id="resume"
                label="Resume URL"
                type="url"
                placeholder="https://your-resume.com/resume.pdf"
                required
                hint="Use a publicly accessible, view-only resume link."
              />
            </FormSection>
            <FormSection
              number="03"
              title="A little more, in your own words."
              description="What’s drawing you to this opportunity?"
            >
              <ApplicationField
                id="cover-letter"
                label="Cover letter"
                type="textarea"
                placeholder="Introduce yourself. Share what excites you about this role and what you’d love to contribute…"
                wide
                hint="Optional. A thoughtful introduction is always welcome."
              />
            </FormSection>
            <section className="
              talent-application-final max-[800px]:[&_.btn]:text-[9px] max-[800px]:[&_.btn]:py-[9px]
              max-[800px]:[&_.btn]:px-[12px] max-[560px]:[&_.btn]:text-[10px] [&_>_label]:flex [&_>_label]:items-start
              [&_>_label]:gap-[10px] [&_>_label]:text-[10px] [&_>_label]:text-[#7a8b66] [&_>_label]:leading-[1.8]
              [&_>_label]:[margin:7px_0_24px] [&_>_label_input]:mt-[4px] [&_>_label_small]:block
              [&_>_label_small]:text-[8px] [&_>_label_small]:text-[#859472] [&_>_label_small]:mt-[3px]
              [&_>_div:not(.talent-preview-notice)]:flex [&_>_div:not(.talent-preview-notice)]:items-center
              [&_>_div:not(.talent-preview-notice)]:justify-between [&_>_div:not(.talent-preview-notice)]:py-[20px]
              [&_>_div:not(.talent-preview-notice)]:px-0
              [&_>_div:not(.talent-preview-notice)]:[border-top:1px_solid_#e0e7d2]
              [&_>_div_>_span:not(:last-child)]:flex [&_>_div_>_span:not(:last-child)]:items-center
              [&_>_div_>_span:not(:last-child)]:gap-[5px] [&_>_div_>_span:not(:last-child)]:text-[9px]
              [&_>_div_>_span:not(:last-child)]:text-[#849471] [&_>_div_>_span_>_i]:text-[13px]
              max-[800px]:[&_>_div:not(.talent-preview-notice)]:gap-[12px]
              max-[800px]:[&_>_div_>_span:not(:last-child)]:text-[7px] max-[560px]:[&_>_label]:text-[9px]
              max-[560px]:[&_>_div:not(.talent-preview-notice)]:flex-wrap
              max-[560px]:[&_>_div_>_span:not(:last-child)]:text-[8px]
            ">
              <label>
                <input type="checkbox" />
                <span>
                  I consent to sharing these details with {job.company.name} for
                  this recruitment process.{" "}
                  <small>
                    Your information is intended only for the hiring team.
                  </small>
                </span>
              </label>
              <div>
                <span>
                  <Icon name="lock-line" /> No account required
                </span>
                <Button variant="primary">
                  Submit application <Icon name="arrow-right-up-line" />
                </Button>
              </div>
              <PreviewNotice>
                UI preview: this form does not validate, submit, or store
                information.{" "}
                <Link to={`/careers/application-success?job=${job.id}`}>
                  View an example confirmation <Icon name="arrow-right-line" />
                </Link>
              </PreviewNotice>
            </section>
          </div>
        </div>
        <aside className="talent-application-aside max-[560px]:row-[1]">
          <div className="
            talent-application-summary [&_.talent-meta]:my-[20px] [&_.talent-meta]:mx-0 [&_.talent-meta]:gap-[13px]
            max-[800px]:[&_.talent-meta]:text-[8px] bg-[#f0f1e6] [border:1px_solid_#e0e4d2] rounded-[9px] p-[24px]
            [&_h2]:text-[24px] [&_h2]:leading-[1.2] [&_h2]:font-medium [&_h2]:tracking-[-0.7px] [&_h2]:mt-[11px]
            [&_>_p]:text-[11px] [&_>_p]:text-[#778765] [&_>_p]:mt-[8px] [&_>_strong]:text-[13px]
            [&_>_strong]:text-[#72835e] [&_>_strong]:font-[550] [&_>_a]:flex [&_>_a]:justify-between
            [&_>_a]:[border-top:1px_solid_#dce2cc] [&_>_a]:pt-[17px] [&_>_a]:mt-[22px] [&_>_a]:text-[#71805c]
            [&_>_a]:text-[9px] [&_>_a_>_i]:text-[14px] max-[1100px]:p-[20px] max-[1100px]:[&_h2]:text-[21px]
            max-[800px]:p-[17px] max-[800px]:[&_h2]:text-[20px] max-[800px]:[&_>_strong]:text-[11px]
            max-[560px]:p-[20px] max-[560px]:grid max-[560px]:grid-cols-[45px_1fr] max-[560px]:gap-x-[15px]
            max-[560px]:[&_h2]:text-[22px] max-[560px]:[&_h2]:mt-[6px] max-[560px]:[&_>_p]:col-[2]
            max-[560px]:[&_>_p]:text-[10px] max-[560px]:[&_>_p]:mt-[5px] max-[560px]:[&_>_strong]:text-[12px]
            max-[560px]:[&_>_strong]:col-[1/-1] max-[560px]:[&_>_a]:col-[1/-1] max-[560px]:[&_>_a]:mt-[16px]
            max-[560px]:[&_>_a]:pt-[13px]
          ">
            <CompanyMark company={job.company} large />
            <span className="
              talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
              max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
            ">YOU’RE SAYING HELLO TO</span>
            <h2>{job.title}</h2>
            <p>{job.company.name}</p>
            <div className="
              talent-meta flex flex-wrap items-center gap-[14px] text-[9px] text-[#777f6b] [&_span]:flex
              [&_span]:gap-[5px] [&_span]:items-center [&_i]:text-[13px]
            ">
              <span>
                <Icon name="map-pin-line" />
                {job.location}
              </span>
              <span>
                <Icon name="time-line" />
                {job.type}
              </span>
            </div>
            <strong>{job.salary}</strong>
            <Link to={`/careers/jobs/${job.id}`}>
              Revisit the role <Icon name="arrow-right-up-line" />
            </Link>
          </div>
          <div className="
            talent-application-tip py-[25px] px-[8px] [&_>_span]:text-[45px] [&_>_span]:text-[#b4c28f]
            [&_>_span]:leading-[1] [&_h3]:text-[18px] [&_h3]:leading-[1.3] [&_h3]:font-[450] [&_h3]:tracking-[-0.4px]
            [&_h3]:mt-[15px] [&_p]:text-[10px] [&_p]:leading-[1.9] [&_p]:text-[#7d8d6a] [&_p]:mt-[12px] [&_ul]:p-0
            [&_ul]:list-none [&_ul]:[margin:16px_0_0] [&_li]:text-[9px] [&_li]:flex [&_li]:items-center
            [&_li]:gap-[8px] [&_li]:text-[#7c8d68] [&_li]:mt-[11px] [&_li_>_i]:text-[13px] [&_li_>_i]:text-[#9aaa7e]
            max-[800px]:[&_h3]:text-[17px] max-[800px]:[&_p]:text-[9px] max-[800px]:[&_li]:text-[8px]
            max-[560px]:hidden
          ">
            <span>✳</span>
            <h3>A thoughtful introduction goes a long way.</h3>
            <p>
              Be yourself. Share the work that matters to you. A real story says
              more than the perfect words.
            </p>
            <ul>
              <li>
                <Icon name="check-line" /> Keep your links accessible
              </li>
              <li>
                <Icon name="check-line" /> Double-check your email
              </li>
              <li>
                <Icon name="check-line" /> Let a little personality through
              </li>
            </ul>
          </div>
          <p className="
            talent-application-trust block text-[8px] text-center leading-[1.9] text-[#82926d] py-[18px] px-[8px]
            [border-top:1px_solid_#e1e7d3] [&_>_i]:block [&_>_i]:text-[25px] [&_>_i]:text-[#a3b284] [&_>_i]:mb-[9px]
            max-[560px]:hidden
          ">
            <Icon name="fingerprint-line" /> Your next step, on your terms.
            <br />
            Track your application with a private reference link.
          </p>
        </aside>
      </div>
    </div>
  );
}
