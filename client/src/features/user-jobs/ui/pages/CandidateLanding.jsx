import { Link } from "react-router";
import { CandidateSearch } from "../components/CandidateSearch";
import { CompanyMark } from "../../../../shared/ui/components/CompanyMark";
import { Button, Icon } from "../../../../shared/ui/components/index";
import { careerJobs, categories, companies } from "../../state/careerData";
import { JobCard } from "../components/JobCard";




export function CandidateLanding() {
  return (
    <>
      <section className="
        talent-hero [&_.talent-kicker]:flex [&_.talent-kicker]:items-center [&_.talent-kicker]:gap-[8px]
        [&_.talent-kicker]:text-[8px] max-[800px]:[&_.talent-kicker]:text-[7px]
        max-[800px]:[&_.talent-kicker]:tracking-[1.2px] max-[560px]:[&_.talent-kicker]:text-[6px]
        max-[560px]:[&_.talent-kicker]:tracking-[1.1px] max-[1100px]:[&_.talent-search]:w-[calc(100%_+_145px)]
        max-[800px]:[&_.talent-search]:w-[calc(100%_+_190px)] max-[560px]:[&_.talent-search]:w-full
        max-[560px]:[&_.talent-search]:p-[6px] max-[560px]:[&_.talent-search]:gap-[0]
        max-[560px]:[&_.talent-search]:flex-wrap max-[560px]:[&_.talent-search]:mt-[25px] grid
        grid-cols-[1.5fr_1fr] relative pt-[74px] pb-[58px] [&_h1]:text-[65px] [&_h1]:leading-[1.06]
        [&_h1]:tracking-[-3px] [&_h1]:[margin:24px_0_23px] [&_h1]:relative [&_h1]:z-[1]
        min-[1450px]:[&_h1]:text-[75px] min-[1450px]:pt-[90px] min-[1450px]:pb-[75px]
        max-[1100px]:grid-cols-[1.45fr_1fr] max-[1100px]:pt-[65px] max-[1100px]:[&_h1]:text-[57px]
        max-[800px]:pt-[50px] max-[800px]:pb-[40px] max-[800px]:grid-cols-[1fr_0.65fr]
        max-[800px]:[&_h1]:text-[49px] max-[560px]:block max-[560px]:pt-[38px] max-[560px]:pb-[30px]
        max-[560px]:[&_h1]:text-[48px] max-[560px]:[&_h1]:leading-[1.07] max-[560px]:[&_h1]:tracking-[-2.4px]
        max-[560px]:[&_h1]:mt-[21px] talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto
        min-[1450px]:max-w-[1300px] max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px]
        max-[800px]:pr-[25px] max-[560px]:pl-[20px] max-[560px]:pr-[20px]
      ">
        <div className="
          talent-hero-copy [&_>_p]:text-[12px] [&_>_p]:text-[#777d6f] [&_>_p]:leading-[1.9]
          max-[800px]:[&_>_p]:text-[11px] max-[560px]:[&_>_p]:text-[11px] max-[560px]:[&_>_p_br]:hidden
        ">
          <span className="
            talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
            max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
          ">
            <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h1>
            Good work.
            <br />
            The right people.
            <br />
            <em>Your kind of place.</em>
          </h1>
          <p>
            You bring the curiosity. We’ll bring the possibilities.
            <br />
            Discover thoughtful teams doing work that matters.
          </p>
          <CandidateSearch />
          <div className="
            talent-search-suggestions flex gap-[12px] items-center mt-[15px] text-[8px] relative z-[2] flex-wrap
            [&_>_span]:text-[#858d79] [&_>_a]:text-[#747c67] [&_>_a]:[border-bottom:1px_solid_#dfe3d4]
            [&_i]:text-[10px] max-[560px]:text-[7px] max-[560px]:gap-[9px] max-[560px]:mt-[13px]
            max-[560px]:[&_>_span]:basis-[100%]
          ">
            <span>A little inspiration:</span>
            <Link to="/careers/jobs">Product design</Link>
            <Link to="/careers/jobs">Engineering</Link>
            <Link to="/careers/jobs">
              Remote work <Icon name="arrow-right-up-line" />
            </Link>
          </div>
        </div>
        <div className="talent-hero-art relative min-w-[0] min-h-[300px] min-[1450px]:mr-[30px] max-[560px]:hidden" aria-hidden="true">
          <div className="
            talent-art-orbit w-[340px] h-[340px] [border:1px_solid_#e5e7d8] rounded-[50%] absolute right-[-18px]
            top-[20px] [&.inner]:w-[265px] [&.inner]:h-[265px] [&.inner]:right-[20px] [&.inner]:top-[58px]
            max-[1100px]:w-[280px] max-[1100px]:h-[280px] max-[1100px]:right-[-7px] max-[1100px]:[&.inner]:w-[210px]
            max-[1100px]:[&.inner]:h-[210px] max-[1100px]:[&.inner]:right-[28px] max-[1100px]:[&.inner]:top-[55px]
            max-[800px]:w-[220px] max-[800px]:h-[220px] max-[800px]:right-[-10px] max-[800px]:top-[25px]
            max-[800px]:[&.inner]:w-[170px] max-[800px]:[&.inner]:h-[170px] max-[800px]:[&.inner]:right-[15px]
            max-[800px]:[&.inner]:top-[50px]
          " />
          <div className="
            talent-art-orbit w-[340px] h-[340px] [border:1px_solid_#e5e7d8] rounded-[50%] absolute right-[-18px]
            top-[20px] [&.inner]:w-[265px] [&.inner]:h-[265px] [&.inner]:right-[20px] [&.inner]:top-[58px]
            max-[1100px]:w-[280px] max-[1100px]:h-[280px] max-[1100px]:right-[-7px] max-[1100px]:[&.inner]:w-[210px]
            max-[1100px]:[&.inner]:h-[210px] max-[1100px]:[&.inner]:right-[28px] max-[1100px]:[&.inner]:top-[55px]
            max-[800px]:w-[220px] max-[800px]:h-[220px] max-[800px]:right-[-10px] max-[800px]:top-[25px]
            max-[800px]:[&.inner]:w-[170px] max-[800px]:[&.inner]:h-[170px] max-[800px]:[&.inner]:right-[15px]
            max-[800px]:[&.inner]:top-[50px] inner
          " />
          <span className="
            talent-art-star absolute right-[225px] top-[0] text-[#bdb0d3] text-[87px] leading-[1]
            [transform:rotate(-7deg)] z-[1] min-[1450px]:right-[250px] max-[1100px]:right-[190px]
            max-[1100px]:text-[70px] max-[800px]:right-[145px] max-[800px]:text-[59px] max-[800px]:top-[3px]
          ">✳</span>
          <div className="
            talent-art-note absolute right-[15px] top-[58px] w-[235px] [padding:25px_25px_22px] bg-[#e9edd9]
            [border:1px_solid_#dce2c7] rounded-[3px] [transform:rotate(8deg)] shadow-[0_9px_15px_#34392905]
            [&_>_span]:text-[7px] [&_>_span]:tracking-[1.5px] [&_>_span]:text-[#7c8863] [&_strong]:block
            [&_strong]:[font-family:'DM_Sans_Variable',_sans-serif] [&_strong]:text-[32px] [&_strong]:tracking-[-1.1px]
            [&_strong]:leading-[1.1] [&_strong]:my-[23px] [&_strong]:mx-0 [&_strong]:text-[#67734f]
            [&_strong]:font-medium [&_em]:[font-family:Georgia,_serif] [&_em]:font-normal [&_small]:text-[7px]
            [&_small]:text-[#7b8763] min-[1450px]:w-[260px] min-[1450px]:p-[30px] min-[1450px]:[&_strong]:text-[36px]
            max-[1100px]:w-[205px] max-[1100px]:right-[6px] max-[1100px]:top-[55px] max-[1100px]:p-[20px]
            max-[1100px]:[&_strong]:text-[29px] max-[800px]:w-[175px] max-[800px]:right-[0] max-[800px]:top-[45px]
            max-[800px]:p-[18px] max-[800px]:[&_>_span]:text-[5px] max-[800px]:[&_strong]:text-[25px]
            max-[800px]:[&_strong]:my-[17px] max-[800px]:[&_strong]:mx-0 max-[800px]:[&_small]:text-[6px]
          ">
            <span>MORE THAN A JOB TITLE.</span>
            <strong>
              A place to
              <br />
              do <em>your thing.</em>
            </strong>
            <div className="talent-note-line h-[1px] w-full bg-[#d4dcc0] mb-[12px]" />
            <small>A little ambition looks good on you.</small>
          </div>
          <div className="
            talent-art-role flex gap-[11px] items-center absolute top-[263px] right-[48px] p-[17px] bg-[#fff]
            [border:1px_solid_#e5e2e9] rounded-[8px] [transform:rotate(-7deg)] shadow-[0_8px_15px_#34392904] w-[282px]
            [&_>_div_>_span]:block [&_>_div_>_span]:text-[7px] [&_>_div_>_span]:tracking-[0.4px]
            [&_>_div_>_span]:text-[#9a8da8] [&_strong]:block [&_strong]:text-[10px] [&_strong]:font-semibold
            [&_strong]:my-[3px] [&_strong]:mx-0 [&_small]:text-[8px] [&_small]:text-[#8e9183] [&_>_i]:ml-auto
            [&_>_i]:text-[#a69ab9] [&_>_i]:text-[17px] min-[1450px]:top-[290px] max-[1100px]:right-[12px]
            max-[1100px]:w-[260px] max-[1100px]:top-[255px] max-[800px]:w-[217px] max-[800px]:top-[225px]
            max-[800px]:right-[0] max-[800px]:p-[12px] max-[800px]:gap-[9px] max-[800px]:[&_strong]:text-[8px]
            max-[800px]:[&_small]:text-[6px] max-[800px]:[&_>_div_>_span]:text-[6px]
          ">
            <CompanyMark company={companies[0]} />
            <div>
              <span>A fresh possibility</span>
              <strong>Senior Product Designer</strong>
              <small>Acme Studio · Remote</small>
            </div>
            <Icon name="arrow-right-up-line" />
          </div>
          <div className="
            talent-art-label absolute bottom-[8px] right-[25px] text-[8px] text-[#8a937d] flex gap-[7px] items-center
            [transform:rotate(4deg)] max-[1100px]:text-[7px] max-[1100px]:right-[0] max-[1100px]:bottom-[0]
            max-[800px]:hidden
          ">
            <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> Your next chapter is out there.
          </div>
        </div>
      </section>
      <section className="
        talent-company-strip [&_.talent-company-mark]:w-[29px] [&_.talent-company-mark]:h-[29px]
        [&_.talent-company-mark]:bg-[transparent]! [&_.talent-company-mark]:[border:none]!
        [&_.talent-company-mark]:text-[#85916d] [&_.talent-company-mark]:text-[25px]
        max-[560px]:[&_.talent-company-mark]:w-[19px] max-[560px]:[&_.talent-company-mark]:h-[21px]
        max-[560px]:[&_.talent-company-mark]:text-[21px] [&_.talent-strip-end]:tracking-[0]!
        [&_.talent-strip-end]:text-right [&_.talent-strip-end]:text-[8px]! [&_.talent-strip-end]:text-[#929b82]!
        max-[800px]:[&_.talent-strip-end]:hidden [border-block:1px_solid_#e5e7db] bg-[#f3f4eb]
        [&_strong]:[font-family:'DM_Sans_Variable',_sans-serif] [&_strong]:text-[19px] [&_strong]:tracking-[-0.5px]
        [&_strong]:text-[#6b735c] [&_strong]:font-[550] max-[1100px]:[&_strong]:text-[17px]
        max-[800px]:[&_strong]:text-[14px] max-[560px]:[&_strong]:text-[12px]
        max-[560px]:[&_strong]:whitespace-nowrap
      ">
        <div className="
          talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
          max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
          max-[560px]:pl-[20px] max-[560px]:pr-[20px]
        ">
          <span>
            SMALL TEAMS.
            <br />
            BIG POSSIBILITIES.
          </span>
          {companies.map((c) => (
            <div key={c.id}>
              <CompanyMark company={c} />
              <strong>{c.name}</strong>
            </div>
          ))}
          <span className="talent-strip-end ">
            A little less noise.
            <br />A lot more purpose.
          </span>
        </div>
      </section>
      <section className="
        talent-section pt-[58px] pb-[58px] min-[1450px]:pt-[70px] min-[1450px]:pb-[70px] max-[560px]:pt-[36px]
        max-[560px]:pb-[36px] talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto
        min-[1450px]:max-w-[1300px] max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px]
        max-[800px]:pr-[25px] max-[560px]:pl-[20px] max-[560px]:pr-[20px]
      ">
        <div className="
          talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
          [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
          [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
          max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
          max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
          max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
        ">
          <div>
            <span className="
              talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
              max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
            ">HANDPICKED POSSIBILITIES</span>
            <h2>A few roles worth a closer look.</h2>
            <p>Interesting work. Thoughtful teams. A fresh start.</p>
          </div>
          <Link className="
            talent-inline-link text-[10px] flex items-center gap-[11px] text-[#75638f] whitespace-nowrap
            [&_i]:text-[14px] [&:hover]:text-[#4e3b73] max-[800px]:text-[8px] max-[800px]:gap-[7px]
            max-[560px]:text-[9px]
          " to="/careers/jobs">
            Explore all opportunities <Icon name="arrow-right-line" />
          </Link>
        </div>
        <div className="
          talent-jobs-grid grid grid-cols-[repeat(3,_minmax(0,_1fr))] gap-[18px]
          max-[800px]:grid-cols-[repeat(2,_minmax(0,_1fr))] max-[800px]:gap-[16px] max-[560px]:grid-cols-[1fr]
        ">
          {careerJobs
            .filter((j) => j.featured)
            .map((j) => (
              <JobCard job={j} key={j.id} />
            ))}
        </div>
      </section>
      <section className="talent-categories-section bg-[#f0f0e9] [border-block:1px_solid_#e4e5da] py-[47px] px-0 max-[560px]:py-[33px] max-[560px]:px-0">
        <div className="
          talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px]
          max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px]
          max-[560px]:pl-[20px] max-[560px]:pr-[20px]
        ">
          <div className="
            talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
            [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
            [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
            max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
            max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
            max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
          ">
            <div>
              <span className="
                talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
                max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
              ">FOLLOW YOUR CURIOSITY</span>
              <h2>Where do you want to make your mark?</h2>
            </div>
            <span className="talent-section-aside text-[9px] text-[#858f74] max-[800px]:hidden">
              Different talents. Shared ambition.
            </span>
          </div>
          <div className="
            talent-categories grid grid-cols-[repeat(4,_minmax(0,_1fr))] gap-[22px]
            [&_>_a]:[border-left:1px_solid_#d9ddce] [&_>_a]:[padding:5px_10px_0_20px]
            [&_>_a]:[transition:transform_0.2s] [&_>_a:first-child]:pl-0 [&_>_a:first-child]:[border-left:0]
            [&_>_a:hover]:[transform:translateY(-4px)] [&_>_a_>_i]:text-[25px] [&_>_a_>_i]:text-[#89966f]
            [&_>_a_>_i]:block [&_>_a_>_i]:mb-[22px] [&_h3]:text-[17px] [&_h3]:font-medium [&_p]:text-[10px]
            [&_p]:text-[#7e8870] [&_p]:mt-[6px] [&_footer]:flex [&_footer]:justify-between [&_footer]:mt-[23px]
            [&_footer]:text-[#7c886c] [&_footer]:text-[9px] [&_footer_i]:text-[15px] max-[800px]:gap-[15px]
            max-[800px]:[&_>_a]:pl-[13px] max-[800px]:[&_h3]:text-[15px] max-[800px]:[&_p]:text-[9px]
            max-[560px]:grid-cols-[1fr_1fr] max-[560px]:gap-[25px_20px] max-[560px]:[&_>_a]:[padding:3px_8px_0_15px]
            max-[560px]:[&_>_a:nth-child(3)]:[border-left:0] max-[560px]:[&_>_a:nth-child(3)]:pl-0
            max-[560px]:[&_>_a_>_i]:mb-[15px] max-[560px]:[&_>_a_>_i]:text-[23px] max-[560px]:[&_h3]:text-[16px]
            max-[560px]:[&_p]:text-[9px] max-[560px]:[&_footer]:mt-[15px] max-[560px]:[&_footer]:text-[8px]
          ">
            {categories.map((c) => (
              <Link to="/careers/jobs" key={c.name}>
                <Icon name={c.icon} />
                <h3>{c.name}</h3>
                <p>{c.note}</p>
                <footer>
                  <span>{c.count}</span>
                  <Icon name="arrow-right-up-line" />
                </footer>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="
        talent-section pt-[58px] pb-[58px] min-[1450px]:pt-[70px] min-[1450px]:pb-[70px] max-[560px]:pt-[36px]
        max-[560px]:pb-[36px] talent-container max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto
        min-[1450px]:max-w-[1300px] max-[1100px]:pl-[32px] max-[1100px]:pr-[32px] max-[800px]:pl-[25px]
        max-[800px]:pr-[25px] max-[560px]:pl-[20px] max-[560px]:pr-[20px]
      ">
        <div className="
          talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
          [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
          [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
          max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
          max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
          max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
        ">
          <div>
            <span className="
              talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
              max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
            ">FRESH ON THE TRAIL</span>
            <h2>New doors, just opened.</h2>
            <p>Be among the first to say hello.</p>
          </div>
          <Link className="
            talent-inline-link text-[10px] flex items-center gap-[11px] text-[#75638f] whitespace-nowrap
            [&_i]:text-[14px] [&:hover]:text-[#4e3b73] max-[800px]:text-[8px] max-[800px]:gap-[7px]
            max-[560px]:text-[9px]
          " to="/careers/jobs?view=list">
            View all new roles <Icon name="arrow-right-line" />
          </Link>
        </div>
        <div className="talent-job-list flex flex-col gap-[0] [border-top:1px_solid_#e2e5d8]">
          {careerJobs.slice(0, 4).map((j) => (
            <JobCard key={j.id} job={j} list />
          ))}
        </div>
      </section>
      <section className="
        talent-company-highlights pt-0 pb-[55px] max-[560px]:pt-0 max-[560px]:pb-[35px] talent-container
        max-w-[1220px] pl-[50px] pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px] max-[1100px]:pl-[32px]
        max-[1100px]:pr-[32px] max-[800px]:pl-[25px] max-[800px]:pr-[25px] max-[560px]:pl-[20px]
        max-[560px]:pr-[20px]
      ">
        <div className="
          talent-section-heading flex justify-between items-end gap-[25px] mb-[26px] [&_h2]:text-[28px]
          [&_h2]:font-[450] [&_h2]:tracking-[-0.9px] [&_h2]:leading-[1.2] [&_h2]:mt-[10px] [&_p]:text-[11px]
          [&_p]:text-[#808775] [&_p]:mt-[10px] max-[1100px]:[&_h2]:text-[26px] max-[800px]:[&_h2]:text-[23px]
          max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[16px] max-[560px]:mb-[21px]
          max-[560px]:[&_h2]:text-[25px] max-[560px]:[&_h2]:mt-[8px] max-[560px]:[&_h2]:leading-[1.2]
          max-[560px]:[&_h2]:max-w-[310px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:mt-[8px]
        ">
          <div>
            <span className="
              talent-kicker block text-[9px] font-[650] tracking-[1.6px] text-[#6e7661] leading-[1.6]
              max-[560px]:text-[7px] max-[560px]:tracking-[1.3px]
            ">
              IT’S THE PEOPLE THAT MAKE THE PLACE
            </span>
            <h2>Meet a few good teams.</h2>
          </div>
        </div>
        <div className="
          talent-company-grid max-[560px]:[&_.talent-company-mark.is-large]:absolute
          max-[560px]:[&_.talent-company-mark.is-large]:top-[25px]
          max-[560px]:[&_.talent-company-mark.is-large]:left-[20px]
          max-[560px]:[&_.talent-company-mark.is-large]:h-[45px]
          max-[560px]:[&_.talent-company-mark.is-large]:w-[45px]
          max-[560px]:[&_.talent-company-mark.is-large]:text-[29px] grid grid-cols-[repeat(3,_1fr)] gap-[20px]
          [&_>_article]:p-[28px] [&_>_article]:bg-[#eef0e4] [&_>_article]:[border:1px_solid_#e0e5d3]
          [&_>_article]:rounded-[8px] [&_>_article.lavender]:bg-[#f0edf4] [&_>_article.lavender]:border-[#e5dfeb]
          [&_>_article.peach]:bg-[#f5f0e7] [&_>_article.peach]:border-[#ece4d7] [&_h3]:text-[21px]
          [&_h3]:font-medium [&_h3]:mt-[24px] [&_p]:text-[10px] [&_p]:text-[#777f6b] [&_p]:mt-[6px] [&_small]:block
          [&_small]:text-[8px] [&_small]:text-[#7c856e] [&_small]:mt-[14px] [&_a]:flex [&_a]:items-center
          [&_a]:justify-between [&_a]:text-[9px] [&_a]:text-[#67765a] [&_a]:mt-[27px]
          [&_a]:[border-top:1px_solid_#dbe0ce] [&_a]:pt-[17px] [&_.lavender_a]:border-[#e0d8e8]
          [&_.lavender_a]:text-[#82718f] [&_.peach_a]:border-[#e8decd] [&_.peach_a]:text-[#8a785d]
          [&_a_i]:text-[15px] min-[1450px]:[&_>_article]:p-[32px] max-[800px]:gap-[13px]
          max-[800px]:[&_>_article]:py-[20px] max-[800px]:[&_>_article]:px-[17px] max-[800px]:[&_h3]:text-[19px]
          max-[800px]:[&_p]:text-[9px] max-[800px]:[&_small]:text-[7px] max-[800px]:[&_a]:text-[8px]
          max-[560px]:grid-cols-[1fr] max-[560px]:gap-[15px] max-[560px]:[&_>_article]:relative
          max-[560px]:[&_>_article]:[padding:23px_22px_23px_85px] max-[560px]:[&_h3]:mt-0
          max-[560px]:[&_h3]:text-[22px] max-[560px]:[&_p]:text-[10px] max-[560px]:[&_small]:text-[8px]
          max-[560px]:[&_small]:mt-[10px] max-[560px]:[&_a]:text-[9px] max-[560px]:[&_a]:mt-[20px]
          max-[560px]:[&_a]:pt-[15px]
        ">
          {companies.map((c) => (
            <article key={c.id} className={c.color}>
              <CompanyMark company={c} large />
              <h3>{c.name}</h3>
              <p>{c.tagline}</p>
              <small>
                {c.location} · {c.size}
              </small>
              <Link to="/careers/jobs">
                Meet your next team <Icon name="arrow-right-up-line" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="
        talent-closing [&_.btn]:ml-auto max-[1100px]:[&_.btn]:text-[10px] max-[800px]:[&_.btn]:ml-[68px] flex
        gap-[24px] items-center bg-[#ecebdf] [border:1px_solid_#e2e1d5] rounded-[9px] py-[29px] px-[32px]
        mb-[65px] max-w-[1120px] [&_>_span]:text-[58px] [&_>_span]:leading-[1] [&_>_span]:text-[#9ba877]
        [&_h2]:text-[26px] [&_h2]:font-[450] [&_h2]:tracking-[-0.7px] [&_p]:text-[10px] [&_p]:mt-[8px]
        [&_p]:text-[#7b836c] min-[1450px]:max-w-[1200px] max-[1100px]:ml-[32px] max-[1100px]:mr-[32px]
        max-[1100px]:p-[25px] max-[1100px]:gap-[19px] max-[1100px]:[&_h2]:text-[23px] max-[800px]:ml-[25px]
        max-[800px]:mr-[25px] max-[800px]:flex-wrap max-[800px]:p-[24px] max-[800px]:gap-[16px]
        max-[800px]:[&_h2]:text-[24px] max-[800px]:[&_>_span]:text-[52px] max-[800px]:[&_p]:text-[10px]
        max-[560px]:[margin:0_20px_36px] max-[560px]:py-[25px] max-[560px]:px-[20px] max-[560px]:gap-[14px]
        max-[560px]:items-start max-[560px]:[&_>_span]:text-[43px] max-[560px]:[&_>_div]:flex-1
        max-[560px]:[&_h2]:text-[24px] max-[560px]:[&_h2]:leading-[1.2] max-[560px]:[&_h2]:max-w-[235px]
        max-[560px]:[&_p]:text-[10px] max-[560px]:[&_p]:leading-[1.8] talent-container max-w-[1220px] pl-[50px]
        pr-[50px] my-0 mx-auto min-[1450px]:max-w-[1300px] max-[1100px]:pl-[32px] max-[1100px]:pr-[32px]
        max-[800px]:pl-[25px] max-[800px]:pr-[25px] max-[560px]:pl-[20px] max-[560px]:pr-[20px]
      ">
        <span>✳</span>
        <div>
          <h2>A small hello. A whole new chapter.</h2>
          <p>
            No account needed. Just you, your experience, and a little
            possibility.
          </p>
        </div>
        <Button to="/careers/jobs" variant="primary">
          Find your next role <Icon name="arrow-right-line" />
        </Button>
      </section>
    </>
  );
}