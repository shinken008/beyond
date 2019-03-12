import * as React from 'react'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './routes'
import './style/base.css'
import './style/style.css'
const history = createBrowserHistory()

const App = () => (
<Router history={history}>
  <Routes />
</Router>)

export default App
