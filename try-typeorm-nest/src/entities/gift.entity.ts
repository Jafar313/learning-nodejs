import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { PersonEntity } from './person.entity';
import { JoinTable } from 'typeorm';

@Entity('gifts')
export class giftEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  @MinLength(5)
  giftName: string;

  @ManyToMany(() => PersonEntity)
  @JoinTable()
  people: PersonEntity[];
}
