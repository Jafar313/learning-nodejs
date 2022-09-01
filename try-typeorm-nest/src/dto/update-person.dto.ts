import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';

export class updatePersonDto extends PartialType(CreatePersonDto) {}
