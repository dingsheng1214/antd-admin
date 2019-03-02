import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import {
  Layout, Menu, Icon, Avatar, Dropdown,
} from 'antd';
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
    // 点击用户头像 下拉选项
    const dropDownMenu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/user/info">
            个人中心
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/user/login">
            退出
          </Link>
        </Menu.Item>
      </Menu>
    )
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
          <Header className="home-right-header">
            <Icon
              className="home-right-trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown overlay={dropDownMenu}>
              <Avatar className="home-right-avatar" size="middle">
                丁胜
              </Avatar>
            </Dropdown>

          </Header>
          <Content style={{ margin: '24px' }}>
            <div>
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
