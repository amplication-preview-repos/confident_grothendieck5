import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoItemWhereUniqueInput } from "../todoItem/TodoItemWhereUniqueInput";

export type PomodoroTimerWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  todoItem?: TodoItemWhereUniqueInput;
};
