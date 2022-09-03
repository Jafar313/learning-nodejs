import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from '../repositories/person.repository';
import { ConfigService } from '@nestjs/config';
import { GeneralConfig } from '../configurations/general-config';

@Injectable()
export class PeopleService {
  constructor(
    @Inject('DefaultLanguage') private readonly _language: string,
    private readonly _configService: GeneralConfig,
    private readonly _personRepository: PersonRepository,
  ) {}
  create(personDto: CreatePersonDto) {
    this._personRepository.create(personDto);
  }

  findAll() {
    return this._configService.config;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
