const { Users } = require('../../../models')
const bcrypt = require("bcrypt")

exports.all = async (req, res) => {
    try{
    const users = await Users.findAll() 

	res.json(users)

    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}



exports.all = async (req, res) => {
    try{
    const {username,password} = req.body

        const user = await Users.findOne({
            where:{username:username}
        })
    
        if (!user) res.json({error:"Wrong Data"})

        bcrypt.compare(password,user.password).then( (match) => {
            if(!match) res.json({error:"Wrong Data"})


            res.json("OK")
        })




    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
}
