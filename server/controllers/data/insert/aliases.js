
const { Aliases } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    try {
        const data = req.body;
        const insert ={
            short:data.short,
            name:data.name,
        }


        const idUser = await Aliases.create(insert)




    }catch (err) {
        console.log(err)
        res.json("Problemy z kodem")
    }



	
}

