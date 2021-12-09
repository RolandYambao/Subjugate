require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const methodOverride = require('method-override');

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
  groundComments,
  navalComments,
  airComments,
  baseComments,
  productionComments,
  defensiveBuildComments,
  offensiveComments,
  defensivePowComments,
  statusComments,
} = require("./models");

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

app.use(methodOverride('_method'));
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

// app.get('/', function (req, res) {
//   res.json({ message: 'Welcome to Subjugate' });
// });

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

const printData = require('./myModule.js');
printData.printData();

// IMPORT my CONTROLLERS
app.use('/auth', require('./controllers/auth'));
app.use('/factions', require('./controllers/factions'));
app.use('/factionTraits', require('./controllers/factionTraits'));
app.use('/factionUnits', require('./controllers/factionUnits'));
app.use('/factionBuildings', require('./controllers/factionBuildings'));
app.use('/factionPowers', require('./controllers/factionPowers'));

app.use('/groundUnits', require('./controllers/groundUnits'));
app.use('/navalUnits', require('./controllers/navalUnits'));
app.use('/airUnits', require('./controllers/airUnits'));
app.use('/baseBuildings', require('./controllers/baseBuildings'));
app.use('/productionBuildings', require('./controllers/productionBuildings'));
app.use('/defensiveBuildings', require('./controllers/defensiveBuildings'));
app.use('/offensivePowers', require('./controllers/offensivePowers'));
app.use('/defensivePowers', require('./controllers/defensivePowers'));
app.use('/statusPowers', require('./controllers/statusPowers'));

app.use('/groundComments', require('./controllers/groundComments'));
app.use('/navalComments', require('./controllers/navalComments'));
app.use('/airComments', require('./controllers/airComments'));
app.use('/baseComments', require('./controllers/baseComments'));
app.use('/productionComments', require('./controllers/productionComments'));
app.use('/defensiveBuildComments', require('./controllers/defensiveBuildComments'));
app.use('/offensiveComments', require('./controllers/offensiveComments'));
app.use('/defensivePowComments', require('./controllers/defensivePowComments'));
app.use('/statusComments', require('./controllers/statusComments'));

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

// factionTraits.create({
//   units: 'Units',
//   buildings: 'Buildings',
//   supportPowers: 'Support Powers'
// })
//   .then(function (createdFactionTraits) {
//     console.log('New Faction Traits', createdFactionTraits);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Faction Traits', error);
//   });

// factionUnits.create({
//   ground: 'Ground Units',
//   naval: 'Naval Units',
//   air: 'Air Units'
// })
//   .then(function (createdFactionUnits) {
//     console.log('New Faction Units', createdFactionUnits);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Faction Units', error);
//   });

// factionBuildings.create({
//   base: 'Base Buildings',
//   production: 'Production Buildings',
//   defensive: 'Defense Buildings'
// })
//   .then(function (createdFactionBuildings) {
//     console.log('New Faction Buildings', createdFactionBuildings);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Faction Buildings', error);
//   });

// factionPowers.create({
//   offensive: 'Offensive Powers',
//   defensive: 'Defensive Powers',
//   status: 'Status Powers'
// })
//   .then(function (createdFactionPowers) {
//     console.log('New Faction Powers', createdFactionPowers);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Faction Powers', error);
//   });

// groundUnits.create({
//   name: 'Servilepod',
//   hp: 10,
//   attack: 5,
//   description: 'Selectively Bred Arthropod Cannon Fodder'
// })
//   .then(function (createdGroundUnit) {
//     console.log('New Ground Unit', createdGroundUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Ground Unit', error);
//   });

// groundUnits.create({
//   name: 'Substitutes',
//   hp: 20,
//   attack: 15,
//   description: 'Human Infantry Serving in Place of their Masters'
// })
//   .then(function (createdGroundUnit) {
//     console.log('New Ground Unit', createdGroundUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Ground Unit', error);
//   });

// groundUnits.create({
//   name: 'Eviserators',
//   hp: 100,
//   attack: 35,
//   description: 'A Vessel for Blades and Carnage'
// })
//   .then(function (createdGroundUnit) {
//     console.log('New Ground Unit', createdGroundUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Ground Unit', error);
//   });

