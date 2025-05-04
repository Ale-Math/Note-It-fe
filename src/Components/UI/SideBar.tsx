import { useState } from "react";
import { Button } from "./Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { DropArrow } from "../Icons/DownArrow";
import { useFindName } from "../../Hooks/useFindName";
import { Initial } from "../Icons/Initial";
import { Logout } from "../Icons/Logout";

interface SideBarProps {
  toggle: () => void;
}

export function SideBar(props: SideBarProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const name = useFindName();

  return (
    <div className="w-2/5 md:w-1/5 bg-orange-50">
      <div className="p-4 flex space-x-2 items-center">
        <div>
          <Button
            variant="secondary"
            size="sm"
            icon={<Initial />}
            space="&nbsp;&nbsp;"
            text={name}
            spacePost="&nbsp;"
            postIcon={<DropArrow />}
            decoration="flex items-center relative"
            onClick={handleOpen}
          ></Button>
          {open ? (
            <div className="absolute bg-slate-50 shadow-lg md:w-2/12 w-3/12 rounded-xl p-2 flex justify-center">
              <div className="w-full">
                <Button
                  variant="footer"
                  size="sm"
                  icon={<Logout />}
                  space="&nbsp;"
                  text="Log out"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                  decoration="rounded-lg w-full flex justify-center hover:bg-orange-100"
                ></Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
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
