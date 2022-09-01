import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from '../entities/person.entity';
import { GiftEntity } from '../entities/gift.Entity';
import { FacilitatorEntity } from '../entities/facilitator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity, GiftEntity, FacilitatorEntity])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
