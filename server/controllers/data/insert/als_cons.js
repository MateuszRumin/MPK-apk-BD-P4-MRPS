const { Als_cons,Departures } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    try {

        const data = req.body
        


        if(data.id_line){
            
            const dataAdd = {
                id_line:data.id_line,
                id_alias:data.id_alias,
            }
            console.log(dataAdd);

           await Als_cons.create(dataAdd)

        }

        if (data.id_departures){
            const dataAdd1 = {
                id_alias:data.id_alias
            }

            const check = Departures.findOne({
                where:{id_departures:data.id_departures}
            })

            const forEach = Departures.findAll({
                where:{
                    num_passage:check.num_passage
                },
                attributes:['id_departures']

            })

            for (let  dat of forEach){
                
                const dataAdd2 ={
                    id_departures:dat.id_departures
                }


                await Als_cons.create(...dataAdd1,...dataAdd2)


            }



        }
       








    }catch (err) {
        console.log(err)
        res.json("Problemy z kodem")
    }	
}
