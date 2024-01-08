import { Module } from '@nestjs/common';
import { QueuecustomersService } from './queuecustomers.service';
import { QueuecustomersController } from './queuecustomers.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
	controllers: [QueuecustomersController],
	providers: [QueuecustomersService, PrismaService]
})
export class QueuecustomersModule {}
