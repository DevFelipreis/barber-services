import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';

export default class UpdateExpertsDto extends PartialType(CreateExpertsDto) {}
