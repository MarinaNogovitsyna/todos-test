import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoPanel from "./TodoPanel";

test("typing in input updates the input value", () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText } = render(<TodoPanel addTodo={addTodo} />);

  const input = getByPlaceholderText(
    "What needs to be done?"
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: "New Task" } });

  expect(input.value).toBe("New Task");
});

test("submitting the form calls addTodo function with correct value and clears input", () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, container } = render(
    <TodoPanel addTodo={addTodo} />
  );

  const input = getByPlaceholderText(
    "What needs to be done?"
  ) as HTMLInputElement;
  const form = container.querySelector("form");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.submit(form!);

  expect(addTodo).toHaveBeenCalledWith("New Task");
  expect(input.value).toBe("");
});
