import * as React from 'react'
import { Route } from 'react-router-dom'
import todoList from './todoList'

const Routes = () => <>
  <Route exact path="/" component={todoList} />
</>

export default Routes
