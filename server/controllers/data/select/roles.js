const { Roles } = require('../../../models')


exports.all = async (req, res) => {

    try{
    const roles = await Roles.findAll() 

	res.json(roles)

     } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
