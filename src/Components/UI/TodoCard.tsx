import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

interface TodoCardProps {
  toggle: () => void;
  setLoadTodos: Dispatch<SetStateAction<boolean>>;
  loadTodos: boolean;
}

export function TodoCard(props: TodoCardProps) {
  const taskRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const addTaskRef = useRef<HTMLButtonElement>(null);
  const [inputValue, setInputValue] = useState(false);

  const handleInputChange = () => {
    setInputValue(true);
  };

  async function addTodo() {
    const data = localStorage.getItem("token");
    const todo = taskRef.current?.value;
    const description = descriptionRef.current?.value;

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/todo`,
        {
          todo,
          description,
        },
        {
          headers: {
            authorization: data,
          },
        }
      );
      if (taskRef.current !== null) {
        taskRef.current.value = "";
      }
      if (descriptionRef.current !== null) {
        descriptionRef.current.value = "";
      }
      props.setLoadTodos(!props.loadTodos);
      setInputValue(false);
      if (taskRef.current !== null) {
        taskRef.current.focus();
      }
    } catch (e) {
      console.log(e);
    }
  }

  const enterKeyPressed = (event: any) => {
    if (event.keyCode === 13) {
      addTaskRef?.current?.click();
    }
  };

  return (
    <div className="flex ">
      <div className="w-full border rounded-xl h-32 focus-within:border-gray-600">
        <div className="flex-col flex p-4 space-y-1">
          <input
            ref={taskRef}
            autoFocus
            className=" md:text-sm text-xs font-semibold outline-none "
            placeholder="Task name"
            type="text"
            onChange={handleInputChange}
            onKeyDown={enterKeyPressed}
          ></input>
          <input
            ref={descriptionRef}
            className="  md:text-sm text-xs outline-none"
            placeholder="Description"
            type="text"
            onKeyDown={enterKeyPressed}
          ></input>
        </div>
        <div className="border-t flex justify-end space-x-2 p-3">
          <Button
            variant="tertiary"
            text="Cancel"
            size="xl2"
            onClick={props.toggle}
            decoration="text-xs p-2"
          />
          <Button
            disabled={!inputValue}
            variant="primary"
            text="Add task"
            size="xl2"
            onClick={addTodo}
            decoration="text-xs disabled:cursor-not-allowed disabled:bg-orange-200"
            reference={addTaskRef}
          />
        </div>
      </div>
    </div>
  );
}
