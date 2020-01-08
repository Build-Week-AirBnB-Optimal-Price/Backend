const express = require('express');
const server = express();

// configure global middleware
require('./configure-middleware')(server);

// Routes
server.use('/', require('../routes/auth'));
server.use('/user', require('../routes/userData'));
server.use('/user', require('../routes/userProperties'));

module.exports = server;
