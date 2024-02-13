// src/store/todos/index.ts
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";
import { TodoState } from "./types";

@Module({ namespaced: true, name: "todos" })
export default class Todos extends VuexModule {
  // State
  public todos: TodoState[] = [];

  // Getters
  get allTodos() {
    return this.todos;
  }

  // Mutations
  @Mutation
  public SET_TODOS(todos: TodoState[]) {
    this.todos = todos;
  }

  // Actions
  @Action
  async fetchTodos() {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      this.context.commit("SET_TODOS", response.data);
    } catch (error) {
      console.error("Fetch todos failed:", error);
    }
  }

  @Action
  async addTodo(todo: any) {
    try {
      await axios.post(`http://localhost:3000/todos/`, todo);

      this.fetchTodos();
    } catch (error) {
      console.error("Error add todo:", error);
    }
  }

  @Action
  async updateTodo(payload: { id: string; text: string }) {
    try {
      await axios.put(`http://localhost:3000/todos/${payload.id}`, {
        text: payload.text,
      });
      console.log(payload);

      this.fetchTodos();
    } catch (error) {
      console.error("Error add todo:", error);
    }
  }

  @Action
  async deleteTodo(todoId: string) {
    try {
      await axios.delete(`http://localhost:3000/todos/${todoId}`);
      this.fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }
}
