import "reflect-metadata"
import { DataSource } from "typeorm"
import { gift } from "./entity/gift"
import { Person } from "./entity/person"
import { Holder } from "./entity/holder"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "363823@S",
    database: "tempdb",
    synchronize: true,
    logging: true,
    entities: [Holder, Person, gift],
    migrations: [],
    subscribers: [],
})
