import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TODOITEM_TITLE_FIELD } from "../todoItem/TodoItemTitle";

export const PomodoroTimerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PomodoroTimers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="startTime" source="startTime" />
        <ReferenceField
          label="todoItem"
          source="todoitem.id"
          reference="TodoItem"
        >
          <TextField source={TODOITEM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
