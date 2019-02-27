import React from 'react';
import {
  AreaChart, Area, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 400, pv: 240, amt: 240,
  },
  {
    name: 'Page B', uv: 300, pv: 139, amt: 221,
  },
  {
    name: 'Page C', uv: 200, pv: 980, amt: 229,
  },
  {
    name: 'Page D', uv: 278, pv: 390, amt: 200,
  },
  {
    name: 'Page E', uv: 189, pv: 480, amt: 218,
  },
  {
    name: 'Page F', uv: 239, pv: 380, amt: 250,
  },
  {
    name: 'Page G', uv: 349, pv: 430, amt: 210,
  },
];

const SimpleAreaChart = () => (
  <div>
    <AreaChart
      width={344}
      height={50}
      data={data}
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <Tooltip />
      <Area type="monotone" dataKey="uv" fill="purple" />
    </AreaChart>
  </div>
)
export default SimpleAreaChart
