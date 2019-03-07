import axios from 'axios'
import { message } from 'antd';

const getOrderList = (condition, pagination) => (dispatch) => {
  axios.get('/api/v1/order', {
    params: { ...condition, ...pagination },
  }).then((resp) => {
    console.log(resp);
    const { code, msg, data } = resp.data
    console.log(data);
    if (code !== 200) {
      message.error(msg);
    } else {
      dispatch({
        type: 'get_order_list',
        value: data,
      })
    }
  }).catch((error) => {
    console.log('error', error);
  })
}

export { getOrderList }
