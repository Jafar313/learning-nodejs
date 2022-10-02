import express, {json} from "express";
import passport from "passport";

const app = express();

app.use(json());

app.use(passport.initialize());

const checkAuthenticated = (req: any, res: any, next: any) => {
  if (req.isAuthenticated()){
    return next();
  }
  return res.redirect('/login')
}

app.get('/people', checkAuthenticated, (req, res) =>{
  console.log(req.session);
  return res.send('all people populated');
})

app.get('/login', (req, res) => {
  console.log('**entire login page', req.session);
  return res.send('Welcome to login page');
})

app.post('/login', passport.authenticate('local', {
  successRedirect: '/people',
  failureRedirect: '/login'
}))

app.listen(3000, () =>{
  console.log(`Listening on port 3000`);
})
