import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend,
  Guide,
} from 'bizcharts';
import DataSet from '@antv/data-set';

const { DataView } = DataSet;
const { Html } = Guide;
const data = [
  {
    item: '其它',
    count: 21,
  },
  {
    item: '食用酒水',
    count: 17,
  },
  {
    item: '个户健康',
    count: 13,
  },
  {
    item: '服饰箱包',
    count: 9,
  },
  {
    item: '家用电器',
    count: 40,
  },
];
const dv = new DataView();
dv.source(data).transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
});
const cols = {
  percent: {
    formatter: val => `${val * 100}%`,
  },
};
const BasicPie = () => (
  <div>
    <Chart
      height={350}
      data={dv}
      scale={cols}
      padding="auto"
      forceFit
    >
      <Coord type="theta" radius={0.8} innerRadius={0.8} />
      <Axis name="percent" />
      <Legend
        position="right"
        offsetY={-270 / 2 + 120}
        offsetX={-100}
      />
      <Tooltip
        showTitle={false}
        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
      />
      <Guide>
        <Html
          position={['50%', '50%']}
          html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>销售额<br><span style=&quot;color:#262626;font-size:1.5em&quot;>¥ 15,781</span></div>"
          alignX="middle"
          alignY="middle"
        />
      </Guide>
      <Geom
        type="intervalStack"
        position="percent"
        color="item"
        tooltip={[
          'item*percent',
          (item, percent) => ({
            name: item,
            value: `${percent * 100}%`,
          }),
        ]}
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
      />
    </Chart>
  </div>
)
export default BasicPie
