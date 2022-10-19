"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Teste",
          author: "Sbribouls",
          pageQuantity: 300,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "ThisiSAsTest",
          author: "J.K R.R Soares",
          pageQuantity: 300,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },        {
          title: "aadadadadadad",
          author: " Bagos",
          pageQuantity: 300,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Books", null, {}),
};
