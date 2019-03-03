import React from 'react';
import {
  Row, Col, Card, Spin, Alert, Icon,
} from 'antd'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


const Loading = () => (
  <div>
    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="Loading大小">
          <Spin size="small" style={{ marginRight: '20px' }} />
          <Spin style={{ marginRight: '20px' }} />
          <Spin size="large" style={{ marginRight: '20px' }} />
          <Spin indicator={antIcon} />
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="自定义描述文案">
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <br />
          <Spin tip="加载中..." size="large">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <br />
          <Spin tip="Loading..." indicator={antIcon}>
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Loading
