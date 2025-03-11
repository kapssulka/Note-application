import { useEffect, useRef, useState } from "react";
import DropDownSearch from "../../elements/DropDownSearch/DropDownSearch";
import InputSearch from "../../elements/InputSearch/InputSearch";

import classes from "./SearchBlock.module.scss";
import { useGetDataQuery } from "../../../redux/projectsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { IProjectData } from "../../../types/data";
import { projectSearchByName } from "../../../helpers/utils";

export default function SearchBlock() {
  const [searchText, setSearchText] = useState<string>("");
  const [foundProjects, setFoundProjects] = useState<IProjectData[]>([]);

  const [visibleDropDown, setVisibleDropDown] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const userId = useAppSelector((state) => state.user.userId);
  const { data } = useGetDataQuery([userId as string]);

  useEffect(() => {
    if (data) setFoundProjects(projectSearchByName(data, searchText, 10));
  }, [data, searchText]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (inputRef && inputRef.current?.contains(e.target as Node)) ||
        (dropDownRef && dropDownRef.current?.contains(e.target as Node))
      ) {
        return;
      }

      setVisibleDropDown(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.left}>
      <InputSearch
        ref={inputRef}
        setVisibleDropDown={setVisibleDropDown}
        className={classes.input}
        placeholder="Enter projects or tasks"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <DropDownSearch
        ref={dropDownRef}
        setSearchText={setSearchText}
        setVisibleDropDown={setVisibleDropDown}
        isVisible={visibleDropDown}
        foundProjects={foundProjects}
      />
    </div>
  );
}
