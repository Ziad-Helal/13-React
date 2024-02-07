import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLink_Props {
  to: string;
  className?: string;
  onClick?: VoidFunction;
}

export const NavigationLink: FC<NavigationLink_Props> = ({
  to,
  className = "",
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive ? "bg-secondary rounded-md " : "").concat(
          `p-2 block capitalize ${className}`
        )
      }
      onClick={onClick}
    >
      {to}
    </NavLink>
  );
};
