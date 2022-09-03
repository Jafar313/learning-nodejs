import { OmitType } from '@nestjs/mapped-types';
import { GiftEntity } from '../entities/gift.entity';

export class CreateGiftDto extends OmitType(GiftEntity, ['id', 'people']) {}

