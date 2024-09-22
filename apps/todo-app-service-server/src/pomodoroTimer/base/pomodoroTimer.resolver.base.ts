/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { PomodoroTimer } from "./PomodoroTimer";
import { PomodoroTimerCountArgs } from "./PomodoroTimerCountArgs";
import { PomodoroTimerFindManyArgs } from "./PomodoroTimerFindManyArgs";
import { PomodoroTimerFindUniqueArgs } from "./PomodoroTimerFindUniqueArgs";
import { CreatePomodoroTimerArgs } from "./CreatePomodoroTimerArgs";
import { UpdatePomodoroTimerArgs } from "./UpdatePomodoroTimerArgs";
import { DeletePomodoroTimerArgs } from "./DeletePomodoroTimerArgs";
import { TodoItem } from "../../todoItem/base/TodoItem";
import { PomodoroTimerService } from "../pomodoroTimer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PomodoroTimer)
export class PomodoroTimerResolverBase {
  constructor(
    protected readonly service: PomodoroTimerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "read",
    possession: "any",
  })
  async _pomodoroTimersMeta(
    @graphql.Args() args: PomodoroTimerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PomodoroTimer])
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "read",
    possession: "any",
  })
  async pomodoroTimers(
    @graphql.Args() args: PomodoroTimerFindManyArgs
  ): Promise<PomodoroTimer[]> {
    return this.service.pomodoroTimers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PomodoroTimer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "read",
    possession: "own",
  })
  async pomodoroTimer(
    @graphql.Args() args: PomodoroTimerFindUniqueArgs
  ): Promise<PomodoroTimer | null> {
    const result = await this.service.pomodoroTimer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PomodoroTimer)
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "create",
    possession: "any",
  })
  async createPomodoroTimer(
    @graphql.Args() args: CreatePomodoroTimerArgs
  ): Promise<PomodoroTimer> {
    return await this.service.createPomodoroTimer({
      ...args,
      data: {
        ...args.data,

        todoItem: args.data.todoItem
          ? {
              connect: args.data.todoItem,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PomodoroTimer)
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "update",
    possession: "any",
  })
  async updatePomodoroTimer(
    @graphql.Args() args: UpdatePomodoroTimerArgs
  ): Promise<PomodoroTimer | null> {
    try {
      return await this.service.updatePomodoroTimer({
        ...args,
        data: {
          ...args.data,

          todoItem: args.data.todoItem
            ? {
                connect: args.data.todoItem,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PomodoroTimer)
  @nestAccessControl.UseRoles({
    resource: "PomodoroTimer",
    action: "delete",
    possession: "any",
  })
  async deletePomodoroTimer(
    @graphql.Args() args: DeletePomodoroTimerArgs
  ): Promise<PomodoroTimer | null> {
    try {
      return await this.service.deletePomodoroTimer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => TodoItem, {
    nullable: true,
    name: "todoItem",
  })
  @nestAccessControl.UseRoles({
    resource: "TodoItem",
    action: "read",
    possession: "any",
  })
  async getTodoItem(
    @graphql.Parent() parent: PomodoroTimer
  ): Promise<TodoItem | null> {
    const result = await this.service.getTodoItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
