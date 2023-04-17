const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3001;

const server = http.createServer((req, res) => {
//  console.log('req', req);
//  console.log('req.method', req.method);
//  console.log('req.url', req.url);
  const route = req.method + ' ' + req.url;
  console.log('route:', route);

  switch (route) {
    case 'GET /':
      console.log('home');
      res.write('<h1>HOME</h1>');
      res.end();
      break;
    case 'GET /todos':
      console.log('todos page');
      res.write('<h1>TODOS!</h1>');
      res.end();
      break;
    case 'GET /contact.html':
      const filePath = path.join(__dirname,'contact.htmll');
      console.log(`retrieving file from ${filePath}`);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          console.log('500!!', err);
          res.statusCode = 500;
          res.write('<h1>500 fatal error reading view file</h1>');
          res.end();
        } else {
          console.log('contact page');
          res.statusCode = 200;
          res.write(fileContent);
          res.end();
        }
      });
      break;
    default:
      console.log('404!!');
      res.statusCode = 404;
      res.write('<h1>404 Page Not Found Anywhere. No Really. I really tried.</h1>');
      res.end();
      break;
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});