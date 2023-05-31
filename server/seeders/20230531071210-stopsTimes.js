'use strict';
const { Stops,StopTimes } = require('../models');
const {Op}= require('sequelize');




/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {

  
    const direct1={
      direction:true
    }
    const direct2={
      direction:false
    }
  



    const stopAll = await Stops.findAll({attributes:['id_stop']});

    for (let stop1 of stopAll){

      let stops = await Stops.findAll({       
          where:{
            id_stop:{
                [Op.not]:stop1.id_stop
            }
         }  

    })

    for (let stop2 of stops){

    
    let dataAdd =  {
      id_stop_a:stop1.id_stop,
      id_stop_b:stop2.id_stop,
    }
    

    let checkAdd = await StopTimes.findOne({
      where:{
        [Op.or]:[
           { id_stop_a:stop1.id_stop, id_stop_b:stop2.id_stop},
           { id_stop_a:stop2.id_stop, id_stop_b:stop1.id_stop},
           
        ]     
    }
    })


    if (!checkAdd){

      const timesData = {
            
        week_mor:'00:05:00',
        week_mid:'00:06:00',
        week_eve:'00:04:00',
        saturday_mor:'00:04:00',
        saturday_mid:'00:06:00',
        saturday_eve:'00:03:00',
        sunday_mor:'00:04:00',
        sunday_min:'00:05:00',
        sunday_eve:'00:03:00'
        }
    
        const defaultValues = {
          createdAt: new Date(),
          updatedAt: new Date()
          }


    
   

         
          

     await queryInterface.bulkInsert('StopTimes', [{...dataAdd,...timesData,...direct1,...defaultValues}]);
    
     await queryInterface.bulkInsert('StopTimes', [{...dataAdd,...timesData,...direct2,...defaultValues}]);




    }}}





  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('StopTimes', null, {});
  }
}
