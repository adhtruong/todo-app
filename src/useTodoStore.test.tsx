import { cleanup } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";

import { useTodoStore } from "./useTodoStore";

const initialStoreState = useTodoStore.getState();

describe("useTodoStore", () => {
  beforeEach(() => {
    useTodoStore.setState(initialStoreState, true);
    cleanup();
  });

  it("New todo is added", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("New todo");
    });

    expect(result.current.todos.length).toEqual(1);
    expect(result.current.todos[0].title).toEqual("New todo");
    expect(result.current.todos[0].isCompleted).toEqual(false);
  });

  it("To do is toggled", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("New todo");
    });
    const id = result.current.todos[0].id;
    act(() => result.current.toggleCompletedState(id));

    expect(result.current.todos.length).toEqual(1);
    expect(result.current.todos[0].title).toEqual("New todo");
    expect(result.current.todos[0].isCompleted).toEqual(true);
  });

  it("Singular to do is toggled", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("New todo");
      result.current.addTodo("Other todo");
    });
    act(() => result.current.toggleCompletedState(result.current.todos[0].id));

    expect(result.current.todos.length).toEqual(2);
    expect(result.current.todos[0].isCompleted).toEqual(true);
    expect(result.current.todos[1].isCompleted).toEqual(false);
  });

  it("To do is removed", () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo("New todo");
    });
    const id = result.current.todos[0].id;
    act(() => result.current.removeTodo(id));

    expect(result.current.todos.length).toEqual(0);
  });
});
