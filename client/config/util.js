/**
 * @Description: 全局公共函数
 * @author Ding Sheng
 * @date 2019-02-26
*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';


/**
 * react router 切换路由
 * @param that
 * @param pathname
 */
const goToPage = (that, pathname) => {
  const { router } = that.context
  router.history.push({
    pathname,
  })
}

/**
 * 动态路由
 * @param loadComponent
 * @constructor
 */
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

/**
 * 强制登录
 * @param localRender
 * @param rest
 * @returns {*}
 * @constructor
 */
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
AuthorizedRoute.propTypes = {
  render: PropTypes.func.isRequired,
}


const injectUnMount = (target, ...rest) => {
  // 改装componentWillUnmount，销毁的时候记录一下
  const next = target.prototype.componentWillUnmount
  target.prototype.componentWillUnmount = function () {
    if (next) next.call(this, ...rest);
    this.unmount = true
  }
  // 对setState的改装，setState查看目前是否已经销毁
  const { setState } = target.prototype
  target.prototype.setState = function () {
    if (this.unmount) return;
    setState.call(this, ...rest)
  }
}

export {
  goToPage, AsyncLoadComponent, AuthorizedRoute, injectUnMount,
}
