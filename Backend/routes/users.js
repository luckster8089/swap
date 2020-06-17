const router = require('express').Router()
const ctrl = require('../controllers')

// PATH = /api/v1/users

// Show Route 
router.get('/:id', ctrl.user.show)
// New User Route
router.post('/', ctrl.user.create)

// Delete User
router.delete('/:id', ctrl.user.destroy)

// Messages Route
router.get('/:id/messages', ctrl.user.message)

module.exports = router