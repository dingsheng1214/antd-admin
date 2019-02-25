const Koa = require('koa')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const session = require('koa-session')
const router = require('./config/routes')

const app = new Koa()
// logger
app.use(logger())
// koa body
app.use(koaBody())
// session
app.keys = ['this is my secret and fuck you all'] // 我理解为一个加密的钥匙，类似一个token
app.use(session({
  key: 'uid', /** cookie的名称，可以不管 */
  maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true /** (boolean) signed or not (default true) */
}, app))
// router
app.use(router.routes())

app.listen('8888')
