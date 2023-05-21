'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    const stop = await Stops.findOne({ where:{ name: "Piękna Park" } });
    const line = await Lines.findOne({ where:{ num_line: "29" } });
    const route = await routeTypes.findOne({ where:{ name: "Niedziele i świeta" } });
    const routeOrder={order:'4'}

    const data = {
      id_line:line.id_line,
      id_stop:stop.id_stop,
      id_type:route.id_route_type,
      order:routeOrder.order
    }
   
        
    const use = await Routes.findOne({ where: data });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

    return queryInterface.bulkInsert('Routes', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Routes', null, {});
  }
};
