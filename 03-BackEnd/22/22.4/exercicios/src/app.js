const express = require('express');
const routes = require('./routes');
const errorHandle = require('./middlewares/error'); 

const app = express();

app.use(express.json());

app.use("/", routes);

app.use(errorHandle);

module.exports = app;