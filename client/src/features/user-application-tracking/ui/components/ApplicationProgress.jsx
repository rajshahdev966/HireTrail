export function ApplicationProgress() {
  return (
    <ol
      className="
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
"
      aria-label="Application process"
    >
      <li aria-current="step">
        <span>01</span>Your details
      </li>
      <li>
        <span>02</span>Your experience
      </li>
      <li>
        <span>03</span>A little introduction
      </li>
    </ol>
  );
}
