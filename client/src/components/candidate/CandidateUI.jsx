import { Link, NavLink, Outlet } from 'react-router';
import { Icon, Button, EmptyState, Skeleton } from '../ui';
import { Brand } from '../Layout';
import { applicationExample } from '../../data/careers';

export function CandidateLayout() {
  return <div className="
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
  "><a className="talent-skip fixed top-[-100px] left-[20px] py-[12px] px-[20px] bg-[#6654a5] text-[white] z-[99] rounded-[5px] [&:focus]:top-[10px]" href="#candidate-main">Skip to content</a><header className="
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
  "><Brand to="/careers"/><nav aria-label="Candidate navigation"><NavLink to="/careers" end>Discover</NavLink><NavLink to="/careers/jobs">Explore jobs</NavLink><NavLink to="/careers/track">Track application</NavLink></nav><div className="talent-header-actions ml-auto flex gap-[22px] items-center max-[1100px]:gap-[17px] max-[800px]:ml-auto max-[560px]:gap-[10px]"><Link to="/" className="
    talent-employer flex items-center gap-[5px] text-[10px] text-[#737869] [&_i]:text-[13px]
    max-[800px]:hidden max-[560px]:flex max-[560px]:text-[8px]
  ">For employers <Icon name="arrow-right-up-line"/></Link><NavLink to="/careers/profile" className="
    talent-profile-link flex items-center gap-[8px] [&_>_span]:w-[31px] [&_>_span]:h-[31px] [&_>_span]:grid
    [&_>_span]:place-items-center [&_>_span]:rounded-[50%] [&_>_span]:[border:1px_solid_#ddd6e7]
    [&_>_span]:bg-[#eee9f4] [&_>_span]:text-[#7c678f] [&_>_span]:text-[9px] [&_>_i]:text-[14px]
    [&_>_i]:text-[#7c678f] [&_>_i]:hidden max-[560px]:[&_>_span]:h-[27px] max-[560px]:[&_>_span]:w-[27px]
    max-[560px]:[&_>_span]:text-[8px]
  " aria-label="Candidate profile preview"><span>OR</span><Icon name="user-3-line"/></NavLink></div></header><main id="candidate-main" tabIndex="-1"><Outlet/></main><footer className="
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
  "><div><Brand to="/careers"/><p>Good people. Meaningful work.<br/>A little closer together.</p></div><nav aria-label="Candidate footer"><Link to="/careers/jobs">Find your next role</Link><Link to="/careers/track">Track an application</Link><Link to="/careers/profile">Profile preview</Link></nav><div className="
    talent-footer-note flex flex-col items-end gap-[18px] text-[10px] text-[#7c886d] [&_>_span]:flex
    [&_>_span]:items-center [&_>_span]:gap-[7px] [&_i]:text-[15px] [&_small]:text-[8px]
    [&_small]:text-[#8b947e] [&_a]:text-[9px] [&_a_i]:text-[12px] max-[560px]:col-[1/-1]
    max-[560px]:items-start max-[560px]:flex-row max-[560px]:flex-wrap max-[560px]:gap-[14px_20px]
    max-[560px]:text-[9px] max-[560px]:[border-top:1px_solid_#e6e9de] max-[560px]:pt-[20px]
    max-[560px]:justify-between max-[560px]:[&_small]:text-[7px] max-[560px]:[&_a]:text-[8px]
  "><span><Icon name="seedling-line"/> A thoughtful way forward.</span><small>© 2026 HireTrail · UI concept</small><Link to="/">Employer workspace <Icon name="arrow-right-up-line"/></Link></div></footer></div>;
}
export function CompanyMark({company,large=false}){return <span aria-hidden="true" className={`
  talent-company-mark [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa]
  [&.blue]:text-[#7f9cc8] [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6]
  [&.green]:text-[#8b9c70] [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] w-[41px] h-[41px]
  [border:1px_solid_#dae1cb] bg-[#ebefdf] text-[#75865b] rounded-[9px] inline-flex items-center
  justify-center shrink-0 [font-family:"DM_Sans_Variable",_sans-serif] font-semibold text-[25px] tracking-[-2px]
  pr-[2px] leading-[1] [&.lavender]:bg-[#eee9f5] [&.lavender]:text-[#8973a5] [&.lavender]:border-[#e1d9ed]
  [&.peach]:bg-[#f6ecdf] [&.peach]:text-[#b1956b] [&.peach]:border-[#ecdecb] [&.is-large]:w-[59px]
  [&.is-large]:h-[59px] [&.is-large]:text-[36px] [&.is-large]:rounded-[12px] max-[1100px]:w-[35px]
  max-[1100px]:h-[35px] max-[1100px]:text-[23px] max-[560px]:w-[38px] max-[560px]:h-[38px]
  max-[560px]:text-[25px]
 ${company.color} ${large?'is-large':''}`}>{company.mark}</span>;}
export function JobCard({job,list=false}){return <article className={`
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
 ${list?'is-list':''}`}><div className="talent-job-top flex gap-[10px] items-center relative max-[1100px]:gap-[7px] "><CompanyMark company={job.company}/><div><span className="
  talent-company-name block text-[10px] font-[550] text-[#6b705f] max-[1100px]:text-[9px]
  max-[800px]:text-[10px] max-[560px]:text-[11px]
">{job.company.name}</span><span className="talent-posted block text-[8px] text-[#898e7e] mt-[3px] max-[1100px]:text-[7px] max-[800px]:text-[8px] max-[560px]:text-[8px]">Posted {job.posted}</span></div>{job.featured&&<span className="
  talent-featured ml-auto self-start flex items-center gap-[3px] text-[7px] text-[#8b7ba3] bg-[#f4f0f8]
  py-[3px] px-[5px] rounded-[4px] whitespace-nowrap [&_i]:text-[10px] max-[1100px]:text-[6px]
  max-[1100px]:p-[3px] max-[800px]:text-[7px] max-[560px]:text-[8px]
"><Icon name="sparkling-line"/> Featured</span>}</div><div className="talent-job-body pt-[25px] max-[560px]:pt-[23px] "><span className="
  talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
  max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
">{job.department}</span><h3><Link to={`/careers/jobs/${job.id}`}>{job.title}</Link></h3><div className="
  talent-meta flex flex-wrap items-center gap-[14px] text-[9px] text-[#777f6b] [&_span]:flex
  [&_span]:gap-[5px] [&_span]:items-center [&_i]:text-[13px]
"><span><Icon name="map-pin-line"/>{job.location}</span><span><Icon name="time-line"/>{job.type}</span></div><div className="
  talent-tags flex flex-wrap gap-[5px] mt-[20px] [&_>_span]:text-[8px] [&_>_span]:text-[#77816a]
  [&_>_span]:bg-[#f5f6ef] [&_>_span]:[border:1px_solid_#eaecdf] [&_>_span]:rounded-[4px] [&_>_span]:py-[4px]
  [&_>_span]:px-[7px]
">{job.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><footer><span className="
  talent-salary text-[11px] font-[550] text-[#666e5a] [&_small]:text-[8px] [&_small]:text-[#8d9580]
  [&_small]:font-normal max-[1100px]:text-[10px] max-[800px]:text-[11px] max-[560px]:text-[12px]
">{job.salary}<small>{job.salary.includes('hour')?'':' / year'}</small></span><Link className="
  talent-arrow grid place-items-center w-[29px] h-[29px] [border:1px_solid_#e4dfeb] rounded-[50%]
  text-[#927fa8] [&_i]:text-[16px] [&:hover]:bg-[#eee9f5]
" to={`/careers/jobs/${job.id}`} aria-label={`View ${job.title} at ${job.company.name}`}><Icon name="arrow-right-up-line"/></Link></footer></article>;}
export function CandidateSearch({compact=false}){return <div className={`
  talent-search [&_.btn]:text-[10px] [&_.btn]:shrink-0 [&_.btn]:min-h-[40px] max-[560px]:[&_.btn]:text-[9px]
  max-[560px]:[&_.btn]:py-[9px] max-[560px]:[&_.btn]:px-[12px] max-[560px]:[&_.btn]:ml-[5px]
  max-[560px]:[&_.btn]:min-h-[35px] relative z-[2] mt-[32px] bg-[white] [border:1px_solid_#dedfd4]
  rounded-[8px] shadow-[0_6px_18px_#30322e04] p-[7px] flex items-center w-[calc(100%_+_125px)] gap-[8px]
  [&_label]:flex [&_label]:items-center [&_label]:gap-[9px] [&_label]:py-[8px] [&_label]:px-[10px]
  [&_label]:min-w-[0] [&_label]:[flex:1.5] [&_label:nth-child(2)]:[border-left:1px_solid_#e9e9e2]
  [&_label:nth-child(2)]:flex-1 [&_input]:bg-[transparent] [&_input]:[border:none] [&_input]:[outline:none]
  [&_input]:min-w-[0] [&_input]:w-full [&_input]:text-[10px] [&_input]:text-[#626c59]
  [&_input::placeholder]:text-[#8b9183] [&_label_i]:text-[16px] [&_label_i]:text-[#969d89]
  [&.is-compact]:w-full [&.is-compact]:mt-0 max-[560px]:w-full max-[560px]:p-[6px] max-[560px]:gap-[0]
  max-[560px]:flex-wrap max-[560px]:mt-[25px] max-[560px]:[&_label]:[flex:0_0_100%]
  max-[560px]:[&_label]:py-[13px] max-[560px]:[&_label]:px-[9px]
  max-[560px]:[&_label:nth-child(2)]:[border-left:0]
  max-[560px]:[&_label:nth-child(2)]:[border-top:1px_solid_#edede4]
  max-[560px]:[&_label:nth-child(2)]:flex-1 max-[560px]:[&_input]:text-[10px]
  max-[560px]:[&.is-compact]:mt-0
 ${compact?'is-compact':''}`}><label><Icon name="search-line"/><input aria-label="Job title or keyword" placeholder="Job title, skill, or a little inspiration"/></label><label><Icon name="map-pin-line"/><input aria-label="Preferred location" placeholder="City or remote"/></label><Button to="/careers/jobs" variant="primary">Explore jobs <Icon name="arrow-right-line"/></Button></div>;}
export function CandidateFilters(){return <aside className="
  talent-filters [border-right:1px_solid_#e2e5d9] pr-[23px] [&_>_p]:text-[9px] [&_>_p]:text-[#879178]
  [&_>_p]:mt-[5px] [&_fieldset]:[padding:22px_0_0] [&_fieldset]:mt-[22px] [&_fieldset]:[border:0]
  [&_fieldset]:[border-top:1px_solid_#e7e9df] [&_fieldset]:min-w-[0] [&_legend]:text-[11px]
  [&_legend]:font-[650] [&_legend]:[padding:0_5px_0_0] [&_legend]:text-[#647055] [&_fieldset_label]:flex
  [&_fieldset_label]:items-center [&_fieldset_label]:gap-[9px] [&_fieldset_label]:text-[10px]
  [&_fieldset_label]:mb-[12px] [&_fieldset_label]:text-[#7d886e] [&_input]:w-[13px] [&_input]:h-[13px]
  max-[1100px]:pr-[18px] max-[800px]:pr-[16px] max-[800px]:[&_fieldset_label]:text-[9px]
  max-[560px]:[border-right:0] max-[560px]:[border-bottom:1px_solid_#dfe6d3] max-[560px]:[padding:0_0_22px]
  max-[560px]:grid max-[560px]:grid-cols-[1fr_1fr] max-[560px]:gap-[12px_16px] max-[560px]:[&_>_p]:m-0
  max-[560px]:[&_>_p]:col-[1/-1] max-[560px]:[&_>_p]:text-[9px] max-[560px]:[&_fieldset]:[padding:12px_0_0]
  max-[560px]:[&_fieldset]:[margin:9px_0_0] max-[560px]:[&_legend]:text-[10px]
  max-[560px]:[&_fieldset_label]:text-[9px] max-[560px]:[&_fieldset_label]:mb-[9px]
"><div className="
  talent-filter-title flex items-center gap-[12px] justify-between [&_h2]:text-[15px]
  [&_h2]:tracking-[-0.4px] [&_h2]:font-[550] [&_i]:text-[16px] [&_i]:text-[#9a8ca8]
  max-[1100px]:[&_h2]:text-[13px] max-[800px]:[&_h2]:text-[12px] max-[560px]:col-[1/-1]
  max-[560px]:[&_h2]:text-[17px]
"><h2>A little more specific.</h2><Icon name="equalizer-line"/></div><p>Find a role that fits your life.</p>{[{title:'Location',options:['Remote','New York, NY','Brooklyn, NY','Austin, TX']},{title:'Job type',options:['Full-time','Part-time','Contract']},{title:'Experience',options:['Entry-level','Mid-level','Senior']},{title:'Department',options:['Design','Engineering','Marketing','Customer Success']}].map(group=><fieldset key={group.title}><legend>{group.title}</legend>{group.options.map(option=><label key={option}><input type="checkbox"/>{option}</label>)}</fieldset>)}<div className="
  talent-filter-note mt-[22px] p-[12px] bg-[#f1f2e8] [border:1px_solid_#e3e7d6] rounded-[5px] text-[8px]
  leading-[1.8] text-[#7c886d] flex gap-[7px] items-start [&_i]:text-[13px] [&_i]:mt-[2px]
  max-[560px]:col-[1/-1] max-[560px]:mt-[3px] max-[560px]:text-[8px]
"><Icon name="information-line"/> Filter controls are a UI preview; results remain illustrative.</div></aside>;}
export function ApplicationField({id,label,type='text',placeholder,hint,wide=false,required=false,defaultValue}){const hintId=`${id}-hint`;return <div className={`
  talent-field min-w-[0] [&_label]:block [&_label]:text-[10px] [&_label]:text-[#677a51] [&_label]:font-[550]
  [&_label]:mb-[8px] [&_label_>_span]:text-[#9b85af] [&_label_>_span]:ml-[2px] [&_input]:block
  [&_input]:w-full [&_input]:min-h-[42px] [&_input]:py-[11px] [&_input]:px-[12px]
  [&_input]:[border:1px_solid_#dfe6d3] [&_input]:bg-[#fff] [&_input]:rounded-[5px] [&_input]:text-[11px]
  [&_input]:text-[#606f4e] [&_input]:resize-y [&_textarea]:block [&_textarea]:w-full
  [&_textarea]:min-h-[42px] [&_textarea]:py-[11px] [&_textarea]:px-[12px]
  [&_textarea]:[border:1px_solid_#dfe6d3] [&_textarea]:bg-[#fff] [&_textarea]:rounded-[5px]
  [&_textarea]:text-[11px] [&_textarea]:text-[#606f4e] [&_textarea]:resize-y
  [&_input::placeholder]:text-[#8c997d] [&_textarea::placeholder]:text-[#8c997d] [&_small]:block
  [&_small]:text-[8px] [&_small]:leading-[1.7] [&_small]:text-[#7d8c6b] [&_small]:mt-[7px]
  [&_small]:min-h-[13px] [&.span-full]:col-[1/-1] max-[560px]:[&_label]:text-[10px]
  max-[560px]:[&_input]:text-[11px] max-[560px]:[&_textarea]:text-[11px] max-[560px]:[&_small]:text-[8px]
  max-[560px]:[&_small]:leading-[1.8]
 ${wide?'span-full':''}`}><label htmlFor={id}>{label}{required&&<span aria-label="required"> *</span>}</label>{type==='textarea'?<textarea id={id} name={id} rows="5" placeholder={placeholder} defaultValue={defaultValue} aria-describedby={hintId} aria-required={required}/>:<input id={id} name={id} type={type} placeholder={placeholder} defaultValue={defaultValue} aria-describedby={hintId} aria-required={required}/>}<small id={hintId}>{hint||'Validation feedback will appear here.'}</small></div>;}
export function FormSection({number,title,description,children}){return <section className="
  talent-form-section [border:1px_solid_#e0e5d5] bg-[#fff] rounded-[8px] mb-[23px] overflow-hidden
  [&_>_header]:flex [&_>_header]:items-start [&_>_header]:gap-[13px] [&_>_header]:p-[25px]
  [&_>_header]:[border-bottom:1px_solid_#edf0e6] [&_>_header_>_span]:h-[28px] [&_>_header_>_span]:w-[28px]
  [&_>_header_>_span]:rounded-[6px] [&_>_header_>_span]:grid [&_>_header_>_span]:place-items-center
  [&_>_header_>_span]:shrink-0 [&_>_header_>_span]:bg-[#f1edf6]
  [&_>_header_>_span]:[border:1px_solid_#e4dbee] [&_>_header_>_span]:text-[#9076a8]
  [&_>_header_>_span]:text-[9px] [&_h2]:text-[20px] [&_h2]:tracking-[-0.5px] [&_h2]:font-[450]
  [&_header_p]:text-[10px] [&_header_p]:text-[#83926f] [&_header_p]:mt-[5px]
  max-[1100px]:[&_>_header]:p-[22px] max-[1100px]:[&_h2]:text-[18px] max-[800px]:[&_>_header]:py-[19px]
  max-[800px]:[&_>_header]:px-[17px] max-[800px]:[&_>_header]:gap-[10px] max-[800px]:[&_h2]:text-[16px]
  max-[800px]:[&_header_p]:text-[9px] max-[800px]:[&_>_header_>_span]:h-[24px]
  max-[800px]:[&_>_header_>_span]:w-[24px] max-[800px]:[&_>_header_>_span]:text-[8px]
  max-[560px]:[&_>_header]:py-[21px] max-[560px]:[&_>_header]:px-[18px] max-[560px]:[&_>_header]:gap-[10px]
  max-[560px]:[&_h2]:text-[19px] max-[560px]:[&_h2]:leading-[1.25] max-[560px]:[&_header_p]:text-[9px]
  max-[560px]:[&_header_p]:leading-[1.8]
"><header><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div></header><div className="
  talent-form-fields grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-[23px_20px] p-[25px]
  max-[1100px]:p-[22px] max-[800px]:py-[20px] max-[800px]:px-[17px] max-[800px]:grid-cols-[1fr]
  max-[800px]:gap-[20px] max-[560px]:py-[22px] max-[560px]:px-[18px] max-[560px]:gap-[20px]
">{children}</div></section>;}
export function ApplicationProgress(){return <ol className="
  talent-progress flex list-none [padding:18px_0_22px] [margin:0_0_30px] [border-bottom:1px_solid_#e2e6d6]
  gap-[36px] [&_li]:flex [&_li]:gap-[9px] [&_li]:items-center [&_li]:text-[10px] [&_li]:text-[#899478]
  [&_li_>_span]:h-[23px] [&_li_>_span]:w-[23px] [&_li_>_span]:rounded-[50%]
  [&_li_>_span]:[border:1px_solid_#dce2cf] [&_li_>_span]:bg-[#f3f5ea] [&_li_>_span]:grid
  [&_li_>_span]:place-items-center [&_li_>_span]:text-[8px] [&_li_>_span]:text-[#8d9a79]
  [&_li[aria-current]]:text-[#78608d] [&_li[aria-current]_>_span]:bg-[#ece6f3]
  [&_li[aria-current]_>_span]:border-[#d8cce7] [&_li[aria-current]_>_span]:text-[#8d6fab]
  max-[800px]:gap-[22px] max-[800px]:[&_li]:text-[9px] max-[800px]:[&_li]:gap-[7px] max-[560px]:gap-[12px]
  max-[560px]:justify-between max-[560px]:items-start max-[560px]:mb-[24px] max-[560px]:[padding:0_0_22px]
  max-[560px]:[&_li]:text-[8px] max-[560px]:[&_li]:gap-[7px] max-[560px]:[&_li]:flex-col
  max-[560px]:[&_li]:items-start max-[560px]:[&_li]:flex-1 max-[560px]:[&_li]:leading-[1.6]
  max-[560px]:[&_li_>_span]:h-[22px] max-[560px]:[&_li_>_span]:w-[22px] max-[560px]:[&_li_>_span]:text-[7px]
" aria-label="Application process"><li aria-current="step"><span>01</span>Your details</li><li><span>02</span>Your experience</li><li><span>03</span>A little introduction</li></ol>;}
export function StatusTimeline({outcome='Hired',current='Interview'}){return <ol className="
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
" aria-label="Application stages">{[{name:'Applied',state:'complete',text:'Oct 20'},{name:'Screening',state:'complete',text:'Oct 21'},{name:'Interview',state:'current',text:'Current stage'},{name:'Offer',state:'pending',text:'Next step'},{name:outcome,state:'pending',text:'Final outcome'}].map((s,i)=><li className={s.state} key={s.name} aria-current={s.name===current?'step':undefined}><span className="
  talent-timeline-node w-[40px] h-[40px] rounded-[50%] bg-[#f6f8f0] [border:1px_solid_#e3ead7] grid
  place-items-center text-[#a5b68f] z-[1] [&_i]:text-[17px] max-[560px]:h-[31px] max-[560px]:w-[31px]
  max-[560px]:[&_i]:text-[13px]
"><Icon name={s.state==='complete'?'check-line':s.state==='current'?'chat-voice-line':'subtract-line'}/></span><strong>{s.name}</strong><small>{s.text}</small></li>)}</ol>;}
export function JobSection({title,children}){return <section className="
  talent-description-section mb-[33px] [&_h2]:text-[23px] [&_h2]:tracking-[-0.6px] [&_h2]:font-medium
  [&_h2]:mb-[15px] [&_p]:text-[12px] [&_p]:leading-[1.95] [&_p]:text-[#758066] [&_li]:text-[12px]
  [&_li]:leading-[1.95] [&_li]:text-[#758066] [&_ul]:p-0 [&_ul]:list-none [&_li]:pl-[20px] [&_li]:mb-[11px]
  [&_li]:relative [&_li:before]:[content:''] [&_li:before]:h-[4px] [&_li:before]:w-[4px]
  [&_li:before]:bg-[#a9b68e] [&_li:before]:rounded-[50%] [&_li:before]:absolute [&_li:before]:top-[10px]
  [&_li:before]:left-[2px] max-[800px]:[&_h2]:text-[21px] max-[800px]:[&_p]:text-[11px]
  max-[800px]:[&_li]:text-[11px] max-[560px]:mb-[28px] max-[560px]:[&_h2]:text-[23px]
  max-[560px]:[&_p]:text-[11px] max-[560px]:[&_p]:leading-[1.95] max-[560px]:[&_li]:text-[11px]
  max-[560px]:[&_li]:leading-[1.95]
"><h2>{title}</h2>{children}</section>;}
export function PreviewNotice({children}){return <div className="
  talent-preview-notice text-[9px] text-[#796b88] bg-[#f2eff7] [border:1px_solid_#e5deed] rounded-[6px]
  py-[12px] px-[14px] flex gap-[8px] items-start leading-[1.8] [&_>_i]:text-[14px] [&_>_i]:mt-[2px]
  [&_a]:font-[650] [&_a]:underline [&_a]:[text-underline-offset:3px] [&_a_i]:text-[11px]
  max-[560px]:text-[8px] max-[560px]:py-[11px] max-[560px]:px-[12px] max-[560px]:leading-[1.9]
  max-[560px]:[&_>_i]:text-[13px]
"><Icon name="information-line"/><span>{children}</span></div>;}
export function ReferenceCard(){return <div className="
  talent-reference py-[24px] px-[15px] bg-[#f7f7f0] [border:1px_dashed_#d9e1cc] rounded-[7px] text-center
  mt-[22px] [&_>_span]:block [&_>_span]:text-[7px] [&_>_span]:text-[#7e9068] [&_>_span]:tracking-[1.4px]
  [&_>_strong]:block [&_>_strong]:text-[23px] [&_>_strong]:tracking-[1.1px]
  [&_>_strong]:[font-family:'DM_Sans_Variable',_sans-serif] [&_>_strong]:text-[#6a7a56] [&_>_strong]:mt-[9px]
  [&_>_strong]:font-medium [&_>_small]:block [&_>_small]:text-[8px] [&_>_small]:text-[#80916b]
  [&_>_small]:mt-[6px] max-[560px]:py-[21px] max-[560px]:px-[10px] max-[560px]:mt-[20px]
  max-[560px]:[&_>_strong]:text-[22px] max-[560px]:[&_>_strong]:tracking-[0.6px]
  max-[560px]:[&_>_span]:text-[6px] max-[560px]:[&_>_span]:tracking-[1.2px]
  max-[560px]:[&_>_small]:text-[8px]
"><span>YOUR APPLICATION REFERENCE</span><strong>{applicationExample.reference}</strong><small>Keep this reference somewhere safe.</small></div>;}
export function CandidateEmptyState(){return <EmptyState title="Your next chapter is still ahead." description="Explore the open opportunities and find a role that feels like you."/>;}
export function JobSkeleton(){return <div className="
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
"><Skeleton/></div>;}
