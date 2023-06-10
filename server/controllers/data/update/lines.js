
const { Lines } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {
  try{
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
       

    


  




	res.json(`employees`)

} catch (err) {
  console.error(err);
  res.status(500).json('Wystąpił błąd serwera');
}


}