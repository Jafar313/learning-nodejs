import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import databaseConfig from './configurations/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { ApiKeyGuard } from './common/guards/api-key.guard';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory: (dbConfig: ConfigType<typeof databaseConfig>) => {
        return {
          username: 'sa',
          password: '363823@S',
          database: dbConfig.database,
          type: 'mssql',
          host: 'localhost',
          synchronize: true,
          autoLoadEntities: true,
          extra: {
            encrypt: false,
          },
        };
      },
    }),
    PeopleModule.register(),
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
