import { useState } from "react";
import { Button } from "./Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { DropArrow } from "../Icons/DownArrow";
import { useFindName } from "../../Hooks/useFindName";
import { Initial } from "../Icons/Initial";
import { Logout } from "../Icons/Logout";
import { Completed } from "../Icons/Completed";
import { ShareIcon } from "../Icons/ShareIcon";

interface SideBarProps {
  toggle: () => void;
}

export function SideBar(props: SideBarProps) {
  const [open, setOpen] = useState(false);
  const logoutCard = () => {
    setOpen(!open);
  };

  const name = useFindName();

  return (
    <div className="w-2/5 md:w-1/4 bg-orange-50 border-r h-screen sticky top-0 ">
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
            onClick={logoutCard}
          ></Button>
          {open ? (
            <div className="absolute bg-slate-50 border border-orange-300 shadow-lg w-3/5 rounded-lg p-1 flex justify-center">
              <div className="w-full">
                <Button
                  variant="footer"
                  size="sm"
                  icon={<Logout />}
                  space="&nbsp;"
                  text="Log out"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/loginloader";
                  }}
                  decoration="rounded-lg w-full flex justify-center hover:bg-orange-100"
                ></Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div></div>
      </div>
      <div className="p-2 hover:bg-orange-100 group w-full">
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
      <div className="p-2 hover:bg-orange-100 group w-full mt-3">
        <Button
          variant="footer"
          size="sm"
          text="Completed tasks"
          onClick={() => {}}
          icon={<Completed />}
          space="&nbsp;"
          width="w-4/5"
          decoration="text-gray-600 w-full "
        ></Button>
      </div>
      <div className="border mt-10 mb-3"></div>
      <div className="p-2 hover:bg-orange-100 group w-full">
        <Button
          variant="footer"
          size="sm"
          text="Shared tasks"
          onClick={() => {}}
          icon={<ShareIcon />}
          space="&nbsp;"
          width="w-4/5"
          decoration="text-gray-600 w-full "
        ></Button>
      </div>
    </div>
  );
}
