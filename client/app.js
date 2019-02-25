import ReactDOM from 'react-dom';
import React from 'react'
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import App from './views/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const nextApp = require('./views/App.jsx').default //eslint-disable-line
    render(nextApp)
  })
}
