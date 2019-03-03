import React from 'react';
import {
  Row, Col, Card, Button, Icon,
} from 'antd'

const ButtonGroup = Button.Group;

const Btn = () => (
  <div>
    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="基础按钮">
          <Button type="primary" style={{ marginRight: '20px' }}>Primary</Button>
          <Button style={{ marginRight: '20px' }}>Default</Button>
          <Button type="dashed" style={{ marginRight: '20px' }}>Dashed</Button>
          <Button type="danger" style={{ marginRight: '20px' }}>Danger</Button>
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="图标按钮">
          <Button type="primary" shape="circle" icon="search" style={{ marginRight: '20px' }} />
          <Button type="primary" icon="search" style={{ marginRight: '20px' }}>Search</Button>
          <Button shape="circle" icon="search" style={{ marginRight: '20px' }} />
          <Button icon="search" style={{ marginRight: '20px' }}>Search</Button>
          <Button shape="circle" icon="search" style={{ marginRight: '20px' }} />
          <Button icon="search" style={{ marginRight: '20px' }}>Search</Button>
          <Button type="dashed" shape="circle" icon="search" style={{ marginRight: '20px' }} />
          <Button type="dashed" icon="search" style={{ marginRight: '20px' }}>Search</Button>
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="Loading按钮">
          <Button type="primary" style={{ marginRight: '20px' }} loading>
            Loading
          </Button>
          <Button type="primary" style={{ marginRight: '20px' }} size="small" loading>
            Loading
          </Button>
          <Button shape="circle" style={{ marginRight: '20px' }} loading />
          <Button type="primary" style={{ marginRight: '20px' }} shape="circle" loading />
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="组合按钮">
          <ButtonGroup>
            <Button type="primary" style={{ marginRight: '20px' }}>
              <Icon type="left" />
                Go back
            </Button>
            <Button type="primary" style={{ marginRight: '20px' }}>
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon="cloud" style={{ marginRight: '20px' }} />
            <Button type="primary" icon="cloud-download" style={{ marginRight: '20px' }} />
          </ButtonGroup>
        </Card>
      </Col>
    </Row>

  </div>
)

export default Btn
