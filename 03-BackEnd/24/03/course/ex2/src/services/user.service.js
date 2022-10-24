// src/services/userBook.service.js

const { User, Book } = require('../models');

const getAll = () => User.findAll();

module.exports = {
    getAll,
};
