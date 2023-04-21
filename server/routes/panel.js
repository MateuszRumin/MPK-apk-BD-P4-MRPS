const express = require('express')
const panelController = require('../controllers/panel')

const router = express.Router();

router.post('/register', panelController.register)
router.post('/login',panelController.login)
router.get('/logout',panelController.logout)


module.exports = router;

