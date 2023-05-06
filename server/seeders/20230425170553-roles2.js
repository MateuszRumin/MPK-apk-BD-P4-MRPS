const { Roles } = require('../models');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data ={
      name:'Zarządca', 
    }
      const role = await Roles.findOne({ where: data });

      if (!role){
        const defaultValues = {
          createdAt: new Date(),
          updatedAt: new Date()
        }
     
        return queryInterface.bulkInsert('Roles', [{...data,...defaultValues}]);
      }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
