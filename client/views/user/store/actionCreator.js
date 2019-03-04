import axios from 'axios'
import { message } from 'antd';
import { goToPage } from '../../../config/util';

const doLogin = (that, data) => {
  const { username, password } = data
  return (dispatch) => {
    axios.post('/api/v1/user/login', {
      username,
      password,
    }).then((resp) => {
      console.log(resp);
      const { code, msg, data: user } = resp.data
      if (code !== 200) {
        message.error(msg);
      } else {
        message.success(msg);
        const { username: name } = user
        dispatch({
          type: 'login_success',
          value: name,
        })
        goToPage(that, '/dashboard')
      }
    }).catch((error) => {
      console.log('error', error);
    })
  }
}

export { doLogin }
