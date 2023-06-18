
const { Routes } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    try{
    const idRoute = req.body.id_route
        console.log(req.body)
    await Routes.destroy({where: {id_route:idRoute}})

   

	res.json("In progrees")
} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}


