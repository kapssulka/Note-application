import { ReactNode } from "react";
import classes from "./IconHoverWrapper.module.scss";

interface IProps {
  children: ReactNode;
}

export default function IconHoverWrapper({ children }: IProps) {
  return <div className={classes.wrapper}>{children}</div>;
}
