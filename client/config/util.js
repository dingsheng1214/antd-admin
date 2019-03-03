/**
 * @Description: 全局公共函数
 * @author Ding Sheng
 * @date 2019-02-26
*/

/**
 * react router 切换路由
 * @param that
 * @param pathname
 */
import React from 'react';

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


export { goToPage, AsyncLoadComponent }
