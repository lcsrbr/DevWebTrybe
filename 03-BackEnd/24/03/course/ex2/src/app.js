const express = require('express');
const userBookController = require('./controllers/userBook.controller');
const userController = require('./controllers/user.controller');

const app = express();

app.use(express.json());
app.get('/userbooks/', userController.getAll);

app.get('/userbooks/:id', userBookController.getUsersBooksById);

module.exports = app;

