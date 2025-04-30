import { useState } from "react";
import { PlusIcon } from "../Components/Icons/PlusIcon";
import { Button } from "../Components/UI/Button";
import { TodoCard } from "../Components/UI/TodoCard";

export function Dashboard() {
  const [showCard, setShowCard] = useState(false);

  const cardToggle = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/5 bg-orange-50"></div>
      <div className="w-4/5 bg-slate-50 p-20 space-y-5">
        <p className="text-2xl font-bold">To-Do's</p>
        <div className="">
          {!showCard && (
            <Button
              variant="footer"
              size="sm"
              text="Add task"
              onClick={cardToggle}
              icon={<PlusIcon />}
              space="&nbsp;"
              width="w-4/5"
              decoration="text-gray-600"
            ></Button>
          )}
          {showCard && <TodoCard toggle={cardToggle}></TodoCard>}
        </div>
      </div>
    </div>
  );
}
