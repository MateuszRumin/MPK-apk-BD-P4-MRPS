const { Times,Stops} = require('../../../models')





exports.all = async (req, res) => {

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
    }).catch(err => {
        console.log(err);
    })
    
	res.json(times)
}
