const { Departures } = require('../../../models')





exports.delete = async (req, res) => {
    try{

      const data = req.body


    const dept = await Departures.findOne({
        where:{
            id_departures:data.id_departures
        },
        attributes:['num_passage']
    }) 
  
    await Departures.destroy({where:{num_passage:dept.num_passage}})


} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

