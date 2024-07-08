import React from "react";
import { Filter, Todo } from "../../types";
import { QuantityItems } from "./QuantityItems/QuantityItems";
import styles from "./BottomPanel.module.css";
import { FilterItems } from "./FilterItems/FilterItems";
import { ClearCompleted } from "./ClearCompleted/ClearCompleted";

interface BottomPanelProps {
  todos: Todo[];
  changeFilter: (filter: Filter) => void;
  clearCompleted: () => void;
  filter: Filter;
}

export const BottomPanel: React.FC<BottomPanelProps> = ({
  todos,
  changeFilter,
  clearCompleted,
  filter,
}) => {
  return (
    <div className={styles.container}>
      <QuantityItems todos={todos} />
      <FilterItems changeFilter={changeFilter} filter={filter} />
      <ClearCompleted clearCompleted={clearCompleted} />
    </div>
  );
};
