const { Stops } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {
try{
    const data = req.body

      const dataStop = {
        name:data.rename
      }

    
    Stops.update(
        dataStop, // Updated values
        { where: { id_stop: data.id_stop } } // Condition to match the records to be updated
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
