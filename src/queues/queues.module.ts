import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueuesController } from './queues.controller';
import { ExpertsService } from 'src/experts/experts.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
	controllers: [QueuesController],
	providers: [QueuesService, ExpertsService, PrismaService]
})
export class QueuesModule {}
