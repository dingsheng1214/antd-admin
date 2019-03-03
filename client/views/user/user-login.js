import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { doLogin } from './store/actionCreator';
import { goToPage } from '../../config/util';
import store from '../../store'
import './user.scss';

class UserLogin extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  // 登录
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        // 派发action
        const action = doLogin(this, values)
        store.dispatch(action)
      }
    });
  }

  // 跳到注册页面
  goToPageSingUp = (e) => {
    e.preventDefault()
    goToPage(this, '/user/signUp')
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form;
    return (
      <div className="user-login">
        <div className="user-login-desc">
          <p>Ant Design</p>
          <p>通用后台管理系统</p>
        </div>
        <div className="user-login-content">
          <div className="user-login-header">
            <span>登录</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }, { whitespace: true, message: '用户名不能为空' }],
              })(
                <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输出密码' }],
              })(
                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>自动登录</Checkbox>,
              )}
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <a className="login-form-signUp" onClick={this.goToPageSingUp}>注册账户</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(UserLogin);


export default WrappedNormalLoginForm

UserLogin.propTypes = {
  form: PropTypes.object.isRequired,
}
