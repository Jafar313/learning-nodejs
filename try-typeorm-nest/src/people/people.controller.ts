import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  SetMetadata,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreateGiftDto } from '../gifts/dto/create-gift.dto';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { Protocol } from '../common/decorators/protocol.decorator';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Post(':id/gift')
  createGift(@Param('id') id: string, @Body() gift: CreateGiftDto) {
    return this.peopleService.createGift(+id, gift);
  }

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id', ParseIntPipe) id: number, @Protocol('https') protocol) {
    console.log(protocol);
    return this.peopleService.findOne(id);
  }

  @Get(':id/gifts')
  findPersonGifts(@Param('id') id: string) {
    return this.peopleService.findPersonGifts(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  }
}
