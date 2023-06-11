
const { Aliases } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    try{
    const data = req.body

     
      
      const updData = {
        short:data.short,    
        name:data.name,
      }

    
    Aliases.update(
        updData, // Updated values
        { where: { emp_no: data.id_alias } } // Condition to match the records to be updated
      )
        .then((affectedRows) => {
          console.log(`${affectedRows} rekordów zmodyfikowanych`);
        })
       
        


  




	res.json('dodano`')

} catch (err) {
  console.error(err);
  res.status(500).json('Wystąpił błąd serwera');
}


}