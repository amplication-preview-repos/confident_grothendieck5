import { PomodoroTimerUpdateManyWithoutTodoItemsInput } from "./PomodoroTimerUpdateManyWithoutTodoItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoItemUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  pomodoroTimers?: PomodoroTimerUpdateManyWithoutTodoItemsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
