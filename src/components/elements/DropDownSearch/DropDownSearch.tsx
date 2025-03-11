import { Link } from "react-router-dom";
import classes from "./DropDownSearch.module.scss";

export default function DropDownSearch() {
  return (
    <div className={classes.wrapper}>
      <Link to={"#"} className={classes.item}>
        Проект 1
      </Link>

      <div className={classes.notFound}>Nothing found :(</div>
    </div>
  );
}
