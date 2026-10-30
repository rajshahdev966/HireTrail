import { RiFilePdfFill, RiMapPin2Line } from "@remixicon/react";
import { Button } from "../../../../shared/ui/components/index";
import { candidateProfile } from "../../state/candidateProfile";
import { careerJobs } from "../../../user-jobs/state/careerData";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { PreviewNotice } from "../../../../shared/ui/components/PreviewNotice";
import { Link } from "react-router";
import { Icon } from "../../../../shared/ui/components/index";






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
            <RiMapPin2Line/>
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
              <RiFilePdfFill/>
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