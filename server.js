require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');

const {
  factions,
  factionTraits,
  factionUnits,
  factionBuildings,
  factionPowers,
  groundUnits,
  navalUnits,
  airUnits,
  baseBuildings,
  productionBuildings,
  defensiveBuildings,
  offensivePowers,
  defensivePowers,
  statusPowers,
} = require("./models");

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

// IMPORT my CONTROLLERS
// app.use('/factions', require('./controllers/factions'));

app.get('/', function (req, res) {
  res.json({ message: 'Welcome to Subjugate' });
});

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
})

// Add this above /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email });
});

// controllers
app.use('/auth', require('./controllers/auth'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

// factions.create({
//   firstFaction: 'Legions of Tyranny',
//   secondFaction: 'Eldritch Annihilators',
//   thirdFaction: 'The Faceless Ones'
// })
//   .then(function (createdFactions) {
//     console.log('New Factions', createdFactions);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Factions', error);
//   });

factionTraits.create({
  firstFaction: 'Legions of Tyranny',
  secondFaction: 'Eldritch Annihilators',
  thirdFaction: 'The Faceless Ones'
})
  .then(function (createdFactions) {
    console.log('New Factions', createdFactions);
  })
  .catch(function (err) {
    console.log('ERROR with adding new Factions', error);
  });

module.exports = server;
