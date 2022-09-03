import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsArray, IsNumber, IsString, MinLength } from 'class-validator';
import { GiftEntity } from '../../gifts/entities/gift.entity';
import { FacilitatorEntity } from '../../facilitators/entities/facilitator.entity';

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

  @ManyToOne(() => FacilitatorEntity)
  facilitator: FacilitatorEntity;

  @ManyToMany(() => GiftEntity)
  gifts: GiftEntity[];
}
