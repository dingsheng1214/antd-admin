# 动态路由
## AsyncLoadComponent
```js
const AsyncLoadComponent = (loadComponent) => {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null,
      }
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }
      // 加载模块
      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component });
        })
        .catch((err) => {
          throw err;
        });
    }

    // 是否 加载了 模块
    hasLoadedComponent() {
      const { Component } = this.state
      return Component !== null;
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
  // 注意这里返回的是 组件 而不应该是  class
  return <AsyncComponent />
}
```
## menuList
```js
const menuList = [
  {
    key: '1',
    icon: 'pie-chart',
    title: '工作台',
    path: '/dashboard',
    component: AsyncLoadComponent(() => import('../views/content/dashboard')),
    isSub: false,
  },
]
```
## 原理
利用 import('path') 返回一个promise， 可以通过该 promise得到 要加载的模块

# 强制登录
## AuthorizedRoute
```js
const AuthorizedRoute = ({ render: localRender, ...rest }) => {
  const isLogin = sessionStorage.getItem('username')
  if (!isLogin) {
    localRender = () => <Redirect to="/user/login" />
  }
  return (
    <Route
      {...rest}
      render={localRender}
    />
  )
}
```


# mysql 如何拼接sql
## mysql.format
```js
class OrderDao {
  // 查询 订单列表
  static async getOrderList (queryObject) {
    let sqlWhere = ''
    for (let key in queryObject) {
      const value = queryObject[key]
      console.log(key, value)
      if (value && value !== '') {
        sqlWhere += `AND ${key} = ${value} `
      }
    }
    const sql = `SELECT * FROM ?? where 1 = 1 ${sqlWhere}`
    const inserts = ['order']

    console.log(mysql.format(sql, inserts))
    const result = await query(mysql.format(sql, inserts))
    return result
  }
}
```
