import {AppDataSource} from "../data-source";
import {Person} from "../entity/person";

export class personServiceQueryBuilder{
    private readonly _repository;
    constructor() {
      this._repository = AppDataSource.getRepository(Person);
    }
    async getPeople(){
        return await this._repository.createQueryBuilder()
            .getMany();
    }
    async getPerson(id: number){
        return await this._repository.createQueryBuilder()
            .select("p")
            .where("p.id = :id", {id})
            .getOne()
    }
    async insertPerson(person: Person){
        let result = this._repository.createQueryBuilder()
            .insert()
            .into(Person)
            .values({firstName: person.firstName, lastName: person.lastName, age: person.age})
            .execute()
    }

    async updatePerson(person: Person){
        let p = await this._repository.createQueryBuilder()
            .update(Person)
            .set({firstName: person.firstName, lastName: person.lastName, age: person.age})
            .where("id = :id", {id: person.id})
            .execute()
    }
}