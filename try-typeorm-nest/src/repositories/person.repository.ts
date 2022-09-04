import { EntityRepository, Repository } from 'typeorm';
import { PersonEntity } from '../people/entities/person.entity';

@EntityRepository(PersonEntity)
export class PersonRepository extends Repository<PersonEntity> {
  constructor() {
    super();
    console.log('the person repository has been instantiated...');
  }
}
