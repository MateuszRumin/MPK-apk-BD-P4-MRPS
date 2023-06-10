
const { Users } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    try{
        const idUser= req.body.id_user

        await Users.destroy({where: {id_user:idUser}})
        
        res.json("In progrees")
    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}



	

