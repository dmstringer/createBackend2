"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stores", [
      {
        name: "Scott's Pets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Pet Place",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pet Mart",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stores", null, {});
  },
};
