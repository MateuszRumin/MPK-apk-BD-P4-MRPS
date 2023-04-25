const { Roles } = require('../models');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const role = await Roles.findOne({ where: {name:'Zarządca' } });
      if (!role){
      return queryInterface.bulkInsert('Roles', [{
        name:'Zarządca', 
        createdAt: new Date(),
        updatedAt: new Date() 
      }]);
      }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
