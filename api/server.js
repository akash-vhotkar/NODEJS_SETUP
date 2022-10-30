'use strict';

/**
 * Module dependencies
 */

require('module-alias/register');
require('@env/index');
require('../lib/logger/logger');

const express = require('express');
const app = express();

/**
 * Start Node Server
 */

require('../middleware/start-server')(app);

/**
 * Initialize Express
 */

require('../middleware/express-setup')(app);

/**
 * Initialize Swagger Docs
 */
require('../middleware/start-swagger')(app);

require('../middleware/express-router')(app);

/**
 * Initialize MongoDB Collections
 */
require('./models');



module.exports = app;
