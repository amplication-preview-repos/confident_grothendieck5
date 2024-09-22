import { TodoItemWhereUniqueInput } from "../todoItem/TodoItemWhereUniqueInput";

export type PomodoroTimerUpdateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  todoItem?: TodoItemWhereUniqueInput | null;
};
