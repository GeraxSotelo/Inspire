import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _todoCount(total, completed) {
  let template = ''
  let todoText = 'To Do'
  if (total > 1) {
    todoText += 's'
  }
  if (total > 0) {
    template += `${total} ${todoText}. `
    if (completed > 0) {
      template += `${completed} completed.`
    }
  }
  document.querySelector("#todo-count").innerText = template
}

function _drawTodos() {
  let template = ''
  let totalCount = 0
  let completedCount = 0
  let todo = store.State.todos
  todo.forEach(t => {
    template += t.Template
    totalCount++
    if (t.completed == true) {
      completedCount++
    }
  })
  _todoCount(totalCount, completedCount)
  document.querySelector("#todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  async addTodo(event) {
    event.preventDefault()
    let form = event.target;
    var todo = {
      description: form.todo.value
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
