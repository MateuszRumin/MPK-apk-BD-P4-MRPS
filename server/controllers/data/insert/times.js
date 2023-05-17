const { Times } = require('../../../models')





exports.add = async (req, res) => {
    const data = req.bady


    const dataAdd = {
        id_stop_one:data.id_stop_one,
        id_stop_two:data.id_stop_two,
        Time_one_two:data.Time_one_two,
        Time_two_one:data.Time_two_one      
      }
try {  
        await Times.create(dataAdd)
    }catch (err) {
        res.json('niepowodzenie')
    }
	res.json("In progrees, waiting for passport authentication")
}