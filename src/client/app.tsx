import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './component/header'
import Footer from './component/footer'
import './style/base.css'
import './style/style.css'

const App = () => (
  <>
    <Header />
    <section className="routes">
      <Router>
        <Routes />
      </Router>
    </section>
    <Footer />
  </>
)

export default App
