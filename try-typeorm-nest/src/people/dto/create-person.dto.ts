import { PersonEntity } from '../entities/person.entity';
import { OmitType } from '@nestjs/mapped-types';

export class CreatePersonDto extends OmitType(PersonEntity, ['id', 'facilitator', 'gifts']) {}
