const UserController = require('../controller/UserController')

const Router = require('koa-router')
const router = new Router({
  prefix: '/api/v1'
})

/**
 * 用户接口
 */

// 用户登录
router.post('/user/login', UserController.login)
// 用户注册
router.post('/user/signUp', UserController.create)
module.exports = router
