import { Icon } from "./Icon";

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
