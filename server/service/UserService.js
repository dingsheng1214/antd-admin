const UserDao = require('../dao/UserDao')
const statusCode = require('../config/status_code')
const bcrypt = require('bcryptjs')

class UserService {
  // 登录
  static async findUserByName (ctx, { username, password }) {
    const user = await UserDao.findUserByName(username)
    if (user) {
      // 判断前端传递的用户密码是否与数据库密码一致
      if (bcrypt.compareSync(password, user.password)) {
        // 保存登录状态
        ctx.session.user = username
        // 设置返回信息
        ctx.body = statusCode.SUCCESS_200('登录成功', {
          id: user.id,
          username: user.username
        })
      } else {
        ctx.body = statusCode.ERROR_412('用户名或密码错误')
      }
    } else {
      ctx.body = statusCode.ERROR_403('用户不存在')
    }
  }
  // 注册
  static async createUser (ctx, data) {
    if (data.username && data.password) {
      const existUser = await UserDao.findUserByName(data.username)
      if (existUser) {
        // 反馈存在用户名
        ctx.body = statusCode.ERROR_403('用户已经存在')
      } else {
        // 加密密码
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(data.password, salt)
        data.password = hash
        // 创建用户
        await UserDao.createUser(data)
        // 保存登录状态
        ctx.session.user = data.username
        // 返回消息
        ctx.body = statusCode.SUCCESS_200('创建用户成功')
      }
    } else {
      // 参数错误
      ctx.body = statusCode.ERROR_412('创建失败，参数错误')
    }
  }
}

module.exports = UserService
