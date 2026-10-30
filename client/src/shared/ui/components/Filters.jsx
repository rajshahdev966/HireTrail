import { Search } from "./Search";
import { Button } from "./Button";

export function Filters({ search = "Search candidates..." }) {
  return (
    <div className="
      filter-bar flex justify-between gap-[15px] mb-[22px] [&_>_div]:flex [&_>_div]:gap-[9px]
      max-[700px]:flex-col max-[700px]:gap-[12px] max-[700px]:[&_>_div]:flex max-[700px]:[&_>_div]:gap-[7px]
    ">
      <Search placeholder={search} />
      <div>
        <label className="
          select-filter [&_select]:[border:1px_solid_#e3e2eb] [&_select]:rounded-[6px] [&_select]:bg-[white]
          [&_select]:[padding:10px_30px_10px_12px] [&_select]:text-[10px] [&_select]:text-[#878391]
          [&_select]:min-h-[38px] max-[700px]:min-w-[0] max-[700px]:flex-1 max-[700px]:[&_select]:text-[9px]
          max-[700px]:[&_select]:w-full max-[700px]:[&_select]:pl-[8px] max-[700px]:[&_select]:pr-[8px]
        ">
          <select aria-label="Department">
            <option>All departments</option>
            <option>Design</option>
            <option>Engineering</option>
            <option>Marketing</option>
          </select>
        </label>
        <label className="
          select-filter [&_select]:[border:1px_solid_#e3e2eb] [&_select]:rounded-[6px] [&_select]:bg-[white]
          [&_select]:[padding:10px_30px_10px_12px] [&_select]:text-[10px] [&_select]:text-[#878391]
          [&_select]:min-h-[38px] max-[700px]:min-w-[0] max-[700px]:flex-1 max-[700px]:[&_select]:text-[9px]
          max-[700px]:[&_select]:w-full max-[700px]:[&_select]:pl-[8px] max-[700px]:[&_select]:pr-[8px]
        ">
          <select aria-label="Status">
            <option>All statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Closed</option>
          </select>
        </label>
        <Button icon="equalizer-line">Filters</Button>
      </div>
    </div>
  );
}
