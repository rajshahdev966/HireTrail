import { candidates } from "../../state/mockCandidates";
import { Button, Panel, PageTitle, Filters, CandidateTable } from "../../../../shared/ui/components/index";

export function Applications() {
  return (
    <>
      <PageTitle
        eyebrow="GOOD PEOPLE. GREAT POSSIBILITIES."
        title="Your talent, all in one place."
        description="Meet the people who could make all the difference."
      >
        <Button icon="download-2-line">Export list</Button>
        <Button variant="primary" to="/applications/new" icon="add-line">
          Add candidate
        </Button>
      </PageTitle>
      <div className="
        page-tabs flex gap-[29px] [border-bottom:1px_solid_#e5e5ed] [margin:28px_0_23px] items-center text-[11px]
        text-[#9693a0] overflow-auto whitespace-nowrap [&_>_a]:[padding:0_0_14px] [&_>_a]:flex [&_>_a]:gap-[8px]
        [&_>_a]:items-center [&_>_a]:[border-bottom:2px_solid_transparent] [&_>_span]:[padding:0_0_14px]
        [&_>_span]:flex [&_>_span]:gap-[8px] [&_>_span]:items-center
        [&_>_span]:[border-bottom:2px_solid_transparent] [&_.selected]:text-[#7160a7]
        [&_.selected]:[border-bottom-color:#7b66b7] [&_.selected]:font-[650] [&_b]:text-[8px] [&_b]:bg-[#eeebf5]
        [&_b]:py-[2px] [&_b]:px-[5px] [&_b]:font-semibold [&_b]:rounded-[4px] [&_span_span]:text-[8px]
        [&_span_span]:bg-[#eeebf5] [&_span_span]:py-[2px] [&_span_span]:px-[5px] [&_span_span]:font-semibold
        [&_span_span]:rounded-[4px] max-[700px]:gap-[22px] max-[700px]:text-[10px] max-[700px]:mt-[20px]
      ">
        <span className="selected">
          All candidates <b>248</b>
        </span>
        <span>
          Shortlisted <b>42</b>
        </span>
        <span>
          Archived <b>18</b>
        </span>
      </div>
      <Filters />
      <Panel
        title="All candidates"
        action={
          <span className="subtle-label text-[8px] text-[#aaa8b5]">
            248 people, countless possibilities
          </span>
        }
      >
        <CandidateTable candidates={candidates} />
        <div className="
          pagination [&_.btn]:text-[9px] [&_.btn]:min-h-[30px] [&_.btn]:py-[5px] [&_.btn]:px-[9px] py-[18px]
          px-[20px] flex items-center justify-between [border-top:1px_solid_#eae8ef] text-[9px] text-[#a49cae]
          [&_>_div]:flex [&_>_div]:items-center [&_>_div]:gap-[6px] max-[700px]:gap-[10px] max-[700px]:p-[15px]
          max-[700px]:flex-col
        ">
          <span>Showing 1–8 of 248 candidates</span>
          <div>
            <Button icon="arrow-left-s-line" disabled>
              Previous
            </Button>
            <span className="page-number py-[7px] px-[10px] text-[#7760ad] bg-[#eeeaf7] rounded-[5px]">1</span>
            <Button disabled>2</Button>
            <Button disabled>3</Button>
            <Button disabled icon="arrow-right-s-line">
              Next
            </Button>
          </div>
        </div>
      </Panel>
    </>
  );
}
