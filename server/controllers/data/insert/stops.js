const { Stops, Streets } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    
   const data = req.body

  console.log(data)

   try {
   await Stops.create(data)

   res.json("Added")
   
   }catch {
    res.json("Cannot add Stop")
   }

}
