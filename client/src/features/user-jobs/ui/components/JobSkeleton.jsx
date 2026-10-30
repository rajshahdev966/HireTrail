import { Skeleton } from "../../../../shared/ui/components/index";

export function JobSkeleton() {
  return (
    <div
      className="
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
"
    >
      <Skeleton />
    </div>
  );
}
