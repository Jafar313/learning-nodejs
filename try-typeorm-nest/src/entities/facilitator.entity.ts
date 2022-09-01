import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { PersonEntity } from './person.entity';

@Entity('facilitators')
export class FacilitatorEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(3)
  @Column()
  facilitatorName: string;

}
