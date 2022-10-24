// src/app.js

const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/employees/:id', employee.getById);
app.get('/employees2/:id', employee.getById2);
app.get('/employees', employee.getAll);
app.post('/employees', employee.insert);


module.exports = app;