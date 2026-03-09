import { useEffect, useState } from "react";

const useLocalStorageTodo = <T>(key: string, initialValue: T) => {
  const [storied, setStoried] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const tasks = localStorage.getItem(key);
      if (tasks) {
        setStoried(JSON.parse(tasks));
      }
    } catch (error) {
      console.log("Ошибка чтения LocalStorage", error);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storied));
  }, [key, storied]);

  return [storied, setStoried] as const;
};

export default useLocalStorageTodo;
