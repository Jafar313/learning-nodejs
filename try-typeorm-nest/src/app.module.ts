import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PeopleModule,
    TypeOrmModule.forRoot({
      logging: true,
      extra: {
        trustServerCertificate: true,
        encrypt: false
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
