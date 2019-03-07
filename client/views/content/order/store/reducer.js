const initState = {
  data: {},
}
const reducer = (state = initState, action) => {
  const { type, value } = action
  switch (type) {
    case 'get_order_list': {
      return Object.assign({}, state, {
        data: value,
      })
    }
    default:
      return state
  }
}

export default reducer
