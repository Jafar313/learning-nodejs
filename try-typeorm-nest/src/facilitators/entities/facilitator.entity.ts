import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('facilitators')
export class FacilitatorEntity {
  @PrimaryGeneratedColumn()
  id: number;

}
