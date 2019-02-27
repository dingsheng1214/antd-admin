import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Chart from '../common/chart';

import './home.scss'
import Logo from '../../static/home-log.svg';
import menuList from '../../config/menuList';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { SubMenu } = Menu;

class HomePage extends Component {
  state = {
    collapsed: false,
  };

  // 左侧菜单切换按钮
  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    });
  }

  // 左侧菜单生成函数
  menuGenerator = () => menuList.map((menu) => {
    if (menu.isSub) {
      return (
        <SubMenu
          key={menu.key}
          title={(
            <span>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </span>
            )}
        >
          {
              menu.subs.map(sub => (
                <Menu.Item key={sub.key}>
                  <Link to={sub.path}>
                    {sub.title}
                  </Link>
                </Menu.Item>
              ))
            }
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={menu.key}>
        <Link to={menu.path}>
          <Icon type={menu.icon} />
          <span>{menu.title}</span>
        </Link>
      </Menu.Item>
    )
  })

  render() {
    const { collapsed } = this.state
    const { children } = this.props
    return (
      <Layout className="home-page">
        {/* 侧边栏 */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="home-side"
          width="256"
        >
          <div className="logo">
            <a href="">
              <img src={Logo} alt="logo" />
              {
                !collapsed && (<h1>后台通用模板</h1>)
              }
            </a>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {
              this.menuGenerator()
            }
          </Menu>
        </Sider>
        {/* 主体内容 */}
        <Layout className="home-right">
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Chart />
              { children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Dsying
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HomePage

HomePage.propTypes = {
  children: PropTypes.object.isRequired,
}
