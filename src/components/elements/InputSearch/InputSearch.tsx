import classes from "./InputSearch.module.scss";
import cn from "classnames";
import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CiSearch } from "react-icons/ci";

interface IProps {
  placeholder: string;
  className: string;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setVisibleDropDown: Dispatch<SetStateAction<boolean>>;
}

function InputSearch(
  {
    placeholder,
    className,
    searchText,
    setSearchText,
    setVisibleDropDown,
  }: IProps,
  ref?: ForwardedRef<HTMLInputElement>
) {
  useEffect(() => {
    if (searchText.length > 0) setVisibleDropDown(true);
    else setVisibleDropDown(false);
  }, [searchText]);

  return (
    <label className={cn(classes.wrapper, className)}>
      <input
        ref={ref}
        onChange={(e) => setSearchText(e.target.value)}
        onClick={(e) => {
          if (searchText.length > 0) setVisibleDropDown(true);
        }}
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

export default forwardRef<HTMLInputElement, IProps>(InputSearch);
