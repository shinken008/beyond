import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import Routes from './routes'
import Header from './component/header'
import Footer from './component/footer'
import todoStore from './store/todoStore'
import './style/base.css'
import './style/style.css'

const stores = { todoStore }

const App = () => (
  <Provider {...stores}>
    <>
      <Header />
      <section className="content">
        <Router>
          <Routes />
        </Router>
      </section>
      <Footer />
    </>
  </Provider>
)

export default App
