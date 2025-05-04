import { useEffect, useState } from "react";
import axios from "axios";

export function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/todos`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        setTodos(response.data.allTodos);
      });
  }, []);

  return todos;
}
