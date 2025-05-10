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
  const newTodoRef = useRef("");
  const newDescriptionRef = useRef("");

  function toggleEdit() {
    setEditArea(!editArea);
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

  async function editTodo(todo: any) {
    const getData = localStorage.getItem("token") as "";
    // @ts-ignore

    const newTodo = newTodoRef.current?.value;
    // @ts-ignore

    const newDescription = newDescriptionRef.current.value;

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
      <div className="flex space-x-2 items-center w-5/6">
        {!editArea && (
          <input type="checkbox" onClick={() => {}} className="w-4 h-4"></input>
        )}
        {!editArea ? (
          <div>
            <p className="text-gray-600 text-xs md:text-sm">{props.todo}</p>
            <p className="text-gray-600 text-xs">{props.description}</p>
          </div>
        ) : (
          <div className="flex flex-col w-full ">
            <input
              // @ts-ignore

              ref={newTodoRef}
              autoFocus
              type="text"
              defaultValue={props.todo}
              className="text-gray-600 text-xs md:text-sm outline-none w-full"
            ></input>
            <input
              // @ts-ignore

              ref={newDescriptionRef}
              type="text"
              defaultValue={props.description}
              className="text-gray-600 text-xs outline-none"
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
        <div className="space-x-2 ">
          <Button
            text="Save"
            variant="tertiary"
            size="xl2"
            onClick={() => editTodo(props.todo)}
            decoration="text-xs p-2"
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
