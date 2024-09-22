import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TodoItemTitle } from "../todoItem/TodoItemTitle";

export const PomodoroTimerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput
          source="todoItem.id"
          reference="TodoItem"
          label="todoItem"
        >
          <SelectInput optionText={TodoItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
