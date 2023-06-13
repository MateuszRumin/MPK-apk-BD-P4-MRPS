const { Aliases,Als_cons } = require('../../../models')


exports.all = async (req, res) => {

    try{
    
        const resData =
      await Aliases.FindAll(
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
                        
                    }
                ]
            
               
        }) 

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


