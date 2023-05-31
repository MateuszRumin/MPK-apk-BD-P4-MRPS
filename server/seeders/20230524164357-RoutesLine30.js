'use strict';
const { Routes,Stops,Lines,routeTypes } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
    
    const line = await Lines.findOne({ where:{ num_line: "30" } });
   
    



    const dataAll = [
      {stopName:'Piękna Osiedle' , order:1},
      {stopName:'Krótka Kiosk' , order:2},
      {stopName:'Krótka Sklep spożywczy' , order:3},
      {stopName:'Łąkowa Szpital Specjalistyczny' , order:4},
      {stopName:'Łąkowa Poczta' , order:5},
      {stopName:'Łąkowa Przychodnia' , order:6},
      {stopName:'Łąkowa Urząd Miasta' , order:7},
      {stopName:'Leśna Biedronka' , order:8},
      {stopName:'Dąbrowskiego Osiedle Słoneczne' , order:9},
      
      
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
