import { Icon } from "../../../../shared/ui/components/index";

export function CandidateFilters() {
  return (
    <aside
      className="
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
"
    >
      <div
        className="
  talent-filter-title flex items-center gap-[12px] justify-between [&_h2]:text-[15px]
  [&_h2]:tracking-[-0.4px] [&_h2]:font-[550] [&_i]:text-[16px] [&_i]:text-[#9a8ca8]
  max-[1100px]:[&_h2]:text-[13px] max-[800px]:[&_h2]:text-[12px] max-[560px]:col-[1/-1]
  max-[560px]:[&_h2]:text-[17px]
"
      >
        <h2>A little more specific.</h2>
        <Icon name="equalizer-line" />
      </div>
      <p>Find a role that fits your life.</p>
      {[
        {
          title: "Location",
          options: ["Remote", "New York, NY", "Brooklyn, NY", "Austin, TX"],
        },
        { title: "Job type", options: ["Full-time", "Part-time", "Contract"] },
        {
          title: "Experience",
          options: ["Entry-level", "Mid-level", "Senior"],
        },
        {
          title: "Department",
          options: ["Design", "Engineering", "Marketing", "Customer Success"],
        },
      ].map((group) => (
        <fieldset key={group.title}>
          <legend>{group.title}</legend>
          {group.options.map((option) => (
            <label key={option}>
              <input type="checkbox" />
              {option}
            </label>
          ))}
        </fieldset>
      ))}
      <div
        className="
  talent-filter-note mt-[22px] p-[12px] bg-[#f1f2e8] [border:1px_solid_#e3e7d6] rounded-[5px] text-[8px]
  leading-[1.8] text-[#7c886d] flex gap-[7px] items-start [&_i]:text-[13px] [&_i]:mt-[2px]
  max-[560px]:col-[1/-1] max-[560px]:mt-[3px] max-[560px]:text-[8px]
"
      >
        <Icon name="information-line" /> Filter controls are a UI preview;
        results remain illustrative.
      </div>
    </aside>
  );
}
