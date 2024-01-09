import {
	BadRequestException,
	Body,
	Controller,
	HttpStatus,
	Post,
	Res
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUsersDto from './dto/create-user';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async createUser(@Body() data: CreateUsersDto, @Res() res) {
		const userEmail = await this.usersService.findUserByEmail(data.email);

		if (userEmail) {
			throw new BadRequestException('O email informado já existe');
		}

		const user = await this.usersService.createUser(data);
		return res.status(HttpStatus.CREATED).json({ user });
	}
}
