import { Link, NavLink, Outlet } from "react-router";
import { Brand } from "../components/Brand";
import { Icon } from "../components/index";




export function CandidateLayout() {
  return (
    <div
      className="
    talent-site [&_.talent-field_small]:text-[#6f7c62] [&_.talent-description-section_p]:text-[#6f7c62]
    [&_.talent-description-section_li]:text-[#6f7c62] [&_.talent-preview-notice]:text-[#77618a]
    [&_.btn]:text-[11px] [&_.btn]:min-h-[42px] [&_.btn]:py-[10px] [&_.btn]:px-[17px] [&_.btn]:rounded-[6px]
    [&_.btn]:text-[#5c5c65] [&_.btn.primary]:text-[white] [&_.btn.primary]:bg-[#6856a8]
    [&_.btn.primary]:border-[#6856a8] [&_.btn.primary:hover]:bg-[#56448f]
    [&_.btn:hover]:[transform:translateY(-1px)] [&_.talent-updates_p]:text-[#6f7c62]
    [&_.talent-tracking-help_p]:text-[#6f7c62] [&_.talent-profile-section_p]:text-[#6f7c62]
    [--talent-ink:#30322e] [--talent-muted:#74786f] [--talent-border:#e5e6de] [--talent-indigo:#6654a5]
    bg-[#fafaf6] text-[var(--talent-ink)] text-[13px] leading-[1.6] min-h-screen
    [&_h1]:text-[var(--talent-ink)] [&_h2]:text-[var(--talent-ink)] [&_h3]:text-[var(--talent-ink)]
    [&_h1]:font-[450] [&_h1]:tracking-[-2.4px] [&_h1]:text-[52px] [&_h1]:leading-[1.12]
    [&_h1_em]:[font-family:Georgia,_serif] [&_h1_em]:font-normal [&_h1_em]:text-[#80729d]
    [&_main:focus]:[outline:none]
  "
    >
      <a
        className="talent-skip fixed top-[-100px] left-[20px] py-[12px] px-[20px] bg-[#6654a5] text-[white] z-[99] rounded-[5px] [&:focus]:top-[10px]"
        href="#candidate-main"
      >
        Skip to content
      </a>
      <header
        className="
    talent-header [&_.brand]:text-[27px] [&_.brand]:p-0 [&_.brand]:shrink-0 max-[800px]:[&_.brand]:text-[23px]
    max-[560px]:[&_.brand]:text-[25px] max-[800px]:[&_.brand-mark]:w-[27px]
    max-[800px]:[&_.brand-mark]:h-[29px] max-[560px]:[&_.brand-mark]:w-[29px]
    max-[560px]:[&_.brand-mark]:h-[31px] max-[560px]:[&_.brand-dot]:inline max-w-[1320px] my-0 mx-auto
    py-[25px] px-[50px] flex items-center gap-[40px] [border-bottom:1px_solid_var(--talent-border)]
    [&_nav]:flex [&_nav]:gap-[28px] [&_nav]:ml-[35px] [&_nav]:text-[11px] [&_nav]:text-[#707468]
    [&_nav_a]:relative [&_nav_a]:py-[7px] [&_nav_a]:px-0 [&_nav_a.active]:text-[#67539c]
    [&_nav_a.active]:font-[650] [&_nav_a.active:after]:[content:''] [&_nav_a.active:after]:absolute
    [&_nav_a.active:after]:h-[3px] [&_nav_a.active:after]:w-[16px] [&_nav_a.active:after]:left-[0]
    [&_nav_a.active:after]:bottom-[0] [&_nav_a.active:after]:rounded-[2px] [&_nav_a.active:after]:bg-[#b8c58d]
    [&_nav_a:hover]:text-[#66529c] max-[1100px]:py-[22px] max-[1100px]:px-[32px] max-[1100px]:gap-[25px]
    max-[1100px]:[&_nav]:ml-[10px] max-[1100px]:[&_nav]:gap-[23px] max-[800px]:gap-[17px]
    max-[800px]:py-[20px] max-[800px]:px-[25px] max-[800px]:[&_nav]:ml-0 max-[800px]:[&_nav]:gap-[17px]
    max-[800px]:[&_nav]:text-[10px] max-[560px]:[padding:18px_20px_12px] max-[560px]:flex-wrap
    max-[560px]:gap-[18px_10px] max-[560px]:[&_nav]:order-[3] max-[560px]:[&_nav]:w-full
    max-[560px]:[&_nav]:justify-between max-[560px]:[&_nav]:pt-[3px] max-[560px]:[&_nav]:text-[10px]
    max-[560px]:[&_nav]:gap-[12px] max-[560px]:[&_nav_a]:py-[7px] max-[560px]:[&_nav_a]:px-0
  "
      >
        <Brand to="/careers" />
        <nav aria-label="Candidate navigation">
          <NavLink to="/careers" end>
            Discover
          </NavLink>
          <NavLink to="/careers/jobs">Explore jobs</NavLink>
          <NavLink to="/careers/track">Track application</NavLink>
        </nav>
        <div className="talent-header-actions ml-auto flex gap-[22px] items-center max-[1100px]:gap-[17px] max-[800px]:ml-auto max-[560px]:gap-[10px]">
          <Link
            to="/"
            className="
    talent-employer flex items-center gap-[5px] text-[10px] text-[#737869] [&_i]:text-[13px]
    max-[800px]:hidden max-[560px]:flex max-[560px]:text-[8px]
  "
          >
            For employers <Icon name="arrow-right-up-line" />
          </Link>
          <NavLink
            to="/careers/profile"
            className="
    talent-profile-link flex items-center gap-[8px] [&_>_span]:w-[31px] [&_>_span]:h-[31px] [&_>_span]:grid
    [&_>_span]:place-items-center [&_>_span]:rounded-[50%] [&_>_span]:[border:1px_solid_#ddd6e7]
    [&_>_span]:bg-[#eee9f4] [&_>_span]:text-[#7c678f] [&_>_span]:text-[9px] [&_>_i]:text-[14px]
    [&_>_i]:text-[#7c678f] [&_>_i]:hidden max-[560px]:[&_>_span]:h-[27px] max-[560px]:[&_>_span]:w-[27px]
    max-[560px]:[&_>_span]:text-[8px]
  "
            aria-label="Candidate profile preview"
          >
            <span>OR</span>
            <Icon name="user-3-line" />
          </NavLink>
        </div>
      </header>
      <main id="candidate-main" tabIndex="-1">
        <Outlet />
      </main>
      <footer
        className="
    talent-footer [&_.brand]:text-[24px] [&_.brand]:p-0 [&_.brand]:justify-start
    max-[560px]:[&_.brand]:text-[23px] max-[560px]:[&_.brand]:justify-start [&_.brand-mark]:w-[27px]
    [&_.brand-mark]:h-[29px] [&_.brand-mark_i]:text-[20px] max-w-[1220px] my-0 mx-auto
    [border-top:1px_solid_var(--talent-border)] [padding:38px_50px_32px] grid grid-cols-[1.3fr_1fr_1fr]
    gap-[35px] [&_p]:text-[10px] [&_p]:text-[#838b76] [&_p]:leading-[1.9] [&_p]:mt-[14px] [&_nav]:flex
    [&_nav]:flex-col [&_nav]:gap-[10px] [&_nav]:text-[10px] [&_nav]:text-[#778168] [&_nav]:pt-[4px]
    [&_nav_a:hover]:text-[#75618e] max-[800px]:py-[30px] max-[800px]:px-[25px] max-[800px]:gap-[25px]
    max-[560px]:py-[28px] max-[560px]:px-[20px] max-[560px]:grid-cols-[1fr_1fr] max-[560px]:gap-[28px_20px]
    max-[560px]:[&_p]:text-[9px] max-[560px]:[&_nav]:text-[9px] max-[560px]:[&_nav]:pt-[8px]
    max-[560px]:[&_nav]:gap-[13px]
  "
      >
        <div>
          <Brand to="/careers" />
          <p>
            Good people. Meaningful work.
            <br />A little closer together.
          </p>
        </div>
        <nav aria-label="Candidate footer">
          <Link to="/careers/jobs">Find your next role</Link>
          <Link to="/careers/track">Track an application</Link>
          <Link to="/careers/profile">Profile preview</Link>
        </nav>
        <div
          className="
    talent-footer-note flex flex-col items-end gap-[18px] text-[10px] text-[#7c886d] [&_>_span]:flex
    [&_>_span]:items-center [&_>_span]:gap-[7px] [&_i]:text-[15px] [&_small]:text-[8px]
    [&_small]:text-[#8b947e] [&_a]:text-[9px] [&_a_i]:text-[12px] max-[560px]:col-[1/-1]
    max-[560px]:items-start max-[560px]:flex-row max-[560px]:flex-wrap max-[560px]:gap-[14px_20px]
    max-[560px]:text-[9px] max-[560px]:[border-top:1px_solid_#e6e9de] max-[560px]:pt-[20px]
    max-[560px]:justify-between max-[560px]:[&_small]:text-[7px] max-[560px]:[&_a]:text-[8px]
  "
        >
          <span>
            <Icon name="seedling-line" /> A thoughtful way forward.
          </span>
          <small>© 2026 HireTrail · UI concept</small>
          <Link to="/">
            Employer workspace <Icon name="arrow-right-up-line" />
          </Link>
        </div>
      </footer>
    </div>
  );
}