const { Streets } = require('../../../models')


exports.all = async (req, res) => {
    const streets = await Streets.findAll() 

	res.json(streets)
}
