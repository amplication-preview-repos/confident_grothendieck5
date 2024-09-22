import { TodoItem as TTodoItem } from "../api/todoItem/TodoItem";

export const TODOITEM_TITLE_FIELD = "title";

export const TodoItemTitle = (record: TTodoItem): string => {
  return record.title?.toString() || String(record.id);
};
