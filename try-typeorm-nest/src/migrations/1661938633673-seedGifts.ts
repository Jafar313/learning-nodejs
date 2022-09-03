import { MigrationInterface, QueryRunner } from 'typeorm';
import { GiftEntity } from '../gifts/entities/gift.entity';
import { CreateGiftDto } from '../gifts/dto/create-gift.dto';

export class seedGifts1661938633673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const gifts: CreateGiftDto[] = [];

    for (let i = 0; i < 100; i++) {
      gifts.push({ giftName: `some gift ${Math.floor(Math.random() * 100)}` });
    }
    await queryRunner.manager.save(GiftEntity, gifts);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query('delete from gifts');
  }
}
