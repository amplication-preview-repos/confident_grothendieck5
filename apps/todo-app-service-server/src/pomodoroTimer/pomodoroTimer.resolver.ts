import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PomodoroTimerResolverBase } from "./base/pomodoroTimer.resolver.base";
import { PomodoroTimer } from "./base/PomodoroTimer";
import { PomodoroTimerService } from "./pomodoroTimer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PomodoroTimer)
export class PomodoroTimerResolver extends PomodoroTimerResolverBase {
  constructor(
    protected readonly service: PomodoroTimerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
