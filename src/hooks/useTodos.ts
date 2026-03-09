import { useMemo, useState } from "react";
import type { ToDo } from "@/types/todo";
import useLocalStorageTodo from "./useLocalStorageTodo";

const useTodos = () => {
  const [todos, setTodos] = useLocalStorageTodo<ToDo[]>("todos", []);
  const [filterStatus, setFilterStatus] = useState("all");

  const addTask = (value: string) => {
    const newTask: ToDo = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTask]);
  };

  const deleteTask = (id: number) => {
    setTodos((deleted) => deleted.filter((todo) => todo.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const toggleCheckbox = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const activeCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  const filteredTasks = useMemo(() => {
    return todos.filter((todo) => {
      if (filterStatus === "active") {
        return !todo.completed;
      } else if (filterStatus === "completed") {
        return todo.completed;
      } else {
        return true;
      }
    });
  }, [todos, filterStatus]);

  const selectAll = () => {
    setTodos((prev) => {
      const allCompleted = prev.every((todo) => todo.completed);
      return prev.map((todo) => ({ ...todo, completed: !allCompleted }));
    });
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    setTodos,
    filterStatus,
    setFilterStatus,
    activeCount,
    addTask,
    deleteTask,
    editTask,
    toggleCheckbox,
    filteredTasks,
    selectAll,
    clearCompleted,
  };
};

export default useTodos;
