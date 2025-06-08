import { useState } from "react";
import { PlusIcon } from "../Components/Icons/PlusIcon";
import { Button } from "../Components/UI/Button";
import { TodoCard } from "../Components/UI/TodoCard";
import { SideBar } from "../Components/UI/SideBar";
import { TodoDisplay } from "../Components/UI/TodoDisplay";
import { useTodo } from "../Hooks/useTodo";
import { PageNotFound } from "./PageNotFound";
import { Loading } from "../Components/UI/Loading";

export function Dashboard() {
  const [showCard, setShowCard] = useState(false);
  const [loadTodos, setLoadTodos] = useState(false);

  const todo = useTodo(loadTodos);
  const length = todo.length;

  const cardToggle = () => {
    setShowCard(!showCard);
  };

  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <div className="lg:max-w-screen md:max-w-5xl sm:max-w-3xl max-w-xl  font-mono ">
          <div className="flex">
            <SideBar toggle={cardToggle} pendingFocus="bg-orange-100"></SideBar>
            <div className="w-4/5 md:p-20 p-10 space-y-5">
              <p className="md:text-2xl text-xl font-bold">
                What do you want to do today?
              </p>
              <div className="border"></div>

              <div>
                {length ? (
                  <p className="text-start text-xs text-gray-600">
                    Double-click on the checkbox to complete task.
                  </p>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                {length ? (
                  <div className="w-full">
                    {todo.map(({ todo, description, done, _id }) => (
                      <TodoDisplay
                        key={_id}
                        setLoadTodos={setLoadTodos}
                        loadTodos={loadTodos}
                        todo={todo}
                        done={done}
                        description={description}
                      ></TodoDisplay>
                    ))}
                  </div>
                ) : (
                  <Loading
                    image="/Peace.png"
                    title="Your peace of mind is priceless "
                    message="No tasks to show here."
                    showCard={showCard}
                  />
                )}
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
                {showCard && (
                  <TodoCard
                    setLoadTodos={setLoadTodos}
                    loadTodos={loadTodos}
                    toggle={cardToggle}
                  ></TodoCard>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}
