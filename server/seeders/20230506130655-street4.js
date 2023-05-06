'use strict';
const { Streets } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = {
      name:'Chopina'
    }    

    
    const use = await Streets.findOne({ where: data });
    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    return queryInterface.bulkInsert('Streets', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Streets', null, {});
  }
};