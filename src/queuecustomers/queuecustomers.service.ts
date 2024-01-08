import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

type CreateCustomer = {
	name: string;
	service: string;
	queueId: string;
};

@Injectable()
export class QueuecustomersService {
	constructor(private readonly prisma: PrismaService) {}

	async addCustomer(data: CreateCustomer) {
		return await this.prisma.queueCustomer.create({
			data
		});
	}

	async getExpertQueueToday(expertId: string) {
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		return await this.prisma.queue.findFirst({
			where: {
				data: {
					equals: today
				},
				expertId
			},
			include: {
				expert: true,
				queuecustomers: true
			}
		});
	}
}
