import * as React from 'react'
import { computed, observable } from 'mobx'
import { observer } from 'mobx-react';

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends React.Component<{ todoList: TodoList }> {
  render() {
    return <div>
      <ul>
        {this.props.todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {this.props.todoList.unfinishedTodoCount}
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

const store = new TodoList();

const App = () => (<TodoListView todoList={store} />)

export default App
