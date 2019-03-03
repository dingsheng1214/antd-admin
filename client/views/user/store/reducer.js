const initState = {
  username: '',
  isLogin: false,
}
const reducer = (state = initState, action) => {
  const { type, value = '' } = action
  switch (type) {
    case 'login_success': {
      console.log('login_success', value)
      return Object.assign({}, state, {
        username: value,
        isLogin: true,
      })
    }
    case 'login_out': {
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
