const express = require('express');
const cors = require('cors');
const routes = require('./routes/router');
const ErrorHandler = require('./middlewares/ErrorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/images', express.static('public'));

app.use(ErrorHandler.handle);
module.exports = app;
