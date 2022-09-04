import { Injectable } from '@nestjs/common';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { GiftRepository } from '../repositories/gift.repository';
import { GiftEntity } from './entities/gift.entity';
import { MssqlParameter } from 'typeorm';

@Injectable()
export class GiftService {
  constructor(private readonly _giftRepository: GiftRepository) {}

  async create(createGiftDto: CreateGiftDto): Promise<GiftEntity> {
    console.log('inserting with createGiftDto...');
    return this._giftRepository.save(createGiftDto);
  }

  findAll() {
    return `This action returns all gifts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gift`;
  }

  update(id: number, updateGiftDto: UpdateGiftDto) {
    return `This action updates a #${id} gift`;
  }

  remove(id: number) {
    return `This action removes a #${id} gift`;
  }

  async addPersonGiftRelation(giftId: number, personId: number) {
    console.log('inserting with addPersonGiftRelation...');
    const gId = new MssqlParameter('giftId', 'numeric', giftId);
    const pId = new MssqlParameter(personId, 'numeric');
    return this._giftRepository.query(
      'INSERT INTO peopleGifts(giftsId, peopleId) VALUES (@giftsId , @peopleId)',
      [gId, pId],
    );
  }
}
