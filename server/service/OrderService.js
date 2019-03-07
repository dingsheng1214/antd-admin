const statusCode = require('../config/status_code')
const OrderDao = require('../dao/OrderDao')

class OrderService {
  static async getOrderList (ctx, query) {
    const orderList = await OrderDao.getOrderList(query)
    console.log('orderlist', orderList)
    ctx.body = statusCode.SUCCESS_200('success', orderList)
  }

  static async deleteOrderById (ctx, id) {
    const order = await OrderDao.deleteOrderById(id)
    console.log('delete order', order)
    ctx.body = statusCode.SUCCESS_200('success', order)
  }

  static async updateOrderById (ctx, order) {
    const result = await OrderDao.updateOrderById(order)
    ctx.body = statusCode.SUCCESS_200('success', result)
  }
}

module.exports = OrderService
