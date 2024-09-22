import { PomodoroTimer as TPomodoroTimer } from "../api/pomodoroTimer/PomodoroTimer";

export const POMODOROTIMER_TITLE_FIELD = "id";

export const PomodoroTimerTitle = (record: TPomodoroTimer): string => {
  return record.id?.toString() || String(record.id);
};
