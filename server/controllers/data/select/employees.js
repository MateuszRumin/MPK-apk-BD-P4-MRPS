const { Employees, Usr_emp, Roles } = require('../../../models')


//wypisz wszystkie
exports.all = async (req, res) => {
    const employees = await Employees.findAll() 

	res.json(employees)
}

exports.allAndRole = async (req, res) => {
    const employees = await Employees.findAll()
        
          
    


	res.json(employees)
}