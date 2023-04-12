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

exports.login =  (req,res) => {
    try {
        const {login, password} = req.body
        
        if( !login || !password ){
            return res.status(400).render('index', {
                message: 'Prosze podaj nazwę i hasło'
            })   
        }

        db.query('SELECT * FROM uzytkownicy WHERE nazwa = ?',[login], async (error,results) =>{
            console.log(results)
            if( !(results.length) > 0 || !(await bcrypt.compare(password, results[0].password)  ) ){
                return res.status(401).render('index', {
                    message: 'Błędna nazwa lub hasło',
                    
                })
            } else {
                 const id = results[0].id;
                 const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN 
                 })

                 console.log(`Token: ${token}`)                
                
                const cookieOptions = {
                      expires: new Date(
                      Date.now()+ process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 
                    ),
                    httpOnly:true
                }
                 res.cookie('jwt',token,cookieOptions);
                 res.status(200).redirect("/");
            }

        })
    

    }catch(error){
        console.log(error)
    }

}