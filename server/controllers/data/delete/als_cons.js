const { Als_cons, Departures, Routes } = require('../../../models')





exports.delete = async (req, res) => {
    try{

   
        const data = req.body
        console.log(data);
    


        if(data.id_line){
            
            
            await Als_cons.destroy({where: {id_alias:data.id_alias,id_line:data.id_line}})
            res.json('Delated');
        }

        

        if (data.id_departures){
           
            const dept = await Departures.findOne({ 
                where:{
                    id_departures:data.id_departures
                },
                attributes:['id_route','num_passage']
            })

            const route = await Routes.findOne({where:{id_route:dept.id_route},attributes:['id_line']})
            const routeMap = await Routes.findAll({
                where:{
                    id_line:route.id_line
                }
            })

            for (let dat of routeMap){


                await Als_cons.destroy({where: {
                    id_route:dat.id_route,
                    num_passage:dept.num_passage
                }})


            }
            







        }



} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

