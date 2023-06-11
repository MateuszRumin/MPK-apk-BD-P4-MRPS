const { Als_cons } = require('../../../models')


exports.find = async (req, res) => {

    try{
        
       const data = req.body


        if (data.id_line){


           await Als_cons.FindAll(
                {
                    where:{id_line:data.id_line},
                    attributes:['id_alias','short','name']
                }
            )

        }

        if (data.id_line){
            
           await Als_cons.FindAll(
                {
                    where:{id_line:data.id_line},
                    attributes:['id_alias','short','name']
                }
            )

        }








        res.json(resData)

    }
    catch (err) {

        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

}
