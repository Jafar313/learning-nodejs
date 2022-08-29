import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person";

@Entity("Holders")
export class Holder {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Person, _person => _person.holderId)
    @JoinColumn({name: 'holderId', referencedColumnName: 'id'})
    coveredPeople: Person[]

}