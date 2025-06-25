"use strict";

const { hashSync } = require("bcryptjs");
const { v4 } = require("uuid");

function generateReferralCode(length = 10) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

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

    const transaction = await queryInterface.sequelize.transaction();
    try {
      const data = await queryInterface.insert(
        null,
        "admins",
        {
          id: v4(),
          name: NAME,
          email: EMAIL,
          password: hashSync(PASSWORD, 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        { transaction, returning: true }
      );
      await queryInterface.insert(
        null,
        "referrals",
        {
          code: generateReferralCode(10),
          referrer: data[0][0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
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
