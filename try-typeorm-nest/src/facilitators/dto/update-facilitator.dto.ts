import { PartialType } from '@nestjs/mapped-types';
import { CreateFacilitatorDto } from './create-facilitator.dto';

export class UpdateFacilitatorDto extends PartialType(CreateFacilitatorDto) {}
