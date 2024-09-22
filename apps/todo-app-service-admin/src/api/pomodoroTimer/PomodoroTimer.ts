import { TodoItem } from "../todoItem/TodoItem";

export type PomodoroTimer = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  todoItem?: TodoItem | null;
  updatedAt: Date;
};
