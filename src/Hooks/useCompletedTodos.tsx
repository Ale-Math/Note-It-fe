import { useEffect, useState } from "react";
import axios from "axios";

export function useCompletedTodos(loadTodos: boolean) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/donetodos`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        setTodos(response.data.allTodos);
      });
  }, [loadTodos]);

  return todos;
}
