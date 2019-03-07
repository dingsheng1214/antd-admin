const OrderService = require('../service/OrderService')

class OrderController {
  // 获取订单列表
  static async getOrderList (ctx) {
    const query = ctx.query
    console.log(query)
    await OrderService.getOrderList(ctx, query)
  }

  // 删除订单
  static async deleteOrderById (ctx) {
    console.log('params', ctx.params)
    const id = ctx.params.id
    await OrderService.deleteOrderById(ctx, id)
  }

  // 更新订单
  static async updateOrderById (ctx) {
    const order = ctx.request.body
    console.log('order', order)
    await OrderService.updateOrderById(ctx, order)
  }
}

module.exports = OrderController
