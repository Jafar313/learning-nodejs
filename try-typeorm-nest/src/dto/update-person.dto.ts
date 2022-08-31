import { PartialType } from '@nestjs/mapped-types';
import { createPersonDto } from './create-person.dto';

export class updatePersonDto extends PartialType(createPersonDto) {}
