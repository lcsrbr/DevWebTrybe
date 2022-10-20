// src/services/Book.service.js

const { Book } = require("../models");

const getAll = async () => {
    const books = await Book.findAll({ 
        order: [['title', 'ASC']],
      });
      return books;
    };

const getById = async (id) => {
  const result = await Book.findByPk(id);

  return result;
};

const getByIdAndTitle = async (id, title) => {
  const result = await Book.findOne({ where: { id, title } });

  return result;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({
    title,
    author,
    pageQuantity,
  });

  return newBook;
};

const updateBook = async (id, fullName, email) => {
  const [updatedBook] = await Book.update(
    { fullName, email },
    { where: { id } }
  );

  console.log(updatedBook); // confira o que é retornado quando o Book com o id é ou não encontrado;
  return updatedBook;
};

const deleteBook = async (id) => {
  const result = await Book.destroy({ where: { id } });

  console.log(result); // confira o que é retornado quando o Book com o id é ou não encontrado;
  return result;
};

module.exports = {
  getAll,
  getById,
  getByIdAndTitle,
  createBook,
  updateBook,
  deleteBook,
};
