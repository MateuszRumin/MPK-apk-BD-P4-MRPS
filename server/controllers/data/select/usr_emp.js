const { Usr_emp } = require('../../../models')


exports.all = async (req, res) => {
    const usremps = await Usr_emp.findAll() 

	res.json(usremps)
}
