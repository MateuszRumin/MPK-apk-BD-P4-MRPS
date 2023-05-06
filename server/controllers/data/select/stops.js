const { Stops } = require('../../../models')


exports.all = async (req, res) => {
    const stops = await Stops.findAll() 

	res.json(stops)
}
