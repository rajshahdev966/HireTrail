import { Icon, Button } from "../../../../shared/ui/components/index";

export function CandidateSearch({ compact = false }) {
  return (
    <div
      className={`
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
 ${compact ? "is-compact" : ""}`}
    >
      <label>
        <Icon name="search-line" />
        <input
          aria-label="Job title or keyword"
          placeholder="Job title, skill, or a little inspiration"
        />
      </label>
      <label>
        <Icon name="map-pin-line" />
        <input aria-label="Preferred location" placeholder="City or remote" />
      </label>
      <Button to="/careers/jobs" variant="primary">
        Explore jobs <Icon name="arrow-right-line" />
      </Button>
    </div>
  );
}
