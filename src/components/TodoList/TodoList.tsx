import React from "react";
import { Filter, Todo } from "../../types";
import { TodoItem } from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo["id"]) => void;
  filter: Filter;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkTodo,
  filter,
}) => {
  const todosWithFilter = () => {
    if (filter === "active") {
      return todos.filter((el) => el.checked === false);
    }
    if (filter === "completed") {
      return todos.filter((el) => el.checked === true);
    }
    return todos;
  };

  return (
    <>
      {todosWithFilter().map((el) => (
        <TodoItem todo={el} checkTodo={checkTodo} key={el.id} />
      ))}
    </>
  );
};

export default TodoList;