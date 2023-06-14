const { Aliases,Als_cons } = require('../../../models')
const { Op } = require('sequelize');

exports.all = async (req, res) => {

    try{
    
        const resData = await Aliases.findAll(
            {
                attributes:['id_alias','short','name']
            }
        )



        res.json(resData);

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

}


exports.toAdd = async (req, res) => {
   
    try{
    
      const data = req.body
      console.log(data)
        if (data.id_line){

            const notIn = await Als_cons.findAll({
                where:{id_line:data.id_line}})
               

                console.log(notIn)


           if(notIn.length==0){

            const ret = await Aliases.findAll()

            res.json(ret)

           

           }else {

            
            const ret = await Aliases.findAll({
                where: {
                    id_alias:notIn.id_alias
                } }) 
               
               
              res.json(ret)
            
            }

           
          
           
        }
        else if (data.id_departure){
            const notIn = await Als_cons.findAll({where:{id_departures:data.id_departures},attributes:['id_alias']})
            if(notIn.length==0){
                const ret = await Aliases.findAll()
                res.json(ret)
               }else{
    
                const ret = await Aliases.findAll({
                    where: {
                        id_alias:notIn.id_alias
                    } }) 
                res.json(ret)
                }


           
        }
        else{
            res.json("none")
        }


    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

}


exports.added = async (req, res) => {

    try{
    
      const data = req.body

        if (data.id_line){

            const ret = await Aliases.findAll({
               
                    include: [
                        {
                            model: Als_cons,
                            required: true,
                            left: true,
                            attributes: [],
                            where: {
                                id_line:data.id_line
                            },
                            attributes: [],
                            as:'change'
                        }
                    ]
                
                   
            }) 


           
            res.json(ret)
        }
        else if (data.id_departure){

            const ret = await Aliases.findAll({
               
                include: [
                    {
                        model: Als_cons,
                        required: true,
                        left: true,
                        attributes: [],
                        where: {
                            id_departure:data.id_departure
                        },
                        attributes: [],
                        as:'change' 
                    }
                ]
            
               
        }) 
            res.json(ret)
        }
        else{
            res.json("none")
        }


    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

}

