const { Routes } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    
   const data = req.body


Routes.findOne(
{
    where: {
        id_line:data.id_line,
        id_type:data.id_type
    },
    order:[['order','DESC']]
})
.catch (err => {
    console.log('err')
    res.json('Nie ma takiej lini lub typu')
})





const order = { order:add.order+1}
 
   try {
   await Routes.create(...data,...order)

   res.json("Added")
   
   }catch {
    res.json("Cannot add to Order")
   }

}
