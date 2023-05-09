const express = require('express')
const router = express.Router()

//wskazanie że używamy

const employeesController = require('../controllers/data/insert/employees')
router.post('/employee',employeesController.add)//wypisz wszystkie


const userController = require('../controllers/data/insert/users')
router.post('/user',userController.add)//wypisz wszystkie






module.exports = router
