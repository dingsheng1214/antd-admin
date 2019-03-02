/**
 * @Description: Dashboard 首页 header 柱状图
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
    year: '1948 年',
    sales: 6,
  },
  {
    year: '1949 年',
    sales: 4,
  },
  {
    year: '1950 年',
    sales: 3,
  },
  {
    year: '1951 年',
    sales: 5,
  },
  {
    year: '1952 年',
    sales: 2,
  },
  {
    year: '1956 年',
    sales: 1,
  },
  {
    year: '1957 年',
    sales: 4,
  },
  {
    year: '1958 年',
    sales: 6,
  },
  {
    year: '1959 年',
    sales: 7,
  },
  {
    year: '1960 年',
    sales: 2,
  },
  {
    year: '1961 年',
    sales: 5,
  },

  {
    year: '1962 年',
    sales: 5,
  },

  {
    year: '1963 年',
    sales: 5,
  },

  {
    year: '1964 年',
    sales: 5,
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
const Basiccolumn = () => (
  <div style={{ width: '100%' }}>
    <Chart height={100} data={data} scale={cols} padding="auto" forceFit>
      <Tooltip
        crosshairs={{
          type: 'y',
        }}
      />
      <Geom type="interval" position="year*sales" />
    </Chart>
  </div>
)

export default Basiccolumn