// groundUnits.create({
//   name: 'Masterminds',
//   hp: 150,
//   attack: 0,
//   description: 'A Diplomatic Machine, used for Making Friends'
// })
//   .then(function (createdGroundUnit) {
//     console.log('New Ground Unit', createdGroundUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Ground Unit', error);
//   });

// groundUnits.create({
//   name: 'Adjudicator',
//   hp: 300,
//   attack: 100,
//   description: 'A Vehicle of Pure Annihilation'
// })
//   .then(function (createdGroundUnit) {
//     console.log('New Ground Unit', createdGroundUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Ground Unit', error);
//   });

// navalUnits.create({
//   name: 'Sampan',
//   hp: 20,
//   attack: 10,
//   description: 'Expendable Little Boats used for Scouting'
// })
//   .then(function (createdNavalUnit) {
//     console.log('New Naval Unit', createdNavalUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Naval Unit', error);
//   });

// navalUnits.create({
//   name: 'Galley',
//   hp: 100,
//   attack: 50,
//   description: 'Anachronistic Ships using Servilepods as Rowers'
// })
//   .then(function (createdNavalUnit) {
//     console.log('New Naval Unit', createdNavalUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Naval Unit', error);
//   });

// navalUnits.create({
//   name: 'Undersear',
//   hp: 75,
//   attack: 150,
//   description: 'The Silent Death of a Tiny Submarine'
// })
//   .then(function (createdNavalUnit) {
//     console.log('New Naval Unit', createdNavalUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Naval Unit', error);
//   });

// navalUnits.create({
//   name: 'Obliterator',
//   hp: 250,
//   attack: 100,
//   description: 'Many Gunned Destroyers Seeking to Conquer'
// })
//   .then(function (createdNavalUnit) {
//     console.log('New Naval Unit', createdNavalUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Naval Unit', error);
//   });

// navalUnits.create({
//   name: 'Kraken',
//   hp: 200,
//   attack: 200,
//   description: 'Enslaved Monsters of the Deep in Service to the Legions'
// })
//   .then(function (createdNavalUnit) {
//     console.log('New Naval Unit', createdNavalUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Naval Unit', error);
//   });

// airUnits.create({
//   name: 'Floaters',
//   hp: 10,
//   attack: 5,
//   description: 'Floating Jellyfish with Guns, Servilepods of the Sky'
// })
//   .then(function (createdAirUnit) {
//     console.log('New Air Unit', createdAirUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Air Unit', error);
//   });

// airUnits.create({
//   name: 'Blades of Terror',
//   hp: 50,
//   attack: 75,
//   description: 'Gyroplanes carrying Simple Bombs and Machine Guns'
// })
//   .then(function (createdAirUnit) {
//     console.log('New Air Unit', createdAirUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Air Unit', error);
//   });

// airUnits.create({
//   name: 'The All Seeing',
//   hp: 25,
//   attack: 25,
//   description: 'Floating Platforms Holding Overseers, Improves Morale through Fear'
// })
//   .then(function (createdAirUnit) {
//     console.log('New Air Unit', createdAirUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Air Unit', error);
//   });

// airUnits.create({
//   name: 'Subjugators',
//   hp: 75,
//   attack: 150,
//   description: 'Plays the Siren of Death before your Destruction'
// })
//   .then(function (createdAirUnit) {
//     console.log('New Air Unit', createdAirUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Air Unit', error);
//   });

// airUnits.create({
//   name: 'Oppressors',
//   hp: 100,
//   attack: 300,
//   description: 'Keeps Entire Nations under Control with a Carpet of 5000 lbs Bombs'
// })
//   .then(function (createdAirUnit) {
//     console.log('New Air Unit', createdAirUnit);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Air Unit', error);
//   });

// baseBuildings.create({
//   name: 'Command Center',
//   hp: 1000,
//   buildTime: 60,
//   description: 'The Control Area for you, Commander',
// })
//   .then(function (createdBaseBuilding) {
//     console.log('New Base Building', createdBaseBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Base Building', error);
//   });

