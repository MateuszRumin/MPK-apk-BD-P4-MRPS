const { Users } = require('../models');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await Users.findOne({ where: { email: 'zarzondca.zarzondca@localhost' } });
    if (!user){

    return queryInterface.bulkInsert('Users', [{
      username:'Zarzondca',
      password:'$2a$08$mgYTmyHOQas/xPA8Ddi79OfJtKq14gsTlIpZ5K81M9ekBoOtNKTr.',
      email:'zarzondca.zarzondca@localhost',
      role_id:2,
      employee_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
