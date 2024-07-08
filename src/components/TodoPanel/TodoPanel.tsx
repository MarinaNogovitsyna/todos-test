import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import styles from "./TodoPanel.module.css";

interface TodoPanelProps {
  addTodo: (name: string) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <label htmlFor="description" className={styles.label}>
        <IoChevronDownSharp
          color="#d2d4d2"
          size="1.5em"
          className={styles.icon}
        />
        <input
          id="description"
          value={todo}
          onChange={onChange}
          name="description"
          placeholder="What needs to be done?"
          className={styles.input}
        />
      </label>
    </form>
  );
};

export default TodoPanel;