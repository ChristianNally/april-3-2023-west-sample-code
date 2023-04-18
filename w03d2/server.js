const express = require('express');
const morgan = require('morgan');
const PORT = 3333;
const app = express();

app.set('view engine', 'ejs');

//
// MIDDLEWARE
//

app.use((req, res, next) => {
  console.log(`${req.method} :: ${req.url}`);
  next();
});
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//
// DATA
//
const frogs = {
  wood: {name: "Wood", description: "Wood frogs can vary in color from light reddish-brown to light gray or greenish gray. They have dark brown markings next to their eyes on the side of the head and lead out towards the tip of the nose. These critters blend in well with the leaf litter on the forest floors.", region: "North America", picture: "https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-wood-frog.webp"},
  green: {name: 'Green', description: '', region: ''},
  amazonrain: {name: 'Amazon Rain', description: '', region: ''},
  goliath: {name: "goliath", description: "The Goliath Frog surely lives up to its name as this frog is massive. They can reach lengths up to 13 inches (32 cm) and weigh over 3 pounds.", region: "Goliath frogs live in West Africa within equatorial Guinea and Cameroon", picture: "https://outforia.com/wp-content/uploads/2022/03/types-of-frog-Conraua-goliath.webp"}
};

//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {

  console.log('frogs', frogs);

  const templateVars = {listOfFrogs: frogs};
  res.render('home', templateVars);
});

//
// ADD
//
app.get('/frogs/new', (req, res) => {
  res.render('new');
});

app.post('/frogs/new', (req, res) => {
  console.log('req.body', req.body);

  const name = req.body.name;
  const description = req.body.description;
  const region = req.body.region;
  const picture = req.body.picture;

  frogs[name] = {
    name: name,
    picture: picture,
    region: region,
    description: description
  };

  res.redirect('/');

});

//
// READ
//
app.get('/frogs/:key', (req, res) => {
  console.log('req.params', req.params);
  const templateVars = {frog: frogs[req.params.key]};
  res.render('frog', templateVars);
});

//
// EDIT
//
app.get('/frogs/edit/:key', (req, res) => {
  const myKey = req.params.key;
  const templateVars = {
    key: myKey,
    frog: frogs[myKey]
  };
  res.render('edit', templateVars);
});

app.post('/frogs/edit/:key', (req, res) => {
  const myKey = req.params.key;
  console.log('req.body', req.body);

  const name = req.body.name;
  const description = req.body.description;
  const region = req.body.region;
  const picture = req.body.picture;

  frogs[myKey] = {
    name: name,
    picture: picture,
    region: region,
    description: description
  };

  res.redirect('/');

});


//
// DELETE
//
app.get('/frogs/delete/:key', (req, res) => {
  delete frogs[req.params.key];
  res.redirect('/');
});

//
// 404
//


// LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on PORT=${PORT}`);
});