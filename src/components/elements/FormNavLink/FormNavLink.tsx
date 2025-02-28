import { ReactNode } from "react";
import classes from "./FormNavLink.module.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  children: ReactNode;
  to: string;
}

export default function FormNavLink({ children, to }: IProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ""}`
      }
    >
      {children}
    </NavLink>
  );
}
