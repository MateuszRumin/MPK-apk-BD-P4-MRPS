const express = require('express')
const router = express.Router()

//wskazanie że używamy

const employeesController = require('../controllers/data/update/employees')
router.post('/employee',employeesController.update)

const usrEmpController = require('../controllers/data/update/usr_emp')
router.post('/usremp',usrEmpController.update)


const userController = require('../controllers/data/update/user')
router.post('/user',userController.update)

const streetController = require('../controllers/data/update/streets')
router.post('/street', streetController.update)

const stopController = require('../controllers/data/update/stops')
router.post('/stop', stopController.update)

const timesController = require('../controllers/data/update/times')
router.post('/times', timesController.update)

const linesController = require('../controllers/data/update/lines')
router.post('/lines',linesController.update)


module.exports = router
