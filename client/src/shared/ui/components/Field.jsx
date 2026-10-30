export function Field({
  label,
  type = "text",
  placeholder,
  defaultValue,
  options,
  wide = false,
}) {
  return (
    <label className={`
      field flex flex-col gap-[9px] min-w-[0] [&_>_span]:text-[10px] [&_>_span]:font-semibold
      [&_>_span]:text-[#91809f] [&_input]:w-full [&_input]:bg-[#fff] [&_input]:[border:1px_solid_#e5deed]
      [&_input]:rounded-[6px] [&_input]:py-[11px] [&_input]:px-[12px] [&_input]:text-[11px]
      [&_input]:text-[#8f809d] [&_input]:resize-y [&_input]:min-h-[40px] [&_select]:w-full [&_select]:bg-[#fff]
      [&_select]:[border:1px_solid_#e5deed] [&_select]:rounded-[6px] [&_select]:py-[11px] [&_select]:px-[12px]
      [&_select]:text-[11px] [&_select]:text-[#8f809d] [&_select]:resize-y [&_select]:min-h-[40px]
      [&_textarea]:w-full [&_textarea]:bg-[#fff] [&_textarea]:[border:1px_solid_#e5deed]
      [&_textarea]:rounded-[6px] [&_textarea]:py-[11px] [&_textarea]:px-[12px] [&_textarea]:text-[11px]
      [&_textarea]:text-[#8f809d] [&_textarea]:resize-y [&_textarea]:min-h-[40px]
      [&_input::placeholder]:text-[#c0b4ca] [&_textarea::placeholder]:text-[#c0b4ca]
      [&_input[type="file"]]:text-[9px] [&_input[type="file"]]:bg-[#fcfafe] [&_input[type="file"]]:py-[16px]
      [&_input[type="file"]]:px-[10px] [&_input[type="file"]]:[border-style:dashed]
      max-[700px]:[&_>_span]:text-[9px] max-[700px]:[&_input]:text-[10px] max-[700px]:[&_select]:text-[10px]
      max-[700px]:[&_textarea]:text-[10px]
     ${wide ? "wide col-span-full col-span-full" : ""}`}>
      <span>{label}</span>
      {options ? (
        <select defaultValue={defaultValue}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          rows="4"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      )}
    </label>
  );
}
