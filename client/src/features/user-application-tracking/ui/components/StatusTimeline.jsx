import { Icon } from "../../../../shared/ui/components/index";

export function StatusTimeline({ outcome = "Hired", current = "Interview" }) {
  return (
    <ol
      className="
  talent-status-timeline flex list-none p-0 [margin:35px_0_0] [&_>_li]:flex-1 [&_>_li]:flex
  [&_>_li]:flex-col [&_>_li]:items-center [&_>_li]:relative [&_>_li]:gap-[8px] [&_>_li]:min-w-[0]
  [&_>_li:before]:[content:''] [&_>_li:before]:h-[2px] [&_>_li:before]:bg-[#e8eddc] [&_>_li:before]:absolute
  [&_>_li:before]:top-[19px] [&_>_li:before]:left-[0] [&_>_li:before]:right-[0]
  [&_>_li:first-child:before]:left-[50%] [&_>_li:last-child:before]:right-[50%]
  [&_>_.complete:before]:bg-[#cddab9] [&_strong]:text-[11px] [&_strong]:font-medium
  [&_strong]:text-[#829b68] [&_strong]:mt-[5px] [&_.current_strong]:text-[#9671b1] [&_small]:text-[8px]
  [&_small]:text-[#8da976] max-[560px]:mt-[27px] max-[560px]:[&_>_li:before]:top-[15px]
  max-[560px]:[&_>_li]:gap-[6px] max-[560px]:[&_strong]:text-[8px] max-[560px]:[&_small]:text-[6px]
  max-[560px]:[&_small]:leading-[1.5] max-[560px]:[&_small]:text-center
"
      aria-label="Application stages"
    >
      {[
        { name: "Applied", state: "complete", text: "Oct 20" },
        { name: "Screening", state: "complete", text: "Oct 21" },
        { name: "Interview", state: "current", text: "Current stage" },
        { name: "Offer", state: "pending", text: "Next step" },
        { name: outcome, state: "pending", text: "Final outcome" },
      ].map((s, i) => (
        <li
          className={s.state}
          key={s.name}
          aria-current={s.name === current ? "step" : undefined}
        >
          <span
            className="
  talent-timeline-node w-[40px] h-[40px] rounded-[50%] bg-[#f6f8f0] [border:1px_solid_#e3ead7] grid
  place-items-center text-[#a5b68f] z-[1] [&_i]:text-[17px] max-[560px]:h-[31px] max-[560px]:w-[31px]
  max-[560px]:[&_i]:text-[13px]
"
          >
            <Icon
              name={
                s.state === "complete"
                  ? "check-line"
                  : s.state === "current"
                    ? "chat-voice-line"
                    : "subtract-line"
              }
            />
          </span>
          <strong>{s.name}</strong>
          <small>{s.text}</small>
        </li>
      ))}
    </ol>
  );
}
