const express = require('express')
const router = express.Router()

//wskazanie że używamy

//employees
const employeesController = require('../controllers/data/select/employees')
router.post('/employees/all',employeesController.all)//wypisz wszystkie
router.post('/employees/allAndRole',employeesController.allAndRole)


//users
const userController = require('../controllers/data/select/users')
router.post('/users/all',userController.all)//wypisz wszystkie
router.post('/users/check',userController.check)//wypisz wszystkie


//streets
const streetController = require('../controllers/data/select/streets')
router.post('/streets/all',streetController.all)//wypisz wszystkie


//stops
const stopsController = require('../controllers/data/select/stops')
router.post('/stops/all',stopsController.all)//wypisz wszystkie
router.post('/stops/onStreet',stopsController.onStreet)
router.post('/stops/allWitchStreet',stopsController.allWithStreet)
router.post('/stops/notConnected',stopsController.notConnected)
router.post('/stops/notUsed',stopsController.notUsed)

//roles
const rolesController = require('../controllers/data/select/roles')
router.post('/roles/all',rolesController.all)//wypisz wszystkie


//usr_emp
const usrempController = require('../controllers/data/select/usr_emp')
router.post('/usremp/all',usrempController.all)//wypisz wszystkie
router.post('/usremp/empnouser',usrempController.withNoAccounts)

// const timesController = require('../controllers/data/select/times')
// router.post('/times/all',timesController.all)//wypisz wszystkie

const linesController = require('../controllers/data/select/lines')
router.post('/lines/all',linesController.all)//wypisz wszystkie
router.post('/lines/allMain',linesController.allMain)//wypisz wszystkie

const routesController = require('../controllers/data/select/routes')
router.post('/routes/pnpt',routesController.pnpt)//wypisz wszystkie

const routeTimesController = require('../controllers/data/select/routeTimes')
router.post('/routeTimes/forLinesdirTrue',routeTimesController.forLinesdirTrue)//wypisz wszystkie
router.post('/routeTimes/forLinesdirFalse',routeTimesController.forLinesdirFalse)//wypisz wszystkie



const departureController = require('../controllers/data/select/departures')
router.post('/departure/onstop',departureController.onstop)//wypisz wszystkie


const aliasesController = require('../controllers/data/select/aliases')
router.post('/aliases/all',aliasesController.all)//wypisz wszystkie
router.post('/aliases/added',aliasesController.added)//wypisz wszystkie


const infoController = require('../controllers/data/select/info')
router.post('/info', infoController.all)//wypisz wszystkie




module.exports = router
