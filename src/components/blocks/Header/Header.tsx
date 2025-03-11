import classes from "./Header.module.scss";

import InputSearch from "../../elements/InputSearch/InputSearch";
import UserMenu from "../UserMenu/UserMenu";
import DropDownSearch from "../../elements/DropDownSearch/DropDownSearch";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <InputSearch
          className={classes.input}
          placeholder="Enter projects or tasks"
        />

        <DropDownSearch />
      </div>

      <UserMenu />
    </header>
  );
}
