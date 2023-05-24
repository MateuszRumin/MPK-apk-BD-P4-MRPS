
const { Routes } = require('../../../models')


//wypisz wszystkie

    

exports.updateOrder = async (req, res) => {

    const data = req.body

      
try{
   
    data.map(upd => {


        Routes.update(
            upd.order, // Updated values
            { where: { id_route: upd.id_route } } // Condition to match the records to be updated
          )
            .then((affectedRows) => {
              console.log(`${affectedRows} rekordów zmodyfikowanych`);
            })
            .catch((error) => {
              console.error('Error', error);
            });
    





    })
    res.json('Updated')
}
catch (err){
    res.json('Cannot Upddated')
}
}
