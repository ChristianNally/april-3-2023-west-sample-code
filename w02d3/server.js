const net = require('net');
const port = 8978;

const connectedClients = [];

function broadcast(message, client){
  for (let connectedClient of connectedClients){
    if (connectedClient !== client) {
      connectedClient.write(`${client.name} says ${message}`);
    }
  }
}

const server = net.createServer();

server.on('connection', (client) => {
  connectedClients.push(client);
  client.setEncoding('utf8');

  // console.log('client', client);
  client.write(`Welcome to my awesome server! ⛵`);

  client.on('data', (msg) => {
    console.log('client sent:', msg);
    if (msg.startsWith('setName ')){
      let clientName = msg.replace(/setName /, '');
      clientName = clientName.replace(/^\s+|\s+$/g, '');
      console.log(`setting client name to:`, clientName);
      client.name = clientName;
    }
    broadcast(msg, client);
  });

});

server.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