// baseBuildings.create({
//   name: 'Enhanced Geothermal Plants',
//   hp: 500,
//   buildTime: 20,
//   description: 'The Harvester of our Limitless Power Source',
// })
//   .then(function (createdBaseBuilding) {
//     console.log('New Base Building', createdBaseBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Base Building', error);
//   });

// baseBuildings.create({
//   name: 'Serf Ore Harvester',
//   hp: 250,
//   buildTime: 30,
//   description: 'Using Plentiful Servilepods and Serfs to Harvest Resources for us',
// })
//   .then(function (createdBaseBuilding) {
//     console.log('New Base Building', createdBaseBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Base Building', error);
//   });

// baseBuildings.create({
//   name: 'Eye of Despotism',
//   hp: 150,
//   buildTime: 45,
//   description: 'Our Eyes and Ears are Everywhere',
// })
//   .then(function (createdBaseBuilding) {
//     console.log('New Base Building', createdBaseBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Base Building', error);
//   });

// baseBuildings.create({
//   name: 'Committee 871 Headquarters',
//   hp: 200,
//   buildTime: 100,
//   description: 'Where we Research more Advance Units and Support Powers',
// })
//   .then(function (createdBaseBuilding) {
//     console.log('New Base Building', createdBaseBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Base Building', error);
//   });

// productionBuildings.create({
//   name: 'Barracks',
//   hp: 100,
//   buildTime: 25,
//   description: 'Cannon Fodder Production Facility',
// })
//   .then(function (createdProductionBuilding) {
//     console.log('New Production Building', createdProductionBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Production Building', error);
//   });

// productionBuildings.create({
//   name: 'War Factory',
//   hp: 200,
//   buildTime: 40,
//   description: 'Creator of the Tyrannical Vanguard',
// })
//   .then(function (createdProductionBuilding) {
//     console.log('New Production Building', createdProductionBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Production Building', error);
//   });

// productionBuildings.create({
//   name: 'Naval Yard',
//   hp: 200,
//   buildTime: 40,
//   description: 'Factories for the Deep',
// })
//   .then(function (createdProductionBuilding) {
//     console.log('New Production Building', createdProductionBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Production Building', error);
//   });

// productionBuildings.create({
//   name: 'Airfield',
//   hp: 150,
//   buildTime: 50,
//   description: 'Creator of Terror from the Sky',
// })
//   .then(function (createdProductionBuilding) {
//     console.log('New Production Building', createdProductionBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Production Building', error);
//   });

// defensiveBuildings.create({
//   name: 'Trenches',
//   hp: 250,
//   buildTime: 10,
//   description: 'The Place where Cannon Fodder go to Die',
// })
//   .then(function (createdDefensiveBuilding) {
//     console.log('New Defensive Building', createdDefensiveBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Building', error);
//   });

// defensiveBuildings.create({
//   name: 'Watchtower',
//   hp: 100,
//   buildTime: 15,
//   description: 'Far Seeing Eyes to Hunt Down Enemies',
// })
//   .then(function (createdDefensiveBuilding) {
//     console.log('New Defensive Building', createdDefensiveBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Building', error);
//   });

// defensiveBuildings.create({
//   name: 'Pillbox',
//   hp: 300,
//   buildTime: 30,
//   description: 'A Trench with Greater Survivability',
// })
//   .then(function (createdDefensiveBuilding) {
//     console.log('New Defensive Building', createdDefensiveBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Building', error);
//   });

// defensiveBuildings.create({
//   name: 'Enslaver',
//   hp: 150,
//   buildTime: 30,
//   description: 'Controls the Mind of Any who go Near It',
// })
//   .then(function (createdDefensiveBuilding) {
//     console.log('New Defensive Building', createdDefensiveBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Building', error);
//   });

// defensiveBuildings.create({
//   name: 'Despotic Annihilator',
//   hp: 500,
//   buildTime: 100,
//   description: 'Unleashes a Tidal Wave of Psychic Energy, Designed to Dominate the Minds of an Entire Planet',
// })
//   .then(function (createdDefensiveBuilding) {
//     console.log('New Defensive Building', createdDefensiveBuilding);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Building', error);
//   });

