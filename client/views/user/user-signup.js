import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Form, Input, Button, message,
} from 'antd';
import axios from 'axios'
import { goToPage } from '../../config/util';
import './user.scss';


class UserSignUp extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  // 登录
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        axios.post('/api/v1/user/signUp', {
          username,
          password,
        }).then((resp) => {
          const { code, msg } = resp.data
          if (code !== 200) {
            message.error(msg);
          } else {
            message.success(msg);
            goToPage(this, '/index')
          }
        }).catch((error) => {
          console.log(error);
        })
      }
    });
  }

  // 跳到登录页面
  goToPageSingUp = (e) => {
    e.preventDefault()
    goToPage(this, '/user/login')
  }

  // 确认密码
  handleConfirmPassword = (rule, value, callback) => {
    const { form } = this.props
    const { getFieldValue } = form
    console.log(value, getFieldValue('password'))
    if (value && value !== getFieldValue('password')) {
      callback('两次输入不一致！')
    }
    // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
    callback()
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
            <span>注册</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }, { whitespace: true, message: '用户名不能为空' }],
              })(
                <Input size="large" placeholder="用户名" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }, { min: 6, message: '至少六位数密码' }],
              })(
                <Input size="large" type="password" placeholder="至少六位密码，区分大小写" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('newPassword', {
                rules: [{ required: true, message: '请确认密码' }, {
                  validator: this.handleConfirmPassword,
                }],
              })(
                <Input size="large" type="password" placeholder="确认密码" />,
              )}
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                注册
              </Button>
              <a className="login-form-signUp" onClick={this.goToPageSingUp}>使用已有账户登录</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedNormalSignUpForm = Form.create({ name: 'normal_login' })(UserSignUp);


export default WrappedNormalSignUpForm

UserSignUp.propTypes = {
  form: PropTypes.object.isRequired,
}
