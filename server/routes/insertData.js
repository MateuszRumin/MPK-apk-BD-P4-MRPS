const express = require('express')
const router = express.Router()

//wskazanie że używamy

const employeesController = require('../controllers/data/insert/employees')
router.post('/employee',employeesController.add)//wypisz wszystkie


const userController = require('../controllers/data/insert/users')
router.post('/user',userController.add)//wypisz wszystkie

const streetController = require('../controllers/data/insert/streets')
router.post('/street/withstops', streetController.addwithstops)//wypisz wszystkie

const stopController = require('../controllers/data/insert/stops')
router.post('/stop', stopController.add)//wypisz wszystkie

const timesController = require('../controllers/data/insert/times')
router.post('/times', timesController.add)//wypisz wszystkie





module.exports = router
