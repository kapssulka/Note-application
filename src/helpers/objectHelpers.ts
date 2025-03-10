import { auth } from "../firebase.js";
import { v4 as uuidv4 } from "uuid";
import { IProjectData, ITasks, Tasks } from "../types/data";

export function createNewTask(taskValue: string, completed = false): ITasks {
  const obj: ITasks = {
    id: uuidv4(),
    text: taskValue,
    completed: completed,
  };
  return obj;
}

export function createProjectData(
  title: string,
  description: string,
  tasks: Tasks = []
): IProjectData | null {
  const user = auth.currentUser;

  if (!user) return null;

  const obj: IProjectData = {
    id: uuidv4(),
    userId: user.uid,
    title: title,
    description: description,
    status: "total",
    tasks: tasks,
  };
  return obj;
}

type arrayInputs = (HTMLInputElement | HTMLTextAreaElement)[];

export const createFormProjectData = (
  arrayInputsRef: arrayInputs,
  title: string,
  description: string
): IProjectData | null => {
  const filtredEmptyTasks: arrayInputs = arrayInputsRef.filter(
    (item) => item.value
  );

  const tasks = filtredEmptyTasks.map((item, _) => {
    const obj: ITasks = createNewTask(item.value);
    return obj;
  });

  return createProjectData(title, description, tasks);
};
