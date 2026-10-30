export function Panel({ title, subtitle, action, children, className = "" }) {
  return (
    <section className={`panel bg-[white] [border:1px_solid_#e6e7ed] rounded-[9px] min-w-[0] overflow-hidden ${className}`}>
      <div className="
        panel-heading flex justify-between items-center gap-[12px] [padding:20px_20px_0] mb-[20px]
        [&_p]:text-[9px] [&_p]:text-[#9a9aa5] [&_p]:mt-[5px] min-[1500px]:[&_h2]:text-[18px]
        min-[1500px]:[&_p]:text-[10px] max-[960px]:[padding:18px_16px_0] max-[960px]:[&_h2]:text-[14px]
        max-[960px]:[&_p]:text-[8px] max-[700px]:[&_h2]:text-[16px] max-[700px]:[&_p]:text-[9px]
      ">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
