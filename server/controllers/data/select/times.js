const { Times,Stops} = require('../../../models')





exports.all = async (req, res) => {

    try{
    const times = await Times.findAll({
        include: [
        {
            
            model:Stops,
            required:true,
            left:true,
            attributes:['id_stop','name'],
            as:'stopOne'
           
        },
        {
            
            model:Stops,
            required:true,
            left:true,
            attributes:['id_stop','name'],
            as:'stopTwo'
        }
    ],
        attributes:['id_time','Time_one_two','Time_two_one']
    })
    
	res.json(times)

} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}
