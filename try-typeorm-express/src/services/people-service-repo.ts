import { AppDataSource } from "../data-source";
import { Person } from "../entity/person";

class personService{
    private _repository = AppDataSource.getRepository(Person);
    constructor() {
    }
    public async getPeople() {
        return this._repository.find();
    }
    public async getPerson(id: number){
        return this._repository.findOneBy({id: id});
    }

    public async insertPerson(person: Person){
        await this._repository.save(person);
        console.log("person inserted and its id is:", person.id);
        return person;
    }
}


async function editPerson(person: Person): Promise<(Person | null)> {
    let result = await this._repository.findOneBy({id: person.id});
    if (!result){
        result.firstName = person.firstName;
        result.lastName = person.lastName;
        result.age = person.age;
        result.holderId = person.holder.id;
        await this._repository.save(result);
        return result;
    }
    return null;
}

async function removePerson(personId: number) {
    let result = await this._repository.delete({personId})
}
export = personService;