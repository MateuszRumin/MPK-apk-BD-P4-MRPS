
const { Times } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    const idTimes = req.body.id_time

    try{
    await Times.destroy({where: {id_time:idTimes}})

    } catch (err){

        console.log(err)
    }

	res.json("In progrees")
}



	

