'use strict';
const { Lines } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
   

    const dataAll = [
        { num_line:'26' },
        { num_line:'27' },
        { num_line:'28' },
        { num_line:'29' },
        { num_line:'30' },
        { num_line:'31' },
        { num_line:'32' },
        { num_line:'33' },
        { num_line:'34' },
        { num_line:'35' },
        { num_line:'36' },
        { num_line:'37' },
        { num_line:'38' },
        { num_line:'39' }        
    ]
   


 for (let data of dataAll){

        
    const use = await Lines.findOne({ where: data  });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

   await queryInterface.bulkInsert('Lines', [{...data,...defaultValues}]);
  }

 
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lines', null, {});
  }
};
