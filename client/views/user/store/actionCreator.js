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
      const { code, msg, data: user } = resp.data
      const { username: name } = user
      console.log(code, msg, name);
      if (code !== 200) {
        message.error(msg);
      } else {
        message.success(msg);
        goToPage(that, '/dashboard')
        dispatch({
          type: 'login_success',
          value: name,
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

export { doLogin }