// offensivePowers.create({
//   name: 'Reign of Fire',
//   cooldownTime: 180,
//   requirement: 'Command Center',
//   description: 'Fireballs Fall from the Sky to Smite the Enemies of the Legion',
// })
//   .then(function (createdOffensivePower) {
//     console.log('New Offensive Power', createdOffensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Offensive Power', error);
//   });

// offensivePowers.create({
//   name: 'Fervent Despoilation',
//   cooldownTime: 180,
//   requirement: 'Command Center',
//   description: 'Mobs of Cannon Fodder Militia invade the Map, Attacking your Enemies',
// })
//   .then(function (createdOffensivePower) {
//     console.log('New Offensive Power', createdOffensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Offensive Power', error);
//   });

// offensivePowers.create({
//   name: 'Spirit of Oblivion',
//   cooldownTime: 300,
//   requirement: 'Committee 871 Headquarters',
//   description: 'Flying Drones Swarm a Large Area, Melting all who Stand in their Way',
// })
//   .then(function (createdOffensivePower) {
//     console.log('New Offensive Power', createdOffensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Offensive Power', error);
//   });

// offensivePowers.create({
//   name: 'March of Tyranny',
//   cooldownTime: 300,
//   requirement: 'Committee 871 Headquarters',
//   description: 'All Troops within an Area become Invulnerable for 10 Seconds',
// })
//   .then(function (createdOffensivePower) {
//     console.log('New Offensive Power', createdOffensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Offensive Power', error);
//   });

// offensivePowers.create({
//   name: 'Edict of Annihilation',
//   cooldownTime: 480,
//   requirement: 'Despotic Annihilator',
//   description: 'Fires the Despotic Annihilator to Destroy All in an Area',
// })
//   .then(function (createdOffensivePower) {
//     console.log('New Offensive Power', createdOffensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Offensive Power', error);
//   });

// defensivePowers.create({
//   name: 'Pillars of Rule',
//   cooldownTime: 180,
//   requirement: 'Command Center',
//   description: 'Creates a Stasis Shield in a Selected Area',
// })
//   .then(function (createdDefensivePower) {
//     console.log('New Defensive Power', createdDefensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Power', error);
//   });

// defensivePowers.create({
//   name: 'Shields of Despotism',
//   cooldownTime: 180,
//   requirement: 'Command Center',
//   description: 'Units Increase their HP in a Selected Area',
// })
//   .then(function (createdDefensivePower) {
//     console.log('New Defensive Power', createdDefensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Power', error);
//   });

// defensivePowers.create({
//   name: 'Unbreakable Will',
//   cooldownTime: 300,
//   requirement: 'Committee 871 Headquarters',
//   description: 'Units Become Invulnerable within a Selected Area',
// })
//   .then(function (createdDefensivePower) {
//     console.log('New Defensive Power', createdDefensivePower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Defensive Power', error);
//   });

// statusPowers.create({
//   name: 'Divine Blessing',
//   cooldownTime: 120,
//   requirement: 'Command Center',
//   description: 'Slow Healing Aura Placed in a Selected Area',
// })
//   .then(function (createdStatusPower) {
//     console.log('New Status Power', createdStatusPower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Status Power', error);
//   });

// statusPowers.create({
//   name: 'Oppressive Gaze',
//   cooldownTime: 120,
//   requirement: 'Command Center',
//   description: 'Enemies in a Selected Area Move and Attack Slower',
// })
//   .then(function (createdStatusPower) {
//     console.log('New Status Power', createdStatusPower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Status Power', error);
//   });

// statusPowers.create({
//   name: 'Tyrannical Terror',
//   cooldownTime: 300,
//   requirement: 'Committee 871 Headquarters',
//   description: 'Enemies in a Selected Area Immediately Retreat in Terror',
// })
//   .then(function (createdStatusPower) {
//     console.log('New Status Power', createdStatusPower);
//   })
//   .catch(function (err) {
//     console.log('ERROR with adding new Status Power', error);
//   });

module.exports = server;
