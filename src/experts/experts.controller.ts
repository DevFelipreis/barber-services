// experts.controller.ts
import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpStatus,
	Post,
	Res
} from '@nestjs/common';
import { ExpertsService } from './experts.service';
import CreateExpertsDto from './dto/create-experts';

@Controller('experts')
export class ExpertsController {
	constructor(private readonly expertsService: ExpertsService) {}

	@Post()
	async create(@Body() data: CreateExpertsDto, @Res() res) {
		const expertExists = await this.expertsService.findExpertByEmail(
			data.email
		);

		if (expertExists) {
			throw new BadRequestException(
				'Já existe um Expert com o email informado'
			);
		}

		const expert = await this.expertsService.createExpert(data);

		return res.status(HttpStatus.CREATED).json({ expert });
	}

	@Get()
	async getAllExperts(@Res() res) {
		const experts = await this.expertsService.findAllExperts();
		return res.json({ experts });
	}
}
