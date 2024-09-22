import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoItemListRelationFilter } from "../todoItem/TodoItemListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  todoItems?: TodoItemListRelationFilter;
  username?: StringFilter;
};
