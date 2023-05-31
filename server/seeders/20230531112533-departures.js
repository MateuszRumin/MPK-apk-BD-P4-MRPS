const {Departures,Routes,Lines,routeTimes } = require('../models');
const {Op}= require('sequelize');

'use strict';

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
      { num_passage: '1', time: '08:00:00' },
      { num_passage: '2', time: '09:00:00' },
      { num_passage: '3', time: '10:10:00' },
      { num_passage: '4', time: '11:20:00' },
      { num_passage: '5', time: '12:00:00' },
      { num_passage: '6', time: '15:15:00' },
      { num_passage: '7', time: '17:30:00' },
      { num_passage: '8', time: '19:00:00' },
      { num_passage: '9', time: '22:11:00' },
    ];
  
    for (let line of linesAll) {
      let lineObj = await Lines.findOne({ where: line, attributes: ['id_line'] });
  
      let routesAllWeek = await Routes.findAll({ where: { id_line: lineObj.id_line, week: true } });
  
      let before;
      let time;
  
      for (let num of info) {

        for (let route of routesAllWeek) {
          let values = {
            num_passage: num.num_passage,
            id_route: route.id_route,
            day: 'week',
            direction: true,
          };
  
          
          let defaultValues = {
            createdAt: new Date(),
            updatedAt: new Date(),
          };
  
          if (!before) {
            time = { time: num.time };
            let check = await Departures.findOne({ where: values });
  
            if (!check) {
              before = await queryInterface.bulkInsert('Departures', [{ ...time, ...values, ...defaultValues }]);
            }
          } else {
            let timeIds = {
              id_route_a: before.id_route,
              id_route_b: route.id_route,
              direction:true
            };
            console.log(timeIds)
            let datatime = await routeTimes.findOne({ where: timeIds });
            if ('03:00:00' < before.time && before.time < '11:00:00') {
              time = { time: before.time + datatime.week_mor };
            } else if ('11:00:00' < before.time && before.time < '19:00:00') {
              time = { time: before.time + datatime.week_mid };
            } else {
              time = { time: before.time + datatime.week_eve };
            }
  
            let check = await Departures.findOne({ where: values });
  
            if (!check) {
              before = await queryInterface.bulkInsert('Departures', [{ ...time, ...values, ...defaultValues }]);
            }
          }
        }
        
      }
  
      
    }
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('StopTimes', null, {});
  }
};
