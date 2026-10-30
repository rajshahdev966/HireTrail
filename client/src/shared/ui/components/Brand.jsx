import { Link } from "react-router";
import { Icon } from "./index";

export function Brand({ light = false, to = "/" }) {
  return (
    <Link to={to} className={`
      brand inline-flex items-center text-[27px] tracking-[-1.5px] font-[800] pl-[9px] leading-[35px]
      max-[960px]:p-0 max-[960px]:justify-center max-[960px]:text-[0] max-[960px]:gap-[0]
      max-[700px]:text-[21px] max-[700px]:gap-[0] max-[700px]:justify-start
     ${light ? "light" : ""}`}>
      <span className="
        brand-mark w-[31px] h-[34px] inline-flex items-center justify-center mr-[9px] bg-[#6a59bc] rounded-[9px]
        text-[white] [transform:rotate(-5deg)] [&_i]:text-[23px] max-[960px]:m-0 max-[960px]:w-[32px]
        max-[700px]:w-[26px] max-[700px]:h-[29px] max-[700px]:mr-[8px] max-[700px]:[&_i]:text-[19px]
      ">
        <Icon name="route-line" />
      </span>
      hiretrail<span className="brand-dot text-[#8573c9] max-[960px]:hidden max-[700px]:inline ">.</span>
    </Link>
  );
}
