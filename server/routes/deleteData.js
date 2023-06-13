const express = require('express')
const router = express.Router()




//wskazanie że używamy
const userController = require('../controllers/data/delete/users')
router.post('/user', userController.delete)


const streetController = require('../controllers/data/delete/streets')
router.post('/street', streetController.delete)


const routesController = require('../controllers/data/delete/routes')
router.post('/routes', routesController.delete)

const linesController = require('../controllers/data/delete/lines')
router.post('/line', linesController.delete)

const aliasesController = require('../controllers/data/delete/aliases')
router.post('/aliases', aliasesController.delete)

const empController = require('../controllers/data/delete/employee')
router.post('/empl', empController.delete)


const stopController = require('../controllers/data/delete/stops')
router.post('/stop', stopController.delete)




module.exports = router
