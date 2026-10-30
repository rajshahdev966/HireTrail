import { interviews } from "../../state/mockInterviews";
import { Icon, Button, Panel, PageTitle } from "../../../../shared/ui/components/index";
import { InterviewList } from "../components/InterviewList";

export function Interviews() {
  return (
    <>
      <PageTitle
        eyebrow="CONVERSATIONS THAT OPEN DOORS"
        title="Make a little time for great people."
        description="Your upcoming interviews, thoughtfully organized."
      >
        <Button icon="calendar-line">October 2026</Button>
        <Button variant="primary" to="/interviews/new" icon="add-line">
          Schedule interview
        </Button>
      </PageTitle>
      <div className="
        interview-page [&_.interview]:py-[27px] [&_.interview]:px-0 [&_.interview-time]:w-[65px]
        [&_.interview-time_strong]:text-[11px] max-[700px]:[&_.interview-time]:w-[51px]
        [&_.interview-info_>_strong]:text-[13px] [&_.interview-info_>_span]:text-[10px]
        [&_.interview-info_>_span]:max-w-[none] [&_.interview-info_small]:text-[10px]
        [&_.interview-info_small]:max-w-[none] max-[700px]:[&_.interview-info_small]:text-[8px]
        max-[700px]:[&_.interview-info_small]:max-w-[90px] max-[700px]:[&_.interview-info_>_strong]:text-[11px]
        max-[700px]:[&_.interview-info_>_span]:text-[8px] [&_.info-box]:[margin:0_22px_22px] grid
        grid-cols-[1.2fr_1fr] gap-[24px] max-[1200px]:grid-cols-[1fr]
      ">
        <Panel
          title="Friday, October 23"
          subtitle="Today · 3 upcoming conversations"
        >
          <InterviewList />
        </Panel>
        <Panel title="Your week at a glance">
          <div className="
            week-grid [&_.today]:bg-[#eee8f8] [&_.today]:border-[#d7c9eb] [&_.today]:text-[#8a71b1] flex gap-[10px]
            [padding:0_22px_22px] [&_>_div]:flex-1 [&_>_div]:[border:1px_solid_#ede6f1] [&_>_div]:rounded-[8px]
            [&_>_div]:py-[16px] [&_>_div]:px-[5px] [&_>_div]:text-center [&_>_div]:text-[#ad9cb9] [&_span]:block
            [&_strong]:block [&_small]:block [&_span]:text-[9px] [&_strong]:text-[27px] [&_strong]:font-medium
            [&_strong]:[margin:20px_0_9px] [&_small]:text-[8px] max-[700px]:[padding:0_15px_20px]
            max-[700px]:gap-[6px] max-[700px]:[&_>_div]:py-[13px] max-[700px]:[&_>_div]:px-[2px]
            max-[700px]:[&_span]:text-[8px]
          ">
            {["Mon 19", "Tue 20", "Wed 21", "Thu 22", "Fri 23"].map((d, i) => (
              <div key={d} className={i === 4 ? "today " : ""}>
                <span>{d}</span>
                <strong>{[2, 4, 2, 3, 3][i]}</strong>
                <small>interviews</small>
              </div>
            ))}
          </div>
          <div className="
            info-box bg-[#f2f1e8] [border:1px_solid_#e8e6d8] rounded-[7px] p-[15px] flex items-center gap-[8px]
            text-[#a49d87] text-[10px] leading-[1.7]
          ">
            <Icon name="time-line" /> A good conversation can change everything.
            Give each one a little room.
          </div>
        </Panel>
      </div>
    </>
  );
}
