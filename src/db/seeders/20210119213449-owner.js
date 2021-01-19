"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Owners", [
      {
        firstName: "Katalin",
        lastName: "Davidoff",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Simona",
        lastName: "Rickett",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Nicolais",
        lastName: "Demschke",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Eleonore",
        lastName: "Kinkade",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Cyndy",
        lastName: "Daw",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Arlen",
        lastName: "Martinon",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Ivan",
        lastName: "Kaines",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Hazel",
        lastName: "Boyda",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Karly",
        lastName: "Attwell",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Kirk",
        lastName: "Fourcade",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Noell",
        lastName: "Severn",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Freemon",
        lastName: "Twinberrow",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Belicia",
        lastName: "Heath",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Hugibert",
        lastName: "Jelf",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Elita",
        lastName: "Yanshonok",
        phoneNumber: "555-555-5555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Owners", null, {});
  },
};
