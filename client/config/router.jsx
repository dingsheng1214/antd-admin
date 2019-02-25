import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom'
import UserLogin from '../views/user/user-login';

export default () => (
  <Switch>
    <Route path="/user/login" exact component={UserLogin} />
  </Switch>
)
