import classes from "./Aside.module.scss";
import { HiHome } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import LogoutButton from "../../elements/LogoutButton/LogoutButton";

export default function Aside() {
  return (
    <aside className={classes.aside}>
      <Logo />
      <div className={classes.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <HiHome className={classes.linkIcon} size={40} />
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <CgProfile className={classes.linkIcon} size={40} />
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          <IoIosCheckmarkCircle className={classes.linkIcon} size={40} />
        </NavLink>
      </div>

      <LogoutButton />
    </aside>
  );
}
