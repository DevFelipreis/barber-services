import {
	Body,
	Controller,
	Delete,
	NotFoundException,
	Param,
	Patch,
	Post,
	Res,
	UseGuards
} from '@nestjs/common';
import { QueuecustomersService } from './queuecustomers.service';
import CreateQueuecustomersDto from './dto/create-queuecustomers';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';

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

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async attendCustomer(@Res() res, @Param('id') id: string) {
		const customer = await this.queuecustomersService.findCustomerById(+id);

		if (!customer) {
			throw new NotFoundException('O cliente informado não existe');
		}

		await this.queuecustomersService.attendCustomer(customer.id);
		return res.status(HttpStatus.NO_CONTENT).send();
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async deleteCustomer(@Res() res, @Param('id') id: string) {
		const customer = await this.queuecustomersService.findCustomerById(+id);

		if (!customer) {
			throw new NotFoundException('O cliente informado não existe');
		}

		await this.queuecustomersService.deleteCustomer(customer.id);
		return res.status(HttpStatus.NO_CONTENT).send();
	}
}
