
const { Streets } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    const idStreet = req.body.id_user

    try{
    await Streets.destroy({where: {id_user:idStreet}})

    } catch (err){

        console.log(err)
    }

	res.json("In progrees")
}



	

