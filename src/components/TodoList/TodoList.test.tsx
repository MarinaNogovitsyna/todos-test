import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders all todos by default", () => {
  const todos = [
    { id: 1, name: "Task 1", checked: false },
    { id: 2, name: "Task 2", checked: true },
  ];

  const { getByText } = render(
    <TodoList todos={todos} checkTodo={() => {}} filter="all" />
  );

  expect(getByText("Task 1")).toBeInTheDocument();
  expect(getByText("Task 2")).toBeInTheDocument();
});

test('renders only active todos when filter is set to "active"', () => {
  const todos = [
    { id: 1, name: "Task 1", checked: false },
    { id: 2, name: "Task 2", checked: true },
  ];

  const { getByText, queryByText } = render(
    <TodoList todos={todos} checkTodo={() => {}} filter="active" />
  );

  expect(getByText("Task 1")).toBeInTheDocument();
  expect(queryByText("Task 2")).toBeNull();
});

test('renders only completed todos when filter is set to "completed"', () => {
  const todos = [
    { id: 1, name: "Task 1", checked: false },
    { id: 2, name: "Task 2", checked: true },
  ];

  const { getByText, queryByText } = render(
    <TodoList todos={todos} checkTodo={() => {}} filter="completed" />
  );

  expect(getByText("Task 2")).toBeInTheDocument();
  expect(queryByText("Task 1")).toBeNull();
});
