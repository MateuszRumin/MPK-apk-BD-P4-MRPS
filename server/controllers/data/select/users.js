const { Users } = require('../../../models')


exports.all = async (req, res) => {
    const users = await Users.findAll() 

	res.json(users)
}
