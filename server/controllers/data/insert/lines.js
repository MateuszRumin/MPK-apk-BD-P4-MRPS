const { Lines } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
   try {
   const data = req.body

 


   await Lines.create(data)

   res.json("Added")
   
   }catch {
    res.json("Cannot add Line")
   }

}
