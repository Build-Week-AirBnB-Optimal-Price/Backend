const express = require('express');
const server = express();

// configure global middleware
require('./configure-middleware')(server);

module.exports = server;
