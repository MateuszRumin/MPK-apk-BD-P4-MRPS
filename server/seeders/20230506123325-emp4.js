'use strict';
const { Employees } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = {
      first_name: "Paweł", 
      second_name: "Mazur", 
      addres: "ul. Podgórna 1", 
      pesel: "90060167890", 
      tel_num: "555-678-9012"
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