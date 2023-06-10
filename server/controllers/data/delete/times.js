
const { Times } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    try{
    const idTimes = req.body.id_time

    await Times.destroy({where: {id_time:idTimes}})

    
	res.json("In progrees")
} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}



	

