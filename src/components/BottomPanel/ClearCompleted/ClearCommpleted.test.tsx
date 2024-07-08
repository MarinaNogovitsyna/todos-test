import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ClearCompleted from "./ClearCompleted";

test("should call clearCompleted function when clicked", () => {
  const mockClearCompleted = jest.fn();
  const { getByText } = render(
    <ClearCompleted clearCompleted={mockClearCompleted} />
  );

  const clearCompletedButton = getByText("Clear completed");
  fireEvent.click(clearCompletedButton);

  expect(mockClearCompleted).toHaveBeenCalledTimes(1);
});
