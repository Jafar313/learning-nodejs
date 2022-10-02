import express, {json} from "express";
import session from "express-session";
import {Strategy as LocalStrategy} from "passport-local";
import passport from "passport";

const app = express();

app.use(json());
app.use(session({
  secret: "ngnfdjgdjfg",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const authUser = (user: string, password: string, done: any) => {
  const authenticatedUser = {'id': 1, 'name': user };
  if (user === 'jafar' && password == '1234'){
    console.log('in authUser function-------->', authenticatedUser);
    return done(null, authenticatedUser);
  } else {
    return done(null, false);
  }

  // if (user === 'jafar' && password === '123'){
  //   return done(null, authenticatedUser);
  // } else  {
  //   return done(null, false);
  // }
}
// const checkAuthenticated = (req: any, res: any, next: any) => {
//   console.log('in auth method ----------->',req.body.username);
//     return next();
//   // }
//   // return res.redirect('/login');
// }

passport.use(new LocalStrategy((user: string, password: string, done: any) => {
  const authenticatedUser = {'id': 1, 'name': user };
  if (user === 'jafar' && password == '1234'){
    console.log('in authUser function-------->', authenticatedUser);
    return done(null, authenticatedUser);
  } else {
    return done(null, false);
  }
}));

passport.serializeUser((userObj, done) =>{
  console.log('in passport.serializeUser', userObj);
  done(null, userObj);
})

passport.deserializeUser((userObj: any, done) =>{
  console.log('in deserializeUser', userObj)
  done(null, userObj);
})

const checkAuthenticated = (req: any, res: any, next: any) => {
  if (req.isAuthenticated()){
    return next();
  }
  return res.redirect('/login')
}

app.get('/people', checkAuthenticated, (req, res) =>{
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
  console.log(`Listening on port 3000`, new Date().getSeconds());
})
