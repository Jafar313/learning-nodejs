import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { PipesContextCreator } from '@nestjs/core/pipes/pipes-context-creator';
import { NestContainer } from '@nestjs/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
