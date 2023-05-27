'use strict';
const { exec } = require('child_process');
const path = require('path');
const db = require('../models');
const migrationFolder = path.resolve(__dirname)
const mainFolder = path.resolve(migrationFolder,'../')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    
    return db.sequelize.sync({force:true});




  },

  async down (queryInterface, Sequelize) {
   
    try {

      await new Promise((resolve,reject) =>{

        exec(`powershell.exe -NoProfile -Command "cd ${mainFolder}; npx sequelize-cli db:seed:all"`, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else { 
            console.log(stdout); 
                 
            resolve();
          }
        });
  
      })


    }catch (err){
      console.log(err)
    }





  }
};
