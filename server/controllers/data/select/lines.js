const { Lines,Stops } = require('../../../models')


exports.all = async (req, res) => {

    const lines = await Lines.findAll({ 
        include: [
            {            
                model:Stops,
                required:false,
                left:true,
                attributes:['name'], 
                as:'stopFrom'          
            },
            {            
                model:Stops,
                required:false,
                left:true,
                attributes:['name'], 
                as:'stopTo'          
            }
        ],
        attributes:['id_line','num_line']})
        .catch (err => {
            console.log(err)
        } )

	res.json(lines)
}
