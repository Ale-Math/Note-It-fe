import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { PlusIcon } from "../Icons/PlusIcon";

interface SideBarProps {
  toggle: () => void;
}

export function SideBar(props: SideBarProps) {
  const [name, setName] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/userdetails`, {
        headers: {
          authorization: data,
        },
      })
      .then((response) => {
        setName(response.data.data[0].name);
      });
  }, []);

  const initial = name.charAt(0);

  return (
    <div className="w-1/5 bg-orange-50">
      <div className="p-4 flex space-x-2 items-center">
        <p className="bg-orange-400 text-white font-bold md:w-7 md:h-7 w-5 h-5 md:pt-1 text-center rounded-full md:text-sm text-xs">
          {initial}
        </p>
        <p>{name}</p>
      </div>
      <div className="m-4 hover:bg-orange-100 group">
        <Button
          variant="footer"
          size="sm"
          text="Add task"
          onClick={props.toggle}
          icon={<PlusIcon />}
          space="&nbsp;"
          width="w-4/5"
          decoration="text-gray-600 w-full "
        ></Button>
      </div>
      <div className="border-t mt-10 p-4">
        <Button
          variant="footer"
          size="sm"
          text="My Projects"
          onClick={() => {}}
          decoration="text-gray-600 w-full flex hover:bg-orange-100"
        ></Button>
      </div>
    </div>
  );
}
