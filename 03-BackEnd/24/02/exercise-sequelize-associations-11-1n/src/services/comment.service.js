// src/services/employee.service.js

const { Profile, Account, Comment } = require('../models');

const getAll = async () => {
  const users = await Account.findAll();

  return users;
};

const getById = async (id) => {
  const employee = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: 'profile' }],
  });
  return employee;
}

const getByAccId = async(id) => {
    const employee = await Comment.findAll({
        where: { account_id: id },
      });
      return employee;
}

module.exports = {getAll, getById, getByAccId}