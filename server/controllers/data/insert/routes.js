const { Routes } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    
   const data = req.body


const biggestOrder = await Routes.findOne(
{
    where: {
        id_line:data.line.id_line        
    },
    order:[['order','DESC']],
    attributes:['order']
})
.catch (err => {
    console.log('err')
    res.json('Nie ma takiej lini lub typu')
})


const dataAdd = {
    id_line:data.line.id_line,
    id_stop:data.stop.id_stop,
    order:biggestOrder.order+1 
}
 
   try {
   await Routes.create(dataAdd)

   res.json("Added")
   
   }catch {
    res.json("Cannot add to Order")
   }

}
