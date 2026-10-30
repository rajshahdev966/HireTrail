export function JobSection({ title, children }) {
  return (
    <section
      className="
  talent-description-section mb-[33px] [&_h2]:text-[23px] [&_h2]:tracking-[-0.6px] [&_h2]:font-medium
  [&_h2]:mb-[15px] [&_p]:text-[12px] [&_p]:leading-[1.95] [&_p]:text-[#758066] [&_li]:text-[12px]
  [&_li]:leading-[1.95] [&_li]:text-[#758066] [&_ul]:p-0 [&_ul]:list-none [&_li]:pl-[20px] [&_li]:mb-[11px]
  [&_li]:relative [&_li:before]:[content:''] [&_li:before]:h-[4px] [&_li:before]:w-[4px]
  [&_li:before]:bg-[#a9b68e] [&_li:before]:rounded-[50%] [&_li:before]:absolute [&_li:before]:top-[10px]
  [&_li:before]:left-[2px] max-[800px]:[&_h2]:text-[21px] max-[800px]:[&_p]:text-[11px]
  max-[800px]:[&_li]:text-[11px] max-[560px]:mb-[28px] max-[560px]:[&_h2]:text-[23px]
  max-[560px]:[&_p]:text-[11px] max-[560px]:[&_p]:leading-[1.95] max-[560px]:[&_li]:text-[11px]
  max-[560px]:[&_li]:leading-[1.95]
"
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
}
