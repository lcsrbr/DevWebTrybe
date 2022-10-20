// src/services/employee.service.js

const { Profile, Account } = require("../models");

const getAll = async () => {
  const users = await Account.findAll();

  return users;
};

const getById = async (id) => {
  const employee = await Account.findOne({
    where: { id },
    include: [{ model: Profile, as: "profile" }],
  });
  return employee;
};

const insertAccount = async (email, password) => {
  const account = await Account.create({ email, password });
  return account;
};

module.exports = { getAll, getById, insertAccount };
