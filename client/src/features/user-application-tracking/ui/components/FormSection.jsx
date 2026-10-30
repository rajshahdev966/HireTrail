export function FormSection({ number, title, description, children }) {
  return (
    <section
      className="
  talent-form-section [border:1px_solid_#e0e5d5] bg-[#fff] rounded-[8px] mb-[23px] overflow-hidden
  [&_>_header]:flex [&_>_header]:items-start [&_>_header]:gap-[13px] [&_>_header]:p-[25px]
  [&_>_header]:[border-bottom:1px_solid_#edf0e6] [&_>_header_>_span]:h-[28px] [&_>_header_>_span]:w-[28px]
  [&_>_header_>_span]:rounded-[6px] [&_>_header_>_span]:grid [&_>_header_>_span]:place-items-center
  [&_>_header_>_span]:shrink-0 [&_>_header_>_span]:bg-[#f1edf6]
  [&_>_header_>_span]:[border:1px_solid_#e4dbee] [&_>_header_>_span]:text-[#9076a8]
  [&_>_header_>_span]:text-[9px] [&_h2]:text-[20px] [&_h2]:tracking-[-0.5px] [&_h2]:font-[450]
  [&_header_p]:text-[10px] [&_header_p]:text-[#83926f] [&_header_p]:mt-[5px]
  max-[1100px]:[&_>_header]:p-[22px] max-[1100px]:[&_h2]:text-[18px] max-[800px]:[&_>_header]:py-[19px]
  max-[800px]:[&_>_header]:px-[17px] max-[800px]:[&_>_header]:gap-[10px] max-[800px]:[&_h2]:text-[16px]
  max-[800px]:[&_header_p]:text-[9px] max-[800px]:[&_>_header_>_span]:h-[24px]
  max-[800px]:[&_>_header_>_span]:w-[24px] max-[800px]:[&_>_header_>_span]:text-[8px]
  max-[560px]:[&_>_header]:py-[21px] max-[560px]:[&_>_header]:px-[18px] max-[560px]:[&_>_header]:gap-[10px]
  max-[560px]:[&_h2]:text-[19px] max-[560px]:[&_h2]:leading-[1.25] max-[560px]:[&_header_p]:text-[9px]
  max-[560px]:[&_header_p]:leading-[1.8]
"
    >
      <header>
        <span>{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </header>
      <div
        className="
  talent-form-fields grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-[23px_20px] p-[25px]
  max-[1100px]:p-[22px] max-[800px]:py-[20px] max-[800px]:px-[17px] max-[800px]:grid-cols-[1fr]
  max-[800px]:gap-[20px] max-[560px]:py-[22px] max-[560px]:px-[18px] max-[560px]:gap-[20px]
"
      >
        {children}
      </div>
    </section>
  );
}
