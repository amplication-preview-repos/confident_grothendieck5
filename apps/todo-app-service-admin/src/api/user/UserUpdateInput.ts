import { InputJsonValue } from "../../types";
import { TodoItemUpdateManyWithoutUsersInput } from "./TodoItemUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  todoItems?: TodoItemUpdateManyWithoutUsersInput;
  username?: string;
};
