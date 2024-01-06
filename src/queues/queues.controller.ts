import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpStatus,
	NotFoundException,
	Post,
	Query,
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

	@Get()
	async getExpertQueues(@Query('expertId') expertId: string, @Res() res) {
		if (expertId) {
			const expert = await this.expertsService.findOneExpert(expertId);

			if (!expert) {
				throw new NotFoundException('O Expert informado não existe');
			}

			const queues = await this.queuesService.getExpertQueues(expertId);
			return res.status(HttpStatus.OK).json({ queues });
		}

		const queues = await this.queuesService.getQueues();
		return res.status(HttpStatus.OK).json({ queues });
	}

	@Get('today')
	async getQueueToday(@Res() res) {
		const queues = await this.queuesService.getQueueToday();
		return res.status(HttpStatus.OK).json({ queues });
	}
}
