import React from 'react';
import {
  Row, Tabs, Col, Card,
} from 'antd'
import MyCard from '../../common/Card'
import {
  BasicColumn, BasicColumn2, BasicColumn3, BasicArea, BasicPie,
} from '../../common/BizCharts';

const { TabPane } = Tabs;

class Dashoard extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Row gutter={{ sm: 16 }}>
          <MyCard colSpan={6} title="总销售额" total="¥ 126,560" footTitle="日销售额" footTotal="¥ 124,23">
            <BasicColumn />
          </MyCard>
          <MyCard colSpan={6} title="访问量" total="8,846" footTitle="日访问量" footTotal="¥ 1,234">
            <BasicArea />
          </MyCard>
          <MyCard colSpan={6} title="支付笔数" total="6,560" footTitle="转化率" footTotal="60%">
            <BasicColumn />
          </MyCard>
          <MyCard colSpan={6} title="运营活动效果" total="78%" footTitle="日同比" footTotal="11%">
            <BasicArea />
          </MyCard>
        </Row>
        <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="销售额" key="1">
                  <BasicColumn2 type="销售额" />
                </TabPane>
                <TabPane tab="访问量" key="2">
                  <BasicColumn2 type="访问量" />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={{ sm: 16 }} style={{ marginTop: '20px', height: '800px' }}>
          <Col span={12}>
            <Card title="销售额类别占比">
              <div style={{ padding: '24px' }}>
                <h4>销售额</h4>
                <BasicPie />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="新增订单趋势">
              <div style={{ padding: '24px' }}>
                <h4>新增订单</h4>
                <BasicColumn3 />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashoard
