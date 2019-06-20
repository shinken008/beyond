import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'
import todoList from './todoList'
import Home from './home'
import Recent from './recent'
import Login from '../components/Login'

const Routes = () => <>
  <Route exact path="/" component={Home} />
  <Route exact path="/todo" component={todoList} />
  <Route exact path="/recent" component={Recent} />
  <Route exact path="/login" component={Login} />
  <Route component={loadable(() => import('../components/NotFound'))} />
</>

export default Routes
