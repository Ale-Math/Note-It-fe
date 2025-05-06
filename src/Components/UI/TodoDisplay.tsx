import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon";

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
    <div className="border-b flex justify-between  py-2 group items-center">
      <div className="flex space-x-2 items-center">
        <input type="checkbox" onClick={() => {}} className="w-4 h-4"></input>
        <div>
          <p className="text-gray-600 text-sm">{props.todo}</p>
          <p className="text-gray-600 text-xs">{props.description}</p>
        </div>
      </div>
      <div className="hidden group-hover:block space-x-2">
        <Button
          icon={<EditIcon />}
          variant="secondary"
          size="sm"
          onClick={() => {}}
          decoration="text-gray-600"
        ></Button>
        <Button
          icon={<DeleteIcon />}
          variant="secondary"
          size="sm"
          onClick={() => deleteTodo(props.todo)}
          decoration="text-gray-600"
        ></Button>
      </div>
    </div>
  );
}
