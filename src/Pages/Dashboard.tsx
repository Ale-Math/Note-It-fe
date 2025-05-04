import { useState } from "react";
import { PlusIcon } from "../Components/Icons/PlusIcon";
import { Button } from "../Components/UI/Button";
import { TodoCard } from "../Components/UI/TodoCard";
import { SideBar } from "../Components/UI/SideBar";
import { useTodo } from "../Hooks/useTodo";
import { TodoDisplay } from "../Components/UI/TodoDisplay";

export function Dashboard() {
  const [showCard, setShowCard] = useState(false);
  const todo = useTodo();

  const cardToggle = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="lg:max-w-7xl md:max-w-5xl sm:max-w-3xl max-w-xl min-h-full h-screen bg-slate-50 font-mono">
      <div className="flex">
        <SideBar toggle={cardToggle}></SideBar>
        <div className="w-4/5 md:p-20 p-10 space-y-5">
          <p className="md:text-2xl text-xl font-bold">
            What do you want to do today?
          </p>
          <div className="w-4/5">
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
            <TodoDisplay></TodoDisplay>
          </div>
          <div>
            {!showCard && (
              <Button
                variant="footer"
                size="sm"
                text="Add task"
                onClick={cardToggle}
                icon={<PlusIcon />}
                space="&nbsp;"
                width="md:w-4/5 w-full"
                decoration="text-gray-600 group"
              ></Button>
            )}
            {showCard && <TodoCard toggle={cardToggle}></TodoCard>}
          </div>
        </div>
      </div>
    </div>
  );
}
