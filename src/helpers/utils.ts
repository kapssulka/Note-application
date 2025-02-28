import { IProjectData, Status, Tasks } from "../types/data";

// calcPersentComplitedTasks
export const calcPersentComplitedTasks = (tasks: Tasks): number => {
  let persentCompleted: number = 0;
  if (tasks.length > 0) {
    const completed: Tasks = tasks.filter((task) => task.completed === true);

    persentCompleted = (100 * completed.length) / tasks.length;
  }

  return Math.round(persentCompleted);
};

// returns projects with the specified status

export const getProjectsByStatus = (
  data: IProjectData[],
  status: Status
): IProjectData[] => {
  return data?.filter((item) => item.status === status) || [];
};

//
export const adjustHeight = (textarea: HTMLTextAreaElement): void => {
  if (textarea) {
    textarea.style.height = "auto"; // Сбрасываем высоту
    textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем высоту на основе содержимого
  }
};
