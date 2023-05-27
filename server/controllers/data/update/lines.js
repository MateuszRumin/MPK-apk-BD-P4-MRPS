
const { Lines } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {
  console.log("odebrano")
    const data = {
        num_line:req.body.num_line
    }

      

    
     Lines.update(
        data, // Updated values
        { where: { emp_no: req.body.id_line } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
        .catch((error) => {
          console.error('Error', error);
        });

    


  




	res.json(`employees`)




}