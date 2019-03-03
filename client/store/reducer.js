import { combineReducers } from 'redux';
import userReducer from '../views/user/store/reducer'

const reducer = combineReducers({
  user: userReducer,
})

export default reducer
