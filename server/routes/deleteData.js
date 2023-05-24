const express = require('express')
const router = express.Router()




//wskazanie że używamy
const userController = require('../controllers/data/delete/users')
router.post('/user', userController.delete)


const streetController = require('../controllers/data/delete/streets')
router.post('/street', streetController.delete)

const timesController = require('../controllers/data/delete/times')
router.post('/times', timesController.delete)

const routesController = require('../controllers/data/delete/routes')
router.post('/routes', routesController.delete)



module.exports = router
