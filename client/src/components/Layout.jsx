import { NavLink, Link, Outlet, useLocation } from "react-router";
import { Icon, Search, Avatar, Button } from "./ui";
const nav = [
  ["/", "layout-grid-line", "Overview"],
  ["/jobs", "briefcase-line", "Jobs", "08"],
  ["/applications", "group-line", "Applications", "248"],
  ["/pipeline", "layout-column-line", "Hiring pipeline"],
  ["/interviews", "calendar-event-line", "Interviews"],
];
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
export default function Layout() {
  const location = useLocation();
  const current =
    nav.find((n) => n[0] === location.pathname)?.[2] ||
    (location.pathname.includes("candidates")
      ? "Candidate details"
      : location.pathname.includes("settings")
        ? "Settings"
        : "Jobs");
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
        <button className="
          workspace flex items-center text-left gap-[10px] bg-[#fff] [border:1px_solid_#e6e6ec] rounded-[9px]
          py-[11px] px-[10px] [margin:32px_0_30px] [&_strong]:block [&_strong]:text-[11px] [&_strong]:font-bold
          [&_>_span:nth-child(2)]:flex-1 [&_small]:text-[9px] [&_small]:text-[#8a8b97] [&_small]:block
          [&_small]:mt-[4px] [&_small]:tracking-[0] [&_small_span]:text-[8px] [&_small_span]:text-[#6c61a3]
          [&_small_span]:bg-[#eeebf7] [&_small_span]:py-[2px] [&_small_span]:px-[3px] [&_small_span]:ml-[3px]
          [&_small_span]:rounded-[3px] [&_>_i]:text-[14px] [&_>_i]:text-[#8c8d98] max-[960px]:p-[8px]
          max-[960px]:justify-center max-[960px]:[margin:30px_0_25px] max-[960px]:[&_>_span:nth-child(2)]:hidden
          max-[960px]:[&_>_i]:hidden max-[700px]:hidden
        " type="button">
          <span className="
            workspace-logo bg-[#e5edcf] [border:1px_solid_#d4dfbc] rounded-[7px] w-[35px] h-[35px] inline-flex
            items-center justify-center text-[30px] font-[750] tracking-[-4px] shrink-0 relative pr-[5px]
            [&_small]:absolute [&_small]:text-[15px] [&_small]:right-[5px] [&_small]:top-[0]
          ">
            a<small>✳</small>
          </span>
          <span>
            <strong>Acme Studio</strong>
            <small>
              Pro workspace <span>PRO</span>
            </small>
          </span>
          <Icon name="expand-up-down-line" />
        </button>
        <div className="nav-label text-[9px] font-[650] text-[#92939e] tracking-[1.15px] [margin:0_12px_13px] max-[960px]:hidden">WORKSPACE</div>
        <nav>
          {nav.map(([to, icon, label, count]) => (
            <NavLink to={to} end={to === "/"} key={to}>
              <Icon name={icon} />
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
            <Icon name="global-line" />
            <span>Careers page</span>
            <Icon name="arrow-right-up-line" />
          </NavLink>
          <NavLink to="/settings">
            <Icon name="settings-3-line" />
            <span>Settings</span>
          </NavLink>
        </nav>
        <div className="sidebar-bottom mt-auto pt-[40px] max-[960px]:pt-[15px] max-[700px]:hidden">
          <div className="
            upgrade [&_.btn]:text-[10px] [&_.btn]:w-full [&_.btn]:[flex-direction:row-reverse]
            [&_.btn]:justify-between [&_.btn]:min-h-[32px] [&_.btn]:bg-[#fffef8] [&_.btn]:border-[#dedfd0]
            bg-[#f5f5ee] [border:1px_solid_#ebebdf] rounded-[9px] py-[16px] px-[12px] [margin:25px_0_15px]
            [&_h3]:text-[11px] [&_p]:text-[9px] [&_p]:text-[#888b7c] [&_p]:[margin:7px_0_13px] max-[960px]:hidden
          ">
            <span className="upgrade-icon flex items-center justify-center w-[30px] h-[30px] rounded-[7px] bg-[#e5eacc] text-[#666e42] mb-[11px]">
              <Icon name="sparkling-2-line" />
            </span>
            <h3>A little more room to grow.</h3>
            <p>Great teams start with great tools.</p>
            <Button to="/settings" icon="arrow-right-up-line">
              Explore your plan
            </Button>
          </div>
          <a className="
            help-link flex items-center gap-[7px] text-[10px] py-[12px] px-[5px] text-[#858591]
            [&_i:last-child]:text-[13px] [&_i:last-child]:ml-auto max-[960px]:hidden
          " href="mailto:help@hiretrail.example">
            <Icon name="question-line" /> Help & getting started{" "}
            <Icon name="arrow-right-up-line" />
          </a>
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
        <header className="
          topbar max-[700px]:[&_.avatar]:w-[25px] max-[700px]:[&_.avatar]:h-[25px] [&_.search]:bg-[transparent]
          [&_.search]:[border:none] [&_.search]:w-[215px] [&_.search]:p-0 max-[700px]:[&_.search]:hidden h-[76px]
          [border-bottom:1px_solid_#e8e9ee] bg-[#fdfdfd] flex items-center justify-between py-0 px-[34px] gap-[20px]
          [&_kbd]:absolute [&_kbd]:left-[175px] [&_kbd]:[font-family:inherit] [&_kbd]:text-[9px]
          [&_kbd]:[border:1px_solid_#ededf0] [&_kbd]:rounded-[4px] [&_kbd]:text-[#9a9aa4] [&_kbd]:py-[2px]
          [&_kbd]:px-[4px] min-[1500px]:py-0 min-[1500px]:px-[42px] max-[1200px]:py-0 max-[1200px]:px-[24px]
          max-[700px]:h-[51px] max-[700px]:py-0 max-[700px]:px-[19px] max-[700px]:[&_kbd]:hidden
        ">
          <div className="
            breadcrumb flex items-center gap-[15px] text-[11px] text-[#6f707c] [&_>_i]:text-[16px]
            [&_>_i]:text-[#8c8c99] [&_>_span]:text-[#cdcdd5] max-[700px]:text-[9px] max-[700px]:gap-[10px]
          ">
            <Icon name="home-5-line" />
            <span>/</span>
            {current}
          </div>
          <div className="topbar-right flex items-center gap-[20px] relative max-[700px]:gap-[12px]">
            <Search placeholder="Search anything..." />
            <kbd>⌘ K</kbd>
            <button
              type="button"
              className="
                notification relative [&_b]:absolute [&_b]:w-[4px] [&_b]:h-[4px] [&_b]:rounded-[50%] [&_b]:bg-[#8b7ac9]
                [&_b]:right-[8px] [&_b]:top-[6px] [&_b]:[border:1px_solid_white] icon-button w-[27px] h-[28px] inline-flex
                items-center justify-center text-[#9b9aa9] bg-[none] [border:none] rounded-[5px] shrink-0
                [&:hover]:bg-[#eeebf7] [&:hover]:text-[#7863ac] [&_i]:text-[15px]
              "
              aria-label="Notifications"
            >
              <Icon name="notification-3-line" />
              <b />
            </button>
            <span className="topbar-divider h-[24px] w-[1px] bg-[#e9e9ee] max-[700px]:hidden" />
            <Avatar person={{ avatar: "https://i.pravatar.cc/80?img=33" }} />
          </div>
        </header>
        <main className="
          main-content [padding:32px_34px_28px] max-w-[1640px] w-full m-auto flex-1 min-[1500px]:py-[37px]
          min-[1500px]:px-[42px] max-[1200px]:py-[27px] max-[1200px]:px-[24px] max-[960px]:py-[27px]
          max-[960px]:px-[23px] max-[700px]:py-[24px] max-[700px]:px-[18px]
        ">
          <Outlet />
        </main>
        <footer className="
          app-footer [padding:0_34px_20px] flex items-center justify-between gap-[15px] text-[8px] text-[#b0afb9]
          [&_>_span:last-child]:flex [&_>_span:last-child]:items-center [&_>_span:last-child]:gap-[6px]
          max-[700px]:[padding:0_18px_20px] max-[700px]:text-[7px] max-[700px]:flex-wrap max-[700px]:gap-[10px]
        ">
          <span>Made for people who build great teams.</span>
          <span>
            <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> All systems operational{" "}
            <span className="footer-version ml-[14px] text-[#c0bfc6] max-[700px]:ml-[8px]">HireTrail v1.0</span>
          </span>
        </footer>
      </div>
    </div>
  );
}
