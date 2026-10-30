import { Link } from "react-router";
import { jobs } from "../../state/mockJobs";
import { Icon } from "../../../../shared/ui/components/index";
import { CareersHeader } from "../components/CareersHeader";

export function Careers() {
  return (
    <div className="careers-page bg-[#fafaf6] min-h-screen">
      <CareersHeader />
      <section className="
        careers-hero [&_.btn]:mt-[28px] [&_.btn]:py-[13px] [&_.btn]:px-[20px] [&_.eyebrow]:text-[#8b9076]
        [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] relative max-w-[1110px] m-auto
        [padding:85px_50px_65px] [border-bottom:1px_solid_#e6e7dc] [&_h1]:text-[clamp(52px,_6.5vw,_86px)]
        [&_h1]:tracking-[-4px] [&_h1]:leading-[1.06] [&_h1]:font-[450] [&_h1]:[margin:23px_0_25px]
        [&_h1]:text-[#34372e] [&_h1]:relative [&_em]:[font-family:Georgia,_serif] [&_em]:text-[#8b9a66]
        [&_em]:font-normal [&_>_p]:text-[14px] [&_>_p]:text-[#949785] [&_>_p]:leading-[1.9] max-[960px]:py-[60px]
        max-[960px]:px-[40px] max-[700px]:[padding:55px_24px_40px] max-[700px]:[&_h1]:text-[57px]
        max-[700px]:[&_h1]:tracking-[-2.8px] max-[700px]:[&_>_p]:text-[12px]
      " id="our-story">
        <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
          <span className="live-dot w-[5px] h-[5px] rounded-[50%] bg-[#a9ba7d] [display:inline-block] shrink-0 " /> SMALL TEAM. BIG POSSIBILITIES.
        </span>
        <h1>
          Great work.
          <br />
          Even better <em>people.</em>
          <span className="
            careers-star absolute left-[650px] top-[12px] text-[160px] text-[#d6dfb9] leading-[1]
            [transform:rotate(12deg)] max-[1200px]:left-[570px] max-[1200px]:text-[130px] max-[960px]:left-[auto]
            max-[960px]:right-[10px] max-[960px]:text-[110px] max-[700px]:text-[65px] max-[700px]:right-[-5px]
            max-[700px]:top-[2px]
          ">✳</span>
        </h1>
        <p>
          We’re building thoughtful digital experiences.
          <br />
          And a place where you can do the best work of your life.
        </p>
        <a href="#open-roles" className="
          btn inline-flex items-center justify-center gap-[7px] [border:1px_solid_#dedee7] bg-[#fff] text-[#666674]
          py-[9px] px-[13px] rounded-[6px] min-h-[36px] text-[10px] font-semibold leading-[1.5] whitespace-nowrap
          [&_i]:text-[15px] [&:hover]:bg-[#f3f1f8] [&:hover]:border-[#bcb3d9] [&.primary]:bg-[#6a58b9]
          [&.primary]:border-[#6a58b9] [&.primary]:text-[#fff] [&.primary]:shadow-[0_2px_2px_#4837750c]
          [&.primary:hover]:bg-[#58469f] [&.primary:hover]:[transform:translateY(-1px)] primary
        ">
          Find your next chapter <Icon name="arrow-down-line" />
        </a>
        <div className="careers-caption text-[9px] tracking-[1px] text-[#a2a68f] mt-[45px] max-[700px]:text-[8px] max-[700px]:tracking-[0.4px]">
          Curious minds. Kind hearts. A little ambition.
        </div>
      </section>
      <section className="
        culture-strip max-w-[1110px] m-auto grid grid-cols-[repeat(3,_1fr)] gap-[55px] [padding:42px_50px_55px]
        [&_i]:text-[24px] [&_i]:text-[#a3ad84] [&_i]:mb-[15px] [&_i]:block [&_h3]:text-[16px]
        [&_h3]:text-[#656b53] [&_p]:text-[11px] [&_p]:leading-[1.9] [&_p]:text-[#9da08f] [&_p]:mt-[10px]
        max-[700px]:grid-cols-[1fr] max-[700px]:py-[35px] max-[700px]:px-[24px] max-[700px]:gap-[25px]
        max-[700px]:[&_>_div]:pl-[42px] max-[700px]:[&_>_div]:relative max-[700px]:[&_i]:absolute
        max-[700px]:[&_i]:left-[0] max-[700px]:[&_i]:top-[1px] max-[700px]:[&_i]:text-[23px]
        max-[700px]:[&_h3]:text-[15px] max-[700px]:[&_p]:text-[11px] max-[700px]:[&_p]:mt-[7px]
      ">
        <div>
          <Icon name="global-line" />
          <h3>Good work, anywhere.</h3>
          <p>We’re remote-friendly and trust you to find your rhythm.</p>
        </div>
        <div>
          <Icon name="seedling-line" />
          <h3>Room to become.</h3>
          <p>Your growth matters. Learn, experiment, and make your mark.</p>
        </div>
        <div>
          <Icon name="heart-3-line" />
          <h3>People before everything.</h3>
          <p>Real flexibility, thoughtful benefits, and a team that cares.</p>
        </div>
      </section>
      <section className="
        open-roles [&_.eyebrow]:text-[#a1a88a] max-w-[1110px] [padding:55px_50px_70px] m-auto
        [border-top:1px_solid_#e8e8df] [&_h2]:text-[36px] [&_h2]:font-[450] [&_h2]:tracking-[-1px]
        [&_h2]:text-[#4f5443] [&_p]:text-[11px] [&_p]:text-[#a1a48e] [&_p]:mt-[14px]
        max-[700px]:[padding:35px_24px_45px] max-[700px]:[&_h2]:text-[30px]
      " id="open-roles">
        <div className="flex justify-between items-end gap-4">
          <div>
            <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">YOUR NEXT CHAPTER</span>
            <h2>A seat at our table.</h2>
            <p>
              Find a role that feels like you. Bring what makes you different.
            </p>
          </div>
          <span className="
            roles-count text-[9px] text-[#929a7d] [border:1px_solid_#e1e5d2] rounded-[20px] py-[8px] px-[12px]
            whitespace-nowrap max-[700px]:text-[8px]
          ">04 open positions</span>
        </div>
        <div className="
          public-jobs [&_.eyebrow]:text-[8px] [&_.eyebrow]:tracking-[0.8px] [&_.eyebrow]:text-[#a0a58d]
          [&_.eyebrow]:mb-[8px] mt-[30px] [&_>_a]:flex [&_>_a]:items-center [&_>_a]:justify-between
          [&_>_a]:[border-top:1px_solid_#e6e7dc] [&_>_a]:py-[25px] [&_>_a]:px-0
          [&_>_a:last-child]:[border-bottom:1px_solid_#e6e7dc] [&_>_a:hover]:pl-[12px] [&_>_a:hover]:bg-[#f0f1e8]
          [&_h3]:text-[20px] [&_h3]:font-medium [&_h3]:text-[#606650] [&_p]:flex [&_p]:gap-[10px] [&_p]:items-center
          [&_p]:text-[10px] [&_i]:text-[13px] max-[700px]:[&_h3]:text-[17px] max-[700px]:[&_p]:text-[8px]
          max-[700px]:[&_p]:gap-[5px] max-[700px]:[&_p]:flex-wrap max-[700px]:[&_p]:max-w-[265px]
          max-[700px]:[&_>_a]:gap-[10px]
        ">
          {jobs
            .filter((j) => j.status === "Active")
            .map((j) => (
              <Link to={`/company/careers/${j.id}`} key={j.id}>
                <div>
                  <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">{j.department}</span>
                  <h3>{j.title}</h3>
                  <p>
                    <Icon name="map-pin-line" /> {j.location}
                    <span>·</span>
                    {j.type}
                    <span>·</span>
                    {j.salary}
                  </p>
                </div>
                <span className="
                  round-arrow h-[36px] w-[36px] [border:1px_solid_#dde2cd] rounded-[50%] grid place-items-center
                  text-[#a2ae85] [&_i]:text-[17px] max-[700px]:h-[29px] max-[700px]:w-[29px] max-[700px]:shrink-0
                ">
                  <Icon name="arrow-right-up-line" />
                </span>
              </Link>
            ))}
        </div>
      </section>
      <footer className="
        careers-footer max-w-[1110px] m-auto [padding:25px_50px_40px] flex justify-between text-[9px]
        text-[#b0b49d] gap-[20px] [&_strong]:text-[#929b7d] [&_strong]:font-medium [&_strong]:ml-[14px]
        [&_i]:text-[12px] max-[700px]:py-[25px] max-[700px]:px-[24px] max-[700px]:flex-col max-[700px]:text-[8px]
      ">
        <span>© 2026 Acme Studio. A good place to grow.</span>
        <Link to="/">
          Hiring, thoughtfully.{" "}
          <strong>
            Powered by HireTrail <Icon name="arrow-right-up-line" />
          </strong>
        </Link>
      </footer>
    </div>
  );
}
