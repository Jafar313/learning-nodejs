import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Holder } from "./holder"

@Entity({name: "People"})
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    holderId: number

    @ManyToOne(() => Holder)
    @JoinColumn()
    holder: Holder
}
