const bodyParser = require('body-parser');
const express = require('express');
const account = require('./controllers/account.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** 
 * Substitua este comentário pelas suas rotas!
*/

app.get('/accounts', account.getAll)

app.get('/accounts/:id', account.getById)

app.get('/accounts/:id/comments', account.getComments)

app.post('/accounts', account.insertAccount)

module.exports = app;
