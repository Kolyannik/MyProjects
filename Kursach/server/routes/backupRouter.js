const Router = require('express')
const router = new Router()
const backupController = require('../controllers/backupController')

router.get('/backup', backupController.backup)

module.exports = router