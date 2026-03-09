import type { ToDo } from "@/types/todo";

import styles from "./ToDoForm.module.scss";
import ToDoItem from "./ToDoItem/ToDoItem";

interface ToDoFormProps {
  todos: ToDo[];
  onDeleteTodo: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
  toggle: (id: number) => void;
}

const ToDoForm = ({ todos, onDeleteTodo, onEdit, toggle }: ToDoFormProps) => {
  return (
    <main className={styles.form}>
      <ul className={styles.form__lists}>
        {todos.length === 0 ? (
          <li>Здесь пока пусто</li>
        ) : (
          todos.map((task) => (
            <ToDoItem
              onDelete={() => onDeleteTodo(task.id)}
              onSwitch={() => toggle(task.id)}
              completed={task.completed}
              id={task.id}
              key={task.id}
              text={task.text}
              onEdit={onEdit}
            />
          ))
        )}
      </ul>
    </main>
  );
};

export default ToDoForm;
