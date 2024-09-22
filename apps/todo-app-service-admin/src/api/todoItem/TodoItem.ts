import { PomodoroTimer } from "../pomodoroTimer/PomodoroTimer";
import { User } from "../user/User";

export type TodoItem = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  isCompleted: boolean | null;
  pomodoroTimers?: Array<PomodoroTimer>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
