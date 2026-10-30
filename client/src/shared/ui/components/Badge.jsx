export function Badge({ children }) {
  return (
    <span
      className={`
        badge inline-flex items-center gap-[5px] rounded-[5px] py-[4px] px-[7px] bg-[#f0f0f4] text-[#8e8b9c]
        text-[8px] font-[550] whitespace-nowrap [&_>_span]:h-[4px] [&_>_span]:w-[4px] [&_>_span]:rounded-[50%]
        [&_>_span]:bg-[currentColor] [&:is(.badge-interview)]:bg-[#efebf8] [&:is(.badge-interview)]:text-[#9b88c0]
        [&:is(.badge-screening)]:bg-[#efebf8] [&:is(.badge-screening)]:text-[#9b88c0]
        [&:is(.badge-offer)]:bg-[#faf1df] [&:is(.badge-offer)]:text-[#b5a06c] [&:is(.badge-applied)]:bg-[#eaf0f9]
        [&:is(.badge-applied)]:text-[#8fa5c5] [&:is(.badge-active)]:bg-[#eef3e7]
        [&:is(.badge-active)]:text-[#879c68] [&:is(.badge-hired)]:bg-[#eef3e7] [&:is(.badge-hired)]:text-[#879c68]
        [&:is(.badge-rejected)]:bg-[#f6e9e9] [&:is(.badge-rejected)]:text-[#bd8d8d]
        [&:is(.badge-closed)]:bg-[#f6e9e9] [&:is(.badge-closed)]:text-[#bd8d8d] [&:is(.badge-draft)]:bg-[#f0f0f3]
        [&:is(.badge-draft)]:text-[#9999a4] badge-${String(children).toLowerCase().replaceAll(" ", "-")}`}
    >
      <span />
      {children}
    </span>
  );
}
