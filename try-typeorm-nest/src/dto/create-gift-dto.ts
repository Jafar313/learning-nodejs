import { OmitType } from '@nestjs/mapped-types';
import { giftEntity } from '../entities/gift.entity';

export class CreateGiftDto extends OmitType(giftEntity, ['id', 'people']) {}

