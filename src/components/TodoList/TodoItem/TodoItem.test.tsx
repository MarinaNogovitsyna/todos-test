import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const mockTodos = [
  { id: 1, name: "Test Todo 1", checked: false },
  { id: 2, name: "Test Todo 2", checked: true },
];

test("calls checkTodo when todo is clicked", () => {
  const mockCheckTodo = jest.fn();
  const { getByText } = render(
    <TodoItem todo={mockTodos[0]} checkTodo={mockCheckTodo} />
  );

  fireEvent.click(getByText("Test Todo 1"));
  expect(mockCheckTodo).toHaveBeenCalledWith(1);
});
