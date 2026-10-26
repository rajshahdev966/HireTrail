import { Link } from "react-router";
export const Icon = ({ name, className = "" }) => (
  <i aria-hidden="true" className={`ri-${name} ${className}`} />
);
export function Button({
  children,
  to,
  variant = "secondary",
  icon,
  className = "",
  ...props
}) {
  const content = (
    <>
      {icon && <Icon name={icon} />} {children}
    </>
  );
  return (
    <button type="button" className={`
      btn inline-flex items-center justify-center gap-[7px] [border:1px_solid_#dedee7] bg-[#fff] text-[#666674]
      py-[9px] px-[13px] rounded-[6px] min-h-[36px] text-[10px] font-semibold leading-[1.5] whitespace-nowrap
      [&_i]:text-[15px] [&:hover]:bg-[#f3f1f8] [&:hover]:border-[#bcb3d9] [&.primary]:bg-[#6a58b9]
      [&.primary]:border-[#6a58b9] [&.primary]:text-[#fff] [&.primary]:shadow-[0_2px_2px_#4837750c]
      [&.primary:hover]:bg-[#58469f] [&.primary:hover]:[transform:translateY(-1px)]
     ${variant} ${className}`} {...props}>
      {content}
    </button>
  );
}
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
export function Search({ placeholder = "Search anything...", className = "" }) {
  return (
    <label className={`
      search flex items-center gap-[9px] min-h-[38px] py-0 px-[12px] bg-[#fff] [border:1px_solid_#e6e6ed]
      rounded-[7px] text-[#9293a0] [&_input]:[border:none] [&_input]:[outline:none] [&_input]:w-full
      [&_input]:bg-[transparent] [&_input]:text-[10px] [&_input]:min-w-[0] [&_i]:text-[16px]
     ${className}`}>
      <Icon name="search-line" />
      <input aria-label={placeholder} placeholder={placeholder} />
    </label>
  );
}
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
export function Filters({ search = "Search candidates..." }) {
  return (
    <div className="
      filter-bar flex justify-between gap-[15px] mb-[22px] [&_>_div]:flex [&_>_div]:gap-[9px]
      max-[700px]:flex-col max-[700px]:gap-[12px] max-[700px]:[&_>_div]:flex max-[700px]:[&_>_div]:gap-[7px]
    ">
      <Search placeholder={search} />
      <div>
        <label className="
          select-filter [&_select]:[border:1px_solid_#e3e2eb] [&_select]:rounded-[6px] [&_select]:bg-[white]
          [&_select]:[padding:10px_30px_10px_12px] [&_select]:text-[10px] [&_select]:text-[#878391]
          [&_select]:min-h-[38px] max-[700px]:min-w-[0] max-[700px]:flex-1 max-[700px]:[&_select]:text-[9px]
          max-[700px]:[&_select]:w-full max-[700px]:[&_select]:pl-[8px] max-[700px]:[&_select]:pr-[8px]
        ">
          <select aria-label="Department">
            <option>All departments</option>
            <option>Design</option>
            <option>Engineering</option>
            <option>Marketing</option>
          </select>
        </label>
        <label className="
          select-filter [&_select]:[border:1px_solid_#e3e2eb] [&_select]:rounded-[6px] [&_select]:bg-[white]
          [&_select]:[padding:10px_30px_10px_12px] [&_select]:text-[10px] [&_select]:text-[#878391]
          [&_select]:min-h-[38px] max-[700px]:min-w-[0] max-[700px]:flex-1 max-[700px]:[&_select]:text-[9px]
          max-[700px]:[&_select]:w-full max-[700px]:[&_select]:pl-[8px] max-[700px]:[&_select]:pr-[8px]
        ">
          <select aria-label="Status">
            <option>All statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Closed</option>
          </select>
        </label>
        <Button icon="equalizer-line">Filters</Button>
      </div>
    </div>
  );
}
export function CandidateTable({ candidates, compact = false }) {
  return (
    <div className="table-scroll overflow-auto max-[700px]:[&_table]:min-w-[560px]">
      <table className="
        w-full border-collapse text-left whitespace-nowrap text-[10px] [&_th]:px-[12px] [&_th]:py-[12px]
        [&_th]:text-[9px] [&_th]:font-medium [&_td]:px-[12px] [&_td]:py-[17px] [&_td]:border-b
        [&_td]:border-[#f0f0f4] [&_td]:text-[#7f808d] [&_td]:text-[9px] [&_tr>:first-child]:pl-[20px]
        [&_tr>:first-child]:pr-[2px] [&_tr>:last-child]:pr-[17px] [&_tr>:last-child]:pl-[3px]
        [&_tbody_tr:last-child_td]:border-b-0 [&_tbody_tr:hover]:bg-[#fdfcfe] min-[1500px]:[&_td]:py-[22px]
      ">
        <thead className="bg-[#fafafb] border-y border-[#f0f0f4] text-[#9393a0]">
          <tr>
            <th>
              <input type="checkbox" aria-label="Select all candidates" />
            </th>
            <th>Candidate</th>
            <th>Applied for</th>
            <th>Stage</th>
            {!compact && <th>Applied date</th>}
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td>
                <input type="checkbox" aria-label={`Select ${c.name}`} />
              </td>
              <td>
                <Link to={`/candidates/${c.id}`} className="
                  person [&_.avatar]:w-[29px] [&_.avatar]:h-[29px] flex items-center gap-[10px] [&_strong]:text-[10px]
                  [&_strong]:block [&_strong]:font-[650] [&_strong]:text-[#4c4d5b] [&_small]:block [&_small]:text-[8px]
                  [&_small]:text-[#a1a0ad] [&_small]:mt-[4px] min-[1500px]:[&_strong]:text-[12px]
                  min-[1500px]:[&_small]:text-[9px]
                ">
                  <Avatar person={c} />
                  <span>
                    <strong>{c.name}</strong>
                    <small>{c.email}</small>
                  </span>
                </Link>
              </td>
              <td>{c.role}</td>
              <td>
                <Badge>{c.stage}</Badge>
              </td>
              {!compact && <td className="muted text-[#a59bab] text-[10px]">{c.date}</td>}
              <td>
                <Link
                  to={`/candidates/${c.id}`}
                  aria-label={`View ${c.name}`}
                  className="
                    icon-button w-[27px] h-[28px] inline-flex items-center justify-center text-[#9b9aa9] bg-[none]
                    [border:none] rounded-[5px] shrink-0 [&:hover]:bg-[#eeebf7] [&:hover]:text-[#7863ac] [&_i]:text-[15px]
                  "
                >
                  <Icon name="arrow-right-up-line" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function CandidateCard({ candidate: c }) {
  return (
    <Link to={`/candidates/${c.id}`} className="
      candidate-card block [border:1px_solid_#e6e2ee] rounded-[8px] py-[15px] px-[12px] bg-[white] mb-[12px]
      shadow-[0_2px_3px_#30204003] [transition:transform_0.2s,_box-shadow_0.2s]
      [&:hover]:[transform:translateY(-3px)] [&:hover]:shadow-[0_6px_14px_#3726420b] [&_h3]:mt-[12px]
      [&_h3]:text-[12px] [&_>_p]:text-[8px] [&_>_p]:text-[#a59bac] [&_>_p]:mt-[5px]
      [&_footer]:[border-top:1px_solid_#f0ecf4] [&_footer]:mt-[16px] [&_footer]:pt-[12px] [&_footer]:flex
      [&_footer]:justify-between [&_footer]:gap-[5px] [&_footer]:text-[7px] [&_footer]:text-[#aea4b6]
      [&_footer_span]:flex [&_footer_span]:gap-[4px] [&_footer_span]:items-center [&_footer_i]:text-[10px]
    ">
      <div className="flex justify-between items-start">
        <Avatar person={c} />
        <span className="rating text-[10px] text-[#bca26b] inline-flex items-center gap-[4px] [&_i]:text-[11px]">
          <Icon name="star-fill" />
          {c.rating}
        </span>
      </div>
      <h3>{c.name}</h3>
      <p>{c.role}</p>
      <div className="
        skill-tags flex gap-[4px] flex-wrap mt-[15px] [&_>_span]:text-[7px] [&_>_span]:bg-[#f5f3f8]
        [&_>_span]:[border:1px_solid_#eeebf3] [&_>_span]:py-[4px] [&_>_span]:px-[6px] [&_>_span]:rounded-[4px]
        [&_>_span]:text-[#9a8daa]
      ">
        {c.skills.slice(0, 2).map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <footer>
        <span>
          <Icon name="briefcase-line" /> {c.experience}
        </span>
        <span>
          <Icon name="chat-3-line" /> 3 <Icon name="attachment-2" /> 1
        </span>
      </footer>
    </Link>
  );
}
export function EmptyState({
  title = "A fresh start",
  description = "New applications will appear here.",
}) {
  return (
    <div className="
      empty-state text-center py-[60px] px-[20px] [&_>_i]:text-[35px] [&_>_i]:text-[#b6a5c9] [&_>_i]:block
      [&_>_i]:mb-[20px] [&_p]:mt-[10px] [&_p]:text-[#a999b5]
    ">
      <Icon name="inbox-2-line" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
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
