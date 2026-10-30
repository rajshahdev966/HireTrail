import { Link } from "react-router";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

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
