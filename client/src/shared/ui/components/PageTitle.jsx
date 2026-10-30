export function PageTitle({ eyebrow, title, description, children }) {
  return (
    <div className="
      page-title flex items-center justify-between gap-[20px] [margin:0_0_25px] [&_p]:text-[11px]
      [&_p]:text-[#898b97] [&_p]:mt-[8px] max-[1200px]:[&_h1]:text-[27px] max-[700px]:items-start
      max-[700px]:flex-col max-[700px]:gap-[12px] max-[700px]:mb-[20px] max-[700px]:[&_h1]:text-[28px]
      max-[700px]:[&_p]:text-[10px] max-[700px]:[&_p]:leading-[1.7]
    ">
      <div>
        {eyebrow && <span className="eyebrow text-[8px] font-bold tracking-[1.5px] text-[#90909c] block mb-[10px] max-[700px]:text-[7px] ">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="
        page-actions max-[1200px]:[&_.btn]:py-[8px] max-[1200px]:[&_.btn]:px-[10px]
        max-[1200px]:[&_.btn]:text-[9px] max-[700px]:[&_.btn]:text-[9px] max-[700px]:[&_.btn]:min-h-[34px] flex
        items-center gap-[9px] pt-[15px] shrink-0 max-[1200px]:gap-[6px] max-[700px]:p-0 max-[700px]:w-full
        max-[700px]:[&_.primary]:ml-auto
      ">{children}</div>
    </div>
  );
}
