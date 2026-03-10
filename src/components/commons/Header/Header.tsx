import Button from "@components/Button";
import { type KeyboardEvent, useState } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {
  onAddTodo: (text: string) => void;
}

const Header = ({ onAddTodo }: HeaderProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (press: KeyboardEvent<HTMLInputElement>) => {
    if (press.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <header className={styles.header}>
      <h1>ToDoList</h1>
      <input
        value={inputValue}
        className={styles.input}
        type="text"
        placeholder="Введите задачу"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button text="Добавить задачу" onClick={handleAdd} />
    </header>
  );
};

export default Header;
