const { Times } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    const data = req.body

      const dataUser = {
        Time_one_two:data.Time_one_two,
        Time_two_one:data.Time_two_one
      }


     

 
try{

     Times.update(
        dataUser, // Updated values
        { where: { id_time: data.id_time} } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });




        res.json('modified')

    } catch (err) {
        res.json('sometching hing wrong')
    }    

  




    }