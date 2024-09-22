import { SortOrder } from "../../util/SortOrder";

export type PomodoroTimerOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  todoItemId?: SortOrder;
  updatedAt?: SortOrder;
};
