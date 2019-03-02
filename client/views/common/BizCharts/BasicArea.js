/**
 * @Description: Dashboard 首页 header 面积图
 * @author Ding Sheng
 * @date 2019-03-02
*/

import React from 'react';
import {
  Chart,
  Geom,
  Tooltip,
} from 'bizcharts';

const data = [
  {
    year: '1',
    value: 1,
  },
  {
    year: '2',
    value: 2,
  },
  {
    year: '3',
    value: 2,
  },
  {
    year: '4',
    value: 1,
  },
  {
    year: '5',
    value: 2,
  },
  {
    year: '6',
    value: 1,
  },
  {
    year: '7',
    value: 2,
  },
  {
    year: '8',
    value: 1,
  },
  {
    year: '9',
    value: 2,
  },
  {
    year: '10',
    value: 1,
  },
  {
    year: '11',
    value: 2,
  },
  {
    year: '12',
    value: 1,
  },
  {
    year: '13',
    value: 2,
  },
  {
    year: '13',
    value: 1,
  },
  {
    year: '14',
    value: 2,
  },
];
const cols = {
  sales: {
    tickInterval: 14,
  },
  value: {
    max: 10,
  },
};

const BasicArea = () => (
  <div>
    <Chart height={100} data={data} scale={cols} forceFit padding="auto" style={{ width: '100%' }}>
      <Tooltip
        crosshairs={{
          type: 'line',
        }}
      />
      <Geom type="area" position="year*value" shape="smooth" color="#975FE4" />
      <Geom type="line" position="year*value" size={2} shape="smooth" color="#975FE4" />
    </Chart>
  </div>
);

export default BasicArea
