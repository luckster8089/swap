const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/giftcards
router.post('/new', ctrl.giftcard.create)
router.get('/', ctrl.giftcard.index)
router.get('/:id', ctrl.giftcard.show)
router.get('/:id', ctrl.giftcard.destroy)


module.exports = router