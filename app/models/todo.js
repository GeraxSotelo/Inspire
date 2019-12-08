export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
      <div class="todo-container pt-1 pb-1">
        <i class="todo-delete-btn fas fa-times" onclick="app.todoController.removeTodo('${this._id}')"></i>
        <input type="checkbox">
        <p class="d-inline-block mb-0">${this.description}</p>
      </div>
    `
  }
}