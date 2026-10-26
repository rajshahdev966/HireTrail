import { Link } from "react-router";
import {
  jobs,
  candidates,
  interviews,
  activities,
  pipeline,
} from "../data/mock";
import {
  Icon,
  Button,
  Avatar,
  Panel,
  PageTitle,
  CandidateTable,
} from "../components/ui";
const stats = [
  {
    label: "Active jobs",
    value: "08",
    change: "+2",
    text: "from last month",
    icon: "briefcase-line",
    color: "purple",
    bars: [25, 40, 30, 50, 44, 63, 55, 75, 65, 88, 78, 100],
  },
  {
    label: "Total applications",
    value: "248",
    change: "+18.6%",
    text: "from last month",
    icon: "group-line",
    color: "blue",
    bars: [30, 45, 35, 60, 50, 66, 62, 80, 70, 90, 80, 100],
  },
  {
    label: "Interviews scheduled",
    value: "24",
    change: "+6",
    text: "from last month",
    icon: "calendar-event-line",
    color: "orange",
    bars: [50, 35, 60, 40, 65, 50, 75, 60, 85, 70, 90, 100],
  },
  {
    label: "Successful hires",
    value: "12",
    change: "+4",
    text: "from last month",
    icon: "user-follow-line",
    color: "green",
    bars: [20, 35, 30, 45, 38, 55, 50, 65, 60, 80, 75, 100],
  },
];
export function InterviewList() {
  return (
    <div className="interview-list [padding:0_20px_6px]">
      {interviews.map((i) => (
        <div className="
          interview flex items-center gap-[10px] py-[15px] px-0 [border-bottom:1px_solid_#f2f2f5]
          [&:last-child]:[border-bottom:none] min-[1500px]:py-[20px] min-[1500px]:px-0
        " key={i.name}>
          <div className="
            interview-time w-[49px] shrink-0 [&_strong]:block [&_strong]:text-[9px] [&_strong]:font-semibold
            [&_strong]:text-[#70707d] [&_small]:block [&_small]:text-[7px] [&_small]:text-[#b0afb9] [&_small]:mt-[4px]
          ">
            <strong>{i.time}</strong>
            <small>{i.duration}</small>
          </div>
          <span className={`interview-rule w-[2px] h-[30px] rounded-[2px] shrink-0 [&.purple]:bg-[#d1c5e9] [&.blue]:bg-[#c3d4ed] [&.orange]:bg-[#e8d1b2] ${i.color}`} />
          <div className="
            interview-info [&_.avatar]:w-[14px] [&_.avatar]:h-[14px] flex-1 min-w-[0] [&_>_strong]:text-[9px]
            [&_>_strong]:font-semibold [&_>_strong]:block [&_>_strong]:text-[#626270] [&_>_span]:flex
            [&_>_span]:items-center [&_>_span]:gap-[5px] [&_>_span]:text-[7px] [&_>_span]:text-[#a19fac]
            [&_>_span]:mt-[6px] [&_>_span]:whitespace-nowrap [&_small]:text-[7px] [&_small]:max-w-[90px]
            [&_small]:overflow-hidden [&_small]:text-ellipsis min-[1500px]:[&_>_strong]:text-[11px]
            min-[1500px]:[&_>_span]:text-[8px] min-[1500px]:[&_small]:text-[8px]
          ">
            <strong>{i.type}</strong>
            <span>
              <Avatar person={i} size="tiny" />
              {i.name}
              <span className="dot-separator my-0 mx-[3px] text-[#b7b5bf]">·</span>
              <small>{i.role}</small>
            </span>
          </div>
          <button
            type="button"
            className="
              icon-button w-[27px] h-[28px] inline-flex items-center justify-center text-[#9b9aa9] bg-[none]
              [border:none] rounded-[5px] shrink-0 [&:hover]:bg-[#eeebf7] [&:hover]:text-[#7863ac] [&_i]:text-[15px]
            "
            aria-label={`Join ${i.name}'s interview`}
          >
            <Icon name="vidicon-line" />
          </button>
        </div>
      ))}
    </div>
  );
}
export default function Overview() {
  return (
    <>
      <PageTitle
        eyebrow="YOUR HIRING, AT A GLANCE"
        title={
          <>
            Good morning, Alex <span className="wave text-[#b6c882] text-[30px] [vertical-align:middle] ml-[4px]">✳</span>
          </>
        }
        description="Here's what's happening with your team today."
      >
        <Button icon="calendar-line">
          Oct 1 – Oct 31, 2026 <Icon name="arrow-down-s-line" />
        </Button>
        <Button to="/jobs/new" variant="primary" icon="add-line">
          Create a job
        </Button>
      </PageTitle>
      <section className="
        welcome-banner bg-[#eeedf7] [border:1px_solid_#e4e1f1] rounded-[10px] min-h-[206px] flex relative
        overflow-hidden py-[24px] px-[30px] mb-[23px] [&_h2]:text-[29px] [&_h2]:font-medium
        [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.22] [&_h2]:[margin:12px_0_9px] [&_h2]:text-[#3b3458]
        [&_p]:text-[10px] [&_p]:text-[#9087a7] [&_a]:inline-flex [&_a]:gap-[12px] [&_a]:items-center
        [&_a]:text-[9px] [&_a]:font-bold [&_a]:text-[#7360a9] [&_a]:mt-[18px] [&_a_i]:text-[14px]
        min-[1500px]:min-h-[225px] min-[1500px]:py-[28px] min-[1500px]:px-[34px] min-[1500px]:[&_h2]:text-[34px]
        max-[1200px]:[&_p]:text-[9px] max-[1200px]:p-[23px] max-[960px]:[&_h2]:text-[27px]
        max-[960px]:[&_p]:max-w-[230px] max-[960px]:[&_p]:leading-[1.7] max-[700px]:py-[23px]
        max-[700px]:px-[20px] max-[700px]:min-h-[205px] max-[700px]:[&_h2]:text-[27px]
        max-[700px]:[&_p]:text-[9px] max-[700px]:[&_p]:max-w-[180px]
      ">
        <div>
          <span className="
            banner-label text-[7px] tracking-[1.5px] text-[#8b80b3] flex items-center gap-[6px] font-[650]
            [&_>_span]:w-[5px] [&_>_span]:h-[5px] [&_>_span]:rounded-[50%] [&_>_span]:bg-[#9485c4]
            max-[700px]:text-[6px]
          ">
            <span /> PEOPLE FIRST. ALWAYS.
          </span>
          <h2>
            Your next great hire
            <br />
            is a great beginning.
          </h2>
          <p>A little clarity. A lot of possibility. Let’s build your team.</p>
          <Link to="/pipeline">
            Explore your pipeline <Icon name="arrow-right-line" />
          </Link>
        </div>
        <div className="
          banner-art absolute right-[24px] top-[0] w-[380px] h-full pointer-events-none min-[1500px]:right-[60px]
          max-[1200px]:right-[5px] max-[1200px]:w-[330px] max-[1200px]:[transform:scale(0.9)]
          max-[1200px]:[transform-origin:right_center] max-[960px]:opacity-[0.9] max-[960px]:right-[-25px]
          max-[700px]:[transform:scale(0.6)] max-[700px]:right-[-40px] max-[700px]:top-[15px]
          max-[700px]:opacity-[0.8]
        " aria-hidden="true">
          <div className="
            orbit absolute [border:1px_solid_#dbd6ec] w-[290px] h-[290px] rounded-[50%] right-[15px] top-[-41px]
            [transform:rotate(-20deg)] max-[700px]:opacity-[0.5] max-[700px]:right-[-50px] orbit-one
          " />
          <div className="
            orbit absolute [border:1px_solid_#dbd6ec] w-[290px] h-[290px] rounded-[50%] right-[15px] top-[-41px]
            [transform:rotate(-20deg)] max-[700px]:opacity-[0.5] max-[700px]:right-[-50px] orbit-two w-[230px]
            h-[230px] top-[-11px] right-[45px] max-[700px]:right-[-20px]
          " />
          <div className="
            orbit absolute [border:1px_solid_#dbd6ec] w-[290px] h-[290px] rounded-[50%] right-[15px] top-[-41px]
            [transform:rotate(-20deg)] max-[700px]:opacity-[0.5] max-[700px]:right-[-50px] orbit-three w-[170px]
            h-[170px] top-[19px] right-[75px] max-[700px]:right-[10px]
          " />
          <div className="
            art-card absolute flex items-center rounded-[9px] shadow-[0_8px_14px_#4c3f6c08] art-card-one bg-[#fffefd]
            py-[15px] px-[17px] gap-[10px] top-[39px] left-[18px] [transform:rotate(-9deg)] w-[232px]
            [border:1px_solid_#e2dfeb] [&_b]:block [&_b]:text-[11px] [&_b]:font-semibold [&_b]:text-[#60566f]
            [&_div_>_span]:block [&_div_>_span]:text-[8px] [&_div_>_span]:text-[#a29ba9] [&_div_>_span]:mt-[4px]
            [&_i]:text-[#aebd82] [&_i]:text-[21px] [&_i]:ml-auto max-[700px]:left-[80px]
          ">
            <span className="mini-avatar bg-[#ede9d6] text-[#837c50] text-[11px] font-semibold rounded-[50%] w-[34px] h-[34px] grid place-items-center">JD</span>
            <div>
              <b>Great people.</b>
              <span>Endless possibilities.</span>
            </div>
            <i className="ri-checkbox-circle-fill" />
          </div>
          <div className="
            art-card absolute flex items-center rounded-[9px] shadow-[0_8px_14px_#4c3f6c08] art-card-two bg-[#e2eacb]
            [border:1px_solid_#d3debb] py-[18px] px-[22px] top-[115px] right-[18px] [transform:rotate(7deg)]
            gap-[16px] [&_>_span:last-child]:text-[10px] [&_>_span:last-child]:text-[#7e8867]
            [&_>_span:last-child]:leading-[1.7] [&_b]:font-semibold [&_b]:text-[#606c48] max-[700px]:right-[-5px]
            max-[700px]:top-[140px]
          ">
            <span className="art-star text-[39px] leading-[1] text-[#8b9b64]">✳</span>
            <span>
              Your next chapter
              <br />
              <b>starts with a hire.</b>
            </span>
          </div>
          <div className="
            art-spark absolute right-[33px] top-[28px] text-[37px] text-[#b2a1d1] [transform:rotate(15deg)]
            max-[700px]:right-[-10px] max-[700px]:top-[15px]
          ">✦</div>
          <div className="art-dots absolute top-[128px] left-[23px] leading-[10px] tracking-[8px] text-[26px] text-[#b9afd0] max-[700px]:hidden">
            · · ·<br />· · ·<br />· · ·
          </div>
        </div>
      </section>
      <div className="
        stats-grid grid grid-cols-[repeat(4,_1fr)] gap-[16px] mb-[24px] max-[1200px]:gap-[12px]
        max-[960px]:gap-[10px] max-[700px]:grid-cols-[repeat(2,_1fr)] max-[700px]:gap-[11px] max-[700px]:mb-[20px]
      ">
        {stats.map((s) => (
          <section className="
            stat [border:1px_solid_#e6e7ed] bg-[#fff] rounded-[9px] py-[16px] px-[18px] min-[1500px]:py-[20px]
            min-[1500px]:px-[23px] max-[1200px]:p-[14px] max-[700px]:p-[14px]
          " key={s.label}>
            <div className="
              stat-top flex justify-between items-center text-[#81818f] text-[10px] min-[1500px]:text-[12px]
              max-[960px]:text-[9px] max-[700px]:text-[10px]
            ">
              <span>{s.label}</span>
              <span className={`
                stat-icon w-[28px] h-[28px] flex items-center justify-center rounded-[7px] [&_i]:text-[15px]
                [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa] [&.blue]:text-[#7f9cc8]
                [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6] [&.green]:text-[#8b9c70]
                [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] max-[960px]:w-[23px] max-[960px]:h-[23px]
               ${s.color}`}>
                <Icon name={s.icon} />
              </span>
            </div>
            <div className="
              stat-value flex items-center justify-between [margin:7px_0_11px] [&_>_strong]:text-[32px]
              [&_>_strong]:tracking-[-1px] [&_>_strong]:font-[550] [&_>_strong]:[font-family:'DM_Sans_Variable',_sans-serif]
              min-[1500px]:[&_>_strong]:text-[38px] max-[960px]:[&_>_strong]:text-[30px]
              max-[700px]:[&_>_strong]:text-[32px]
            ">
              <strong>{s.value}</strong>
              <div className={`
                spark-bars flex items-end gap-[3px] h-[32px] bg-[transparent] mt-[6px] [&_i]:block [&_i]:w-[5px]
                [&_i]:rounded-[2px_2px_0_0] [&_i]:bg-[currentColor] [&_i]:opacity-[0.35]
                [&_i:nth-last-child(-n_+_3)]:opacity-[0.65] max-[960px]:gap-[2px] max-[960px]:h-[26px]
                max-[960px]:[&_i]:w-[4px] max-[700px]:h-[29px]
               ${s.color}`} aria-hidden="true">
                {s.bars.map((b, i) => (
                  <i key={i} style={{ height: `${b}%` }} />
                ))}
              </div>
            </div>
            <div className="
              stat-change text-[#a0a0aa] text-[8px] whitespace-nowrap [&_>_span]:text-[#77915b] [&_>_span]:mr-[4px]
              [&_>_span]:font-semibold [&_i]:text-[10px] min-[1500px]:text-[9px] max-[960px]:text-[7px]
              max-[700px]:text-[7px]
            ">
              <span>
                <Icon name="arrow-right-up-line" /> {s.change}
              </span>{" "}
              {s.text}
            </div>
          </section>
        ))}
      </div>
      <div className="
        overview-middle grid grid-cols-[1.08fr_1fr] gap-[22px] mb-[23px] min-[1500px]:gap-[24px]
        max-[1200px]:gap-[17px] max-[960px]:gap-[15px] max-[700px]:grid-cols-[1fr] max-[700px]:gap-[20px]
        max-[700px]:mb-[20px]
      ">
        <Panel
          title="Hiring pipeline"
          subtitle="A little momentum at every stage."
          action={
            <Link className="
              text-link text-[9px] inline-flex items-center gap-[7px] text-[#8c7bb5] whitespace-nowrap
              [&:hover]:text-[#55468c] [&_i]:text-[13px] max-[960px]:text-[8px] max-[700px]:text-[9px]
            " to="/pipeline">
              View pipeline <Icon name="arrow-right-up-line" />
            </Link>
          }
        >
          <div className="
            pipeline-summary [&_.positive]:ml-auto [&_.positive]:text-[#829862] [&_.positive]:text-[9px]
            [&_.positive]:bg-[#f0f5e9] [&_.positive]:rounded-[4px] [&_.positive]:p-[4px] py-0 px-[20px] flex
            items-center gap-[9px] [margin:0_0_12px] [&_>_strong]:[font-family:'DM_Sans_Variable',_sans-serif]
            [&_>_strong]:text-[27px] [&_>_strong]:font-[550] [&_>_strong]:tracking-[-0.8px] [&_>_span]:text-[9px]
            [&_>_span]:text-[#a0a0ab]
          ">
            <strong>264</strong>
            <span>candidates in your pipeline</span>
            <span className="positive [&_i]:text-[11px]">
              <Icon name="arrow-right-up-line" /> 12.8%
            </span>
          </div>
          <div className="
            funnel-chart h-[144px] flex gap-[16px] py-0 px-[25px] mb-[18px] min-[1500px]:h-[170px]
            max-[960px]:gap-[10px] max-[960px]:py-0 max-[960px]:px-[20px] max-[700px]:h-[160px] max-[700px]:gap-[16px]
          ">
            {pipeline.map((p) => (
              <div className="
                funnel-column flex-1 flex flex-col items-center gap-[10px] text-[9px] text-[#91919e] min-w-[0]
                [&:nth-last-child(-n_+_2)_strong]:text-[#768350]
              " key={p.name}>
                <div className="
                  funnel-track flex-1 w-full flex items-end bg-[#f9f9fb] rounded-[5px] overflow-hidden [&_>_div]:w-full
                  [&_>_div]:rounded-[5px] [&_>_div]:min-h-[29px] [&_>_div]:flex [&_>_div]:items-start
                  [&_>_div]:justify-center [&_>_div]:pt-[8px] [&_strong]:text-[11px] [&_strong]:text-[white]
                  [&_strong]:font-semibold
                ">
                  <div style={{ height: `${p.percent}%`, background: p.color }}>
                    <strong>{p.count}</strong>
                  </div>
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
          <div className="
            pipeline-foot [border-top:1px_solid_#eeedf2] py-[13px] px-[20px] flex justify-between text-[#a1a1ac]
            text-[8px] [&_>_span]:flex [&_>_span]:items-center [&_>_span]:gap-[5px] [&_i]:h-[5px] [&_i]:w-[5px]
            [&_i]:bg-[#adbd80] [&_i]:rounded-[50%] [&_i]:[display:inline-block] [&_>_span:last-child_i]:bg-[none]
            [&_>_span:last-child_i]:w-[auto] [&_>_span:last-child_i]:text-[12px]
          ">
            <span>
              <i /> Your pipeline is looking healthy
            </span>
            <span>
              October 2026 <Icon name="arrow-down-s-line" />
            </span>
          </div>
        </Panel>
        <Panel
          title="Active openings"
          subtitle="Big opportunities for the right people."
          action={
            <Link className="
              text-link text-[9px] inline-flex items-center gap-[7px] text-[#8c7bb5] whitespace-nowrap
              [&:hover]:text-[#55468c] [&_i]:text-[13px] max-[960px]:text-[8px] max-[700px]:text-[9px]
            " to="/jobs">
              View all jobs <Icon name="arrow-right-up-line" />
            </Link>
          }
        >
          <div className="opening-list py-0 px-[20px] max-[960px]:py-0 max-[960px]:px-[15px] max-[700px]:py-0 max-[700px]:px-[20px]">
            {jobs.slice(0, 4).map((j) => (
              <Link className="
                opening flex items-center gap-[12px] py-[12px] px-0 [border-bottom:1px_solid_#f0f0f4] [&:first-child]:pt-0
                [&:last-child]:[border:none] [&_h3]:text-[11px] [&_h3]:font-semibold [&_p]:text-[8px] [&_p]:text-[#a2a2ac]
                [&_p]:mt-[5px] [&_p_span]:py-0 [&_p_span]:px-[7px] [&_>_i]:text-[14px] [&_>_i]:text-[#b0afbb]
                [&_>_i]:ml-[2px] [&:hover_h3]:text-[#7863ac] min-[1500px]:py-[16px] min-[1500px]:px-0
                min-[1500px]:[&_h3]:text-[13px] min-[1500px]:[&_p]:text-[9px] max-[960px]:gap-[8px]
                max-[960px]:[&_h3]:text-[10px] max-[960px]:[&_p]:text-[7px] max-[960px]:[&_>_i]:ml-auto
                max-[700px]:py-[15px] max-[700px]:px-0 max-[700px]:gap-[12px] max-[700px]:[&_h3]:text-[12px]
                max-[700px]:[&_p]:text-[9px] max-[700px]:[&_>_i]:ml-0
              " to={`/jobs/${j.id}`} key={j.id}>
                <span className={`
                  job-icon [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa] [&.blue]:text-[#7f9cc8]
                  [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6] [&.green]:text-[#8b9c70]
                  [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] w-[36px] h-[36px] rounded-[8px] inline-flex items-center
                  justify-center shrink-0 [&_i]:text-[17px]
                 ${j.color}`}>
                  <Icon name={j.icon} />
                </span>
                <div>
                  <h3>{j.title}</h3>
                  <p>
                    {j.department}
                    <span>·</span>
                    {j.location}
                  </p>
                </div>
                <div className="
                  opening-count ml-auto text-right leading-[1.3] [&_strong]:block [&_strong]:text-[11px]
                  [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:text-[#acacb5] max-[960px]:hidden
                  max-[700px]:block
                ">
                  <strong>{j.applicants}</strong>
                  <small>applicants</small>
                </div>
                <Icon name="arrow-right-s-line" />
              </Link>
            ))}
          </div>
          <Link className="
            opening-footer flex items-center justify-center gap-[7px] text-[9px] text-[#9990ac] bg-[#fdfcfe]
            [border-top:1px_solid_#efedf4] p-[11px] [&_i]:text-[12px] max-[700px]:text-[10px] max-[700px]:p-[14px]
          " to="/jobs/new">
            <Icon name="add-line" /> Make room for your next great hire
          </Link>
        </Panel>
      </div>
      <div className="overview-bottom grid grid-cols-[1.35fr_1fr] gap-[22px] items-start max-[1200px]:grid-cols-[1fr] max-[1200px]:gap-[20px]">
        <Panel
          title="Recent applications"
          subtitle="Fresh talent, new possibilities."
          action={
            <Link className="
              text-link text-[9px] inline-flex items-center gap-[7px] text-[#8c7bb5] whitespace-nowrap
              [&:hover]:text-[#55468c] [&_i]:text-[13px] max-[960px]:text-[8px] max-[700px]:text-[9px]
            " to="/applications">
              View all <Icon name="arrow-right-up-line" />
            </Link>
          }
        >
          <CandidateTable candidates={candidates.slice(0, 4)} compact />
          <div className="
            table-footer [border-top:1px_solid_#efeff3] flex items-center py-[14px] px-[20px] text-[#a7a6b0]
            text-[8px] gap-[5px] [&_>_span:first-child]:mr-auto max-[700px]:text-[7px]
          ">
            <span>Showing 4 of 248 applications</span>
            <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> Updated just now
          </div>
        </Panel>
        <div className="
          right-stack [&_.panel-heading]:mb-[15px] flex flex-col gap-[20px] max-[1200px]:grid
          max-[1200px]:grid-cols-[1.1fr_1fr] max-[700px]:flex
        ">
          <Panel
            title="Upcoming interviews"
            action={
              <Link className="
                text-link text-[9px] inline-flex items-center gap-[7px] text-[#8c7bb5] whitespace-nowrap
                [&:hover]:text-[#55468c] [&_i]:text-[13px] max-[960px]:text-[8px] max-[700px]:text-[9px]
              " to="/interviews">
                <Icon name="arrow-right-up-line" />
              </Link>
            }
          >
            <div className="today-label flex justify-between text-[7px] text-[#a3a3ad] py-0 px-[20px] tracking-[0.5px] [&_>_span:last-child]:tracking-[0]">
              <span>TODAY, OCT 23</span>
              <span>3 interviews</span>
            </div>
            <InterviewList />
          </Panel>
          <Panel
            title="Hiring activity"
            action={<span className="subtle-label text-[8px] text-[#aaa8b5]">Latest updates</span>}
          >
            <div className="activity-list [padding:0_20px_14px]">
              {activities.slice(0, 2).map((a) => (
                <div className="
                  activity flex gap-[9px] mt-[13px] items-start [&_p]:text-[8px] [&_p]:leading-[1.6] [&_p]:text-[#a09daa]
                  [&_strong]:text-[#7c7789] [&_strong]:font-semibold [&_small]:text-[7px] [&_small]:block
                  [&_small]:text-[#bbb8c2] [&_small]:mt-[3px] min-[1500px]:[&_p]:text-[10px]
                  min-[1500px]:[&_small]:text-[8px]
                " key={a.name}>
                  <span className={`
                    activity-icon [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa]
                    [&.blue]:text-[#7f9cc8] [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6]
                    [&.green]:text-[#8b9c70] [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] w-[24px] h-[24px] rounded-[50%]
                    grid place-items-center shrink-0 [&_i]:text-[12px]
                   ${a.color}`}>
                    <Icon name={a.icon} />
                  </span>
                  <div>
                    <p>
                      <strong>{a.name}</strong> {a.text}
                    </p>
                    <small>{a.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}
