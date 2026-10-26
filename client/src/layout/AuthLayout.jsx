import React from 'react'
import { Brand } from '../components/Layout'
import { Icon } from '../components/ui.jsx'
import { Outlet, useNavigate } from 'react-router'

import { RiArrowLeftLine, RiAsterisk, RiFlowerLine } from '@remixicon/react'

const AuthLayout = () => {
    const navigate = useNavigate();
  return (
     <div className="onboarding-page min-h-screen grid grid-cols-[1fr_1fr] bg-[#fdfcf9] text-[#30322e] max-[640px]:grid-cols-[1fr]">
      <section className="
        onboarding-story [&_.brand]:pl-0 [&_.brand]:self-start [&_.brand]:text-[27px]
        max-[640px]:[&_.brand]:text-[25px] max-[640px]:[&_.brand]:justify-start
        max-[640px]:[&_.brand-mark]:mr-[9px] max-[640px]:[&_.brand-dot]:inline [&_.eyebrow]:text-[#7c6d94]
        [&_.eyebrow]:text-[8px] [&_.eyebrow]:tracking-[1.4px] max-[640px]:[&_.eyebrow]:text-[6px] bg-[#eeedf5]
        py-[38px] px-[52px] flex flex-col justify-between relative overflow-hidden min-h-screen
        [&_h1]:text-[clamp(40px,_4vw,_63px)] [&_h1]:leading-[1.13] [&_h1]:font-[450] [&_h1]:tracking-[-2px]
        [&_h1]:my-[24px] [&_h1]:mx-0 [&_h1]:text-[#3d354a] [&_h1_em]:[font-family:Georgia,_serif]
        [&_h1_em]:font-normal [&_h1_em]:text-[#8c7caa] max-[900px]:p-[32px] max-[900px]:[&_h1]:text-[43px]
        max-[640px]:min-h-[auto] max-[640px]:p-[24px] max-[640px]:[&_h1]:text-[39px]
        max-[640px]:[&_h1]:tracking-[-1.5px] max-[640px]:[&_h1]:my-[14px] max-[640px]:[&_h1]:mx-0
      ">
        <Brand to="/careers" />

        <div className="
          onboarding-story-copy my-[65px] mx-0 [&_>_p]:text-[12px] [&_>_p]:text-[#7f738d] [&_>_p]:leading-[1.9]
          max-[900px]:[&_>_p]:text-[11px] max-[900px]:[&_>_p_br]:hidden max-[640px]:[margin:32px_0_5px]
          max-[640px]:[&_>_p]:text-[10px]
        ">
          <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">
            A LITTLE HELLO. A WORLD OF POSSIBILITY.
          </span>

          <h1>
            Your next chapter.
            <br />
            <em>Make it a good one.</em>
          </h1>

          <p>
            Good people. Thoughtful teams. Work that feels like you.
            <br />
            Take your next step with HireTrail.
          </p>

          <div className="
            onboarding-note flex items-center gap-[18px] bg-[#e4e9d3] [border:1px_solid_#d8dfc5] p-[22px]
            rounded-[8px] max-w-[370px] mt-[48px] [transform:rotate(-3deg)] [&_>_span]:text-[47px]
            [&_>_span]:text-[#99a675] [&_>_span]:leading-[1] [&_strong]:text-[13px] [&_strong]:text-[#626f4b]
            [&_strong]:font-semibold [&_p]:text-[9px] [&_p]:text-[#768460] [&_p]:mt-[6px] [&_p]:leading-[1.8]
            max-[900px]:p-[18px] max-[900px]:gap-[12px] max-[900px]:[&_p]:text-[8px] max-[640px]:hidden
          ">
            <span aria-hidden="true"><RiAsterisk size={60}/></span>
            <div>
              <strong>A place to do your thing.</strong>
              <p>Bring your curiosity. Leave room for possibility.</p>
            </div>
          </div>
        </div>

        <div className="onboarding-story-footer flex items-center gap-[8px] text-[10px] text-[#887c97] [&_i]:text-[17px] max-[640px]:hidden">
          <RiFlowerLine /> A thoughtful way forward.
        </div>
      </section>

      <section className="
        onboarding-content [padding:30px_45px_22px] flex flex-col min-w-[0] max-[900px]:p-[28px]
        max-[640px]:py-[21px] max-[640px]:px-[24px]
      ">
        <span onClick={()=> navigate(("/"))} className="onboarding-back flex gap-2 justify-end">
          <RiArrowLeftLine />  Back to opportunities
        </span>

        <div className="
          onboarding-form w-full max-w-[370px] m-auto py-[38px] px-0 [&_h2]:text-[30px] [&_h2]:tracking-[-1px]
          [&_h2]:font-[450] [&_h2]:text-[#44394f] [&_>_p:not(.onboarding-preview)]:text-[10px]
          [&_>_p:not(.onboarding-preview)]:leading-[1.8] [&_>_p:not(.onboarding-preview)]:text-[#8b7f95]
          [&_>_p:not(.onboarding-preview)]:mt-[9px] max-[900px]:[&_h2]:text-[27px] max-[640px]:py-[25px]
          max-[640px]:px-0 max-[640px]:max-w-[420px] max-[640px]:[&_h2]:text-[29px]
        ">
          <Outlet />
        </div>

        <footer className="onboarding-footer flex justify-between gap-[15px] text-[8px] text-[#a194ac] max-[640px]:text-[7px] max-[640px]:pb-[8px]">
          <span>© 2026 HireTrail</span>
          <span>Good things start with good people.</span>
        </footer>
      </section>
    </div>
  )
}

export default AuthLayout