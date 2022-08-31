import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonEntity } from '../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(PersonEntity) private readonly _repository: Repository<PersonEntity>,
  ) {}

  async getPeople() {
    return this._repository.find();
  }
}
