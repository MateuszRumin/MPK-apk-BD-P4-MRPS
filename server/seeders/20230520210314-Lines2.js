'use strict';
const { Stops,Lines } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    const takeId1 = await Stops.findOne({ where:{ name: "Kościuszki Dworzec PKP" } });
    const takeId2 = await Stops.findOne({ where:{ name: "Leśna Biedronka" } });

    const data = {
      num_line:'27',
      id_stop_from:takeId1.id_stop,
      id_stop_to:takeId2.id_stop,    
    }
   
        
    const use = await Lines.findOne({ where: {
      [Op.or]:[
        { id_stop_from:takeId1.id_stop, id_stop_to:takeId2.id_stop},
        { id_stop_from:takeId2.id_stop, id_stop_to:takeId1.id_stop}
      ]
    } });

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
