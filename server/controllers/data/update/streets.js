
const { Streets } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    const data = req.body

      const dataStreet = {
        name:data.name
      }

    
    Streets.update(
        dataStreet, // Updated values
        { where: { id_street: data.id_street } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });

    

        res.json(`Modyfied`)




    }
