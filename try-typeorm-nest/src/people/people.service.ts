import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from '../repositories/person.repository';
import { ConfigService } from '@nestjs/config';
import { GeneralConfig } from '../configurations/general-config';
import { CreateGiftDto } from '../gifts/dto/create-gift.dto';
import { PersonEntity } from './entities/person.entity';
import { GiftRepository } from '../repositories/gift.repository';
import { GiftService } from '../gifts/gift.service';

@Injectable()
export class PeopleService {
  constructor(
    @Inject('DefaultLanguage') private readonly _language: string,
    private readonly _configService: GeneralConfig,
    private readonly _personRepository: PersonRepository,
    private readonly _giftService: GiftService,
  ) {}
  create(personDto: CreatePersonDto) {
    console.log('imcoming personDto is: ', personDto);
    const person = new PersonEntity();
    person.firstName = personDto.firstName;
    person.lastName = personDto.lastName;
    person.facilitatorId = personDto.facilitatorId;
    console.log('reposittory status : ', this._personRepository);
    return this._personRepository.save(person);
  }

  findAll() {
    return this._configService.config;
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
    const gift = await this._giftService.create(giftDto);
    const lel = await this._giftService.addPersonGiftRelation(gift.id, personId);
    console.log('rel has been added and its value is: ', lel);
    return `The person id is #${personId} and it gifts is ${giftDto.giftName}`;
  }
}
