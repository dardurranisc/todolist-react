import styles from "./Count.module.scss";

interface CountProps {
  count: number;
}

const Count = ({ count }: CountProps) => {
  return <span className={styles.count}>{`${count} : items left`}</span>;
};

export default Count;
