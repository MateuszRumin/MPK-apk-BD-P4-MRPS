const { Infos } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
   try {
   const data = req.body

    const dataAdd = {
        title:data.title,
        text:data.text
    }


   await Infos.create(dataAdd)

   res.json("Added")
   
   }catch {
    res.json("Cannot add Line")
   }

}
