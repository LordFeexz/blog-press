"use strict";

const { hashSync } = require("bcryptjs");
const { v4 } = require("uuid");

const { EMAIL, PASSWORD, NAME } = process.env;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    if (!EMAIL || !PASSWORD || !NAME) throw new Error("Missing env");

    await queryInterface.bulkInsert("admins", [
      {
        id: v4(),
        name: NAME,
        email: EMAIL,
        password: hashSync(PASSWORD, 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    if (!EMAIL) throw new Error("Missing env");

    await queryInterface.bulkDelete("admins", {
      email: EMAIL,
    });
  },
};
