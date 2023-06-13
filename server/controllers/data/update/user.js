const bcr = require("bcrypt")
const { Users,Usr_emp } = require('../../../models')


//wypisz wszystkie

    

exports.update = async (req, res) => {

  // try{

    const data = req.body
    
 
      const dataUser = {
        username:data.username,
        email:data.email
      }
      const paswd = await bcr.hash("qwertyuuiop",10)
      const defaultPass = {
        password:paswd
      }



      const usrEmp  = await Usr_emp.findOne({
        where:{
          id_usr_emp:data.id_user.id_usr_emp
        }
      })
      
      
    
      const check = await Users.findOne({where:dataUser})
      
      
      if(!check){

      

      if (usrEmp.id_user === null){

        const toAdd = await Users.create({...dataUser,...defaultPass})
        const toUpdate = {
          id_user:toAdd.id_user
        }


        await Usr_emp.update(
          toUpdate ,
        {where:{
          id_usr_emp:data.id_user.id_usr_emp
        }})

       
        res.json(`Dodano`)


      }else{
       
        Users.update(
          dataUser, // Updated values
          { where: { id_user: usrEmp.id_user} } // Condition to match the records to be updated
        )
        console.log(`Zmodyfikowano`); 
      res.json(`Zmodyfikowano`)

      }
     





    }else{
      res.json(`Brak możliwości dodania`)

    }

      

   

//   } catch (err) {
//     console.error(err);
//     res.status(500).json('Wystąpił błąd serwera');
// }


    }