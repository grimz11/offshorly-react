import { ITodo } from "@stores/todo.store";
import { http } from "../http.service";

class TodoService {
  async getTodos(): Promise<Array<ITodo>> {
    const res = await http.get("/api/v1/todos");
    if (!res) {
      throw new Error("Could not fetch todos");
    }
    return res.data;
  }

  async updateTodo(id: number): Promise<void> {
    const res = await http.patch(`/api/v1/todos/${id}`);
    if (!res) {
      throw new Error("Could not update todo");
    }
  }

  async addTodo(text: string): Promise<void> {
    const res = await http.post("/api/v1/todos", { text });
    if (!res) {
      throw new Error("Could not create todo");
    }
  }

  async deleteTodo(id: number): Promise<void> {
    const res = await http.delete(`/api/v1/todos/${id}`);
    if (!res) {
      throw new Error("Could not delete todo");
    }
  }
}

export const todoService = new TodoService();
