import { ITodo } from "@stores/todo.store";
import { http } from "../http.service";
import { ITodoUpdateRequest } from "./dto/update-request.dto";

class TodoService {
  async getTodos(): Promise<Array<ITodo>> {
    const res = await http.get("/api/v1/todos");
    if (!res) {
      throw new Error("Could not fetch todos");
    }
    return res.data;
  }

  async updateTodoState(id: number): Promise<void> {
    const res = await http.patch(`/api/v1/todos/${id}/state`);
    if (!res) {
      throw new Error("Could not update todo");
    }
  }

  async updateTodoText(payload: ITodoUpdateRequest): Promise<void> {
    const res = await http.patch(`/api/v1/todos/${payload.id}/text`, {
      text: payload.text,
    });
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
