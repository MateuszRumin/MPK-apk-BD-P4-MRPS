'use strict';
const { Infos } = require('../models');
const {Op}= require('sequelize')


/** @type {import('sequelize-cli').Migration} */
module.exports = {



  async up (queryInterface, Sequelize) {
  
   

    const dataAll = [
      { title: 'Linia 26 odwołana ', text: 'W dniu 26.06.2022 linia 26 nie kursuje' },
      { title: 'Linia 14 odwołana ', text: 'W dniu 26.06.2022 linia 14 nie kursuje' },
      { title: 'Linia 28 odwołana ', text: 'W dniu 14.06.2022 linia 28 nie kursuje' },
      { title: 'Linia 31 odwołana ', text: 'W dniu 17.06.2022 linia 31 nie kursuje' },
      { title: 'Linia 37 odwołana ', text: 'W dniu 21.06.2022 linia 37 nie kursuje' },
      { title: 'Linia 34 odwołana ', text: 'W dniu 30.07.2022 linia 34 nie kursuje' },
      { title: 'Linia 31 odwołana ', text: 'W dniu 17.06.2022 linia 31 nie kursuje' },
      
    ]


 for (let data of dataAll){

        
    const use = await Infos.findOne({ where: data  });

    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }

   await queryInterface.bulkInsert('Infos', [{...data,...defaultValues}]);
  }

 
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Infos', null, {});
  }
};
