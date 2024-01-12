import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpStatus,
	NotFoundException,
	Param,
	Patch,
	Post,
	Res,
	UseGuards
} from '@nestjs/common';
import { ExpertsService } from './experts.service';
import CreateExpertsDto from './dto/create-experts';
import UpdateExpertsDto from './dto/update-experts';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';

@Controller('experts')
export class ExpertsController {
	constructor(private readonly expertsService: ExpertsService) {}

	@UseGuards(JwtAuthGuard)
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

	@Get(':id')
	async getExpert(@Res() res, @Param('id') id: string) {
		const expert = await this.expertsService.findOneExpert(id);

		if (!expert) {
			throw new NotFoundException('Não existe o Expert informado');
		}

		return res.json({ expert });
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async updateExpert(
		@Param('id') id: string,
		@Body() data: UpdateExpertsDto,
		@Res() res
	) {
		const expert = await this.expertsService.findOneExpert(id);

		if (!expert) {
			throw new NotFoundException('Não existe o Expert informado');
		}

		let emailExists;

		if (data.email) {
			emailExists = await this.expertsService.findExpertByEmail(data.email);
		}

		if (emailExists && emailExists.email !== expert.email) {
			throw new BadRequestException(
				'Já existe um outro Expert com o email informado'
			);
		}

		await this.expertsService.updateExpert(id, { ...expert, ...data });
		return res.status(HttpStatus.NO_CONTENT).send();
	}
}
