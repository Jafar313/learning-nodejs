import express, { json, request } from "express";
import passport from "passport";
import * as fs from 'fs';
import jwt, { sign } from 'jsonwebtoken';
import { ExtractJwt, Strategy as jwtStrategy } from 'passport-jwt';


const app = express();

app.use(json());
app.use(passport.initialize());

const mySecret = fs.readFileSync(__dirname + '/id_ed25519', 'utf8');
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: mySecret,
};

passport.use(new jwtStrategy(jwtOption, function (payload, done) {
  console.log('******* in using jwt strategy and payload is:', payload);

  return done(null, {username: 'jafar'})
}));

function issueJWT(username: string){
  const expireIn = '1d';
  const payload = {
    sub: '1234567890',
    user: username,
    name: 'Seyed Jafar Mousavi',
    scope: 'admin',
  }
  const signedJwt = jwt.sign(payload, mySecret,{expiresIn: expireIn});
  return {
    token: "Bearer " + signedJwt,
    expires: expireIn,
  }
}

app.get('/people',passport.authenticate('jwt'), (req, res, next) => {
  console.log('*********** in the people get route and....', req.headers);
  return res.send(`all people populated and username is: ${JSON.stringify(req.user)}`);
})

app.get('/login', (req, res) => {
  return res.send('Welcome to login page');
})

app.post('/login', (req, res, next) => {
console.log('******** in post login method:',req.body.username, req.body.password);
    if (req.body.username === 'Jafar' && req.body.password === '1234'){
      const token = issueJWT(req.body.username);
      return res.status(200).json({ success: true, token: token.token, expiresIn: token.expires})
    }
    else{
      return res.status(401).json({success: false, msg: "you entered the wrong password"})
    }
})

app.listen(3000, () =>{
  console.log(`Listening on port 3000`);
})
