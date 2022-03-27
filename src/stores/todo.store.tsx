import { useMutation, UseMutationResult, useQuery } from "react-query";
import { todoService } from "@services/todo.service";
import * as React from "react";
import { queryClient } from "./initializer.store";

export interface ITodo {
  id: number;
  text: string;
  state: boolean;
}

type TodoData = {
  todos?: Array<ITodo>;
  addTodo: UseMutationResult<void, Error, string>;
  updateTodo: UseMutationResult<void, unknown, number>;
  deleteTodo: UseMutationResult<void, unknown, number>;
};

export const TodoData = React.createContext<TodoData>(undefined!);

export function todoStore() {
  const { data: todos } = useQuery<Array<ITodo>, Error>(
    ["todos"],
    todoService.getTodos
  );

  const updateTodo = useMutation<void, Error, number>(
    (id: number) => todoService.updateTodo(id!),
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

  return { todos, updateTodo, addTodo, deleteTodo };
}
