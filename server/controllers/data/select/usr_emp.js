const { Usr_emp,Employees } = require('../../../models')


exports.all = async (req, res) => {
    const usremps = await Usr_emp.findAll() 

	res.json(usremps)
}

exports.withNoAccounts = async (req, res) => {


    const usremps = await Usr_emp.findAll({
        where: { id_user:null},
        include:[{
            model:Employees,
            required:true,
            right:true,
            attributes:['first_name','second_name'],
        }
        ]
    
    }).catch(err => {
        console.log(err);
    })

	res.json(usremps)
}
