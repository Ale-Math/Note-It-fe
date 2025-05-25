import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

interface TodoCardProps {
  toggle: () => void;
  setLoadTodos: Dispatch<SetStateAction<boolean>>;
  loadTodos: boolean;
}

export function TodoCard(props: TodoCardProps) {
  const taskRef = useRef("");
  const descriptionRef = useRef("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  async function addTodo() {
    const data = localStorage.getItem("token");
    // @ts-ignore
    const todo = taskRef.current?.value;
    // @ts-ignore
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
      // @ts-ignore
      taskRef.current.value = "";
      // @ts-ignore
      descriptionRef.current.value = "";
      props.setLoadTodos(!props.loadTodos);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex ">
      <div className="w-full border rounded-xl h-32 focus-within:border-gray-600">
        <div className="flex-col flex p-4 space-y-1">
          <input
            // @ts-ignore
            ref={taskRef}
            autoFocus
            className=" md:text-sm text-xs font-semibold outline-none "
            placeholder="Task name"
            type="text"
            onChange={handleInputChange}
          ></input>
          <input
            // @ts-ignore
            ref={descriptionRef}
            className="  md:text-sm text-xs outline-none"
            placeholder="Description"
            type="text"
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
          />
        </div>
      </div>
    </div>
  );
}
