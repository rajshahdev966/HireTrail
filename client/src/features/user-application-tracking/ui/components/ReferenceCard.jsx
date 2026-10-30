import { applicationExample } from "../../state/applicationExample";

export function ReferenceCard() {
  return (
    <div
      className="
  talent-reference py-[24px] px-[15px] bg-[#f7f7f0] [border:1px_dashed_#d9e1cc] rounded-[7px] text-center
  mt-[22px] [&_>_span]:block [&_>_span]:text-[7px] [&_>_span]:text-[#7e9068] [&_>_span]:tracking-[1.4px]
  [&_>_strong]:block [&_>_strong]:text-[23px] [&_>_strong]:tracking-[1.1px]
  [&_>_strong]:[font-family:'DM_Sans_Variable',_sans-serif] [&_>_strong]:text-[#6a7a56] [&_>_strong]:mt-[9px]
  [&_>_strong]:font-medium [&_>_small]:block [&_>_small]:text-[8px] [&_>_small]:text-[#80916b]
  [&_>_small]:mt-[6px] max-[560px]:py-[21px] max-[560px]:px-[10px] max-[560px]:mt-[20px]
  max-[560px]:[&_>_strong]:text-[22px] max-[560px]:[&_>_strong]:tracking-[0.6px]
  max-[560px]:[&_>_span]:text-[6px] max-[560px]:[&_>_span]:tracking-[1.2px]
  max-[560px]:[&_>_small]:text-[8px]
"
    >
      <span>YOUR APPLICATION REFERENCE</span>
      <strong>{applicationExample.reference}</strong>
      <small>Keep this reference somewhere safe.</small>
    </div>
  );
}
