const { Times } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {
  try{
    const data = req.body

      const dataUser = {
        Time_one_two:data.Time_one_two,
        Time_two_one:data.Time_two_one
      }


     

 


     Times.update(
        dataUser, // Updated values
        { where: { id_time: data.id_time} } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
       




        res.json('modified')

      } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }

  




    }