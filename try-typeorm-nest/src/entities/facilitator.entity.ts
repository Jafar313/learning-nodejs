import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { PersonEntity } from './person.entity';

@Entity('facilitators')
export class facilitatorEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(3)
  facilitatorName: string;

  @OneToMany(() => PersonEntity, (person) => person.facilitatorId)
  coveredPeople: PersonEntity[];
}
