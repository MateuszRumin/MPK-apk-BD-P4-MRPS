const { Routes } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
  try{  
 
    const data = req.body



const biggestOrder = await Routes.findOne(
{
    where: {
        id_line:data.line.id_line        
    },
    order:[['order','DESC']],
    attributes:['order']
})



const dataAdd = {
    id_line:data.line.id_line,
    id_stop:data.stop.id_stop,
    order:biggestOrder.order+1 
}

  
   await Routes.create(dataAdd)

   res.json("Added")
   


   
} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}

}
