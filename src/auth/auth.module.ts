import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from '../database/prisma.service'; // Import PrismaService
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '1d' }
		})
	],
	providers: [
		AuthService,
		UsersService,
		PrismaService,
		LocalStrategy,
		JwtStrategy
	],
	controllers: [AuthController]
})
export class AuthModule {}
