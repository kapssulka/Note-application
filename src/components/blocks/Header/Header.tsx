import classes from "./Header.module.scss";

import UserMenu from "../UserMenu/UserMenu";
import SearchBlock from "../SearchBlock/SearchBlock";

export default function Header() {
  return (
    <header className={classes.header}>
      <SearchBlock />

      <UserMenu />
    </header>
  );
}
