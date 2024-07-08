import React from "react";
import { Todo } from "../../../types";

interface QuantityItemsProps {
  todos: Todo[];
}

export const QuantityItems: React.FC<QuantityItemsProps> = ({ todos }) => {
  const countUncheckedItems = () => {
    return todos.filter((item) => !item.checked).length;
  };

  return <span>{countUncheckedItems()} items left</span>;
};
