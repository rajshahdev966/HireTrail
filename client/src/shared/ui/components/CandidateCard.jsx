import { Link } from "react-router";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export function CandidateCard({ candidate: c }) {
  return (
    <Link to={`/candidates/${c.id}`} className="
      candidate-card block [border:1px_solid_#e6e2ee] rounded-[8px] py-[15px] px-[12px] bg-[white] mb-[12px]
      shadow-[0_2px_3px_#30204003] [transition:transform_0.2s,_box-shadow_0.2s]
      [&:hover]:[transform:translateY(-3px)] [&:hover]:shadow-[0_6px_14px_#3726420b] [&_h3]:mt-[12px]
      [&_h3]:text-[12px] [&_>_p]:text-[8px] [&_>_p]:text-[#a59bac] [&_>_p]:mt-[5px]
      [&_footer]:[border-top:1px_solid_#f0ecf4] [&_footer]:mt-[16px] [&_footer]:pt-[12px] [&_footer]:flex
      [&_footer]:justify-between [&_footer]:gap-[5px] [&_footer]:text-[7px] [&_footer]:text-[#aea4b6]
      [&_footer_span]:flex [&_footer_span]:gap-[4px] [&_footer_span]:items-center [&_footer_i]:text-[10px]
    ">
      <div className="flex justify-between items-start">
        <Avatar person={c} />
        <span className="rating text-[10px] text-[#bca26b] inline-flex items-center gap-[4px] [&_i]:text-[11px]">
          <Icon name="star-fill" />
          {c.rating}
        </span>
      </div>
      <h3>{c.name}</h3>
      <p>{c.role}</p>
      <div className="
        skill-tags flex gap-[4px] flex-wrap mt-[15px] [&_>_span]:text-[7px] [&_>_span]:bg-[#f5f3f8]
        [&_>_span]:[border:1px_solid_#eeebf3] [&_>_span]:py-[4px] [&_>_span]:px-[6px] [&_>_span]:rounded-[4px]
        [&_>_span]:text-[#9a8daa]
      ">
        {c.skills.slice(0, 2).map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <footer>
        <span>
          <Icon name="briefcase-line" /> {c.experience}
        </span>
        <span>
          <Icon name="chat-3-line" /> 3 <Icon name="attachment-2" /> 1
        </span>
      </footer>
    </Link>
  );
}
