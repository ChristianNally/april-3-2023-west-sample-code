const net = require('net');
const curl = require('curl');
const port = 8978;

curl.get('https://api.ipify.org', {}, function(err, response, body){
  console.log('ip:', body);

  const client = net.createConnection({
    port: 10400,
    host: '6.tcp.ngrok.io'
  });
  
  client.setEncoding('utf8');
  
  process.stdin.on('data', (data) => {
    client.write(data);
  });
  
  client.on('connect', () => {
    console.log(`client is connected to server`);
    client.write(`setName ${body}`);
  });
  
  client.on('data', (message) => {
    console.log(`${message}`);
  });

});
