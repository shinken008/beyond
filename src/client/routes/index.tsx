import * as React from 'react'
import { Route } from 'react-router-dom'
import todoList from './todoList'
import Home from './home'

const Routes = () => <>
  <Route exact path="/" component={Home} />
  <Route exact path="/todo" component={todoList} />
</>

export default Routes
