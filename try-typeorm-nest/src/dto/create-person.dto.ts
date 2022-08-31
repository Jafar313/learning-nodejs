import { PersonEntity } from '../entities/person.entity';
import { OmitType } from '@nestjs/mapped-types';

export class createPersonDto extends OmitType(PersonEntity, ['id']) {}
