'use strict';
const { Stops,Lines } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  

    const data = {
     num_line:31  
    }
   
        
    const use = await Lines.findOne({ where: data  });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

    return queryInterface.bulkInsert('Lines', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lines', null, {});
  }
};
