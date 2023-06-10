
const { Streets } = require('../../../models')


//wypisz wszystkie


exports.delete = async (req, res) => {
    
    try{
    const idStreet = req.body.id_user

    await Streets.destroy({where: {id_user:idStreet}})

   

	res.json("In progrees")
} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}



	

