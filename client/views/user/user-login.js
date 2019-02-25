import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './user.scss';

class UserLogin extends Component {
  // 登录
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form;
    return (
      <div className="user-login">
        <div className="user-login-content">
          <div className="user-login-header">
            <span>Ant Design 后台通用模板</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输出用户名!' }],
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
              <a className="login-form-signUp">注册账户</a>
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
