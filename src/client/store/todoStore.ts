import { action, observable, computed } from 'mobx'

export class TodoStore {

  @observable count = 0;
  @observable todos = [];

  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @computed get finishedTodoCount() {
    return this.todos.filter(todo => todo.finished).length;
  }

  @action
  create(todo) {
    // 找到最大的索引
    const slcTodo: any = this.todos.sort((a, b) => a.id - b.id).pop()
    const index = slcTodo ? slcTodo.id ++ : 1                  
    this.todos.push({ ...todo, id: index, finished: false })
  }

  @action
  delete(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

}

export default new TodoStore()