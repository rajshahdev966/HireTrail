export function CompanyMark({ company, large = false }) {
  return (
    <span
      aria-hidden="true"
      className={`
  talent-company-mark [&.purple]:bg-[#eeebf8] [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa]
  [&.blue]:text-[#7f9cc8] [&.orange]:bg-[#f9eee4] [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6]
  [&.green]:text-[#8b9c70] [&.rose]:bg-[#f4e8ec] [&.rose]:text-[#b1899a] w-[41px] h-[41px]
  [border:1px_solid_#dae1cb] bg-[#ebefdf] text-[#75865b] rounded-[9px] inline-flex items-center
  justify-center shrink-0 [font-family:"DM_Sans_Variable",_sans-serif] font-semibold text-[25px] tracking-[-2px]
  pr-[2px] leading-[1] [&.lavender]:bg-[#eee9f5] [&.lavender]:text-[#8973a5] [&.lavender]:border-[#e1d9ed]
  [&.peach]:bg-[#f6ecdf] [&.peach]:text-[#b1956b] [&.peach]:border-[#ecdecb] [&.is-large]:w-[59px]
  [&.is-large]:h-[59px] [&.is-large]:text-[36px] [&.is-large]:rounded-[12px] max-[1100px]:w-[35px]
  max-[1100px]:h-[35px] max-[1100px]:text-[23px] max-[560px]:w-[38px] max-[560px]:h-[38px]
  max-[560px]:text-[25px]
 ${company.color} ${large ? "is-large" : ""}`}
    >
      {company.mark} 
    </span>
  );
}


