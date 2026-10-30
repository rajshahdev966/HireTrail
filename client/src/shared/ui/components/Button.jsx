import { Link } from "react-router";
import { Icon } from "./Icon";

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
  const Component = to ? Link : "button";
  const navigationProps = to ? { to } : { type: "button" };

  return (
    <Component {...navigationProps} className={`
      btn inline-flex items-center justify-center gap-[7px] [border:1px_solid_#dedee7] bg-[#fff] text-[#666674]
      py-[9px] px-[13px] rounded-[6px] min-h-[36px] text-[10px] font-semibold leading-[1.5] whitespace-nowrap
      [&_i]:text-[15px] [&:hover]:bg-[#f3f1f8] [&:hover]:border-[#bcb3d9] [&.primary]:bg-[#6a58b9]
      [&.primary]:border-[#6a58b9] [&.primary]:text-[#fff] [&.primary]:shadow-[0_2px_2px_#4837750c]
      [&.primary:hover]:bg-[#58469f] [&.primary:hover]:[transform:translateY(-1px)]
     ${variant} ${className}`} {...props}>
      {content}
    </Component>
  );
}
