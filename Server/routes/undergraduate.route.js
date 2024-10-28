const express = require('express')
const router = express.Router()
const UndergraduateController = require('../controllers/undergraduate.controller')

router.route('/')
    .get(UndergraduateController.allUndergraduate)

router.route('/undergraduateData')
    .post(UndergraduateController.undergraduateData)

module.exports = router 