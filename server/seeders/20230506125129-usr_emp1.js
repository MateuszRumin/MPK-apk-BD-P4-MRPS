'use strict';
const { Usr_emp, Users, Employees } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const userData = {
    username:'Admin',
    password:'$2a$08$5CYUq/FAEum01ZrQF5KQNe09/6ptIhTVETKX8m34OwqVAypBDjY5y',
    email:'admin.admin@localhost',
  }
  const emplyData ={
    first_name: "Aleksandra", 
    second_name: "Szymańska", 
    addres: "ul. Brzozowa 10"
  }  

  const user = await Users.findOne({ where: userData });
  const employ =  await Employees.findOne({ where: emplyData });




    const data = {
    emp_no:employ.emp_no,
    id_user:user.id_user,
    id_role:1
    }    

    
    const use = await Usr_emp.findOne({ where: data });
    if (!use){
      const defaultValues = {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    return queryInterface.bulkInsert('Usr_emp', [{...data,...defaultValues}]);
  }

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usr_emp', null, {});
  }
};