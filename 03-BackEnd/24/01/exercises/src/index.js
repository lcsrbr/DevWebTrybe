const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Book = require('./controllers/book.controller');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/book', Book.getAll);

app.get('/book/:id', Book.getById);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/Book/search/1?email=leo@test.com"
app.get('/book/search/:id', Book.getByIdAndTitle);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/book', Book.createBook);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/book/:id', Book.updateBook);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/book/:id', Book.deleteBook);
