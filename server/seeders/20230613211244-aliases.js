'use strict';
const { Aliases } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
   

    const dataAll = [
      { short: 'DZ', name: 'nie kursuje 1 listopada' },
      { short: 'AB', name: 'nie kursuje 5 grudnia' },
      { short: 'XY', name: 'nie kursuje 10 stycznia' },
      { short: 'KL', name: 'nie kursuje 15 lutego' },
      { short: 'MN', name: 'nie kursuje 20 marca' },
      { short: 'OP', name: 'nie kursuje 25 kwietnia' },
      { short: 'EF', name: 'nie kursuje 30 maja' },
      { short: 'GH', name: 'nie kursuje 4 lipca' },
      { short: 'IJ', name: 'nie kursuje 9 sierpnia' },
      { short: 'UV', name: 'nie kursuje 14 września' }           
    ]
   


 for (let data of dataAll){

        
    const use = await Aliases.findOne({ where: data  });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

   await queryInterface.bulkInsert('Aliases', [{...data,...defaultValues}]);
  }

 
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Aliases', null, {});
  }
};
