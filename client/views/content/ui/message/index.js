import React from 'react';
import {
  Row, Col, Card, message, Button, notification, Modal, Alert,
} from 'antd'

const { confirm } = Modal;


const info = () => {
  message.info('This is a normal message');
};
const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

const Message = () => (
  <div>
    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="全局提示">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button type="primary" onClick={info}>Display normal message</Button>
            <Button onClick={success}>Success</Button>
            <Button onClick={error}>Error</Button>
            <Button onClick={warning}>Warning</Button>
          </div>
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="消息提醒框">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
            <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
            <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
            <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
            <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
          </div>
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="对话框">
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button onClick={showConfirm}>
              Confirm
            </Button>
            <Button onClick={showDeleteConfirm} type="dashed">
              Delete
            </Button>
            <Button onClick={showPropsConfirm} type="dashed">
              With extra props
            </Button>
          </div>
        </Card>
      </Col>
    </Row>

    <Row gutter={{ sm: 16 }} style={{ marginTop: '20px' }}>
      <Col span={24}>
        <Card title="警告提示">
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <Alert
              message="Success Text"
              description="Success Description Success Description Success Description"
              type="success"
            />
            <Alert
              message="Info Text"
              description="Info Description Info Description Info Description Info Description"
              type="info"
            />
            <Alert
              message="Warning Text"
              description="Warning Description Warning Description Warning Description Warning Description"
              type="warning"
            />
            <Alert
              message="Error Text"
              description="Error Description Error Description Error Description Error Description"
              type="error"
            />
          </div>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Message
