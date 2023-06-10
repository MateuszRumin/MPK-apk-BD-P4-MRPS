const { Stops, Streets } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
   try { 
   const data = req.body

 

   
   await Stops.create(data)

   res.json("Added")
   
   }catch {
    res.json("Cannot add Stop")
   }

}
