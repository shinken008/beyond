import * as React from 'react'
import { Route } from 'react-router-dom'
import todoList from './todoList'
import Home from './home'
import Recent from './recent'

const Routes = () => <>
  <Route exact path="/" component={Home} />
  <Route path="/todo" component={todoList} />
  <Route path="/recent" component={Recent} />
</>

export default Routes
