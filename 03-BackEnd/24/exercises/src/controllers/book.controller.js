// src/controllers/Book.controller.js

const BookService = require("../services/book.service");

const error500Message = "Algo deu errado";

const getAll = async (_req, res) => {
  try {
    const Books = await BookService.getAll();
    return res.status(200).json(Books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getByIdAndTitle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.query;
    const Book = await BookService.getByIdAndTitle(id, title);
    if (!Book)
      return res.status(404).json({ message: "Usuário não encontrado" });
    return res.status(200).json(Book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity} = req.body;
    const newBook = await BookService.createBook(
      title,
      author,
      pageQuantity,
    );
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, fullName, email);

    if (!updatedBook)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);

    return res.status(200).json({ message: "Usuário excluído com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  getByIdAndTitle,
  createBook,
  updateBook,
  deleteBook,
};
