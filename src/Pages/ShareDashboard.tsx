import { useState } from "react";
import { SideBar } from "../Components/UI/SideBar";
import { TodoDisplay } from "../Components/UI/TodoDisplay";
import { PageNotFound } from "./PageNotFound";
import { useCompletedTodos } from "../Hooks/useCompletedTodos";
import { Loading } from "../Components/UI/Loading";

export function ShareDashboard() {
  const [loadTodos, setLoadTodos] = useState(false);

  const todo = useCompletedTodos(loadTodos);
  const length = todo.length;
  const token = localStorage.getItem("token");

  return (
    <div>
      {token ? (
        <div className="lg:max-w-screen md:max-w-5xl sm:max-w-3xl max-w-xl  font-mono ">
          <div className="flex">
            <SideBar disabled={true} sharedFocus="bg-orange-100"></SideBar>
            <div className="w-4/5 md:p-20 p-10 space-y-5">
              <p className="md:text-2xl text-xl font-bold">Your Shared Tasks</p>
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
                    image="/NoCompleted.png"
                    title="Nothing to show here "
                    message="You don't have any completed tasks yet!"
                  />
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
