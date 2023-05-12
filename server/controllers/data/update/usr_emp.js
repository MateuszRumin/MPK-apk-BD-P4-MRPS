
const { Usr_emp } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    const data = req.body

      const dataUser = {
        id_role:data.id_role
      }

    
    Usr_emp.update(
        dataUser, // Updated values
        { where: { id_usr_emp: data.id_usr_emp } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });

    

        res.json(`employees`)




    }
