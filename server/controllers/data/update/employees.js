
const { Employees, Usr_emp, Roles,Users } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

    try{
    const data = req.body

      const dataUser = {
        first_name:data.first_name,
        second_name:data.second_name,
        addres:data.addres,
        pesel:data.pesel,
        tel_num:data.tel_num
      }

    
     Employees.update(
        dataUser, // Updated values
        { where: { emp_no: data.emp_no } } // Condition to match the records to be updated
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