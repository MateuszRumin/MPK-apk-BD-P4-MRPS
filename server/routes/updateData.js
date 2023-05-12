const express = require('express')
const router = express.Router()

//wskazanie że używamy

const employeesController = require('../controllers/data/update/employees')
router.post('/employee',employeesController.update)

const usrEmpController = require('../controllers/data/update/usr_emp')
router.post('/usremp',usrEmpController.update)


const userController = require('../controllers/data/update/user')
router.post('/user',userController.update)






module.exports = router
