const { Stops,Times,Streets } = require('../../../models')
const { Op } = require('sequelize');


exports.all = async (req, res) => {
    const stops = await Stops.findAll() 

	res.json(stops)
}


exports.onStreet = async (req, res) => {
    
    const idStreet = req.body.id_street

    try{
        const resData = await Stops.findAll({where: {id_street:idStreet}})
        res.json(resData)
        
    }catch (err) {
        console.log(err)  
        res.json('błąd')
    }

    
}


exports.notConnected = async (req, res) => {

    const data = req.body
  

try{
    const times = await Times.findAll({
       
        include: [
        {
            
            model:Stops,
            required:true,
            left:true,
            attributes:['id_stop'],
            as:'stopOne'
           
        },
        {
            
            model:Stops,
            required:true,
            left:true,
            attributes:['id_stop'],
            as:'stopTwo'
        }
    ],
        attributes:['id_time'],
        where:{
            [Op.or]:[
               { id_stop_one:data.id_stop},
               { id_stop_two:data.id_stop}
            ]

            
        }
        
    })
    
   

    if (times)
    {
        const stops = await Stops.findAll({     
            include: [
            {            
                model:Streets,
                required:true,
                left:true,
                attributes:['name'],           
            }],
            attributes:['id_stop','name'],
            where:{
                [Op.and]:[
                   { id_stop:{[Op.notIn]:times.map(time => time.stopOne.id_stop)}},
                   { id_stop:{[Op.notIn]:times.map(time => time.stopTwo.id_stop)}}
                ]}

        })





        res.json(stops)
    }
    else
    {

        const stops = await Stops.findAll({     
            include: [
            {            
                model:Streets,
                required:true,
                left:true,
                attributes:['name'],           
            }],
            attributes:['id_stop','name']  
        })




        res.json(stops)
    }


    console.log(times)




    }catch(err) {


        res.json("Brak wyników")
    }








	
}

exports.allWithStreet = async (req, res) => {

   try{

    const stops = await Stops.findAll({     
        include: [
        {            
            model:Streets,
            required:true,
            left:true,
            attributes:['name'],           
        }],
        attributes:['id_stop','name']  
    })

     res.json(stops)

    } catch(err) {
        console.log(err);

        res.json('Not working')
    }

    

	
}

exports.notUsed = async (req, res) => {

    const data = req.body.id_stop
    try{
 

     const stops = await Stops.findAll({     
         include: [
         {            
             model:Streets,
             required:true,
             left:true,
             attributes:['name'],           
         }],
         attributes:['id_stop','name'],
         where:{
            id_stop:{
                [Op.notIn]:data.map(dat=>dat)
            }
         }  
     })
 


      res.json(stops)
 
     } catch(err) {
         console.log(err);
 
         res.json('Not working')
     }
 
     
 
     
 }