import * as React from "react";
import { QueryClient } from "react-query";
import { TodoData, todoStore } from "./todo.store";

export const queryClient = new QueryClient();

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TodoData.Provider value={{ ...todoStore() }}>
        {children}
      </TodoData.Provider>
    </>
  );
}

const AppContext = TodoData;

export const useStore = () => React.useContext(AppContext);
