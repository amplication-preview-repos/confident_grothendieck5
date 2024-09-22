import { InputJsonValue } from "../../types";
import { TodoItemCreateNestedManyWithoutUsersInput } from "./TodoItemCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  todoItems?: TodoItemCreateNestedManyWithoutUsersInput;
  username: string;
};
