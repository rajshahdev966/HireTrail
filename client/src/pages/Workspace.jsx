import { Link, useParams } from "react-router";
import { jobs, candidates, pipeline, interviews } from "../data/mock";
import {
  Icon,
  Button,
  Avatar,
  Badge,
  Field,
  Panel,
  PageTitle,
  Filters,
  CandidateTable,
  CandidateCard,
  EmptyState,
} from "../components/ui";
import { InterviewList } from "./Overview";
export function Jobs() {
  return (
    <>
      <PageTitle
        eyebrow="MAKE ROOM FOR POSSIBILITY"
        title="Find your team's next chapter."
        description="Every great hire starts with an opportunity."
      >
        <Button to="/careers" icon="external-link-line">
          View careers page
        </Button>
        <Button to="/jobs/new" variant="primary" icon="add-line">
          Create a job
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
        <Link className="selected" to="/jobs">
          All jobs <span>08</span>
        </Link>
        <span>
          Active <b>04</b>
        </span>
        <span>
          Drafts <b>02</b>
        </span>
        <span>
          Closed <b>02</b>
        </span>
      </div>
      <Filters search="Search job titles or keywords..." />
      <div className="job-grid grid grid-cols-[repeat(3,_1fr)] gap-[20px] max-[1200px]:grid-cols-[1fr_1fr] max-[700px]:grid-cols-[1fr]">
        {jobs.map((j) => (
          <article className="
            job-card [&_.job-icon]:w-[41px] [&_.job-icon]:h-[41px] bg-[#fff] [border:1px_solid_#e5e4ed] rounded-[10px]
            p-[23px] [transition:box-shadow_0.2s,_transform_0.2s] [&:hover]:shadow-[0_8px_24px_#39304f07]
            [&:hover]:[transform:translateY(-3px)] [&_h2]:text-[18px] [&_h2]:[margin:24px_0_7px] [&_>_p]:text-[11px]
            [&_>_p]:text-[#9992a3] [&_footer]:flex [&_footer]:justify-between [&_footer]:gap-[8px]
            [&_footer]:[border-top:1px_solid_#efedf3] [&_footer]:mt-[25px] [&_footer]:pt-[18px] [&_footer]:text-[9px]
            [&_footer]:text-[#9991a4] [&_footer_>_span]:flex [&_footer_>_span]:items-center
            [&_footer_>_span]:gap-[5px] [&_footer_a]:flex [&_footer_a]:items-center [&_footer_a]:gap-[5px]
            [&_footer_i]:text-[13px] [&_footer_a]:text-[#8270ac]
          " key={j.id}>
            <div className="flex justify-between">
              <span className={`
                job-icon [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa] [&.blue]:text-[#7f9cc8]
                [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6] [&.green]:text-[#8b9c70]
                [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] w-[36px] h-[36px] rounded-[8px] inline-flex items-center
                justify-center shrink-0 [&_i]:text-[17px]
               ${j.color}`}>
                <Icon name={j.icon} />
              </span>
              <Badge>{j.status}</Badge>
            </div>
            <Link to={`/jobs/${j.id}`}>
              <h2>{j.title}</h2>
            </Link>
            <p>{j.department}</p>
            <div className="
              job-meta flex gap-[17px] flex-wrap text-[10px] text-[#96909f] my-[20px] mx-0 [&_span]:flex
              [&_span]:items-center [&_span]:gap-[6px] [&_i]:text-[14px]
            ">
              <span>
                <Icon name="map-pin-line" />
                {j.location}
              </span>
              <span>
                <Icon name="time-line" />
                {j.type}
              </span>
            </div>
            <div className="job-salary text-[#6d667a] text-[12px] [&_small]:text-[#aba6b4] [&_small]:text-[9px]">
              {j.salary}
              <small> / year</small>
            </div>
            <footer>
              <span>
                <Icon name="group-line" /> <strong>{j.applicants}</strong>{" "}
                applicants
              </span>
              <Link to={`/jobs/${j.id}`}>
                View details <Icon name="arrow-right-line" />
              </Link>
            </footer>
          </article>
        ))}
      </div>
    </>
  );
}
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
export function CandidateDetails() {
  const { id } = useParams();
  const c = candidates.find((c) => c.id === id);
  if (!c)
    return (
      <EmptyState
        title="Candidate not found"
        description="Choose a candidate from the applications directory."
      />
    );
  return (
    <>
      <Link className="back-link inline-flex gap-[7px] items-center text-[10px] text-[#9c8ba9] mb-[24px] [&_i]:text-[13px] " to="/applications">
        <Icon name="arrow-left-line" /> All candidates
      </Link>
      <div className="
        profile-hero max-[700px]:[&_.btn]:text-[9px] max-[700px]:[&_.avatar.large]:w-[64px]
        max-[700px]:[&_.avatar.large]:h-[64px] flex items-center gap-[20px] mb-[25px] [&_h1]:text-[28px]
        [&_p]:text-[11px] [&_p]:text-[#9d93a7] [&_p]:my-[8px] [&_p]:mx-0 [&_p_span]:py-0 [&_p_span]:px-[7px]
        [&_a:not(.btn)]:text-[10px] [&_a:not(.btn)]:text-[#8e79b2] max-[1200px]:flex-wrap max-[700px]:gap-[14px]
        max-[700px]:[&_h1]:text-[24px] max-[700px]:[&_p]:text-[9px] max-[700px]:[&_a:not(.btn)]:text-[9px]
      ">
        <Avatar person={c} size="large" />
        <div>
          <div className="flex items-center gap-3">
            <h1>{c.name}</h1>
            <Badge>{c.stage}</Badge>
          </div>
          <p>
            {c.role} <span>·</span> San Francisco, CA
          </p>
          <a href={`mailto:${c.email}`}>{c.email}</a>
        </div>
        <div className="ml-auto flex gap-2">
          <Button icon="more-2-fill" aria-label="More options" />
          <Button icon="mail-line">Send email</Button>
          <Button variant="primary" icon="arrow-right-line">
            Move to next stage
          </Button>
        </div>
      </div>
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
        <span className="selected">Profile</span>
        <span>Application history</span>
        <span>
          Evaluations <b>3</b>
        </span>
        <span>
          Documents <b>2</b>
        </span>
      </div>
      <div className="details-grid grid grid-cols-[1.8fr_1fr] gap-[24px] max-[1200px]:grid-cols-[1.5fr_1fr] max-[700px]:grid-cols-[1fr]">
        <div className="space-y-6">
          <Panel title="A little about me">
            <p className="body-copy text-[12px] leading-[1.9] text-[#9a90a4] ">
              I’m a thoughtful, detail-oriented {c.role.toLowerCase()} with{" "}
              {c.experience} of experience turning complex problems into clear,
              human experiences. I love collaborating with ambitious teams to
              create work that makes a meaningful difference.
            </p>
            <h3 className="section-subtitle text-[12px] mt-[26px] mb-[13px]">Skills & expertise</h3>
            <div className="
              skill-tags flex gap-[4px] flex-wrap mt-[15px] [&_>_span]:text-[7px] [&_>_span]:bg-[#f5f3f8]
              [&_>_span]:[border:1px_solid_#eeebf3] [&_>_span]:py-[4px] [&_>_span]:px-[6px] [&_>_span]:rounded-[4px]
              [&_>_span]:text-[#9a8daa] large-tags [&_>_span]:text-[10px] [&_>_span]:py-[7px] [&_>_span]:px-[10px]
            ">
              {[...c.skills, "Collaboration", "Problem solving"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <h3 className="section-subtitle text-[12px] mt-[26px] mb-[13px]">Links & documents</h3>
            <div className="document-links max-[700px]:[&_.btn]:text-[9px] flex gap-[8px] flex-wrap">
              <Button icon="file-pdf-2-line">
                Resume.pdf <Icon name="download-line" />
              </Button>
              <Button icon="global-line">
                Portfolio <Icon name="external-link-line" />
              </Button>
              <Button icon="linkedin-box-line">
                LinkedIn <Icon name="external-link-line" />
              </Button>
            </div>
          </Panel>
          <Panel title="Experience">
            <div className="
              experience [&_.body-copy]:mt-[12px] [&_.body-copy]:text-[11px] flex gap-[15px] my-0 mx-[23px]
              [padding:0_0_23px] [&_h3]:text-[13px] [&_p:not(.body-copy)]:text-[11px]
              [&_p:not(.body-copy)]:text-[#93869e] [&_p:not(.body-copy)]:my-[5px] [&_p:not(.body-copy)]:mx-0
              [&_small]:text-[9px] [&_small]:text-[#b2a7bc]
            ">
              <span className="
                company-mark bg-[#ede9f5] text-[#8271ac] rounded-[8px] h-[37px] w-[37px] grid place-items-center
                text-[23px] font-bold shrink-0 [&.second]:bg-[#eaf0e3] [&.second]:text-[#929e79]
              ">f.</span>
              <div>
                <h3>Senior {c.role.replace("Senior ", "")}</h3>
                <p>Fable · Full-time</p>
                <small>Jan 2023 – Present · San Francisco, CA</small>
                <p className="body-copy text-[12px] leading-[1.9] text-[#9a90a4] ">
                  Partnering with cross-functional teams to build intuitive
                  products, improve customer experiences, and bring new ideas to
                  life.
                </p>
              </div>
            </div>
            <div className="
              experience [&_.body-copy]:mt-[12px] [&_.body-copy]:text-[11px] flex gap-[15px] my-0 mx-[23px]
              [padding:0_0_23px] [&_h3]:text-[13px] [&_p:not(.body-copy)]:text-[11px]
              [&_p:not(.body-copy)]:text-[#93869e] [&_p:not(.body-copy)]:my-[5px] [&_p:not(.body-copy)]:mx-0
              [&_small]:text-[9px] [&_small]:text-[#b2a7bc]
            ">
              <span className="
                company-mark bg-[#ede9f5] text-[#8271ac] rounded-[8px] h-[37px] w-[37px] grid place-items-center
                text-[23px] font-bold shrink-0 [&.second]:bg-[#eaf0e3] [&.second]:text-[#929e79] second
              ">L</span>
              <div>
                <h3>{c.role.replace("Senior ", "")}</h3>
                <p>Linear Studio · Full-time</p>
                <small>Jun 2020 – Dec 2022 · Remote</small>
                <p className="body-copy text-[12px] leading-[1.9] text-[#9a90a4] ">
                  Helped a small team scale its product and establish a
                  consistent, thoughtful customer experience.
                </p>
              </div>
            </div>
          </Panel>
          <Panel
            title="Internal evaluation"
            action={
              <span className="private-label flex items-center gap-[5px] text-[8px] text-[#b0a4b9] [&_i]:text-[11px]">
                <Icon name="lock-line" /> Only your team
              </span>
            }
          >
            <div className="
              evaluation [&_.body-copy]:text-[11px] [&_.body-copy]:mb-[9px] flex gap-[12px] [padding:0_23px_22px]
              [&_strong]:text-[11px] [&_small]:block [&_small]:text-[9px] [&_small]:text-[#b1a5ba]
              [&_small]:[margin:5px_0_10px]
            ">
              <Avatar person={{ avatar: "https://i.pravatar.cc/80?img=33" }} />
              <div>
                <strong>Alex Morgan</strong>
                <small>Oct 22, 2026 · Hiring manager</small>
                <p className="body-copy text-[12px] leading-[1.9] text-[#9a90a4] ">
                  Strong attention to detail and a clear approach to solving
                  problems. Great communication throughout our conversation.
                  Would be a wonderful addition to the team.
                </p>
                <span className="stars text-[#b9a571] tracking-[2px]">★★★★★</span>{" "}
                <span className="muted text-[#a59bab] text-[10px]"> Strong yes</span>
              </div>
            </div>
            <Field
              label="Add an internal note"
              type="textarea"
              placeholder="Share your thoughts with the hiring team..."
            />
            <div className="text-right mt-4">
              <Button variant="primary">Add note</Button>
            </div>
          </Panel>
        </div>
        <div className="space-y-6">
          <Panel title="Application overview">
            <dl className="
              detail-list [padding:0_23px_10px] [&_div]:flex [&_div]:justify-between [&_div]:gap-[15px]
              [&_div]:py-[12px] [&_div]:px-0 [&_div]:[border-bottom:1px_solid_#f0ecf4] [&_div]:text-[10px]
              [&_div:last-child]:[border-bottom:0] [&_dt]:text-[#ad9eb9] [&_dd]:text-[#81728f] [&_dd]:text-right
              [&_dd]:max-w-[155px]
            ">
              <div>
                <dt>Applied for</dt>
                <dd>{c.role}</dd>
              </div>
              <div>
                <dt>Applied on</dt>
                <dd>{c.date}</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>Careers page</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{c.experience}</dd>
              </div>
              <div>
                <dt>Overall rating</dt>
                <dd className="rating text-[10px] text-[#bca26b] inline-flex items-center gap-[4px] [&_i]:text-[11px]">
                  <Icon name="star-fill" /> {c.rating} / 5
                </dd>
              </div>
              <div>
                <dt>Hiring manager</dt>
                <dd>Alex Morgan</dd>
              </div>
            </dl>
          </Panel>
          <Panel title="Candidate journey">
            <div className="timeline [padding:0_23px_10px]">
              {[
                {
                  title: "Application received",
                  time: c.date,
                  text: "Applied through your careers page",
                },
                {
                  title: "Resume reviewed",
                  time: "Oct 22, 2026",
                  text: "Reviewed by Alex Morgan",
                },
                {
                  title: "Initial conversation",
                  time: "Oct 22, 2026",
                  text: "A great first introduction",
                },
                {
                  title: "Portfolio review",
                  time: "Today, 10:30 AM",
                  text: "Google Meet · 45 minutes",
                },
              ].map((t, i) => (
                <div
                  key={t.title}
                  className={`
                    timeline-item flex gap-[13px] relative pb-[28px] [&:not(:last-child):before]:[content:""]
                    [&:not(:last-child):before]:absolute [&:not(:last-child):before]:w-[1px]
                    [&:not(:last-child):before]:bg-[#e7e1ef] [&:not(:last-child):before]:top-[23px]
                    [&:not(:last-child):before]:bottom-[0] [&:not(:last-child):before]:left-[11px] [&_>_span]:w-[24px]
                    [&_>_span]:h-[24px] [&_>_span]:grid [&_>_span]:place-items-center [&_>_span]:rounded-[50%]
                    [&_>_span]:bg-[#ecf1e3] [&_>_span]:text-[#96a777] [&_>_span]:shrink-0 [&_>_span_i]:text-[12px]
                    [&.current_>_span]:bg-[#eee8f7] [&.current_>_span]:text-[#9d86bf] [&_h3]:text-[11px] [&_h3]:font-[550]
                    [&_small]:text-[8px] [&_small]:text-[#b4a7bf] [&_small]:block [&_small]:mt-[5px] [&_p]:text-[9px]
                    [&_p]:text-[#a396af] [&_p]:mt-[6px]
                   ${i === 3 ? "current [&_.talent-timeline-node]:bg-[#ede5f5] [&_.talent-timeline-node]:text-[#a385bb] [&_.talent-timeline-node]:border-[#d8c5e8] [&_.talent-timeline-node]:shadow-[0_0_0_5px_#f7f2fa]" : ""}`}
                >
                  <span>
                    <Icon name={i === 3 ? "time-line" : "check-line"} />
                  </span>
                  <div>
                    <h3>{t.title}</h3>
                    <small>{t.time}</small>
                    <p>{t.text}</p>
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
export function JobForm() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  return (
    <>
      <Link className="back-link inline-flex gap-[7px] items-center text-[10px] text-[#9c8ba9] mb-[24px] [&_i]:text-[13px] " to="/jobs">
        <Icon name="arrow-left-line" /> All job openings
      </Link>
      <PageTitle
        eyebrow="THE START OF SOMETHING GREAT"
        title={job ? "Edit your opportunity." : "Make room for someone great."}
        description="Tell your next teammate what makes this role special."
      >
        <Button to="/jobs">Cancel</Button>
        <Button>Save as draft</Button>
        <Button variant="primary">
          {job ? "Save changes" : "Publish job"}{" "}
          <Icon name="arrow-right-up-line" />
        </Button>
      </PageTitle>
      <div className="form-layout grid grid-cols-[1.8fr_1fr] gap-[24px] max-[1200px]:grid-cols-[1.6fr_1fr] max-[960px]:grid-cols-[1fr]">
        <div className="space-y-6">
          <Panel
            title="The essentials"
            subtitle="A clear introduction to the opportunity."
          >
            <div className="
              form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
              max-[700px]:gap-[19px_13px]
            ">
              <Field
                label="Job title *"
                placeholder="e.g. Senior Product Designer"
                defaultValue={job?.title}
                wide
              />
              <Field
                label="Department *"
                options={[
                  "Design",
                  "Engineering",
                  "Marketing",
                  "Customer Success",
                ]}
                defaultValue={job?.department}
              />
              <Field
                label="Employment type *"
                options={["Full-time", "Part-time", "Contract", "Internship"]}
              />
              <Field
                label="Location *"
                placeholder="e.g. San Francisco, CA"
                defaultValue={job?.location}
              />
              <Field
                label="Workplace type"
                options={["Remote", "Hybrid", "On-site"]}
              />
              <Field label="Minimum salary" placeholder="$90,000" />
              <Field label="Maximum salary" placeholder="$120,000" />
            </div>
          </Panel>
          <Panel title="The story behind the role">
            <div className="
              form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
              max-[700px]:gap-[19px_13px]
            ">
              <Field
                label="About the role *"
                type="textarea"
                placeholder="What will this person do? What makes this role exciting?"
                wide
                defaultValue={
                  job
                    ? `We're looking for a ${job.title} to help us create thoughtful products that people love. You'll collaborate with a small, ambitious team and have a real impact from day one.`
                    : undefined
                }
              />
              <Field
                label="Responsibilities *"
                type="textarea"
                placeholder="Describe the meaningful work they'll take on..."
                wide
              />
              <Field
                label="Requirements *"
                type="textarea"
                placeholder="Share the skills and experience that will help them succeed..."
                wide
              />
              <Field
                label="Benefits & perks"
                type="textarea"
                placeholder="What makes your team a great place to work?"
                wide
              />
            </div>
          </Panel>
        </div>
        <Panel
          className="
            form-aside [&_.panel-heading_h2]:text-[19px] [&_.panel-heading_h2]:leading-[1.4]
            [&_.info-box]:[margin:0_23px_23px] max-[960px]:[&_.aside-spark]:hidden self-start bg-[#f6f4ec]
            max-[960px]:max-w-[none]
          "
          title="A thoughtful job post goes a long way."
        >
          <span className="aside-spark text-[70px] text-[#bbc78e] block py-0 px-[23px] leading-[1.2] ">✳</span>
          <p className="body-copy text-[12px] leading-[1.9] text-[#9a90a4] ">
            The best candidates are looking for more than a job title. Help them
            picture their future with your team.
          </p>
          <ul className="
            tips-list [padding:0_23px_12px] list-none text-[#a49a8c] text-[10px] [&_li]:flex [&_li]:items-center
            [&_li]:gap-[8px] [&_li]:py-[10px] [&_li]:px-0 [&_i]:text-[#a6b17f] [&_i]:text-[15px] max-[960px]:grid
            max-[960px]:grid-cols-[1fr_1fr] max-[700px]:grid-cols-[1fr]
          ">
            <li>
              <Icon name="checkbox-circle-line" /> Keep your title clear and
              specific
            </li>
            <li>
              <Icon name="checkbox-circle-line" /> Share a realistic salary
              range
            </li>
            <li>
              <Icon name="checkbox-circle-line" /> Focus on the skills that
              matter
            </li>
            <li>
              <Icon name="checkbox-circle-line" /> Let your culture shine
              through
            </li>
          </ul>
          <div className="
            info-box bg-[#f2f1e8] [border:1px_solid_#e8e6d8] rounded-[7px] p-[15px] flex items-center gap-[8px]
            text-[#a49d87] text-[10px] leading-[1.7]
          ">
            <Icon name="global-line" /> Published jobs appear on your public
            careers page.
          </div>
        </Panel>
      </div>
    </>
  );
}
export function AddCandidate() {
  return (
    <>
      <PageTitle
        eyebrow="A NEW INTRODUCTION"
        title="Meet your next possibility."
        description="Add a candidate to your talent directory."
      >
        <Button to="/applications">Cancel</Button>
        <Button variant="primary">Add candidate</Button>
      </PageTitle>
      <Panel title="Candidate information" className="max-w-4xl">
        <div className="
          form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
          max-[700px]:gap-[19px_13px]
        ">
          <Field label="First name *" placeholder="Olivia" />
          <Field label="Last name *" placeholder="Rhye" />
          <Field
            label="Email address *"
            type="email"
            placeholder="olivia@example.com"
          />
          <Field
            label="Phone number"
            type="tel"
            placeholder="+1 (555) 000-0000"
          />
          <Field label="Job opening" options={jobs.map((j) => j.title)} />
          <Field label="Hiring stage" options={pipeline.map((p) => p.name)} />
          <Field label="Portfolio URL" placeholder="https://" />
          <Field label="Resume" type="file" />
          <Field
            label="Notes"
            type="textarea"
            placeholder="A little context for your team..."
            wide
          />
        </div>
      </Panel>
    </>
  );
}
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
export function InterviewForm() {
  return (
    <>
      <PageTitle
        title="Start a great conversation."
        description="Set aside time to meet your next teammate."
      >
        <Button to="/interviews">Cancel</Button>
        <Button variant="primary">Schedule interview</Button>
      </PageTitle>
      <Panel title="Interview details" className="max-w-4xl">
        <div className="
          form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
          max-[700px]:gap-[19px_13px]
        ">
          <Field label="Candidate" options={candidates.map((c) => c.name)} />
          <Field
            label="Interview type"
            options={[
              "Portfolio review",
              "Technical interview",
              "Culture conversation",
              "Initial screening",
            ]}
          />
          <Field label="Date" type="date" />
          <Field label="Time" type="time" />
          <Field
            label="Duration"
            options={["30 minutes", "45 minutes", "60 minutes"]}
          />
          <Field
            label="Interviewer"
            options={["Alex Morgan", "Sarah Chen", "James Wilson"]}
          />
          <Field
            label="Meeting link"
            placeholder="https://meet.google.com/..."
            wide
          />
          <Field
            label="Notes"
            type="textarea"
            placeholder="Anything your team should prepare?"
            wide
          />
        </div>
      </Panel>
    </>
  );
}
export function Settings() {
  return (
    <>
      <PageTitle
        eyebrow="MAKE YOURSELF AT HOME"
        title="Your workspace, your way."
        description="The details that make HireTrail feel like your team."
      >
        <Button variant="primary" icon="check-line">
          Save changes
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
        <span className="selected">Company profile</span>
        <a href="#preferences">Account preferences</a>
        <a href="#recruitment">Recruitment</a>
      </div>
      <div className="
        settings-layout grid grid-cols-[1fr_2fr] gap-[32px] [&_>_div:not(.panel)_>_h2]:text-[16px]
        [&_>_div:not(.panel)_>_p]:text-[11px] [&_>_div:not(.panel)_>_p]:leading-[1.8]
        [&_>_div:not(.panel)_>_p]:text-[#aa9ab6] [&_>_div:not(.panel)_>_p]:mt-[10px]
        max-[960px]:grid-cols-[1fr_2fr] max-[700px]:grid-cols-[1fr] max-[700px]:gap-[19px]
        max-[700px]:[&_>_div:not(.panel)]:mt-[14px] max-[700px]:[&_>_div:not(.panel)_>_p]:text-[10px]
        max-[700px]:[&_>_div:not(.panel)_>_p_br]:hidden
      ">
        <div>
          <h2>Company profile</h2>
          <p>
            A little introduction to your company.
            <br />
            These details appear on your careers page.
          </p>
        </div>
        <Panel title="Company details">
          <div className="
            company-upload [&_.workspace-logo]:w-[60px] [&_.workspace-logo]:h-[60px] [&_.workspace-logo]:text-[48px]
            [&_.workspace-logo]:rounded-[12px] [&_.workspace-logo_small]:text-[21px]
            [&_.workspace-logo_small]:right-[9px] flex gap-[18px] items-center [margin:0_23px_25px]
            [&_p]:text-[#b5a6c0] [&_p]:text-[9px] [&_p]:mt-[8px]
          ">
            <span className="
              workspace-logo bg-[#e5edcf] [border:1px_solid_#d4dfbc] rounded-[7px] w-[35px] h-[35px] inline-flex
              items-center justify-center text-[30px] font-[750] tracking-[-4px] shrink-0 relative pr-[5px]
              [&_small]:absolute [&_small]:text-[15px] [&_small]:right-[5px] [&_small]:top-[0]
            ">
              a<small>✳</small>
            </span>
            <div>
              <Button icon="upload-2-line">Upload logo</Button>
              <p>SVG, PNG or JPG. Recommended 400 × 400 px.</p>
            </div>
          </div>
          <div className="
            form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
            max-[700px]:gap-[19px_13px]
          ">
            <Field label="Company name" defaultValue="Acme Studio" />
            <Field label="Company website" defaultValue="https://acme.studio" />
            <Field
              label="Industry"
              options={[
                "Design & Technology",
                "Software",
                "Finance",
                "Education",
              ]}
            />
            <Field
              label="Company size"
              options={[
                "11–50 employees",
                "1–10 employees",
                "51–200 employees",
              ]}
            />
            <Field
              label="About your company"
              type="textarea"
              wide
              defaultValue="We're a small, ambitious team building thoughtful digital experiences. We believe great work starts with great people, fresh perspectives, and a little curiosity."
            />
            <Field label="Headquarters" defaultValue="San Francisco, CA" />
            <Field
              label="Contact email"
              defaultValue="hello@acme.studio"
              type="email"
            />
          </div>
        </Panel>
        <div id="preferences">
          <h2>Account preferences</h2>
          <p>Make your workday a little more comfortable.</p>
        </div>
        <Panel title="Personal preferences">
          <div className="
            form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
            max-[700px]:gap-[19px_13px]
          ">
            <Field label="Full name" defaultValue="Alex Morgan" />
            <Field
              label="Email address"
              type="email"
              defaultValue="alex@acme.studio"
            />
            <Field
              label="Timezone"
              options={[
                "Asia/Kolkata (GMT +5:30)",
                "America/New_York (GMT -4:00)",
                "Europe/London (GMT +1:00)",
              ]}
            />
            <Field
              label="Language"
              options={["English (US)", "English (UK)"]}
            />
          </div>
          <label className="
            checkbox-setting [margin:0_23px_25px] flex gap-[11px] items-center [&_strong]:text-[10px]
            [&_strong]:text-[#95829f] [&_strong]:block [&_small]:text-[9px] [&_small]:text-[#b4a3bf]
            [&_small]:mt-[5px] [&_small]:block
          ">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>A helpful weekly recap</strong>
              <small>
                Get a summary of your hiring activity in your inbox.
              </small>
            </span>
          </label>
        </Panel>
        <div id="recruitment">
          <h2>Recruitment settings</h2>
          <p>A consistent experience for every candidate.</p>
        </div>
        <Panel title="Hiring preferences">
          <div className="
            form-grid grid grid-cols-[1fr_1fr] gap-[22px_20px] [padding:0_23px_25px] max-[700px]:[padding:0_18px_22px]
            max-[700px]:gap-[19px_13px]
          ">
            <Field
              label="Default hiring manager"
              options={["Alex Morgan", "Sarah Chen"]}
            />
            <Field
              label="Application confirmation"
              options={["Send a thank-you email", "Do not send automatically"]}
            />
          </div>
          <label className="
            checkbox-setting [margin:0_23px_25px] flex gap-[11px] items-center [&_strong]:text-[10px]
            [&_strong]:text-[#95829f] [&_strong]:block [&_small]:text-[9px] [&_small]:text-[#b4a3bf]
            [&_small]:mt-[5px] [&_small]:block
          ">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Show salary ranges on job posts</strong>
              <small>
                A little transparency makes a great first impression.
              </small>
            </span>
          </label>
        </Panel>
      </div>
    </>
  );
}
