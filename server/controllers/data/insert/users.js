
const { Users,Employees,Usr_emp } = require('../../../models')
const bcrypt = require("bcrypt")

//wypisz wszystkie
exports.add = async (req, res) => {
    const { username,password,email} = req.bady

  bcrypt.hash(password,10).then(async (hash) =>{
    const dataAdd = {
      username:username,
      password:hash,
      email:email
    }

    if (!(await Users.findOne({ where: {username:dataAdd.username}})) || !(await Users.findOne({ where: {email:dataAdd.email}})))    
      {
        const id = await Users.create(dataAdd)



        const user = await Usr_emp.update({
          id_user:id
        },
        {
          where:{emp_no:req.body.emp_no}
        }  
        )
       

      

        res.json(`Added`)

    }else{
        res.json('taka nazwa i email już istnieje lub nie wprowadziłeś zmian')
    }

  
  res.json('succes')
  })




    }
