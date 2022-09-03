import { Module } from '@nestjs/common';
import { FacilitatorsService } from './facilitators.service';
import { FacilitatorsController } from './facilitators.controller';

@Module({
  controllers: [FacilitatorsController],
  providers: [FacilitatorsService]
})
export class FacilitatorsModule {}
