const { Lines } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    
   const data = req.body

  console.log(data)

   try {
   await Lines.create(data)

   res.json("Added")
   
   }catch {
    res.json("Cannot add Line")
   }

}
