import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PeopleModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
