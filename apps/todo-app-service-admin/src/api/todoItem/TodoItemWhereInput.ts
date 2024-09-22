import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PomodoroTimerListRelationFilter } from "../pomodoroTimer/PomodoroTimerListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoItemWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  pomodoroTimers?: PomodoroTimerListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
