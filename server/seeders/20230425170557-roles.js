const { Roles } = require('../models');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const role = await Roles.findOne({ where: { name:'Kierowca'} });
      if (!role){
      return queryInterface.bulkInsert('Roles', [{
        name:'Kierowca', 
        createdAt: new Date(),
        updatedAt: new Date() 
      }]);
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
