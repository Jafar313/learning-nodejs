import { AppDataSource } from "./data-source"
import { Person } from "./entity/person"
import express, {json} from "express"
import {getAll, insertPerson } from "./services/people-service";
import passport from "passport";
import {Strategy as LocalStrategy} from 'passport-local'

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(json());
    app.use(passport.initialize());

    passport.serializeUser(function(user, cb){
        console.log(cb);
    })

    passport.use(new LocalStrategy(
      {
          usernameField: 'username',
          passwordField: 'password',
          passReqToCallback: true,
      },(username, password, done) => {
        if (!username || !password)
            return done('ERROR: UNAUTHORIZED EXCEPTION')
        return done(null, {name: 'Seyed Jafar Mousavi',},{message: 'ESKELENT, THE USER AUTHORIZED'});
    }));

    app.get("/", async (req, res) =>{
        let result = await getAll();
        console.log('result is:' , result);
        return res.send(result);
    })

    app.post("/login", passport.authenticate('local', { failureMessage: 'Authentication failed...static message'}, (req, res) =>{
        console.log('authentication successful....');
        return res.redirect("/");
    }))

    app.post("/", async (req, res) =>{
        let result = await insertPerson(req.body);
        return res.send(result);
    })

    app.listen(3000, ()=>{
        console.log("listening on port 3000");
    })
}).catch(error => console.log(error))

