'use strict';
const { Usr_emp, Users, Employees } = require('../models');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const userData = {
    username:'kat.now',
    password:'$2a$08$5CYUq/FAEum01ZrQF5KQNe09/6ptIhTVETKX8m34OwqVAypBDjY5y',
    email:'kat.now@example.com',
  }
  const emplyData ={
    first_name: "Katarzyna", second_name: "Nowak", addres: "ul. Lipowa 5"
  }  

  const user = await Users.findOne({ where: userData });
  const employ =  await Employees.findOne({ where: emplyData });




    const data = {
    emp_no:employ.emp_no,
    user_id:user.id_user,
    role_id:3
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