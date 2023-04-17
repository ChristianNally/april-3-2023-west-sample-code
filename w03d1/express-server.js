const express = require('express');
const port = 3002;

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

const todos = [
  {text: 'learn about web servers', status: 0},
  {text: 'come to the party', status: 1},
  {text: 'practice singing', status: 0},
  {text: 'order pizza', status: 0},
];

app.get('/', (req, res) => {
  const name = 'Nally';
  const templateVars = {
    clientName: name
  };
  res.render('home', templateVars);
});

app.get('/todos', (req, res) => {
  const templateVars = {
    todos: todos
  };
  res.render('todos', templateVars);
});

app.get('/todos/new', (req, res) => {
  res.render('new');
});

app.post('/todos/newdata', (req, res) => {
  console.log('req.body', req.body);
  todos.push({text: req.body.description, status: 0});
  res.redirect('/todos');
});

app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});