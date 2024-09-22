/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TodoItemWhereUniqueInput } from "../../todoItem/base/TodoItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TodoItemUpdateManyWithoutUsersInput {
  @Field(() => [TodoItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoItemWhereUniqueInput],
  })
  connect?: Array<TodoItemWhereUniqueInput>;

  @Field(() => [TodoItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoItemWhereUniqueInput],
  })
  disconnect?: Array<TodoItemWhereUniqueInput>;

  @Field(() => [TodoItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoItemWhereUniqueInput],
  })
  set?: Array<TodoItemWhereUniqueInput>;
}

export { TodoItemUpdateManyWithoutUsersInput as TodoItemUpdateManyWithoutUsersInput };
