import React from 'react';
import { Button } from 'antd';
import './error.scss'

const Page500 = () => (
  <div className="error-403">
    <div className="error-image" />
    <div>
      <h1>500</h1>
      <p className="error-desc">抱歉，服务器出错了</p>
      <Button type="primary">返回首页</Button>
    </div>
  </div>
)

export default Page500
