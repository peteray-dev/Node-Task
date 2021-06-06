const { square } = require('../controller/shape.controller')

const router = require('express').Router()


router.post('/square', square)

module.exports = router