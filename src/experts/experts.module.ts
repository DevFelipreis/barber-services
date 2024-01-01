import { Module } from '@nestjs/common';
import { ExpertsController } from './experts.controller';
import { ExpertsService } from './experts.service';
import { PrismaService } from '../database/prisma.service';

@Module({
	controllers: [ExpertsController],
	providers: [ExpertsService, PrismaService],
	exports: [ExpertsService]
})
export class ExpertsModule {}
