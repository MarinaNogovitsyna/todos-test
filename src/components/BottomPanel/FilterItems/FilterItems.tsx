import React from "react";
import { Filter } from "../../../types";
import styles from "./FilterItems.module.css";

interface FilterItemsProps {
  changeFilter: (filter: Filter) => void;
  filter: Filter;
}

export const FilterItems: React.FC<FilterItemsProps> = ({
  changeFilter,
  filter,
}) => {
  const getStyles = (filterName: Filter) => {
    if (filterName === filter) {
      return `${styles.active_filter} ${styles.filter}`;
    }
    return styles.filter;
  };

  const onClick = (filter: Filter) => {
    changeFilter(filter);
  };

  return (
    <div className={styles.container}>
      <div className={getStyles("all")} onClick={() => onClick("all")}>
        All
      </div>
      <div className={getStyles("active")} onClick={() => onClick("active")}>
        Active
      </div>
      <div
        className={getStyles("completed")}
        onClick={() => onClick("completed")}
      >
        Completed
      </div>
    </div>
  );
};
