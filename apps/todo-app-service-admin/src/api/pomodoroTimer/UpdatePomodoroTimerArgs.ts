import { PomodoroTimerWhereUniqueInput } from "./PomodoroTimerWhereUniqueInput";
import { PomodoroTimerUpdateInput } from "./PomodoroTimerUpdateInput";

export type UpdatePomodoroTimerArgs = {
  where: PomodoroTimerWhereUniqueInput;
  data: PomodoroTimerUpdateInput;
};
