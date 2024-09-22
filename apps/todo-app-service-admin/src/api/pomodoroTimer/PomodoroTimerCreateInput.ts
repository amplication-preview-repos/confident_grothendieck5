import { TodoItemWhereUniqueInput } from "../todoItem/TodoItemWhereUniqueInput";

export type PomodoroTimerCreateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  todoItem?: TodoItemWhereUniqueInput | null;
};
