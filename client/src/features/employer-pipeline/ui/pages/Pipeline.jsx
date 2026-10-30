import { jobs } from "../../../employer-jobs/state/mockJobs";
import { candidates } from "../../../employer-applications/state/mockCandidates";
import { pipeline } from "../../state/mockPipeline";
import { Icon, Button, Avatar, PageTitle, CandidateCard } from "../../../../shared/ui/components/index";

export function Pipeline() {
  return (
    <>
      <PageTitle
        eyebrow="FROM FIRST HELLO TO WELCOME ABOARD"
        title="Good people, moving forward."
        description="A clear view of every candidate’s journey."
      >
        <Button icon="equalizer-line">Board settings</Button>
        <Button variant="primary" to="/applications/new" icon="add-line">
          Add candidate
        </Button>
      </PageTitle>
      <div className="
        pipeline-toolbar [&_.avatar]:w-[28px] [&_.avatar]:h-[28px] [&_.avatar]:ml-[-5px]
        [&_.avatar]:[border:2px_solid_#fff] max-[700px]:[&_.avatar]:w-[23px] max-[700px]:[&_.avatar]:h-[23px] flex
        items-center gap-[17px] [margin:30px_0_24px] text-[#9990a6] text-[10px] [&_>_div]:flex
        [&_>_div]:items-center max-[700px]:gap-[10px] max-[700px]:flex-wrap max-[700px]:[&_>_span]:text-[8px]
      ">
        <label className="
          select-filter [&_select]:[border:1px_solid_#e3e2eb] [&_select]:rounded-[6px] [&_select]:bg-[white]
          [&_select]:[padding:10px_30px_10px_12px] [&_select]:text-[10px] [&_select]:text-[#878391]
          [&_select]:min-h-[38px] max-[700px]:min-w-[0] max-[700px]:flex-1 max-[700px]:[&_select]:text-[9px]
          max-[700px]:[&_select]:w-full max-[700px]:[&_select]:pl-[8px] max-[700px]:[&_select]:pr-[8px]
        ">
          <select aria-label="Filter by job">
            <option>All job openings</option>
            {jobs.map((j) => (
              <option key={j.id}>{j.title}</option>
            ))}
          </select>
        </label>
        <span>
          248 candidates <span className="dot-separator my-0 mx-[3px] text-[#b7b5bf]">·</span> 8 active jobs
        </span>
        <div className="ml-auto ">
          <Avatar person={{ avatar: "https://i.pravatar.cc/80?img=33" }} />
          <Avatar person={{ avatar: "https://i.pravatar.cc/80?img=32" }} />
          <span className="
            team-extra h-[28px] w-[28px] rounded-[50%] grid place-items-center text-[9px] bg-[#e9e4f2]
            [border:2px_solid_white] ml-[-5px] text-[#8a7b9f] max-[700px]:w-[23px] max-[700px]:h-[23px]
            max-[700px]:text-[7px]
          ">+2</span>
        </div>
      </div>
      <div className="kanban flex gap-[15px] overflow-x-auto pb-[20px] min-h-[540px]">
        {[...pipeline, { name: "Rejected", count: 14, color: "#c7c9d0" }].map(
          (p) => (
            <section className="
              kanban-column [&_header_.icon-button]:ml-auto [&_header_.icon-button]:h-[19px]
              [&_header_.icon-button]:w-[19px] flex-1 min-w-[203px] bg-[#f0f0f5] [border:1px_solid_#e9e7ef]
              rounded-[9px] self-stretch [&_>_header]:flex [&_>_header]:items-center [&_>_header]:gap-[7px]
              [&_>_header]:py-[14px] [&_>_header]:px-[12px] [&_h2]:text-[11px] [&_h2]:tracking-[0]
              [&_header_small]:text-[8px] [&_header_small]:text-[#a19aa9] [&_header_small]:ml-[3px]
              max-[700px]:min-w-[220px]
            " key={p.name}>
              <header>
                <span className="stage-dot w-[7px] h-[7px] rounded-[50%]" style={{ background: p.color }} />
                <h2>{p.name}</h2>
                <small>{p.count}</small>
                <button
                  type="button"
                  aria-label={`Add to ${p.name}`}
                  className="
                    icon-button w-[27px] h-[28px] inline-flex items-center justify-center text-[#9b9aa9] bg-[none]
                    [border:none] rounded-[5px] shrink-0 [&:hover]:bg-[#eeebf7] [&:hover]:text-[#7863ac] [&_i]:text-[15px]
                  "
                >
                  <Icon name="add-line" />
                </button>
              </header>
              <div className="kanban-cards py-0 px-[9px]">
                {candidates
                  .filter((c) => c.stage === p.name)
                  .map((c) => (
                    <CandidateCard candidate={c} key={c.id} />
                  ))}
                <button type="button" className="
                  add-card w-full text-[9px] text-[#a69ab3] flex items-center justify-center gap-[7px] p-[10px] bg-[none]
                  [border:1px_dashed_#dbd5e4] rounded-[6px] [&_i]:text-[13px]
                ">
                  <Icon name="add-line" /> Add candidate
                </button>
              </div>
            </section>
          ),
        )}
      </div>
      <p className="demo-note flex items-center gap-[7px] text-[#aaa1b5] text-[9px] mt-[12px] [&_i]:text-[13px]">
        <Icon name="information-line" /> A preview of your hiring workflow.
        Candidate cards open detailed profiles.
      </p>
    </>
  );
}
