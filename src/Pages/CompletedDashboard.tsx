import { useState } from "react";
import { SideBar } from "../Components/UI/SideBar";
import { TodoDisplay } from "../Components/UI/TodoDisplay";
import { PageNotFound } from "./PageNotFound";
import { useCompletedTodos } from "../Hooks/useCompletedTodos";
import { useFindName } from "../Hooks/useFindName";

export function CompletedDashboard() {
  const [loadTodos, setLoadTodos] = useState(false);

  const todo = useCompletedTodos(loadTodos);
  const length = todo.length;
  const token = localStorage.getItem("token");
  const name = useFindName();

  return (
    <div>
      {token ? (
        <div className="lg:max-w-screen md:max-w-5xl sm:max-w-3xl max-w-xl  font-mono ">
          <div className="flex">
            <SideBar disabled={true}></SideBar>
            <div className="w-4/5 md:p-20 p-10 space-y-5">
              <p className="md:text-2xl text-xl font-bold">
                Your Completed Tasks:
              </p>
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
                  <div className="ml-20 mt-20 flex flex-col items-center w-4/5">
                    <img className="w-2/5 pb-3" src="/NoCompleted.png"></img>
                    <p className="text-sm  text-center">
                      Nothing to show here.
                    </p>
                    <p className="text-xs text-gray-600 text-center">
                      You don't have any completed tasks yet {name}!
                    </p>
                  </div>
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
