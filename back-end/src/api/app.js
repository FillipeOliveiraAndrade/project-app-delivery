const express = require('express');
const routes = require('./routes/router');
const ErrorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorHandler.handle);
module.exports = app;
