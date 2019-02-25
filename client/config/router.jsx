import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom'
import UserLogin from '../views/user/user-login';
import UserSignUp from '../views/user/user-signup';

export default () => (
  <Switch>
    <Route path="/user/login" exact component={UserLogin} />
    <Route path="/user/signUp" exact component={UserSignUp} />
    <Route path="/index" exact render={() => <div>首页</div>} />
  </Switch>
)
