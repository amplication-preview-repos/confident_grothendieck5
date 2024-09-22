import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PomodoroTimerService } from "./pomodoroTimer.service";
import { PomodoroTimerControllerBase } from "./base/pomodoroTimer.controller.base";

@swagger.ApiTags("pomodoroTimers")
@common.Controller("pomodoroTimers")
export class PomodoroTimerController extends PomodoroTimerControllerBase {
  constructor(
    protected readonly service: PomodoroTimerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
