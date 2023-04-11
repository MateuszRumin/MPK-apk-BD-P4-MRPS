const express = require('express')
const path = require('path')
const mysql = require('mysql2')
const dotenv = require('dotenv')
const app = express()

//zdefinowanie .env
dotenv.config({path: './.env'})

//połączenie  z bazą
const db = mysql.createConnection( {
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE

})

//zdefinowanie gdzie są style
const publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory))

//Dla pewności że pobierzemy dane z obojetnie jakiego forma
app.use(express.urlencoded({extended: false}))
//parse json bodies
app.use(express.json())


//set view
app.set('view engine','hbs');




//sprawdznie połączenia
db.connect( (error) => {
   if(error){
    console.log(error)
   }else {
    console.log("MSQL działa")
   } 
})

app.use('/', require('./routes/pages'))
app.use('/panel', require('./routes/panel'))

app.listen(3301, () => {
    console.log(`Dziala`)

});