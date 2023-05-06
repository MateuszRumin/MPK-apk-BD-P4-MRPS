'use strict';
const { Employees } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = {
      first_name: "Katarzyna", second_name: "Nowak", addres: "ul. Lipowa 5", pesel: "85021512345", tel_num: "555-123-4567"
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