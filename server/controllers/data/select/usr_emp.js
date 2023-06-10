const { Usr_emp,Employees } = require('../../../models')


exports.all = async (req, res) => {
    const usremps = await Usr_emp.findAll() 

	res.json(usremps)
}

exports.withNoAccounts = async (req, res) => {

    try{
        const usremps = await Usr_emp.findAll({
            where: { id_user:null},
            include:[{
                model:Employees,
                required:true,
                right:true,
                attributes:['first_name','second_name'],
            }
            ]
        
        })

        res.json(usremps)

    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
