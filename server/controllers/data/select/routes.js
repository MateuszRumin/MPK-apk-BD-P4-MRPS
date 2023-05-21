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
                model:routeTypes,
                required:true,
                left:true,
                attributes:['name'],
                as:'type'            
            },
            {            
                model:Lines,
                required:true,
                left:true,
                attributes:['num_line'],
                as:'line'           
            }
        ],
        
        
        where:{ id_type:'1',id_line:req.body.id_line},
        attributes:['id_route','order']
    
    }) 
    .catch ( err => {
        console.log(err)
    })
    


	res.json(data)
}

exports.sb = async (req, res) => {

    let data = await  Routes.findAll({
        include: [
            {            
                model:Stops,
                required:true,
                left:true,
                attributes:['name'],
                as:'stop'           
            },
            {            
                model:routeTypes,
                required:true,
                left:true,
                attributes:['name'],
                as:'type'            
            },
            {            
                model:Lines,
                required:true,
                left:true,
                attributes:['num_line'],
                as:'line'           
            }
        ],
        
        
        where:{ id_type:'2',id_line:req.body.id_line},
        attributes:['id_route','order']
    
    }) 
    .catch ( err => {
        console.log(err)
    })


    if (!data || data.length === 0 ){
         data = await  Routes.findAll({
            include: [
                {            
                    model:Stops,
                    required:true,
                    left:true,
                    attributes:['name'],
                    as:'stop'           
                },
                {            
                    model:routeTypes,
                    required:true,
                    left:true,
                    attributes:['name'],
                    as:'type'            
                },
                {            
                    model:Lines,
                    required:true,
                    left:true,
                    attributes:['num_line'],
                    as:'line'           
                }
            ],
            
            
            where:{ id_type:'1',id_line:req.body.id_line},
            attributes:['id_route','order']
        
        }) 
        .catch ( err => {
            console.log(err)
        })
    }


	res.json(data)
}


exports.nd = async (req, res) => {

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
                model:routeTypes,
                required:true,
                left:true,
                attributes:['name'],
                as:'type'            
            },
            {            
                model:Lines,
                required:true,
                left:true,
                attributes:['num_line'],
                as:'line'           
            }
        ],
        
        
        where:{ id_type:'3',id_line:req.body.id_line},
        attributes:['id_route','order']
    
    }) 
    .catch ( err => {
        console.log(err)
    }) 

	res.json(data)
}

