const { Users } = require('../../../models')


exports.all = async (req, res) => {
    try{
    const users = await Users.findAll() 

	res.json(users)

    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
