import { Icon } from "./index";

export function PreviewNotice({ children }) {
  return (
    <div
      className="
  talent-preview-notice text-[9px] text-[#796b88] bg-[#f2eff7] [border:1px_solid_#e5deed] rounded-[6px]
  py-[12px] px-[14px] flex gap-[8px] items-start leading-[1.8] [&_>_i]:text-[14px] [&_>_i]:mt-[2px]
  [&_a]:font-[650] [&_a]:underline [&_a]:[text-underline-offset:3px] [&_a_i]:text-[11px]
  max-[560px]:text-[8px] max-[560px]:py-[11px] max-[560px]:px-[12px] max-[560px]:leading-[1.9]
  max-[560px]:[&_>_i]:text-[13px]
"
    >
      <Icon name="information-line" />
      <span>{children}</span>
    </div>
  );
}
