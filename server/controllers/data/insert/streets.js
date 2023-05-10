const { Street } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    
    const data= req.body
   
    try {
        const idUser = await Employees.create(data)
        
        
        res.json("Added")
    }
    catch (err) {
        res.json("Problemy z kodem")
        console.log(err)
    }



	
}
