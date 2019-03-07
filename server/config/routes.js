const UserController = require('../controller/UserController')
const OrderController = require('../controller/OrderController')

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

/**
 * 订单接口
 */
// 获取订单列表
router.get('/order', OrderController.getOrderList)
// 删除订单(id)
router.del('/order/:id', OrderController.deleteOrderById)
// 更新订单
router.put('/order', OrderController.updateOrderById)
module.exports = router
