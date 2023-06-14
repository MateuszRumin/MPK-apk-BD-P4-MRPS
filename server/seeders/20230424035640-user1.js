'use strict'
const { Users } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const data = {
			username: 'Admini',
			password: '$2b$10$nJ.a0FjmsRFHvGsEW6z./OiyoSESc5Xst0IaR58/jEpi1dA1R8dNa',
			email: 'admin.admin@localhost',
		}

		const use = await Users.findOne({ where: data })
		if (!use) {
			const defaultValues = {
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			return queryInterface.bulkInsert('Users', [{ ...data, ...defaultValues }])
		}
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Users', null, {})
	},
}
