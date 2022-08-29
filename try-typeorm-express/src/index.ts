import { AppDataSource } from "./data-source"
import express, {json} from "express"
import personService from "./services/people-service-repo";
AppDataSource.initialize().then(async () => {
    const app = express();
    const repo = personService();
    app.use(json());

    app.get("/", async (req, res) =>{
        let result = await repo.getPeople();
        console.log('result is:' , result);
        return res.send(result);
    })

    app.get("/:id", (req, res) => {
        let result = await getPerson()
    })


    app.post("/", async (req, res) =>{
        let result = await insertPerson(req.body);
        return res.send(result);
    })

    app.listen(3000, ()=>{
        console.log("listening on port 3000");
    })
}).catch(error => console.log(error))

