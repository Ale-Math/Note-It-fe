import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface TodoProps {
  todo: string;
  description: string;
  setLoadTodos: Dispatch<SetStateAction<boolean>>;
  loadTodos: boolean;
}

export function TodoDisplay(props: TodoProps) {
  async function deleteTodo(todo: string) {
    const getData = localStorage.getItem("token") as "";

    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/todo/${todo}`,
      {
        headers: {
          authorization: getData,
        },
      }
    );
    props.setLoadTodos(!props.loadTodos);
  }

  return (
    <div className="border-b flex space-x-2 items-center py-2">
      <input
        type="radio"
        onClick={() => deleteTodo(props.todo)}
        className="w-4 h-4"
      ></input>
      <div>
        <p className="text-gray-600 text-sm">{props.todo}</p>
        <p className="text-gray-600 text-xs">{props.description}</p>
      </div>
    </div>
  );
}
