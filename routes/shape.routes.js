const { authorization } = require('../controller/auth.controller');
const { shape } = require('../controller/shape.controller');

const router = require('express').Router();

router.use(authorization);
router.post('/shapecal', shape);

module.exports = router;
