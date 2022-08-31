import { MigrationInterface, QueryRunner } from 'typeorm';
import { giftEntity } from '../entities/gift.entity';
import { CreateGiftDto } from '../dto/create-gift-dto';

export class seedGifts1661938633673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const gifts: CreateGiftDto[] = [];
    gifts.push({ giftName: 'gift1' });
    await queryRunner.manager.save(giftEntity, gifts);
    console.log('entire up method of first migration');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(giftEntity, '');
  }
}
