const { query } = require('../config/db')
const mysql = require('mysql')

class OrderDao {
  // 查询 订单列表
  static async getOrderList (queryObject) {
    let sqlWhere = ''
    for (let key in queryObject) {
      const value = queryObject[key]
      console.log(key, value)
      if (key !== 'page' && key !== 'pageSize' && value && value !== '') {
        sqlWhere += `AND ${key} = ${value} `
      }
    }
    const { page, pageSize } = queryObject
    const limit = `limit ${(page - 1) * pageSize}, ${pageSize}`
    const sql1 = `SELECT * FROM ?? where 1 = 1 ${sqlWhere} ${limit}`
    const sql2 = `SELECT count(1) as total FROM ?? where 1 = 1 ${sqlWhere}`
    const inserts = ['order']

    console.log(mysql.format(sql1, inserts))
    console.log(mysql.format(sql2, inserts))
    const orderList = await query(mysql.format(sql1, inserts))
    const count = await query(mysql.format(sql2, inserts))
    return { orderList, total: count[0].total }
  }

  // 删除
  static async deleteOrderById (id) {
    const sql = 'delete from ?? where id = ?'
    const inserts = ['order', id]
    const order = await query(mysql.format(sql, inserts))
    return order
  }
  // 更新 updateOrderById
  static async updateOrderById (order) {
    const { id, order_name, pay_type, order_type, order_status, logistics_type } = order
    const sql = 'update ?? set order_name = ?,pay_type = ?, order_type = ?, order_status = ?, logistics_type = ?, update_time = NOW() WHERE id = ?'
    const inserts = ['order', order_name, pay_type, order_type, order_status, logistics_type, id]
    console.log('sql', mysql.format(sql, inserts))
    const result = await query(mysql.format(sql, inserts))
    return result
  }
}

module.exports = OrderDao
