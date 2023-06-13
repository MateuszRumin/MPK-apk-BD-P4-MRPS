const { Routes } = require('../../../models')



exports.delete = async (req, res) => {
    try{


        const data = req.body

        const idRoute = data.id_route



        await Routes.destroy({where: {id_route:idRoute}})



} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

