'use strict';
const { routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
   

    const data = {
      name:'Powszednie',  
    }
   
        
    const use = await routeTypes.findOne({ where:  data });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

    return queryInterface.bulkInsert('routeTypes', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('routeTypes', null, {});
  }
};
