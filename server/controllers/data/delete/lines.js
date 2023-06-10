
const { Lines } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    try{
    const idLine = req.body.id_line

    
    await Lines.destroy({where: {id_line:idLine}})


	res.json("In progrees")

} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}


