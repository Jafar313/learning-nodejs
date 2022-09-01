import { Controller, Get, Inject } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly _service: PeopleService) {}

  @Get()
  async getPeople() {
    return this._service.getPeopleWithHolders();
  }
}
