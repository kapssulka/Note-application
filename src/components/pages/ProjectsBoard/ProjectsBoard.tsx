import classes from "./ProjectsBoard.module.scss";
import Projects from "../../blocks/Projects/Projects";
import AsideProjects from "../../blocks/AsideProjects/AsideProjects";
import { useGetDataQuery } from "../../../redux/projectsApi";
import { auth } from "../../../firebase.js";
import { useEffect, useState } from "react";

export default function ProjectsBoard() {
  const [userId, setUserId] = useState<null | string>(null);

  const { data } = useGetDataQuery([userId as string], {
    skip: !userId,
  });

  useEffect(() => {
    const { currentUser } = auth;
    if (currentUser) setUserId(currentUser.uid);
    else setUserId(null);
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
