import CreateExpertsDto from './create-experts';
import { PartialType } from '@nestjs/mapped-types';

export default class UpdateExpertsDto extends PartialType(CreateExpertsDto) {}
