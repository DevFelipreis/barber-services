import { IsNotEmpty } from 'class-validator';

export default class CreateQueuecustomersDto {
	@IsNotEmpty({ message: 'O nome deve ser informado' })
	name: string;

	@IsNotEmpty({ message: 'O serviço deve ser informado' })
	service: string;

	@IsNotEmpty({ message: 'O id do Expert deve ser informado' })
	expertId: string;
}
