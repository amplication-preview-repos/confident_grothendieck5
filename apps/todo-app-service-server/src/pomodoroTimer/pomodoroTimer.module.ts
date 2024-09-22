import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PomodoroTimerModuleBase } from "./base/pomodoroTimer.module.base";
import { PomodoroTimerService } from "./pomodoroTimer.service";
import { PomodoroTimerController } from "./pomodoroTimer.controller";
import { PomodoroTimerResolver } from "./pomodoroTimer.resolver";

@Module({
  imports: [PomodoroTimerModuleBase, forwardRef(() => AuthModule)],
  controllers: [PomodoroTimerController],
  providers: [PomodoroTimerService, PomodoroTimerResolver],
  exports: [PomodoroTimerService],
})
export class PomodoroTimerModule {}
