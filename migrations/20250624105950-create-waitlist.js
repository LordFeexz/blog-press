"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("waitlists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "email is required",
          },
          notNull: {
            msg: "email is required",
          },
          isEmail: {
            msg: "email is invalid",
          },
        },
        unique: true,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      referral: {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null,
        references: {
          model: { tableName: "admins" },
          key: "id",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      accept_marketing_email: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("waitlists");
  },
};
