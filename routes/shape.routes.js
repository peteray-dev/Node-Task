const { authorization } = require('../controller/auth.controller')
const {  shape } = require('../controller/shape.controller')

const router = require('express').Router()


router.post('/shapecal', authorization, shape)

module.exports = router