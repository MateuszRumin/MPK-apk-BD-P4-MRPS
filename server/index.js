const express = require('express')
const app = express()
const { PORT } = require('./config/port')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require("bcrypt")
//inicjacja dotenv
dotenv.config({path: './.env'})
//parse dla wartsci json
app.use(express.json())
//uzycie cora **autoryzacja dostępu
app.use(cors())

//pobranie danych tabel
const db = require('./models')



//routes i użycie sciezki

const insertRoute = require('./routes/insertData')
app.use('/insert', insertRoute)
const selectRoute = require('./routes/selectData')
app.use('/select', selectRoute)
const updateRoute = require('./routes/updateData')
app.use('/update', updateRoute)
const deleteRoute = require('./routes/deleteData')
app.use('/delete', deleteRoute)

app.use('/test', async (req, res) => {
   
	try{
	
	 const data = req.body;
	
		

		
    console.log(data);
	res.json("test")
	}
	catch (err){
		res.status(500)
	}



})

//połączenie
db.sequelize.sync().then(() => {  
	app.listen(PORT, () => {	 
		console.log(`Aplikacja dziala na porcie ${PORT}`)	
	})
}).catch ((err) => {
	console.log("Baza nie połączona lub port nieczynny")
})
