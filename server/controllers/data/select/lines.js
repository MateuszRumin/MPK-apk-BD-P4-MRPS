const { Lines,Stops } = require('../../../models')


exports.all = async (req, res) => {

    try{
    const lines = await Lines.findAll({ 
        attributes:['id_line','num_line']})
        

	res.json(lines)

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
