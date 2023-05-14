const express = require('express')
const router = express.Router()




//wskazanie że używamy
const userController = require('../controllers/data/delete/users')
router.post('/user', userController.delete)




module.exports = router
