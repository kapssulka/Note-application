import { Dispatch, SetStateAction } from "react";
import classes from "./Input.module.scss";

interface IProps {
  name?: string;
  label?: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  valueInput: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function Input({
  name,
  label,
  type = "text",
  placeholder = "",
  valueInput,
  onChange,
}: IProps) {
  return (
    <fieldset className={classes.wrapper}>
      <label className={classes.title} htmlFor={name}>
        {label}
      </label>
      <input
        className={classes.input}
        placeholder={placeholder}
        value={valueInput}
        onChange={(e) => onChange(e.target.value)}
        id={name}
        type={type}
        name={name}
      />
    </fieldset>
  );
}
