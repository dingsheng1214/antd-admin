const UserService = require('../service/UserService')

class UserController {
  // 登录
  static async login (ctx) {
    const data = ctx.request.body
    await UserService.findUserByName(ctx, data)
  }
  // 注册
  static async create (ctx) {
    const data = ctx.request.body
    await UserService.createUser(ctx, data)
  }
}

module.exports = UserController
