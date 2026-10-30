import { Link } from "react-router";
import { jobs } from "../../state/mockJobs";
import { Icon, Button, Badge, PageTitle, Filters } from "../../../../shared/ui/components/index";

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
