import { v4 as uuidv4 } from "uuid";
import create from "zustand";

import { Todo } from "./types";

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}

const newTodo = (title: string): Todo => ({
  title,
  id: uuidv4(),
  isCompleted: false,
});

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (title: string) =>
    set((state) => ({
      todos: [...state.todos, newTodo(title)],
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  toggleCompletedState: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      }),
    })),
}));
