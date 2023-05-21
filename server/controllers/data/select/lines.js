const { Lines,Stops } = require('../../../models')


exports.all = async (req, res) => {

    const lines = await Lines.findAll({ 
        attributes:['id_line','num_line']})
        .catch (err => {
            console.log(err)
        } )

	res.json(lines)
}
