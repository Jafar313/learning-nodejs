import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ApiKeyGuard } from './guards/api-key.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middlewares/logging.middleware';

@Module({
  imports: [ConfigModule],
  providers: [{ provide: 'APP_GUARD', useClass: ApiKeyGuard }],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggingMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
