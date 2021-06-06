const { register, login } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/register', register)

router.get('/login', login)


module.exports = router