
const { Users } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    const data = req.body

      const dataUser = {
        username:data.username,
        email:data.email
      }
      
      
      if (!(await Users.findOne({ where: dataUser }))) {

 
     Users.update(
        dataUser, // Updated values
        { where: { id_user: data.id_user} } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });

       res.json(`Zmodyfikowano`)

    }else{
        res.json('taka nazwa i hasło już istnieje lub nie wprowadziłeś zmian')
    }




    }