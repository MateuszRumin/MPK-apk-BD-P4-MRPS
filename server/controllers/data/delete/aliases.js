const { Aliases } = require('../../../models')





exports.delete = async (req, res) => {
    try{

   
    
    await Aliases.destroy({where: {id_alias:req.body.id_alias}})


	res.json("Delated")



} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

