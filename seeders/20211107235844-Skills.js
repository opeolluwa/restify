'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Skills', [{
      skillId: "qq;lhqbo kpoe-jndqp;l",
      skillName: "bootstrap",
      skillDescription: "css framework from twitter",
      skillOfficialPage: "https:??grtbootstpa.com",
      skillIconURI: "DataTypes.STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {})
  },
    
  

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
