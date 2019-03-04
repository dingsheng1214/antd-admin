const initState = {
  username: sessionStorage.getItem('username'),
  isLogin: sessionStorage.getItem('isLogin'),
}
const reducer = (state = initState, action) => {
  const { type, value = '' } = action
  switch (type) {
    case 'login_success': {
      sessionStorage.setItem('username', value)
      sessionStorage.setItem('isLogin', true)
      return Object.assign({}, state, {
        username: value,
        isLogin: true,
      })
    }
    case 'login_out': {
      sessionStorage.setItem('username', value)
      sessionStorage.setItem('isLogin', false)
      return Object.assign({}, state, {
        username: '',
        isLogin: false,
      })
    }
    default:
      return state
  }
}

export default reducer
