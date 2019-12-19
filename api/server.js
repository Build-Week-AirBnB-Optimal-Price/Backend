const express = require('express');
const server = express();

// configure global middleware
require('./configure-middleware')(server);

server.get('/', (req, res) => {
  res.send('Server Connected');
});

module.exports = server;
