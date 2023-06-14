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

const alsController = require('../controllers/data/delete/als_cons')
router.post('/alsc', alsController.delete)

const aliasController = require('../controllers/data/delete/aliases')
router.post('/alias', aliasController.delete)


const infoController = require('../controllers/data/delete/info')
router.post('/info', infoController.delete)//wypisz wszystkie

module.exports = router

