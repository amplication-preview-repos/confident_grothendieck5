import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TodoItemTitle } from "../todoItem/TodoItemTitle";

export const PomodoroTimerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
