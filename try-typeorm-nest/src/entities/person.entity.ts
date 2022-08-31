import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';

@Entity('people')
export class PersonEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  @MinLength(3)
  firstName: string;

  @Column()
  @IsString()
  @MinLength(4)
  lastName: string;

  @Column()
  @IsNumber()
  facilitatorId: number;
}
