'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "27" } });
   
    



    const dataAll = [
      {stopName:'Kościuszki Dworzec PKP' , order:1},
      {stopName:'Słowackiego Rondo' , order:2},
      {stopName:'Kościuszki Hala Widowiskowo-Sportowa' , order:3},
      {stopName:'Kościuszki Park Miejski' , order:4},
      {stopName:'Słowackiego Teatr Miejski' , order:5},
      {stopName:'Słowackiego Park im. J. Słowackiego' , order:6},
      {stopName:'Słowackiego Szpital Wojewódzki' , order:7},
      {stopName:'Dąbrowskiego ZUS' , order:8},
      {stopName:'Leśna Park im. W. Reymonta' , order:9},
      
      
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
