import { Icon } from "./Icon";

export function Search({ placeholder = "Search anything...", className = "" }) {
  return (
    <label className={`
      search flex items-center gap-[9px] min-h-[38px] py-0 px-[12px] bg-[#fff] [border:1px_solid_#e6e6ed]
      rounded-[7px] text-[#9293a0] [&_input]:[border:none] [&_input]:[outline:none] [&_input]:w-full
      [&_input]:bg-[transparent] [&_input]:text-[10px] [&_input]:min-w-[0] [&_i]:text-[16px]
     ${className}`}>
      <Icon name="search-line" />
      <input aria-label={placeholder} placeholder={placeholder} />
    </label>
  );
}
