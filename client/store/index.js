import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

// redux-thunk 和 redux-devtools结合使用方式
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // redux-thunk 可以让我们 定义一个 函数action
  applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer)

export default store
