import { useSearchParams } from "react-router";
import { Icon, Button } from "../../../../shared/ui/components/index";
import { careerJobs } from "../../../user-jobs/state/careerData";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { PreviewNotice } from "../../../../shared/ui/components/PreviewNotice";
import { ReferenceCard } from "../components/ReferenceCard";

export function ApplicationSuccess() {
  const [params] = useSearchParams();
  const job =
    careerJobs.find((j) => j.id === params.get("job")) || careerJobs[0];
  return (
    <div className="
      talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
      max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
      max-[560px]:pl-[20px] max-[560px]:pr-[20px] talent-success pt-[55px] pb-[65px] max-w-[820px] text-center
      [&_h1]:text-[49px] [&_h1]:tracking-[-1.8px] [&_h1]:mt-[18px] max-[560px]:pt-[40px] max-[560px]:pb-[40px]
      max-[560px]:[&_h1]:text-[43px]
    ">
      <span className="
        talent-success-mark grid place-items-center w-[64px] h-[64px] bg-[#eaf0da] [border:1px_solid_#d9e4c2]
        rounded-[50%] text-[#9aaa7e] [margin:0_auto_25px] relative [&_>_i:first-child]:text-[29px]
        [&_>_i:last-child]:absolute [&_>_i:last-child]:text-[36px] [&_>_i:last-child]:right-[-27px]
        [&_>_i:last-child]:top-[-17px] [&_>_i:last-child]:text-[#b0a0c2] [&_>_i:last-child]:not-italic
      ">
        <Icon name="check-line" />
        <i>✳</i>
      </span>
      <span className="
        talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
        max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
      ">EXAMPLE APPLICATION CONFIRMATION</span>
      <h1>
        A little hello.
        <br />
        <em>A new possibility.</em>
      </h1>
      <p className="talent-success-intro text-[11px] text-[#7d8b6e] leading-[1.9] mt-[20px] max-[560px]:text-[10px]">
        Here’s how your confirmation will look after applying.
        <br />
        Your next chapter starts with a thoughtful first step.
      </p>
      <div className="
        talent-success-card [margin:30px_auto_20px] bg-[#fff] [border:1px_solid_#e0e7d2] rounded-[10px] p-[26px]
        text-left max-[560px]:p-[20px] max-[560px]:mt-[25px]
      ">
        <div className="
          talent-success-job flex items-center gap-[12px] pb-[22px] [border-bottom:1px_solid_#e9eddf]
          [&_h2]:text-[17px] [&_h2]:font-medium [&_h2]:tracking-[-0.5px] [&_p]:text-[9px] [&_p]:text-[#80916b]
          [&_p]:mt-[5px] max-[560px]:flex-wrap max-[560px]:gap-[10px] max-[560px]:pb-[18px]
          max-[560px]:[&_h2]:text-[16px] max-[560px]:[&_p]:text-[8px]
        ">
          <CompanyMark company={job.company} />
          <div>
            <h2>{job.title}</h2>
            <p>
              {job.company.name} · {job.location} · {job.type}
            </p>
          </div>
          <span className="
            talent-status-pill inline-flex items-center gap-[6px] text-[9px] rounded-[5px] py-[5px] px-[9px]
            bg-[#efe9f6] text-[#89709f] whitespace-nowrap [&.applied]:bg-[#edf1e4] [&.applied]:text-[#7d925e]
            [&_>_span]:h-[4px] [&_>_span]:w-[4px] [&_>_span]:bg-[currentColor] [&_>_span]:rounded-[50%] applied
          ">Applied</span>
        </div>
        <ReferenceCard />
        <div className="
          talent-success-next pt-[24px] [&_h3]:text-[17px] [&_h3]:font-medium [&_h3]:tracking-[-0.3px]
          [&_ol]:list-none [&_ol]:p-0 [&_ol]:my-[20px] [&_ol]:mx-0 [&_li]:flex [&_li]:gap-[13px] [&_li]:mt-[18px]
          [&_li_>_span]:h-[24px] [&_li_>_span]:w-[24px] [&_li_>_span]:rounded-[50%]
          [&_li_>_span]:[border:1px_solid_#e0d8eb] [&_li_>_span]:bg-[#f5f0f8] [&_li_>_span]:text-[#9b81ad]
          [&_li_>_span]:grid [&_li_>_span]:place-items-center [&_li_>_span]:text-[8px] [&_li_>_span]:shrink-0
          [&_strong]:text-[11px] [&_strong]:font-semibold [&_strong]:text-[#74865d] [&_p]:text-[10px]
          [&_p]:text-[#7e9169] [&_p]:leading-[1.9] [&_p]:mt-[4px] max-[560px]:[&_h3]:text-[18px]
          max-[560px]:[&_li]:gap-[10px] max-[560px]:[&_li]:mt-[17px] max-[560px]:[&_p]:text-[10px]
          max-[560px]:[&_p]:leading-[1.9]
        ">
          <h3>What happens next?</h3>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>A little reassurance.</strong>
                <p>
                  In the connected experience, a confirmation and private
                  tracking link will arrive by email.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>A thoughtful review.</strong>
                <p>
                  The team will take a closer look at your experience and get in
                  touch with next steps.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Stay on the trail.</strong>
                <p>
                  Keep your reference safe and use your tracking link to follow
                  your progress.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="
          talent-success-actions max-[560px]:[&_.btn]:text-[10px] max-[560px]:[&_.btn]:w-full flex gap-[9px]
          [border-top:1px_solid_#e8eddd] pt-[22px] mt-[25px] [&_.primary]:flex-1 max-[560px]:flex-col
        ">
          <Button to={`/careers/track?job=${job.id}`} variant="primary">
            Preview application tracking <Icon name="arrow-right-line" />
          </Button>
          <Button to="/careers/jobs">Keep exploring</Button>
        </div>
      </div>
      <PreviewNotice>
        This is static confirmation content. No application was submitted and no
        email has been sent. The reference shown is illustrative.
      </PreviewNotice>
    </div>
  );
}
