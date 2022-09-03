import { OmitType } from '@nestjs/mapped-types';
import { FacilitatorEntity } from '../entities/facilitator.entity';

export class CreateFacilitatorDto extends OmitType(FacilitatorEntity, ['id']) {}
