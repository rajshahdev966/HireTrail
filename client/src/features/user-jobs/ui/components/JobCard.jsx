import { Link } from "react-router";
import { Icon } from "../../../../shared/ui/components/index";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";

export function JobCard({ job, list = false }) {
  return (
    <article
      className={`
  talent-job-card [&_.talent-meta]:mt-[14px] max-[1100px]:[&_.talent-meta]:text-[8px]
  max-[1100px]:[&_.talent-meta]:gap-[9px] max-[800px]:[&_.talent-meta]:text-[9px]
  max-[800px]:[&_.talent-meta]:gap-[12px] max-[1100px]:[&_.talent-tags_>_span]:text-[7px]
  max-[1100px]:[&_.talent-tags_>_span]:py-[3px] max-[1100px]:[&_.talent-tags_>_span]:px-[5px]
  max-[560px]:[&_.talent-tags_>_span]:text-[8px] max-[560px]:[&_.talent-tags_>_span]:py-[4px]
  max-[560px]:[&_.talent-tags_>_span]:px-[7px] [&.is-list_.talent-job-top]:gap-[12px]
  max-[560px]:[&.is-list_.talent-job-top]:col-[1/-1] [&.is-list_.talent-job-top_.talent-featured]:hidden
  [&.is-list_.talent-job-body]:p-0 max-[560px]:[&.is-list_.talent-job-body]:col-[1]
  max-[560px]:[&.is-list_.talent-job-body]:row-[2] [&.is-list_.talent-job-body_>_.talent-kicker]:hidden
  [&.is-list_.talent-meta]:mt-[9px] max-[560px]:[&.is-list_.talent-meta]:text-[8px]
  max-[560px]:[&.is-list_.talent-meta]:gap-[9px] [&.is-list_.talent-tags]:hidden
  max-[800px]:[&.is-list_.talent-salary]:text-[9px] max-[560px]:[&.is-list_.talent-salary]:text-[9px]
  max-[560px]:[&.is-list_.talent-salary_small]:text-[7px] max-[560px]:[&.is-list_.talent-arrow]:h-[25px]
  max-[560px]:[&.is-list_.talent-arrow]:w-[25px] min-w-[0] bg-[#fff] [border:1px_solid_#e4e5de]
  rounded-[9px] [padding:23px_21px_0] [transition:transform_0.2s,_box-shadow_0.2s,_border-color_0.2s]
  [&:hover]:[transform:translateY(-3px)] [&:hover]:shadow-[0_8px_25px_#30322e06] [&:hover]:border-[#c9c2d6]
  [&_h3]:text-[19px] [&_h3]:leading-[1.25] [&_h3]:tracking-[-0.55px] [&_h3]:font-[550] [&_h3]:mt-[6px]
  [&_h3_a:hover]:text-[#77608f] [&_>_footer]:flex [&_>_footer]:items-center [&_>_footer]:justify-between
  [&_>_footer]:[border-top:1px_solid_#eceee4] [&_>_footer]:mt-[25px] [&_>_footer]:py-[15px]
  [&_>_footer]:px-0 [&_>_footer]:gap-[12px] [&.is-list]:grid [&.is-list]:grid-cols-[1fr_1.45fr_1fr]
  [&.is-list]:items-center [&.is-list]:py-[20px] [&.is-list]:px-0 [&.is-list]:bg-[transparent]
  [&.is-list]:[border:0] [&.is-list]:[border-bottom:1px_solid_#e2e5d8] [&.is-list]:rounded-[0]
  [&.is-list]:gap-[20px] [&.is-list]:shadow-[none] [&.is-list:hover]:[transform:none]
  [&.is-list:hover]:bg-[#f5f5ee] [&.is-list_h3]:text-[18px] [&.is-list_>_footer]:p-0
  [&.is-list_>_footer]:m-0 [&.is-list_>_footer]:[border:0] [&.is-list_>_footer]:justify-end
  [&.is-list_>_footer]:gap-[30px] min-[1450px]:[padding:26px_24px_0] min-[1450px]:[&_h3]:text-[22px]
  max-[1100px]:[padding:20px_17px_0] max-[1100px]:[&_h3]:text-[17px] max-[800px]:[padding:20px_18px_0]
  max-[800px]:[&:is(.talent-jobs-grid_>_.talent-job-card:last-child:nth-child(3))]:hidden
  max-[800px]:[&_h3]:text-[20px] max-[800px]:[&.is-list]:grid-cols-[1fr_1.2fr_0.9fr]
  max-[800px]:[&.is-list]:gap-[14px] max-[800px]:[&.is-list_h3]:text-[15px]
  max-[800px]:[&.is-list_>_footer]:gap-[12px]
  max-[560px]:[&:is(.talent-jobs-grid_>_.talent-job-card:last-child:nth-child(3))]:block
  max-[560px]:[padding:22px_21px_0] max-[560px]:[&_h3]:text-[22px] max-[560px]:[&_>_footer]:mt-[23px]
  max-[560px]:[&_>_footer]:py-[16px] max-[560px]:[&_>_footer]:px-0 max-[560px]:[&.is-list]:grid
  max-[560px]:[&.is-list]:grid-cols-[1fr_auto] max-[560px]:[&.is-list]:gap-[16px]
  max-[560px]:[&.is-list]:py-[22px] max-[560px]:[&.is-list]:px-0 max-[560px]:[&.is-list_h3]:text-[17px]
  max-[560px]:[&.is-list_>_footer]:col-[2] max-[560px]:[&.is-list_>_footer]:row-[2]
  max-[560px]:[&.is-list_>_footer]:flex max-[560px]:[&.is-list_>_footer]:flex-col
  max-[560px]:[&.is-list_>_footer]:items-end max-[560px]:[&.is-list_>_footer]:gap-[10px]
 ${list ? "is-list" : ""}`}
    >
      <div className="talent-job-top flex gap-[10px] items-center relative max-[1100px]:gap-[7px] ">
        <CompanyMark company={job.company} />
        <div>
          <span
            className="
  talent-company-name block text-[10px] font-[550] text-[#6b705f] max-[1100px]:text-[9px]
  max-[800px]:text-[10px] max-[560px]:text-[11px]
"
          >
            {job.company.name}
          </span>
          <span className="talent-posted block text-[8px] text-[#898e7e] mt-[3px] max-[1100px]:text-[7px] max-[800px]:text-[8px] max-[560px]:text-[8px]">
            Posted {job.posted}
          </span>
        </div>
        {job.featured && (
          <span
            className="
  talent-featured ml-auto self-start flex items-center gap-[3px] text-[7px] text-[#8b7ba3] bg-[#f4f0f8]
  py-[3px] px-[5px] rounded-[4px] whitespace-nowrap [&_i]:text-[10px] max-[1100px]:text-[6px]
  max-[1100px]:p-[3px] max-[800px]:text-[7px] max-[560px]:text-[8px]
"
          >
            <Icon name="sparkling-line" /> Featured
          </span>
        )}
      </div>
      <div className="talent-job-body pt-[25px] max-[560px]:pt-[23px] ">
        <span
          className="
  talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
  max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
"
        >
          {job.department}
        </span>
        <h3>
          <Link to={`/careers/jobs/${job.id}`}>{job.title}</Link>
        </h3>
        <div
          className="
  talent-meta flex flex-wrap items-center gap-[14px] text-[9px] text-[#777f6b] [&_span]:flex
  [&_span]:gap-[5px] [&_span]:items-center [&_i]:text-[13px]
"
        >
          <span>
            <Icon name="map-pin-line" />
            {job.location}
          </span>
          <span>
            <Icon name="time-line" />
            {job.type}
          </span>
        </div>
        <div
          className="
  talent-tags flex flex-wrap gap-[5px] mt-[20px] [&_>_span]:text-[8px] [&_>_span]:text-[#77816a]
  [&_>_span]:bg-[#f5f6ef] [&_>_span]:[border:1px_solid_#eaecdf] [&_>_span]:rounded-[4px] [&_>_span]:py-[4px]
  [&_>_span]:px-[7px]
"
        >
          {job.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <footer>
        <span
          className="
  talent-salary text-[11px] font-[550] text-[#666e5a] [&_small]:text-[8px] [&_small]:text-[#8d9580]
  [&_small]:font-normal max-[1100px]:text-[10px] max-[800px]:text-[11px] max-[560px]:text-[12px]
"
        >
          {job.salary}
          <small>{job.salary.includes("hour") ? "" : " / year"}</small>
        </span>
        <Link
          className="
  talent-arrow grid place-items-center w-[29px] h-[29px] [border:1px_solid_#e4dfeb] rounded-[50%]
  text-[#927fa8] [&_i]:text-[16px] [&:hover]:bg-[#eee9f5]
"
          to={`/careers/jobs/${job.id}`}
          aria-label={`View ${job.title} at ${job.company.name}`}
        >
          <Icon name="arrow-right-up-line" />
        </Link>
      </footer>
    </article>
  );
}
