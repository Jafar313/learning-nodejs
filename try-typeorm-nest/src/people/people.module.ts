import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from '../entities/person.entity';
import { giftEntity } from '../entities/gift.entity';
import { facilitatorEntity } from '../entities/facilitator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity, giftEntity, facilitatorEntity])],
  controllers: [PeopleController],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
