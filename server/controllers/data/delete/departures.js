const { Departures } = require('../../../models')





exports.delete = async (req, res) => {
    try{

      const data = req.body


    
  
    await Departures.destroy({where:{num_passage:data.num_passage,day:data.day}})


} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

