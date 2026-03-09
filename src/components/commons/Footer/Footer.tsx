import Button from "@components/Button";
import Count from "@components/Count/Count";
import Filter from "@components/Filter";

import styles from "./Footer.module.scss";

interface FooterProps {
  filterStatus: string;
  activeCount: number;
  onFilterChange: (status: string) => void;
  selectAll: () => void;
  clearCompleted: () => void;
}

const Footer = ({
  filterStatus,
  activeCount,
  onFilterChange,
  selectAll,
  clearCompleted,
}: FooterProps) => {
  return (
    <footer className={styles.footer} id="footer">
      <Count count={activeCount} />
      <Filter currentFilter={filterStatus} onFilterChange={onFilterChange} />
      <Button text="Выбрать все" onClick={selectAll} />
      <Button text="Удалить выполненные" onClick={clearCompleted} />
    </footer>
  );
};

export default Footer;
