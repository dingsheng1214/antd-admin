import React from 'react';
import {
  Route, Switch, Redirect,
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
          key={sub.oath}
          path={sub.path}
          render={() => (
            <HomePage>
              <div>
                {sub.title}
              </div>
            </HomePage>
          )}
        />
      ))
    )
  }
  return (
    <Route
      key={menu.path}
      path={menu.path}
      render={() => (
        <HomePage>
          <div>
            {menu.title}
          </div>
        </HomePage>
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
