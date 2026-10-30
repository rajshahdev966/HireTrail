import { Link, useParams } from "react-router";
import { Icon, Button, EmptyState } from "../../../../shared/ui/components/index";
import { careerJobs, benefits } from "../../state/careerData";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { JobCard } from "../components/JobCard";
import { JobSection } from "../components/JobSection";

export function CandidateJobDetails() {
  const { id } = useParams();
  const job = careerJobs.find((j) => j.id === id);
  if (!job)
    return (
      <div className="
        talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
        max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
        max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-missing pt-[50px] pb-[70px] text-center
      ">
        <EmptyState
          title="This opportunity isn’t on the trail."
          description="Take a look at the current openings to find your next possibility."
        />
        <Button to="/careers/jobs" variant="primary">
          Explore jobs
        </Button>
      </div>
    );
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-job-details pb-[50px]
    ">
      <Link className="
        talent-back inline-flex gap-[7px] items-center text-[#7d6a91] text-[10px] my-[32px] mx-0 [&_i]:text-[14px]
        max-[560px]:text-[9px] max-[560px]:my-[24px] max-[560px]:mx-0
      " to="/careers/jobs">
        <Icon name="arrow-left-line" /> All opportunities
      </Link>
      <div className="
        talent-job-detail-hero max-[1100px]:[&_.talent-company-mark.is-large]:w-[50px]
        max-[1100px]:[&_.talent-company-mark.is-large]:h-[50px]
        max-[1100px]:[&_.talent-company-mark.is-large]:text-[30px]
        max-[560px]:[&_.talent-company-mark.is-large]:h-[43px]
        max-[560px]:[&_.talent-company-mark.is-large]:w-[43px]
        max-[560px]:[&_.talent-company-mark.is-large]:text-[27px] [&_.talent-kicker]:text-[8px]
        [&_.talent-kicker_>_span]:text-[#b0b7a3] [&_.talent-kicker_>_span]:py-0 [&_.talent-kicker_>_span]:px-[7px]
        max-[560px]:[&_.talent-kicker]:text-[6px] max-[560px]:[&_.talent-kicker]:tracking-[1px]
        [&_.talent-meta]:mt-[14px] [&_.talent-meta]:gap-[20px] max-[560px]:[&_.talent-meta]:text-[8px]
        max-[560px]:[&_.talent-meta]:gap-[10px] max-[560px]:[&_.talent-meta]:mt-[13px]
        max-[560px]:[&_.talent-meta_i]:text-[11px] flex items-center gap-[21px] [padding:20px_0_40px]
        [border-bottom:1px_solid_#e2e5d8] [&_h1]:text-[36px] [&_h1]:tracking-[-1.1px] [&_h1]:mt-[11px]
        max-[1100px]:[&_h1]:text-[30px] max-[1100px]:gap-[16px] max-[800px]:flex-wrap max-[800px]:gap-[17px]
        max-[560px]:gap-[15px] max-[560px]:[padding:7px_0_26px] max-[560px]:items-start
        max-[560px]:[&_>_div:not(.talent-detail-hero-action)]:flex-1
        max-[560px]:[&_>_div:not(.talent-detail-hero-action)]:min-w-[0] max-[560px]:[&_h1]:text-[28px]
        max-[560px]:[&_h1]:leading-[1.12] max-[560px]:[&_h1]:mt-[9px] max-[560px]:[&_h1]:tracking-[-0.9px]
      ">
        <CompanyMark company={job.company} large />
        <div>
          <span className="
            talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
            max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
          ">
            {job.company.name} <span> / </span> {job.department}
          </span>
          <h1>{job.title}</h1>
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
            <span>
              <Icon name="briefcase-line" />
              {job.experience}
            </span>
          </div>
        </div>
        <div className="
          talent-detail-hero-action max-[1100px]:[&_.btn]:text-[10px] max-[1100px]:[&_.btn]:py-[9px]
          max-[1100px]:[&_.btn]:px-[12px] max-[560px]:[&_.btn]:text-[11px] max-[560px]:[&_.btn]:py-[10px]
          max-[560px]:[&_.btn]:px-[17px] ml-auto flex flex-col gap-[10px] text-center shrink-0 [&_small]:text-[8px]
          [&_small]:text-[#8d967f] max-[800px]:ml-[67px] max-[800px]:flex-row max-[800px]:items-center
          max-[800px]:text-left max-[800px]:[&_small]:text-[7px] max-[800px]:[&_small]:max-w-[120px]
          max-[560px]:[margin:6px_0_0] max-[560px]:basis-[100%] max-[560px]:gap-[13px]
          max-[560px]:[&_small]:text-[8px] max-[560px]:[&_small]:max-w-[130px]
        ">
          <Button to={`/careers/jobs/${job.id}/apply`} variant="primary">
            Apply for this role <Icon name="arrow-right-up-line" />
          </Button>
          <small>No account. Just a little introduction.</small>
        </div>
      </div>
      <div className="
        talent-detail-layout grid grid-cols-[minmax(0,_1fr)_300px] gap-[70px] items-start mt-[42px]
        max-[1100px]:grid-cols-[minmax(0,_1fr)_265px] max-[1100px]:gap-[38px]
        max-[800px]:grid-cols-[minmax(0,_1fr)_230px] max-[800px]:gap-[25px] max-[560px]:grid-cols-[1fr]
        max-[560px]:mt-[28px] max-[560px]:gap-[28px]
      ">
        <article>
          <JobSection title="A little about the team">
            <p>{job.company.about}</p>
          </JobSection>
          <JobSection title="Your next chapter">
            <p>{job.intro}</p>
          </JobSection>
          <JobSection title="What you’ll make happen">
            <ul>
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </JobSection>
          <JobSection title="What you’ll bring">
            <ul>
              {job.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </JobSection>
          <JobSection title="Good work deserves good support.">
            <div className="
              talent-benefits grid grid-cols-[1fr_1fr] gap-[22px] [&_>_div]:py-[16px] [&_>_div]:px-[14px]
              [&_>_div]:[border-left:2px_solid_#dce3cd] [&_>_div]:bg-[#f3f5ec] [&_i]:text-[#92a177] [&_i]:block
              [&_i]:text-[20px] [&_i]:mb-[12px] [&_h3]:text-[13px] [&_h3]:font-[550] [&_p]:text-[10px] [&_p]:mt-[5px]
              [&_p]:leading-[1.8] max-[800px]:gap-[13px] max-[800px]:[&_>_div]:py-[13px] max-[800px]:[&_>_div]:px-[10px]
              max-[800px]:[&_h3]:text-[12px] max-[800px]:[&_p]:text-[9px] max-[560px]:gap-[15px]
              max-[560px]:[&_>_div]:py-[15px] max-[560px]:[&_>_div]:px-[13px] max-[560px]:[&_p]:text-[10px]
            ">
              {benefits.map((b) => (
                <div key={b.title}>
                  <Icon name={b.icon} />
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </JobSection>
          <div className="
            talent-inclusive flex items-start gap-[15px] [border:1px_solid_#e4e4d6] rounded-[7px] bg-[#f1f1e7]
            p-[20px] [&_>_i]:text-[#98a378] [&_>_i]:text-[24px] [&_>_i]:mt-[2px] [&_h3]:text-[14px] [&_h3]:font-[550]
            [&_p]:text-[10px] [&_p]:text-[#7a8568] [&_p]:leading-[1.9] [&_p]:mt-[8px] max-[560px]:p-[18px]
            max-[560px]:gap-[12px] max-[560px]:[&_h3]:text-[15px] max-[560px]:[&_p]:text-[10px]
          ">
            <Icon name="seedling-line" />
            <div>
              <h3>A little different? You’ll fit right in.</h3>
              <p>
                You don’t need to tick every box. Different paths, perspectives,
                and experiences make better teams. If this role sparks your
                curiosity, we’d love to hear from you.
              </p>
            </div>
          </div>
        </article>
        <aside className="
          talent-job-aside bg-[white] [border:1px_solid_#e3e5da] rounded-[9px] p-[25px] sticky top-[25px]
          [&_>_h2]:text-[22px] [&_>_h2]:font-[450] [&_>_h2]:tracking-[-0.5px] [&_>_h2]:mt-[10px] [&_dl]:my-[20px]
          [&_dl]:mx-0 [&_dl_>_div]:py-[13px] [&_dl_>_div]:px-0 [&_dl_>_div]:flex [&_dl_>_div]:justify-between
          [&_dl_>_div]:gap-[12px] [&_dl_>_div]:[border-bottom:1px_solid_#eceee5] [&_dl_>_div]:text-[10px]
          [&_dt]:text-[#889578] [&_dd]:m-0 [&_dd]:text-right [&_dd]:text-[#657451] [&_dd]:font-[550]
          [&_>_p]:text-[9px] [&_>_p]:text-[#8f9c7b] [&_>_p]:text-center [&_>_p]:mt-[12px] [&_>_p]:leading-[1.9]
          max-[800px]:p-[18px] max-[800px]:[&_>_h2]:text-[20px] max-[800px]:[&_dl_>_div]:text-[9px]
          max-[560px]:static max-[560px]:row-[1] max-[560px]:p-[22px] max-[560px]:[&_dl]:grid
          max-[560px]:[&_dl]:grid-cols-[1fr_1fr] max-[560px]:[&_dl]:gap-[0_25px]
          max-[560px]:[&_dl]:[margin:15px_0_20px] max-[560px]:[&_dl_>_div]:block max-[560px]:[&_dl_>_div]:py-[10px]
          max-[560px]:[&_dl_>_div]:px-0 max-[560px]:[&_dl_>_div]:text-[10px] max-[560px]:[&_dd]:text-left
          max-[560px]:[&_dd]:mt-[5px] max-[560px]:[&_dd]:text-[11px] max-[560px]:[&_dt]:text-[8px]
        ">
          <span className="
            talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
            max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
          ">THE ROLE AT A GLANCE</span>
          <h2>A few helpful details.</h2>
          <dl>
            {[
              ["Compensation", job.salary],
              ["Location", job.location],
              ["Commitment", job.type],
              ["Experience", job.experience],
              ["Department", job.department],
              ["Posted", job.posted],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Button to={`/careers/jobs/${job.id}/apply`} variant="primary">
            Say hello <Icon name="arrow-right-line" />
          </Button>
          <p>
            A few details. Your experience.
            <br />
            No account required.
          </p>
          <div className="
            talent-aside-company [&_.talent-company-mark]:row-[span_2] [&_.talent-company-mark]:w-[33px]
            [&_.talent-company-mark]:h-[33px] [&_.talent-company-mark]:text-[22px] [border-top:1px_solid_#e5e9da]
            mt-[23px] pt-[20px] grid grid-cols-[auto_1fr] gap-x-[10px] items-center [&_strong]:text-[11px]
            [&_strong]:font-[550] [&_small]:text-[7px] [&_small]:text-[#879772] max-[560px]:mt-[20px]
            max-[560px]:pt-[17px] max-[560px]:[&_small]:text-[8px]
          ">
            <CompanyMark company={job.company} />
            <strong>{job.company.name}</strong>
            <small>
              {job.company.size} · {job.company.location}
            </small>
          </div>
        </aside>
      </div>
      <section className="talent-related mt-[60px] pt-[40px] [border-top:1px_solid_#e3e6d7] max-[560px]:mt-[36px] max-[560px]:pt-[28px]">
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
            ">KEEP YOUR CURIOSITY GOING</span>
            <h2>A few more possibilities.</h2>
          </div>
          <Link className="
            talent-inline-link text-[10px] flex items-center gap-[11px] text-[#75638f] whitespace-nowrap
            [&_i]:text-[14px] [&:hover]:text-[#4e3b73] max-[800px]:text-[8px] max-[800px]:gap-[7px]
            max-[560px]:text-[9px]
          " to="/careers/jobs">
            All opportunities <Icon name="arrow-right-line" />
          </Link>
        </div>
        <div className="
          talent-jobs-grid grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-[18px]
          max-[800px]:grid-cols-[repeat(2,_minmax(0,_1fr))] max-[800px]:gap-[16px] max-[560px]:grid-cols-[1fr]
        ">
          {careerJobs
            .filter((j) => j.id !== job.id)
            .slice(0, 3)
            .map((j) => (
              <JobCard key={j.id} job={j} />
            ))}
        </div>
      </section>
    </div>
  );
}
