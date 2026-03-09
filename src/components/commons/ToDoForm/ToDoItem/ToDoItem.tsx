import Button from "@components/Button";
import clsx from "clsx";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";

import styles from "./ToDoItem.module.scss";

interface ToDoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: () => void;
  onSwitch: () => void;
  onEdit: (id: number, newText: string) => void;
}

const ToDoItem = ({
  id,
  text,
  completed,
  onDelete,
  onEdit,
  onSwitch,
}: ToDoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(text);
  };

  const handleSave = () => {
    const trim = editText.trim();
    if (trim) {
      onEdit(id, trim);
    } else {
      onDelete();
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  return (
    <li className={styles.form__list}>
      <input checked={completed} onChange={onSwitch} type="checkbox" />
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span
          className={clsx({ [styles.completed]: completed })}
          onDoubleClick={handleDoubleClick}
        >
          {text}
        </span>
      )}
      <Button text="Удалить" onClick={onDelete}></Button>
    </li>
  );
};

export default ToDoItem;
