import { AppDataSource } from "./data-source"
import { Person } from "./entity/person"
import express, {json} from "express"
import {getAll, insertPerson } from "./services/people-service";
AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(json());

    app.get("/", async (req, res) =>{
        let result = await getAll();
        console.log('result is:' , result);
        return res.send(result);
    })

    app.post("/", async (req, res) =>{
        let result = await insertPerson(req.body);
        return res.send(result);
    })

    app.listen(3000, ()=>{
        console.log("listening on port 3000");
    })
}).catch(error => console.log(error))

