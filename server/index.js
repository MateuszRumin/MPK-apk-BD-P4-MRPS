const express = require('express')
const app = express()
const { PORT } = require('./config/port')
const cors = require('cors')

//parse dla wartsci json
app.use(express.json())
//uzycie cora **autoryzacja dostępu
app.use(cors())

//pobranie danych tabel
const db = require('./models')

//routes i użycie sciezki
const userRoute = require('./routes/auth')
app.use('/auth', userRoute)
const insertRoute = require('./routes/insertData')
app.use('/dataIn', insertRoute)
const selectRoute = require('./routes/selectData')
app.use('/dataOut', selectRoute)
const updateRoute = require('./routes/updateData')
app.use('/dataUpd', updateRoute)


//połączenie
db.sequelize.sync().then(() => {  
	app.listen(PORT, () => {	 
		console.log(`Aplikacja dziala na porcie ${PORT}`)	
	}).catch((err) => {
	  console.log("Coś nie tak z app")
	})
}).catch ((error) => {
console.log("Bład połączenia z bazą")
})
