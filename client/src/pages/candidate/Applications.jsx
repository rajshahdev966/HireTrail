import { Link, useParams, useSearchParams } from "react-router";
import { Icon, Button, EmptyState } from "../../components/ui";
import {
  careerJobs,
  applicationExample,
  candidateProfile,
} from "../../data/careers";
import {
  CompanyMark,
  ApplicationField,
  FormSection,
  ApplicationProgress,
  PreviewNotice,
  StatusTimeline,
  ReferenceCard,
} from "../../components/candidate/CandidateUI";

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

export function ApplicationSuccess() {
  const [params] = useSearchParams();
  const job =
    careerJobs.find((j) => j.id === params.get("job")) || careerJobs[0];
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-success pt-[55px] pb-[65px] max-w-[820px] text-center
      [&_h1]:text-[49px] [&_h1]:tracking-[-1.8px] [&_h1]:mt-[18px] max-[560px]:pt-[40px] max-[560px]:pb-[40px]
      max-[560px]:[&_h1]:text-[43px]
    ">
      <span className="
        talent-success-mark grid place-items-center w-[64px] h-[64px] bg-[#eaf0da] [border:1px_solid_#d9e4c2]
        rounded-[50%] text-[#9aaa7e] [margin:0_auto_25px] relative [&_>_i:first-child]:text-[29px]
        [&_>_i:last-child]:absolute [&_>_i:last-child]:text-[36px] [&_>_i:last-child]:right-[-27px]
        [&_>_i:last-child]:top-[-17px] [&_>_i:last-child]:text-[#b0a0c2] [&_>_i:last-child]:not-italic
      ">
        <Icon name="check-line" />
        <i>✳</i>
      </span>
      <span className="
        talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
        max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
      ">EXAMPLE APPLICATION CONFIRMATION</span>
      <h1>
        A little hello.
        <br />
        <em>A new possibility.</em>
      </h1>
      <p className="talent-success-intro text-[11px] text-[#7d8b6e] leading-[1.9] mt-[20px] max-[560px]:text-[10px]">
        Here’s how your confirmation will look after applying.
        <br />
        Your next chapter starts with a thoughtful first step.
      </p>
      <div className="
        talent-success-card [margin:30px_auto_20px] bg-[#fff] [border:1px_solid_#e0e7d2] rounded-[10px] p-[26px]
        text-left max-[560px]:p-[20px] max-[560px]:mt-[25px]
      ">
        <div className="
          talent-success-job flex items-center gap-[12px] pb-[22px] [border-bottom:1px_solid_#e9eddf]
          [&_h2]:text-[17px] [&_h2]:font-medium [&_h2]:tracking-[-0.5px] [&_p]:text-[9px] [&_p]:text-[#80916b]
          [&_p]:mt-[5px] max-[560px]:flex-wrap max-[560px]:gap-[10px] max-[560px]:pb-[18px]
          max-[560px]:[&_h2]:text-[16px] max-[560px]:[&_p]:text-[8px]
        ">
          <CompanyMark company={job.company} />
          <div>
            <h2>{job.title}</h2>
            <p>
              {job.company.name} · {job.location} · {job.type}
            </p>
          </div>
          <span className="
            talent-status-pill inline-flex items-center gap-[6px] text-[9px] rounded-[5px] py-[5px] px-[9px]
            bg-[#efe9f6] text-[#89709f] whitespace-nowrap [&.applied]:bg-[#edf1e4] [&.applied]:text-[#7d925e]
            [&_>_span]:h-[4px] [&_>_span]:w-[4px] [&_>_span]:bg-[currentColor] [&_>_span]:rounded-[50%] applied
          ">Applied</span>
        </div>
        <ReferenceCard />
        <div className="
          talent-success-next pt-[24px] [&_h3]:text-[17px] [&_h3]:font-medium [&_h3]:tracking-[-0.3px]
          [&_ol]:list-none [&_ol]:p-0 [&_ol]:my-[20px] [&_ol]:mx-0 [&_li]:flex [&_li]:gap-[13px] [&_li]:mt-[18px]
          [&_li_>_span]:h-[24px] [&_li_>_span]:w-[24px] [&_li_>_span]:rounded-[50%]
          [&_li_>_span]:[border:1px_solid_#e0d8eb] [&_li_>_span]:bg-[#f5f0f8] [&_li_>_span]:text-[#9b81ad]
          [&_li_>_span]:grid [&_li_>_span]:place-items-center [&_li_>_span]:text-[8px] [&_li_>_span]:shrink-0
          [&_strong]:text-[11px] [&_strong]:font-semibold [&_strong]:text-[#74865d] [&_p]:text-[10px]
          [&_p]:text-[#7e9169] [&_p]:leading-[1.9] [&_p]:mt-[4px] max-[560px]:[&_h3]:text-[18px]
          max-[560px]:[&_li]:gap-[10px] max-[560px]:[&_li]:mt-[17px] max-[560px]:[&_p]:text-[10px]
          max-[560px]:[&_p]:leading-[1.9]
        ">
          <h3>What happens next?</h3>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>A little reassurance.</strong>
                <p>
                  In the connected experience, a confirmation and private
                  tracking link will arrive by email.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>A thoughtful review.</strong>
                <p>
                  The team will take a closer look at your experience and get in
                  touch with next steps.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Stay on the trail.</strong>
                <p>
                  Keep your reference safe and use your tracking link to follow
                  your progress.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="
          talent-success-actions max-[560px]:[&_.btn]:text-[10px] max-[560px]:[&_.btn]:w-full flex gap-[9px]
          [border-top:1px_solid_#e8eddd] pt-[22px] mt-[25px] [&_.primary]:flex-1 max-[560px]:flex-col
        ">
          <Button to={`/careers/track?job=${job.id}`} variant="primary">
            Preview application tracking <Icon name="arrow-right-line" />
          </Button>
          <Button to="/careers/jobs">Keep exploring</Button>
        </div>
      </div>
      <PreviewNotice>
        This is static confirmation content. No application was submitted and no
        email has been sent. The reference shown is illustrative.
      </PreviewNotice>
    </div>
  );
}

export function TrackApplication() {
  const [params] = useSearchParams();
  const job =
    careerJobs.find((j) => j.id === params.get("job")) || careerJobs[0];
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-track pb-[60px]
    ">
      <div className="
        talent-page-heading [padding:50px_0_30px] [&_h1]:mt-[15px] [&_h1]:text-[44px] [&_h1]:tracking-[-1.7px]
        [&_p]:text-[#777f6b] [&_p]:text-[12px] [&_p]:mt-[16px] max-[560px]:pt-[35px] max-[560px]:pb-[25px]
        max-[560px]:[&_h1]:text-[37px] max-[560px]:[&_h1]:tracking-[-1.5px] max-[560px]:[&_h1]:leading-[1.15]
        max-[560px]:[&_p]:text-[11px] max-[560px]:[&_p]:leading-[1.9] max-[560px]:[&_p]:mt-[13px]
      ">
        <span className="
          talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
          max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
        ">A LITTLE CLARITY ALONG THE WAY</span>
        <h1>
          Stay on <em>your trail.</em>
        </h1>
        <p>
          Every next chapter has a few steps. Here’s a clearer view of yours.
        </p>
      </div>
      <section
        className="
          talent-reference-search flex items-center gap-[15px] bg-[white] [border:1px_solid_#dfe6d2] rounded-[8px]
          p-[22px] [margin:4px_0_15px] [&_>_div]:flex [&_>_div]:items-center [&_>_div]:gap-[12px] [&_>_div]:flex-1
          [&_>_div_>_i]:text-[26px] [&_>_div_>_i]:text-[#9a83ae] [&_strong]:block [&_strong]:text-[12px]
          [&_strong]:font-[550] [&_strong]:text-[#72865c] [&_small]:block [&_small]:text-[8px]
          [&_small]:text-[#81966a] [&_small]:mt-[4px] max-[800px]:flex-wrap max-[800px]:p-[20px]
          max-[800px]:gap-[12px] max-[800px]:[&_>_div]:[flex:0_0_100%] max-[560px]:p-[18px] max-[560px]:mt-0
          max-[560px]:gap-[14px_8px] max-[560px]:[&_>_div]:gap-[9px] max-[560px]:[&_strong]:text-[12px]
          max-[560px]:[&_small]:text-[7px] max-[560px]:[&_small]:leading-[1.8]
        "
        aria-label="Find an application"
      >
        <div>
          <Icon name="fingerprint-line" />
          <span>
            <strong>Your application reference</strong>
            <small>
              Find it in your confirmation email or private tracking link.
            </small>
          </span>
        </div>
        <label className="
          talent-reference-input flex-1 min-w-[0] [&_input]:[border:1px_solid_#dce5ce] [&_input]:bg-[#fdfefa]
          [&_input]:rounded-[5px] [&_input]:p-[11px] [&_input]:w-full [&_input]:text-[10px] [&_input]:text-[#7c9065]
          [&_input]:min-h-[42px] [&_input::placeholder]:text-[#8e9f7a] max-[560px]:basis-[100%]
          max-[560px]:[&_input]:text-[11px]
        ">
          <span className="sr-only">Application reference</span>
          <input placeholder="e.g. HT-26-8F3A-92CD" autoComplete="off" />
        </label>
        <Button variant="primary">
          View status <Icon name="arrow-right-line" />
        </Button>
      </section>
      <PreviewNotice>
        Sample application below. Reference lookup is a design preview; entering
        a reference does not retrieve information. A connected version will use
        a secure, private tracking link.
      </PreviewNotice>
      <section className="
        talent-tracking-card mt-[30px] [border:1px_solid_#dde6cd] bg-[#fff] rounded-[9px] p-[27px]
        [&_>_header]:flex [&_>_header]:items-center [&_>_header]:justify-between [&_>_header]:gap-[15px]
        max-[800px]:p-[23px] max-[560px]:py-[21px] max-[560px]:px-[18px] max-[560px]:mt-[23px]
        max-[560px]:[&_>_header]:items-start max-[560px]:[&_>_header]:flex-wrap
        max-[560px]:[&_>_header]:gap-[14px]
      ">
        <header>
          <div className="
            talent-tracking-identity [&_.talent-kicker]:text-[7px] [&_.talent-kicker]:tracking-[1.1px]
            max-[800px]:[&_.talent-kicker]:text-[6px] max-[560px]:[&_.talent-kicker]:text-[6px]
            max-[560px]:[&_.talent-kicker]:tracking-[0.8px] flex gap-[14px] items-center [&_h2]:text-[24px]
            [&_h2]:tracking-[-0.7px] [&_h2]:font-medium [&_h2]:mt-[5px] [&_p]:text-[10px] [&_p]:text-[#81976b]
            [&_p]:mt-[6px] max-[800px]:[&_h2]:text-[21px] max-[560px]:gap-[12px] max-[560px]:[&_h2]:text-[22px]
            max-[560px]:[&_h2]:leading-[1.2] max-[560px]:[&_h2]:mt-[7px] max-[560px]:[&_p]:text-[9px]
          ">
            <CompanyMark company={job.company} />
            <div>
              <span className="
                talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
                max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
              ">
                SAMPLE APPLICATION · {applicationExample.reference}
              </span>
              <h2>{job.title}</h2>
              <p>
                {job.company.name} · {job.location}
              </p>
            </div>
          </div>
          <span className="
            talent-status-pill inline-flex items-center gap-[6px] text-[9px] rounded-[5px] py-[5px] px-[9px]
            bg-[#efe9f6] text-[#89709f] whitespace-nowrap [&.applied]:bg-[#edf1e4] [&.applied]:text-[#7d925e]
            [&_>_span]:h-[4px] [&_>_span]:w-[4px] [&_>_span]:bg-[currentColor] [&_>_span]:rounded-[50%] interview flex
            gap-[10px] py-[15px] px-0 [border-bottom:1px_solid_#f2f2f5] [&:last-child]:[border-bottom:none]
            min-[1500px]:py-[20px] min-[1500px]:px-0
          ">
            <span /> Interview
          </span>
        </header>
        <div className="
          talent-tracking-dates flex gap-[30px] text-[9px] text-[#81976a] mt-[23px] pt-[17px]
          [border-top:1px_solid_#e6eddd] [&_>_span]:flex [&_>_span]:items-center [&_>_span]:gap-[6px]
          [&_i]:text-[13px] max-[560px]:flex-col max-[560px]:gap-[10px] max-[560px]:text-[8px] max-[560px]:mt-[18px]
        ">
          <span>
            <Icon name="calendar-line" /> Submitted{" "}
            {applicationExample.submitted}
          </span>
          <span>
            <Icon name="refresh-line" /> Last update: October 22, 2026
          </span>
        </div>
        <StatusTimeline />
        <p className="
          talent-outcome-note text-[8px] text-[#859d6f] text-center mt-[18px] max-[560px]:text-[7px]
          max-[560px]:leading-[1.8] max-[560px]:mt-[16px]
        ">
          Final outcome: hired or rejected. The team will let you know when
          there’s an update.
        </p>
        <div className="
          talent-current-update [&_.talent-kicker]:text-[7px] [&_.talent-kicker]:text-[#9781a7]
          max-[560px]:[&_.talent-kicker]:text-[6px] flex gap-[15px] bg-[#f1edf7] [border:1px_solid_#e2d7ee]
          rounded-[7px] mt-[25px] p-[23px] items-center [&_h3]:text-[19px] [&_h3]:font-[450]
          [&_h3]:tracking-[-0.5px] [&_h3]:mt-[5px] [&_h3]:text-[#897097] [&_p]:text-[10px] [&_p]:leading-[1.9]
          [&_p]:text-[#9279a0] [&_p]:mt-[6px] [&_p]:max-w-[640px] max-[560px]:py-[17px] max-[560px]:px-[14px]
          max-[560px]:gap-[11px] max-[560px]:items-start max-[560px]:mt-[20px] max-[560px]:[&_h3]:text-[18px]
          max-[560px]:[&_h3]:leading-[1.2] max-[560px]:[&_h3]:mt-[7px] max-[560px]:[&_p]:text-[9px]
          max-[560px]:[&_p]:leading-[1.9] max-[560px]:[&_p]:mt-[10px]
        ">
          <span className="
            talent-update-icon h-[40px] w-[40px] bg-[#e8dff1] [border:1px_solid_#d7c4e6] rounded-[9px] text-[#a380bb]
            grid place-items-center shrink-0 [&_i]:text-[20px] max-[560px]:h-[29px] max-[560px]:w-[29px]
            max-[560px]:rounded-[7px] max-[560px]:mt-[3px] max-[560px]:[&_i]:text-[16px]
          ">
            <Icon name="chat-voice-line" />
          </span>
          <div>
            <span className="
              talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
              max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
            ">YOUR CURRENT STAGE</span>
            <h3>Time for a conversation.</h3>
            <p>
              You’ve been invited to meet the team. Check your email for
              interview details and scheduling instructions.
            </p>
          </div>
          <span className="talent-update-spark text-[49px] text-[#c2cea5] ml-auto pl-[15px] max-[560px]:hidden">✳</span>
        </div>
      </section>
      <div className="
        talent-track-bottom grid grid-cols-[1.6fr_1fr] gap-[35px] mt-[35px] max-[1100px]:gap-[25px]
        max-[800px]:grid-cols-[1.5fr_1fr] max-[800px]:gap-[23px] max-[560px]:grid-cols-[1fr] max-[560px]:mt-[28px]
        max-[560px]:gap-[26px]
      ">
        <section className="
          talent-updates [&_.talent-section-heading_h2]:text-[23px] [&_.talent-section-heading_>_small]:text-[8px]
          [&_.talent-section-heading_>_small]:text-[#879d71] max-[800px]:[&_.talent-section-heading]:flex-col
          max-[800px]:[&_.talent-section-heading]:items-start max-[800px]:[&_.talent-section-heading]:gap-[10px]
          max-[560px]:[&_.talent-section-heading_>_small]:text-[6px]
          max-[560px]:[&_.talent-section-heading_>_small]:max-w-[70px]
          max-[560px]:[&_.talent-section-heading_h2]:text-[23px] [&_>_article]:py-[24px] [&_>_article]:px-0
          [&_>_article]:[border-bottom:1px_solid_#e0e8d3] [&_>_article]:flex [&_>_article]:items-start
          [&_>_article]:gap-[15px] [&_time]:text-[8px] [&_time]:text-[#7d9b63] [&_h3]:text-[14px] [&_h3]:font-medium
          [&_h3]:tracking-[-0.3px] [&_h3]:mt-[6px] [&_p]:text-[10px] [&_p]:text-[#789b5b] [&_p]:leading-[1.9]
          [&_p]:mt-[6px] [&_>_article_>_i]:ml-auto [&_>_article_>_i]:text-[#a4bd87] [&_>_article_>_i]:text-[16px]
          [&_>_article_>_i]:mt-[4px] max-[560px]:[&_>_article]:gap-[11px] max-[560px]:[&_>_article]:py-[22px]
          max-[560px]:[&_>_article]:px-0 max-[560px]:[&_h3]:text-[15px] max-[560px]:[&_p]:text-[10px]
        ">
          <div className="
            talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
            [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
            [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
            max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
            max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
            max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
          ">
            <div>
              <span className="
                talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
                max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
              ">ONE STEP AT A TIME</span>
              <h2>Your application story.</h2>
            </div>
            <small>Candidate-visible updates</small>
          </div>
          {applicationExample.updates.map((u, i) => (
            <article key={u.title}>
              <span className="
                talent-update-number w-[26px] h-[26px] [border:1px_solid_#dce7cd] rounded-[50%] grid place-items-center
                text-[8px] text-[#8ca970] shrink-0
              ">0{i + 1}</span>
              <div>
                <time>{u.date}</time>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
              <Icon name="checkbox-circle-line" />
            </article>
          ))}
        </section>
        <aside className="
          talent-tracking-help bg-[#f0f2e8] [border:1px_solid_#e0e8d1] rounded-[8px] p-[25px] self-start
          [&_>_i]:text-[25px] [&_>_i]:text-[#a0b582] [&_>_i]:block [&_>_i]:mb-[18px] [&_h3]:text-[17px]
          [&_h3]:font-[450] [&_h3]:tracking-[-0.3px] [&_p]:text-[10px] [&_p]:leading-[1.9] [&_p]:text-[#7d9c61]
          [&_p]:mt-[9px] [&_>_div]:h-[1px] [&_>_div]:bg-[#dce7cd] [&_>_div]:my-[23px] [&_>_div]:mx-0 [&_>_a]:flex
          [&_>_a]:justify-between [&_>_a]:items-center [&_>_a]:text-[9px] [&_>_a]:text-[#7a985e] [&_>_a]:mt-[23px]
          [&_>_a_>_i]:text-[14px] max-[800px]:p-[20px] max-[800px]:[&_h3]:text-[15px] max-[560px]:p-[23px]
          max-[560px]:[&_h3]:text-[18px] max-[560px]:[&_p]:text-[10px]
        ">
          <Icon name="shield-check-line" />
          <h3>A little peace of mind.</h3>
          <p>
            Your tracking link is intended just for you. Keep it private and
            share it only with people you trust.
          </p>
          <div />
          <h3>Waiting for the next step?</h3>
          <p>
            Some good things take a little time. The hiring team will contact
            you by email when there’s news.
          </p>
          <Link to={`/careers/jobs/${job.id}`}>
            Revisit the opportunity <Icon name="arrow-right-up-line" />
          </Link>
        </aside>
      </div>
    </div>
  );
}

export function CandidateProfile() {
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-profile pt-[30px] pb-[55px] max-[560px]:pt-[23px]
      max-[560px]:pb-[30px]
    ">
      <PreviewNotice>
        Future-ready profile preview. Applying never requires an account.
        Information below is mock data; editing and account functionality are
        not connected.
      </PreviewNotice>
      <header className="
        talent-profile-hero max-[800px]:[&_.talent-kicker]:text-[8px] max-[560px]:[&_.talent-kicker]:text-[6px]
        max-[560px]:[&_.talent-kicker]:tracking-[1px] flex gap-[23px] items-center py-[35px] px-0
        [border-bottom:1px_solid_#e0e7d5] [&_h1]:text-[35px] [&_h1]:tracking-[-1px] [&_h1]:my-[5px] [&_h1]:mx-0
        [&_p]:text-[12px] [&_p]:text-[#819e68] [&_>_div_>_span:last-child]:flex
        [&_>_div_>_span:last-child]:gap-[6px] [&_>_div_>_span:last-child]:items-center
        [&_>_div_>_span:last-child]:text-[9px] [&_>_div_>_span:last-child]:text-[#7d9b64]
        [&_>_div_>_span:last-child]:mt-[10px] [&_>_div_>_span_>_i]:text-[12px] max-[800px]:[&_h1]:text-[31px]
        max-[800px]:[&_p]:text-[10px] max-[560px]:py-[28px] max-[560px]:px-0 max-[560px]:gap-[17px]
        max-[560px]:items-start max-[560px]:flex-wrap max-[560px]:[&_>_div]:flex-1 max-[560px]:[&_h1]:text-[30px]
        max-[560px]:[&_h1]:tracking-[-0.8px] max-[560px]:[&_p]:text-[10px]
        max-[560px]:[&_>_div_>_span:last-child]:text-[8px]
      ">
        <span className="
          talent-profile-avatar relative grid place-items-center h-[84px] w-[84px] bg-[#e6dfed] text-[#9a7da9]
          [border:1px_solid_#d7c7e1] rounded-[50%] text-[24px] [font-family:'DM_Sans_Variable',_sans-serif] shrink-0
          [&_>_span]:absolute [&_>_span]:right-[-5px] [&_>_span]:bottom-[-5px] [&_>_span]:bg-[#dfe8cd]
          [&_>_span]:[border:3px_solid_#fafaf6] [&_>_span]:rounded-[50%] [&_>_span]:h-[32px] [&_>_span]:w-[32px]
          [&_>_span]:grid [&_>_span]:place-items-center [&_>_span]:text-[#a2b880] [&_>_span]:text-[23px]
          [&_>_span]:leading-[1] max-[800px]:h-[70px] max-[800px]:w-[70px] max-[800px]:text-[22px]
          max-[560px]:h-[65px] max-[560px]:w-[65px] max-[560px]:text-[22px] max-[560px]:mt-[5px]
          max-[560px]:[&_>_span]:h-[28px] max-[560px]:[&_>_span]:w-[28px] max-[560px]:[&_>_span]:text-[20px]
        ">
          OR<span>✳</span>
        </span>
        <div>
          <span className="
            talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
            max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
          ">YOUR STORY, IN ONE PLACE</span>
          <h1>{candidateProfile.name}</h1>
          <p>{candidateProfile.title}</p>
          <span>
            <Icon name="map-pin-line" />
            {candidateProfile.location}
          </span>
        </div>
        <Button icon="edit-line">Edit profile</Button>
      </header>
      <div className="
        talent-profile-layout grid grid-cols-[1.7fr_1fr] gap-[25px] mt-[28px] max-[1100px]:grid-cols-[1.5fr_1fr]
        max-[800px]:grid-cols-[1.3fr_1fr] max-[800px]:gap-[18px] max-[560px]:grid-cols-[1fr] max-[560px]:gap-[0]
        max-[560px]:mt-[23px]
      ">
        <div>
          <section className="
            talent-profile-section [&_.talent-section-heading_h2]:m-0
            max-[1100px]:[&_.talent-section-heading]:flex-wrap max-[1100px]:[&_.talent-section-heading]:gap-[9px]
            max-[560px]:[&_.talent-section-heading]:flex-col max-[560px]:[&_.talent-section-heading]:items-start
            max-[560px]:[&_.talent-section-heading]:gap-[8px] p-[25px] [border:1px_solid_#e0e8d3] bg-[#fff]
            rounded-[8px] mb-[23px] [&_h2]:text-[22px] [&_h2]:font-[450] [&_h2]:tracking-[-0.6px] [&_h2]:mb-[17px]
            [&_>_p]:text-[12px] [&_>_p]:leading-[1.9] [&_>_p]:text-[#7c9c62] [&_>_h3]:text-[13px] [&_>_h3]:font-medium
            [&_>_h3]:mt-[23px] [&_dl]:m-0 [&_dl_>_div]:mb-[18px] [&_dt]:text-[9px] [&_dt]:text-[#8aa673]
            [&_dd]:text-[11px] [&_dd]:text-[#7c9c62] [&_dd]:mt-[5px] [&_dd]:[overflow-wrap:anywhere]
            max-[1100px]:p-[21px] max-[800px]:p-[20px] max-[800px]:[&_h2]:text-[20px] max-[800px]:[&_>_p]:text-[11px]
            max-[560px]:py-[22px] max-[560px]:px-[19px] max-[560px]:mb-[20px] max-[560px]:[&_h2]:text-[23px]
            max-[560px]:[&_>_p]:text-[11px] max-[560px]:[&_dd]:text-[11px]
          ">
            <h2>A little about me.</h2>
            <p>{candidateProfile.about}</p>
            <h3>Skills & strengths</h3>
            <div className="
              talent-tags flex flex-wrap gap-[5px] mt-[20px] [&_>_span]:text-[8px] [&_>_span]:text-[#77816a]
              [&_>_span]:bg-[#f5f6ef] [&_>_span]:[border:1px_solid_#eaecdf] [&_>_span]:rounded-[4px] [&_>_span]:py-[4px]
              [&_>_span]:px-[7px] profile-tags mt-[13px] [&_>_span]:text-[9px] [&_>_span]:py-[6px] [&_>_span]:px-[9px]
              [&_>_span]:text-[#7d9a63] [&_>_span]:bg-[#f1f6e9] [&_>_span]:border-[#e0eacf]
            ">
              {candidateProfile.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </section>
          <section className="
            talent-profile-section [&_.talent-section-heading_h2]:m-0
            max-[1100px]:[&_.talent-section-heading]:flex-wrap max-[1100px]:[&_.talent-section-heading]:gap-[9px]
            max-[560px]:[&_.talent-section-heading]:flex-col max-[560px]:[&_.talent-section-heading]:items-start
            max-[560px]:[&_.talent-section-heading]:gap-[8px] p-[25px] [border:1px_solid_#e0e8d3] bg-[#fff]
            rounded-[8px] mb-[23px] [&_h2]:text-[22px] [&_h2]:font-[450] [&_h2]:tracking-[-0.6px] [&_h2]:mb-[17px]
            [&_>_p]:text-[12px] [&_>_p]:leading-[1.9] [&_>_p]:text-[#7c9c62] [&_>_h3]:text-[13px] [&_>_h3]:font-medium
            [&_>_h3]:mt-[23px] [&_dl]:m-0 [&_dl_>_div]:mb-[18px] [&_dt]:text-[9px] [&_dt]:text-[#8aa673]
            [&_dd]:text-[11px] [&_dd]:text-[#7c9c62] [&_dd]:mt-[5px] [&_dd]:[overflow-wrap:anywhere]
            max-[1100px]:p-[21px] max-[800px]:p-[20px] max-[800px]:[&_h2]:text-[20px] max-[800px]:[&_>_p]:text-[11px]
            max-[560px]:py-[22px] max-[560px]:px-[19px] max-[560px]:mb-[20px] max-[560px]:[&_h2]:text-[23px]
            max-[560px]:[&_>_p]:text-[11px] max-[560px]:[&_dd]:text-[11px]
          ">
            <h2>The experience I bring.</h2>
            {candidateProfile.experience.map((e) => (
              <div className="
                talent-profile-experience flex gap-[14px] py-[20px] px-0 [border-top:1px_solid_#e6eddd]
                [&:last-child]:pb-0 [&_>_span]:h-[35px] [&_>_span]:w-[35px] [&_>_span]:grid [&_>_span]:place-items-center
                [&_>_span]:rounded-[8px] [&_>_span]:bg-[#f0e8f6] [&_>_span]:[border:1px_solid_#dfcdea]
                [&_>_span]:text-[#b18ac6] [&_>_span]:text-[20px] [&_>_span]:shrink-0 [&_h3]:text-[14px] [&_h3]:font-medium
                [&_h3]:tracking-[-0.3px] [&_strong]:text-[10px] [&_strong]:text-[#7c9b61] [&_strong]:font-medium
                [&_strong]:block [&_strong]:mt-[5px] [&_small]:text-[8px] [&_small]:text-[#849f6d] [&_small]:block
                [&_small]:mt-[5px] [&_p]:text-[10px] [&_p]:text-[#7d9f60] [&_p]:leading-[1.9] [&_p]:mt-[10px]
              " key={e.company}>
                <span>{e.company.charAt(0)}</span>
                <div>
                  <h3>{e.title}</h3>
                  <strong>{e.company}</strong>
                  <small>{e.dates}</small>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="
            talent-profile-section [&_.talent-section-heading_h2]:m-0
            max-[1100px]:[&_.talent-section-heading]:flex-wrap max-[1100px]:[&_.talent-section-heading]:gap-[9px]
            max-[560px]:[&_.talent-section-heading]:flex-col max-[560px]:[&_.talent-section-heading]:items-start
            max-[560px]:[&_.talent-section-heading]:gap-[8px] p-[25px] [border:1px_solid_#e0e8d3] bg-[#fff]
            rounded-[8px] mb-[23px] [&_h2]:text-[22px] [&_h2]:font-[450] [&_h2]:tracking-[-0.6px] [&_h2]:mb-[17px]
            [&_>_p]:text-[12px] [&_>_p]:leading-[1.9] [&_>_p]:text-[#7c9c62] [&_>_h3]:text-[13px] [&_>_h3]:font-medium
            [&_>_h3]:mt-[23px] [&_dl]:m-0 [&_dl_>_div]:mb-[18px] [&_dt]:text-[9px] [&_dt]:text-[#8aa673]
            [&_dd]:text-[11px] [&_dd]:text-[#7c9c62] [&_dd]:mt-[5px] [&_dd]:[overflow-wrap:anywhere]
            max-[1100px]:p-[21px] max-[800px]:p-[20px] max-[800px]:[&_h2]:text-[20px] max-[800px]:[&_>_p]:text-[11px]
            max-[560px]:py-[22px] max-[560px]:px-[19px] max-[560px]:mb-[20px] max-[560px]:[&_h2]:text-[23px]
            max-[560px]:[&_>_p]:text-[11px] max-[560px]:[&_dd]:text-[11px]
          ">
            <div className="
              talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
              [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
              [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
              max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
              max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
              max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
            ">
              <h2>My next possibilities.</h2>
              <span className="
                talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
                max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
              ">APPLICATION HISTORY</span>
            </div>
            <div className="
              talent-profile-applications max-[1100px]:[&_.talent-company-mark]:w-[30px]
              max-[1100px]:[&_.talent-company-mark]:h-[30px] max-[1100px]:[&_.talent-company-mark]:text-[21px]
              [&_.talent-status-pill]:ml-auto [&_.talent-status-pill]:text-[8px]
              max-[800px]:[&_.talent-status-pill]:ml-[40px] max-[560px]:[&_.talent-status-pill]:ml-auto
              [&_>_article]:flex [&_>_article]:items-center [&_>_article]:gap-[11px]
              [&_>_article]:[border-top:1px_solid_#e5eedb] [&_>_article]:py-[20px] [&_>_article]:px-0
              [&_>_article:last-child]:pb-0 [&_h3]:text-[12px] [&_h3]:font-[550] [&_p]:text-[9px] [&_p]:text-[#7c9e60]
              [&_p]:mt-[5px] [&_small]:text-[8px] [&_small]:text-[#839e6d] [&_small]:mt-[4px] [&_small]:block
              [&_>_article_>_a_>_i]:text-[14px] [&_>_article_>_a_>_i]:text-[#a78cbb]
              max-[1100px]:[&_>_article]:flex-wrap max-[800px]:[&_>_article]:gap-[10px]
              max-[560px]:[&_>_article]:gap-[11px] max-[560px]:[&_h3]:text-[12px] max-[560px]:[&_p]:text-[8px]
              max-[560px]:[&_small]:text-[7px]
            ">
              {candidateProfile.applications.map((a) => {
                const j = careerJobs.find((j) => j.id === a.jobId);
                return (
                  <article key={a.reference}>
                    <CompanyMark company={j.company} />
                    <div>
                      <Link to={`/careers/jobs/${j.id}`}>
                        <h3>{j.title}</h3>
                      </Link>
                      <p>
                        {j.company.name} · Applied {a.date}
                      </p>
                      <small>{a.reference}</small>
                    </div>
                    <span
                      className={`
                        talent-status-pill inline-flex items-center gap-[6px] text-[9px] rounded-[5px] py-[5px] px-[9px]
                        bg-[#efe9f6] text-[#89709f] whitespace-nowrap [&.applied]:bg-[#edf1e4] [&.applied]:text-[#7d925e]
                        [&_>_span]:h-[4px] [&_>_span]:w-[4px] [&_>_span]:bg-[currentColor] [&_>_span]:rounded-[50%]
                       ${a.stage.toLowerCase()}`}
                    >
                      {a.stage}
                    </span>
                    {a.stage === "Interview" ? (
                      <Link
                        to="/careers/track"
                        aria-label={`Preview tracking for ${j.title}`}
                      >
                        <Icon name="arrow-right-up-line" />
                      </Link>
                    ) : (
                      <span className="talent-history-preview text-[7px] text-[#9a85ac]">Preview</span>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </div>
        <aside>
          <section className="
            talent-profile-section [&_.talent-section-heading_h2]:m-0
            max-[1100px]:[&_.talent-section-heading]:flex-wrap max-[1100px]:[&_.talent-section-heading]:gap-[9px]
            max-[560px]:[&_.talent-section-heading]:flex-col max-[560px]:[&_.talent-section-heading]:items-start
            max-[560px]:[&_.talent-section-heading]:gap-[8px] p-[25px] [border:1px_solid_#e0e8d3] bg-[#fff]
            rounded-[8px] mb-[23px] [&_h2]:text-[22px] [&_h2]:font-[450] [&_h2]:tracking-[-0.6px] [&_h2]:mb-[17px]
            [&_>_p]:text-[12px] [&_>_p]:leading-[1.9] [&_>_p]:text-[#7c9c62] [&_>_h3]:text-[13px] [&_>_h3]:font-medium
            [&_>_h3]:mt-[23px] [&_dl]:m-0 [&_dl_>_div]:mb-[18px] [&_dt]:text-[9px] [&_dt]:text-[#8aa673]
            [&_dd]:text-[11px] [&_dd]:text-[#7c9c62] [&_dd]:mt-[5px] [&_dd]:[overflow-wrap:anywhere]
            max-[1100px]:p-[21px] max-[800px]:p-[20px] max-[800px]:[&_h2]:text-[20px] max-[800px]:[&_>_p]:text-[11px]
            max-[560px]:py-[22px] max-[560px]:px-[19px] max-[560px]:mb-[20px] max-[560px]:[&_h2]:text-[23px]
            max-[560px]:[&_>_p]:text-[11px] max-[560px]:[&_dd]:text-[11px]
          ">
            <h2>The essentials.</h2>
            <dl>
              <div>
                <dt>Email address</dt>
                <dd>{candidateProfile.email}</dd>
              </div>
              <div>
                <dt>Phone number</dt>
                <dd>{candidateProfile.phone}</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{candidateProfile.location}</dd>
              </div>
            </dl>
            <div className="
              talent-profile-document [border-top:1px_solid_#e5edda] pt-[18px] mt-[18px] flex items-center gap-[10px]
              [&_>_i]:text-[22px] [&_>_i]:text-[#a3ba88] [&_strong]:text-[11px] [&_strong]:font-[550]
              [&_strong]:text-[#7c9c61] [&_strong]:block [&_small]:text-[8px] [&_small]:text-[#8aa875] [&_small]:block
              [&_small]:mt-[5px] max-[800px]:flex-wrap max-[800px]:[&_small]:text-[7px] max-[560px]:flex-nowrap
              max-[560px]:[&_small]:text-[8px]
            ">
              <Icon name="global-line" />
              <span>
                <strong>Portfolio</strong>
                <small>olivia.design · example link</small>
              </span>
              <Button
                icon="external-link-line"
                aria-label="Portfolio link preview"
              />
            </div>
            <div className="
              talent-profile-document [border-top:1px_solid_#e5edda] pt-[18px] mt-[18px] flex items-center gap-[10px]
              [&_>_i]:text-[22px] [&_>_i]:text-[#a3ba88] [&_strong]:text-[11px] [&_strong]:font-[550]
              [&_strong]:text-[#7c9c61] [&_strong]:block [&_small]:text-[8px] [&_small]:text-[#8aa875] [&_small]:block
              [&_small]:mt-[5px] max-[800px]:flex-wrap max-[800px]:[&_small]:text-[7px] max-[560px]:flex-nowrap
              max-[560px]:[&_small]:text-[8px]
            ">
              <Icon name="file-pdf-2-line" />
              <span>
                <strong>Resume</strong>
                <small>Olivia_Rhye_Resume.pdf · preview</small>
              </span>
              <Button
                icon="download-line"
                aria-label="Resume download preview"
              />
            </div>
          </section>
          <div className="
            talent-profile-note p-[24px] bg-[#eef2e3] [border:1px_solid_#dfe8cf] rounded-[8px] [&_>_span]:block
            [&_>_span]:text-[46px] [&_>_span]:leading-[1] [&_>_span]:text-[#acc38c] [&_h3]:text-[20px]
            [&_h3]:font-[450] [&_h3]:tracking-[-0.5px] [&_h3]:mt-[17px] [&_p]:text-[11px] [&_p]:leading-[1.9]
            [&_p]:text-[#7e9f60] [&_p]:mt-[12px] max-[560px]:p-[23px] max-[560px]:[&_h3]:text-[23px]
            max-[560px]:[&_p]:text-[11px]
          ">
            <span>✳</span>
            <h3>More than a list of skills.</h3>
            <p>
              The path you’ve taken is part of what makes you, you. Leave a
              little room for your story.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
