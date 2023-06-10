
const { Routes } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    try{
    const idRoute = req.body.id_route

    await Routes.destroy({where: {id_user:idRoute}})

   

	res.json("In progrees")
} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}


