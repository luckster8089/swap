const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/message

// List Index Route
router.get('/', ctrl.message.index)

// Create Route
router.post('/new', ctrl.message.create)


module.exports = router