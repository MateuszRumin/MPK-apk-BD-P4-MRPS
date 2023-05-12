
const { Employees, Usr_emp, Roles,Users } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

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
        .catch((error) => {
          console.error('Error', error);
        });

    


  




	res.json(`employees`)




}