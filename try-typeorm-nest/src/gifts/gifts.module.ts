import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftsController } from './gifts.controller';
import { GiftRepository } from '../repositories/gift.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftEntity } from './entities/gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GiftRepository])],
  controllers: [GiftsController],
  providers: [GiftService],
  exports: [GiftService],
})
export class GiftsModule {}
