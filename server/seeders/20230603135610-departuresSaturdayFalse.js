const {Departures,Routes,Lines,RouteTimes } = require('../models');
const {Op}= require('sequelize');

'use strict';

function timeToSeconds(time) {
  let timeParts = time.split(':');
  let hours = parseInt(timeParts[0], 10);
  let minutes = parseInt(timeParts[1], 10);
  let seconds = parseInt(timeParts[2], 10);
  return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secondsRemainder = seconds % 60;

  let hoursString = hours.toString().padStart(2, '0');
  let minutesString = minutes.toString().padStart(2, '0');
  let secondsString = secondsRemainder.toString().padStart(2, '0');

  return `${hoursString}:${minutesString}:${secondsString}`;
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
    ];
    const info = [
      { num_passage: '1', },
      { num_passage: '2', },
      { num_passage: '3', },
      { num_passage: '4', },
      { num_passage: '5', },
      { num_passage: '6', },
      { num_passage: '7', },
      { num_passage: '8', },
      { num_passage: '9', },
    ];
    
    
    let timeIds
    let before = null;
    let time
    let oldTime
    let timeToAdd
    let olDep
    let datatime
    let addedTime

    for (let line of linesAll) {
      let lineObj = await Lines.findOne({ where: line, attributes: ['id_line'] });
  
      let routesAllWeek = await Routes.findAll({ 
        where: 
        { 
          id_line: lineObj.id_line, 
          saturday: true },
        order:[['order','DESC']] 
        
        });
  
      
      
  
      for (let num of info) {
        before = null;
        
        for (let route of routesAllWeek) {
          
             
          let values = {
            num_passage: num.num_passage,
            id_route: route.id_route,
            day: 'saturday',
            direction: false,
          };
          
          
          let defaultValues = {
            createdAt: new Date(),
            updatedAt: new Date(),
          };

         
          
          if (before !==null) {
            let old = await Departures.findOne({where:{id_departures:olDep},attributes:['time']})
           
            oldTime = timeToSeconds(old.time)
            

            timeIds = {
              id_route_b: before,
              id_route_a: route.id_route,
              direction:false
            };
            
            datatime = await RouteTimes.findOne({ where: timeIds });

            if (timeToSeconds('03:00:00') < oldTime && oldTime < timeToSeconds('11:00:00')) {
              timeToAdd = timeToSeconds(datatime.saturday_mor)
              addedTime = (oldTime+timeToAdd) % (24*3600)
              
            } else if (timeToSeconds('11:00:00') < oldTime && oldTime < timeToSeconds('19:00:00')) {
              timeToAdd =timeToSeconds(datatime.saturday_mid)
              addedTime = (oldTime+timeToAdd) % (24*3600)
              
              
            } else {
              timeToAdd = timeToSeconds(datatime.saturday_eve)
              addedTime = (oldTime+timeToAdd) % (24*3600)
            }
  
            let check = await Departures.findOne({ where: values });
            time = {
              time:secondsToTime(addedTime)
            } 
            if (!check) {
              olDep = await queryInterface.bulkInsert('Departures', [{ ...time, ...values, ...defaultValues }]);
                      
            }else{
              olDep=check.id_departures
            }
          }
         

          if (before === null) {
           let toSetTime= await Departures.findOne({ where: 
            {
            num_passage: num.num_passage,
            id_route: route.id_route,
            day: 'saturday',
            direction: true,
          },
          attributes:['time']
         });

             time = { time:secondsToTime(timeToSeconds(toSetTime.time)+timeToSeconds('00:11:10')) };
            let check = await Departures.findOne({ where: values });
           
            if (!check) {
              
              olDep = await queryInterface.bulkInsert('Departures', [{ ...time, ...values, ...defaultValues }]);
              
              
            }else{
              
              olDep=check.id_departures
             
            }
          } 

          before = values.id_route
          

        }
        
      }      
    }
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Departures', null, {});
  }
};
