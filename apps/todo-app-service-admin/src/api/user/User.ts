import { JsonValue } from "type-fest";
import { TodoItem } from "../todoItem/TodoItem";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  todoItems?: Array<TodoItem>;
  updatedAt: Date;
  username: string;
};
