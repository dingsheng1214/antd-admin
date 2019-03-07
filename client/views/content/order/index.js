import PropTypes from 'prop-types'
import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select, Card, Table, Tag, Divider, message, Modal,
} from 'antd';
import axios from 'axios';

import { getOrderList } from './store/actionCreator';
import store from '../../../store'
import './order.scss'
// import { injectUnMount } from '../../../config/util';

const { Option } = Select;

class Order extends React.Component {
  constructor() {
    super()
    const { orderList, total } = store.getState().order.data
    this.state = {
      visible: false, // 对话框
      loading: false, // 对话框提交按钮
      selected: {},
      expand: false, // 搜索框是否展开
      current: 1,
      pageSize: 10,
      orderList,
      total,
    }
    store.subscribe(() => {
      const order = store.getState().order.data
      this.setState({
        orderList: order.orderList,
        total: order.total,
      })
    })
  }

  componentDidMount() {
    this.getOrderList()
  }

  componentWillUnmount() {
    this.setState = () => {

    };
  }

  // 获取订单列表
  getOrderList = () => {
    const { form } = this.props;
    const { current, pageSize } = this.state
    const pagination = {
      page: current,
      pageSize,
    }
    form.validateFields((err, values) => {
      const action = getOrderList(values, pagination)
      store.dispatch(action)
    });
  }

