const { RouteTimes,Routes,Stops} = require('../../../models')





exports.forLinesdirTrue = async (req, res) => {

        try{
    
    const reqData = req.body

    const routeTimes = await RouteTimes.findAll({
        include: [
            {            
                model:Routes,
                required:true,
                left:true, 
                attributes:['id_route'],               
                as:'stopOne',
                where:{
                    id_line:reqData.id_line,
                    
                },
                include:[
                    {
                    model:Stops,
                    required:true,
                    left:true, 
                    attributes:['name'],               
                    as:'stop',  
            }]
            },
            {            
                model:Routes,
                required:true,
                left:true,            
                as:'stopTwo',
                attributes:['id_route'],  
                where:{
                    id_line:reqData.id_line,
                    
                },
                include:[
                    {
                    model:Stops,
                    required:true,
                    left:true, 
                    attributes:['name'],               
                    as:'stop',  
            }]
            },
        ],
        where:{direction:true},
        attributes:["id_routeTime",
        "week_mor",
		"week_mid",
		"week_eve",
		"saturday_mor",
		"saturday_mid",
		"saturday_eve",
		"sunday_mor" ,
		"sunday_mid",
		"sunday_eve",
        "direction"]  
       
    })
   
    
    res.json(routeTimes)


} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
        
}

exports.forLinesdirFalse = async (req, res) => {

    try{

    const reqData = req.body

    const routeTimes = await RouteTimes.findAll({
        include: [
            {            
                model:Routes,
                required:true,
                left:true, 
                attributes:['id_route'],               
                as:'stopOne',
                where:{
                    id_line:reqData.id_line,
                    
                },
                include:[
                    {
                    model:Stops,
                    required:true,
                    left:true, 
                    attributes:['name'],               
                    as:'stop',  
            }]

            },
            {            
                model:Routes,
                required:true,
                left:true,            
                as:'stopTwo',
                attributes:['id_route'],  
                where:{
                    id_line:reqData.id_line,
                    
                },
                include:[
                    {
                    model:Stops,
                    required:true,
                    left:true, 
                    attributes:['name'],               
                    as:'stop',  
            }]
            },
        ],
        where:{direction:false},
        attributes:["id_routeTime",
            "week_mor",
		"week_mid",
		"week_eve",
		"saturday_mor",
		"saturday_mid",
		"saturday_eve",
		"sunday_mor" ,
		"sunday_mid",
		"sunday_eve",
        "direction"]  
       
    })
   
    
    res.json(routeTimes)

} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
        
}


