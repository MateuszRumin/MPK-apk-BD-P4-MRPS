const { Users } = require('../models');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await Users.findOne({ where: { email: 'kierowca.kierowca@localhost' } });
    if (!user){
    return queryInterface.bulkInsert('Users', [{
      username:'Kierowca',
      password:'$2a$08$Ke8oQ5gj5N6AWCOG9tWSv.fx49JPxMkd4VWF4N0PA6PCailTabT0W',
      email:'kierowca.kierowca@localhost',
      role_id:3,
      employee_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
