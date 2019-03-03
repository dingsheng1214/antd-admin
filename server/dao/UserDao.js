const { query } = require('../config/db')

class UserDao {
  // 登录
  static async findUserByName (username) {
    const sql = 'select * from user where username = ?'
    const result = await query(sql, [username])
    return result[0]
  }
  // 注册
  static async createUser ({ username, password, email }) {
    const sql = 'insert into user (username, password, email) values (?, ?, ?)'
    const result = await query(sql, [username, password, email])
    return result[0]
  }
}

module.exports = UserDao
