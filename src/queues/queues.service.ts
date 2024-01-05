import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import CreateQueueDto from "./dto/create-queue";

@Injectable()
export class QueuesService {
  constructor(private readonly prisma: PrismaService) {}

  async createQueue(data: CreateQueueDto) {
    return await this.prisma.queue.create({ data });
  }

  async queueExpertExistsToday(expertId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return await this.prisma.queue.findFirst({
      where: {
        data: {
          equals: today,
        },
        expertId,
      },
    });
  }

  async getQueues() {
    return await this.prisma.queue.findMany({
      include: {
        expert: true,
      },
    });
  }
  async getExpertQueues(expertId: string) {
    return await this.prisma.queue.findMany({
      where: {
        expertId,
      },
      include: {
        expert: true,
      },
    });
  }
}
