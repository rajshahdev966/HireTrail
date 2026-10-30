import { Link, useSearchParams } from "react-router";
import { CandidateFilters } from "../components/CandidateFilters";
import { CandidateSearch } from "../components/CandidateSearch";
import { JobCard } from "../components/JobCard";
import { PreviewNotice } from "../../../../shared/ui/components/PreviewNotice";
import { Icon } from "../../../../shared/ui/components/index";
import { careerJobs } from "../../state/careerData";



export function ExploreJobs() {
  const [searchParams] = useSearchParams();
  const list = searchParams.get("view") === "list";
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-explore pb-[55px]
      [&_.is-list]:grid-cols-[1fr_1.1fr_0.9fr] [&_.is-list]:gap-[12px] [&_.is-list_h3]:text-[15px]
      [&_.is-list_>_footer]:gap-[12px] max-[800px]:[&_.is-list]:block max-[800px]:[&_.is-list]:py-[20px]
      max-[800px]:[&_.is-list]:px-0 max-[800px]:[&_.is-list_>_footer]:justify-between
      max-[800px]:[&_.is-list_h3]:text-[19px] max-[560px]:pb-[35px] max-[560px]:[&_.is-list]:py-[22px]
      max-[560px]:[&_.is-list]:px-0
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
        ">
          A LITTLE CURIOSITY GOES A LONG WAY
        </span>
        <h1>
          Find work that feels <em>like you.</em>
        </h1>
        <p>Explore opportunities with teams you’ll be proud to be part of.</p>
      </div>
      <CandidateSearch compact />
      <div className="
        talent-explore-layout grid grid-cols-[205px_1fr] gap-[35px] mt-[35px] max-[1100px]:grid-cols-[180px_1fr]
        max-[1100px]:gap-[25px] max-[800px]:grid-cols-[160px_1fr] max-[800px]:gap-[20px]
        max-[560px]:grid-cols-[1fr] max-[560px]:gap-[25px] max-[560px]:mt-[25px]
      ">
        <CandidateFilters />
        <section aria-label="Job results">
          <div className="
            talent-results-heading flex items-center justify-between gap-[15px] mb-[24px] [&_h2]:text-[19px]
            [&_h2]:font-medium [&_h2]:tracking-[-0.5px] [&_h2]:flex [&_h2]:items-center [&_h2]:gap-[9px]
            [&_h2_span]:text-[9px] [&_h2_span]:text-[#88779c] [&_h2_span]:bg-[#efebf4] [&_h2_span]:py-[3px]
            [&_h2_span]:px-[6px] [&_h2_span]:rounded-[4px] [&_p]:text-[9px] [&_p]:text-[#858f77] [&_p]:mt-[5px]
            max-[1100px]:[&_p]:text-[8px] max-[800px]:items-start max-[800px]:[&_h2]:text-[17px]
            max-[800px]:[&_p]:max-w-[150px] max-[800px]:[&_p]:leading-[1.8] max-[560px]:items-center
            max-[560px]:mb-[20px] max-[560px]:[&_h2]:text-[20px] max-[560px]:[&_p]:text-[8px]
            max-[560px]:[&_p]:max-w-[200px]
          ">
            <div>
              <h2>
                All opportunities <span>06</span>
              </h2>
              <p>Good teams looking for their next good person.</p>
            </div>
            <div className="
              talent-results-controls flex items-center gap-[15px] [&_>_label]:text-[8px] [&_>_label]:text-[#8a947c]
              [&_select]:bg-[transparent] [&_select]:[border:none] [&_select]:text-[9px] [&_select]:text-[#6d795e]
              [&_select]:py-[7px] [&_select]:px-[2px] [&_select]:ml-[3px] max-[1100px]:gap-[8px]
              max-[1100px]:[&_>_label]:text-[0] max-[1100px]:[&_select]:text-[9px]
              max-[800px]:[flex-direction:column-reverse] max-[800px]:items-end max-[800px]:gap-[5px]
              max-[560px]:flex-row max-[560px]:gap-[5px] max-[560px]:[&_select]:max-w-[83px]
              max-[560px]:[&_select]:text-[8px]
            ">
              <label>
                Sort by{" "}
                <select aria-label="Sort opportunities">
                  <option>Newest first</option>
                  <option>Salary range</option>
                </select>
              </label>
              <div className="
                talent-view-switch flex [border:1px_solid_#e1e4d8] rounded-[5px] bg-[white] p-[3px] [&_a]:grid
                [&_a]:place-items-center [&_a]:h-[26px] [&_a]:w-[28px] [&_a]:text-[#8f977f] [&_a]:rounded-[3px]
                [&_.active]:bg-[#eeeaf5] [&_.active]:text-[#8d77a8] [&_i]:text-[15px] max-[560px]:[&_a]:h-[24px]
                max-[560px]:[&_a]:w-[25px] max-[560px]:[&_i]:text-[14px]
              ">
                <Link
                  aria-label="Grid presentation"
                  aria-current={!list ? "page" : undefined}
                  className={!list ? "active" : ""}
                  to="/careers/jobs"
                >
                  <Icon name="grid-line" />
                </Link>
                <Link
                  aria-label="List presentation"
                  aria-current={list ? "page" : undefined}
                  className={list ? "active" : ""}
                  to="/careers/jobs?view=list"
                >
                  <Icon name="list-check" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={
              list ? "talent-job-list flex flex-col gap-[0] [border-top:1px_solid_#e2e5d8]" : "talent-jobs-grid grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-[18px] max-[800px]:grid-cols-[repeat(2,_minmax(0,_1fr))] max-[800px]:gap-[16px] max-[560px]:grid-cols-[1fr] explore-grid [&_.talent-job-card]:[padding:20px_18px_0] max-[560px]:[&_.talent-job-card]:[padding:22px_20px_0] grid-cols-[repeat(2,_minmax(0,_1fr))] gap-[18px] max-[800px]:grid-cols-[1fr] max-[560px]:grid-cols-[1fr]"
            }
          >
            {careerJobs.map((j) => (
              <JobCard job={j} key={j.id} list={list} />
            ))}
          </div>
          <div className="
            talent-results-end max-[800px]:[&_.live-dot]:mt-[4px] max-[560px]:[&_.live-dot]:mt-[6px]
            max-[560px]:[&_.live-dot]:shrink-0 flex justify-center gap-[8px] items-center text-[9px] text-[#82906f]
            [padding:30px_0_15px] max-[800px]:text-[8px] max-[800px]:items-start max-[560px]:text-center
            max-[560px]:text-[8px] max-[560px]:pt-[23px] max-[560px]:leading-[1.9] max-[560px]:gap-[6px]
          ">
            <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> You’re all caught up. Six
            possibilities, one next chapter.
          </div>
          <PreviewNotice>
            Search, filter, and sort controls are design previews. Grid and list
            links switch between static presentations.
          </PreviewNotice>
        </section>
      </div>
    </div>
  );
}