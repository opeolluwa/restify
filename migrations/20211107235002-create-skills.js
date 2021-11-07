'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skillId: {
        type: Sequelize.UUID
      },
      skillName: {
        type: Sequelize.STRING
      },
      skillDescription: {
        type: Sequelize.STRING
      },
      skillOfficialPage: {
        type: Sequelize.STRING
      },
      skillIconURI: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Skills');
  }
};