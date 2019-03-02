import PropTypes from 'prop-types'
import React from 'react';
import {
  Card, Col, Icon, Tooltip,
} from 'antd'
import './css/card.scss'

const MyCard = ({
  colSpan = 6, title, total, footTitle, footTotal, children = '内容',
}) => (
  <Col span={colSpan}>
    <Card style={{ padding: '20px 24px 8px' }}>
      <div className="card-index">
        <div className="card-index-top">
          <div className="card-index-metaWrap">
            <div className="card-index-wrap">
              <span>
                {title}
              </span>
              <span className="card-index-infoIcon">
                <Tooltip placement="top" title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              </span>
            </div>
            <div className="card-index-total">
              <span>
                {total}
              </span>
            </div>
          </div>
        </div>
        <div className="card-index-content">
          <div className="card-index-fixed">
            <div className="charts-index-minChart">
              <div className="charts-index-content">
                { children }
              </div>
            </div>
          </div>
        </div>
        <div className="card-index-footer">
          <span>{footTitle}</span>
          <span className="card-index-footer-number">{footTotal}</span>
        </div>
      </div>
    </Card>

  </Col>
)

MyCard.propTypes = {
  colSpan: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  footTitle: PropTypes.string.isRequired,
  footTotal: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default MyCard
