import { IsEmail, IsNotEmpty } from 'class-validator';

export default class CreateExpertsDto {
	@IsNotEmpty({ message: 'O nome é obrigatório' })
	name: string;

	@IsNotEmpty({ message: 'o email é obrigatório' })
	@IsEmail({}, { message: 'O email é inválido' })
	email: string;

	phone: string;
}
