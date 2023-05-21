const { Roles } = require('../../../models')


exports.all = async (req, res) => {
    const roles = await Roles.findAll() 

	res.json(roles)
}
