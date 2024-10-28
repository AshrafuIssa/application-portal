const express = require('express')
const router = express.Router()
const graduateController = require('../controllers/graduate.controller')

router.route('/')
    .get(graduateController.allGraduates)
    .delete(graduateController.deleteAGraduate)

router.route('/graduateData')
    .post(graduateController.graduateData)

module.exports = router 