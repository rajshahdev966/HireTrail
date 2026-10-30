import { Button, Field, Panel, PageTitle } from "../../../../shared/ui/components/index";

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
