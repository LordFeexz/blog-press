"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("referrals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "code is required",
          },
          notNull: {
            msg: "code is required",
          },
        },
      },
      referrer: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: null,
        references: {
          model: { tableName: "admins" },
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        unique: true,
        validate: {
          notEmpty: {
            msg: "referrer is required",
          },
          notNull: {
            msg: "referrer is required",
          },
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("referrals");
  },
};
