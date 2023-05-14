
const { Users } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    const idUser= req.body.id_user

    try{
    await Users.destroy({where: {id_user:idUser}})
    } catch (err){
        console.log(err)
    }

	res.json("In progrees")
}



	

