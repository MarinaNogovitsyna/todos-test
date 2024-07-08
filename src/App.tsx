import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Filter, Todo } from "./types";
import { TodoPanel } from "./components/TodoPanel/TodoPanel";
import { TodoList } from "./components/TodoList/TodoList";
import { BottomPanel } from "./components/BottomPanel/BottomPanel";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "Тестовое задание", checked: false },
  { id: 2, name: "Прекрасный код", checked: true },
  {
    id: 3,
    name: "Покрытие тестами",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : DEFAULT_TODO_LIST;
  });
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const changeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo: Todo) => todo.checked !== true));
  };

  const addTodo = (name: string) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, name, checked: false },
    ]);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <div className={styles.app_container}>
      <Header />
      <div className={styles.container}>
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} filter={filter} />
        <BottomPanel
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
          todos={todos}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;
