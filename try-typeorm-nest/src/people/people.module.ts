import { DynamicModule, Inject, Module, ValidationPipe } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftEntity } from '../gifts/entities/gift.entity';
import { FacilitatorEntity } from '../facilitators/entities/facilitator.entity';
import { PersonRepository } from '../repositories/person.repository';
//import { DatabaseConfig } from '../configurations/database.config.ts';
import { ProductionConfig } from '../configurations/production.config';
import { GeneralConfig } from '../configurations/general.config';
import { GiftsModule } from '../gifts/gifts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';

const useFactory = {
  provide: 'someFun',
  useFactory: () => {
    return 'let some fun with nest js';
  },
};
//
// const useClass = {
//   provide: GeneralConfig,
//   useClass: process.env.NODE_ENV === 'DEVELOPMENT' ? DatabaseConfig : ProductionConfig,
// };
//
// const useValue = {
//   provide: 'DefaultLanguage',
//   useValue: UserLanguages.FA_IR,
// };
//
// const useFactoryWithDI = {
//   provide: 'showInstantiation',
//   useFactory: (service: PeopleService) => {
//     console.log(
//       'the showInstantiation has been provided and result is: ',
//       service instanceof PeopleService,
//     );
//   },
//   inject: [PeopleService],
// };

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([PersonRepository, FacilitatorEntity]),
//     ConfigModule,
//     GiftsModule,
//   ],
//   controllers: [PeopleController],
//   providers: [PeopleService, useValue, useClass, useFactory, useFactoryWithDI],
//   exports: [PeopleService],
// })
export class PeopleModule {
  static register(): DynamicModule {
    return {
      module: PeopleModule,
      imports: [
        TypeOrmModule.forFeature([GiftEntity, PersonRepository, FacilitatorEntity]),
      ],
      controllers: [PeopleController],
      providers: [
        {
          provide: 'APP_PIPE',
          useClass: ValidationPipe,
        },
        PeopleService,
        ConfigService,
        //useValue,
        //useClass,
        useFactory,
        //useFactoryWithDI,
      ],
      exports: [PeopleModule],
    };
  }
}
