
const { Lines } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    const idLine = req.body.id_line

    try{
    await Lines.destroy({where: {id_line:idLine}})

    } catch (err){

        console.log(err)
    }

	res.json("In progrees")
}


