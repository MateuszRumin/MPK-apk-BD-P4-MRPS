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


//streets
const streetController = require('../controllers/data/select/streets')
router.post('/streets/all',streetController.all)//wypisz wszystkie


//stops
const stopsController = require('../controllers/data/select/stops')
router.post('/stops/all',stopsController.all)//wypisz wszystkie


//roles
const rolesController = require('../controllers/data/select/roles')
router.post('/roles/all',rolesController.all)//wypisz wszystkie


//usr_emp
const usrempController = require('../controllers/data/select/usr_emp')
router.post('/usremp/all',usrempController.all)//wypisz wszystkie
router.post('/usremp/empnouser',usrempController.withNoAccounts)




module.exports = router
