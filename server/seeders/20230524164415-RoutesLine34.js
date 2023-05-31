'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "34" } });
   
    



    const dataAll = [
      {stopName:'Krótka Plac zabaw' , order:1},
      {stopName:'Krótka Urząd Imigracyjny' , order:2},
      {stopName:'Piękna Osiedle' , order:3},
      {stopName:'Zielona Park' , order:4},
      {stopName:'Leśna Plac zabaw' , order:5},
      {stopName:'Leśna Biedronka' , order:6},
      {stopName:'Dąbrowskiego Szkoła Podstawowa' , order:7},
      {stopName:'Chopina Plac Wolności' , order:8},
      {stopName:'Kościuszki Park Miejski' , order:9},
      
      
    ]
    
    
    
    
    





     for (let dat of dataAll ){

          const stop = await Stops.findOne({ where:{ name: dat.stopName } });



        

          const data = { 
            id_line:line.id_line,
            id_stop:stop.id_stop,
            order:dat.order,
            week:true,
            saturday:true,
            sunday:true,
          }
            
          const use = await Routes.findOne({ where: data });

          if (!use){
            const defaultValues = {
              createdAt: new Date(),
              updatedAt: new Date()
              }

         await queryInterface.bulkInsert('Routes', [{...data,...defaultValues}]);
      }}





   
      


  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Routes', null, {});
  }
}
