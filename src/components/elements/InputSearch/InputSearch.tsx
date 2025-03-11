import classes from "./InputSearch.module.scss";
import cn from "classnames";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface IProps {
  placeholder: string;
  className: string;
}

export default function InputSearch({ placeholder, className }: IProps) {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <label className={cn(classes.wrapper, className)}>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        className={classes.input}
        placeholder={placeholder}
        type="text"
      />

      <button
        disabled={searchText.length < 1}
        className={classes.iconSearchWrapper}
      >
        <CiSearch
          size={40}
          className={cn(classes.iconSearch, {
            [classes.disabled]: searchText.length > 0,
          })}
        />
      </button>
    </label>
  );
}
