import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom'
import menuList from './menuList';
import UserLogin from '../views/user/user-login';
import UserSignUp from '../views/user/user-signup';
import HomePage from '../views/home/home'


const menuRoutes = () => menuList.map((menu) => {
  if (menu.isSub) {
    return (
      menu.subs.map(sub => (
        <Route
          path={sub.path}
          render={() => (
            <div>
              {sub.title}
              {' '}
            </div>
          )}
        />
      ))
    )
  }
  return (
    <Route path={menu.path} render={() => <div>{menu.title}</div>} />
  )
})

export default () => (
  <Switch>
    <Route path="/user/login" exact component={UserLogin} />
    <Route path="/user/signUp" exact component={UserSignUp} />
    <Route path="/index" exact component={HomePage} />
    {menuRoutes()}
  </Switch>
)
