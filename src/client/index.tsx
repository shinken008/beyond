import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import App from './app'
const root = document.getElementById('root')

const render = (Component) => {
  ReactDOM.render(<Component />, root)
}

render(App)

if (module.hot) {
  console.log('hot >>>>')
  hot(module)(App)
}
