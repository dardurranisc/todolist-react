import clsx from "clsx";

import { filterData } from "./constans/filterData";

import styles from "./Filter.module.scss";

interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filter = ({ currentFilter, onFilterChange }: FilterProps) => {
  return (
    <ul className={styles.filter}>
      {filterData.map((link) => (
        <li className={styles.filter__link} key={link.id}>
          <a
            href={link.href}
            id={link.id}
            className={clsx({ [styles.selected]: currentFilter === link.id })}
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(link.id);
            }}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
