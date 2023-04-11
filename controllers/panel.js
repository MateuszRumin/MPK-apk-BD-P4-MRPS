const mysql = require('mysql2')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection( {
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE

})


exports.register = (req,res) => {
    

    const { login, type_id, password, passwordConfirm } = req.body;

    db.query('SELECT nazwa FROM uzytkownicy WHERE nazwa = ?',[login], async (error,results) => {
        if (error) {
            console.log(error)
        }

        if (results.length > 0) {
            return res.render('register',{
               message: 'Istnieje juz ten użytkownik' 
            })
        }else if(password !== passwordConfirm){
            return res.render('register',{
                message: 'Hasła nie są takie same'
            })  
        }

        let  hashedPassword = await bcrypt.hash(password,8)

       db.query('INSERT INTO uzytkownicy SET ?',{nazwa: login, typ_id: type_id, password: hashedPassword}, (error,results) =>{
            if(error){
                console.log(error)
            }else{
                return res.render('register',{
                    message: 'Dodano użytkownika' 
                 })
            }
       })
    

    })


    
}