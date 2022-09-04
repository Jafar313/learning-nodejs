import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleModule } from './people/people.module';
import { GiftsModule } from './gifts/gifts.module';
import { FacilitatorsModule } from './facilitators/facilitators.module';
import { PeopleController } from './people/people.controller';

@Module({
  imports: [
    PeopleModule,
    // PeopleModule.register({
    //   isProvided: true,
    // }),
    TypeOrmModule.forRoot({
      host: '127.0.0.1',
      database: 'tempdb',
      username: 'sa',
      password: '363823@S',
      type: 'mssql',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      extra: {
        encrypt: false,
      },
    }),
    GiftsModule,
    FacilitatorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
