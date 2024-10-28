const express = require('express')
const router = express.Router()
const EapController = require('../controllers/eap.controller')

router.route('/')
    .get(EapController.allEap)

router.route('/eapData')
    .post(EapController.eapData)

module.exports = router 