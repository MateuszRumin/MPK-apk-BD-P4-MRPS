
const { Users,Employees,Usr_emp } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    const data = req.bady

    const dataUser = {
        username:data.username,
        password:data.password,
        email:data.email
      }
      
      
      if (!(await Users.findOne({ where: {username:data.username}})) || !(await Users.findOne({ where: {email:data.email}})))    
      {

       const dataAdded = await Users.create(dataUser)

       Usr_emp.update(
        {id_user:dataAdded.id_user},
        {where: {id_usr_emp:req.id_usr_emp}}
       )


     
       res.json(`Added`)

    }else{
        res.json('taka nazwa i email już istnieje lub nie wprowadziłeś zmian')
    }





	res.json("In progrees, waiting for passport authentication")
}
