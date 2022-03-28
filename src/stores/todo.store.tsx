import { useMutation, UseMutationResult, useQuery } from "react-query";
import { todoService } from "@services/todo.service";
import * as React from "react";
import { queryClient } from "./initializer.store";
import { ITodoUpdateRequest } from "@services/dto/update-request.dto";

export interface ITodo {
  id: number;
  text: string;
  state: boolean;
}

type TodoData = {
  isLoading: boolean;
  todos: Array<ITodo>;
  addTodo: UseMutationResult<void, Error, string>;
  updateTodoState: UseMutationResult<void, unknown, number>;
  deleteTodo: UseMutationResult<void, unknown, number>;
  updateTodoText: UseMutationResult<void, unknown, ITodoUpdateRequest>;
};

export const TodoData = React.createContext<TodoData>(undefined!);

export function todoStore() {
  const { data: todos, isLoading } = useQuery<Array<ITodo>, Error>(
    ["todos"],
    todoService.getTodos,
    { staleTime: 2000 }
  );

  const updateTodoState = useMutation<void, Error, number>(
    (id: number) => todoService.updateTodoState(id!),
    {
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );

  const updateTodoText = useMutation<void, Error, ITodoUpdateRequest>(
    (payload: ITodoUpdateRequest) => todoService.updateTodoText(payload),
    {
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );

  const addTodo = useMutation<void, Error, string>(
    (text: string) => todoService.addTodo(text!),
    {
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );

  const deleteTodo = useMutation<void, Error, number>(
    (id: number) => todoService.deleteTodo(id!),
    {
      onSettled: () => queryClient.invalidateQueries("todos"),
    }
  );

  return {
    todos,
    updateTodoState,
    addTodo,
    deleteTodo,
    updateTodoText,
    isLoading,
  };
}
