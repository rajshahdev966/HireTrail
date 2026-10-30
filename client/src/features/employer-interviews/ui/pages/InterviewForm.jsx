import { candidates } from "../../../employer-applications/state/mockCandidates";
import { interviews } from "../../state/mockInterviews";
import { Button, Field, Panel, PageTitle } from "../../../../shared/ui/components/index";

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
