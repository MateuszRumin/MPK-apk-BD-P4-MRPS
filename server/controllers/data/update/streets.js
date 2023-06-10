
const { Streets } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {
try{
    const data = req.body

      const dataStreet = {
        name:data.rename
      }

    
    Streets.update(
        dataStreet, // Updated values
        { where: { id_street: data.id_street } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
          res.json(`Modyfied`)
        })
        
      } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
    

       




    }
