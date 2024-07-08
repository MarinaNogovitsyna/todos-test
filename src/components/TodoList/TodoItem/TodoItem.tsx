import React from "react";
import { Todo } from "../../../types";
import styles from "./TodoItem.module.css";
import { GoCheckCircle } from "react-icons/go";
import { GoCircle } from "react-icons/go";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo }) => {
  return (
    <div className={styles.container} onClick={() => checkTodo(todo.id)}>
      {todo.checked ? (
        <GoCheckCircle size="1.8em" color="#a0d996" />
      ) : (
        <GoCircle size="1.8em" color="#d8dbd7" />
      )}
      <span className={todo.checked ? styles.checked : ""}>{todo.name}</span>
    </div>
  );
};

export default TodoItem;