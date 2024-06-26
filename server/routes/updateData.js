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

// const timesController = require('../controllers/data/update/times')
// router.post('/times', timesController.update)

const linesController = require('../controllers/data/update/lines')
router.post('/lines',linesController.update)

const routesController = require('../controllers/data/update/routes')
router.post('/routes/order',routesController.updateOrder)


const aliasesController = require('../controllers/data/update/aliases')
router.post('/aliases',aliasesController.update)


const rtController = require('../controllers/data/update/routeTimes')
router.post('/rt',  rtController.update)

const dptController = require('../controllers/data/update/departures')
router.post('/departures/forpass',  dptController.update)



module.exports = router
