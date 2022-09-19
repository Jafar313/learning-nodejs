import { Inject, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from '../repositories/person.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GeneralConfig } from '../configurations/general.config';
import { CreateGiftDto } from '../gifts/dto/create-gift.dto';
import { PersonEntity } from './entities/person.entity';
import { GiftRepository } from '../repositories/gift.repository';
import { GiftService } from '../gifts/gift.service';

@Injectable()
export class PeopleService {
  constructor(
    private readonly _personRepository: PersonRepository,
    private readonly _configs: ConfigService,
  ) {
    console.log('**************the configuration in loaded and entire it is: ', _configs.get<string>('NODE_ENV'));
  }
  create(personDto: CreatePersonDto) {
    console.log('imcoming personDto is: ', personDto);
    const person = new PersonEntity();
    person.firstName = personDto.firstName;
    person.lastName = personDto.lastName;
    person.facilitatorId = personDto.facilitatorId;
    console.log('reposittory status : ', this._personRepository);
    return this._personRepository.save(person);
  }

  async findAll() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return 'find all people';
  }

  findOne(id: number) {
    return `This action returns a #${id} person \n`;
  }

  findPersonGifts(id: number) {
    return `This action returns gifts of #${id} person \n`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person \n`;
  }

  remove(id: number) {
    return `This action removes a #${id} person \n`;
  }

  async createGift(personId: number, giftDto: CreateGiftDto) {

    return `The person id is # and it gifts is `;
  }
}
