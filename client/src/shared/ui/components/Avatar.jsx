export function Avatar({ person, size = "" }) {
  return (
    <span className={`
      avatar inline-flex items-center justify-center h-[34px] w-[34px] rounded-[50%] overflow-hidden
      bg-[#e9dce0] text-[#826b7e] shrink-0 text-[11px] font-[650] [&_img]:w-full [&_img]:h-full
      [&_img]:object-cover [&.tiny]:w-[19px] [&.tiny]:h-[19px] [&.large]:h-[82px] [&.large]:w-[82px]
      [&.large]:[border:4px_solid_white] [&.large]:shadow-[0_0_0_1px_#e6e6ec] [&.purple]:bg-[#eeebf8]
      [&.purple]:text-[#8b78ba] [&.blue]:bg-[#eaf0fa] [&.blue]:text-[#7f9cc8] [&.orange]:bg-[#f9eee4]
      [&.orange]:text-[#c99c72] [&.green]:bg-[#edf2e6] [&.green]:text-[#8b9c70] [&.rose]:bg-[#f4e8ec]
      [&.rose]:text-[#b1899a]
     ${person.color || ""} ${size}`}>
      <img src={person.avatar} alt="" loading="lazy" />
      {!person.avatar && person.initials}
    </span>
  );
}
