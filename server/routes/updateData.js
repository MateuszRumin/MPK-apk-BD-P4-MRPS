const express = require('express')
const router = express.Router()

//wskazanie że używamy

const employeesController = require('../controllers/data/update/employees')
router.post('/employee',employeesController.update)//wypisz wszystkie








module.exports = router
