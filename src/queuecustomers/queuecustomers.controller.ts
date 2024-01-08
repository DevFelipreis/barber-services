import { Body, Controller, Post, Res } from '@nestjs/common';
import { QueuecustomersService } from './queuecustomers.service';
import CreateQueuecustomersDto from './dto/create-queuecustomers';
import { BadRequestException, HttpStatus } from '@nestjs/common';

@Controller('queuecustomers')
export class QueuecustomersController {
	constructor(private readonly queuecustomersService: QueuecustomersService) {}

	@Post()
	async addCustomer(@Body() data: CreateQueuecustomersDto, @Res() res) {
		const queueExists = await this.queuecustomersService.getExpertQueueToday(
			data.expertId
		);

		if (!queueExists) {
			throw new BadRequestException(
				'O Expert informado não possui uma fila de atendimento'
			);
		}

		const customer = await this.queuecustomersService.addCustomer({
			name: data.name,
			service: data.service,
			queueId: queueExists.id
		});

		return res.status(HttpStatus.CREATED).json({ customer });
	}
}
