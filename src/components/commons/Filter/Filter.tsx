import clsx from "clsx";
import type { FilterStatus } from "@/types/todo";
import Button from "../Button";
import { filterData } from "./constans/filterData";

import styles from "./Filter.module.scss";

interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: FilterStatus) => void;
}

const Filter = ({ currentFilter, onFilterChange }: FilterProps) => {
  return (
    <ul className={styles.filter}>
      {filterData.map((link) => (
        <li key={link.id}>
          <Button
            id={link.id}
            text={link.text}
            variant="buttonFilter"
            className={clsx({ [styles.selected]: currentFilter === link.id })}
            onClick={() => onFilterChange(link.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Filter;
