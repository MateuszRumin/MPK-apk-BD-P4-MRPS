
const { Routes } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    const idRoute = req.body.id_route

    try{
    await Routes.destroy({where: {id_user:idRoute}})

    } catch (err){

        console.log(err)
    }

	res.json("In progrees")
}


