var express = require('express')
var router = express.Router()

const userController = require('../controllers/user.js')

router.get('/users', userController.list)
router.get('/users/:id', userController.getById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.destroyUser)

module.exports = router