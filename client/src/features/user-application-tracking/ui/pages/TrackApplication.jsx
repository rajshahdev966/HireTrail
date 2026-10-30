import { Link, useSearchParams } from "react-router";
import { applicationExample } from "../../state/applicationExample";
import { careerJobs } from "../../../user-jobs/state/careerData";
import { Button, Icon } from "../../../../shared/ui/components/index";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { PreviewNotice } from "../../../../shared/ui/components/PreviewNotice";
import { StatusTimeline } from "../components/StatusTimeline";
import { RiCalendar2Fill, RiChat1Line, RiCheckboxBlankCircleLine, RiRefreshLine } from "@remixicon/react";



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
            <RiCalendar2Fill/> Submitted{" "}
            {applicationExample.submitted}
          </span>
          <span>
            <RiRefreshLine/> Last update: October 22, 2026
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
            <RiChat1Line/>
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
              <RiCheckboxBlankCircleLine/>
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