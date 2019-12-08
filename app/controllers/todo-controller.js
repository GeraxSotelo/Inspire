import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() { }

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  async addTodo() {
    event.preventDefault()
    let form = event.target;
    console.log(form.todo.value);
    //TODO build the todo object from the data that comes into this method
    var todo = {
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
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
