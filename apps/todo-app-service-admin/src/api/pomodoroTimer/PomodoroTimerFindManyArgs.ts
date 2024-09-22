import { PomodoroTimerWhereInput } from "./PomodoroTimerWhereInput";
import { PomodoroTimerOrderByInput } from "./PomodoroTimerOrderByInput";

export type PomodoroTimerFindManyArgs = {
  where?: PomodoroTimerWhereInput;
  orderBy?: Array<PomodoroTimerOrderByInput>;
  skip?: number;
  take?: number;
};
