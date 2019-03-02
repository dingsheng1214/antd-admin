import PropTypes from 'prop-types'
import React from 'react';
import { Row, Col, List } from 'antd';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';
import '../css/basicColumn.scss'

const data = [
  {
    month: '1月',
    sales: 38,
  },
  {
    month: '2月',
    sales: 52,
  },
  {
    month: '3月',
    sales: 61,
  },
  {
    month: '4月',
    sales: 145,
  },
  {
    month: '5月',
    sales: 48,
  },
  {
    month: '6月',
    sales: 38,
  },
  {
    month: '7月',
    sales: 128,
  },
  {
    month: '8月',
    sales: 138,
  },
  {
    month: '9月',
    sales: 68,
  },
  {
    month: '10月',
    sales: 98,
  },
  {
    month: '11月',
    sales: 78,
  },
  {
    month: '12月',
    sales: 58,
  },
];
const data2 = [
  {
    title: '苏宁小店 1号店',
    total: '323,234',
  },
  {
    title: '苏宁小店 2号店',
    total: '323,234',
  },
  {
    title: '苏宁小店 3号店',
    total: '323,234',
  },
  {
    title: '苏宁小店 4号店',
    total: '323,234',
  },
  {
    title: '苏宁小店 5号店',
    total: '323,234',
  },
]
const cols = {
  sales: {
    tickInterval: 12,
  },
  value: {
    max: 1000,
  },
};
const BasicColumn = () => (
  <div>
    <Chart height={270} data={data} scale={cols} forceFit padding="auto">
      <Axis name="month" />
      <Axis name="sales" />
      <Tooltip
        crosshairs={{
          type: 'y',
        }}
      />
      <Geom type="interval" position="month*sales" />
    </Chart>
  </div>
)


const BasicColumn2 = ({ type = '销售额' }) => (
  <div>
    <Row style={{ height: '292px' }}>
      <Col span={18} style={{ padding: '0 20px 20px 0' }}>
        {
          type === '销售额'
            ? <h4>销售趋势</h4>
            : <h4>访问量趋势</h4>
        }
        <BasicColumn />
      </Col>
      <Col span={6} style={{ padding: '0 50px' }}>
        <h4>门店访问量排名</h4>
        <List
          itemLayout="horizontal"
          dataSource={data2}
          renderItem={(item, index) => (
            <List.Item key={item.title}>
              {
                index < 3
                  ? <div className="column-rank column-rank-top3">{index + 1}</div>
                  : <div className="column-rank">{index + 1}</div>
              }
              <List.Item.Meta
                title={item.title}
              />
              <div>{item.total}</div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  </div>
)

export default BasicColumn2

BasicColumn2.propTypes = {
  type: PropTypes.string.isRequired,
}
