import React from 'react';
import { Button } from 'antd';
import './error.scss'

const Page404 = () => (
  <div className="error-403">
    <div className="error-image" />
    <div>
      <h1>404</h1>
      <p className="error-desc">抱歉，你访问的页面不存在</p>
      <Button type="primary">返回首页</Button>
    </div>
  </div>
)

export default Page404
