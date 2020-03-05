import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/geraxsotelo/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    let res = await todoApi.get();
    let results = res.data.data.map(t => new Todo(t))
    store.commit("todos", results)
  }

  async addTodoAsync(todo) {
    if (todo.description != "") {
      let res = await todoApi.post("", todo);
      this.getTodos()
    }
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed = !todo.completed
    await todoApi.put(todoId, todo);
    this.getTodos()
  }

  async removeTodoAsync(todoId) {
    let todo = store.State.todos.find(t => t._id == todoId)
    let res = await todoApi.delete(todo._id)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;
