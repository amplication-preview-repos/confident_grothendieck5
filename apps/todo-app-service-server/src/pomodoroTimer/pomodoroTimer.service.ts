import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PomodoroTimerServiceBase } from "./base/pomodoroTimer.service.base";

@Injectable()
export class PomodoroTimerService extends PomodoroTimerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
