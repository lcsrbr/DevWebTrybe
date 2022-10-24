// src/controllers/userBook.controller.js

const userService = require('../services/user.service')

const getAll = async (req, res) => {
  try {
    const user = await userService.getAll();

    if (!user)
      return res.status(404).json({ message: 'Pessoa não encontrada' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

module.exports = {
    getAll,
};
