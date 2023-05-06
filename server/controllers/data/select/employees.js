const { Employees } = require('../../../models')


//wypisz wszystkie
exports.all = async (req, res) => {
    const employees = await Employees.findAll() 

	res.json(employees)
}