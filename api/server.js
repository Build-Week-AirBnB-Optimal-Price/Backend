const express = require('express');
const server = express();

// configure global middleware
require('./configure-middleware')(server);

// Routes
server.use('/', require('../routes/auth'));

module.exports = server;
