const { Routes,Stops,routeTypes,Lines } = require('../../../models')


exports.pnpt = async (req, res) => {
    
    const data = await  Routes.findAll({
        include: [
            {            
                model:Stops,
                required:true,
                left:true,
                attributes:['name'],
                as:'stop'           
            },           
            {            
                model:Lines,
                required:true,
                left:true,
                attributes:['num_line'],
                as:'line'           
            }
        ],
        
        
        where:{id_line:req.body.id_line},
        attributes:['id_route','order']
    
    }) 
    .catch ( err => {
        console.log(err)
    })
    


	res.json(data)
}


