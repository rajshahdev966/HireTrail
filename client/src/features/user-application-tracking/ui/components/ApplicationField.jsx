export function ApplicationField({
  id,
  label,
  type = "text",
  placeholder,
  hint,
  wide = false,
  required = false,
  defaultValue,
}) {
  const hintId = `${id}-hint`;
  return (
    <div
      className={`
  talent-field min-w-[0] [&_label]:block [&_label]:text-[10px] [&_label]:text-[#677a51] [&_label]:font-[550]
  [&_label]:mb-[8px] [&_label_>_span]:text-[#9b85af] [&_label_>_span]:ml-[2px] [&_input]:block
  [&_input]:w-full [&_input]:min-h-[42px] [&_input]:py-[11px] [&_input]:px-[12px]
  [&_input]:[border:1px_solid_#dfe6d3] [&_input]:bg-[#fff] [&_input]:rounded-[5px] [&_input]:text-[11px]
  [&_input]:text-[#606f4e] [&_input]:resize-y [&_textarea]:block [&_textarea]:w-full
  [&_textarea]:min-h-[42px] [&_textarea]:py-[11px] [&_textarea]:px-[12px]
  [&_textarea]:[border:1px_solid_#dfe6d3] [&_textarea]:bg-[#fff] [&_textarea]:rounded-[5px]
  [&_textarea]:text-[11px] [&_textarea]:text-[#606f4e] [&_textarea]:resize-y
  [&_input::placeholder]:text-[#8c997d] [&_textarea::placeholder]:text-[#8c997d] [&_small]:block
  [&_small]:text-[8px] [&_small]:leading-[1.7] [&_small]:text-[#7d8c6b] [&_small]:mt-[7px]
  [&_small]:min-h-[13px] [&.span-full]:col-[1/-1] max-[560px]:[&_label]:text-[10px]
  max-[560px]:[&_input]:text-[11px] max-[560px]:[&_textarea]:text-[11px] max-[560px]:[&_small]:text-[8px]
  max-[560px]:[&_small]:leading-[1.8]
 ${wide ? "span-full" : ""}`}
    >
      <label htmlFor={id}>
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows="5"
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-describedby={hintId}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-describedby={hintId}
          aria-required={required}
        />
      )}
      <small id={hintId}>
        {hint || "Validation feedback will appear here."}
      </small>
    </div>
  );
}
