const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/giftcards/like


// Create Route
router.post('/new', ctrl.likedgiftcard.create)


module.exports = router