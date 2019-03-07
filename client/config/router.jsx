import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom'
import menuList from './menuList';
import UserLogin from '../views/user/user-login';
import UserSignUp from '../views/user/user-signup';
import HomePage from '../views/home/home'

// 路由生成方法
const menuRoutes = () => menuList.map((menu) => {
  const username = sessionStorage.getItem('username')
  if (menu.isSub) {
    return (
      menu.subs.map(sub => (
        <Route
          key={sub.path}
          path={sub.path}
          render={() => (username ? <HomePage children={sub.component} /> : <Redirect to="/user/login" />)}
        />
      ))
    )
  }
  return (
    <Route
      key={menu.path}
      path={menu.path}
      render={() => (username ? <HomePage children={menu.component} /> : <Redirect to="/user/login" />)}
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
