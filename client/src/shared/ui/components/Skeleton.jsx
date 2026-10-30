export function Skeleton() {
  return (
    <div className="
      skeleton p-[20px] [animation:pulse_1.8s_ease-in-out_infinite] [&_span]:h-[20px] [&_span]:rounded-[5px]
      [&_span]:block [&_span]:mb-[10px] [&_span]:bg-[#eee9f4] [&_span:nth-child(2)]:w-[75%]
      [&_span:nth-child(3)]:w-[45%]
    " aria-label="Loading content">
      <span />
      <span />
      <span />
    </div>
  );
}
