'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "36" } });
   
    



    const dataAll = [
      {stopName:'Słowackiego Rondo' , order:1},
      {stopName:'Słowackiego Szpital Wojewódzki' , order:2},
      {stopName:'Chopina Hala Sportowa' , order:3},
      {stopName:'Dąbrowskiego Szpital Powiatowy' , order:4},
      {stopName:'Dąbrowskiego Szkoła Podstawowa' , order:5},
      {stopName:'Leśna Biedronka' , order:6},
      {stopName:'Zielona Kościół' , order:7},
      {stopName:'Piękna Szkoła Podstawowa' , order:8},
      {stopName:'Krótka Urząd Imigracyjny' , order:9},
      
      
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
