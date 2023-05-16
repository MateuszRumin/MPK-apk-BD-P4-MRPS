'use strict';
const { Stops,Times } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    const takeId1 = await Stops.findOne({ where:{ name: "Dąbrowskiego Szpital Powiatowy" } });
    const takeId2 = await Stops.findOne({ where:{ name: "Leśna Park im. W. Reymonta" } });

    const data = {
      id_stop_one:takeId1.id_stop,
      id_stop_two:takeId2.id_stop,    
    }
   
    const times = {
      Time_one_two:'00:05:00',
      Time_two_one:'00:05:00'
    }    

    
    const use = await Times.findOne({ where: {
      [Op.or]:[
        { id_stop_one:takeId1.id_stop, id_stop_two:takeId2.id_stop },
        { id_stop_one:takeId2.id_stop, id_stop_two:takeId1.id_stop}
      ]
    } });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

    return queryInterface.bulkInsert('Times', [{...data,...times,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Times', null, {});
  }
};
