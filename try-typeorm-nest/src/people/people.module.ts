import { DynamicModule, Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftEntity } from '../gifts/entities/gift.entity';
import { PersonEntity } from './entities/person.entity';
import { FacilitatorEntity } from '../facilitators/entities/facilitator.entity';
import { PersonRepository } from '../repositories/person.repository';
import { UserLanguages } from '../constants';
import { DevelopmentConfig } from '../configurations/development-config';
import { ProductionConfig } from '../configurations/production-config';
import { GeneralConfig } from '../configurations/general-config';
import { GiftsModule } from '../gifts/gifts.module';

const useFactory = {
  provide: 'someFun',
  useFactory: () => {
    return 'let some fun with nest js';
  },
};

const useClass = {
  provide: GeneralConfig,
  useClass: process.env.NODE_ENV === 'DEVELOPMENT' ? DevelopmentConfig : ProductionConfig,
};

const useValue = {
  provide: 'DefaultLanguage',
  useValue: UserLanguages.FA_IR,
};

const useFactoryWithDI = {
  provide: 'showInstantiation',
  useFactory: (service: PeopleService) => {
    console.log(
      'the showInstantiation has been provided and result is: ',
      service instanceof PeopleService,
    );
  },
  inject: [PeopleService],
};

@Module({
  imports: [
    TypeOrmModule.forFeature([PersonRepository, FacilitatorEntity]),
    DevelopmentConfig,
    ProductionConfig,
    GiftsModule,
  ],
  controllers: [PeopleController],
  providers: [PeopleService, useValue, useClass, useFactory, useFactoryWithDI],
  exports: [PeopleService],
})
export class PeopleModule {
  // static register(options: Record<string, any>): DynamicModule {
  //   return {
  //     module: PeopleModule,
  //     imports: [
  //       TypeOrmModule.forFeature([GiftEntity, PersonEntity, FacilitatorEntity]),
  //       DevelopmentConfig,
  //       ProductionConfig,
  //       GiftsModule,
  //     ],
  //     controllers: [PeopleController],
  //     providers: [
  //       PersonRepository,
  //       PeopleService,
  //       useValue,
  //       useClass,
  //       useFactory,
  //       useFactoryWithDI,
  //     ],
  //     exports: [PeopleModule],
  //   };
  // }
}
