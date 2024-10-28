const express = require('express')
const router = express.Router()
const KapController = require('../controllers/kap.controller')

router.route('/')
    .get(KapController.allKap)

router.route('/kapData')
    .post(KapController.kapData)

module.exports = router 