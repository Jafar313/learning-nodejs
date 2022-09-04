import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftService } from './gift.service';GiftService
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';

@Controller('gift')
export class GiftsController {
  constructor(private readonly giftsService: GiftService) {}

  @Post()
  create(@Body() createGiftDto: CreateGiftDto) {
    return this.giftsService.create(createGiftDto);
  }

  @Get()
  findAll() {
    return this.giftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftDto: UpdateGiftDto) {
    return this.giftsService.update(+id, updateGiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftsService.remove(+id);
  }
}
