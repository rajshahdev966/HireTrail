import { interviews } from "../../state/mockInterviews";
import { Icon, Avatar } from "../../../../shared/ui/components/index";

export function InterviewList() {
  return (
    <div className="interview-list [padding:0_20px_6px]">
      {interviews.map((i) => (
        <div className="
          interview flex items-center gap-[10px] py-[15px] px-0 [border-bottom:1px_solid_#f2f2f5]
          [&:last-child]:[border-bottom:none] min-[1500px]:py-[20px] min-[1500px]:px-0
        " key={i.name}>
          <div className="
            interview-time w-[49px] shrink-0 [&_strong]:block [&_strong]:text-[9px] [&_strong]:font-semibold
            [&_strong]:text-[#70707d] [&_small]:block [&_small]:text-[7px] [&_small]:text-[#b0afb9] [&_small]:mt-[4px]
          ">
            <strong>{i.time}</strong>
            <small>{i.duration}</small>
          </div>
          <span className={`interview-rule w-[2px] h-[30px] rounded-[2px] shrink-0 [&.purple]:bg-[#d1c5e9] [&.blue]:bg-[#c3d4ed] [&.orange]:bg-[#e8d1b2] ${i.color}`} />
          <div className="
            interview-info [&_.avatar]:w-[14px] [&_.avatar]:h-[14px] flex-1 min-w-[0] [&_>_strong]:text-[9px]
            [&_>_strong]:font-semibold [&_>_strong]:block [&_>_strong]:text-[#626270] [&_>_span]:flex
            [&_>_span]:items-center [&_>_span]:gap-[5px] [&_>_span]:text-[7px] [&_>_span]:text-[#a19fac]
            [&_>_span]:mt-[6px] [&_>_span]:whitespace-nowrap [&_small]:text-[7px] [&_small]:max-w-[90px]
            [&_small]:overflow-hidden [&_small]:text-ellipsis min-[1500px]:[&_>_strong]:text-[11px]
            min-[1500px]:[&_>_span]:text-[8px] min-[1500px]:[&_small]:text-[8px]
          ">
            <strong>{i.type}</strong>
            <span>
              <Avatar person={i} size="tiny" />
              {i.name}
              <span className="dot-separator my-0 mx-[3px] text-[#b7b5bf]">Â·</span>
              <small>{i.role}</small>
            </span>
          </div>
          <button
            type="button"
            className="
              icon-button w-[27px] h-[28px] inline-flex items-center justify-center text-[#9b9aa9] bg-[none]
              [border:none] rounded-[5px] shrink-0 [&:hover]:bg-[#eeebf7] [&:hover]:text-[#7863ac] [&_i]:text-[15px]
            "
            aria-label={`Join ${i.name}'s interview`}
          >
            <Icon name="vidicon-line" />
          </button>
        </div>
      ))}
    </div>
  );
}
