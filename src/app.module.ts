import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { ExpertsModule } from './experts/experts.module';

@Module({
	imports: [PrismaModule, ExpertsModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
