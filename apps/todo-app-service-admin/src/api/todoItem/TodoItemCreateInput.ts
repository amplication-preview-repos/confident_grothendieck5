import { PomodoroTimerCreateNestedManyWithoutTodoItemsInput } from "./PomodoroTimerCreateNestedManyWithoutTodoItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoItemCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  pomodoroTimers?: PomodoroTimerCreateNestedManyWithoutTodoItemsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
