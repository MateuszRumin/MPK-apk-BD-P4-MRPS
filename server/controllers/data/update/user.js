const bcr = require("bcrypt")
const { Users,Usr_emp } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

  try{

    const data = req.body

 
      const dataUser = {
        username:data.username,
        email:data.email
      }


      

      const idEmployee = data.emp_no

      const usrEmp  = await Usr_emp.findOne({
        where:{
          emp_no:idEmployee
        }
      })
      const defaultPass = {
        password:bcrypt.hash("qwertyuuiop",10)
      }

      const check = await Users.findOne({where:dataUser})
      if(!check){

      

      if (usrEmp.id_user === null){

        const toAdd = await Users.create(...dataUser,...defaultPass)
        const toUpdate = {
          id_user:toAdd.id_user
        }

        await Usr_emp.update({
          toUpdate
        },
        {where:{
          id_usr_emp:usrEmp.id_usr_emp
        }})



      }else{
       

    

        Users.update(
          dataUser, // Updated values
          { where: { id_user: usrEmp.id_user} } // Condition to match the records to be updated
        )
          
        res.json(`Zmodyfikowano`)
      }


    }else{
      res.json(`Brak możliwości dodania`)

    }

       res.json(`Zmodyfikowano`)

   

  } catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}


    }