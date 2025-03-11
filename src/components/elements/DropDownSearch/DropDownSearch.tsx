import { Link } from "react-router-dom";
import classes from "./DropDownSearch.module.scss";
import { IProjectData } from "../../../types/data";
import cn from "classnames";
import { Dispatch, ForwardedRef, forwardRef, SetStateAction } from "react";

interface IProps {
  foundProjects: IProjectData[];
  isVisible: boolean;
  setVisibleDropDown: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
}

function DropDownSearch(
  { foundProjects, isVisible, setVisibleDropDown, setSearchText }: IProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const handleClick = () => {
    setSearchText("");
    setVisibleDropDown(false);
  };

  return (
    <div
      ref={ref}
      className={cn(classes.wrapper, {
        [classes.visible]: isVisible,
      })}
    >
      {foundProjects &&
        foundProjects.map((item) => (
          <Link
            onClick={handleClick}
            to={`projects/${item.id}`}
            key={item.id}
            className={classes.item}
          >
            {item.title}
          </Link>
        ))}
      {foundProjects.length === 0 && (
        <div className={classes.notFound}>Nothing found :(</div>
      )}
    </div>
  );
}

export default forwardRef<HTMLDivElement, IProps>(DropDownSearch);
