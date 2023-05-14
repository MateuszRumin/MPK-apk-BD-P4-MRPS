const { Stops } = require('../../../models')


exports.all = async (req, res) => {
    const stops = await Stops.findAll() 

	res.json(stops)
}


exports.onStreet = async (req, res) => {
    
    const idStreet = req.body.id_street

    try{
        const resData = await Stops.findAll({where: {street_id:idStreet}})
    }catch (err) {
        console.log(err)  
    }

	res.json(resData)
}

