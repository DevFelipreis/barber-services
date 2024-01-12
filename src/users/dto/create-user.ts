import { IsEmail, IsNotEmpty } from 'class-validator';

export default class CreateUsersDto {
	@IsNotEmpty({ message: 'O nome deve ser informado' })
	name: string;

	@IsEmail({}, { message: 'O email informado é inválido' })
	@IsNotEmpty({ message: 'O email deve ser informado' })
	email: string;

	@IsNotEmpty({ message: 'A senha deve ser informada' })
	password: string;
}
