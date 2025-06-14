import axios from "axios";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "./Button";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon";

interface TodoProps {
  todo: string;
  description: string;
  setLoadTodos: Dispatch<SetStateAction<boolean>>;
  loadTodos: boolean;
  done: boolean;
}

export function TodoDisplay(props: TodoProps) {
  const [editArea, setEditArea] = useState(false);
  const newTodoRef = useRef<HTMLInputElement>(null);
  const newDescriptionRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isDone, setIsDone] = useState(false);

  function toggleEdit() {
    setEditArea(!editArea);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  async function markDone(todo: string) {
    setIsDone(!isDone);
    const getData = localStorage.getItem("token") as "";

    await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/tododone/${todo}`,
      {
        done: isDone,
      },
      {
        headers: {
          authorization: getData,
        },
      }
    );
    props.setLoadTodos(!props.loadTodos);
  }

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

  async function editTodo(todo: string) {
    const getData = localStorage.getItem("token") as "";

    const newTodo = newTodoRef.current?.value.trim();
    const newDescription = newDescriptionRef.current?.value.trim();

    await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/updatetodo/${todo}`,
      {
        todo: newTodo,
        description: newDescription,
      },
      {
        headers: {
          authorization: getData,
        },
      }
    );
    props.setLoadTodos(!props.loadTodos);
    setEditArea(!editArea);
  }

  return (
    <div className="border-b flex justify-between  py-3 group items-center">
      <div className="flex space-x-2 items-center w-full">
        {!editArea && (
          <input
            type="checkbox"
            checked={props.done}
            onChange={() => markDone(props.todo)}
            onClick={() => markDone(props.todo)}
            className="w-4 h-4"
          ></input>
        )}
        {!editArea ? (
          <div>
            <p className="text-gray-600 text-xs md:text-sm">{props.todo}</p>
            <p className="text-gray-600 text-xs">{props.description}</p>
          </div>
        ) : (
          <div className="flex flex-col w-full ">
            <input
              ref={newTodoRef}
              placeholder="Title"
              autoFocus
              type="text"
              defaultValue={props.todo}
              className="text-gray-600 text-xs md:text-sm outline-none w-full"
              onChange={handleInputChange}
            ></input>
            <input
              ref={newDescriptionRef}
              placeholder="Description"
              type="text"
              defaultValue={props.description}
              className="text-gray-600 text-xs outline-none"
              onChange={handleInputChange}
            ></input>
          </div>
        )}
      </div>
      {!editArea ? (
        <div className="hidden group-hover:flex space-x-2 ">
          <Button
            icon={<EditIcon />}
            variant="secondary"
            size="sm"
            onClick={toggleEdit}
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
      ) : (
        <div className="flex space-x-2 ">
          <Button
            disabled={!inputValue}
            text="Save"
            variant="tertiary"
            size="xl2"
            onClick={() => editTodo(props.todo)}
            decoration="text-xs p-2 disabled:cursor-not-allowed disabled:bg-orange-50 disabled:text-gray-400 disabled:hover:bg-orange-50"
          ></Button>

          <Button
            text="Cancel"
            variant="tertiary"
            size="xl2"
            onClick={toggleEdit}
            decoration="text-xs p-2"
          ></Button>
        </div>
      )}
    </div>
  );
}
