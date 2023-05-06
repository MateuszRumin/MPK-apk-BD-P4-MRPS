'use strict';
const { Employees } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = {
      first_name: "Alicja",
       second_name: "Kaczmarek",
        addres: "ul. Zielona 2", 
        pesel: "94031356789",
         tel_num: "555-567-8901"
    }

    
    const use = await Employees.findOne({ where: data });
    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    return queryInterface.bulkInsert('Employees', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};