import React from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom'
import menuList from './menuList';
import UserLogin from '../views/user/user-login';
import UserSignUp from '../views/user/user-signup';
import HomePage from '../views/home/home'
import { AuthorizedRoute } from './util';

const PrivateRoute = withRouter(AuthorizedRoute)
// 路由生成方法
const menuRoutes = () => menuList.map((menu) => {
  if (menu.isSub) {
    return (
      menu.subs.map(sub => (
        <PrivateRoute
          key={sub.path}
          path={sub.path}
          render={() => (
            <HomePage>
              <div>
                {sub.component}
              </div>
            </HomePage>
          )}
        />
      ))
    )
  }
  return (
    <PrivateRoute
      key={menu.path}
      path={menu.path}
      render={() => (
        <HomePage children={menu.component} />
      )}
    />
  )
})

export default () => (
  <Switch>
    <Route path="/" exact render={() => (<Redirect to="/user/login" />)} />
    <Route path="/user/login" exact component={UserLogin} key="login" />
    <Route path="/user/signUp" exact component={UserSignUp} key="signUp" />
    {menuRoutes()}
  </Switch>
)
