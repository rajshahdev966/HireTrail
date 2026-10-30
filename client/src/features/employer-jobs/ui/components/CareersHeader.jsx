import { Link } from "react-router";
import { Icon, Button } from "../../../../shared/ui/components/index";

export function CareersHeader() {
  return (
    <header className="
      careers-header max-w-[1200px] m-auto flex justify-between items-center py-[30px] px-[45px]
      [border-bottom:1px_solid_#e9e8e0] [&_nav]:flex [&_nav]:items-center [&_nav]:gap-[28px] [&_nav]:text-[11px]
      [&_nav]:text-[#8c8d80] [&_nav_>_a_>_span]:text-[8px] [&_nav_>_a_>_span]:bg-[#e8ebdb]
      [&_nav_>_a_>_span]:py-[3px] [&_nav_>_a_>_span]:px-[5px] [&_nav_>_a_>_span]:rounded-[5px]
      [&_nav_>_a_>_span]:ml-[4px] max-[960px]:py-[25px] max-[960px]:px-[35px] max-[700px]:p-[20px]
      max-[700px]:[&_nav]:gap-[15px] max-[700px]:[&_nav]:text-[9px] max-[700px]:[&_nav_>_a:first-child]:hidden
    ">
      <Link to="/company/careers" className="
        company-brand [&_.workspace-logo]:bg-[#e5e9d6] max-[700px]:[&_.workspace-logo]:w-[29px]
        max-[700px]:[&_.workspace-logo]:h-[29px] max-[700px]:[&_.workspace-logo]:text-[25px] flex items-center
        gap-[12px] text-[22px] font-[750] tracking-[-1px] max-[700px]:text-[18px] max-[700px]:gap-[7px]
      ">
        <span className="
          workspace-logo bg-[#e5edcf] [border:1px_solid_#d4dfbc] rounded-[7px] w-[35px] h-[35px] inline-flex
          items-center justify-center text-[30px] font-[750] tracking-[-4px] shrink-0 relative pr-[5px]
          [&_small]:absolute [&_small]:text-[15px] [&_small]:right-[5px] [&_small]:top-[0]
        ">
          a<small>✳</small>
        </span>
        acme studio
      </Link>
      <nav>
        <a href="#our-story">Our story</a>
        <Link to="/company/careers">
          Open positions <span>4</span>
        </Link>
        <Button to="/">
          Employer workspace <Icon name="arrow-right-up-line" />
        </Button>
      </nav>
    </header>
  );
}
