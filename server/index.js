const express = require('express')
const app = express()
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

// resz

//połączenie
db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('Aplikacja dziala na porcie 3001')
	})
})
