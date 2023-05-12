
const { Employees,Usr_emp } = require('../../../models')


//wypisz wszystkie
exports.add = async (req, res) => {
    const data = req.body;
    const employee ={
        first_name:data.first_name,
		second_name:data.second_name, 
		addres:data.addres,
		pesel:data.pesel,
		tel_num:data.tel_num
    }

    try {
        const idUser = await Employees.create(employee)
        
        const connectRole={
            emp_no:idUser.emp_no,
            id_role:data.id_role
        }
        
        await Usr_emp.create(connectRole)

        res.json("Added")
    }
    catch (err) {
        res.json("Problemy z kodem")
        console.log(err)
    }



	
}

