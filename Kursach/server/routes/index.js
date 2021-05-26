const Router = require('express')
const router = new Router()
const collectionRouter = require('./collectionRouter')
const userRouter = require('./userRouter')
const workRouter = require('./workRouter')
const backupRouter = require('./backupRouter')

router.use('/user', userRouter)
router.use('/work', workRouter)
router.use('/collection', collectionRouter)
router.use('/backup', backupRouter)

module.exports = router