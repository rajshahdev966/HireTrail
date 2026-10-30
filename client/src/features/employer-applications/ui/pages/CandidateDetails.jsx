import { Link, useParams } from "react-router";
import { candidates } from "../../state/mockCandidates";
import { Icon, Button, Avatar, Badge, Field, Panel, EmptyState } from "../../../../shared/ui/components/index";

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
