const express = require('express')
const panelController = require('../controllers/panel')

const router = express.Router();

router.post('/register', panelController.register)


module.exports = router;

