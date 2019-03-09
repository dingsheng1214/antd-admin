const fs = require('fs')
const path = require('path')

const UserController = require('../controller/UserController')
const OrderController = require('../controller/OrderController')

const Router = require('koa-router')
const router = new Router()

/**
 * 用户接口
 */

// 用户登录
router.post('/api/v1/user/login', UserController.login)
// 用户注册
router.post('/api/v1/user/signUp', UserController.create)

/**
 * 订单接口
 */
// 获取订单列表
router.get('/api/v1/order', OrderController.getOrderList)
// 删除订单(id)
router.del('/api/v1/order/:id', OrderController.deleteOrderById)
// 更新订单
router.put('/api/v1/order', OrderController.updateOrderById)

// 跳转到 index.html
router.get('*', (ctx) => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream(path.resolve(__dirname, '../../dist/index.html'))
})

module.exports = router
