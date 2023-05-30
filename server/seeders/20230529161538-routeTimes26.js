'use strict';
const { Routes,Lines,RouteTimes } = require('../models');
const {Op}= require('sequelize');



/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
   const linesAll = [
    { num_line: "26" },
    { num_line: "27" },
    { num_line: "28" },
    { num_line: "29" },
    { num_line: "31" },
    { num_line: "32" },
    { num_line: "33" },
    { num_line: "34" },
    { num_line: "35" },   
    { num_line: "36" },   
    { num_line: "37" },   
   ]
    

for (let datalines of linesAll ){

    const line = await Lines.findOne({ where:datalines });





   
    



    const dataAll = [
      {id_line:line.id_line, order:1},
      {id_line:line.id_line, order:2},
      {id_line:line.id_line, order:3},
      {id_line:line.id_line, order:4},
      {id_line:line.id_line, order:5},
      {id_line:line.id_line, order:6},
      {id_line:line.id_line, order:7},
      {id_line:line.id_line, order:8},
      {id_line:line.id_line, order:9},
        
    ]
    
    
    
    
    





     for (let dat of dataAll ){

    

      const add1= await Routes.findOne({ where: dat });
      

        let add2 = await Routes.findOne({where:{
          order:add1.order+1,
          id_line:add1.id_line        
        }})
      
        if(add2){
        
        const addDataRoute = {
          id_route_a:add1.id_route,
          id_route_b:add2.id_route

        }
       
        const use = await RouteTimes.findOne({where:addDataRoute})
        
        

        if (!use ){
          const defaultValues = {
            createdAt: new Date(),
            updatedAt: new Date()
            }
            const addData = {
              mon_fri:'00:05:00',
              saturday:'00:05:00',
              sunday:'00:05:00'
            }
            const direct1={
              direction:true
            }
            const direct2={
              direction:false
            }
  
           
            

       await queryInterface.bulkInsert('RouteTimes', [{...addDataRoute,...addData,...direct1,...defaultValues}]);
      
       await queryInterface.bulkInsert('RouteTimes', [{...addDataRoute,...addData,...direct2,...defaultValues}]);
  
          
  
    }


    


        }
      




}
}




       




   
      


  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Routes', null, {});
  }
}
