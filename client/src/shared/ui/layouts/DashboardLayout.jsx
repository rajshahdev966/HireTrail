import { NavLink, Link, Outlet } from "react-router";
import { Icon, Avatar } from "../components/index";
import { RiBriefcaseLine, RiCalendar2Line, RiGlobalLine, RiGroupLine, RiLayoutColumnLine, RiLayoutGridLine, RiSettings3Fill } from "@remixicon/react";
import { Brand } from "../components/Brand";

const nav = [
  ["/", <RiLayoutGridLine size={20}/>, "Overview"],
  ["/jobs", <RiBriefcaseLine size={20}/>, "Jobs"],
  ["/applications", <RiGroupLine size={20}/>, "Applications"],
  ["/pipeline", <RiLayoutColumnLine size={20}/>, "Hiring pipeline"],
  ["/interviews", <RiCalendar2Line size={20}/>, "Interviews"],
];

export default function DashboardLayout() {
  return (
    <div className="app-shell flex min-h-screen max-[700px]:block">
      <aside className="
        sidebar w-[235px] fixed inset-[0_auto_0_0] bg-[#fdfdfd] [border-right:1px_solid_#e9e9ed]
        [padding:31px_18px_0] flex flex-col z-[20] [&_nav]:flex [&_nav]:flex-col [&_nav]:gap-[6px] [&_nav_a]:flex
        [&_nav_a]:items-center [&_nav_a]:gap-[11px] [&_nav_a]:p-[12px] [&_nav_a]:rounded-[7px]
        [&_nav_a]:text-[#777986] [&_nav_a]:text-[11px] [&_nav_a]:font-[550] [&_nav_a_i]:text-[17px]
        [&_nav_a_span]:flex-1 [&_nav_a_small]:text-[9px] [&_nav_a_small]:py-[2px] [&_nav_a_small]:px-[5px]
        [&_nav_a_small]:[border:1px_solid_#e8e8ee] [&_nav_a_small]:rounded-[4px] [&_nav_a_small]:text-[#90919b]
        [&_nav_a.active]:text-[#6553ae] [&_nav_a.active]:bg-[#eeebf7] [&_nav_a.active_small]:bg-[#ddd6f3]
        [&_nav_a.active_small]:border-[#ddd6f3] [&_nav_a.active_small]:text-[#6553ae] [&_nav_a:hover]:bg-[#f0edf7]
        [&_nav_a:hover]:text-[#6553ae] max-[1200px]:w-[205px] max-[1200px]:pl-[13px] max-[1200px]:pr-[13px]
        max-[960px]:w-[76px] max-[960px]:[padding:27px_10px_0] max-[960px]:[&_nav_a_>_span]:hidden
        max-[960px]:[&_nav_a_>_small]:hidden max-[960px]:[&_nav_a_>_i:last-child:not(:first-child)]:hidden
        max-[960px]:[&_nav_a]:justify-center max-[960px]:[&_nav_a]:p-[13px] max-[960px]:[&_nav_a_i]:text-[20px]
        max-[700px]:sticky max-[700px]:top-[0] max-[700px]:inset-[auto] max-[700px]:w-full max-[700px]:h-[auto]
        max-[700px]:[padding:14px_16px_8px] max-[700px]:flex-row max-[700px]:items-center max-[700px]:flex-wrap
        max-[700px]:[border-right:none] max-[700px]:[border-bottom:1px_solid_#e5e4ed] max-[700px]:gap-[10px]
        max-[700px]:[&_nav:first-of-type]:order-[2] max-[700px]:[&_nav:first-of-type]:flex-row
        max-[700px]:[&_nav:first-of-type]:w-full max-[700px]:[&_nav:first-of-type]:overflow-auto
        max-[700px]:[&_nav:first-of-type]:gap-[3px] max-[700px]:[&_nav:first-of-type_a]:py-[10px]
        max-[700px]:[&_nav:first-of-type_a]:px-[11px] max-[700px]:[&_nav:first-of-type_a]:shrink-0
        max-[700px]:[&_nav:first-of-type_a]:gap-[5px] max-[700px]:[&_nav:first-of-type_a]:text-[9px]
        max-[700px]:[&_nav:first-of-type_a]:justify-center max-[700px]:[&_nav:first-of-type_a]:flex-1
        max-[700px]:[&_nav_a_i]:text-[15px] max-[700px]:[&_nav_a_>_span]:block
        max-[700px]:[&_nav:first-of-type_a:last-child]:hidden
      ">
        <Brand />
        <div className="mt-10 nav-label text-[9px] font-[650] text-[#92939e] tracking-[1.15px] [margin:0_12px_13px] max-[960px]:hidden">WORKSPACE</div>
        <nav>
          {nav.map(([to, icon, label, count]) => (
            <NavLink to={to} end key={to}>
              {icon}
              <span>{label}</span>
              {count && <small>{count}</small>}
            </NavLink>
          ))}
        </nav>
        <div className="
          nav-label text-[9px] font-[650] text-[#92939e] tracking-[1.15px] [margin:0_12px_13px] max-[960px]:hidden
          tools-label mt-[35px] max-[960px]:[&_+_nav]:mt-[30px] max-[700px]:[&_+_nav]:[margin:0_0_0_auto]
          max-[700px]:[&_+_nav]:flex-row max-[700px]:[&_+_nav]:gap-[3px] max-[700px]:[&_+_nav_a]:p-[6px]
          max-[700px]:[&_+_nav_a_span]:hidden
        ">TOOLS & PREFERENCES</div>
        <nav>
          <NavLink to="/careers">
           <RiGlobalLine size={20}/>
            <span>Careers page</span>
            <Icon name="arrow-right-up-line" />
          </NavLink>
          <NavLink to="/settings">
            <RiSettings3Fill size={20}/>
            <span>Settings</span>
          </NavLink>
        </nav>
        <div className="sidebar-bottom mt-auto pt-[40px] max-[960px]:pt-[15px] max-[700px]:hidden">
          <Link to="/settings" className="
            account [&_strong]:block [&_strong]:text-[11px] [&_strong]:font-bold flex items-center gap-[9px]
            [border-top:1px_solid_#ececf1] mt-[12px] py-[20px] px-[4px] [&_small]:block [&_small]:text-[#93939d]
            [&_small]:text-[9px] [&_small]:mt-[4px] [&_>_i]:ml-auto [&_>_i]:text-[14px] [&_>_i]:text-[#90909b]
            max-[960px]:[&_>_span:not(.avatar)]:hidden max-[960px]:[&_>_i]:hidden max-[960px]:justify-center
            max-[960px]:py-[18px] max-[960px]:px-0
          ">
            <Avatar person={{ avatar: "https://i.pravatar.cc/80?img=33" }} />
            <span>
              <strong>Alex Morgan</strong>
              <small>Workspace admin</small>
            </span>
            <Icon name="expand-up-down-line" />
          </Link>
        </div>
      </aside>
      <div className="main-shell ml-[235px] min-w-[0] flex-1 flex flex-col max-[1200px]:ml-[205px] max-[960px]:ml-[76px] max-[700px]:m-0">
        <main className="
          main-content [padding:32px_34px_28px] max-w-[1640px] w-full m-auto flex-1 min-[1500px]:py-[37px]
          min-[1500px]:px-[42px] max-[1200px]:py-[27px] max-[1200px]:px-[24px] max-[960px]:py-[27px]
          max-[960px]:px-[23px] max-[700px]:py-[24px] max-[700px]:px-[18px]
        ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
