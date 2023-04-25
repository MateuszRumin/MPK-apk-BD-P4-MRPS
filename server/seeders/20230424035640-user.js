'use strict';
const { Users } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await Users.findOne({ where: { email: 'admin.admin@localhost' } });
    if (!user){
    return queryInterface.bulkInsert('Users', [{
      username:'Admin',
      password:'$2a$08$5CYUq/FAEum01ZrQF5KQNe09/6ptIhTVETKX8m34OwqVAypBDjY5y',
      email:'admin.admin@localhost',
      role_id:1,
      employee_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
