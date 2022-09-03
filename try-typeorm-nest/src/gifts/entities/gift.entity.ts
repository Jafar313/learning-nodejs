import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { PersonEntity } from '../../people/entities/person.entity';
import { JoinTable } from 'typeorm';

@Entity('gifts')
export class GiftEntity {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  @MinLength(5)
  giftName: string;

  @ManyToMany(() => PersonEntity, (p) => p.gifts)
  @JoinTable()
  people: PersonEntity[];
}
