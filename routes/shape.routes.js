const { authorization } = require('../controller/auth.controller')
const { square } = require('../controller/shape.controller')

const router = require('express').Router()


router.post('/square', authorization, square)

module.exports = router