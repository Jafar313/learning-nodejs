import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacilitatorsService } from './facilitators.service';
import { CreateFacilitatorDto } from './dto/create-facilitator.dto';
import { UpdateFacilitatorDto } from './dto/update-facilitator.dto';

@Controller('facilitators')
export class FacilitatorsController {
  constructor(private readonly facilitatorsService: FacilitatorsService) {}

  @Post()
  create(@Body() createFacilitatorDto: CreateFacilitatorDto) {
    return this.facilitatorsService.create(createFacilitatorDto);
  }

  @Get()
  findAll() {
    return this.facilitatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilitatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacilitatorDto: UpdateFacilitatorDto) {
    return this.facilitatorsService.update(+id, updateFacilitatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilitatorsService.remove(+id);
  }
}
