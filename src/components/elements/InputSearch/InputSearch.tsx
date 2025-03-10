import classes from "./InputSearch.module.scss";
import cn from "classnames";
import { CiSearch } from "react-icons/ci";

interface IProps {
  placeholder: string;
  className: string;
}

export default function InputSearch({ placeholder, className }: IProps) {
  return (
    <label className={cn(classes.wrapper, className)}>
      <input className={classes.input} placeholder={placeholder} type="text" />
      <CiSearch size={40} className={classes.iconSearch} />
    </label>
  );
}
