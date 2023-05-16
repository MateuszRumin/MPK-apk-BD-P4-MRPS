const { Streets,Stops } = require('../../../models')



//wypisz wszystkie
exports.addwithstops = async (req, res) => {
    
    const data= req.body
    
    
    const dataStops = data.przystanki

   
    try  {
        const addedStreet = await Streets.create({name:data.linia})
        
        if (dataStops)
        dataStops.forEach(async (value) => {
            await Stops.create({
                name:value,
                id_street:addedStreet.id_street
            })


        });



        res.json('Added')
    }catch (err){
        console.log(err)
        res.json('error')
    }

    



	
}
