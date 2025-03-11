import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";
import AsideProjects from "../../blocks/AsideProjects/AsideProjects";
import { useGetDataQuery } from "../../../redux/projectsApi";
import { auth } from "../../../firebase.js";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setUserId } from "../../../redux/userSlice";

export default function ProjectsBoard() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userId);

  const { data } = useGetDataQuery([userId as string], {
    skip: !userId,
  });

  useEffect(() => {
    const { currentUser } = auth;
    if (currentUser) {
      dispatch(setUserId(currentUser.uid));
    } else setUserId(null);
  }, []);

  return (
    <section className={classes.wrapper}>
      {data && (
        <>
          <Projects data={data} />
          <AsideProjects data={data} />
        </>
      )}
    </section>
  );
}
