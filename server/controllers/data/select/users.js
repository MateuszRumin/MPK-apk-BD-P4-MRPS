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



exports.check = async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        const username = data.username;
        const password = data.password;

        const user = await Users.findOne({
            where: { username: username }
        });

        if (!user) {
            return res.json({ error: "Wrong Data" });
        }

        await bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                return res.json({ error: "Wrong Data" });
            }
            console.log("ok")
            res.json("ok");
        });
    } catch (err) {
        console.error(err);
        res.status(500).json('Wystąpił błąd serwera');
    }
};