'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.addConstraint('Usr_emp',{
    type: 'foreign key',
    fields:['user_id'],
    references:{
      table:'user',
      field:'id_user'
    },
    onDelete:'CASCADE'
  })

  await queryInterface.addConstraint('Usr_emp',{
    type: 'foreign key',
    fields:['emp_no'],
    references:{
      table:'Employees',
      field:'emp_no'
    },
    onDelete:'CASCADE'
  })
  








     Usr_emp.belongsTo(User,{
      foreignKey: "user_id"
     })

     User.hasOne(Usr_emp,{
      foreignKey: "user_id"
     })

     Usr_emp.belongsTo(Employees,{
      foreignKey: "emp_no"
     })

     Employees.hasOne(Usr_emp,{
      foreignKey: "emp_no"
     })

     Usr_emp.hasMany(Roles,{
      foreignKey: "role_id"
     })


     Roles.belongsTo(Usr_emp,{
      foreignKey: "role_id"
     })


   

  },

  async down (queryInterface, Sequelize) {
   
  }
};
