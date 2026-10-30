export function Modal({ title, children }) {
  return (
    <dialog className="modal [border:1px_solid_#ddd4e8] rounded-[12px] p-[25px] shadow-[0_12px_50px_#36244420] [&::backdrop]:bg-[#29203266]" aria-label={title}>
      <h2>{title}</h2>
      {children}
      <form method="dialog">
        <button type="submit" className="
          btn inline-flex items-center justify-center gap-[7px] [border:1px_solid_#dedee7] bg-[#fff] text-[#666674]
          py-[9px] px-[13px] rounded-[6px] min-h-[36px] text-[10px] font-semibold leading-[1.5] whitespace-nowrap
          [&_i]:text-[15px] [&:hover]:bg-[#f3f1f8] [&:hover]:border-[#bcb3d9] [&.primary]:bg-[#6a58b9]
          [&.primary]:border-[#6a58b9] [&.primary]:text-[#fff] [&.primary]:shadow-[0_2px_2px_#4837750c]
          [&.primary:hover]:bg-[#58469f] [&.primary:hover]:[transform:translateY(-1px)] secondary
        ">
          Close
        </button>
      </form>
    </dialog>
  );
}
