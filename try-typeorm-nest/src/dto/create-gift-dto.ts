import { OmitType } from '@nestjs/mapped-types';
import { GiftEntity } from '../entities/gift.Entity';

export class CreateGiftDto extends OmitType(GiftEntity, ['id', 'people']) {}

