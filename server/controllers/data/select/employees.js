
const { Employees, Usr_emp, Roles,Users } = require('../../../models')


//wypisz wszystkie
exports.all = async (req, res) => {
    const employees = await Employees.findAll() 

	res.json(employees)
}

exports.allAndRole = async (req, res) => {
    
    try{
    
    const employees = await Employees.findAll({
        include: [
        {
            
            model:Usr_emp,
            required:true,
            left:true,
            attributes:['id_usr_emp','id_user'],
            include:[{
                model:Roles,
                required:true,
                left:true,
                attributes:['name'],
            },
            {
                model:Users,
                required:false,
                left:true,
                attributes:['username','email'],
            }]
            
        }],
        attributes:['emp_no','first_name','second_name','addres','pesel','tel_num']
    })
    
	res.json(employees)

 } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}