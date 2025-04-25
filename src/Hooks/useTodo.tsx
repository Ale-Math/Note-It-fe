import { useEffect, useState } from "react";
import axios from "axios";

export function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${process.env.BACKEND_URL}/api/v1/todo`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        setTodos(response.data.foundTodo);
      });
  }, []);

  return todos;
}
