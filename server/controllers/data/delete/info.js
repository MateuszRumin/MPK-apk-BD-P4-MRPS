const { Infos } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    try{
    const idinfo = req.body.id_info

    
    await Infos.destroy({where: {id_info:idinfo}})


	res.json("Deleted")

} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}


