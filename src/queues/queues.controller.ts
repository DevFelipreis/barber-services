import {
	BadRequestException,
	Body,
	Controller,
	HttpStatus,
	NotFoundException,
	Post,
	Res
} from '@nestjs/common';
import { QueuesService } from './queues.service';
import CreateQueueDto from './dto/create-queue';
import { ExpertsService } from 'src/experts/experts.service';

@Controller('queues')
export class QueuesController {
	constructor(
		private readonly queuesService: QueuesService,
		private readonly expertsService: ExpertsService
	) {}

	@Post()
	async createQueue(@Body() data: CreateQueueDto, @Res() res) {
		const expertId = await this.expertsService.findOneExpert(data.expertId);

		if (!expertId) {
			throw new NotFoundException('O Expert informado não existe');
		}

		const queueExists = await this.queuesService.queueExpertExistsToday(
			data.expertId
		);

		if (queueExists) {
			throw new BadRequestException(
				'O Expert informado está em uma fila de atendimento'
			);
		}

		const queue = await this.queuesService.createQueue(data);

		return res.status(HttpStatus.CREATED).json({ queue });
	}
}
