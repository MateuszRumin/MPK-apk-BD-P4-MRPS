const { Infos } = require('../../../models')


exports.all = async (req, res) => {

    try{
    const info = await Infos.findAll({attributes:["id_info","title","text"]}) 

	res.json(info)

     } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
