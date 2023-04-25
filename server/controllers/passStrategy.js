
const { Users } = require("../models")


exports.register = (req,res) => {
    res.json("HelloWorld")

}



exports.login =  (req,res) => {
    const dane = req.body
    console.log(dane)
    
    res.json("dane")

}