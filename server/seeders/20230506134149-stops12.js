'use strict';
const { Streets, Stops } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {

    const takeId = await Streets.findOne({ where:{ name: "Słowackiego" } });


    const data = {
      name:'Słowackiego Szpital Wojewódzki',
      street_id:takeId.street_id
    }    

    
    const use = await Stops.findOne({ where: data });
    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    return queryInterface.bulkInsert('Stops', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stops', null, {});
  }
};
