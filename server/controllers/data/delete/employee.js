const { Employees,Usr_emp,Users } = require('../../../models')





exports.delete = async (req, res) => {
    try{

        const data = req.body

        const idEmployees = data.emp_no

        await Employees.destroy({where: {emp_no:idEmployees}})



} catch (err) {
    console.error(err);
    res.status(500).json('Wystąpił błąd serwera');
}
}

