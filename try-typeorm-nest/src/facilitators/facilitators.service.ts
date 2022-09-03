import { Injectable } from '@nestjs/common';
import { CreateFacilitatorDto } from './dto/create-facilitator.dto';
import { UpdateFacilitatorDto } from './dto/update-facilitator.dto';

@Injectable()
export class FacilitatorsService {
  create(createFacilitatorDto: CreateFacilitatorDto) {
    return 'This action adds a new facilitator';
  }

  findAll() {
    return `This action returns all facilitators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facilitator`;
  }

  update(id: number, updateFacilitatorDto: UpdateFacilitatorDto) {
    return `This action updates a #${id} facilitator`;
  }

  remove(id: number) {
    return `This action removes a #${id} facilitator`;
  }
}
