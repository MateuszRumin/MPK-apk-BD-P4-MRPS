'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "32" } });
   
    



    const dataAll = [
      {stopName:'Dąbrowskiego Szpital Powiatowy' , order:1},
      {stopName:'Dąbrowskiego Szkoła Podstawowa' , order:2},
      {stopName:'Dąbrowskiego Osiedle Słoneczne' , order:3},
      {stopName:'Kościuszki Park Miejski' , order:4},
      {stopName:'Kościuszki Dworzec PKP' , order:5},
      {stopName:'Słowackiego Teatr Miejski' , order:6},
      {stopName:'Dąbrowskiego ZUS' , order:7},
      {stopName:'Mickiewicza-Rynek' , order:8},
      {stopName:'Chopina Plac Wolności' , order:9},
      
      
    ]
    
    
    
    
    





     for (let dat of dataAll ){

          const stop = await Stops.findOne({ where:{ name: dat.stopName } });



        

          const data = { 
            id_line:line.id_line,
            id_stop:stop.id_stop,
            order:dat.order 
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
