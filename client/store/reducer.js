import { combineReducers } from 'redux';
import userReducer from '../views/user/store/reducer'
import orderReducer from '../views/content/order/store/reducer'

const reducer = combineReducers({
  user: userReducer,
  order: orderReducer,
})

export default reducer
