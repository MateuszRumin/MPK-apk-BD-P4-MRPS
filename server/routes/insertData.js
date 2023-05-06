const express = require('express')
const router = express.Router()

//wskazanie że używamy
const passportController = require('../controllers/passStrategy')
router.post('/register', passportController.register)
router.post('/login', passportController.login)








module.exports = router
