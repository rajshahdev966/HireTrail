import { jobs } from "../../../employer-jobs/state/mockJobs";
import { pipeline } from "../../../employer-pipeline/state/mockPipeline";
import { Button, Field, Panel, PageTitle } from "../../../../shared/ui/components/index";

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
