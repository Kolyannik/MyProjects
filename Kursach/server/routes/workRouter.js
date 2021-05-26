const Router = require('express')
const router = new Router()
const workController = require('../controllers/workController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), workController.create)
router.get('/', workController.getAll)
router.get('/:id', workController.getOne)
router.delete('/:id', workController.delete)
module.exports = router