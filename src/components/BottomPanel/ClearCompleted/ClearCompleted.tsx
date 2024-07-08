import React from "react";
import styles from "./ClearCompleted.module.css";

interface ClearCompletedProps {
  clearCompleted: () => void;
}

export const ClearCompleted: React.FC<ClearCompletedProps> = ({
  clearCompleted,
}) => {
  return (
    <div onClick={clearCompleted} className={styles.clear}>
      Clear completed
    </div>
  );
};

export default ClearCompleted;