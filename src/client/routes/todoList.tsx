import React from 'react'
import { observer, inject } from 'mobx-react';
import { TodoStore } from '../store/todoStore'

@inject('todoStore')
@observer
class TodoList extends React.Component<{ todoStore: TodoStore }> {

  create = () => {
    this.props.todoStore.create({
      title: Date.now(),
    })
  }

  delete = (id) => () => {
    this.props.todoStore.delete(id)
  }
  
  render() {
    return <div>
      <button onClick={this.create}>新增</button>
      <ul>
        {this.props.todoStore.todos.map(todo =>
          <div key={todo.id}>
            <TodoView todo={todo} />
            <button onClick={this.delete(todo.id)}>删除</button>
          </div>
        )}
      </ul>
      Tasks left: {this.props.todoStore.unfinishedTodoCount}
    </div>
  }
}

const TodoView = observer(({ todo }) =>
  <li>
    <input
      type='checkbox'
      checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    />{todo.title}
  </li>
)

export default TodoList
