
const { Routes } = require('../../../models')


//wypisz wszystkie

    

exports.updateOrder = async (req, res) => {
  try{
    const data = req.body

      

   
    data.map(upd => {


        Routes.update(
            {order:upd.order}, // Updated values
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
  } catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}
