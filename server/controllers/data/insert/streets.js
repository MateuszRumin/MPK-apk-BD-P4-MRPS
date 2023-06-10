const { Streets,Stops } = require('../../../models')



//wypisz wszystkie
exports.addwithstops = async (req, res) => {
    try  {
    const data= req.body
    
    
    const dataStops = data.przystanki

   
  
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
