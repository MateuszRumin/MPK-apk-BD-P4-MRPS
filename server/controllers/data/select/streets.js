const { Streets } = require('../../../models')


exports.all = async (req, res) => {
    try{
    const streets = await Streets.findAll() 

	res.json(streets)

} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}
