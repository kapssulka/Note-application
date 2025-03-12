import { Status, Tasks } from "../types/data";

export const isStatusSelectable = (tasks: Tasks, status: Status): boolean => {
  const completedTasks: number = tasks.filter((task) => task.completed).length;

  if (
    (tasks.length == completedTasks && status == "waiting") ||
    (tasks.length == completedTasks && status == "progress")
  )
    return true;

  return false;
};

// change task status when project status changes
export const updateAllTasksStatus = (
  allTasks: Tasks,
  status: Status
): Tasks => {
  let modifyTasks: Tasks = [];

  if (status === "completed") {
    modifyTasks = allTasks.map((item) => ({
      ...item,
      completed: true,
    }));
  }

  if (status === "total") {
    modifyTasks = allTasks.map((item) => ({
      ...item,
      completed: false,
    }));
  }

  return modifyTasks.length > 0 ? modifyTasks : allTasks;
};
