'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "33" } });
   
    



    const dataAll = [
      {stopName:'Chopina Hala Sportowa' , order:1},
      {stopName:'Słowackiego Szpital Wojewódzki' , order:2},
      {stopName:'Chopina Teatr Muzyczny' , order:3},
      {stopName:'Chopina Park' , order:4},
      {stopName:'Dąbrowskiego ZUS' , order:5},
      {stopName:'Chopina Plac Wolności' , order:6},
      {stopName:'Dąbrowskiego Szkoła Podstawowa' , order:7},
      {stopName:'Kościuszki Dworzec PKP' , order:8},
      {stopName:'Leśna Plac zabaw' , order:9},
      
      
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
