'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "35" } });
   
    



    const dataAll = [
      {stopName:'Mickiewicza-Sąd' , order:1},
      {stopName:'Mickiewicza-Szpital' , order:2},
      {stopName:'Kościuszki Park Miejski' , order:3},
      {stopName:'Słowackiego Park im. J. Słowackiego' , order:4},
      {stopName:'Chopina Plac Wolności' , order:5},
      {stopName:'Chopina Teatr Muzyczny' , order:6},
      {stopName:'Dąbrowskiego Szpital Powiatowy' , order:7},
      {stopName:'Dąbrowskiego Szkoła Podstawowa' , order:8},
      {stopName:'Zielona Gimnazjum' , order:9},
      
      
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
