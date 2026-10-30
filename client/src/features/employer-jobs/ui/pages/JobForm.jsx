import { Link, useParams } from "react-router";
import { jobs } from "../../state/mockJobs";
import { candidates } from "../../../employer-applications/state/mockCandidates";
import { Icon, Button, Field, Panel, PageTitle } from "../../../../shared/ui/components/index";

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
