const { Stops } = require('../../../models')





exports.delete = async (req, res) => {
    try{

        const data = req.body

        const idStop = data.id_stop

        await Stops.destroy({where: {id_stop:idStop}})



} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