  // 查询
  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      current: 1,
      pageSize: 10,
    })
    this.getOrderList()
  }

  // 重置
  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.getOrderList()
  }

  // 展开按钮
  toggle = () => {
    this.setState(prevState => ({
      expand: !prevState.expand,
    }));
  }

  // 分页事件  页码变化
  onPageChange = (page) => {
    console.log('onPageChange', page);
    this.setState({
      current: page,
    }, () => this.getOrderList())
  }

  // 分页事件 每页条数变化
  onPageSizeChange = (pageSize) => {
    this.setState({
      current: 1,
      pageSize,
    }, () => this.getOrderList())
  }

  // 删除 订单
  handleOrderDelete = (id) => {
    axios.delete(`/api/v1/order/${id}`)
      .then((resp) => {
        const { code, msg } = resp.data
        if (code !== 200) {
          message.error(msg);
        } else {
          message.success('删除成功');
          this.getOrderList()
        }
      }).catch(err => console.log(err))
  }

  // 显示对话框
  showModal = (record) => {
    this.setState({
      visible: true,
      selected: record,
    });
  }

  // 提交对话框
  handleOk = () => {
    this.setState({ loading: true });
    const { selected: order } = this.state
    console.log('更新提交', order);
    axios.put('/api/v1/order', order)
      .then((resp) => {
        const { code, msg } = resp.data
        if (code !== 200) {
          message.error(msg);
        } else {
          message.success('修改成功');
          this.setState({ loading: false, visible: false, selected: {} })
          this.getOrderList()
        }
      }).catch(err => console.log(err))
  }

  // 关闭对话框
  handleCancel = () => {
    this.setState({ visible: false, selected: {} });
  }

  // 更新表单 input框变化
  handleUpdateInputChange = (e, key) => {
    const { value } = e.target
    this.setState(prevState => ({
      selected: Object.assign({}, prevState.selected, {
        [key]: value,
      }),
    }))
  }

  // 更新表单 select变化
  handleUpdateSelectChange = (value, key) => {
    console.log(value);
    this.setState(prevState => ({
      selected: Object.assign({}, prevState.selected, {
        [key]: value,
      }),
    }))
  }

  render() {
    const {
      expand, orderList, total, current, pageSize, visible, loading, selected,
    } = this.state
    const { form } = this.props
    const { getFieldDecorator } = form;
    /**
     * 订单管理页面 表格
     * @type {*[]}
     */
    const orderColumns = [
      {
        title: '订单编号',
        align: 'center',
        dataIndex: 'order_num',
        key: 'order_num',
      }, {
        title: '商品编号',
        align: 'center',
        dataIndex: 'product_num',
        key: 'product_num',
      }, {
        title: '订单名称',
        align: 'center',
        dataIndex: 'order_name',
        key: 'order_name',
      }, {
        title: '支付方式',
        align: 'center',
        key: 'pay_type',
        dataIndex: 'pay_type',
        render: payType => (payType === '1' ? '支付宝' : payType === '2' ? '微信' : payType === '3' ? '银行' : '他人代付'),
      }, {
        title: '订单类型',
        align: 'center',
        key: 'order_type',
        dataIndex: 'order_type',
        render: orderType => (orderType === '1' ? '普通订单' : '代付订单'),
      }, {
        title: '订单状态',
        align: 'center',
        key: 'order_status',
        dataIndex: 'order_status',
        render: (orderStatus) => {
          const result = orderStatus === '1'
            ? (<Tag color="volcano" key={orderStatus}>未派送</Tag>)
            : orderStatus === '2'
              ? (<Tag color="green" key={orderStatus}>派送中</Tag>)
              : (<Tag color="geekblue" key={orderStatus}>已派送</Tag>)
          return result
        },
      }, {
        title: '物流方式',
        align: 'center',
        key: 'logistics_type',
        dataIndex: 'logistics_type',
        render: logisticsType => (logisticsType === '1' ? '快递送货' : logisticsType === '2' ? '上门自提' : '同城配送'),
      }, {
        title: '创建时间',
        align: 'center',
        key: 'creat_time',
        dataIndex: 'creat_time',
      },
      {
        title: '操作',
        align: 'center',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;" onClick={() => this.showModal(record)}>
        修改
              {record.name}
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={() => this.handleOrderDelete(record.id)}>删除</a>
          </span>
        ),
      }]

    return (
      <Card>
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="订单编号">
                {getFieldDecorator('order_num')(<Input placeholder="请输入订单编号" />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="商品编号">
                {getFieldDecorator('product_num', {
                })(<Input placeholder="请输入商品编号" />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="订单名称">
                {getFieldDecorator('order_name', {
                })(<Input placeholder="请输入订单名称" />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="订单状态">
                {getFieldDecorator('order_status', {
                })(
                  <Select placeholder="请选择订单状态">
                    <Option value="1">未派送</Option>
                    <Option value="2">派送中</Option>
                    <Option value="3">已派送</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="订单类型">
                {getFieldDecorator('order_type', {
                })(
                  <Select placeholder="请选择订单类型">
                    <Option value="1">普通订单</Option>
                    <Option value="2">代付订单</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="支付方式">
                {getFieldDecorator('pay_type', {
                })(
                  <Select placeholder="请选择支付方式">
                    <Option value="1">支付宝</Option>
                    <Option value="2">微信</Option>
                    <Option value="3">银行</Option>
                    <Option value="4">他人支付</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            {
              expand && (
                <React.Fragment>
                  <Col span={8}>
                    <Form.Item label="物流方式">
                      {getFieldDecorator('logistics_type', {
                      })(
                        <Select placeholder="请选择物流方式">
                          <Option value="1">快递送货</Option>
                          <Option value="2">上门自提</Option>
                          <Option value="3">同城配送</Option>
                        </Select>,
                      )}
                    </Form.Item>
                  </Col>
                </React.Fragment>
              )
            }

          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                高级搜索
                {' '}
                <Icon type={expand ? 'up' : 'down'} />
              </a>
            </Col>
          </Row>
        </Form>
        <Table
          rowKey="id"
          columns={orderColumns}
          dataSource={orderList}
          pagination={{
            showSizeChanger: true,
            showTotal: () => `共${total}条`,
            onShowSizeChange: (c, size) => this.onPageSizeChange(size),
            onChange: page => this.onPageChange(page),
            current,
            pageSize,
            total,
          }}
        />
        <Modal
          visible={visible}
          title="订单修改"
          width="800px"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <Form className="ant-advanced-search-form">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="订单编号">
                  <Input placeholder="请输入订单编号" value={selected.order_num} disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="商品编号">
                  <Input placeholder="请输入商品编号" value={selected.product_num} disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="订单名称">
                  <Input placeholder="请输入订单名称" value={selected.order_name} onChange={e => this.handleUpdateInputChange(e, 'order_name')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="订单状态">
                  <Select placeholder="请选择订单状态" defaultValue={selected.order_status} onChange={value => this.handleUpdateSelectChange(value, 'order_status')}>
                    <Option value="1">未派送</Option>
                    <Option value="2">派送中</Option>
                    <Option value="3">已派送</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="订单类型">
                  <Select placeholder="请选择订单类型" defaultValue={selected.order_type} onChange={value => this.handleUpdateSelectChange(value, 'order_type')}>
                    <Option value="1">普通订单</Option>
                    <Option value="2">代付订单</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="支付方式">
                  <Select placeholder="请选择支付方式" defaultValue={selected.pay_type} onChange={value => this.handleUpdateSelectChange(value, 'pay_type')}>
                    <Option value="1">支付宝</Option>
                    <Option value="2">微信</Option>
                    <Option value="3">银行</Option>
                    <Option value="4">他人支付</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="物流方式">
                  <Select placeholder="请选择物流方式" defaultValue={selected.logistics_type} onChange={value => this.handleUpdateSelectChange(value, 'logistics_type')}>
                    <Option value="1">快递送货</Option>
                    <Option value="2">上门自提</Option>
                    <Option value="3">同城配送</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Card>
    )
  }
}
const WrappedOrder = Form.create({ name: 'order_search' })(Order);

export default WrappedOrder

Order.propTypes = {
  form: PropTypes.object.isRequired,
}
